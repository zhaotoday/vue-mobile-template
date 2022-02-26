import products from "@/mock/products.json";
import { ref } from "@vue/composition-api";

export default {
  setup() {
    const cTabs = {
      items: [
        {
          name: "综合",
        },
        {
          name: "销量",
        },
        {
          name: "价格",
        },
        {
          name: "折扣",
        },
      ],
    };

    const productsList = ref({
      items: [],
    });

    return {
      cTabs,
      productsList,
    };
  },
};
