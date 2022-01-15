import { reactive, ref } from "vue";
import AsyncValidator from "async-validator";
import wx from "wx-bridge";
import { useFormValidators } from "vue-validation";
import { WxUsersApi } from "vue-mobile/@lr/apis/wx/wx-users";
import { useBem } from "@/composables/use-bem";
import { useWxUser } from "vue-mobile/@lr/composables/use-wx-user";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useHelpers } from "@/composables/use-helpers";
import { PublicWxUsersApi } from "vue-mobile/@lr/apis/public/wx-users";
import { onLoad, onShow } from "@dcloudio/uni-app";

export default {
  setup(props, context) {
    onLoad((s) => {
      alert(2233)
      console.log(s, "--");
    });
    console.log(props, context, "---");
    const formValidators = useFormValidators();
    const bem = useBem();
    const { wxUser, getWxUser } = useWxUser();
    const { enums } = useEnums();
    const hasBirthday = ref(false);
    const cForm = reactive({
      model: {
        name: "",
        phoneNumber: "",
        birthday: "",
        gender: -1,
      },
      rules: {
        name: [formValidators.isRequired({ label: "姓名" })],
        phoneNumber: [formValidators.isRequired({ message: "请绑定手机号" })],
        birthday: [formValidators.isRequired({ message: "请选择生日" })],
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

        await useHelpers().sleep(1500);

        wx.navigateBack({ delta: query.from === "login" ? 2 : 1 });
      });
    };

    return {
      bem,
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
