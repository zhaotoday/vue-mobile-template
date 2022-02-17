import { useCart } from "@/composables/use-cart";

export default {
  setup() {
    const { products, totalPrice, allProductsSelected, selectAllProducts } =
      useCart();

    return {
      products,
      totalPrice,
      allProductsSelected,
      selectAllProducts,
    };
  },
};
