import time from "jt-time";
import auth from "we-design/utils/auth";
import wxb from "we-design/utils/wxb";
import globalMixin from "we-design/mixins/global";
import wxUserMixin from "we-design/mixins/wx-user";
import dictsMixin from "we-design/mixins/dicts";
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

    Vue.mixin(globalMixin);
    Vue.mixin(wxUserMixin);
    Vue.mixin(dictsMixin);
  }
};
