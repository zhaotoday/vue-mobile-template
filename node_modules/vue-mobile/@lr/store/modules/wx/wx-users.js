import helpers from "jt-helpers";
import { PublicWxUsersApi } from "../../../apis/public/wx-users";
import { WxUsersApi } from "../../../apis/wx/wx-users";

const state = {
  wxUser: {},
  token: "",
  openId: "",
};

const types = helpers.keyMirror({
  SetWxUser: null,
  SetToken: null,
  SetOpenId: null,
});

const mutations = {
  [types.SetWxUser](state, wxUser) {
    state.wxUser = wxUser;
  },
  [types.SetToken](state, token) {
    state.token = token;
  },
  [types.SetOpenId](state, openId) {
    state.openId = openId;
  },
};

const actions = {
  async login({ commit }, { code, iv, encryptedData }) {
    const { wxUser, token } = await new PublicWxUsersApi().POST({
      showLoading: true,
      action: "login",
      body: { type: "Mp", code, iv, encryptedData },
    });
    commit(types.SetWxUser, wxUser);
    commit(types.SetToken, `Bearer ${token}`);
    return { wxUser, token };
  },
  async getWxUser({ commit }) {
    const res = await new WxUsersApi().POST({
      action: "getUserInfo",
    });
    commit(types.SetWxUser, res);
    return res;
  },
  async getOpenId({ commit }, { code }) {
    const { openId } = await new PublicWxUsersApi().POST({
      showError: false,
      action: "getOpenId",
      body: { code },
    });
    commit(types.SetOpenId, openId);
    return openId;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
