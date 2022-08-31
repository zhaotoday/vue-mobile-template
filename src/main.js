import Vue from "vue";
import "./utils/use-composition-api";
import uView from "uview-ui";
import App from "@/App";
import { globalPlugin } from "@/utils/global-plugin";
import { permission } from "uni-plugins/utils/permission";

import UAvatar from "uview-ui/components/u-avatar/u-avatar";
import UButton from "uview-ui/components/u-button/u-button";
import UCheckbox from "uview-ui/components/u-checkbox/u-checkbox";
import UCol from "uview-ui/components/u-col/u-col";
import UEmpty from "uview-ui/components/u-empty/u-empty";
import UGap from "uview-ui/components/u-gap/u-gap";
import UGrid from "uview-ui/components/u-grid/u-grid";
import UGridItem from "uview-ui/components/u-grid-item/u-grid-item";
import UIcon from "uview-ui/components/u-icon/u-icon";
import ULineProgress from "uview-ui/components/u-line-progress/u-line-progress";
import ULoadingPage from "uview-ui/components/u-loading-page/u-loading-page";
import UModal from "uview-ui/components/u-modal/u-modal";
import UNumberBox from "uview-ui/components/u-number-box/u-number-box";
import UOverlay from "uview-ui/components/u-overlay/u-overlay";
import UPopup from "uview-ui/components/u-popup/u-popup";
import URow from "uview-ui/components/u-row/u-row";
import USearch from "uview-ui/components/u-search/u-search";
import USwiper from "uview-ui/components/u-swiper/u-swiper";
import USwiperIndicator from "uview-ui/components/u-swiper-indicator/u-swiper-indicator";
import UTransition from "uview-ui/components/u-transition/u-transition";

import Form from "vue-mobile/components/form";
import FormInput from "vue-mobile/components/form/components/input";
import FormItem from "vue-mobile/components/form/components/item";
import FormLink from "vue-mobile/components/form/components/link";
import FormPicker from "vue-mobile/components/form/components/picker";

import PhoneNumber from "vue-mobile/@lr/components/phone/components/number";

import ImChats from "uni-im/components/im/components/chats";
import ImInput from "uni-im/components/im/components/input";
import ImMessages from "uni-im/components/im/components/messages";

import CartSubmit from "@/components/cart/components/submit";
import Contact from "@/components/contact";
import PaySubmit from "@/components/pay/components/submit";
import ProductList from "@/components/product/components/list";
import ProductNumber from "@/components/product/components/number";
import ProductSubmit from "@/components/product/components/submit";
import Upload from "@/components/upload";

Vue.config.productionTip = false;

Vue.use(globalPlugin);
Vue.use(uView);

Vue.component("u-avatar", UAvatar);
Vue.component("u-button", UButton);
Vue.component("u-checkbox", UCheckbox);
Vue.component("u-col", UCol);
Vue.component("u-empty", UEmpty);
Vue.component("u-gap", UGap);
Vue.component("u-grid", UGrid);
Vue.component("u-grid-item", UGridItem);
Vue.component("u-icon", UIcon);
Vue.component("u-line-progress", ULineProgress);
Vue.component("u-loading-page", ULoadingPage);
Vue.component("u-modal", UModal);
Vue.component("u-number-box", UNumberBox);
Vue.component("u-overlay", UOverlay);
Vue.component("u-popup", UPopup);
Vue.component("u-row", URow);
Vue.component("u-search", USearch);
Vue.component("u-swiper", USwiper);
Vue.component("u-swiper-indicator", USwiperIndicator);
Vue.component("u-transition", UTransition);

Vue.component("c-form", Form);
Vue.component("c-form-input", FormInput);
Vue.component("c-form-item", FormItem);
Vue.component("c-form-link", FormLink);
Vue.component("c-form-picker", FormPicker);

Vue.component("c-phone-number", PhoneNumber);

Vue.component("c-im-chats", ImChats);
Vue.component("c-im-input", ImInput);
Vue.component("c-im-messages", ImMessages);

Vue.component("c-cart-submit", CartSubmit);
Vue.component("c-contact", Contact);
Vue.component("c-pay-submit", PaySubmit);
Vue.component("c-product-list", ProductList);
Vue.component("c-product-number", ProductNumber);
Vue.component("c-product-submit", ProductSubmit);
Vue.component("c-upload", Upload);

Vue.config.productionTip = false;

App.mpType = "app";

new Vue({ ...App }).$mount();

(async () => {
  // #ifdef APP-PLUS
  await permission.request("READ_EXTERNAL_STORAGE");
  await permission.request("ACCESS_FINE_LOCATION");
  await permission.request("CAMERA");
  // #endif
})();
