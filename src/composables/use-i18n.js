import { getCurrentInstance } from "@vue/composition-api";

export const useI18n = ({ page = "", component = "" }) => {
  const vm = getCurrentInstance();

  const $t = (key, locale) => {
    return vm.proxy.$i18n.t(key, locale);
  };

  const formatKey = (path, key) => {
    const pathSplit = path
      .split("/")
      .map((item) => item.replace(/-/g, "_").toUpperCase());

    return key.substr(0, 2) === "_."
      ? pathSplit
          .filter((item, index) => index < pathSplit.length - 1)
          .join(".") +
          "." +
          key.substr(2)
      : pathSplit.join(".") + "." + key;
  };

  const pt = (key, locale) =>
    vm.proxy.$i18n.t("pages." + formatKey(page, key), locale);

  const ct = (key, locale) =>
    vm.proxy.$i18n.t("components." + formatKey(component, key), locale);

  return {
    $t,
    pt,
    ct,
  };
};
