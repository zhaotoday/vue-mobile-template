import wx from "wx-bridge";
import { useConsts } from "@/composables/use-consts";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";

export default {
  setup() {
    const { getHeaders } = useAuth();

    const onAfterRead = async (event) => {
      console.log(event, "abf");
      const { statusCode, data } = await wx.uploadFile({
        url: `${useConsts().ApiUrl}/client/files/actions/upload`,
        header: getHeaders(),
        formData: { dir: "avatar" },
        filePath: event.file.url,
        name: "file",
      });

      console.log(statusCode, data);
    };

    const onDelete = (event) => {
      console.log(event);
    };

    return {
      onAfterRead,
      onDelete,
    };
  },
};
