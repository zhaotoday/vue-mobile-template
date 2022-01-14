import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import UniCompositionAPI from "uni-composition-api";
import App from "@/App";
import { globalPlugin } from "@/plugins/global";
import { router, RouterMount } from "./router";
import Checkbox from "vue-mobile/components/checkbox";
import Dialog from "vue-mobile/components/dialog";
import Empty from "vue-mobile/components/empty";
import Filter from "vue-mobile/components/filter";
import Index from "vue-mobile/components/index";
import Logo from "vue-mobile/components/logo";
import Popup from "vue-mobile/components/popup";
import Search from "vue-mobile/components/search";
import Swiper from "vue-mobile/components/swiper";
import Rate from "vue-mobile/components/rate";

Vue.config.productionTip = false;

Vue.use(router);
Vue.use(VueCompositionAPI);
Vue.use(UniCompositionAPI);
Vue.use(globalPlugin);

Vue.component("c-checkbox", Checkbox);
Vue.component("c-dialog", Dialog);
Vue.component("c-empty", Empty);
Vue.component("c-filter", Filter);
Vue.component("c-index", Index);
Vue.component("c-logo", Logo);
Vue.component("c-popup", Popup);
Vue.component("c-search", Search);
Vue.component("c-swiper", Swiper);
Vue.component("c-rate", Rate);

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
