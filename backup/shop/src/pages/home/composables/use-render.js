import { ref } from "@vue/composition-api";
import { publicAdsApi } from "@/apis/public/ads";
import { publicCategoriesApi } from "@/apis/public/catetgories";
import { publicProductsApi } from "@/apis/public/products";

export const useRender = () => {
  const loaded = ref(false);

  const adsList = ref({
    items: [],
  });

  const categoriesList = ref({
    items: [],
  });

  const productsList = ref({
    items: [],
  });

  const specialProductsList = ref({
    items: [],
  });

  const renderAdsList = async () => {
    adsList.value = await publicAdsApi.get({});
  };

  const renderCategoriesList = async () => {
    categoriesList.value = await publicCategoriesApi.get({
      query: { order: [["order", "ASC"]] },
    });
  };

  const renderProductsList = async () => {
    productsList.value = await publicProductsApi.get({
      query: { limit: 50 },
    });
  };

  const renderSpecialProductsList = async () => {
    specialProductsList.value = await publicProductsApi.get({
      query: {
        where: { special: { $eq: 1 } },
        limit: 50,
      },
    });
  };

  return {
    loaded,
    adsList,
    categoriesList,
    productsList,
    specialProductsList,
    renderAdsList,
    renderCategoriesList,
    renderProductsList,
    renderSpecialProductsList,
  };
};
