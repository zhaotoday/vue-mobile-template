import { ref } from "@vue/composition-api";
import { publicCategoriesApi } from "@/apis/public/catetgories";
import { useRoute } from "vue-mobile/composables/use-route";

export const useRender = () => {
  const { currentRoute } = useRoute();

  const categoriesDetail = ref({});

  const renderCategoriesDetail = async () => {
    categoriesDetail.value = await publicCategoriesApi.get({
      id: currentRoute.query.categoryId,
    });
  };

  return {
    categoriesDetail,
    renderCategoriesDetail,
  };
};
