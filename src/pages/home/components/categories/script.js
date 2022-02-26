import { useTabBar } from "vue-mobile/composables/use-tab-bar";

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { switchTab } = useTabBar();

    return {
      switchTab,
    };
  },
};
