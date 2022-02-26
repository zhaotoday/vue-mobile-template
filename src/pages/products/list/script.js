import { reactive, ref } from "@vue/composition-api";
import { publicProductsApi } from "@/apis/public/products";
import { onLoad, onShow } from "uni-composition-api";
import { useRoute } from "vue-mobile/composables/use-route";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const loaded = ref(false);

    const cTabs = {
      items: [
        {
          name: "综合",
        },
        {
          name: "销量",
        },
        {
          name: "价格",
        },
        {
          name: "折扣",
        },
      ],
    };

    const cSearch = reactive({
      model: {
        keywords: "",
      },
    });

    const list = ref({
      items: [],
    });

    onLoad(async () => {
      await render(currentRoute.query.keywords);

      cSearch.model.keywords = currentRoute.query.keywords;
      loaded.value = true;
    });

    const render = async (keywords) => {
      list.value = await publicProductsApi.get({
        query: {
          where: {
            name: { $like: keywords },
          },
        },
      });
    };

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
