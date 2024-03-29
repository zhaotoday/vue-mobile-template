import { useConsts } from "@/composables/use-consts";
import { getCurrentInstance, onMounted, reactive } from "@vue/composition-api";
import wx from "wx-bridge";
import { useI18n } from "vue-mobile/composables/use-i18n";

export default {
  setup() {
    const { $t } = useI18n({ component: "" });

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

      const { confirm } = await wx.showModal({
        showCancel: false,
        title: $t("tips.pleasePayAttention"),
        content: $t("tips.switchLanguage"),
      });

      if (confirm) {
        wx.setStorageSync("locale", locale);
        wx.setLocale(locale);
        vm.proxy.$i18n.locale = locale;

        // #ifdef H5
        window.location.reload();
        // #endif
      }
    };

    return {
      cPicker,
      onChange,
    };
  },
};
