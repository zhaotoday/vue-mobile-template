import { useWxUser } from "lr/composables/use-wx-user";
import avatarUrl from "vue-mobile/assets/images/components/avatar/default.png";

export default {
  setup() {
    const { wxUser, navigateTo } = useWxUser();
    return { avatarUrl, wxUser, navigateTo };
  },
};
