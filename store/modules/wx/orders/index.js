import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const initState = {
  list: {
    items: [],
    total: 0
  },
  detail: {},
  form: {
    address: {},
    coupon: {},
    remark: {}
  }
}

export default {
  namespaced: true,
  state: {
    ...initState,
    getInitState () {
      return initState
    }
  },
  getters,
  actions,
  mutations
}
