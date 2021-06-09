<script>
import { auth } from "lr/utils/auth";
import { useEnums } from "lr/composables/use-enums";
import { useWxUser } from "lr/composables/use-wx-user";

export default {
  async onLaunch() {
    const { getEnums } = useEnums();
    const { getWxUser } = useWxUser();

    await getEnums();

    if (auth.loggedIn()) await getWxUser();
  },
};
</script>

<style lang="scss" src="./assets/styles/global/index.scss"></style>
