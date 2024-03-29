import { ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useRoute } from "vue-mobile/composables/use-route";
import { useProducts } from "uni-shop/composables/use-products";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useI18n } from "vue-mobile/composables/use-i18n";
import wx from "wx-bridge";
import { permission } from "uni-plugins/utils/permission";

export default {
  setup() {
    const { $t, pt } = useI18n({ page: "user/orders/detail" });

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
      detail.value = await ordersApi.get({ id: currentRoute.query.id });
    });

    const openLocation = async (address) => {
      if (address) {
        const { latitude, longitude } = address.location;

        // #ifdef APP-PLUS
        await permission.request("ACCESS_FINE_LOCATION");
        // #endif

        await wx.openLocation({ latitude, longitude });
      } else {
        wx.showToast({ title: $t("tips.deletedAddress") });
      }
    };

    return {
      pt,
      enums,
      detail,
      getTotalPrice,
      openLocation,
    };
  },
};
