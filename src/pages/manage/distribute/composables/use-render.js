import { reactive, ref } from "@vue/composition-api";
import { ordersApi } from "@/apis/client/orders";
import { OrderStatus } from "../../utils/enums/order-status";

export const useRender = () => {
  const loaded = ref(false);

  const cTabs = reactive({
    current: 1,
  });

  const ordersList = ref({
    items: [],
  });

  const renderOrdersList = async () => {
    ordersList.value = await ordersApi.get({
      query: {
        where: {
          status: { $eq: OrderStatus[cTabs.current].value },
        },
        include: [
          { model: "User", as: "user" },
          { model: "Address", as: "address" },
        ],
      },
    });
  };

  const changeTab = async ({ index }) => {
    cTabs.current = index;
    await renderOrdersList();
  };

  return {
    loaded,
    cTabs,
    ordersList,
    renderOrdersList,
    changeTab,
  };
};
