import Vue from "vue";
import Router from "uni-simple-router";
import auth from "we-design/utils/auth";
import store from "@/store";
import qs from "query-string";

const LoginVersion = "v1.12";
const { _, code, schoolId } = qs.parse(window.location.search);
const page = window.location.hash.substr(1);

Vue.use(Router);

const router = new Router({
  routes: ROUTES,
  encodeURI: false
});

router.beforeEach(async (to, from, next) => {
  if (!auth.loggedIn({ code, version: LoginVersion })) {
    const {
      data: { redirectUrl, wxUser, token }
    } = await store.dispatch("public/wxUsers/postAction", {
      action: "login",
      body: {
        type: "Oa",
        _,
        code,
        page,
        extra: {
          schoolId
        }
      }
    });

    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      auth.login({ user: wxUser, token, code, version: LoginVersion });
      store.dispatch("setUser", { user: auth.get()["user"] });
    }
  }

  next();
});

export default router;
