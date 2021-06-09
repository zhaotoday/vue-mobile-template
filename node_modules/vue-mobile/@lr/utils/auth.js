import { store } from "@/store";

export const auth = {
  getToken() {
    return store.state.wxUsers.token || "";
  },
  getHeaders() {
    return { Authorization: this.getToken() };
  },
  loggedIn() {
    return !!this.getToken();
  },
};
