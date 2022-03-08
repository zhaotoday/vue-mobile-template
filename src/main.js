import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import UniCompositionAPI from "uni-composition-api";
import VueI18n from "vue-i18n";
import uView from "uview-ui";
import App from "@/App";
import { locale } from "@/locale";
import { globalPlugin } from "@/utils/global-plugin";
import { router, RouterMount } from "./router";
import { permission } from "@/utils/permission";

Vue.config.productionTip = false;

// #ifndef MP
Vue.use(router);
// #endif

Vue.use(VueCompositionAPI);
Vue.use(UniCompositionAPI);
Vue.use(VueI18n);
Vue.use(globalPlugin);
Vue.use(uView);

App.mpType = "app";

const i18n = new VueI18n({
  locale: "en",
  messages: locale,
});

const app = new Vue({
  ...App,
  i18n,
});

// #ifdef H5
RouterMount(app, router, "#app");
// #endif

// #ifndef H5
app.$mount();
// #endif

(async () => {
  // #ifdef APP-PLUS
  await permission.request("READ_EXTERNAL_STORAGE");
  await permission.request("ACCESS_FINE_LOCATION");
  await permission.request("CAMERA");
  // #endif
})();
