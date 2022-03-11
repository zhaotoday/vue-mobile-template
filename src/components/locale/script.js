import { useConsts } from "@/composables/use-consts";
import { getCurrentInstance, onMounted, reactive } from "@vue/composition-api";
import wx from "wx-bridge";
import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { $t } = useI18n({});

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
      cPicker.current = e.detail.value;

      const locale = useConsts().Languages[cPicker.current].value;

      const { confirm } = await wx.showModal({
        title: $t("tips.pleaseConfirm"),
        content: $t("tips.switchLanguage"),
      });

      if (confirm) {
        wx.setStorageSync("locale", locale);
        wx.setLocale(locale);
        vm.proxy.$i18n.locale = locale;
      }
    };

    return {
      cPicker,
      onChange,
    };
  },
};
