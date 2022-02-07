import AsyncValidator from "async-validator";
import { reactive } from "@vue/composition-api";
import wx from "wx-bridge";
import { useFormValidators } from "@lr/composables/use-form-validators";
import { useHelpers } from "@/composables/use-helpers";
import { useCaptcha } from "vue-mobile/@lr/composables/use-captcha";
import { PublicUsersApi } from "vue-mobile/@lr/apis/public/users";
import { UsersApi } from "@lr/apis/client/users";
import { useUser } from "@lr/composables/use-user";
import { onShow } from "uni-composition-api";
import { useCurrentRoute } from "vue-mobile/composables/use-current-route";

export default {
  setup() {
    const formValidators = useFormValidators();
    const { getUserInfo } = useUser();
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
      },
    });
    const { currentRoute } = useCurrentRoute();

    const { cCaptcha, sendCaptcha } = useCaptcha({
      model: () => ({ phoneNumber: cForm.model.phoneNumber }),
      rules: () => ({ phoneNumber: cForm.rules.phoneNumber }),
      request: () =>
        new PublicUsersApi().post({
          action: "sendSmsCaptcha",
          body: {
            phoneNumber: cForm.model.phoneNumber,
          },
        }),
    });

    onShow(() => {});

    const submit = async () => {
      const { rules, model } = cForm;
      const { phoneNumber, captcha } = model;

      await new AsyncValidator(rules).validate(model, async (errors) => {
        if (errors) {
          wx.showToast({ title: errors[0].message });
          return;
        }

        await new UsersApi().post({
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
      submit,
    };
  },
};
