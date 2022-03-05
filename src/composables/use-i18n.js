import { getCurrentInstance } from "@vue/composition-api";

export const useI18n = ({ page = "" }) => {
  const vm = getCurrentInstance();
  const pageSplit = page.split("/").map((item) => item.replace(/-/g, "_"));

  const $t = (key, locale) => {
    return vm.proxy.$i18n.t(key, locale);
  };

  const t = (key, locale) => {
    const keyPrefix =
      key.substr(0, 2) === "_."
        ? pageSplit
            .filter((item, index) => index > pageSplit.length - 1)
            .join(".")
        : pageSplit.join(".");

    return vm.proxy.$i18n.t(`${keyPrefix}.${key}`, locale);
  };

  return {
    $t,
    t,
  };
};
