export default {
  props: {
    list: {
      type: Object,
      default: () => ({
        items: [],
      }),
    },
  },
};
