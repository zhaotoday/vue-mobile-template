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
    'public/cartProducts': require('./modules/public/cart-products').default,
    'public/articles': require('./modules/public/articles').default,
    'public/natatoriums': require('./modules/public/natatoriums').default,
    'public/students': require('./modules/public/students').default,
    'public/trainers': require('./modules/public/trainers').default,
    'public/products': require('./modules/public/products').default,
    'wx/wxUsers': require('./modules/wx/wx-users').default,
    'wx/payments': require('./modules/wx/payments').default,
    'wx/orders': require('./modules/wx/orders').default,
    'wx/products': require('./modules/wx/products').default,
    'wx/studentProducts': require('./modules/wx/student-products').default,
    'wx/studentProductComments': require('./modules/wx/student-product-comments').default
  }
})
