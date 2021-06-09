import { Rest } from "lr/utils/rest";
import { auth } from "lr/utils/auth";
import { consts } from "@/utils/consts";

export class ExampleApi extends Rest {
  constructor() {
    super();

    this.baseUrl = consts.ApiUrl;
    this.headers = auth.getHeaders();
    this.path = "wx/example";
  }
}
