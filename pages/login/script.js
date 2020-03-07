import { Vue, Component } from "vue-property-decorator";
import mockUser from "we-design/utils/mock-user";

@Component
export default class Login extends Vue {
  async success() {
    this.$store.dispatch("setUser", {
      user: this.$auth.get()["user"]
    });
    this.$wx.showToast({ title: "登录成功" });

    await this.$helpers.sleep(1500);
    await this.infoModified();

    this.$wx.navigateBack();
  }

  async getUserInfo() {
    // #ifdef H5
    mockUser.login();
    await this.success();
    // #endif

    // #ifndef H5
    const getSettingRes = await this.$wx.getSetting();

    if (!getSettingRes.authSetting["scope.userInfo"]) {
      this.$wx.navigateBack();
    } else {
      const { code } = await this.$wx.login();
      const { iv, encryptedData } = await this.$wx.getUserInfo({
        withCredentials: true
      });
      const {
        data: { wxUser, token }
      } = await this.$store.dispatch("public/wxUsers/postAction", {
        showLoading: true,
        action: "login",
        body: { code, iv, encryptedData }
      });

      this.$auth.login({ user: wxUser, token });

      await this.success();
    }
    // #endif
  }
}
