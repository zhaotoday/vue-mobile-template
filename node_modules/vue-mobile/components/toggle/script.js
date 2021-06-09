import { ref } from "@vue/composition-api";

export default {
  props: {
    showText: {
      type: String,
      default: "展开",
    },
    hideText: {
      type: String,
      default: "收起",
    },
  },
  emits: ["toggle"],
  setup(props, context) {
    const show = ref(false);

    const toggle = () => {
      show.value = !show.value;
      context.emit("toggle", show.value);
    };

    return {
      show,
      toggle,
    };
  },
};
