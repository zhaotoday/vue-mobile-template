import wx from "wx-bridge";
import time from "jt-time";
import { store } from "@/store";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";
import { useConsts } from "@/composables/use-consts";
import { useHelpers } from "@/composables/use-helpers";

export const config = (app) => {
  app.config.globalProperties.$wx = wx;
  app.config.globalProperties.$time = time;
  app.config.globalProperties.$store = store;
  app.config.globalProperties.$auth = useAuth();
  app.config.globalProperties.$consts = useConsts();
  app.config.globalProperties.$helpers = useHelpers();
};
