import AsyncValidator from "async-validator";
import { onMounted, onUnmounted, reactive } from "@vue/composition-api";
import wx from "wx-bridge";
import { useFormValidators } from "@lr/composables/use-form-validators";
import { router } from "@/router";
import { WxUsersApi } from "@lr/apis/wx/wx-users";
import { useWxUser } from "@lr/composables/use-wx-user";
import { useHelpers } from "@/composables/use-helpers";

export default {
  setup() {
    const formValidators = useFormValidators();
    const { query } = router.currentRoute;
    const { getWxUser } = useWxUser();
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

    onMounted(() => {
      wx.setNavigationBarTitle({
        title: query.update ? "更换手机号" : "绑定手机号",
      });
    });

    onUnmounted(() => {
      clearInterval(sendCaptchaTimer);
    });

    const cCaptcha = reactive({
      disabled: false,
      message: "获取验证码",
    });

    let sendCaptchaTimer = null;

    const sendCaptcha = async () => {
      if (cCaptcha.disabled) return;

      const rules = {
        phoneNumber: cForm.rules.phoneNumber,
      };
      const { model } = cForm;

      await new AsyncValidator(rules).validate(model, async (errors) => {
        if (errors) {
          wx.showToast({ title: errors[0].message });
          return;
        }

        await new WxUsersApi().POST({
          action: "sendCaptcha",
          body: {
            phoneNumber: model.phoneNumber,
          },
        });

        wx.showToast({ title: "验证码获取成功" });

        let i = 0;
        let leftSeconds = 120;

        cCaptcha.disabled = true;
        cCaptcha.message = `${leftSeconds}s 后获取`;

        sendCaptchaTimer = setInterval(() => {
          cCaptcha.message = `${leftSeconds - ++i}s 后获取`;

          if (leftSeconds === i) {
            clearInterval(sendCaptchaTimer);

            cCaptcha.disabled = false;
            cCaptcha.message = "获取验证码";
          }
        }, 1000);
      });
    };

    const submit = async () => {
      const { rules, model } = cForm;
      const { phoneNumber, captcha } = model;

      await new AsyncValidator(rules).validate(model, async (errors) => {
        if (errors) {
          wx.showToast({ title: errors[0].message });
          return;
        }

        await new WxUsersApi().POST({
          showLoading: true,
          action: "bindPhoneNumber",
          body: {
            phoneNumber,
            captcha,
          },
        });

        wx.showToast({ title: "绑定成功" });

        await getWxUser();

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
