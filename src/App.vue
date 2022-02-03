<script>
import { useEnums } from "vue-mobile/@lr/composables/use-enums";

export default {
  async onLaunch() {
    const { getEnums } = useEnums();

    await getEnums();
  },
};
</script>

<style lang="scss">
@import "~uview-ui/index.scss";
@import "./assets/styles/global/index.scss";
</style>
