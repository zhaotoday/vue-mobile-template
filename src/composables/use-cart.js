import wx from "wx-bridge";
import { store } from "@/store";
import { createNamespacedHelpers } from "vuex-composition-helpers";

export const useCart = () => {
  const { useState, useGetters, useActions } = createNamespacedHelpers(
    store,
    "cart"
  );
  const { products } = useState(["products"]);
  const { selectedProducts, totalPrice, allProductsSelected } = useGetters([
    "selectedProducts",
    "totalPrice",
    "allProductsSelected",
  ]);
  const {
    selectProduct,
    selectAllProducts,
    updateProductNumber: _updateProductNumber,
    clearProducts: _clearProducts,
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

  const updateProductNumber = (options) => {
    _updateProductNumber(options);
    renderProductsNumber();
  };

  const clearProducts = () => {
    _clearProducts();
    wx.removeTabBarBadge({ index: 2 });
  };

  return {
    products,
    selectedProducts,
    totalPrice,
    allProductsSelected,
    updateProductNumber,
    selectProduct,
    selectAllProducts,
    clearProducts,
    renderProductsNumber,
  };
};
