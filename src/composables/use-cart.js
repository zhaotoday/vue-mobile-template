import wx from "wx-bridge";
import { store } from "@/store";
import { createNamespacedHelpers } from "vuex-composition-helpers";

export const useCart = () => {
  const { useState, useActions } = createNamespacedHelpers(store, "cart");
  const { products } = useState(["products"]);
  const { updateProductNumber } = useActions(["updateProductNumber"]);

  const showNumber = () => {
    wx.setTabBarBadge({ index: 2, text: "11" });
  };

  return {
    showNumber,
    products,
    updateProductNumber,
  };
};
