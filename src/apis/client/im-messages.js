import { createApi } from "vue-mobile/@lr/utils/create-api";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";

export const imMessagesApi = createApi({
  url: "/client/imMessages",
  getHeaders: useAuth().getHeaders,
});
