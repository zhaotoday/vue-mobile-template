import wx from "wx-bridge";
import { useHelpers } from "@/composables/use-helpers";
import { useWxMp } from "vue-mobile/@lr/composables/use-wx-mp";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useMockUser } from "vue-mobile/@lr/composables/use-mock-user";
import { onLoad, onUnload } from "uni-composition-api";
import { ref } from "@vue/composition-api";

export default {
  setup() {
    const { getUserProfileAndLogin, onRefreshLoginCode, offRefreshLoginCode } =
      useWxMp();
    const { wxLogin } = useUsers();
    const { mockLogin } = useMockUser();

    const phoneNumber = ref(null);

    // #ifdef MP
    onLoad(async () => {
      await onRefreshLoginCode();
    });

    onUnload(() => {
      offRefreshLoginCode();
    });
    // #endif

    const login = async () => {
      try {
        // #ifdef MP
        const { user } = await wxLogin(await getUserProfileAndLogin());

        if (!user.phoneNumber) {
          phoneNumber.value.show();
        } else {
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
      logoUrl: require("@/static/logo.png"),
      phoneNumber,
      login,
    };
  },
};
