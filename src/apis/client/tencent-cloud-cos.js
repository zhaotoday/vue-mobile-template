import { createApi } from "vue-mobile/@lr/utils/create-api";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";

export const tencentCloudCosApi = createApi({
  url: "/client/tencentCloudCos",
  getHeaders: useAuth().getHeaders,
});
