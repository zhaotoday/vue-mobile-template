export default {
  name: "CDialog",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    showConfirm: {
      type: Boolean,
      default: true,
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    confirmText: {
      type: String,
      default: "确认",
    },
    cancelStyle: {
      type: String,
      default: "",
    },
    confirmStyle: {
      type: String,
      default: "c21",
    },
    confirmDisabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "560",
    },
  },
  emits: ["confirm"],
  setup(props, context) {
    const onConfirm = () => {
      !props.confirmDisabled && context.emit("confirm");
    };

    return {
      onConfirm,
    };
  },
};
