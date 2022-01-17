import { reactive, ref } from "@vue/composition-api";
import AsyncValidator from "async-validator";
import wx from "wx-bridge";
import { useValidators } from "vue-validation";
import { usersApi } from "vue-mobile/@lr/apis/client/users";
import { useBem } from "@/composables/use-bem";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useHelpers } from "@/composables/use-helpers";
import { publicUsersApi } from "vue-mobile/@lr/apis/public/users";
import { onShow } from "uni-composition-api";
import { useRoute } from "vue-mobile/composables/use-route";

export default {
  setup() {
    const { isRequired } = useValidators();
    const bem = useBem();
    const { user, getUserInfo } = useUsers();
    const { enums } = useEnums();
    const { currentRoute } = useRoute();

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
      return usersApi.get({ id: user.value.id });
    };

    onShow(async () => {
      cForm.model = await getDetail();
      hasBirthday.value = !!cForm.model.birthday;
    });

    const onGetPhoneNumber = async (e) => {
      const { iv, encryptedData } = e.detail;
      const { code } = await wx.login();
      const { phoneNumber } = await publicUsersApi.post({
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
          id: user.value.id,
          body: model,
        });

        wx.showToast({ title: "保存成功" });

        await getUserInfo();

        await useHelpers().sleep(1500);

        wx.navigateBack({ delta: currentRoute.query.from === "login" ? 2 : 1 });
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
