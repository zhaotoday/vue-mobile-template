import { Rest } from "@lr/utils/rest";
import { useAuth } from "@lr/composables/use-auth";
import { useConsts } from "@/composables/use-consts";

export class ExampleApi extends Rest {
  constructor() {
    super();

    this.baseUrl = useConsts().ApiUrl;
    this.headers = useAuth().getHeaders();
    this.path = "wx/example";
  }
}
