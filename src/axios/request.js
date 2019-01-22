/* eslint-disable no-console */
import axios from 'axios';
import { MessageBox } from 'element-ui';

axios.defaults.baseURL = 'http://localhost:8081';

export default (method, url, params, config = {}, autoErrorRes = true, autoErrorData = true) => {
  const args = Object.assign({
    method,
    url,
    data: params,
  }, config);

  return axios(args).then((res) => {
    console.log(res);

    if (res.data.code !== 200) {
      res.data.error = res.data.error || {};
      console.error(res.data.error);
      if (autoErrorData) {
        const errMsg = res.data.error.message || '未知错误，请联系管理员或稍后再试';
        const errCode = res.data.error.code || -1;
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
