import wx from "wx-bridge";
import { reactive } from "@vue/composition-api";
import { useValidators } from "vue-validation";
import { useHelpers } from "@/composables/use-helpers";
import { useCaptcha } from "vue-mobile/@lr/composables/use-captcha";
import { publicUsersApi } from "vue-mobile/@lr/apis/public/users";

export default {
  setup() {
    const { isRequired, isPhoneNumber, isCaptcha, isPassword, validate } =
      useValidators();

    const cForm = reactive({
      model: {},
      rules: {
        phoneNumber: [isRequired({ label: "手机号" }), isPhoneNumber()],
        captcha: [isRequired({ label: "验证码" }), isCaptcha()],
        password: [isRequired({ label: "密码" }), isPassword()],
        confirmPassword: [
          isRequired({ message: "请确认密码" }),
          isPassword({ label: "确认密码" }),
          {
            validator: (rule, value) => value === cForm.model.password,
            message: "两次密码输入不一致",
          },
        ],
      },
      errors: {},
    });

    const { cCaptcha, sendCaptcha } = useCaptcha({
      model: () => ({ phoneNumber: cForm.model.phoneNumber }),
      rules: () => ({ phoneNumber: cForm.rules.phoneNumber }),
      request: () =>
        publicUsersApi.post({
          action: "sendSmsCaptcha",
          body: {
            phoneNumber: cForm.model.phoneNumber,
          },
        }),
    });

    const submit = async () => {
      await validate(
        cForm,
        null,
        async (errors, { phoneNumber, captcha, password }) => {
          if (errors) return;

          await publicUsersApi.post({
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
        }
      );
    };

    return {
      cForm,
      cCaptcha,
      sendCaptcha,
      validate,
      submit,
    };
  },
};
