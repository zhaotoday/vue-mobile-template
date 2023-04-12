import wx from "wx-bridge";
import { onShow, onUnload } from "uni-composition-api";
import { useRoute } from "vue-mobile/composables/use-route";
import { useIm } from "uni-im/components/im/composables/use-im";
import { ref } from "@vue/composition-api";
import { useHelpers } from "@/composables/use-helpers";
import { useUsers } from "vue-mobile/@lr/composables/use-users";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const { user } = useUsers();

    const { ws, markChatRead, getMessages, createChat, createMessage } = useIm({
      user,
    });

    const chatId = ref(0);

    const items = ref([]);

    const lastViewId = ref("");

    const onCreateChatOk = (data) => {
      chatId.value = data.chatId;

      getMessages({
        chatId: chatId.value,
        toUserId: currentRoute.query.toUserId,
      });

      markChatRead({ chatId: chatId.value });
    };

    const onGetMessagesOk = async (data) => {
      items.value = data;

      await useHelpers().sleep(100);

      if (data.length) {
        lastViewId.value = `message-${data[data.length - 1].id}`;
      }
    };

    const onCreateMessageOk = () => {
      getMessages({
        chatId: chatId.value,
        toUserId: currentRoute.query.toUserId,
      });
      markChatRead({ chatId: chatId.value });
    };

    onShow(async () => {
      const { chatType, toUserId, toUserName } = currentRoute.query;

      await uni.setNavigationBarTitle({ title: toUserName });

      ws.on(ws.events.createChatOk, onCreateChatOk);
      ws.on(ws.events.getMessagesOk, onGetMessagesOk);
      ws.on(ws.events.createMessageOk, onCreateMessageOk);

      ws.ready(() => {
        createChat({ type: chatType, toUserId });
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
