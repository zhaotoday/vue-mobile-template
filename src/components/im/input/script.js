import { reactive } from "@vue/composition-api";
import { useFormValidators } from "vue-validation";
import wx from "wx-bridge";
import Recorder from "./recorder";
import { useConsts } from "@/composables/use-consts";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";

export default {
  components: {
    "cc-recorder": Recorder,
  },
  props: {
    placeholder: {
      type: String,
      default: "请输入文字",
    },
    sendText: {
      type: String,
      default: "发送",
    },
    backgroundClass: {
      type: String,
      default: "",
    },
  },
  emits: ["send"],
  setup(props, context) {
    const { isRequired, validate } = useFormValidators();

    const cForm = reactive({
      model: {
        content: "",
      },
      rules: {
        content: [isRequired({ message: props.placeholder })],
      },
      errors: {},
    });

    const cRecorder = reactive({
      visible: false,
    });

    const toggleRecorder = async () => {
      cForm.model.content = "";
      cRecorder.visible = !cRecorder.visible;
    };

    const sendImage = async () => {
      const { tempFilePaths } = await wx.chooseImage({
        count: 1,
        sizeType: ["compressed"],
      });
      const { data } = await wx.uploadFile({
        url: useConsts().ApiUrl + "/wx/messageFiles/actions/upload",
        header: useAuth().getHeaders(),
        filePath: tempFilePaths[0],
        name: "file",
      });

      context.emit("send", {
        type: "Image",
        fileId: JSON.parse(data)["data"].id,
      });
    };

    const sendAudio = (fileId) => {
      context.emit("send", { type: "Audio", fileId });
    };

    const send = async () => {
      await validate(cForm, null, async (errors, model) => {
        if (errors) {
          wx.showToast({ title: errors[0].message });
          return;
        }
        context.emit("send", { type: "Text", text: model.content });
        model.content = "";
      });
    };

    return {
      cForm,
      cRecorder,
      toggleRecorder,
      sendImage,
      sendAudio,
      send,
    };
  },
};
