const state = {
  userinfo: {
    username: "",
    adminflag: 0,
    token: ""
  }
};

const mutations = {
  saveUserinfo(state, { userinfo }) {
    state.userinfo = {
      ...state.userinfo,
      ...userinfo
    };
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
