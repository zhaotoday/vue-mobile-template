import { reactive } from "@vue/composition-api";
import { onLoad } from "uni-composition-api";
import { useRoute } from "vue-mobile/composables/use-route";
import { useRender } from "./composables/use-render";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const { loaded, cTabs, list, render } = useRender();

    const cSearch = reactive({
      model: {
        keywords: "",
      },
    });

    onLoad(async () => {
      await render(currentRoute.query.keywords);

      cSearch.model.keywords = currentRoute.query.keywords;

      loaded.value = true;
    });

    const search = async () => {
      await render(cSearch.model.keywords);
    };

    return {
      cTabs,
      cSearch,
      loaded,
      list,
      search,
    };
  },
};
