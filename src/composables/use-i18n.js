import { getCurrentInstance } from "@vue/composition-api";

export const useI18n = ({ page = "" }) => {
  const vm = getCurrentInstance();
  const pageSplit = page
    .split("/")
    .map((item) => item.replace(/-/g, "_").toUpperCase());

  const $t = (key, locale) => {
    return vm.proxy.$i18n.t(key, locale);
  };

  const formatKey = (key) => {
    return key.substr(0, 2) === "_."
      ? pageSplit
          .filter((item, index) => index < pageSplit.length - 1)
          .join(".") +
          "." +
          key.substr(2)
      : pageSplit.join(".") + "." + key;
  };

  const pt = (key, locale) =>
    vm.proxy.$i18n.t("pages." + formatKey(key), locale);

  const ct = (key, locale) =>
    vm.proxy.$i18n.t("components." + formatKey(key), locale);

  return {
    $t,
    pt,
    ct,
  };
};
