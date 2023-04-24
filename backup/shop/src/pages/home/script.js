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
      loaded,
      adsList,
      categoriesList,
      productsList,
      specialProductsList,
      renderAdsList,
      renderCategoriesList,
      renderProductsList,
      renderSpecialProductsList,
    } = useRender();

    onShow(async () => {
      useTabBarBadge().initialize();

      await renderAdsList();
      await renderCategoriesList();
      await renderProductsList();
      await renderSpecialProductsList();

      loaded.value = true;
    });

    return {
      loaded,
      adsList,
      categoriesList,
      productsList,
      specialProductsList,
    };
  },
};
