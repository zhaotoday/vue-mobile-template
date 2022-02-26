import { reactive, ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { publicCategoriesApi } from "@/apis/public/catetgories";
import { publicProductsApi } from "@/apis/public/products";

export default {
  setup() {
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

    onShow(async () => {
      await renderCategoriesList();

      if (categoriesList.value.items.length) {
        await renderProductsList();
      }

      loaded.value = true;
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

    const changeCategory = async (index) => {
      cTab.current = index;
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
