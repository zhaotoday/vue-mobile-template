import { onShow } from "uni-composition-api";
import { usePageData } from "vue-mobile/composables/use-page-data";
import { useRender } from "./composables/use-render";
import { useCart } from "uni-shop/composables/use-cart";
import { useI18n } from "vue-mobile/composables/use-i18n";
import { useIm } from "@/components/im/composables/use-im";
import { useTabBarBadge } from "@/composables/use-tab-bar-badge";

export default {
  setup() {
    const { getLocale } = useI18n();

    const { setPageData, getCurrentPage, getPageData } = usePageData();

    const {
      loaded,
      cTab,
      categoriesList,
      productsList,
      renderCategoriesList,
      renderProductsList,
    } = useRender();

    onShow(async () => {
      useTabBarBadge().initialize();

      await renderCategoriesList();

      const { currentIndex } = getPageData({ page: getCurrentPage() });

      cTab.current = currentIndex || 0;

      if (categoriesList.value.items.length) {
        await renderProductsList();
      }

      loaded.value = true;
    });

    const changeCategory = async (index) => {
      cTab.current = index;

      setPageData({
        page: getCurrentPage(),
        data: { currentIndex: index },
      });

      await renderProductsList();
    };

    return {
      loaded,
      cTab,
      categoriesList,
      productsList,
      getLocale,
      changeCategory,
    };
  },
};
