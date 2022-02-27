import { reactive, ref } from "@vue/composition-api";
import { publicCategoriesApi } from "@/apis/public/catetgories";
import { publicProductsApi } from "@/apis/public/products";

export const useRender = () => {
  const loaded = ref(false);

  const cTab = reactive({
    current: 0,
  });

  const categoriesList = ref({
    items: [],
  });

  const productsList = ref({
    items: [],
  });

  const renderCategoriesList = async () => {
    categoriesList.value = await publicCategoriesApi.get({
      query: {
        order: [["order", "DESC"]],
      },
    });
  };

  const renderProductsList = async () => {
    productsList.value = await publicProductsApi.get({
      query: {
        where: {
          categoryId: {
            $eq: categoriesList.value.items[cTab.current].id,
          },
        },
      },
    });
  };

  return {
    loaded,
    cTab,
    categoriesList,
    productsList,
    renderCategoriesList,
    renderProductsList,
  };
};
