import time from "jt-time";
import { useConsts } from "@/composables/use-consts";
import { useHelpers } from "@/composables/use-helpers";
import { useBem } from "@/composables/use-bem";

export const globalPlugin = {
  install(Vue) {
    Vue.prototype.$uni = uni;
    Vue.prototype.$time = time;
    Vue.prototype.$consts = useConsts();
    Vue.prototype.$helpers = useHelpers();
    Vue.prototype.$bem = useBem();

    // #ifdef MP
    // BUGFIX
    Vue.mixin({
      data() {
        return {
          $consts: useConsts(),
          $bem: useBem(),
        };
      },
    });
    // #endif
  },
};
