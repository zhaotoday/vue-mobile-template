import { ref } from "@vue/composition-api";
import { ordersApi } from "@/apis/client/orders";
import { onShow } from "uni-composition-api";
import wx from "wx-bridge";

export default {
  setup() {
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
          include: [{ model: "Address", as: "address" }],
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

    return {
      cTabs,
      ordersList,
      openLocation,
    };
  },
};
