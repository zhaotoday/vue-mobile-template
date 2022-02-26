import { useCart } from "@/composables/use-cart";

export default {
  setup() {
    const { productsCount } = useCart();

    return {
      productsCount,
    };
  },
};
