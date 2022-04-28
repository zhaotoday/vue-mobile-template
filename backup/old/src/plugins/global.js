import wx from "wx-bridge";
import time from "jt-time";
import { store } from "@/store";
import { useAuth } from "@lr/composables/use-auth";
import { useConsts } from "@/composables/use-consts";
import { useHelpers } from "@/composables/use-helpers";

export const globalPlugin = {
  install(Vue) {
    Vue.prototype.$wx = wx;
    Vue.prototype.$time = time;
    Vue.prototype.$store = store;
    Vue.prototype.$auth = useAuth();
    Vue.prototype.$consts = useConsts();
    Vue.prototype.$helpers = useHelpers();
  },
};
