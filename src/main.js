import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import UniCompositionAPI from "uni-composition-api";
import App from "@/App";
import { globalPlugin } from "@/utils/global-plugin";
import { router, RouterMount } from "./router";
import uView from "uview-ui";

Vue.config.productionTip = false;

// #ifndef MP
Vue.use(router);
// #endif

Vue.use(VueCompositionAPI);
Vue.use(UniCompositionAPI);
Vue.use(globalPlugin);
Vue.use(uView);

App.mpType = "app";

const app = new Vue({
  ...App,
});

// #ifdef H5
RouterMount(app, router, "#app");
// #endif

// #ifndef H5
app.$mount();
// #endif
