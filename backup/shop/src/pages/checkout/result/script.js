import { useI18n } from "vue-mobile/composables/use-i18n";

export default {
  setup() {
    const { pt } = useI18n({ page: "checkout/result" });

    return {
      pt,
    };
  },
};
