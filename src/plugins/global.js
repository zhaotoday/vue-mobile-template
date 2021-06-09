import wx from "wx-bridge";
import time from "jt-time";
import { auth } from "lr/utils/auth";
import { globalMixin } from "@/mixins/global";
import { store } from "@/store";
import { consts } from "@/utils/consts";
import { helpers } from "@/utils/helpers";

export const globalPlugin = {
  install(Vue) {
    Vue.prototype.$wx = wx;
    Vue.prototype.$time = time;
    Vue.prototype.$auth = auth;
    Vue.prototype.$store = store;
    Vue.prototype.$consts = consts;
    Vue.prototype.$helpers = helpers;

    Vue.mixin(globalMixin);
  },
};
