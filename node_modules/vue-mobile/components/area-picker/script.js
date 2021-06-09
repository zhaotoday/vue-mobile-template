import areas from "./areas.json";
import { computed, ref, watch } from "@vue/composition-api";

export default {
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },
    isWrap: {
      type: Boolean,
      default: false,
    },
    code: {
      type: String,
      default: "",
    },
    showDistrict: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["change"],
  setup(props, context) {
    const range = ref([]);
    const values = ref([-1, -1, -1]);

    const names = computed(() => {
      if (!props.code) return "";

      const [v0, v1, v2] = getValuesByCode(props.code);
      const provinceName = areas[v0].name;
      const cityName = areas[v0].children[v1].name;

      if (props.showDistrict) {
        const distributeName = areas[v0].children[v1].children[v2].name;

        return `${provinceName}.${cityName}.${distributeName}`;
      } else {
        return `${provinceName}.${cityName}`;
      }
    });

    const getValuesByCode = (code) => {
      const pCode = code.substr(0, 2);
      const cCode = code.substr(0, 4);
      const pIndex = getIndex(areas, pCode);
      const cIndex = getIndex(areas[pIndex].children, cCode);
      const dIndex = props.showDistrict
        ? getIndex(areas[pIndex].children[cIndex].children, code)
        : 0;

      return [pIndex, cIndex, dIndex];
    };

    const initRange = ([v0, v1]) => {
      range.value[0] = filter(areas);
      range.value[1] = filter(areas[v0].children);
      if (range.value[2]) {
        range.value[2] = filter(areas[v0].children[v1].children);
      }
    };

    const filter = (items) => {
      return items.map((item) => ({
        code: item.code,
        name: item.name,
      }));
    };

    const getIndex = (items, code) => {
      return items.findIndex((item) => item.code === code);
    };

    watch(
      () => props.code,
      (newValue) => {
        if (newValue) {
          const [v0, v1, v2] = getValuesByCode(newValue);

          initRange([v0, v1, v2]);
          values.value = [v0, v1, v2];
        } else {
          range.value = props.showDistrict ? [[], [], []] : [[], []];
          initRange([0, 0, 0]);
        }
      },
      {
        immediate: true,
      }
    );

    const onChange = (e) => {
      let [v0, v1, v2] = e.detail.value;

      if (v0 === -1) {
        v0 = 0;
        v1 = 0;
        v2 = 0;
      }

      values.value = [v0, v1, v2];

      context.emit(
        "change",
        props.showDistrict
          ? areas[v0].children[v1].children[v2].code
          : areas[v0].children[v1].code
      );
    };

    const onColumnChange = (e) => {
      const { column, value: index } = e.detail;

      values.value[column] = index;

      switch (column) {
        case 0:
          range.value[1] = filter(areas[index].children);
          values.value[1] = 0;
          if (range.value[2]) {
            range.value[2] = filter(areas[index].children[0].children);
            values.value[2] = 0;
          }
          break;

        case 1:
          if (range.value[2]) {
            range.value[2] = filter(
              areas[values.value[0]].children[index].children
            );
            values.value[2] = 0;
          }
          break;
      }
    };

    return {
      range,
      values,
      names,
      onChange,
      onColumnChange,
    };
  },
};
