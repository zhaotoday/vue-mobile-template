import AsyncValidator from "async-validator";
import { reactive } from "@vue/composition-api";
import wx from "wx-bridge";
import { useFormValidators } from "@lr/composables/use-form-validators";
import { useHelpers } from "@/composables/use-helpers";
import { useUser } from "@lr/composables/use-user";

export default {
  setup() {
    const formValidators = useFormValidators();
    const { accountLogin } = useUser();
    const cForm = reactive({
      model: {},
      rules: {
        account: [
          formValidators.required({ label: "账号" }),
          formValidators.phoneNumberOrEmail(),
        ],
        password: [
          formValidators.required({ label: "密码" }),
          formValidators.password(),
        ],
      },
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
      submit,
    };
  },
};
