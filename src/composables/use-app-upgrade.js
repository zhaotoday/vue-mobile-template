import { publicAppUpgradesApi } from "@/apis/public/app-upgrades";

export const useAppUpgrade = () => {
  const check = async () => {
    // #ifndef APP-PLUS
    const { upgrade, packageType, appUrl, wgtUrl } =
      await publicAppUpgradesApi.post({
        action: "check",
        body: {
          // appId: plus.runtime.appid,
          // versionName: plus.runtime.version,
          platform: "Android",
          versionName: "1.0.0",
        },
      });
    console.log(upgrade, packageType, appUrl, wgtUrl);
    // #endif
  };

  return {
    check,
  };
};
