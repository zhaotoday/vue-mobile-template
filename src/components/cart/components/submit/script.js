import { useCart } from "@/composables/use-cart";

export default {
  emits: ["submit"],
  setup(props, context) {
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
      products,
      selectedProducts,
      totalPrice,
      allProductsSelected,
      selectAllProducts,
      submit,
    };
  },
};
