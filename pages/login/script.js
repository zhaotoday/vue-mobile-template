import { Component, Vue } from "vue-property-decorator";
import mockUser from "we-design/utils/mock-user";
import MpMixin from "we-design/mixins/mp";

@Component({
  mixins: [MpMixin]
})
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
    this.mpLogin(async ({ wxUser, token }) => {
      this.$auth.login({ user: wxUser, token });
      await this.success();
    });
    // #endif
  }
}
