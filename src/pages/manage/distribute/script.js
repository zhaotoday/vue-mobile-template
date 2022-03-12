import { onShow } from "uni-composition-api";
import { useProducts } from "uni-shop/composables/use-products";
import { OrderStatus } from "../utils/enums/order-status";
import { useRender } from "./composables/use-render";
import { useActions } from "./composables/use-actions";

export default {
  setup() {
    const { getTotalPrice } = useProducts();

    const { loaded, cTabs, ordersList, renderOrdersList, changeTab } =
      useRender();

    const { openLocation, makePhoneCall, startToDistribute, finish } =
      useActions({ renderOrdersList });

    onShow(async () => {
      await renderOrdersList();
      loaded.value = true;
    });

    return {
      OrderStatus,
      loaded,
      cTabs,
      ordersList,
      changeTab,
      getTotalPrice,
      openLocation,
      makePhoneCall,
      startToDistribute,
      finish,
    };
  },
};
