import { useIm } from "@/components/im/components/composables/use-im";
import { onMounted, reactive, ref } from "@vue/composition-api";

export default {
  computed: {
    filteredItems() {
      return this.list.items.filter((item) =>
        item.name.includes(this.cSearch.keywords)
      );
    },
  },
  setup() {
    const loaded = ref(false);

    const { ws, formatChats, getChats } = useIm();

    const cSearch = reactive({
      keywords: "",
    });

    const list = ref({
      items: [],
    });

    onMounted(async () => {
      await render();
    });

    const onGetChatsOk = (data) => {
      list.value = { items: formatChats(data) };
      loaded.value = true;
    };

    const render = async () => {
      ws.on(ws.events.getChatsOk, onGetChatsOk);

      ws.ready(() => {
        getChats();
      });
    };

    const unRender = () => {
      ws.off(ws.events.getChats, onGetChatsOk);
    };

    const confirmSearch = (value) => {
      cSearch.keywords = value;
    };

    return {
      loaded,
      cSearch,
      list,
      render,
      unRender,
      confirmSearch,
    };
  },
};
