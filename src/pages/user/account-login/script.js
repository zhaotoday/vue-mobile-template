import AsyncValidator from "async-validator";
import { reactive } from "@vue/composition-api";
import wx from "wx-bridge";
import { useValidators } from "vue-validation";
import { useHelpers } from "@/composables/use-helpers";
import { useUsers } from "vue-mobile/@lr/composables/use-users";

export default {
  setup() {
    const { isRequired, isPhoneNumber, isPassword, validate } = useValidators();
    const { accountLogin } = useUsers();
    const cForm = reactive({
      model: {},
      rules: {
        account: [isRequired({ label: "账号" }), isPhoneNumber()],
        password: [isRequired({ label: "密码" }), isPassword()],
      },
      errors: {},
    });

    const submit = async () => {
      const { rules, model } = cForm;
      const { account, password } = model;

      await new AsyncValidator(rules).validate(model, async (errors) => {
        if (errors) {
          wx.showToast({ title: errors[0].message });
          return;
        }

        await accountLogin({ account, password });

        wx.showToast({ title: "登录成功" });
        await useHelpers().sleep(1500);
        wx.navigateTo({ url: "/pages/memo/index" });
      });
    };

    return {
      cForm,
      validate,
      submit,
    };
  },
};
