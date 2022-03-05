import wx from "wx-bridge";
import { reactive } from "@vue/composition-api";
import { useValidators } from "vue-validation";
import { useHelpers } from "@/composables/use-helpers";
import { useCaptcha } from "vue-mobile/@lr/composables/use-captcha";
import { publicUsersApi } from "vue-mobile/@lr/apis/public/users";
import { usersApi } from "vue-mobile/@lr/apis/client/users";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { $t } = useI18n({ path: "user/captcha-login" });
    const { isRequired, isPhoneNumber, isCaptcha, validate } = useValidators();

    const { getUserInfo } = useUsers();

    const cForm = reactive({
      model: {},
      rules: {
        phoneNumber: [
          isRequired({ message: $t("inputs.phoneNumber") }),
          isPhoneNumber({ message: $t("inputs.phoneNumberFormatError") }),
        ],
        captcha: [
          isRequired({ message: $t("inputs.captcha") }),
          isCaptcha({ message: $t("tips.captchaFormatError") }),
        ],
      },
      errors: {},
    });

    const { cCaptcha, sendCaptcha } = useCaptcha({
      model: () => ({ phoneNumber: cForm.model.phoneNumber }),
      rules: () => ({ phoneNumber: cForm.rules.phoneNumber }),
      sendCaptchaText: $t("tips.captchaSuccess"),
      request: () =>
        publicUsersApi.post({
          action: "sendSmsCaptcha",
          body: {
            phoneNumber: cForm.model.phoneNumber,
          },
        }),
    });

    const submit = async () => {
      await validate(cForm, null, async (errors, { phoneNumber, captcha }) => {
        if (errors) return;

        await usersApi.post({
          action: "captchaLogin",
          body: {
            phoneNumber,
            captcha,
          },
        });

        wx.showToast({ title: $t("tips.loginSuccess") });
        await getUserInfo();
        await useHelpers().sleep(1500);
      });
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
