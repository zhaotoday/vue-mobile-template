import wx from "wx-bridge";
import { ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { pt } = useI18n({ page: "products/search" });

    const history = ref([]);
    const hotKeywords = ["apple", "orange", "chocolate"];

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
      pt,
      history,
      hotKeywords,
      search,
      clearHistory,
    };
  },
};
