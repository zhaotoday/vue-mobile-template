import { onShow } from "uni-composition-api";
import { usePageData } from "@/composables/use-page-data";
import { useRender } from "./composables/use-render";
import { useCart } from "@/composables/use-cart";

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
      useCart().renderProductsNumber();

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
