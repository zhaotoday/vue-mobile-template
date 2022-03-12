import { reactive, ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { publicAppUpgradesApi } from "@/apis/public/app-upgrades";

export default {
  setup() {
    const cDemoPages = reactive({
      current: 0,
    });

    const latestAppUpgrade = ref({});

    onShow(async () => {
      const latestVersion = await publicAppUpgradesApi.post({
        action: "getLatestVersion",
      });

      if (latestVersion) latestAppUpgrade.value = latestVersion;
    });

    const onDemoPagesChange = (e) => {
      cDemoPages.current = e.detail.current;
    };

    return {
      cDemoPages,
      latestAppUpgrade,
      onDemoPagesChange,
    };
  },
};
