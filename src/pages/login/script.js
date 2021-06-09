import wx from "wx-bridge";
import { helpers } from "@/utils/helpers";
import { useWxUser } from "vue-mobile/@lr/composables/use-wx-user";
import { useMockWxUser } from "vue-mobile/@lr/composables/use-mock-wx-user";

export default {
  setup() {
    const getUserInfo = async () => {
      try {
        // #ifdef MP
        await useWxUser().login();
        // #endif

        // #ifdef H5
        await useMockWxUser().login();
        // #endif

        wx.showToast({ title: "登陆成功" });
        await helpers.sleep(1500);
        wx.navigateBack();
      } catch (e) {
        wx.navigateBack();
      }
    };

    return {
      getUserInfo,
    };
  },
};
