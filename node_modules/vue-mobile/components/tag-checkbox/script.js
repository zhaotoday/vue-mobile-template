import { ref } from "@vue/composition-api";

export default {
  name: "CTagCheckbox",
  props: {
    checkable: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
    },
    maxCount: {
      type: Number,
      default: 0,
    },
  },
  emits: ["exceeded-count", "change"],
  setup(props, context) {
    const checkedValues = ref([]);

    const check = (item) => {
      if (!props.checkable) return;

      if (!checkedValues.value.includes(item.value)) {
        if (props.maxCount === 1) {
          checkedValues.value = [item.value];
        } else {
          if (
            props.maxCount > 0 &&
            checkedValues.value.length >= props.maxCount
          ) {
            context.emit("exceeded-count");
          } else {
            checkedValues.value.push(item.value);
          }
        }
      } else {
        const index = checkedValues.value.indexOf(item.value);
        checkedValues.value.splice(index, 1);
      }
      context.emit("change", checkedValues.value);
    };

    return {
      checkedValues,
      check,
    };
  },
};
