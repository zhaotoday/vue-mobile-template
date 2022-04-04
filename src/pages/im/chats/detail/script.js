import ChatMessages from "@/components/chat/messages";
import { onShow } from "uni-composition-api";
import { useCurrentRoute } from "vue-mobile/composables/use-current-route";
import { MessagesApi } from "@/apis/wx/messages";
import { ref } from "@vue/composition-api";
import { useChat } from "@/components/chat/composables/use-chat";
import { useHelpers } from "@/composables/use-helpers";
import wx from "wx-bridge";

export default {
  components: {
    "c-messages": ChatMessages,
  },
  setup() {
    const { currentRoute } = useCurrentRoute();

    const { formatMessages } = useChat();

    const list = ref({
      items: [],
    });

    const lastViewId = ref("");

    onShow(async () => {
      const { chatId, name } = currentRoute.query;

      wx.setNavigationBarTitle({ title: name });

      const { items } = await new MessagesApi().get({
        query: { chatId },
      });

      list.value = { items: formatMessages(items) };

      await useHelpers().sleep(100);

      if (items.length) {
        lastViewId.value = `message-${items[items.length - 1].id}`;
      }
    });

    return {
      list,
      lastViewId,
    };
  },
};
