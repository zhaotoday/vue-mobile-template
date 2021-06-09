import { ref, watch } from "@vue/composition-api";
import wx from "wx-bridge";

export default {
  name: "CSearch",
  props: {
    autoFocus: {
      type: Boolean,
      default: false,
    },
    showSubmit: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: "",
    },
    defaultValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  emits: ["confirm"],
  setup(props, context) {
    const value = ref("");

    watch(
      () => props.defaultValue,
      (newVal) => {
        value.value = newVal;
      }
    );

    const navigateToLink = () => {
      if (props.link) {
        wx.navigateTo({ url: props.link });
      }
    };

    const confirm = () => {
      context.emit("confirm", value.value.trim());
    };

    return {
      value,
      navigateToLink,
      confirm,
    };
  },
};
