import helpers from "jt-helpers";

const types = helpers.keyMirror({});

const state = {};

const getters = {
  selectedProducts(state) {
    return state.products.filter(({ selected }) => selected);
  },
};

const mutations = {
  [types.SelectProduct](state, { product }) {
    product.selected = !product.selected;
  },
};

const actions = {
  selectProduct({ commit }, { product }) {
    commit(types.SelectProduct, { product });
    return { product };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
