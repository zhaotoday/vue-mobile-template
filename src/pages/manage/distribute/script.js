import { ref } from "@vue/composition-api";
import { ordersApi } from "@/apis/client/orders";
import { onShow } from "uni-composition-api";
import wx from "wx-bridge";
import { useProducts } from "@/composables/use-products";

export default {
  setup() {
    const { getTotalPrice } = useProducts();

    const cTabs = {
      items: [
        {
          name: "全部",
        },
        {
          name: "配送中",
        },
        {
          name: "已完成",
        },
      ],
    };

    const ordersList = ref({
      items: [],
    });

    onShow(async () => {
      await renderOrdersList();
    });

    const renderOrdersList = async () => {
      ordersList.value = await ordersApi.get({
        query: {
          include: [
            { model: "User", as: "user" },
            { model: "Address", as: "address" },
          ],
        },
      });
    };

    const openLocation = async (address) => {
      if (address) {
        const { latitude, longitude } = address.location;
        await wx.openLocation({ latitude, longitude });
      } else {
        wx.showToast({ title: "位置不存在（地址可能被删除）" });
      }
    };

    const makePhoneCall = async (address) => {
      if (address) {
        wx.makePhoneCall({
          phoneNumber: address.phoneNumber,
        });
      } else {
        wx.showToast({ title: "收货地址已被删除，无法拨打电话" });
      }
    };

    return {
      cTabs,
      ordersList,
      getTotalPrice,
      openLocation,
      makePhoneCall,
    };
  },
};
