import { ref } from "@vue/composition-api";
import { publicProductsApi } from "@/apis/public/products";

export const useRender = () => {
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

  const list = ref({
    items: [],
  });

  const render = async (keywords) => {
    list.value = await publicProductsApi.get({
      query: {
        where: { name: { $like: keywords } },
      },
    });
  };

  return {
    cTabs,
    list,
    render,
  };
};
