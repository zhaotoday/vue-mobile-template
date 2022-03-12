import { useConsts } from "@/composables/use-consts";
import { getCurrentInstance, onMounted, reactive } from "@vue/composition-api";
import wx from "wx-bridge";

export default {
  setup() {
    const vm = getCurrentInstance();

    const { Languages } = useConsts();

    const cPicker = reactive({
      current: 0,
    });

    onMounted(() => {
      const locale = wx.getStorageSync("locale") || "en";

      cPicker.current = Languages.findIndex(({ value }) => value === locale);
    });

    const onChange = async (e) => {
      if (e.detail.value === cPicker.current) return;

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
