import { ref } from "@vue/composition-api";
import { ordersApi } from "@/apis/client/orders";
import { onShow } from "uni-composition-api";
import wx from "wx-bridge";
import { useProducts } from "@/composables/use-products";
import { OrderStatus } from "../utils/enums/order-status";

export default {
  setup() {
    const { getTotalPrice } = useProducts();

    const cTabs = {
      current: 1,
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
      const { latitude, longitude } = address.location;
      await wx.openLocation({ latitude, longitude });
    };

    const makePhoneCall = async (address) => {
      wx.makePhoneCall({
        phoneNumber: address.phoneNumber,
      });
    };

    const startToDistribute = async ({ id }) => {
      const { confirm } = await wx.showModal({
        title: "请确认",
        content: "确认开始配送该订单？",
        cancelText: "取消",
        confirmText: "送达",
      });

      if (confirm) {
        await ordersApi.post({
          id,
          action: "changeState",
          body: { status: "Distributing" },
        });
        wx.showToast({ title: "设置成功" });
      }
    };

    const finish = async ({ id }) => {
      const { confirm } = await wx.showModal({
        title: "请确认",
        content: "确认该已送达订单吗？",
        cancelText: "取消",
        confirmText: "送达",
      });

      if (confirm) {
        await ordersApi.post({
          id,
          action: "changeState",
          body: { status: "Finished" },
        });
        wx.showToast({ title: "设置成功" });
      }
    };

    return {
      OrderStatus,
      cTabs,
      ordersList,
      getTotalPrice,
      openLocation,
      makePhoneCall,
      startToDistribute,
      finish,
    };
  },
};
