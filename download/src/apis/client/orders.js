import { createApi } from "vue-mobile/@lr/utils/create-api";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";

export const ordersApi = createApi({
  url: "/client/orders",
  getHeaders: useAuth().getHeaders,
});
