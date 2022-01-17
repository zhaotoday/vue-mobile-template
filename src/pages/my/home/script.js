import { useUsers } from "vue-mobile/@lr/composables/use-users";
import avatarUrl from "vue-mobile/assets/images/components/avatar/default.png";

export default {
  setup() {
    const { user, navigateTo } = useUsers();
    return { avatarUrl, user, navigateTo };
  },
};
