/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import axios from 'axios';
import Cookies from 'js-cookie';
import { MessageBox } from 'element-ui';
import { router } from '../router/index';

axios.defaults.baseURL = process.env.BASE_API;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token'); // 获取Cookie
    config.headers = { token };
    return config;
  },
  err => Promise.reject(err),
);

export default (method, url, params, config = {}, autoErrorRes = true, autoErrorData = true) => {
  const args = Object.assign({
    method,
    url,
    data: params,
  }, config);

  return axios(args)
    .then((res) => {
      console.log('request');

      if (res.data.code !== 200) {
        if (res.data.code === 403 || res.data.code === 404) {
          router.push('/error');

          return Promise.reject();
        }

        if (autoErrorData) {
          const errMsg = res.data.message || '未知错误，请联系管理员或稍后再试';
          const errCode = res.data.code || -1;
          MessageBox.alert(errMsg, `错误码：${errCode}`, { confirmButtonText: '确定' });
        }

        return Promise.reject(res.data.error);
      }
      return res.data.result;
    }, (error) => {
      console.error(error);
      if (autoErrorRes) {
        const errStatus = error.response.code || -100;
        MessageBox.alert('网络请求异常，请联系管理员！', `请求异常：${errStatus}`, { confirmButtonText: '确定' });
      }
      return Promise.reject(error);
    });
};
