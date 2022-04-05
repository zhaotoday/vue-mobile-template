import { useCart } from "uni-shop/composables/use-cart";
import { onShow } from "uni-composition-api";
import { useIm } from "@/components/im/components/composables/use-im";

export default {
  setup() {
    const { products } = useCart();

    onShow(() => {
      useCart().renderProductsNumber();
      useIm().getChats();
    });

    return {
      products,
    };
  },
};
