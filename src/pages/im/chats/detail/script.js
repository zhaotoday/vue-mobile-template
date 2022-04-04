import { onShow, onUnload } from "uni-composition-api";
import wx from "wx-bridge";
import { useRoute } from "vue-mobile/composables/use-route";
import { useChat } from "@/components/chat/composables/use-chat";
import { ref } from "@vue/composition-api";
import { useHelpers } from "@/composables/use-helpers";
import { WxUsersApi } from "@/apis/wx/wx-users";
import { ChatFriendsApi } from "@/apis/wx/chat-friends";
import { ClassesApi } from "@/apis/wx/classes";
import { PublicProductsApi } from "@/apis/public/products";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const {
      ws,
      markChatRead,
      getMessages,
      formatMessages,
      createChat,
      createMessage,
    } = useChat();

    const chatId = ref(0);

    const items = ref([]);

    const lastViewId = ref("");

    const onCreateChat = (data) => {
      chatId.value = data.chatId;

      getMessages({
        chatId: chatId.value,
        toUserId: currentRoute.query.toUserId,
      });
      markChatRead({ chatId: chatId.value });
    };

    const onGetMessages = async (data) => {
      items.value = formatMessages(data);

      await useHelpers().sleep(100);

      if (data.length) {
        lastViewId.value = `message-${data[data.length - 1].id}`;
      }
    };

    const onNewMessage = () => {
      getMessages({
        chatId: chatId.value,
        toUserId: currentRoute.query.toUserId,
      });
      markChatRead({ chatId: chatId.value });
    };

    onShow(async () => {
      const { chatType, toUserId } = currentRoute.query;

      switch (chatType) {
        case "OneToOne": {
          const { nickName: toUserName } = await new WxUsersApi().get({
            id: toUserId,
          });
          const { alias } = await new ChatFriendsApi().post({
            action: "getAlias",
            body: {
              friendUserId: toUserId,
            },
          });

          wx.setNavigationBarTitle({ title: alias || toUserName });

          break;
        }

        case "Class": {
          const { name } = await new ClassesApi().get({ id: toUserId });

          wx.setNavigationBarTitle({ title: name });

          break;
        }

        case "Product": {
          const { name } = await new PublicProductsApi().get({ id: toUserId });

          wx.setNavigationBarTitle({ title: name });

          break;
        }

        default:
          break;
      }

      ws.on(ws.events.createChat, onCreateChat);
      ws.on(ws.events.getMessages, onGetMessages);
      ws.on(ws.events.newMessage, onNewMessage);

      ws.ready(() => {
        createChat({ type: chatType, toUserId });
      });
    });

    onUnload(() => {
      ws.off(ws.events.createChat, onCreateChat);
      ws.off(ws.events.getMessages, onGetMessages);
      ws.off(ws.events.newMessage, onNewMessage);
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

      getMessages({ toUserId });
    };

    return {
      items,
      lastViewId,
      sendMessage,
      onMessageRetractOk,
    };
  },
};
