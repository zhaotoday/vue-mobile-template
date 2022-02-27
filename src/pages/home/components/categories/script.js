import { useTabBar } from "vue-mobile/composables/use-tab-bar";
import { usePageData } from "@/composables/use-page-data";

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { setPageData } = usePageData();

    const switchTabToCategory = (index) => {
      setPageData({
        page: "/pages/categories/index",
        data: { currentIndex: index },
      });
    };

    return {
      switchTabToCategory,
    };
  },
};
