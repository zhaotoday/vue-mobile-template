import defaultAvatarUrl from "vue-mobile/assets/images/components/avatar/default.png";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { onShow } from "uni-composition-api";
import wx from "wx-bridge";
import { store } from "@/store";
import { useTabBarBadge } from "@/composables/use-tab-bar-badge";
import mainMenus from "./utils/main-menus.json";

export default {
  setup() {
    const { loggedIn, user, getUserInfo, navigateTo, name, avatarUrl, logout } =
      useUsers();

    onShow(async () => {
      useTabBarBadge().initialize();

      if (loggedIn()) await getUserInfo();
    });

    const logoutAndGotoHome = async () => {
      const { confirm } = await uni.showModal({
        title: "请确认",
        content: "确认退出账号吗？",
        confirmText: "退出账号",
      });

      if (confirm) {
        await logout();
        uni.showToast({ title: "退出成功" });
      }
    };

    const wxMpBind = () => {};

    return {
      defaultAvatarUrl,
      loggedIn,
      user,
      name,
      avatarUrl,
      mainMenus,
      navigateTo,
      logoutAndGotoHome,
      wxMpBind,
      logout,
    };
  },
  // app computed bug
  computed: {
    users() {
      return store.state.users;
    },
  },
};
