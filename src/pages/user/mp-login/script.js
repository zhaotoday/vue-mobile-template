import wx from "wx-bridge";
import { useHelpers } from "@/composables/use-helpers";
import { useWxMp } from "vue-mobile/@lr/composables/use-wx-mp";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useMockUser } from "vue-mobile/@lr/composables/use-mock-user";
import { onLoad, onUnload } from "uni-composition-api";
import { reactive } from "@vue/composition-api";
import { usersApi } from "vue-mobile/@lr/apis/client/users";

export default {
  setup() {
    const { getUserProfileAndLogin, onRefreshLoginCode, offRefreshLoginCode } =
      useWxMp();
    const { wxLogin } = useUsers();
    const { mockLogin } = useMockUser();

    const cPhoneNumber = reactive({
      visible: true,
    });

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

    const onGetPhoneNumber = async (e) => {
      await usersApi.post({
        action: "getWxPhoneNumber",
        body: {
          code: e.detail.code,
        },
      });
    };

    return {
      logoUrl: require("@/static/logo.png"),
      login,
      cPhoneNumber,
      onGetPhoneNumber,
    };
  },
};
