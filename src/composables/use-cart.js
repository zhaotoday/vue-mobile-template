import wx from "wx-bridge";
import { store } from "@/store";
import { createNamespacedHelpers } from "vuex-composition-helpers";

export const useCart = () => {
  const { useState, useGetters, useActions } = createNamespacedHelpers(
    store,
    "cart"
  );
  const { products } = useState(["products"]);
  const { productsCount, totalPrice, allProductsSelected } = useGetters([
    "productsCount",
    "totalPrice",
    "allProductsSelected",
  ]);
  const { updateProductNumber, selectProduct, selectAllProducts } = useActions([
    "updateProductNumber",
    "selectProduct",
    "selectAllProducts",
  ]);

  const renderProductNumbers = () => {
    const count = products.value.length;

    if (count) {
      wx.setTabBarBadge({ index: 2, text: count + "" });
    } else {
      wx.removeTabBarBadge({ index: 2 });
    }
  };

  return {
    products,
    productsCount,
    totalPrice,
    allProductsSelected,
    updateProductNumber,
    selectProduct,
    selectAllProducts,
    renderProductNumbers,
  };
};
