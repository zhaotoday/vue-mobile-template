import { ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { publicProductsApi } from "@/apis/public/products";
import { useRoute } from "vue-mobile/composables/use-route";

export default {
  setup() {
    const swiperData = [
      "https://cdn.uviewui.com/uview/goods/1.jpg",
      "https://cdn.uviewui.com/uview/goods/2.jpg",
      "https://cdn.uviewui.com/uview/goods/3.jpg",
    ];

    const { currentRoute } = useRoute();

    const detail = ref({
      imageFileIds: [],
    });

    onShow(async () => {
      await render();
    });

    const render = async () => {
      detail.value = await publicProductsApi.get({
        id: currentRoute.query.id,
      });
    };

    return {
      detail,
      swiperData,
    };
  },
};
