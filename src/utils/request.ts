import axios from 'axios';
import { AxiosResponse } from 'axios/index';
import { message } from 'antd';
import { getToken } from './index';

const instance = axios.create({
  baseURL: 'http://localhost:7001',
  timeout: 1000,
  headers: { 'authorization': getToken() }
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  // Do something before request is sent
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
}
);

// 响应拦截器
instance.interceptors.response.use((response: AxiosResponse<any>) => {
  // Do something with response data
  if (response.status !== 200) {
    message.error(response.statusText);
  }
  return response.data;
}, (error) => {
  if (error.response.status && error.response.status !== 200) {
    message.error(error.response.statusText);
  } else {
    // message.error(error.response);
  }
  // Do something with response error
  return Promise.resolve(error);
}
);

export default instance;