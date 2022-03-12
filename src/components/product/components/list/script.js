import { useCart } from "@/composables/use-cart";
import { useI18n } from "vue-mobile/composables/use-i18n";

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
    editable: {
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
  emits: ["del"],
  setup() {
    const { getLocale } = useI18n();

    const { selectProduct } = useCart();

    return {
      selectProduct,
      getLocale,
    };
  },
};
