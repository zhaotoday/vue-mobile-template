import { Rest } from "@lr/utils/rest";
import { useAuth } from "@lr/composables/use-auth";
import { consts } from "@/utils/consts";

export class ExampleApi extends Rest {
  constructor() {
    super();

    this.baseUrl = consts.ApiUrl;
    this.headers = useAuth().getHeaders();
    this.path = "wx/example";
  }
}
