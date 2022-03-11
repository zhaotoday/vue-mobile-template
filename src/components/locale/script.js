import { useConsts } from "@/composables/use-consts";
import { reactive } from "@vue/composition-api";

export default {
  setup() {
    const cPicker = reactive({
      current: 0,
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
