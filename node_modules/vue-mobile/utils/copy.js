import { h5Copy } from "../scripts/h5-copy.js";

export const copy = (content) => {
  return new Promise((resolve, reject) => {
    // #ifndef H5
    uni.setClipboardData({
      data: content,
      success: resolve,
      fail: reject,
    });
    // #endif

    // #ifdef H5
    if (h5Copy(content)) {
      resolve();
    } else {
      reject();
    }
    // #endif
  });
};
