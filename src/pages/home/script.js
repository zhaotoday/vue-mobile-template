import Categories from "./components/categories";
import { onShow } from "uni-composition-api";
import { useRender } from "./composables/use-render";
import { useTabBarBadge } from "@/composables/use-tab-bar-badge";

export default {
  components: {
    "vc-categories": Categories,
  },
  setup() {
    const {
      adsList,
      categoriesList,
      productsList,
      renderAdsList,
      renderCategoriesList,
      renderProductsList,
    } = useRender();

    onShow(async () => {
      useTabBarBadge().initialize();

      await renderAdsList();
      await renderCategoriesList();
      await renderProductsList();
    });

    return {
      adsList,
      categoriesList,
      productsList,
    };
  },
};
