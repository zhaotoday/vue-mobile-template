<script>
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useCart } from "uni-shop/composables/use-cart";
import { usePageData } from "vue-mobile/composables/use-page-data";
import { useAppUpgrade } from "vue-mobile/@lr/composables/use-app-upgrade";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useIm } from "uni-im/components/im/composables/use-im";

export default {
  async onLaunch() {
    const { getEnums } = useEnums();
    const { loggedIn, user } = useUsers();

    await getEnums();

    useCart().renderProductsNumber();

    if (loggedIn()) {
      useIm({ user }).initialize();
    }

    await useAppUpgrade().upgrade();
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
