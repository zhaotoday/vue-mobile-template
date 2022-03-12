import { usePageData } from "@/composables/use-page-data";
import { useI18n } from "@/composables/use-i18n";

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { getLocale } = useI18n();

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
      getLocale,
      switchTabToCategories,
    };
  },
};
