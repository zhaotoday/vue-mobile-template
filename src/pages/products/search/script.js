import wx from "wx-bridge";
import { ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";

export default {
  setup() {
    const history = ref([]);
    const hotKeywords = ["apple", "orange", "chocolate"];

    onShow(() => {
      history.value = getHistory();
    });

    const search = async (value) => {
      saveHistory(value);

      await uni.navigateTo({
        url: `/pages/products/list/index?keywords=${value}`,
      });
    };

    const getHistory = () =>
      (uni.getStorageSync("productSearchHistory") || []).filter(
        (item, index) => index < 15
      );

    const saveHistory = (keywords) => {
      const history = uni.getStorageSync("productSearchHistory") || [];

      if (keywords && !history.includes(keywords)) {
        uni.setStorageSync("productSearchHistory", [...history, keywords]);
      }
    };

    const clearHistory = () => {
      uni.removeStorageSync("productSearchHistory");
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
