import { store } from "@/store";
import { createNamespacedHelpers } from "vuex-composition-helpers";

export const usePageData = () => {
  const { useState, useActions } = createNamespacedHelpers(store, "pageData");
  const { pageData } = useState(["pageData"]);
  const { setPageData, removePageData, clearPageData } = useActions([
    "setPageData",
    "removePageData",
    "clearPageData",
  ]);

  const getPageData = ({ page }) => {
    return pageData.value[page] || {};
  };

  const getCurrentPage = () => {
    const currentPage = getCurrentPages().pop();
    return currentPage && currentPage.route ? "/" + currentPage.route : "";
  };

  return {
    pageData,
    setPageData,
    getPageData,
    removePageData,
    getCurrentPage,
    clearPageData,
  };
};
