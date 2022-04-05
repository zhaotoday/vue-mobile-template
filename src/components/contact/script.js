import { useUsers } from "vue-mobile/@lr/composables/use-users";

export default {
  setup() {
    const { navigateTo } = useUsers();

    return {
      navigateTo,
    };
  },
};
