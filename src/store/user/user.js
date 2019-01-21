/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import Cookies from 'js-cookie';
import user from '../../api/user';

const state = {
  token: '',
  userInfo: {},
};

const actions = {
  login({ commit }, { username, password }) {
    return user.login({ username, password })
      .then((token) => {
        commit('SET_TOKEN', token);
        Cookies.set('Token', token);
      });
  },
};

const mutations = {
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo;
  },

  SET_TOKEN(state, token) {
    state.token = token;
  },
};

export default {
  state,
  actions,
  mutations,
};
