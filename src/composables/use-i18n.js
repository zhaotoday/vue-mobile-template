import { getCurrentInstance } from "@vue/composition-api";

export const useI18n = ({ path }) => {
  const vm = getCurrentInstance();

  const pathSplit = path
    .split("/")
    .map((item) => item.replace(/-/g, "_").toUpperCase());

  const $t = (key, locale) => {
    return vm.proxy.$i18n.t(key, locale);
  };

  const formatKey = (key) => {
    return key.substr(0, 2) === "_."
      ? pathSplit
          .filter((item, index) => index < pathSplit.length - 1)
          .join(".") +
          "." +
          key.substr(2)
      : pathSplit.join(".") + "." + key;
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
