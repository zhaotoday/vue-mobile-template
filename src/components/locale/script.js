import { useConsts } from "@/composables/use-consts";
import { getCurrentInstance, onMounted, reactive } from "@vue/composition-api";
import wx from "wx-bridge";

export default {
  setup() {
    const vm = getCurrentInstance();

    const consts = useConsts();

    const cPicker = reactive({
      current: 0,
    });

    onMounted(() => {
      const locale = wx.getStorageSync("locale") || "en";

      cPicker.current = consts.Languages.findIndex(
        ({ value }) => value === locale
      );

      wx.setLocale(locale);
      vm.proxy.$i18n.locale = locale;
    });

    const onChange = (e) => {
      cPicker.current = e.detail.value;

      const locale = useConsts().Languages[cPicker.current].value;

      wx.setStorageSync("locale", locale);
      wx.setLocale(locale);
      vm.proxy.$i18n.locale = locale;
    };

    return {
      cPicker,
      onChange,
    };
  },
};
