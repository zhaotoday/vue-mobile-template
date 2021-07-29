import AsyncValidator from "async-validator";
import { reactive } from "@vue/composition-api";
import wx from "wx-bridge";
import { useFormValidators } from "@lr/composables/use-form-validators";
import { WxUsersApi } from "@lr/apis/wx/wx-users";
import { useWxUser } from "@lr/composables/use-wx-user";
import { useHelpers } from "@/composables/use-helpers";
import { onHide } from "uni-composition-api";

export default {
  setup() {
    const formValidators = useFormValidators();
    const { getWxUser } = useWxUser();
    const cForm = reactive({
      model: {},
      rules: {
        account: [formValidators.required({ label: "账号" })],
        password: [
          formValidators.required({ label: "密码" }),
          formValidators.password(),
        ],
      },
    });

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
      submit,
    };
  },
};
