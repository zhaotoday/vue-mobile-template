import wx from "wx-bridge";
import { ref } from "@vue/composition-api";
import { copy } from "vue-mobile/utils/copy";
import { helpers as $helpers } from "./helpers";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    url: String,
    title: String,
    summary: String,
    imageUrl: String,
  },
  emits: ["hide"],
  setup(props, context) {
    const qrCodeFilePath = ref("");

    const onMakeQrCode = (filePath) => {
      qrCodeFilePath.value = filePath;
    };

    const saveImage = async () => {
      context.emit("hide");
      await wx.saveImageToPhotosAlbum({
        filePath: qrCodeFilePath.value,
      });
      wx.showToast({ title: "已保存到相册" });
    };

    const copyLink = async () => {
      context.emit("hide");
      await copy(props.url);
      wx.showToast({ title: "复制成功" });
    };

    const share = async (provider, scene = "") => {
      context.emit("hide");

      try {
        await $helpers.share({
          provider,
          scene,
          url: props.url,
          title: props.title,
          summary: props.summary,
          imageUrl: props.imageUrl,
        });
        wx.showToast({ title: "分享成功" });
      } catch (e) {
        wx.showToast({ title: "分享失败" });
      }
    };

    return {
      qrCodeFilePath,
      onMakeQrCode,
      saveImage,
      copyLink,
      share,
    };
  },
};
