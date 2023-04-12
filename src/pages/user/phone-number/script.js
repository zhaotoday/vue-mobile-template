import wx from "wx-bridge";
import { reactive } from "@vue/composition-api";
import { useValidators } from "vue-validation";
import { useHelpers } from "@/composables/use-helpers";
import { useCaptcha } from "vue-mobile/composables/use-captcha";
import { publicUsersApi } from "vue-mobile/@lr/apis/public/users";
import { usersApi } from "vue-mobile/@lr/apis/client/users";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useRoute } from "vue-mobile/composables/use-route";
import { useI18n } from "vue-mobile/composables/use-i18n";

export default {
  setup() {
    const { $t } = useI18n({ page: "user/phone-number" });

    const { currentRoute } = useRoute();

    const { isRequired, isPhoneNumber, isCaptcha, validate } = useValidators();

    const { getUserInfo } = useUsers();

    const cForm = reactive({
      model: {},
      rules: {
        phoneNumber: [isRequired({ label: "手机号" }), isPhoneNumber()],
        captcha: [isRequired({ label: "验证码" }), isCaptcha()],
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
      await validate(cForm, null, async (errors, { phoneNumber, captcha }) => {
        if (errors) return;

        await usersApi.post({
          action: "phoneNumberBind",
          body: {
            phoneNumber,
            captcha,
          },
        });

        await uni.showToast({ title: "绑定成功" });
        await getUserInfo();
        await useHelpers().sleep(1500);

        if (currentRoute.query.firstBind) {
          await uni.switchTab({ url: "/pages/memo/index" });
        } else {
          await uni.navigateBack();
        }
      });
    };

    return {
      currentRoute,
      cForm,
      cCaptcha,
      sendCaptcha,
      validate,
      submit,
    };
  },
};
