import { useIm } from "@/components/chat/composables/use-chat";
import { reactive, ref } from "@vue/composition-api";
import ChatList from "@/components/chat/list";

export default {
  components: {
    "c-chat-list": ChatList,
  },
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
