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
  setup(props) {
    const { products, updateProductNumber } = useCart();
    const value = ref(0);

    onMounted(() => {
      value.value = (() => {
        const found = products.value.find(
          (item) => item.id === props.product.id
        );
        return found ? found.number : 0;
      })();
    });

    const updateNumber = ({ value }) => {
      updateProductNumber({ product: props.product, number: value });
    };

    return {
      value,
      products,
      updateNumber,
    };
  },
};
