import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import UniCompositionAPI from "uni-composition-api";
import VueI18n from "vue-i18n";
import uView from "uview-ui";
import App from "@/App";
import wx from "wx-bridge";
import { locale } from "@/locale";
import { globalPlugin } from "@/utils/global-plugin";
import { router, RouterMount } from "./router";
import { permission } from "uni-plugins/utils/permission";

import Form from "vue-mobile/components/form";
import FormInput from "vue-mobile/components/form/components/input";
import FormItem from "vue-mobile/components/form/components/item";
import FormPicker from "vue-mobile/components/form/components/picker";

import PhoneNumber from "vue-mobile/@lr/components/phone/components/number";

import ImChats from "uni-im/components/im/components/chats";
import ImInput from "uni-im/components/im/components/input";
import ImMessages from "uni-im/components/im/components/messages";

import CartSubmit from "@/components/cart/components/submit";
import Contact from "@/components/contact";
import Locale from "@/components/locale";
import PaySubmit from "@/components/pay/components/submit";
import ProductList from "@/components/product/components/list";
import ProductNumber from "@/components/product/components/number";
import ProductSubmit from "@/components/product/components/submit";
import Upload from "@/components/upload";

Vue.config.productionTip = false;

// #ifndef MP
Vue.use(router);
// #endif

Vue.use(VueCompositionAPI);
Vue.use(UniCompositionAPI);
Vue.use(VueI18n);
Vue.use(globalPlugin);
Vue.use(uView);

Vue.component("c-form", Form);
Vue.component("c-form-input", FormInput);
Vue.component("c-form-item", FormItem);
Vue.component("c-form-picker", FormPicker);

Vue.component("c-phone-number", PhoneNumber);

Vue.component("c-im-chats", ImChats);
Vue.component("c-im-input", ImInput);
Vue.component("c-im-messages", ImMessages);

Vue.component("c-cart-submit", CartSubmit);
Vue.component("c-contact", Contact);
Vue.component("c-locale", Locale);
Vue.component("c-pay-submit", PaySubmit);
Vue.component("c-product-list", ProductList);
Vue.component("c-product-number", ProductNumber);
Vue.component("c-product-submit", ProductSubmit);
Vue.component("c-upload", Upload);

App.mpType = "app";

const i18n = new VueI18n({
  locale: wx.getStorageSync("locale") || "en",
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
