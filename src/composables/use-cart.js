import wx from "wx-bridge";
import { store } from "@/store";
import { createNamespacedHelpers } from "vuex-composition-helpers";

export const useCart = () => {
  const { useState, useGetters, useActions } = createNamespacedHelpers(
    store,
    "cart"
  );
  const { products } = useState(["products"]);
  const { productsNumber, totalPrice, allProductsSelected } = useGetters([
    "productsNumber",
    "totalPrice",
    "allProductsSelected",
  ]);
  const {
    updateProductNumber,
    selectProduct,
    selectAllProducts,
    clearProducts,
  } = useActions([
    "updateProductNumber",
    "selectProduct",
    "selectAllProducts",
    "clearProducts",
  ]);

  const renderProductsNumber = () => {
    const count = products.value.length;

    if (count) {
      wx.setTabBarBadge({ index: 2, text: count + "" });
    } else {
      wx.removeTabBarBadge({ index: 2 });
    }
  };

  return {
    products,
    productsNumber,
    totalPrice,
    allProductsSelected,
    updateProductNumber,
    selectProduct,
    selectAllProducts,
    clearProducts,
    renderProductsNumber,
  };
};
