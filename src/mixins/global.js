export const globalMixin = {
  data() {
    return {
      query: {},
    };
  },
  onLoad(options) {
    this.query = options;
  },
};
