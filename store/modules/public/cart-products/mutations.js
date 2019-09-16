import types from './types'

export default {
  [types.TOGGLE_SPECIFICATION] (state, { item }) {
    state.items.find(product => product.id === item.id)['visible'] = !item.visible
  },
  [types.ADD_NUMBER] (state, { item, specification }) {
    if (!state.items.find(product => product.id === item.id)) {
      state.items = [...state.items, item]
    }

    if (specification) {
      if (specification.number < 99) {
        state.items
          .find(product => product.id === item.id)['visible'] = true
        state.items
          .find(product => product.id === item.id)['specifications']
          .find(item => item.value === specification.value)['number'] += 1
      }
    } else {
      if (item.number < 99) {
        state.items
          .find(product => product.id === item.id)['number'] += 1
      }
    }
  },
  [types.SUBTRACT_NUMBER] (state, { item, specification }) {
    if (!state.items.find(product => product.id === item.id)) {
      state.items = [...state.items, item]
    }

    if (specification) {
      if (specification.number > 0) {
        state.items
          .find(product => product.id === item.id)['specifications']
          .find(item => item.value === specification.value)['number'] -= 1
      }
    } else {
      if (item.number > 0) {
        state.items
          .find(product => product.id === item.id)['number'] -= 1
      }
    }

    state.items = state.items.filter(product => product.number || product.specifications.find(specification => specification.number))
  },
  [types.SET_ITEMS] (state, { items }) {
    state.items = items
  },
  [types.CHECK_ITEM] (state, { item }) {
    state.items.find(product => product.id === item.id)['checked'] = !item.checked
  },
  [types.CHECK_ALL_ITEMS] (state) {
    if (state.items.find(item => !item.checked)) {
      state.items = state.items.map(item => ({ ...item, checked: true }))
    } else {
      state.items = state.items.map(item => ({ ...item, checked: false }))
    }
  }
}
