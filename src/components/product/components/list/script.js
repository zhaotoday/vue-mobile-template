import { useCart } from "@/composables/use-cart";
import { onMounted } from "@vue/composition-api";

export default {
  props: {
    customClass: [String, Object],
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
    const { showNumber } = useCart();

    onMounted(() => {
      showNumber();
    });

    return {};
  },
};
