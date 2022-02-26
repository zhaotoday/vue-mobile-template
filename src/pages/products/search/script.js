import wx from "wx-bridge";
import { ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";

export default {
  setup() {
    const history = ref([]);
    const hotKeywords = ["花生油", "大米", "食盐", "白菜"];

    onShow(() => {
      history.value = getHistory();
    });

    const search = async (value) => {
      saveHistory(value);

      await wx.navigateTo({
        url: `/pages/products/list/index?keywords=${value}`,
      });
    };

    const getHistory = () =>
      (wx.getStorageSync("productSearchHistory") || []).filter(
        (item, index) => index < 15
      );

    const saveHistory = (keywords) => {
      const history = wx.getStorageSync("productSearchHistory") || [];

      if (keywords && !history.includes(keywords)) {
        wx.setStorageSync("productSearchHistory", [...history, keywords]);
      }
    };

    const clearHistory = () => {
      wx.removeStorageSync("productSearchHistory");
      history.value = [];
    };

    return {
      history,
      hotKeywords,
      search,
      clearHistory,
    };
  },
};
