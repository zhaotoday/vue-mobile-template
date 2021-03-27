import wx from "wx-bridge";
import { helpers } from "@/utils/helpers";
import { useWxUser } from "vue-mobile/@liruan/composables/use-wx-user";

export default {
  setup() {
    const { login } = useWxUser();

    const getUserInfo = async () => {
      try {
        await login();
        wx.showToast({ title: "登陆成功" });
        await helpers.sleep(1500);
        wx.navigateBack();
      } catch (e) {
        wx.navigateBack();
      }
    };

    return {
      getUserInfo
    };
  }
};
