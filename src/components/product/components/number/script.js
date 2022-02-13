import { ref } from "@vue/composition-api";

export default {
  props: {
    max: {
      type: Number,
      default: 10000,
    },
  },
  setup() {
    const value = ref(0);

    return {
      value,
    };
  },
};
