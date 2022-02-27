import { reactive, ref } from "@vue/composition-api";
import { onLoad, onShow } from "uni-composition-api";
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

    const selectedAddress = ref({});

    const cForm = reactive({
      model: {
        remark: "",
      },
    });

    onLoad(async () => {
      await selectDefaultAddress();
    });

    onShow(async () => {
      await renderOrderDetail();
    });

    const selectDefaultAddress = async () => {
      const { items } = await addressesApi.get({
        query: {
          where: {
            default: { $eq: 1 },
          },
        },
      });

      if (items.length) {
        selectedAddress.value = items[0];
      }
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
      selectedAddress,
      cForm,
      getTotalPrice,
      submit,
    };
  },
};
