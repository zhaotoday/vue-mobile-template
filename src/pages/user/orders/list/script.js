import products from "@/mock/products.json";

export default {
  setup() {
    const cTabs = {
      items: [
        {
          name: "全部",
        },
        {
          name: "待付款",
        },
        {
          name: "待收货",
        },
        {
          name: "已完成",
        },
      ],
    };

    return {
      products,
      cTabs,
    };
  },
};
