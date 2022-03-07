import Categories from "./components/categories";
import { onShow } from "uni-composition-api";
import { useRender } from "./composables/use-render";
import { useCart } from "@/composables/use-cart";

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
      useCart().renderProductsNumber();

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
