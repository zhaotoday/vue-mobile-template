import { useIm } from "../composables/use-im";

export default {
  props: {
    items: {
      type: Array,
      default: () => [{}],
    },
  },
  emits: ["goto-chat"],
  setup() {
    const { getAvatarUrl } = useIm();

    return {
      getAvatarUrl,
    };
  },
};
