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

  // 在非 tab-bar 页面无法更新 TabBarBadge，
  // 所以必须在每个 tab-bar 页面的 onShow 中更新 TabBarBadge
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
    renderProductsNumber();
  };

  return {
    products,
    selectedProducts,
    totalPrice,
    allProductsSelected,
    selectProduct,
    selectAllProducts,
    renderProductsNumber,
    updateProductNumber,
    clearProducts,
  };
};
