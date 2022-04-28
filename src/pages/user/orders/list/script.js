import { onShow } from "uni-composition-api";
import { useProducts } from "uni-shop/composables/use-products";
import { useRender } from "./composables/use-render";

export default {
  setup() {
    const { getTotalPrice } = useProducts();

    const { loaded, cTabs, list, orderStatuses, render, changeTab } =
      useRender();

    onShow(async () => {
      await render();
      loaded.value = true;
    });

    return {
      orderStatuses,
      loaded,
      list,
      cTabs,
      getTotalPrice,
      changeTab,
    };
  },
};
