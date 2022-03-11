import { publicAppUpgradesApi } from "@/apis/public/app-upgrades";

export const useAppUpgrade = () => {
  const check = async () => {
    // #ifdef APP-PLUS
    const { packageType, fileId } = await publicAppUpgradesApi.post({
      action: "check",
      body: {
        platform: "Android",
        versionName: 2,
        versionCode: 33,
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
