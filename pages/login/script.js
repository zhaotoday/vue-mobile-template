import Vue from "vue";
import { Component } from "vue-property-decorator";
import CLogo from "we-design/components/logo";
import mockUser from "we-design/utils/mock-user";

@Component({
  components: { CLogo }
})
export default class LoginPage extends Vue {
  async success() {
    this.$wx.showToast({ title: "登录成功" });

    await this.$helpers.sleep(1500);

    if (!this.infoModified()) {
      this.$wx.redirectTo({
        url: this.$consts.INFO_PAGE
      });
    } else {
      this.$wx.navigateBack();
    }
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
      const loginRes = await this.$wx.login();
      const { iv, encryptedData } = await this.$wx.getUserInfo({
        withCredentials: true
      });
      const wxUsersPostActionRes = await this.$store.dispatch(
        "public/wxUsers/postAction",
        {
          showLoading: true,
          action: "login",
          body: {
            code: loginRes.code,
            iv,
            encryptedData,
            loginRes
          }
        }
      );
      const { wxUser, token } = wxUsersPostActionRes.data;

      this.$auth.login({ user: wxUser, token });

      await this.success();
    }
    // #endif
  }
}
