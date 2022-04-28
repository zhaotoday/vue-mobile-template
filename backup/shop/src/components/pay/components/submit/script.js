import { useCart } from "uni-shop/composables/use-cart";
import { useProducts } from "uni-shop/composables/use-products";

export default {
  emits: ["submit"],
  setup() {
    const { selectedProducts } = useCart();
    const { getTotalPrice } = useProducts();

    return {
      selectedProducts,
      getTotalPrice,
    };
  },
};
