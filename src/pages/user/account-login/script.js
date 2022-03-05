import wx from "wx-bridge";
import { reactive } from "@vue/composition-api";
import { useValidators } from "vue-validation";
import { useHelpers } from "@/composables/use-helpers";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { onNavigationBarButtonTap } from "uni-composition-api";
import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { pt } = useI18n({ page: "user/account-login" });
    const { isRequired, isPhoneNumber, isPassword, validate } = useValidators();
    const { accountLogin } = useUsers();
    const cForm = reactive({
      model: {},
      rules: {
        account: [
          isRequired({ message: pt("$g.inputs.phoneNumber") }),
          isPhoneNumber(),
        ],
        password: [
          isRequired({ message: pt("$g.inputs.password") }),
          isPassword(),
        ],
      },
      errors: {},
    });

    const submit = async () => {
      await validate(cForm, null, async (errors, { account, password }) => {
        if (errors) return;

        await accountLogin({ account, password });

        wx.showToast({ title: pt("global.tips.loginSuccess") });
        await useHelpers().sleep(1500);
        wx.switchTab({ url: "/pages/home/index" });
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
