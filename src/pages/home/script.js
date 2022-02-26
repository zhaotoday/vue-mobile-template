import { reactive, ref } from "@vue/composition-api";
import Categories from "./components/categories";
import products from "@/mock/products.json";
import { onShow } from "uni-composition-api";
import { useCart } from "@/composables/use-cart";
import { publicAdsApi } from "@/apis/public/ads";
import { publicCategoriesApi } from "@/apis/public/catetgories";

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

    const swiperData = [
      "https://cdn.uviewui.com/uview/goods/1.jpg",
      "https://cdn.uviewui.com/uview/goods/2.jpg",
      "https://cdn.uviewui.com/uview/goods/3.jpg",
    ];

    const value = ref(0);

    onShow(async () => {
      useCart().renderProductNumbers();
      await renderAdsList();
      await renderCategoriesList();
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

    return {
      adsList,
      categoriesList,
      products,
      swiperData,
      value,
    };
  },
};
