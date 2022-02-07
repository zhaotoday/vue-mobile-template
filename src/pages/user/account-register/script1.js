import AsyncValidator from "async-validator";
import { reactive } from "@vue/composition-api";
import wx from "wx-bridge";
import { useFormValidators } from "@lr/composables/use-form-validators";
import { useHelpers } from "@/composables/use-helpers";
import { useBem } from "@/composables/use-bem";
import { useCaptcha } from "@lr/composables/use-captcha";
import { PublicUsersApi } from "vue-mobile/@lr/apis/public/users";
import { useUser } from "@lr/composables/use-user";

export default {
  setup() {
    const bem = useBem();
    const formValidators = useFormValidators();
    const { accountRegister } = useUser();
    const cForm = reactive({
      model: {},
      rules: {
        nickName: [formValidators.required({ label: "昵称" })],
        phoneNumber: [
          formValidators.required({ label: "手机号" }),
          formValidators.phoneNumber(),
        ],
        captcha: [
          formValidators.required({ label: "验证码" }),
          formValidators.captcha(),
        ],
        password: [
          formValidators.required({ label: "密码" }),
          formValidators.password(),
        ],
        confirmPassword: [
          formValidators.required({ message: "请确认密码" }),
          formValidators.password({ label: "确认密码" }),
          {
            validator(rule, value) {
              return value === cForm.model.password;
            },
            message: "两次密码输入不一致",
          },
        ],
      },
    });

    const { cCaptcha, sendCaptcha } = useCaptcha({
      model: () => ({ phoneNumber: cForm.model.phoneNumber }),
      rules: () => ({ phoneNumber: cForm.rules.phoneNumber }),
      request: () =>
        new PublicUsersApi().post({
          action: "sendCaptcha",
          body: {
            phoneNumber: cForm.model.phoneNumber,
          },
        }),
    });

    const submit = async () => {
      const { rules, model } = cForm;
      const { nickName, phoneNumber, captcha, password } = model;

      await new AsyncValidator(rules).validate(model, async (errors) => {
        if (errors) {
          wx.showToast({ title: errors[0].message });
          return;
        }

        await accountRegister({ nickName, phoneNumber, captcha, password });

        wx.showToast({ title: "注册成功" });
        await useHelpers().sleep(1500);
        wx.navigateTo({
          url: "/pages/phone-number/index?from=acount-register",
        });
      });
    };

    return {
      bem,
      cForm,
      cCaptcha,
      sendCaptcha,
      submit,
    };
  },
};
