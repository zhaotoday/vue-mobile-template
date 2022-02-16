import wx from "wx-bridge";
import { store } from "@/store";
import { createNamespacedHelpers } from "vuex-composition-helpers";

export const useCart = () => {
  const { useState, useActions } = createNamespacedHelpers(store, "cart");
  const { products } = useState(["products"]);
  const { updateProductNumber } = useActions(["updateProductNumber"]);

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
    updateProductNumber,
    renderProductNumbers,
  };
};
