export default {
  props: {
    list: {
      type: Array,
      default: () => ({
        items: [],
      }),
    },
  },
};
