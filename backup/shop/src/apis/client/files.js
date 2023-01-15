import { createApi } from "vue-mobile/@lr/utils/create-api";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";

export const filesApi = createApi({
  url: "/client/files",
  getHeaders: useAuth().getHeaders,
});
