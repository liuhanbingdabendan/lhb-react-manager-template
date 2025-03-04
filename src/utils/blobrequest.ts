/* eslint-disable */
// @ts-nocheck
import { getAuthToken } from '@drbt-design/pro-components';
import { notification } from 'antd';
import { formatMessage } from 'umi';

const windowConfig = window.globalConfig;

// 错误提示fun
const typeNoticeFun = (code: number | string) => {
  const errorText = formatMessage({ id: `res.code.${code}` });
  let codeNum = Number(code);
  if (codeNum === 400 || codeNum === 401 || codeNum === 404 || codeNum === 405 || codeNum === 412) {
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

// 导出数据
export const exportblobexcel = (url: string, data: any, filename: string) => {
  const token = getAuthToken();
  return fetch(`${windowConfig.baseapi}${url}`, {
    responseType: 'blob',
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.blob();
      } else {
        typeNoticeFun(res.status);
        return false;
      }
    })
    .then((blob) => {
      const bl = new Blob([blob]); // 注意拿到的是数据流！！
      const objectURL = URL.createObjectURL(bl);
      let btn = document.createElement('a');
      btn.download = filename; // 文件类型
      btn.href = objectURL;
      btn.click();
      URL.revokeObjectURL(objectURL);
    })
    .catch((err) => {
      console.log(err);
    });
};
