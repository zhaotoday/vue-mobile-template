<script>
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useCart } from "@/composables/use-cart";

export default {
  async onLaunch() {
    const { getEnums } = useEnums();

    await getEnums();

    useCart().renderProductsNumber();
  },
};
</script>

<style lang="scss">
@import "~uview-ui/index.scss";
@import "./assets/styles/global/index.scss";
</style>
