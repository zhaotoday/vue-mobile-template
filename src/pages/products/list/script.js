import products from "@/mock/products.json";

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
    return {
      products,
      cTabs,
    };
  },
};
