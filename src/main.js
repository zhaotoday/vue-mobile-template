import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import UniCompositionAPI from "uni-composition-api";
import uView from "uview-ui";
import App from "@/App";
import { globalPlugin } from "@/utils/global-plugin";
import { permission } from "uni-plugins/utils/permission";
import { useComponents } from "@/utils/use-components";

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);
Vue.use(UniCompositionAPI);
Vue.use(globalPlugin);
Vue.use(uView);

useComponents(Vue);

App.mpType = "app";

new Vue({ ...App }).$mount();

(async () => {
  // #ifdef APP-PLUS
  await permission.request("READ_EXTERNAL_STORAGE");
  await permission.request("ACCESS_FINE_LOCATION");
  await permission.request("CAMERA");
  // #endif
})();
