import Vue from "vue";
import "vue-mobile/utils/use-composition-api";
import "vue-mobile/utils/add-interceptor";
import uView from "uview-ui";
import App from "@/App";
import { globalPlugin } from "@/utils/global-plugin";
import { permission } from "uni-plugins/utils/permission";

import UAvatar from "uview-ui/components/u-avatar/u-avatar";
import UBadge from "uview-ui/components/u-badge/u-badge";
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
import UTabs from "uview-ui/components/u-tabs/u-tabs";

import CForm from "vue-mobile/components/form";
import CFormInput from "vue-mobile/components/form/components/input";
import CFormItem from "vue-mobile/components/form/components/item";
import CFormLink from "vue-mobile/components/form/components/link";
import CFormPicker from "vue-mobile/components/form/components/picker";

import CPhoneNumber from "vue-mobile/@lr/components/phone/components/number";

import CPImChats from "uni-im/components/im/components/chats";
import CImInput from "uni-im/components/im/components/input";
import CImMessages from "uni-im/components/im/components/messages";

import CCartSubmit from "@/components/cart/components/submit";
import CContact from "@/components/contact";
import CPaySubmit from "@/components/pay/components/submit";
import CProductList from "@/components/product/components/list";
import CProductNumber from "@/components/product/components/number";
import CProductSubmit from "@/components/product/components/submit";
import CUpload from "@/components/upload";

Vue.config.productionTip = false;

Vue.use(globalPlugin);
Vue.use(uView);

Vue.component("u-avatar", UAvatar);
Vue.component("u-badge", UBadge);
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
Vue.component("u-tabs", UTabs);

Vue.component("c-form", CForm);
Vue.component("c-form-input", CFormInput);
Vue.component("c-form-item", CFormItem);
Vue.component("c-form-link", CFormLink);
Vue.component("c-form-picker", CFormPicker);

Vue.component("c-phone-number", CPhoneNumber);

Vue.component("c-im-chats", CPImChats);
Vue.component("c-im-input", CImInput);
Vue.component("c-im-messages", CImMessages);

Vue.component("c-cart-submit", CCartSubmit);
Vue.component("c-contact", CContact);
Vue.component("c-pay-submit", CPaySubmit);
Vue.component("c-product-list", CProductList);
Vue.component("c-product-number", CProductNumber);
Vue.component("c-product-submit", CProductSubmit);
Vue.component("c-upload", CUpload);

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
