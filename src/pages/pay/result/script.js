import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { t } = useI18n({ page: "pay/result" });

    return {
      t,
    };
  },
};
