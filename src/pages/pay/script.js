import { reactive, ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useRoute } from "vue-mobile/composables/use-route";
import { useProducts } from "@/composables/use-products";
import { addressesApi } from "@/apis/client/addresses";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const { getTotalPrice } = useProducts();

    const ordersDetail = ref({
      products: [],
    });

    const defaultAddress = ref({});

    const cForm = reactive({
      model: {
        remark: "",
      },
    });

    onShow(async () => {
      await renderOrderDetail();
      defaultAddress.value = await getDefaultAddress();
    });

    const getDefaultAddress = () => {
      return addressesApi.get({
        query: {
          where: { default: 1 },
        },
      });
    };

    const renderOrderDetail = async () => {
      ordersDetail.value = await ordersApi.get({
        id: currentRoute.query.orderId,
      });
    };

    const submit = async () => {
      await ordersApi.put({
        id: currentRoute.query.orderId,
        body: {
          remark: cForm.model.remark,
        },
      });

      await wx.redirectTo({ url: "/pages/pay-result/index" });
    };

    return {
      ordersDetail,
      defaultAddress,
      cForm,
      getTotalPrice,
      submit,
    };
  },
};
