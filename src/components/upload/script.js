import wx from "wx-bridge";
import { useConsts } from "@/composables/use-consts";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";
import { onMounted, ref, watch } from "@vue/composition-api";
import { useHelpers } from "@/composables/use-helpers";
import { permission } from "uni-plugins/utils/permission";

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

    const createFile = (id) => {
      return {
        id,
        status: "success",
        message: "",
        url: useHelpers().getImageUrl({ id }),
      };
    };

    watch(
      () => props.value,
      async (newVal) => {
        if (newVal && newVal.length) {
          fileList.value = newVal.map((id) => createFile(id));
        } else {
          fileList.value = [];
        }
      },
      { immediate: true, deep: true }
    );

    onMounted(async () => {
      // #ifdef APP-PLUS
      await permission.request("CAMERA");
      // #endif
    });

    const onAfterRead = async (event) => {
      const { statusCode, data } = await uni.uploadFile({
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
        fileList.value.push(createFile(id));

        context.emit(
          "change",
          fileList.value.map(({ id }) => id)
        );
      } else {
        uni.showToast({ title: error.message });
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
