import { publicAppUpgradesApi } from "@/apis/public/app-upgrades";

export const useAppUpgrade = () => {
  const check = async () => {
    // #ifdef APP-PLUS
    const a = await publicAppUpgradesApi.post({
      action: "check",
    });
    console.log(a);
    // #endif
  };

  return {
    check,
  };
};
