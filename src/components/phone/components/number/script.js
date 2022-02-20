import { reactive } from "@vue/composition-api";
import { usersApi } from "vue-mobile/@lr/apis/client/users";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import wx from "wx-bridge";
import { useHelpers } from "@/composables/use-helpers";

export default {
  setup() {
    const { getUserInfo } = useUsers();

    const cModal = reactive({
      visible: false,
    });

    const show = () => {
      cModal.visible = true;
    };

    const onGetPhoneNumber = async (e) => {
      await usersApi.post({
        action: "getWxPhoneNumber",
        body: { code: e.detail.code },
      });

      await getUserInfo();
      wx.showToast({ title: "登陆成功" });
      await useHelpers().sleep(1500);
      wx.navigateBack();
    };

    return {
      cModal,
      show,
      onGetPhoneNumber,
    };
  },
};
