import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';
import { notification } from 'antd';
import { formatMessage } from 'umi';
import { clearAuthAndLogout, getAuthToken } from './utils/common';

// 错误提示fun
const typeNoticeFun = (code: number | string) => {
  notification.config({ maxCount: 1 }); // 当多个接口报错时只会显示一个错误提示
  const errorText = formatMessage({ id: `res.code.${code}` });
  const codeNum = Number(code);
  if (codeNum === 400 || codeNum === 404 || codeNum === 405 || codeNum === 412) {
    notification.warning({
      message: `Warning`,
      description: errorText,
    });
  } else if (codeNum >= 500 && codeNum <= 599) {
    notification.error({
      message: `Error`,
      description: formatMessage({ id: `res.code.500` }),
    });
  } else {
    notification.info({
      message: `Info`,
      description: errorText,
    });
  }
};

/**
 * @name 错误处理
 * pro 自带的错误处理， 可以在这里做自己的改动
 * @doc https://umijs.org/docs/max/request#配置
 */
export const errorConfig: RequestConfig = {
  // 请求拦截器
  requestInterceptors: [
    (config: RequestOptions) => {
      const token = getAuthToken() as string;
      let autheaders: any = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token,
      };
      // 如果不需要带token 在api里加上ignoreToken即可
      if (config.ignoreToken) {
        autheaders = {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        };
      }
      // 拦截请求配置，进行个性化处理。
      config.headers = { ...config.headers, ...autheaders };
      return { ...config };
    },
  ],

  // 响应拦截器 进行个性化处理 一个二元组，第一个元素是 request 拦截器，第二个元素是错误处理
  responseInterceptors: [
    [
      (response: any) => {
        if (response.data.code !== 200) {
          typeNoticeFun(response.data.code);
        }
        return response;
      },
      (error: any) => {
        if (error.response.status === 401) {
          typeNoticeFun(401);
          setTimeout(() => {
            clearAuthAndLogout();
          }, 3000);
        } else {
          typeNoticeFun(error.response.status);
        }
        return Promise.reject(error);
      },
    ],
  ],
};
