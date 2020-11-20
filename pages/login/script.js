import { Component, Mixins } from "vue-property-decorator";
import mockUser from "vue-mobile/utils/mock-user";
import MpMixin from "vue-mobile/mixins/mp";

@Component
export default class extends Mixins(MpMixin) {
  async success(user) {
    await this.$store.dispatch("wx/wxUsers/set", {
      key: "wxUser",
      value: user
    });

    this.$wx.showToast({ title: "登录成功" });

    await this.$helpers.sleep(1500);
    await this.infoModified("login");

    this.$wx.navigateBack();
  }

  async getUserInfo() {
    // #ifdef H5
    const { user } = mockUser.login();
    await this.success(user);
    // #endif

    // #ifndef H5
    this.mpLogin(async ({ wxUser, token, extra }) => {
      this.$auth.login({ token });
      await this.success({ ...wxUser, extra });
    });
    // #endif
  }
}
