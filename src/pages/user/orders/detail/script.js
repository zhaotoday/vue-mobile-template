import { ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useRoute } from "vue-mobile/composables/use-route";
import { useProducts } from "uni-shop/composables/use-products";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import wx from "wx-bridge";
import { permission } from "uni-plugins/utils/permission";

export default {
  setup() {
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
        wx.showToast({ title: "位置不存在（收货地址可能被删除）" });
      }
    };

    return {
      enums,
      detail,
      getTotalPrice,
      openLocation,
    };
  },
};
