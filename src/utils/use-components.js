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

export const useComponents = (Vue) => {
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
};
