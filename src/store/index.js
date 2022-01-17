import Vue from "vue";
import Vuex from "vuex";
import wx from "wx-bridge";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["enums", "users"],
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
  },
});
