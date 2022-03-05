import wx from "wx-bridge";
import { reactive } from "@vue/composition-api";
import { useValidators } from "vue-validation";
import { useHelpers } from "@/composables/use-helpers";
import { useCaptcha } from "vue-mobile/@lr/composables/use-captcha";
import { publicUsersApi } from "vue-mobile/@lr/apis/public/users";
import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { $t } = useI18n({ path: "user/password" });

    const { isRequired, isPhoneNumber, isCaptcha, isPassword, validate } =
      useValidators();

    const cForm = reactive({
      model: {},
      rules: {
        phoneNumber: [
          isRequired({ message: $t("inputs.phoneNumber") }),
          isPhoneNumber(),
        ],
        captcha: [isRequired({ message: $t("inputs.captcha") }), isCaptcha()],
        password: [
          isRequired({ message: $t("inputs.password") }),
          isPassword(),
        ],
        confirmPassword: [
          isRequired({ message: $t("inputs.confirmPassword") }),
          isPassword({ message: $t("inputs.passwordFormatError") }),
          {
            validator: (rule, value) => value === cForm.model.password,
            message: $t("inputs.confirmPasswordNotEqualPassword"),
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
