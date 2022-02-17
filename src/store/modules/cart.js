import helpers from "jt-helpers";

const state = {
  products: [],
};

const types = helpers.keyMirror({
  UpdateProductNumber: null,
});

const mutations = {
  [types.UpdateProductNumber](state, product) {
    const index = state.products.findIndex((item) => item.id === product.id);

    if (index === -1) {
      state.products.push({ ...product, number: 1 });
    } else {
      if (product.number) {
        state.products[index].number = product.number;
      } else {
        state.products.splice(index, 1);
      }
    }
  },
};

const actions = {
  updateProductNumber({ commit }, product) {
    commit(types.UpdateProductNumber, product);
    return product;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
