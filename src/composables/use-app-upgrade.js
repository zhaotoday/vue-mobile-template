import { publicAppUpgradesApi } from "@/apis/public/app-upgrades";
import { appUpgrade } from "uni-plugins/utils/app-upgrade";
import wx from "wx-bridge";

export const useAppUpgrade = () => {
  const upgrade = async () => {
    // #ifdef APP-PLUS
    const { upgrade, packageType, appUrl, wgtUrl, log } =
      await publicAppUpgradesApi.post({
        action: "check",
        body: {
          platform: "Android",
          appId: plus.runtime.appid,
          versionName: plus.runtime.version,
        },
      });

    if (upgrade) {
      switch (packageType) {
        case "App":
          {
            appUpgrade.init({
              logo: "/static/logo.png",
              packageUrl: appUrl,
              content: log,
              contentAlign: "left",
              cancel: "Cancel",
              cancelColor: "#c0c4cc",
              confirm: "Confirm",
              confirmColor: "#fca523",
            });
            appUpgrade.show();
          }
          break;

        case "Wgt":
          {
            const { statusCode, tempFilePath } = await wx.downloadFile({
              url: wgtUrl,
            });

            if (statusCode === 200) {
              plus.runtime.install(
                tempFilePath,
                { force: false },
                () => {
                  plus.runtime.restart();
                },
                () => {
                  console.error("install fail...");
                }
              );
            }
          }
          break;

        default:
          break;
      }
    }
    // #endif
  };

  return {
    upgrade,
  };
};
