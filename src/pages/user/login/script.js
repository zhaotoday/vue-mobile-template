import wx from "wx-bridge";
import { useBem } from "@/composables/use-bem";
import { useWxUser } from "vue-mobile/@lr/composables/use-wx-user";
import { useMockWxUser } from "vue-mobile/@lr/composables/use-mock-wx-user";

export default {
  setup() {
    const bem = useBem();
    const { appLogin } = useWxUser();

    const login = async () => {
      // #ifdef APP-PLUS
      const {
        authResult: { access_token: accessToken, openid: openId },
      } = await wx.login({ provider: "weixin" });

      await appLogin({ accessToken, openId });
      // #endif

      // #ifdef H5
      await useMockWxUser().login();
      // #endif

      wx.switchTab({ url: "/pages/home/index" });
    };

    return {
      bem,
      login,
    };
  },
};
