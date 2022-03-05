import defaultAvatarUrl from "vue-mobile/assets/images/components/avatar/default.png";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { onShow } from "uni-composition-api";
import wx from "wx-bridge";
import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { pt, $t } = useI18n({ path: "user/home" });

    const { loggedIn, user, getUserInfo, navigateTo, name, avatarUrl, logout } =
      useUsers();

    const menus = [
      {
        name: "我的订单",
        icon: "order",
        url: "/pages/user/orders/list/index",
      },
      {
        name: "收货地址",
        icon: "address",
        url: "/pages/user/addresses/list/index",
      },
      {
        name: "我的收藏",
        icon: "heart",
        url: "/pages/user/collections/index",
      },
      {
        name: "最近购买",
        icon: "cart",
        url: "/pages/user/buy/index",
      },
    ];

    onShow(async () => {
      if (loggedIn()) await getUserInfo();
    });

    const logoutAndGotoHome = async () => {
      const { confirm } = await wx.showModal({
        title: $t("tips.pleaseConfirm"),
        content: pt("tips.confirmLogout"),
        confirmText: $t("titles.logout"),
      });

      if (confirm) {
        await logout();
        wx.showToast({ title: $t("tips.logoutSuccess") });
      }
    };

    const wxMpBind = () => {};

    return {
      pt,
      defaultAvatarUrl,
      loggedIn,
      user,
      name,
      avatarUrl,
      menus,
      navigateTo,
      logoutAndGotoHome,
      wxMpBind,
      logout,
    };
  },
};
