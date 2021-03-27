import Vue from "vue";
import App from "@/App";
import globalPlugin from "@/plugins/global";
import { useComponents } from "@/utils/use-components";

Vue.config.productionTip = false;

Vue.use(globalPlugin);

useComponents();

const app = new Vue({
  mpType: "app",
  ...App
});

app.$mount();
