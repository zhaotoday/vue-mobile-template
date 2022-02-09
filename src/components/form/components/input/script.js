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
    form: {
      type: Object,
      default: () => ({
        model: {},
        error: {},
      }),
    },
    prop: String,
  },
  setup() {
    const { validate } = useValidators();
    return { validate };
  },
};
