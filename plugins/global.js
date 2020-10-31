import time from "jt-time";
import auth from "vue-mobile/utils/auth";
import wxb from "vue-mobile/utils/wxb";
import globalMixin from "vue-mobile/mixins/global";
import wxUserMixin from "vue-mobile/mixins/wx-user";
import dictsMixin from "vue-mobile/mixins/dicts";
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
