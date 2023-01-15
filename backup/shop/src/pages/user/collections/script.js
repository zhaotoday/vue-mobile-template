import { ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { collectionsApi } from "@/apis/client/collections";
import { publicProductsApi } from "@/apis/public/products";

export default {
  setup() {
    const loaded = ref(false);

    const productsList = ref({
      items: [],
    });

    onShow(async () => {
      const productIds = await collectionsApi.post({ action: "getProductIds" });

      productsList.value = await publicProductsApi.get({
        query: {
          where: { id: { $in: productIds } },
        },
      });
    });

    return {
      loaded,
      productsList,
    };
  },
};
