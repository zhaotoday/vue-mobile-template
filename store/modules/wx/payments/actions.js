import types from './types'
import Model from '@/models/wx/payments'

export default {
  async getList ({ commit }, { query }) {
    const { data } = await new Model().GET({ query })
    commit(types.GET_LIST, { data })
    return data
  },

  async getDetail ({ commit }, { id }) {
    const { data } = await new Model().GET({ id })
    commit(types.GET_DETAIL, { data })
    return data
  },

  post ({ commit }, { loading = false, body }) {
    return new Model().POST({ loading, body })
  },

  put ({ commit }, { id, body }) {
    return new Model().PUT({ id, body })
  },

  del ({ commit }, { id }) {
    return new Model().DELETE({ id })
  },

  postAction ({ commit }, { loading = false, query, body }) {
    return new Model().addPath('actions').POST({ loading, query, body })
  }
}
