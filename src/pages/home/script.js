import Categories from "./components/categories";
import { onShow } from "uni-composition-api";
import { useRender } from "@/pages/home/composables/use-render";

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
