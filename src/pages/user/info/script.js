import { reactive } from "@vue/composition-api";
import AsyncValidator from "async-validator";
import wx from "wx-bridge";
import { useValidators } from "vue-validation";
import { useBem } from "@/composables/use-bem";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useHelpers } from "@/composables/use-helpers";
import { onShow } from "uni-composition-api";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useConsts } from "@/composables/use-consts";
import { usersApi } from "vue-mobile/@lr/apis/client/users";

export default {
  setup() {
    const { isRequired } = useValidators();
    const bem = useBem();
    const { enums } = useEnums();
    const { getUserInfo, avatarUrl } = useUsers();
    const cForm = reactive({
      model: {
        avatarFileId: 0,
        name: "",
        gender: -1,
      },
      rules: {
        name: [isRequired({ label: "姓名" })],
      },
      errors: {},
    });

    onShow(async () => {
      cForm.model = await getUserInfo();
    });

    const onGenderChange = (e) => {
      const pickerIndex = +e.detail.value;

      cForm.model.gender = enums.value.Gender.filter(
        (item) => item.value !== 0
      )[pickerIndex].value;
    };

    const onAvatarUpload = async (res) => {
      const { statusCode, data } = await wx.uploadFile({
        url: `${useConsts().ApiUrl}/client/files/actions/upload`,
        header: useUsers().getRequestHeaders(),
        filePath: res.path,
        name: "file",
      });

      const parsedData = JSON.parse(data);

      if (statusCode === 201) {
        await new usersApi().post({
          action: "updateUserInfo",
          body: { avatarFileId: parsedData.data.id },
        });
        const { avatarFileId } = await getUserInfo();
        cForm.model.avatarFileId = avatarFileId;
      } else {
        wx.showToast({ title: parsedData.error.message });
      }
    };

    const submit = async () => {
      const { model, rules } = cForm;

      await new AsyncValidator(rules).validate(model, async (errors) => {
        if (errors) {
          wx.showToast({ title: errors[0].message });
          return;
        }

        await new usersApi().post({
          action: "updateUserInfo",
          body: model,
        });

        wx.showToast({ title: "保存成功" });
        await getUserInfo();
        await useHelpers().sleep(1500);
        wx.navigateBack();
      });
    };

    return {
      bem,
      enums,
      cForm,
      avatarUrl,
      onGenderChange,
      onAvatarUpload,
      submit,
    };
  },
};
