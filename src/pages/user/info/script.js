import defaultAvatarUrl from "vue-mobile/assets/images/components/avatar/default.png";
import wx from "wx-bridge";
import { reactive, ref } from "@vue/composition-api";
import { useValidators } from "vue-validation";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useHelpers } from "@/composables/use-helpers";
import { onShow } from "uni-composition-api";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useConsts } from "@/composables/use-consts";
import { usersApi } from "vue-mobile/@lr/apis/client/users";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";

export default {
  setup() {
    const { isRequired, validate } = useValidators();

    const { enums } = useEnums();

    const { getHeaders } = useAuth();

    const { getUserInfo, avatarUrl } = useUsers();

    const imageUpload = ref(null);

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

    const chooseImage = async () => {
      const { tempFilePaths } = await wx.chooseImage({
        count: 1,
        sizeType: ["compressed"],
      });

      const { data } = await wx.uploadFile({
        url: `${useConsts().ApiUrl}/client/files/actions/upload`,
        header: getHeaders(),
        filePath: tempFilePaths[0],
        name: "file",
      });
    };

    const onAvatarUpload = async (res) => {
      console.log(res);
      const { statusCode, data } = await wx.uploadFile({
        url: `${useConsts().ApiUrl}/client/files/actions/upload`,
        header: getHeaders(),
        filePath: res,
        name: "file",
      });

      const parsedData = JSON.parse(data);

      if (statusCode === 201) {
        await usersApi.post({
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
      await validate(cForm, null, async (errors, model) => {
        if (errors) return;

        await usersApi.post({
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
      imageUpload,
      defaultAvatarUrl,
      enums,
      cForm,
      avatarUrl,
      onAvatarUpload,
      validate,
      submit,
      chooseImage,
    };
  },
};
