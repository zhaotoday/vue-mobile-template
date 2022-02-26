import { reactive, ref } from "@vue/composition-api";
import Categories from "./components/categories";
import products from "@/mock/products.json";
import { onShow } from "uni-composition-api";
import { useCart } from "@/composables/use-cart";
import { publicAdsApi } from "@/apis/public/ads";

export default {
  components: {
    "vc-categories": Categories,
  },
  setup() {
    const adsList = ref({
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
    });

    const renderAdsList = async () => {
      adsList.value = await publicAdsApi.get({});
    };

    return {
      adsList,
      products,
      swiperData,
      value,
    };
  },
};
