import defaultAvatarUrl from "vue-mobile/assets/images/components/avatar/default.png";
import { reactive } from "@vue/composition-api";
import { useValidators } from "vue-validation";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useHelpers } from "@/composables/use-helpers";
import { onShow } from "uni-composition-api";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useConsts } from "@/composables/use-consts";
import { usersApi } from "vue-mobile/@lr/apis/client/users";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";
import { permission } from "uni-plugins/utils/permission";

export default {
  setup() {
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
        name: [isRequired({ label: "姓名" })],
      },
      errors: {},
    });

    onShow(async () => {
      cForm.model = await getUserInfo();
    });

    const chooseImage = async () => {
      // #ifdef APP-PLUS
      await permission.request("CAMERA");
      // #endif

      const { tempFilePaths } = await uni.chooseImage({
        count: 1,
        sizeType: ["compressed"],
      });

      const { statusCode, data } = await uni.uploadFile({
        url: `${useConsts().API_URL}/client/files/actions/upload`,
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
        await uni.showToast({ title: parsedData.error.message });
      }
    };

    const submit = async () => {
      await validate(cForm, null, async (errors, model) => {
        if (errors) return;

        await usersApi.post({
          action: "updateUserInfo",
          body: model,
        });

        await uni.showToast({ title: "保存成功" });
        await getUserInfo();
        await useHelpers().sleep(1500);
        await uni.navigateBack();
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
