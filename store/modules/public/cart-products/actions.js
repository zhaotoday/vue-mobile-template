import types from './types'

export default {
  toggleSpecification ({ commit }, { item }) {
    commit(types.TOGGLE_SPECIFICATION, { item })
  },
  addNumber ({ commit }, { item, specification }) {
    commit(types.ADD_NUMBER, { item, specification })
  },
  subtractNumber ({ commit }, { item, specification }) {
    commit(types.SUBTRACT_NUMBER, { item, specification })
  },
  setItems ({ commit }, { items }) {
    commit(types.SET_ITEMS, { items })
  },
  checkItem ({ commit }, { item }) {
    commit(types.CHECK_ITEM, { item })
  },
  checkAllItems ({ commit }) {
    commit(types.CHECK_ALL_ITEMS)
  }
}
