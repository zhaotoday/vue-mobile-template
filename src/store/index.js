import Vue from "vue";
import Vuex from "vuex";
import wx from "wx-bridge";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["enums", "users", "cart", "pageData"],
      storage: {
        getItem: (key) => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: (key) => wx.removeStorageSync(key),
      },
    }),
  ],
  modules: {
    enums: require("vue-mobile/@lr/store/modules/enums").default,
    users: require("vue-mobile/@lr/store/modules/users").default,
    cart: require("./modules/cart").default,
    pageData: require("vue-mobile/modules/page-data").default,
  },
});
