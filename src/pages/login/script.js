import wx from "wx-bridge";
import { useHelpers } from "@/composables/use-helpers";
import { useBem } from "@/composables/use-bem";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useMockUser } from "vue-mobile/@lr/composables/use-mock-user";

export default {
  setup() {
    const bem = useBem();

    const login = async () => {
      try {
        // #ifdef MP
        await useUsers().wxMpLogin();
        // #endif

        // #ifdef H5
        await useMockUser().login();
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
