import { useRoute } from "vue-mobile/composables/use-route";

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { switchTab } = useRoute();

    return {
      switchTab,
    };
  },
};
