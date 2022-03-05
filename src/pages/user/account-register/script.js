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
        name: [isRequired({ message: t("$g.inputs.name") })],
        phoneNumber: [
          isRequired({ label: t("$g.inputs.phoneNumber") }),
          isPhoneNumber(),
        ],
        captcha: [isRequired({ message: t("$g.inputs.captcha") }), isCaptcha()],
        password: [
          isRequired({ message: t("$g.inputs.password") }),
          isPassword(),
        ],
        confirmPassword: [
          isRequired({ message: t("$g.inputs.confirmPassword") }),
          isPassword({ label: "确认密码" }),
          {
            validator: (rule, value) => value === cForm.model.password,
            message: t("$g.inputs.confirmPasswordNotEqualPassword"),
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
