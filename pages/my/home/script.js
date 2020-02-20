import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class ExamplePage extends Vue {
  async navigateToMyInfo() {
    await this.loggedIn();

    this.$wx.navigateTo({
      url: "/pages/my/info/index"
    });
  }
}
