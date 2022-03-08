import { useCart } from "@/composables/use-cart";
import Collection from "./components/collection/index.vue";
import { computed } from "@vue/composition-api";

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
  setup(props) {
    const { products, selectedProducts, updateProductNumber } = useCart();

    const addedToCart = computed({
      get: () => products.value.map(({ id }) => id).includes(props.product.id),
      effect: true,
    });

    const addToCart = () => {
      updateProductNumber({ product: props.product, number: 1 });
    };

    return {
      selectedProducts,
      addedToCart,
      addToCart,
    };
  },
};
