import { publicAppUpgradesApi } from "@/apis/public/app-upgrades";

export const useAppUpgrade = () => {
  const check = async () => {
    // #ifdef APP-PLUS
    const { packageType, fileId } = await publicAppUpgradesApi.post({
      action: "check",
      body: {
        platform: "Android",
        appId: plus.runtime.appid,
        versionName: plus.runtime.version,
      },
    });

    if (fileId) {
      console.log(packageType);
    }
    // #endif
  };

  return {
    check,
  };
};
