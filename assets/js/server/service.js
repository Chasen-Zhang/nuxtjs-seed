/* eslint-disable prefer-template */
import axios from 'axios';
import CODE from './code';
// 创建实例
const service = axios.create({
  baseURL: '/api',
  timeout: 6000,
});
// 获取token
function getToken() {
  const token =  window.localStorage.getItem('token') || ''; // 具体看存在哪
  return token;
}
// http request请求拦截
service.interceptors.request.use(
  (config) => {
    if (process.client && getToken()) {
      config.headers.token = getToken();
      config.headers['Content-Type'] = 'application/json;charset=utf-8';
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// http response拦截器
service.interceptors.response.use(
  (response) => {
    console.log(response)
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default service;
