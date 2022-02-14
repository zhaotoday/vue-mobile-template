import { useCart } from "@/composables/use-cart";

export default {
  props: {
    items: Array,
    col: {
      type: Number,
      default: 2,
    },
    selectable: {
      type: Boolean,
      default: false,
    },
    editNumber: {
      type: Boolean,
      default: true,
    },
    showNumber: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const cart = useCart();

    cart.showNumber();
  },
};
