import { onLoad } from "@dcloudio/uni-app";
import { reactive } from "@vue/composition-api";

export const useRoute = () => {
  const currentRoute = reactive({
    query: {},
  });

  onLoad((query) => {
    currentRoute.query = query;
  });

  return {
    currentRoute,
  };
};
