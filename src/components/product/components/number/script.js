import { computed, onMounted, ref } from "@vue/composition-api";
import { useCart } from "@/composables/use-cart";

export default {
  props: {
    max: {
      type: Number,
      default: 10000,
    },
    productId: Number,
  },
  setup(props) {
    const { products, updateProductNumber } = useCart();
    const value = ref(0);

    onMounted(() => {
      value.value = (() => {
        const found = products.value.find(
          (item) => item.id === props.productId
        );
        return found ? found.id : 0;
      })();
    });

    return {
      value,
      products,
      updateProductNumber,
    };
  },
};
