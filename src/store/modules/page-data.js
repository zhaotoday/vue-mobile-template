import helpers from "jt-helpers";

const types = helpers.keyMirror({
  SetData: null,
});

const state = {
  data: {},
};

const getters = {
  selectedProducts(state) {
    return state.products.filter(({ selected }) => selected);
  },
};

const mutations = {
  [types.SetData](state, { page, data }) {
    state.data[page] = data;
  },
};

const actions = {
  setData({ commit }, { page, data }) {
    commit(types.SetData, { page, data });
    return { page, data };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
