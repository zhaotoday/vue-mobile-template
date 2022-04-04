import wx from "wx-bridge";
import { Ws } from "../utils/ws.class";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useConsts } from "@/composables/use-consts";
import { useHelpers } from "@/composables/use-helpers";

const { ApiUrl, WsUrl } = useConsts();

const ws = new Ws({ url: WsUrl });

export const useIm = () => {
  const { getImageUrl } = useHelpers();

  const { user } = useUsers();

  const initialize = () => {
    const timers = {};

    const innerAudioContext = uni.createInnerAudioContext();

    innerAudioContext.src = `${ApiUrl}/audios/message.mp3`;

    const heartbeat = {
      start() {
        ws.connected && ping();
        timers.pong = setTimeout(ws.reconnect.bind(ws), 3 * 1000);
        return this;
      },
      reset() {
        clearTimeout(timers.pong);
        return this;
      },
    };

    ws.ready(() => {
      getChats();

      clearInterval(timers.heartbeat);

      timers.heartbeat = setInterval(() => {
        heartbeat.reset().start();
      }, 5 * 1000);
    });

    ws.on(ws.events.ping, () => {
      heartbeat.reset();
    });

    ws.on(ws.events.error, () => {
      heartbeat.reset().reset();
    });

    ws.on(ws.events.close, () => {
      heartbeat.reset().start();
    });

    ws.on(ws.events.createMessageOk, ({ toUserId }) => {
      if (toUserId === user.value.id) {
        if (innerAudioContext.paused) {
          innerAudioContext.play();
        }
      }

      getChats();
    });

    ws.on(ws.events.getChats, (data) => {
      if (data && data.length) {
        const count = formatChats(data)
          .map(({ unreadMessageCount }) => unreadMessageCount || 0)
          .reduce((prev, current) => prev + current);

        if (count) {
          wx.setTabBarBadge({
            index: 1,
            text: count >= 100 ? "99+" : (count || "") + "",
          });
        } else {
          wx.removeTabBarBadge({ index: 1 });
        }
      } else {
        wx.removeTabBarBadge({ index: 1 });
      }
    });
  };

  const formatChats = (data) => {
    return data.map(({ id, type, user, lastMessage, unreadMessages }) => {
      return {
        id,
        type,
        userId: user.id,
        name: user.name,
        avatar:
          user.avatarUrl ||
          (user.avatarId
            ? getImageUrl({ id: user.avatarId, width: 80, height: 80 })
            : ""),
        message: (({ type, text, retracted }) => {
          if (retracted) {
            return "[撤回消息]";
          } else {
            switch (type) {
              case "Image":
                return "[图片消息]";

              case "Audio":
                return "[语音消息]";

              case "File":
                return "[文件消息]";

              default:
                return text;
            }
          }
        })(lastMessage),
        time: ws.formatTime(lastMessage.createdAt),
        unreadMessageCount: (unreadMessages.find(
          ({ userId }) => userId === user.value.id
        ) || {})["unreadMessageCount"],
      };
    });
  };

  const formatMessages = (data) => {
    return data.map(({ alias, fromUser, createdAt, ...rest }) => ({
      fromUser: {
        id: fromUser.id,
        avatar: fromUser.avatarUrl,
        username: alias || fromUser.nickName,
      },
      time: ws.formatTime(createdAt),
      ...rest,
    }));
  };

  const getFileUrl = (id) => {
    return `${ApiUrl}/public/messageFiles/${id}`;
  };

  const ping = () => {
    ws.send({
      event: ws.events.ping,
      data: {},
    });
  };

  const createChat = ({ type, toUserId }) => {
    ws.send({
      event: ws.events.createChat,
      data: { type, toUserId },
    });
  };

  const getChats = ({ type, toUserId } = {}) => {
    ws.send({
      event: ws.events.getChats,
      data: { type, toUserId },
    });
  };

  const markChatRead = ({ chatId }) => {
    ws.send({
      event: ws.events.markChatRead,
      data: { chatId },
    });
  };

  const createMessage = ({ chatId, toUserId, type, text, fileId }) => {
    ws.send({
      event: ws.events.createMessage,
      data: { chatId, toUserId, type, text, fileId },
    });
  };

  const getMessages = ({ chatId, toUserId }) => {
    ws.send({
      event: ws.events.getMessages,
      data: { chatId, toUserId },
    });
  };

  return {
    ws,
    initialize,
    formatChats,
    formatMessages,
    getFileUrl,
    createChat,
    getChats,
    markChatRead,
    createMessage,
    getMessages,
  };
};
