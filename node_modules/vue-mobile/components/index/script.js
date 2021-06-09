import cities from "./cities";
import { onMounted, reactive, ref } from "@vue/composition-api";

export default {
  name: "CIndex",
  setup() {
    const letters = ref([]);

    const cScroll = reactive({
      intoView: "",
    });

    onMounted(() => {
      letters.value = cities.cityGroups.map((item) => item.initial);
    });

    const scrollIntoView = (item) => {
      cScroll.intoView = item;
    };

    return {
      cities,
      letters,
      cScroll,
      scrollIntoView,
    };
  },
};
