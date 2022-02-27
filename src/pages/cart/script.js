import { useCart } from "@/composables/use-cart";

export default {
  setup() {
    const { products } = useCart();

    return {
      products,
    };
  },
};
