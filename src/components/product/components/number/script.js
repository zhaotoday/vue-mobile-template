import { ref } from "@vue/composition-api";
import { useCart } from "@/composables/use-cart";

export default {
  props: {
    max: {
      type: Number,
      default: 10000,
    },
    productId: Number,
  },
  setup() {
    const { products, updateProductNumber } = useCart();
    const value = ref(0);

    return {
      value,
      products,
      updateProductNumber,
    };
  },
};
