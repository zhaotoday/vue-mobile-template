import { useConsts } from "@/composables/use-consts";
import { onMounted, reactive } from "@vue/composition-api";
import wx from "wx-bridge";

export default {
  setup() {
    const consts = useConsts();

    const cPicker = reactive({
      current: 0,
    });

    onMounted(() => {
      const locale = wx.getStorageSync("locale") || "en";
      cPicker.current = consts.findIndex(({ value }) => value === locale);
    });

    const onChange = (e) => {
      cPicker.current = e.detail.value;
      wx.setStorageSync("locale", useConsts().Languages[cPicker.current].value);
    };

    return {
      cPicker,
      onChange,
    };
  },
};
