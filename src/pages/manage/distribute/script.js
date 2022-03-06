import { ref } from "@vue/composition-api";
import { ordersApi } from "@/apis/client/orders";
import { onShow } from "uni-composition-api";

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
      ordersList.value = ordersApi.get({
        query: {},
      });
    };

    return {
      cTabs,
      ordersList,
    };
  },
};
