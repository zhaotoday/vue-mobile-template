import { useCart } from "uni-shop/composables/use-cart";
import { onShow } from "uni-composition-api";
import { useTabBarBadge } from "@/composables/use-tab-bar-badge";

export default {
  setup() {
    const { products } = useCart();

    onShow(() => {
      useTabBarBadge().initialize();
    });

    return {
      products,
    };
  },
};
