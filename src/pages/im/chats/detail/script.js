import { onShow } from "uni-composition-api";
import { useCurrentRoute } from "vue-mobile/composables/use-current-route";
import { MessagesApi } from "@/apis/wx/messages";
import { ref } from "@vue/composition-api";
import { useIm } from "@/components/im/components/composables/use-im";
import { useHelpers } from "@/composables/use-helpers";
import wx from "wx-bridge";

export default {
  setup() {
    const { currentRoute } = useCurrentRoute();

    const { formatMessages } = useIm();

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
