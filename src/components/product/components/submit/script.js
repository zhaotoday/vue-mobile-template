import { useCart } from "@/composables/use-cart";
import Collection from "./components/collection/index.vue";

export default {
  components: {
    "cc-collection": Collection,
  },
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const { selectedProducts } = useCart();

    return {
      selectedProducts,
    };
  },
};
