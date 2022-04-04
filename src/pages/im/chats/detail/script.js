import { onShow, onUnload } from "uni-composition-api";
import wx from "wx-bridge";
import { useRoute } from "vue-mobile/composables/use-route";
import { useIm } from "@/components/im/components/composables/use-im";
import { ref } from "@vue/composition-api";
import { useHelpers } from "@/composables/use-helpers";
import { usersApi } from "vue-mobile/@lr/apis/client/users";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const {
      ws,
      markChatRead,
      getMessagesOk,
      formatMessages,
      createChatOk,
      createMessage,
    } = useIm();

    const chatId = ref(0);

    const items = ref([]);

    const lastViewId = ref("");

    const onCreateChatOk = (data) => {
      chatId.value = data.chatId;

      getMessagesOk({
        chatId: chatId.value,
        toUserId: currentRoute.query.toUserId,
      });
      markChatRead({ chatId: chatId.value });
    };

    const onGetMessagesOk = async (data) => {
      items.value = formatMessages(data);

      await useHelpers().sleep(100);

      if (data.length) {
        lastViewId.value = `message-${data[data.length - 1].id}`;
      }
    };

    const onCreateMessageOk = () => {
      getMessagesOk({
        chatId: chatId.value,
        toUserId: currentRoute.query.toUserId,
      });
      markChatRead({ chatId: chatId.value });
    };

    onShow(async () => {
      const { chatType, toUserId } = currentRoute.query;

      switch (chatType) {
        case "OneToOne": {
          const { name, wxNickName } = await usersApi.get({
            id: toUserId,
          });

          wx.setNavigationBarTitle({ title: name || wxNickName });

          break;
        }

        default:
          break;
      }

      ws.on(ws.events.createChatOk, onCreateChatOk);
      ws.on(ws.events.getMessagesOk, onGetMessagesOk);
      ws.on(ws.events.createMessageOk, onCreateMessageOk);

      ws.ready(() => {
        createChatOk({ type: chatType, toUserId });
      });
    });

    onUnload(() => {
      ws.off(ws.events.createChatOk, onCreateChatOk);
      ws.off(ws.events.getMessagesOk, onGetMessagesOk);
      ws.off(ws.events.createMessageOk, onCreateMessageOk);
    });

    const sendMessage = ({ type, text, fileId }) => {
      createMessage({
        chatId: chatId.value,
        toUserId: currentRoute.query.toUserId,
        type,
        text,
        fileId,
      });
    };

    const onMessageRetractOk = () => {
      const { toUserId } = currentRoute.query;

      getMessagesOk({ toUserId });
    };

    return {
      items,
      lastViewId,
      sendMessage,
      onMessageRetractOk,
    };
  },
};
