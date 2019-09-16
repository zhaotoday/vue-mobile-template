import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['public/cartProducts'],
      storage: {
        getItem: key => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: key => wx.removeStorageSync(key)
      }
    })
  ],
  state: {},
  getters,
  actions,
  mutations,
  modules: {
    'public/wxUsers': require('./modules/public/wx-users').default,
    'wx/wxUsers': require('./modules/wx/wx-users').default
  }
})
