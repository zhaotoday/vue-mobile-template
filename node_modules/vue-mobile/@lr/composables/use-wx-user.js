import { computed } from "@vue/composition-api";
import { store } from "@/store";
import { useMp } from "../../composables/use-mp";

export const useWxUser = () => {
  const { getUserInfo } = useMp();

  const wxUser = computed(() => store.state.wxUsers.wxUser);
  const token = computed(() => store.state.wxUsers.token);
  const openId = computed(() => store.state.wxUsers.openId);

  const login = async () => {
    const { code, iv, encryptedData } = await getUserInfo();
    return store.dispatch("wxUsers/login", { code, iv, encryptedData });
  };
  const loggedIn = () => {
    return !!store.state.wxUsers.token;
  };
  const getWxUser = () => store.dispatch("wxUsers/getWxUser");
  const getToken = () => store.dispatch("wxUsers/getToken");
  const getOpenId = () => store.dispatch("wxUsers/getOpenId");

  return {
    wxUser,
    token,
    openId,
    login,
    loggedIn,
    getWxUser,
    getToken,
    getOpenId,
  };
};
