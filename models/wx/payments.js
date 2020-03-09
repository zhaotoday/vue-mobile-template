import REST from "we-design/utils/rest";
import auth from "we-design/utils/auth";
import consts from "@/utils/consts";

export default class extends REST {
  constructor() {
    super();

    this.baseURL = consts.API_URL;
    this.headers = auth.getHeaders();
    this.path = "wx/payments";
  }
}
