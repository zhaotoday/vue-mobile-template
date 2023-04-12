import { onShow } from "uni-composition-api";
import { usePageData } from "vue-mobile/composables/use-page-data";
import { useRender } from "@/pages/categories/composables/use-render";
import wx from "wx-bridge";
import { productsApi } from "@/apis/client/products";

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

      await uni.navigateTo({
        url: `/pages/manage/products/form/index?categoryId=${id}`,
      });
    };

    const del = async ({ id }) => {
      const { confirm } = await uni.showModal({
        title: "请确认",
        content: "确认删除吗？",
        cancelText: "取消",
        confirmText: "删除",
      });

      if (confirm) {
        await productsApi.delete({ id });

        uni.showToast({ title: "删除成功" });

        await renderProductsList();
      }
    };

    return {
      loaded,
      cTab,
      categoriesList,
      productsList,
      changeCategory,
      redirectToAddProduct,
      del,
    };
  },
};
