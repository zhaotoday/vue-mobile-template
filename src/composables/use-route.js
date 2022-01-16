import { onLoad } from "uni-composition-api";
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
