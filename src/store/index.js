import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["enums", "users", "cart", "pageData"],
      storage: {
        getItem: (key) => uni.getStorageSync(key),
        setItem: (key, value) => uni.setStorageSync(key, value),
        removeItem: (key) => uni.removeStorageSync(key),
      },
    }),
  ],
  modules: {
    enums: require("vue-mobile/@lr/store/modules/enums").default,
    users: require("vue-mobile/@lr/store/modules/users").default,
    cart: require("uni-shop/store/modules/cart").default,
    pageData: require("vue-mobile/store/modules/page-data").default,
  },
});
