import { computed } from "@vue/composition-api";

export default {
  name: "CLogo",
  props: {
    name: {
      type: String,
      default: "",
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const widthModifier = computed(() =>
      props.width ? `w${props.width}` : ""
    );

    const heightModifier = computed(() =>
      props.height ? `h${props.height}` : ""
    );

    return {
      widthModifier,
      heightModifier,
    };
  },
};
