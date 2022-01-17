<script>
import { useEnums } from "vue-mobile/@lr/composables/use-enums";

export default {
  async onLaunch() {
    const { getEnums } = useEnums();

    await getEnums();
  },
};
</script>

<style lang="scss" src="./assets/styles/global/index.scss"></style>
