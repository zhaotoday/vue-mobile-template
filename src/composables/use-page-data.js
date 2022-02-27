import { store } from "@/store";
import { createNamespacedHelpers } from "vuex-composition-helpers";

export const usePageData = () => {
  const { useState, useActions } = createNamespacedHelpers(store, "pageData");
  const { pageData } = useState(["products"]);
  const { savePageData, removePageData } = useActions([
    "savePageData",
    "removePageData",
  ]);

  return {
    pageData,
    savePageData,
    removePageData,
  };
};
