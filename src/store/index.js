import { createStore } from "vuex";
// import wx from "wx-bridge";
import createPersistedState from "vuex-persistedstate";

console.log(window, "==");
export const store = createStore({
  plugins: [
    createPersistedState({
      paths: ["enums", "wxUsers"],
      storage: {
        getItem: (key) => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: (key) => wx.removeStorageSync(key),
      },
    }),
  ],
  modules: {
    // enums: require("vue-mobile/@lr/store/modules/enums").default,
    // wxUsers: require("vue-mobile/@lr/store/modules/wx-users").default,
  },
});
