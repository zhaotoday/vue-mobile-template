import { reactive, ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useProducts } from "uni-shop/composables/use-products";
import { addressesApi } from "@/apis/client/addresses";
import { usePageData } from "vue-mobile/composables/use-page-data";
import { useCart } from "uni-shop/composables/use-cart";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useConsts } from "@/composables/use-consts";

export default {
  setup() {
    const { enums } = useEnums();

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

    const gotoAddresses = async () => {
      await uni.navigateTo({
        url: loggedIn()
          ? "/pages/user/addresses/list/index?action=select"
          : useConsts().LOGIN_URL,
      });
    };

    const submit = async () => {
      if (!loggedIn()) {
        await uni.navigateTo({ url: useConsts().LOGIN_URL });
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

        await uni.redirectTo({ url: "/pages/checkout/result/index" });
      } else {
        await uni.showToast({ title: "请选择收获地址" });
      }
    };

    return {
      enums,
      selectedProducts,
      selectedAddress,
      cForm,
      getTotalPrice,
      gotoAddresses,
      submit,
    };
  },
};
