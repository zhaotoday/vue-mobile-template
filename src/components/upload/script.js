import wx from "wx-bridge";
import { useConsts } from "@/composables/use-consts";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";
import { ref } from "@vue/composition-api";
import { useHelpers } from "@/composables/use-helpers";

export default {
  props: {
    value: {
      type: [Number, Array],
      default: 0,
    },
  },
  emits: ["change"],
  setup(props, context) {
    const { getHeaders } = useAuth();

    const fileList = ref([]);

    const onAfterRead = async (event) => {
      const { statusCode, data } = await wx.uploadFile({
        url: `${useConsts().ApiUrl}/client/files/actions/upload`,
        header: getHeaders(),
        formData: { dir: "avatars" },
        filePath: event.file.url,
        name: "file",
      });

      const {
        data: { id },
        error,
      } = JSON.parse(data);

      if (statusCode === 201) {
        fileList.value.push({
          id,
          status: "success",
          message: "",
          url: useHelpers().getImageUrl({ id }),
        });

        context.emit(
          "change",
          fileList.value.map(({ id }) => id)
        );
      } else {
        wx.showToast({ title: error.message });
      }
    };

    const onDelete = ({ index }) => {
      fileList.value.splice(index, 1);
      context.emit(
        "change",
        fileList.value.map(({ id }) => id)
      );
    };

    return {
      fileList,
      onAfterRead,
      onDelete,
    };
  },
};
