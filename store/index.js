import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import state from "we-design/store/state";
import getters from "we-design/store/getters";
import actions from "we-design/store/actions";
import mutations from "we-design/store/mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["public/dicts"],
      storage: {
        getItem: key => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: key => wx.removeStorageSync(key)
      }
    })
  ],
  state,
  getters,
  actions,
  mutations,
  modules: {
    "public/wxUsers": require("we-design/store/modules/public/wx-users")
      .default,
    "public/dicts": require("we-design/store/modules/public/dicts").default,
    "wx/wxUsers": require("we-design/store/modules/wx/wx-users").default,
    "wx/payments": require("./modules/wx/payments").default
  }
});
