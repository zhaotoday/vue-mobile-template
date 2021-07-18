<script>
import { onLaunch } from "uni-composition-api";
import { useAuth } from "@/lr/composables/use-auth";
import { useEnums } from "@lr/composables/use-enums";
import { useWxUser } from "@lr/composables/use-wx-user";

export default {
  setup() {
    const { getEnums } = useEnums();
    const { getWxUser } = useWxUser();

    onLaunch(async () => {
      await getEnums();
      if (useAuth().loggedIn()) await getWxUser();
    });
  },
};
</script>

<style lang="scss" src="./assets/styles/global/index.scss"></style>
