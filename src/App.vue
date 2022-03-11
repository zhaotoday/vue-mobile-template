<script>
import wx from "wx-bridge";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useCart } from "@/composables/use-cart";
import { usePageData } from "@/composables/use-page-data";

export default {
  async onLaunch() {
    const locale = wx.getStorageSync("locale");

    wx.setLocale(locale || "en");

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
