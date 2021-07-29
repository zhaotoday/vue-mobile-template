import wx from "wx-bridge";
import { useHelpers } from "@/composables/use-helpers";
import { useBem } from "@/composables/use-bem";
import { useWxUser } from "@lr/composables/use-wx-user";
import { useMockWxUser } from "@lr/composables/use-mock-wx-user";

export default {
  setup() {
    const bem = useBem();
    const { appLogin } = useWxUser();

    const login = async () => {
      try {
        // #ifdef MP
        await useWxUser().login();
        // #endif

        // #ifdef H5
        await useMockWxUser().login();
        // #endif

        // #ifdef APP-PLUS
        const {
          authResult: { access_token: accessToken, openid: openId },
        } = await wx.login({ provider: "weixin" });

        await appLogin({ accessToken, openId });
        // #endif

        wx.showToast({ title: "登陆成功" });
        await useHelpers().sleep(1500);
        wx.navigateBack();
      } catch (e) {
        wx.navigateBack();
      }
    };

    return {
      bem,
      login,
    };
  },
};
