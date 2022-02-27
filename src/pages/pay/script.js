import { reactive, ref } from "@vue/composition-api";
import { onLoad, onShow } from "uni-composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useRoute } from "vue-mobile/composables/use-route";
import { useProducts } from "@/composables/use-products";
import { addressesApi } from "@/apis/client/addresses";
import { usePageData } from "@/composables/use-page-data";
import { useCart } from "@/composables/use-cart";
import { useUsers } from "vue-mobile/@lr/composables/use-users";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const { getPageData } = usePageData();

    const { getTotalPrice } = useProducts();

    const { selectedProducts, clearProducts } = useCart();

    const { user } = useUsers();

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
      selectedAddress.value = getPageData({
        page: "/pages/user/addresses/list/index",
      })["selectedAddress"];
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
      await ordersApi.post({
        body: {
          userId: user.value.id,
          products: selectedProducts.value,
          addressId: selectedAddress.value.id,
          remark: cForm.model.remark,
          status: "ToPay",
        },
      });

      await wx.redirectTo({ url: "/pages/pay/result/index" });
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
