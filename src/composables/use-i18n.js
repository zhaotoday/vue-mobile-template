import { getCurrentInstance } from "@vue/composition-api";

export const useI18n = () => {
  const vm = getCurrentInstance();
  const t = (key, locale) => {
    console.log(getRoute(), "---");
    return vm.proxy.$i18n.t(key, locale);
  };

  const getRoute = () => {
    const currentPage = getCurrentPages().pop();
    console.log("abc", getCurrentPages());

    const route =
      currentPage && currentPage.route ? "/" + currentPage.route : "";
    return route.substr(7, route.length - 7);
  };

  return {
    t,
    getRoute,
  };
};
