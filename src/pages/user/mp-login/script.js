import wx from "wx-bridge";
import { useHelpers } from "@/composables/use-helpers";
import { useWxMp } from "vue-mobile/@lr/composables/use-wx-mp";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useMockUser } from "vue-mobile/@lr/composables/use-mock-user";

export default {
  setup() {
    const { getUserProfileAndLogin } = useWxMp();
    const { wxLogin } = useUsers();
    const { mockLogin } = useMockUser();

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
