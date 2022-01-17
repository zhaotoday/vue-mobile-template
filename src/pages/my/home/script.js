import { useUsers } from "vue-mobile/@lr/composables/use-users";
import defaultAvatarUrl from "vue-mobile/assets/images/components/avatar/default.png";

export default {
  setup() {
    const { user, name, avatarUrl, navigateTo } = useUsers();
    return { defaultAvatarUrl, user, name, avatarUrl, navigateTo };
  },
};
