import { useCart } from "@/composables/use-cart";
import { useI18n } from "@/composables/use-i18n";
import { store } from "@/store";

export default {
  emits: ["submit"],
  setup(props, context) {
    const { ct } = useI18n({ component: "cart-submit" });

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
      ct,
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
