import AsyncValidator from "async-validator";
import { reactive } from "@vue/composition-api";
import wx from "wx-bridge";
import { useFormValidators } from "@lr/composables/use-form-validators";
import { useHelpers } from "@/composables/use-helpers";
import { useCaptcha } from "vue-mobile/@lr/composables/use-captcha";
import { PublicUsersApi } from "vue-mobile/@lr/apis/public/users";

export default {
  setup() {
    const formValidators = useFormValidators();
    const cForm = reactive({
      model: {},
      rules: {
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
      const { phoneNumber, captcha, password } = model;

      await new AsyncValidator(rules).validate(model, async (errors) => {
        if (errors) {
          wx.showToast({ title: errors[0].message });
          return;
        }

        await new PublicUsersApi().post({
          showLoading: true,
          action: "resetPassword",
          body: {
            phoneNumber,
            captcha,
            password,
          },
        });

        wx.showToast({ title: "重置成功" });
        await useHelpers().sleep(1500);
        wx.navigateBack();
      });
    };

    return {
      cForm,
      cCaptcha,
      sendCaptcha,
      submit,
    };
  },
};
