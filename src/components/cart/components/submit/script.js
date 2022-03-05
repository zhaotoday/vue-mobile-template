import { useCart } from "@/composables/use-cart";
import { useI18n } from "@/composables/use-i18n";

export default {
  emits: ["submit"],
  setup(props, context) {
    const { ct } = useI18n({ path: "cart-submit" });

    const {
      products,
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
      products,
      selectedProducts,
      totalPrice,
      allProductsSelected,
      selectAllProducts,
      submit,
    };
  },
};
