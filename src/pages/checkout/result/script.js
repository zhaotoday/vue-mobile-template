import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { pt } = useI18n({ page: "checkout/result" });

    return {
      pt,
    };
  },
};
