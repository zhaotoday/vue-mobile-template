import { onShow } from "uni-composition-api";
import { useTabBarBadge } from "@/composables/use-tab-bar-badge";
import { store } from "@/store";

export default {
  setup() {
    onShow(() => {
      useTabBarBadge().initialize();
    });
  },
  // app computed bug
  computed: {
    products() {
      return store.state.cart.products;
    },
  },
};
