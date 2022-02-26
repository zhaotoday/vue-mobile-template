import wx from "wx-bridge";
import { reactive } from "@vue/composition-api";
import { useValidators } from "vue-validation";
import { useHelpers } from "@/composables/use-helpers";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { onNavigationBarButtonTap } from "uni-composition-api";

export default {
  setup() {
    const { isRequired, isPhoneNumber, isPassword, validate } = useValidators();
    const { accountLogin } = useUsers();
    const cForm = reactive({
      model: {},
      rules: {
        account: [isRequired({ label: "手机号" }), isPhoneNumber()],
        password: [isRequired({ label: "密码" }), isPassword()],
      },
      errors: {},
    });

    const submit = async () => {
      await validate(cForm, null, async (errors, { account, password }) => {
        if (errors) return;

        await accountLogin({ account, password });

        wx.showToast({ title: "登录成功" });
        await useHelpers().sleep(1500);
        await wx.navigateTo({ url: "/pages/memo/index" });
      });
    };

    onNavigationBarButtonTap(async () => {
      await wx.navigateTo({ url: "/pages/user/account-register/index" });
    });

    return {
      cForm,
      validate,
      submit,
    };
  },
};
