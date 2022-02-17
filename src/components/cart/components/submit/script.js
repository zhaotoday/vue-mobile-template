import { useCart } from "@/composables/use-cart";

export default {
  setup() {
    const { products, totalPrice, selectAll } = useCart();

    return {
      products,
      totalPrice,
      selectAll,
    };
  },
};
