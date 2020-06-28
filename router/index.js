import Vue from "vue";
import Router from "uni-simple-router";

Vue.use(Router);

const router = new Router({
  routes: ROUTES,
  encodeURI: false
});

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
