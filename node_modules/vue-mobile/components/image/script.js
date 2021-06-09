import { computed } from "@vue/composition-api";

export default {
  name: "CImage",
  props: {
    src: String,
  },
  setup(props) {
    const html = computed(() => `<img src="${props.src}" />`);

    return {
      html,
    };
  },
};
