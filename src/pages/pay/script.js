import { reactive, ref } from "@vue/composition-api";
import { onLoad, onShow } from "uni-composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useProducts } from "@/composables/use-products";
import { addressesApi } from "@/apis/client/addresses";
import { usePageData } from "@/composables/use-page-data";
import { useCart } from "@/composables/use-cart";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { pt } = useI18n({ path: "pay" });

    const { getPageData } = usePageData();

    const { getTotalPrice } = useProducts();

    const { selectedProducts, clearProducts } = useCart();

    const { user } = useUsers();

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

      clearProducts();

      await wx.redirectTo({ url: "/pages/pay/result/index" });
    };

    return {
      pt,
      selectedProducts,
      selectedAddress,
      cForm,
      getTotalPrice,
      submit,
    };
  },
};
