<script>
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useCart } from "@/composables/use-cart";
import { usePageData } from "@/composables/use-page-data";

export default {
  async onLaunch() {
    const { getEnums } = useEnums();

    await getEnums();

    useCart().renderProductsNumber();
  },
  onHide() {
    usePageData().clearPageData();
  },
};
</script>

<style lang="scss">
@import "~uview-ui/index.scss";
@import "./assets/styles/global/index.scss";
</style>
