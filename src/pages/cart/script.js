import { useCart } from "uni-shop/composables/use-cart";
import { onShow } from "uni-composition-api";

export default {
  setup() {
    const { products } = useCart();

    onShow(() => {
      useCart().renderProductsNumber();
    });

    return {
      products,
    };
  },
};
