import wx from "wx-bridge";
import { store } from "@/store";
import { createNamespacedHelpers } from "vuex-composition-helpers";

export const useCart = () => {
  const { useState, useGetters, useActions } = createNamespacedHelpers(
    store,
    "cart"
  );
  const { products } = useState(["products"]);
  const { totalPrice } = useGetters(["totalPrice"]);
  const { updateProductNumber, selectProduct } = useActions([
    "updateProductNumber",
    "selectProduct",
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
    totalPrice,
    updateProductNumber,
    selectProduct,
    renderProductNumbers,
  };
};
