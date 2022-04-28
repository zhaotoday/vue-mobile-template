import { usePageData } from "vue-mobile/composables/use-page-data";

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { setPageData } = usePageData();

    const switchTabToCategories = async (index) => {
      const categoriesUrl = "/pages/categories/index";

      setPageData({
        page: categoriesUrl,
        data: { currentIndex: index },
      });

      await wx.switchTab({ url: categoriesUrl });
    };

    return {
      switchTabToCategories,
    };
  },
};
