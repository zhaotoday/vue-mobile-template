import { reactive, ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useRoute } from "vue-mobile/composables/use-route";
import { useProducts } from "@/composables/use-products";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const { getTotalPrice } = useProducts();

    const ordersDetail = ref({
      products: [],
    });

    const cForm = reactive({
      model: {
        comment: "",
      },
    });

    onShow(async () => {
      await renderOrderDetail();
    });

    const renderOrderDetail = async () => {
      ordersDetail.value = await ordersApi.get({
        id: currentRoute.query.orderId,
      });
    };

    const submit = async () => {
      await ordersApi.put({
        id: currentRoute.query.orderId,
        body: {
          comment: cForm.model.comment,
        },
      });

      console.log(222);
    };

    return {
      ordersDetail,
      cForm,
      getTotalPrice,
      submit,
    };
  },
};
