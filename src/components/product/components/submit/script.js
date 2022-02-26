import { useCart } from "@/composables/use-cart";

export default {
  setup() {
    const { productsNumber } = useCart();

    return {
      productsNumber,
    };
  },
};
