import { createApi } from "vue-mobile/@lr/utils/create-api";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";

export const collectionsApi = createApi({
  url: "/client/collections",
  headers: useAuth().getHeaders,
});
