import helpers from "jt-helpers";

const state = {
  products: [],
};

const types = helpers.keyMirror({
  UpdateProductNumber: null,
});

const mutations = {
  [types.UpdateProductNumber](state, { id, number }) {
    state.products.push({ id, number });
  },
};

const actions = {
  updateProductNumber({ commit }, { product }) {
    commit(types.UpdateProductNumber, product);
    return { product };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
