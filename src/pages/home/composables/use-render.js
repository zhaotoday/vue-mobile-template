import { ref } from "@vue/composition-api";
import { publicAdsApi } from "@/apis/public/ads";
import { publicCategoriesApi } from "@/apis/public/catetgories";
import { publicProductsApi } from "@/apis/public/products";

export const useRender = () => {
  const adsList = ref({
    items: [],
  });

  const categoriesList = ref({
    items: [],
  });

  const productsList = ref({
    items: [],
  });

  const renderAdsList = async () => {
    adsList.value = await publicAdsApi.get({});
  };

  const renderCategoriesList = async () => {
    categoriesList.value = await publicCategoriesApi.get({
      query: { order: [["order", "DESC"]] },
    });
  };

  const renderProductsList = async () => {
    productsList.value = await publicProductsApi.get({
      query: { limit: 4 },
    });
  };

  return {
    adsList,
    categoriesList,
    productsList,
    renderAdsList,
    renderCategoriesList,
    renderProductsList,
  };
};
