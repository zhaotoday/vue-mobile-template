import { reactive, ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useProducts } from "@/composables/use-products";
import { addressesApi } from "@/apis/client/addresses";
import { usePageData } from "@/composables/use-page-data";
import { useCart } from "@/composables/use-cart";
import { useI18n } from "@/composables/use-i18n";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import wx from "wx-bridge";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useConsts } from "@/composables/use-consts";

export default {
  setup() {
    const { enums } = useEnums();

    const { pt } = useI18n({ page: "checkout" });

    const { getPageData } = usePageData();

    const { getTotalPrice } = useProducts();

    const { selectedProducts, clearProducts } = useCart();

    const { loggedIn } = useUsers();

    const selectedAddress = ref({});

    const cForm = reactive({
      model: {
        remark: "",
      },
    });

    onShow(async () => {
      await selectAddress();
    });

    const selectAddress = async () => {
      const page = "/pages/user/addresses/list/index";
      const lastSelectedAddress = getPageData({ page })["selectedAddress"];

      if (lastSelectedAddress) {
        selectedAddress.value = lastSelectedAddress;
      } else {
        if (loggedIn()) {
          const { items } = await addressesApi.get({
            query: {
              where: { default: { $eq: 1 } },
            },
          });

          if (items.length) {
            selectedAddress.value = items[0];
          }
        }
      }
    };

    const gotoAddresses = () => {
      if (!loggedIn()) {
        wx.navigateTo({ url: useConsts().LoginUrl });
        return;
      }

      wx.navigateTo({ url: "/pages/user/addresses/list/index?action=select" });
    };

    const submit = async () => {
      if (!loggedIn()) {
        wx.navigateTo({ url: useConsts().LoginUrl });
        return;
      }

      if (selectedAddress.value.id) {
        await ordersApi.post({
          body: {
            products: selectedProducts.value,
            address: selectedAddress.value,
            amount: getTotalPrice(selectedProducts.value),
            remark: cForm.model.remark,
          },
        });

        clearProducts();

        await wx.redirectTo({ url: "/pages/checkout/result/index" });
      } else {
        await wx.showToast({ title: pt("inputs.selectAddress") });
      }
    };

    return {
      enums,
      pt,
      selectedProducts,
      selectedAddress,
      cForm,
      getTotalPrice,
      gotoAddresses,
      submit,
    };
  },
};
