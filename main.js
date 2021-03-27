import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import App from "@/App";
import { globalPlugin } from "@/plugins/global";
import { router, RouterMount } from "./router";
import { useComponents } from "@/utils/use-components";

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);
Vue.use(globalPlugin);
Vue.use(router);

useComponents();

const app = new Vue({
  mpType: "app",
  router,
  ...App
});

// #ifdef H5
RouterMount(app, router, "#app");
// #endif

// #ifndef H5
app.$mount();
// #endif
