import { reactive, ref } from "@vue/composition-api";
import { onLoad, onShow } from "uni-composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useProducts } from "@/composables/use-products";
import { addressesApi } from "@/apis/client/addresses";
import { usePageData } from "@/composables/use-page-data";
import { useCart } from "@/composables/use-cart";
import { useI18n } from "@/composables/use-i18n";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";

export default {
  setup() {
    const { enums } = useEnums();

    const { pt } = useI18n({ path: "checkout" });

    const { getPageData } = usePageData();

    const { getTotalPrice } = useProducts();

    const { selectedProducts, clearProducts } = useCart();

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
          products: selectedProducts.value,
          addressId: selectedAddress.value.id,
          remark: cForm.model.remark,
        },
      });

      clearProducts();

      await wx.redirectTo({ url: "/pages/checkout/result/index" });
    };

    return {
      enums,
      pt,
      selectedProducts,
      selectedAddress,
      cForm,
      getTotalPrice,
      submit,
    };
  },
};
