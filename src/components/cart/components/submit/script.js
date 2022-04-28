import { useCart } from "uni-shop/composables/use-cart";
import { store } from "@/store";

export default {
  emits: ["submit"],
  setup(props, context) {
    const {
      selectedProducts,
      totalPrice,
      allProductsSelected,
      selectAllProducts,
    } = useCart();

    const submit = () => {
      selectedProducts.value.length && context.emit("submit");
    };

    return {
      selectedProducts,
      totalPrice,
      allProductsSelected,
      selectAllProducts,
      submit,
    };
  },
  // app computed bug
  computed: {
    products() {
      return store.state.cart.products;
    },
  },
};
