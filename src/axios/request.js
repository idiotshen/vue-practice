import axios from 'axios';
import { MessageBox } from 'element-ui';

/*
 * 一、request：
 *    1. 说明：封装对后台的请求，可以选择自动处理一些异常。
 *    2. 参数：
 *        - url：            后台地址，必填，String，如："/user/add"
 *        - params：         请求参数，必填，Object，如：{"name":"xxx"}
 *        - config：         axios参数，选填，Object，默认值：{}
 *        - autoErrorRes： 是否自动处理响应错误，选填，Boolean，默认值：true
 *        - autoErrorData：是否自动处理后台错误，选填，Boolean，默认值：true
 *    3. 返回：
 *        - 成功：Promise.resolve(请求成功后的结果：response.data.result)
 *        - 失败：
 *            - 请求异常：Promise.reject(http响应错误)
 *            - 请求失败：Promise.reject(请求失败后的结果：response.data.error)
 *    4. 约定后台返回数据格式：
 *        response.data = {
 *          "success": true/false,         //请求成功或失败
 *          "result": {},                  //请求成功后的结果
 *          "error":{
 *            "code": 100001,              //请求失败错误码
 *            "message": "用户名字重复"     //请求失败描述
 *          }
 *        }
 *
 * 二、sessionRequest：
 *    1. 说明：利用sessionStorage缓存请求，可以选择outTime，其他同request。
 *    2. 参数：
 *        - outTime：距离上次请求多少秒后需要重新请求，选填，Integer，小于0表示不重新请求，默认值：-1
 *
 * 三、localRequest：
 *    1. 说明：利用localStorage缓存请求，可以选择outTime，其他同request。
 *    2. 参数：
 *        - outTime：距离上次请求多少秒后需要重新请求，选填，Integer，小于0表示不重新请求，默认值：604800（一周）
 *
 * */

axios.defaults.baseURL = '';

export default (method, url, params, config = {}, autoErrorRes = true, autoErrorData = true) => {
  const args = Object.assign({
    method,
    url,
    data: params,
  }, config);

  return axios(args).then((res) => {
    if (!res.data.success) {
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
      const errStatus = error.response.status || -100;
      MessageBox.alert('网络请求异常，请联系管理员！', `请求异常：${errStatus}`, { confirmButtonText: '确定' });
    }
    return Promise.reject(error);
  });
};
