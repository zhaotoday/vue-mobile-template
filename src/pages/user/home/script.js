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

    const menus = [
      {
        name: "我的订单",
        icon: "order",
      },
      {
        name: "收货地址",
        icon: "address",
      },
      {
        name: "我的收藏",
        icon: "heart",
      },
      {
        name: "最近购买",
        icon: "cart",
      },
    ];

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

    const wxMpBind = () => {};

    return {
      defaultAvatarUrl,
      loggedIn,
      userInfo,
      name,
      avatarUrl,
      menus,
      navigateTo,
      logoutAndGotoLogin,
      wxMpBind,
    };
  },
};
