export default {
  props: {
    items: {
      type: Array,
      default: () => [{}],
    },
  },
  emits: ["goto-chat"],
};
