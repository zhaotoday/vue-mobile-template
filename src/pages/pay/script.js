import { ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useRoute } from "vue-mobile/composables/use-route";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const ordersDetail = ref({
      products: [],
    });

    onShow(async () => {
      await renderOrderDetail();
    });

    const renderOrderDetail = async () => {
      ordersDetail.value = await ordersApi.get({
        id: currentRoute.query.orderId,
      });
    };

    return {
      ordersDetail,
    };
  },
};
