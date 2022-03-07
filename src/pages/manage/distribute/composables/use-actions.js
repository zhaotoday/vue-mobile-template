import wx from "wx-bridge";
import { ordersApi } from "@/apis/client/orders";

export const useActions = ({ renderOrdersList = () => {} }) => {
  const openLocation = async ({ location }) => {
    const { latitude, longitude } = location;
    await wx.openLocation({ latitude, longitude });
  };

  const makePhoneCall = async ({ phoneNumber }) => {
    wx.makePhoneCall({ phoneNumber });
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
      await renderOrdersList();
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
      await renderOrdersList();
    }
  };

  return {
    openLocation,
    makePhoneCall,
    startToDistribute,
    finish,
  };
};
