import wx from "wx-bridge";
import Audio from "./components/audio";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useIm } from "../../composables/use-im";
import { reactive } from "@vue/composition-api";
import { imMessagesApi } from "../../../../apis/client/im-messages";

export default {
  components: {
    "b-audio": Audio,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["retract-ok"],
  setup(props, context) {
    const { user } = useUsers();
    const { getFileUrl, getAvatarUrl, formatTime } = useIm();

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
      if (fromUser.id === user.value.id) {
        cMessages.id = cMessages.id === id ? 0 : id;
      }
    };

    const retract = async ({ id }) => {
      await imMessagesApi.post({
        action: "retract",
        body: { id },
      });
      wx.showToast({ title: "撤回成功" });
      context.emit("retract-ok", id);
    };

    return {
      user,
      cMessages,
      cAudio,
      getFileUrl,
      getAvatarUrl,
      formatTime,
      previewImage,
      select,
      retract,
    };
  },
};
