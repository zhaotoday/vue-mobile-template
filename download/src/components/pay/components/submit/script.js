import { useCart } from "@/composables/use-cart";
import { useProducts } from "@/composables/use-products";

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
