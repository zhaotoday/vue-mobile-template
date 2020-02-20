import REST from "we-design/utils/rest";
import restHelpers from "we-design/utils/helpers/rest-helpers";
import consts from "@/utils/consts";

export default class extends REST {
  constructor() {
    super();

    this.baseURL = consts.API_URL;
    this.headers = restHelpers.getHeaders();
    this.path = "wx/payments";
  }
}
