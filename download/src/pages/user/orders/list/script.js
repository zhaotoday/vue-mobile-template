import { onShow } from "uni-composition-api";
import { useProducts } from "@/composables/use-products";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useRender } from "./composables/use-render";

export default {
  setup() {
    const { enums } = useEnums();

    const { getTotalPrice } = useProducts();

    const { loaded, cTabs, tabItems, list, render, changeTab } = useRender();

    onShow(async () => {
      await render();
      loaded.value = true;
    });

    return {
      enums,
      loaded,
      list,
      cTabs,
      tabItems,
      getTotalPrice,
      changeTab,
    };
  },
};
