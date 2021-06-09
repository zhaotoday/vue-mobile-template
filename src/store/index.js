import Vue from "vue";
import Vuex from "vuex";
import wx from "wx-bridge";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["public/enums", "wxUsers"],
      storage: {
        getItem: (key) => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: (key) => wx.removeStorageSync(key),
      },
    }),
  ],
  modules: {
    "public/enums": require("lr/store/modules/public/enums")
      .default,
    wxUsers: require("lr/store/modules/wx/wx-users").default,
  },
});
