import { publicAppUpgradesApi } from "@/apis/public/app-upgrades";
import { appUpgrade } from "uni-plugins/utils/app-upgrade";

export const useAppUpgrade = () => {
  const check = async () => {
    // #ifndef APP-PLUS
    const { upgrade, packageType, appUrl, wgtUrl, log } =
      await publicAppUpgradesApi.post({
        action: "check",
        body: {
          // appId: plus.runtime.appid,
          // versionName: plus.runtime.version,
          platform: "Android",
          versionName: "1.0.0",
        },
      });

    if (upgrade) {
      switch (packageType) {
        case "App":
          appUpgrade.init({
            logo: "/static/logos/169.png",
            packageUrl: appUrl,
            content: log,
            contentAlign: "left",
            cancel: "Cancel",
            cancelColor: "#c0c4cc",
            confirm: "Confirm",
            confirmColor: "#fca523",
          });

          appUpgrade.show();

          break;

        default:
          break;
      }
    }
    // #endif
  };

  return {
    check,
  };
};
