export default {
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  emits: ["change"],
};
