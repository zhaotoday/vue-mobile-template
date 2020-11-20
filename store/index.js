import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import state from "vue-mobile/store/state";
import getters from "vue-mobile/store/getters";
import actions from "vue-mobile/store/actions";
import mutations from "vue-mobile/store/mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["public/dicts", "wx/wxUsers"],
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
    "public/wxUsers": require("vue-mobile/store/modules/public/wx-users")
      .default,
    "public/dicts": require("vue-mobile/store/modules/public/dicts").default,
    "wx/wxUsers": require("vue-mobile/store/modules/wx/wx-users").default,
    "wx/payments": require("./modules/wx/payments").default
  }
});
