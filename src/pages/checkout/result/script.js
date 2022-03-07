import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { pt } = useI18n({ path: "checkout/result" });

    return {
      pt,
    };
  },
};
