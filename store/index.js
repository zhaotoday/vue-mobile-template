import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters,
  actions,
  mutations,
  modules: {
    'public/wxUsers': require('./modules/public/wx-users').default,
    'public/ads': require('./modules/public/ads').default,
    'public/categories': require('./modules/public/categories').default,
    'public/helpers': require('./modules/public/helpers').default,
    'public/products': require('./modules/public/products').default,
    'wx/wxUsers': require('./modules/wx/wx-users').default,
    'wx/points': require('./modules/wx/points').default,
    'wx/addresses': require('./modules/wx/addresses').default,
    'wx/carts': require('./modules/wx/carts').default,
    'wx/collections': require('./modules/wx/collections').default,
    'wx/coupons': require('./modules/wx/coupons').default,
    'wx/footprints': require('./modules/wx/footprints').default,
    'wx/orders': require('./modules/wx/orders').default,
    'wx/payments': require('./modules/wx/payments').default
  }
})
