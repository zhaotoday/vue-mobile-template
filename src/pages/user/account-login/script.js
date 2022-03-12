import wx from "wx-bridge";
import { reactive } from "@vue/composition-api";
import { useValidators } from "vue-validation";
import { useHelpers } from "@/composables/use-helpers";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { onNavigationBarButtonTap } from "uni-composition-api";
import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { pt, $t } = useI18n({ page: "user/account-login" });
    const { isRequired, isPhoneNumber, isPassword, validate } = useValidators();
    const { accountLogin } = useUsers();
    const cForm = reactive({
      model: {},
      rules: {
        account: [
          isRequired({ message: $t("inputs.phoneNumber") }),
          isPhoneNumber({ message: $t("inputs.phoneNumberFormatError") }),
        ],
        password: [
          isRequired({ message: $t("inputs.password") }),
          isPassword({ message: $t("inputs.passwordFormatError") }),
        ],
      },
      errors: {},
    });

    const submit = async () => {
      await validate(cForm, null, async (errors, { account, password }) => {
        if (errors) return;

        await accountLogin({ account, password });

        wx.showToast({ title: $t("tips.loginSuccess") });
        await useHelpers().sleep(1500);
        wx.navigateBack();
      });
    };

    onNavigationBarButtonTap(async () => {
      await wx.navigateTo({ url: "/pages/user/account-register/index" });
    });

    return {
      pt,
      cForm,
      validate,
      submit,
    };
  },
};
