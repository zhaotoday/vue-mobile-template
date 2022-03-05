import { ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useRoute } from "vue-mobile/composables/use-route";
import { useProducts } from "@/composables/use-products";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { pt } = useI18n({ page: "user/orders/detail" });

    const { enums } = useEnums();

    const { currentRoute } = useRoute();

    const { getTotalPrice } = useProducts();

    const detail = ref({
      products: [],
      address: {
        location: {},
      },
    });

    onShow(async () => {
      detail.value = await ordersApi.get({
        id: currentRoute.query.id,
        query: {
          include: [{ model: "Address", as: "address" }],
        },
      });
    });

    return {
      pt,
      enums,
      detail,
      getTotalPrice,
    };
  },
};
