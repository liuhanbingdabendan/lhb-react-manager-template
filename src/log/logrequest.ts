/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { getAuthToken } from '@drbt-design/pro-components';
import { extend } from 'umi-request';
/**
 * 创建一个全局的 AbortController 和 signal 对象, 用于取消请求
 */
let abortControllers: { [key: string]: AbortController } = {};
// let signal: AbortSignal | null = null;

/**
 * 取消当前的请求
 */
const cancelRequest = (requestId: string) => {
  if (abortControllers[requestId]) {
    abortControllers[requestId].abort('canceled');
    delete abortControllers[requestId];
  }
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  prefix: (<any>window).globalConfig.baseapi || '',
});

// request拦截器, 改变url 或 options.
request.interceptors.request.use(
  (url: any, options: any) => {
    let newOptions = { ...options };

    if (options.requestId) {
      let abortController = new AbortController();
      // 存储当前请求的 AbortController 对象
      abortControllers[options.requestId] = abortController;
      let signal = abortController ? abortController.signal : false;
      newOptions.signal = signal;
    }
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
        ...newOptions,
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
request.interceptors.response.use(
  async (response) => {
    const data = await response.clone().json();
    dataHandler(data);
    return response;
  },
  { global: false },
);

export { request, cancelRequest };
