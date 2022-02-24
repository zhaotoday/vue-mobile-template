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
import { useCos, UploadTo } from "use-cos";
import { filesApi } from "@/apis/client/files";
import { tencentCloudCosApi } from "@/apis/client/tencent-cloud-cos";

export default {
  setup() {
    const { isRequired, validate } = useValidators();

    const { enums } = useEnums();

    const { getHeaders } = useAuth();

    const { getUserInfo, avatarUrl } = useUsers();

    const cos = useCos({
      cosApi: tencentCloudCosApi,
      filesApi,
      uploadTo: UploadTo.TencentCloudOss,
      bucket: "test-1251051722",
      region: "ap-shanghai",
    });

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
      await cos.initialize();
    });

    const onAvatarUpload = async (res) => {
      console.log(res, "===");

      const { statusCode, data } = await wx.uploadFile({
        url: `${useConsts().ApiUrl}/client/files/actions/upload`,
        header: getHeaders(),
        filePath: res.path,
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
      defaultAvatarUrl,
      enums,
      cForm,
      avatarUrl,
      onAvatarUpload,
      validate,
      submit,
    };
  },
};
