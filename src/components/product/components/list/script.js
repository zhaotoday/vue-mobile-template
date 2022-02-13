import { useCart } from "@/composables/use-cart";

export default {
  props: {
    items: Array,
    col: {
      type: Number,
      default: 2,
    },
  },
  setup() {
    const cart = useCart();

    cart.showNumber();
  },
};
