import { useCart } from "uni-shop/composables/use-cart";
import { store } from "@/store";

export default {
  props: {
    max: {
      type: Number,
      default: 10000,
    },
    product: {
      type: Object,
      default: () => ({}),
    },
    iconColor: {
      type: String,
      default: "",
    },
  },
  computed: {
    value: {
      get() {
        const { products } = store.state.cart;
        const found = products.find((item) => item.id === this.product.id);
        return found ? found.number : 0;
      },
      set(value) {
        this.updateProductNumber({ product: this.product, number: value });
      },
    },
  },
  setup() {
    const { updateProductNumber } = useCart();

    return {
      updateProductNumber,
    };
  },
};
