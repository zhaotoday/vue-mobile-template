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
import PaySubmit from "@/components/pay/components/submit";
import ProductList from "@/components/product/components/list";
import ProductNumber from "@/components/product/components/number";
import ProductSubmit from "@/components/product/components/submit";
import Upload from "@/components/upload";

export const components = {
  "c-form": Form,
  "c-form-input": FormInput,
  "c-form-item": FormItem,
  "c-form-picker": FormPicker,

  "c-phone-number": PhoneNumber,

  "c-im-chats": ImChats,
  "c-im-input": ImInput,
  "c-im-messages": ImMessages,

  "c-cart-submit": CartSubmit,
  "c-contact": Contact,
  "c-pay-submit": PaySubmit,
  "c-product-list": ProductList,
  "c-product-number": ProductNumber,
  "c-product-submit": ProductSubmit,
  "c-upload": Upload,
};
