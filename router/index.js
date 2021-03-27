import { createRouter, RouterMount } from "uni-simple-router";

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  routes: [...ROUTES]
});

router.beforeEach((to, from, next) => {
  next();
});

export { router, RouterMount };
