import wx from "wx-bridge";
import { store } from "@/store";
import { createNamespacedHelpers } from "vuex-composition-helpers";

export const usePageData = () => {
  const { useState, useGetters, useActions } = createNamespacedHelpers(
    store,
    "page-data"
  );
  const { products } = useState(["products"]);
  const { selectedProducts, totalPrice, allProductsSelected } = useGetters([
    "selectedProducts",
    "totalPrice",
    "allProductsSelected",
  ]);
  const {
    updateProductNumber,
    selectProduct,
    selectAllProducts,
    clearProducts: $clearProducts,
  } = useActions([
    "updateProductNumber",
    "selectProduct",
    "selectAllProducts",
    "clearProducts",
  ]);
};
