import { reactive } from "@vue/composition-api";

export default {
  setup() {
    const cDemoPages = reactive({
      current: 0,
    });

    const onDemoPagesChange = (e) => {
      cDemoPages.current = e.detail.current;
    };

    return {
      cDemoPages,
      onDemoPagesChange,
    };
  },
};
