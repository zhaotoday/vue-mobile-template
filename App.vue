<script>
import { auth } from "vue-mobile/@liruan/utils/auth";
import { useEnums } from "vue-mobile/@liruan/composables/use-enums";
import { useWxUser } from "vue-mobile/@liruan/composables/use-wx-user";

export default {
  async onLaunch() {
    const { getEnums } = useEnums();
    const { getWxUser } = useWxUser();

    await getEnums();

    if (auth.loggedIn()) await getWxUser();
  }
};
</script>

<style lang="scss" src="./assets/styles/global/index.scss"></style>
