import { ref } from "@vue/composition-api";
import Categories from "./components/categories";
import products from "@/mock/products.json";
import { onShow } from "uni-composition-api";
import { useCart } from "@/composables/use-cart";
import { publicAdsApi } from "@/apis/public/ads";
import { publicCategoriesApi } from "@/apis/public/catetgories";
import { publicProductsApi } from "@/apis/public/products";

export default {
  components: {
    "vc-categories": Categories,
  },
  setup() {
    const adsList = ref({
      items: [],
    });

    const categoriesList = ref({
      items: [],
    });

    const productsList = ref({
      items: [],
    });

    const value = ref(0);

    onShow(async () => {
      useCart().renderProductNumbers();
      await renderAdsList();
      await renderCategoriesList();
      await renderProductsList();
    });

    const renderAdsList = async () => {
      adsList.value = await publicAdsApi.get({});
    };

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
          limit: 4,
        },
      });
    };

    return {
      adsList,
      categoriesList,
      productsList,
      products,
      value,
    };
  },
};
