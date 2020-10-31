import Vue from "vue";
import App from "@/App";
import globalPlugin from "@/plugins/global";
import Checkbox from "vue-mobile/components/checkbox";
import Dialog from "vue-mobile/components/dialog";
import Empty from "vue-mobile/components/empty";
import Filter from "vue-mobile/components/filter";
import Index from "vue-mobile/components/index";
import Logo from "vue-mobile/components/logo";
import Popup from "vue-mobile/components/popup";
import Search from "vue-mobile/components/search";
import Poster from "vue-mobile/components/poster";
import ShareOptions from "vue-mobile/components/share-options";
import Share from "vue-mobile/components/share";
import Swiper from "vue-mobile/components/swiper";
import Rate from "vue-mobile/components/rate";

Vue.config.productionTip = false;

Vue.use(globalPlugin);

Vue.component("c-checkbox", Checkbox);
Vue.component("c-dialog", Dialog);
Vue.component("c-empty", Empty);
Vue.component("c-filter", Filter);
Vue.component("c-index", Index);
Vue.component("c-logo", Logo);
Vue.component("c-popup", Popup);
Vue.component("c-search", Search);
Vue.component("c-poster", Poster);
Vue.component("c-share-options", ShareOptions);
Vue.component("c-share", Share);
Vue.component("c-swiper", Swiper);
Vue.component("c-rate", Rate);

const app = new Vue({
  mpType: "app",
  ...App
});

app.$mount();
