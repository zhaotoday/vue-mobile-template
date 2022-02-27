import { ref } from "@vue/composition-api";

export default {
  setup() {
    const loaded = ref(false);

    const productsList = ref({
      items: [],
    });

    return {
      loaded,
      productsList,
    };
  },
};
