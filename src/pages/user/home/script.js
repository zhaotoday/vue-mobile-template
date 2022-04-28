import defaultAvatarUrl from "vue-mobile/assets/images/components/avatar/default.png";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { onShow } from "uni-composition-api";
import wx from "wx-bridge";
import { useI18n } from "vue-mobile/composables/use-i18n";
import { store } from "@/store";
import { useTabBarBadge } from "@/composables/use-tab-bar-badge";
import mainMenus from "./utils/main-menus.json";

export default {
  setup() {
    const { pt, $t } = useI18n({ page: "user/home" });

    const { loggedIn, user, getUserInfo, navigateTo, name, avatarUrl, logout } =
      useUsers();

    onShow(async () => {
      useTabBarBadge().initialize();

      if (loggedIn()) await getUserInfo();
    });

    const logoutAndGotoHome = async () => {
      const { confirm } = await wx.showModal({
        title: $t("tips.pleaseConfirm"),
        content: pt("tips.confirmLogout"),
        confirmText: $t("$.logout"),
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
