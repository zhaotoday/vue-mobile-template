import products from "@/mock/products.json";
import { reactive } from "@vue/composition-api";

export default {
  setup() {
    const cTab = reactive({
      current: 0,
    });

    const changeCategory = (index) => {
      cTab.current = index;
    };

    return {
      products,
      cTab,
      changeCategory,
    };
  },
};
