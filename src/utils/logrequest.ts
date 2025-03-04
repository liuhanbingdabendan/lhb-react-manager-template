/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { getAuthToken } from './common';

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  prefix: (<any>window).globalConfig.baseapi || '',
});

// request拦截器, 改变url 或 options.
request.interceptors.request.use(
  (url: any, options: any) => {
    const token = getAuthToken();
    let authToken = options?.authToken; // 设定authToken代表需要校验的token
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: authToken || token,
      ...options.headers,
    };

    return {
      url,
      options: {
        ...options,
        headers,
      },
    };
  },
  { global: false },
);
export type dataResponse = {
  code: number;
  data: any;
  message?: string;
};
/**
 * 返回体异常处理程序
 */
const dataHandler = (resBody: dataResponse): dataResponse => {
  const { code, message } = resBody;
  if (code && code !== 200) {
    console.error(`请求异常：${code} ${message}`);
  }
  return resBody;
};
// response拦截器, 处理response
request.interceptors.response.use(async (response) => {
  const data = await response.clone().json();
  dataHandler(data);
  return response;
});

const extendRequest = request;
export default extendRequest;
