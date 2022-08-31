import { createApi } from "vue-mobile/@lr/utils/create-api";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";

export const productsApi = createApi({
  url: "/client/products",
  headers: useAuth().getHeaders,
});
