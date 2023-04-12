import { ordersApi } from "@/apis/client/orders";
import { permission } from "uni-plugins/utils/permission";

export const useActions = ({ renderOrdersList = () => {} }) => {
  const openLocation = async ({ location }) => {
    const { latitude, longitude } = location;

    // #ifdef APP-PLUS
    await permission.request("ACCESS_FINE_LOCATION");
    // #endif

    await uni.openLocation({ latitude, longitude });
  };

  const makePhoneCall = async ({ phoneNumber }) => {
    await uni.makePhoneCall({ phoneNumber });
  };

  const startToDistribute = async ({ id }) => {
    const { confirm } = await uni.showModal({
      title: "请确认",
      content: "确认开始配送该订单？",
      cancelText: "取消",
      confirmText: "开始配送",
    });

    if (confirm) {
      await ordersApi.post({
        id,
        action: "changeStatus",
        body: { status: "Distributing" },
      });
      await uni.showToast({ title: "操作成功" });
      await renderOrdersList();
    }
  };

  const finish = async ({ id }) => {
    const { confirm } = await uni.showModal({
      title: "请确认",
      content: "确认已送达该订单吗？",
      cancelText: "取消",
      confirmText: "送达",
    });

    if (confirm) {
      await ordersApi.post({
        id,
        action: "changeStatus",
        body: { status: "Finished" },
      });
      await uni.showToast({ title: "操作成功" });
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
