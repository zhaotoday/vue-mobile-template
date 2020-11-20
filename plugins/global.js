import time from "jt-time";
import auth from "vue-mobile/utils/auth";
import wxb from "vue-mobile/utils/wxb";
import GlobalMixin from "@/mixins/global";
import WxUserMixin from "vue-mobile/mixins/wx-user";
import DictsMixin from "vue-mobile/mixins/dicts";
import store from "@/store";
import consts from "@/utils/consts";
import helpers from "@/utils/helpers";

export default {
  install(Vue) {
    Vue.prototype.$time = time;
    Vue.prototype.$auth = auth;
    Vue.prototype.$wx = wxb;
    Vue.prototype.$store = store;
    Vue.prototype.$consts = consts;
    Vue.prototype.$helpers = helpers;

    Vue.mixin(GlobalMixin);
    Vue.mixin(WxUserMixin);
    Vue.mixin(DictsMixin);
  }
};
