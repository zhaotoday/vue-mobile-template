import { useCart } from "@/composables/use-cart";

export default {
  setup() {
    const { products, totalPrice } = useCart();

    return {
      products,
      totalPrice,
    };
  },
};
