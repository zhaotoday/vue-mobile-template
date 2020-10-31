import REST from "vue-mobile/utils/rest";
import auth from "vue-mobile/utils/auth";
import consts from "@/utils/consts";

export default class extends REST {
  constructor() {
    super();

    this.baseURL = consts.ApiUrl;
    this.headers = auth.getHeaders();
    this.path = "wx/payments";
  }
}
