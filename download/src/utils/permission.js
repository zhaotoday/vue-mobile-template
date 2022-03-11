import wx from "wx-bridge";
import $permission from "../scripts/permission";

export const permission = {
  request(code) {
    return $permission.requestAndroidPermission(`android.permission.${code}`);
  },
  async check(code, tip) {
    const res = await this.request(code);

    if (res === 1) {
      return Promise.resolve();
    } else if (res === -1) {
      const { confirm } = await wx.showModal({
        title: "提示",
        content: tip,
      });

      if (confirm) {
        this.gotoAppSetting();
      } else {
        return Promise.reject();
      }
    }
  },
  gotoAppSetting() {
    $permission.gotoAppPermissionSetting();
  },
};
