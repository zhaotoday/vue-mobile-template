import { onShow } from "uni-composition-api";
import { usePageData } from "vue-mobile/composables/use-page-data";
import { useRender } from "./composables/use-render";
import { useTabBarBadge } from "@/composables/use-tab-bar-badge";

export default {
  setup() {
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
      changeCategory,
    };
  },
};
