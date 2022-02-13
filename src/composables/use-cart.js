import wx from "wx-bridge";

export const useCart = () => {
  const showNumber = () => {
    wx.setTabBarBadge({ index: 2, text: "11" });
  };

  return {
    showNumber,
  };
};
