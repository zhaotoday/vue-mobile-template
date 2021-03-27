import wx from "wx-bridge";
import time from "jt-time";
import { auth } from "vue-mobile/@liruan/utils/auth";
import GlobalMixin from "@/mixins/global";
import {store} from "@/store";
import consts from "@/utils/consts";
import helpers from "@/utils/helpers";

export default {
  install(Vue) {
    Vue.prototype.$time = time;
    Vue.prototype.$auth = auth;
    Vue.prototype.$wx = wx;
    Vue.prototype.$store = store;
    Vue.prototype.$consts = consts;
    Vue.prototype.$helpers = helpers;

    Vue.mixin(GlobalMixin);
    Vue.mixin(WxUserMixin);
    Vue.mixin(DictsMixin);
  }
};
