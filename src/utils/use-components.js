import Form from "@/components/form";
import FormItem from "@/components/form/components/item";
import FormInput from "@/components/form/components/input";

export const useComponents = (Vue) => {
  Vue.component("c-form", Form);
  Vue.component("c-form-item", FormItem);
  Vue.component("c-form-input", FormInput);
};
