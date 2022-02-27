import helpers from "jt-helpers";

const types = helpers.keyMirror({
  SavePageData: null,
});

const state = {
  pageData: {},
};

const mutations = {
  [types.SavePageData](state, { page, pageData }) {
    state.pageData[page] = pageData;
  },
};

const actions = {
  setData({ commit }, { page, pageData }) {
    commit(types.SavePageData, { page, pageData });
    return { page, pageData };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
