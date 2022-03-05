import defaultAvatarUrl from "vue-mobile/assets/images/components/avatar/default.png";
import wx from "wx-bridge";
import { reactive } from "@vue/composition-api";
import { useValidators } from "vue-validation";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useHelpers } from "@/composables/use-helpers";
import { onShow } from "uni-composition-api";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useConsts } from "@/composables/use-consts";
import { usersApi } from "vue-mobile/@lr/apis/client/users";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";
import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { $t } = useI18n({ path: "user/info" });

    const { isRequired, validate } = useValidators();

    const { enums } = useEnums();

    const { getHeaders } = useAuth();

    const { getUserInfo, avatarUrl } = useUsers();

    const cForm = reactive({
      model: {
        avatarFileId: 0,
        name: "",
        gender: -1,
      },
      rules: {
        name: [isRequired({ message: $t("inputs.name") })],
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

      const { statusCode, data } = await wx.uploadFile({
        url: `${useConsts().ApiUrl}/client/files/actions/upload`,
        header: getHeaders(),
        formData: { dir: "avatars" },
        filePath: tempFilePaths[0],
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

        wx.showToast({ title: $t("tips.saveSuccess") });
        await getUserInfo();
        await useHelpers().sleep(1500);
        wx.navigateBack();
      });
    };

    return {
      defaultAvatarUrl,
      enums,
      cForm,
      avatarUrl,
      validate,
      submit,
      chooseImage,
    };
  },
};
