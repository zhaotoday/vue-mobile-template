import { useWxUser } from "lr/composables/use-wx-user";

export default {
  setup() {
    const { wxUser } = useWxUser();
    return { wxUser };
  },
};
