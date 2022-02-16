import helpers from "jt-helpers";

const state = {
  products: [],
};

const types = helpers.keyMirror({
  UpdateProductNumber: null,
});

const mutations = {
  [types.UpdateProductNumber](state, { id, number }) {
    const index = state.products.findIndex((item) => item.id === id);

    if (index === -1) {
      state.products.push({ id, number });
    } else {
      state.products[index].number = number;
    }

    state.products.push({ id, number });
  },
};

const actions = {
  updateProductNumber({ commit }, { id, number }) {
    commit(types.UpdateProductNumber, { id, number });
    return { id, number };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
