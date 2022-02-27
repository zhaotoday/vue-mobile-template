import { useCart } from "@/composables/use-cart";
import Collection from "./components/collection/index.vue";

export default {
  components: {
    "cc-collection": Collection,
  },
  setup() {
    const { selectedProducts } = useCart();

    return {
      selectedProducts,
    };
  },
};
