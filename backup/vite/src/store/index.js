import { createStore } from "vuex";
import wx from "wx-bridge";
import createPersistedState from "vuex-persistedstate";

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
    enums: import("vue-mobile/@lr/store/modules/enums"),
    wxUsers: import("vue-mobile/@lr/store/modules/wx-users"),
  },
});
