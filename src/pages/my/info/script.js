import { reactive, ref } from "@vue/composition-api";
import AsyncValidator from "async-validator";
import wx from "wx-bridge";
import { useValidators } from "vue-validation";
import { WxUsersApi } from "vue-mobile/@lr/apis/wx/wx-users";
import { useBem } from "@/composables/use-bem";
import { useWxUser } from "vue-mobile/@lr/composables/use-wx-user";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useHelpers } from "@/composables/use-helpers";
import { PublicWxUsersApi } from "vue-mobile/@lr/apis/public/wx-users";
import { onShow } from "@dcloudio/uni-app";
import { useRoute } from "@/composables/use-route";

export default {
  setup() {
    const { isRequired } = useValidators();
    const bem = useBem();
    const { wxUser, getWxUser } = useWxUser();
    const { enums } = useEnums();
    const { currentRoute: query } = useRoute();
    const hasBirthday = ref(false);
    const cForm = reactive({
      model: {
        name: "",
        phoneNumber: "",
        birthday: "",
        gender: -1,
      },
      rules: {
        name: [isRequired({ label: "姓名" })],
        phoneNumber: [isRequired({ message: "请绑定手机号" })],
        birthday: [isRequired({ message: "请选择生日" })],
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
