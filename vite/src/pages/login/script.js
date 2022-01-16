import wx from "wx-bridge";
import { useHelpers } from "@/composables/use-helpers";
import { useBem } from "@/composables/use-bem";
import { useWxUser } from "vue-mobile/@lr/composables/use-wx-user";
import { useMockWxUser } from "vue-mobile/@lr/composables/use-mock-wx-user";

export default {
  setup() {
    const bem = useBem();

    const login = async () => {
      try {
        // #ifdef MP
        await useWxUser().login();
        // #endif

        // #ifdef H5
        await useMockWxUser().login();
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