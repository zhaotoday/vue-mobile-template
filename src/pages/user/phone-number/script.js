import { reactive } from "@vue/composition-api";
import wx from "wx-bridge";
import { useValidators } from "vue-validation";
import { useHelpers } from "@/composables/use-helpers";
import { useCaptcha } from "vue-mobile/@lr/composables/use-captcha";
import { publicUsersApi } from "vue-mobile/@lr/apis/public/users";
import { usersApi } from "vue-mobile/@lr/apis/client/users";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useRoute } from "vue-mobile/composables/use-route";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const { isRequired, isPhoneNumber, isCaptcha, validate } = useValidators();

    const { getUserInfo } = useUsers();

    const cForm = reactive({
      model: {},
      rules: {
        phoneNumber: [isRequired({ label: "手机号" }), isPhoneNumber()],
        captcha: [isRequired({ label: "验证码" }), isCaptcha()],
      },
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
          showLoading: true,
          action: "phoneNumberBind",
          body: {
            phoneNumber,
            captcha,
          },
        });

        wx.showToast({ title: "绑定成功" });
        await getUserInfo();
        await useHelpers().sleep(1500);

        if (currentRoute.query.firstBind) {
          wx.switchTab({ url: "/pages/memo/index" });
        } else {
          wx.navigateBack();
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
