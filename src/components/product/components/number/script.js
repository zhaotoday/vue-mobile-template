import { onMounted, ref } from "@vue/composition-api";
import { useCart } from "uni-shop/composables/use-cart";

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
    value() {
      const found = this.products.find((item) => item.id === this.product.id);
      return found ? found.number : 0;
    },
  },
  setup(props) {
    const { products, updateProductNumber } = useCart();

    const updateNumber = ({ value }) => {
      updateProductNumber({ product: props.product, number: value });
    };

    return {
      products,
      updateNumber,
    };
  },
};
