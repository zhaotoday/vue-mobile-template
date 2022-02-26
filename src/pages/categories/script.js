import products from "@/mock/products.json";
import { reactive, ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { publicCategoriesApi } from "@/apis/public/catetgories";

export default {
  setup() {
    const cTab = reactive({
      current: 0,
    });

    const categoriesList = ref({
      items: [],
    });

    onShow(async () => {
      await renderCategoriesList();
    });

    const renderCategoriesList = async () => {
      categoriesList.value = await publicCategoriesApi.get({
        query: {
          order: [["order", "DESC"]],
        },
      });
    };

    const changeCategory = (index) => {
      cTab.current = index;
    };

    return {
      products,
      cTab,
      categoriesList,
      changeCategory,
    };
  },
};
