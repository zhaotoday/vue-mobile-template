export default {
  name: "CRate",
  props: {
    modifier: {
      type: String,
      default: "sm",
    },
    score: {
      type: Number,
      default: 0,
    },
    normalClass: {
      type: String,
      default: "c37",
    },
    activeClass: {
      type: String,
      default: "c22",
    },
    ratable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["change"],
  setup(props, context) {
    const rate = (score) => {
      if (props.ratable) {
        context.emit("change", score === props.score ? 0 : score);
      }
    };

    return {
      rate,
    };
  },
};
