import { useValidators } from "vue-validation";

export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "请输入",
    },
  },
  setup(props, { parent }) {
    const { validate } = useValidators();

    return {
      form: parent.form,
      prop: parent.label,
      validate,
    };
  },
};
