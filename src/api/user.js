import request from '../axios/request';

export default {
  login({ username, password }) {
    return request('post', '/login', { username, password });
  },
};
