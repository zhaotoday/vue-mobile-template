import { reactive } from "@vue/composition-api";
import AsyncValidator from "async-validator";
import wx from "wx-bridge";
import { useFormValidators } from "@lr/composables/use-form-validators";
import { useBem } from "@/composables/use-bem";
import { useEnums } from "@lr/composables/use-enums";
import { useHelpers } from "@/composables/use-helpers";
import { onShow } from "uni-composition-api";
import { useUser } from "@lr/composables/use-user";
import { useConsts } from "@/composables/use-consts";
import { UsersApi } from "@lr/apis/client/users";

export default {
  setup() {
    const formValidators = useFormValidators();
    const bem = useBem();
    const { enums } = useEnums();
    const { getUserInfo, avatarUrl } = useUser();
    const cForm = reactive({
      model: {
        avatarFileId: 0,
        name: "",
        nickName: "",
        gender: -1,
        url: "",
      },
      rules: {
        name: [formValidators.required({ label: "姓名" })],
        nickName: [formValidators.required({ label: "昵称" })],
      },
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
        header: useUser().getRequestHeaders(),
        filePath: res.path,
        name: "file",
      });

      const parsedData = JSON.parse(data);

      if (statusCode === 201) {
        await new UsersApi().post({
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

        await new UsersApi().post({
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
