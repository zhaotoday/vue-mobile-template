import wx from "wx-bridge";
import { useHelpers } from "@/composables/use-helpers";
import { useWxMp } from "vue-mobile/@lr/composables/use-wx-mp";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useMockUser } from "vue-mobile/@lr/composables/use-mock-user";
import { onHide, onShow } from "uni-composition-api";

export default {
  setup() {
    const { getUserProfileAndLogin, onRefreshLoginCode, offRefreshLoginCode } =
      useWxMp();
    const { wxLogin } = useUsers();
    const { mockLogin } = useMockUser();

    // #ifdefMP
    onShow(async () => {
      await onRefreshLoginCode();
    });

    onHide(() => {
      offRefreshLoginCode();
    });
    // #endif

    const login = async () => {
      try {
        // #ifdef MP
        await wxLogin(await getUserProfileAndLogin());
        // #endif

        // #ifdef H5
        await mockLogin();
        // #endif

        wx.showToast({ title: "登陆成功" });
        await useHelpers().sleep(1500);
        wx.navigateBack();
      } catch (e) {
        wx.navigateBack();
      }
    };

    return {
      logoUrl: require("@/static/logo.png"),
      login,
    };
  },
};
