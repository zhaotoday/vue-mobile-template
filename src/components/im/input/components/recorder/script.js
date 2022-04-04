import { reactive } from "@vue/composition-api";
import wx from "wx-bridge";
import { useConsts } from "@/composables/use-consts";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";

export default {
  emits: ["hide", "ok"],
  setup(props, context) {
    const cRecorder = reactive({
      speaking: false,
      filePath: "",
    });

    const recorderManager = uni.getRecorderManager();

    recorderManager.onStop((res) => {
      cRecorder.filePath = res.tempFilePath;
    });

    const startSpeaking = () => {
      cRecorder.speaking = true;
      recorderManager.start();
    };

    const stopSpeaking = async () => {
      cRecorder.speaking = false;
      recorderManager.stop();

      const { confirm } = await wx.showModal({
        title: "确认发送语音？",
      });

      if (confirm) {
        context.emit("hide");

        const { data } = await wx.uploadFile({
          url: useConsts().ApiUrl + "/wx/messageFiles/actions/upload",
          header: useAuth().getHeaders(),
          filePath: cRecorder.filePath,
          name: "file",
        });

        context.emit("ok", JSON.parse(data)["data"].id);
      }
    };

    return {
      cRecorder,
      startSpeaking,
      stopSpeaking,
    };
  },
};
