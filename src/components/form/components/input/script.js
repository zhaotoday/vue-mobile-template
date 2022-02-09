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
    maxlength: String,
    errorTip: String,
  },
  setup(props, { parent }) {
    const { validate } = useValidators();

    return {
      prop: parent.prop,
      validate,
    };
  },
};
