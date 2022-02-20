import { reactive } from "@vue/composition-api";
import { usersApi } from "vue-mobile/@lr/apis/client/users";
import { useUsers } from "vue-mobile/@lr/composables/use-users";

export default {
  setup() {
    const { getUserInfo } = useUsers();

    const cModal = reactive({
      visible: true,
    });

    const show = () => {
      cModal.visible = true;
    };

    const onGetPhoneNumber = async (e) => {
      await usersApi.post({
        action: "getWxPhoneNumber",
        body: { code: e.detail.code },
      });

      await getUserInfo();
    };

    return {
      cModal,
      show,
      onGetPhoneNumber,
    };
  },
};
