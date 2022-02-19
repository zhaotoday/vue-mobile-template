import { createApi } from "vue-mobile/@lr/utils/create-api";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";

export const addressesApi = createApi({
  url: "/client/addresses",
  getHeaders: useAuth().getHeaders,
});
