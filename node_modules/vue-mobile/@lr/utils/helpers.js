import $helpers from "jt-helpers";
import { consts } from "@/utils/consts";

export const helpers = {
  ...$helpers,
  getFileUrl({ id }) {
    return `${consts.ApiUrl}/public/files/${id}`;
  },
  getImageUrl({ id, width, height }) {
    const params = (() => {
      switch (true) {
        case width && height:
          return `?imageView2/1/w/${width}/h/${height}/q/100`;

        case !!width:
          return `?imageView2/2/w/${width}/q/100`;

        case !!height:
          return `?imageView2/2/h/${height}/q/100`;

        default:
          return "";
      }
    })();

    return `${consts.CdnUrl}/${id}${params}`;
  },
};
