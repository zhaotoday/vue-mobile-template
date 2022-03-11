import { keyMirror } from "jt-helpers";

const types = keyMirror({
  SetPageData: null,
  RemovePageData: null,
  ClearPageData: null,
});

const state = {
  pageData: {},
};

const mutations = {
  [types.SetPageData](state, { page, data }) {
    state.pageData[page] = data;
  },
  [types.RemovePageData](state, { page }) {
    delete state.pageData[page];
  },
  [types.ClearPageData](state) {
    state.pageData = {};
  },
};

const actions = {
  setPageData({ commit }, { page, data }) {
    commit(types.SetPageData, { page, data });
    return { page, data };
  },
  removePageData({ commit }, { page }) {
    commit(types.RemovePageData, { page });
    return { page };
  },
  clearPageData({ commit }) {
    commit(types.ClearPageData);
    return {};
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
