import { Rest } from "vue-mobile/@lr/utils/rest";
import { auth } from "vue-mobile/@lr/utils/auth";
import { consts } from "@/utils/consts";

export class ExampleApi extends Rest {
  constructor() {
    super();

    this.baseUrl = consts.ApiUrl;
    this.headers = auth.getHeaders();
    this.path = "wx/example";
  }
}
