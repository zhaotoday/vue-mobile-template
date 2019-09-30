import types from './types'
import Model from '@/models/public/wx-users'

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

  post ({ commit }, { body }) {
    return new Model().POST({ body })
  },

  put ({ commit }, { id, body }) {
    return new Model().PUT({ id, body })
  },

  del ({ commit }, { id }) {
    return new Model().DELETE({ id })
  },

  postAction ({ commit }, { showLoading, query, body }) {
    return new Model().addPath('actions').POST({ showLoading, query, body })
  }
}
