import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import UniCompositionAPI from "uni-composition-api";
import App from "@/App";
import { globalPlugin } from "@/utils/global-plugin";
import { useComponents } from "@/utils/use-components";
import { router, RouterMount } from "./router";
import uView from "uview-ui";
import Form from "@/components/form/index.vue";
import FormItem from "@/components/form/components/item/index.vue";
import FormInput from "@/components/form/components/input/index.vue";

Vue.config.productionTip = false;

Vue.use(router);
Vue.use(VueCompositionAPI);
Vue.use(UniCompositionAPI);
Vue.use(globalPlugin);
Vue.use(uView);

// useComponents(Vue);
Vue.component("c-form", Form);
Vue.component("c-form-item", FormItem);
Vue.component("c-form-input", FormInput);

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
