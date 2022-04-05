import { useIm } from "@/components/im/components/composables/use-im";
import { reactive, ref } from "@vue/composition-api";
import { onHide, onShow } from "uni-composition-api";
import { useUsers } from "vue-mobile/@lr/composables/use-users";

export default {
  computed: {
    filteredItems() {
      return this.list.items.filter((item) =>
        (item.user.name || item.user.wxNickName).includes(this.cSearch.keywords)
      );
    },
  },
  setup() {
    const { loggedIn } = useUsers();

    const loaded = ref(false);

    const { ws, formatChats, getChats } = useIm();

    const cSearch = reactive({
      keywords: "",
    });

    const list = ref({
      items: [],
    });

    onShow(async () => {
      ws.on(ws.events.getChatsOk, onGetChatsOk);

      if (loggedIn()) {
        ws.ready(() => {
          getChats();
        });
      }
    });

    onHide(() => {
      ws.off(ws.events.getChats, onGetChatsOk);
    });

    const onGetChatsOk = (data) => {
      list.value = { items: formatChats(data) };
      loaded.value = true;
    };

    const confirmSearch = (value) => {
      cSearch.keywords = value;
    };

    return {
      loaded,
      cSearch,
      list,
      loggedIn,
      confirmSearch,
    };
  },
};
