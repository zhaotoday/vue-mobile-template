import helpers from "jt-helpers";

const state = {
  products: [],
};

const types = helpers.keyMirror({
  UpdateProduct: null,
});

const mutations = {
  [types.UpdateProduct](state, { product }) {},
};

const actions = {
  updateProduct({ commit }, { product }) {
    commit(types.UpdateProduct, product);
    return { product };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
