import { keyMirror } from "jt-helpers";

const types = keyMirror({
  SetPageData: null,
  RemovePageData: null,
});

const state = {
  pageData: {},
};

const mutations = {
  [types.SetPageData](state, { page, data }) {
    state.pageData[page] = data;
  },
};

const actions = {
  setPageData({ commit }, { page, data }) {
    commit(types.SetPageData, { page, data });
    return { page, data };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
