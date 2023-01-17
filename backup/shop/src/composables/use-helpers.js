import { useHelpers as _useHelpers } from "vue-mobile/@lr/composables/use-helpers";
import { useConsts } from "@/composables/use-consts";

export const useHelpers = () => {
  return {
    ..._useHelpers(),
    getImageUrl({ id, width, height }) {
      const params = (() => {
        const w = parseInt(width * 1.2 + "");
        const h = parseInt(height * 1.2 + "");

        switch (true) {
          case !!width && !!height:
            return `?x-oss-process=image/resize,w_${w},h_${h}`;

          case !!width:
            return `?imageView2/2/w/${w}/q/100`;

          case !!height:
            return `?imageView2/2/h/${h}/q/100`;

          default:
            return "";
        }
      })();

      return `${useConsts().CdnUrl}/${id}${params}`;
    },
  };
};
