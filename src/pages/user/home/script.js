import defaultAvatarUrl from "vue-mobile/assets/images/components/avatar/default.png";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { onShow } from "uni-composition-api";
import wx from "wx-bridge";
import { useHelpers } from "@/composables/use-helpers";

export default {
  setup() {
    const {
      loggedIn,
      userInfo,
      getUserInfo,
      navigateTo,
      name,
      avatarUrl,
      logout,
    } = useUsers();

    onShow(async () => {
      await getUserInfo();
    });

    const logoutAndGotoLogin = async () => {
      const { confirm } = await wx.showModal({
        title: "请确认",
        content: "确认退出账号吗？",
        confirmText: "退出账号",
      });

      if (confirm) {
        await logout();
        wx.showToast({ title: "退出成功" });
        await useHelpers().sleep(1500);
        wx.navigateTo({ url: "/pages/user/mp-login/index" });
      }
    };

    return {
      defaultAvatarUrl,
      loggedIn,
      userInfo,
      name,
      avatarUrl,
      navigateTo,
      logoutAndGotoLogin,
    };
  },
};
