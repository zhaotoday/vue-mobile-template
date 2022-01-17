<script>
import { useAuth } from "vue-mobile/@lr/composables/use-auth";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useWxUser } from "vue-mobile/@lr/composables/use-wx-user";

export default {
  async onLaunch() {
    const { getEnums } = useEnums();
    const { getWxUser } = useWxUser();

    await getEnums();

    if (useAuth().loggedIn()) await getWxUser();
  },
};
</script>

<style lang="scss" src="./assets/styles/global/index.scss"></style>
