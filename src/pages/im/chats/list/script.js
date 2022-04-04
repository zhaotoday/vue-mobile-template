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

    const { ws, formatChatList, getChatList } = useIm();

    const cSearch = reactive({
      keywords: "",
    });

    const list = ref({
      items: [],
    });

    onMounted(async () => {
      await render();
    });

    const onGetChatList = (data) => {
      list.value = { items: formatChatList(data) };
      loaded.value = true;
    };

    const render = async () => {
      ws.on(ws.events.getChatList, onGetChatList);

      ws.ready(() => {
        getChatList();
      });
    };

    const unRender = () => {
      ws.off(ws.events.getChatList, onGetChatList);
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
