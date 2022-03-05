import wx from "wx-bridge";
import { reactive } from "@vue/composition-api";
import { useValidators } from "vue-validation";
import { useHelpers } from "@/composables/use-helpers";
import { useCaptcha } from "vue-mobile/@lr/composables/use-captcha";
import { publicUsersApi } from "vue-mobile/@lr/apis/public/users";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { t } = useI18n();

    const { isRequired, isPhoneNumber, isCaptcha, isPassword, validate } =
      useValidators();

    const { accountRegister } = useUsers();

    const cForm = reactive({
      model: {},
      rules: {
        name: [isRequired({ label: "姓名" })],
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
        async (errors, { name, phoneNumber, captcha, password }) => {
          if (errors) return;

          await accountRegister({ name, phoneNumber, captcha, password });

          wx.showToast({ title: t("$g.tips.registerSuccess") });
          await useHelpers().sleep(1500);
          wx.switchTab({ url: "/pages/home/index" });
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
