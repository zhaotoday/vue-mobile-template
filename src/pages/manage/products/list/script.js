import { onShow } from "uni-composition-api";
import { usePageData } from "@/composables/use-page-data";
import { useRender } from "@/pages/categories/composables/use-render";

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

    const redirectToAddProduct = async () => {
      const { id } = categoriesList.value.items[cTab.current];

      await wx.navigateTo({
        url: `/pages/manage/products/form/index?categoryId=${id}`,
      });
    };

    return {
      loaded,
      cTab,
      categoriesList,
      productsList,
      changeCategory,
      redirectToAddProduct,
    };
  },
};
