import { useCart } from "@/composables/use-cart";

export default {
  props: {
    items: Array,
  },
  setup() {
    const cart = useCart();

    cart.showNumber();
  },
};
