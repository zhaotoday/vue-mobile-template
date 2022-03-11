import { useCart } from "@/composables/use-cart";
import Collection from "./components/collection/index.vue";
import { store } from "@/store";

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
    const { selectedProducts, updateProductNumber } = useCart();

    const addToCart = () => {
      updateProductNumber({ product: props.product, number: 1 });
    };

    return {
      selectedProducts,
      addToCart,
    };
  },
  // app computed bug
  computed: {
    addedToCart() {
      const { products } = store.state.cart;
      return products.map(({ id }) => id).includes(this.product.id);
    },
  },
};
