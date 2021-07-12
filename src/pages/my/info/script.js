import { reactive, ref } from "@vue/composition-api";
import AsyncValidator from "async-validator";
import wx from "wx-bridge";
import { formValidators } from "@lr/utils/form-validators";
import { WxUsersApi } from "@lr/apis/wx/wx-users";
import { useWxUser } from "@lr/composables/use-wx-user";
import { useEnums } from "@lr/composables/use-enums";
import { helpers } from "@/utils/helpers";
import { router } from "@/router";
import { PublicWxUsersApi } from "vue-mobile/@lr/apis/public/wx-users";
import { onShow } from "uni-composition-api";

export default {
  setup() {
    const { wxUser, getWxUser } = useWxUser();
    const { enums } = useEnums();
    const { query } = router.currentRoute;
    const hasBirthday = ref(false);
    const cForm = reactive({
      model: {
        name: "",
        phoneNumber: "",
        birthday: "",
        gender: -1,
      },
      rules: {
        name: [formValidators.required({ label: "姓名" })],
        phoneNumber: [formValidators.required({ message: "请绑定手机号" })],
        birthday: [formValidators.required({ message: "请选择生日" })],
      },
    });

    const getDetail = async () => {
      return new WxUsersApi().GET({ id: wxUser.value.id });
    };

    onShow(async () => {
      cForm.model = await getDetail();
      hasBirthday.value = !!cForm.model.birthday;
    });

    const onGetPhoneNumber = async (e) => {
      const { iv, encryptedData } = e.detail;
      const { code } = await wx.login();
      const { phoneNumber } = await new PublicWxUsersApi().POST({
        action: "getPhoneNumber",
        body: { code, iv, encryptedData },
      });

      cForm.model.phoneNumber = phoneNumber;
    };

    const onBirthdayChange = (e) => {
      cForm.model.birthday = e.detail.value;
    };

    const onGenderChange = (e) => {
      const pickerIndex = +e.detail.value;

      cForm.model.gender = enums.value.Gender.filter(
        (item) => item.value !== 0
      )[pickerIndex].value;
    };

    const submit = async () => {
      const { model, rules } = cForm;

      await new AsyncValidator(rules).validate(model, async (errors) => {
        if (errors) {
          wx.showToast({ title: errors[0].message });
          return;
        }

        await new WxUsersApi().PUT({
          id: wxUser.value.id,
          body: model,
        });

        wx.showToast({ title: "保存成功" });

        await getWxUser();

        await helpers.sleep(1500);

        wx.navigateBack({ delta: query.from === "login" ? 2 : 1 });
      });
    };

    return {
      enums,
      hasBirthday,
      cForm,
      onGetPhoneNumber,
      onBirthdayChange,
      onGenderChange,
      submit,
    };
  },
};
