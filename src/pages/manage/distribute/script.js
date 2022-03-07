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
          value: "",
        },
        {
          name: "待配送",
          value: "ToDistribute",
        },
        {
          name: "配送中",
          value: "Distributing",
        },
        {
          name: "已完成",
          value: "Finished",
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

    const finish = async ({ id }) => {
      const { confirm } = await wx.showModal({
        title: "请确认",
        content: "确认设置该订单为已送达吗？",
        cancelText: "取消",
        confirmText: "送达",
      });

      if (confirm) {
        wx.showToast({ title: "设置成功" });
      }
    };

    return {
      cTabs,
      ordersList,
      getTotalPrice,
      openLocation,
      makePhoneCall,
      finish,
    };
  },
};
