import { useCart } from "@/composables/use-cart";

export default {
  setup() {
    const { selectedProducts } = useCart();

    return {
      selectedProducts,
    };
  },
};
