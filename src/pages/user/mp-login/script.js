import wx from "wx-bridge";
import { useHelpers } from "@/composables/use-helpers";
import { useWxMp } from "vue-mobile/@lr/composables/use-wx-mp";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useMockUser } from "vue-mobile/@lr/composables/use-mock-user";
import { onLoad, onShow, onUnload } from "uni-composition-api";

export default {
  setup(props, context) {
    const { getUserProfileAndLogin, onRefreshLoginCode, offRefreshLoginCode } =
      useWxMp();
    const { wxLogin, setUser, setToken, logout } = useUsers();
    const { mockLogin } = useMockUser();

    // #ifdef MP
    onLoad(async () => {
      await onRefreshLoginCode();
    });

    onUnload(() => {
      offRefreshLoginCode();
    });
    // #endif

    onShow(async () => {
      await logout();
    });

    const login = async () => {
      try {
        // #ifdef MP
        const { user, token } = await wxLogin({
          ...(await getUserProfileAndLogin()),
          store: false,
        });

        if (!user.phoneNumber) {
          context.refs.phoneNumber.show({ token });
        } else {
          await setUser({ user });
          await setToken({ token });
          wx.showToast({ title: "登陆成功" });
          await useHelpers().sleep(1500);
          wx.navigateBack();
        }
        // #endif

        // #ifdef H5
        await mockLogin();
        wx.showToast({ title: "登陆成功" });
        await useHelpers().sleep(1500);
        wx.navigateBack();
        // #endif
      } catch (e) {
        wx.navigateBack();
      }
    };

    return {
      login,
    };
  },
};
