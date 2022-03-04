import { getCurrentInstance } from "@vue/composition-api";

export const useI18n = () => {
  const vm = getCurrentInstance();
  const t = (key, locale) => vm.proxy.$i18n.t(key, locale);

  return {
    t,
  };
};
