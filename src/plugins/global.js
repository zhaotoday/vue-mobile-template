import wx from "wx-bridge";
import time from "jt-time";
import { store } from "@/store";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";
import { useConsts } from "@/composables/use-consts";
import { useHelpers } from "@/composables/use-helpers";
import { useBem } from "@/composables/use-bem";

export const globalPlugin = {
  install(Vue) {
    Vue.prototype.$wx = wx;
    Vue.prototype.$time = time;
    Vue.prototype.$store = store;
    Vue.prototype.$auth = useAuth();
    Vue.prototype.$consts = useConsts();
    Vue.prototype.$helpers = useHelpers();
    Vue.prototype.$bem = useBem();
  },
};
