import { useWxUser } from "@lr/composables/use-wx-user";
import { useChat } from "@/components/chat/composables/use-chat";
import wx from "wx-bridge";
import Audio from "./audio";
import { reactive } from "@vue/composition-api";
import { MessagesApi } from "@/apis/wx/messages";

export default {
  components: {
    "cc-audio": Audio,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["retract-ok"],
  setup(props, context) {
    const { wxUser } = useWxUser();
    const { getFileUrl } = useChat();

    const cMessages = reactive({
      id: 0,
    });

    const cAudio = reactive({
      playIndex: -1,
    });

    const previewImage = (url) => {
      wx.previewImage({ urls: [url], url });
    };

    const select = ({ fromUser, id }) => {
      if (fromUser.id === wxUser.value.id) {
        cMessages.id = cMessages.id === id ? 0 : id;
      }
    };

    const retract = async ({ id }) => {
      await new MessagesApi().post({
        action: "retract",
        body: { id },
      });
      wx.showToast({ title: "撤回成功" });
      context.emit("retract-ok", id);
    };

    return {
      wxUser,
      cMessages,
      cAudio,
      getFileUrl,
      previewImage,
      select,
      retract,
    };
  },
};