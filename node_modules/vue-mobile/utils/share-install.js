import wx from "wx-bridge";

const openInstall = uni.requireNativePlugin("openinstall-plugin");

export const shareInstall = {
  initialize() {
    openInstall.init();
  },
  getInstall() {
    openInstall.getInstall(8, ({ channelCode, bindData }) => {
      wx.setStorageSync("channelCode", channelCode);
      wx.setStorageSync("bindData", bindData);
    });
  },
  registerWakeUp() {
    openInstall.registerWakeUp(({ channelCode, bindData }) => {
      wx.setStorageSync("channelCode", channelCode);
      wx.setStorageSync("bindData", bindData);
    });
  },
  getData() {
    return {
      channelCode: wx.getStorageSync("channelCode"),
      bindData: JSON.parse(wx.getStorageSync("bindData") || "{}"),
    };
  },
};
