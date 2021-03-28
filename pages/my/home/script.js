import { useWxUser } from "vue-mobile/@lr/composables/use-wx-user";

export default {
  setup() {
    const { wxUser } = useWxUser();
    return { wxUser };
  },
};
