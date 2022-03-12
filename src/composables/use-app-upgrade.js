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
            uni.downloadFile({
              url: data.wgtUrl,
              success: (downloadResult) => {
                if (downloadResult.statusCode === 200) {
                  plus.runtime.install(
                    downloadResult.tempFilePath,
                    {
                      force: false,
                    },
                    function () {
                      console.log("install success...");
                      plus.runtime.restart();
                    },
                    function (e) {
                      console.error("install fail...");
                    }
                  );
                }
              },
            });
          }
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
