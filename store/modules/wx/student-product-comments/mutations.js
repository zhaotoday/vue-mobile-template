import types from './types'

export default {
  [types.GET_LIST] (state, payload) {
    state.list = payload.data
  },
  [types.GET_DETAIL] (state, payload) {
    state.detail = payload.data
  },
  [types.SET_FORM] (state, { key, value }) {
    state.form[key] = value
  }
}
