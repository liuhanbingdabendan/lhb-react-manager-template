import type { AuthInfo } from '@/services/init';
import { getButtonAuthList } from '@/services/init/auth';
import type { SortOrder } from 'antd/es/table/interface';
import { parse } from 'querystring';

export const sessionSave = (key: string, value: any) => {
  if (typeof value === 'object') {
    sessionStorage.setItem(key, JSON.stringify(value));
  } else {
    sessionStorage.setItem(key, value);
  }
};
export const localSave = (key: string, value: any) => {
  if (typeof value === 'object') {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};
export const sessionRead = (key: string) => sessionStorage.getItem(key) || '';
export const localRead = (key: string) => localStorage.getItem(key) || '';
export const sessionReadObject = (key: string) => JSON.parse(sessionStorage.getItem(key) || '{}');
export const localReadObject = (key: string) => JSON.parse(localStorage.getItem(key) || '{}');

export interface AuthorityInfo {
  name: string;
  adm: string;
  id: number;
  exp: number;
  iat: number;
  ud: {
    appId?: string;
    devic: number;
    tenantId: number;
  };
}

// get authinfo
// eslint-disable-next-line @typescript-eslint/ban-types
export function getAuthorityInfo() {
  const authority = localStorage.getItem('drumbeat-centralizer-authority');
  const jsonAuth = JSON.parse(authority || '{}');
  const splitAuthArr = (jsonAuth.token || '').split('.');
  if (splitAuthArr.length <= 1) {
    return <AuthorityInfo>{};
  }
  const accountInfo = JSON.parse(Buffer.from(splitAuthArr[1], 'base64').toString());
  accountInfo.ud = JSON.parse(accountInfo.ud);
  const AuthInfo = <AuthorityInfo>{
    name: accountInfo.name, // 用户名
    adm: accountInfo.adm,
    id: accountInfo.id, // 用户id
    exp: accountInfo.exp, // 有效期
    iat: accountInfo.iat,
    ud: accountInfo.ud, // 账号信息
  };
  return AuthInfo;
}

export function getAuthority(): string {
  const authorityString = localStorage.getItem('drumbeat-centralizer-authority');
  let authority;
  try {
    if (authorityString) {
      authority = JSON.parse(authorityString);
    }
  } catch (e) {
    authority = authorityString;
  }
  return authority;
}
export const getAuthToken = (): string | string[] => {
  const authority = getAuthority() || {};
  return (<any>authority).token;
};
export function setAuthority(authority: string | string[]): void {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  localStorage.setItem('drumbeat-centralizer-authority', JSON.stringify(proAuthority));
}

export function clearAuthority(): void {
  localStorage.removeItem('drumbeat-centralizer-authority');
}

export const clearAuthAndLogout = () => {
  const authinfo = getAuthorityInfo();
  const appid = authinfo?.ud?.appId || 'xxx';
  let reloadurl = (window as any).globalConfig.loginUrl;
  if (appid)
    reloadurl =
      (window as any).globalConfig.loginUrl + `?redirect=${window.location.origin}&app_id=${appid}`;
  clearAuthority();
  window.location.href = reloadurl;
};

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

export const getUserInfo = () => {
  const { token, tz, umi_locale } = getPageQuery();
  if (tz) {
    // tz代表时区
    let auth_tz = tz.toString().replace('_', '/');
    localStorage.setItem('time_zone_key', auth_tz);
  }
  if (umi_locale) {
    // 入口进来会再次刷新，把语言存缓存即可，页面刷新后会切换到对应的语言环境
    window.localStorage.setItem('umi_locale', umi_locale.toString());
  }
  if (token) {
    const Token = {
      token: token,
    };
    setAuthority(Token as any);
  }
  try {
    const msg = getAuthorityInfo() as AuthInfo;
    if (!msg?.id) {
      clearAuthAndLogout();
    }
    return msg;
  } catch (error) {
    clearAuthAndLogout();
  }
  return undefined;
};

//遍历routes的数组，返回所有的id(数组)
//arr为入参，key为你想根据的key  如果为
export const getTreeKeys = (arr: any[], key: string) => {
  const result: string[] = [];
  const loop = (list: any[]) => {
    list.forEach((item) => {
      if (item[key]) {
        result.push(item[key]);
      }
      if (item.routes && item.routes.length && item.routes.length > 0) {
        loop(item.routes);
      }
    });
  };
  loop(arr);
  return result;
};

export const getMenuIdByPath = (name: string) => {
  const apiRoute = sessionReadObject('LevelMenu');
  let app_feature_id: string = '';
  apiRoute.forEach((item: { path: string; id: string }) => {
    if (item.path === name) {
      app_feature_id = item.id;
    }
  });
  return app_feature_id;
};
// 跳转第三方页面获取参数
export const convertObj = (data: Record<string, any>) => {
  const result = [];
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in data) {
    const value = data[key];
    // eslint-disable-next-line eqeqeq
    if (value.constructor == Array) {
      value.forEach((_value) => {
        result.push(`${key}=${_value}`);
      });
    } else {
      result.push(`${key}=${value}`);
    }
  }
  return result.join('&');
};

export const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

// 树菜单转平级
export const meuntoArr = (tree: any) => {
  let arrs: any[] = [];
  const result = [];
  arrs = arrs.concat(tree);
  // 把数组中每一项全部拉平
  while (arrs.length) {
    const first = arrs.shift(); // 弹出第一个元素
    // 直到每一项数据都没有routes
    if (first.routes && first.routes.length) {
      //如果有routes
      arrs = arrs.concat(first.routes);
      delete first.routes;
    }
    result.push(first);
  }
  return result;
};

// 平级转为树结构
export const listToTree = (oldData: any[] = [], id: any = null, newData: any[] = []) => {
  oldData.forEach((item) => {
    if (item.parent_id === id) {
      newData.push(item);
    }
  });
  newData.forEach((i) => {
    i.routes = [];
    listToTree(oldData, i.id, i.routes);
    if (i.routes.length === 0) {
      delete i.routes;
    }
  });
  return newData;
};

export type BtnAuthProps = Record<string, boolean>;

// 获取按钮权限
export const queryPageAuthRes = async (name: string) => {
  const authInfo = getAuthorityInfo() as AuthInfo;
  const authBtnRes = await getButtonAuthList({
    app_id: authInfo.ud.appId,
    app_feature_id: getMenuIdByPath(name),
  });
  const newAuth: BtnAuthProps = {};
  if (authBtnRes.code === 200) {
    authBtnRes.data.forEach((item: { code: string }) => {
      newAuth[item.code] = true;
    });
  }
  return newAuth;
};

type sordinfo = Record<string, SortOrder>;
type sordinfoint = Record<string, string | undefined>;
export const getSortSord = (sord: sordinfo) => {
  const sordinfo: sordinfoint = {
    sidx: '',
    sord: '',
  };
  if (sord !== null) {
    // eslint-disable-next-line prefer-destructuring
    sordinfo.sidx = Object.keys(sord)[0];
    sordinfo.sord = Object.values(sord)[0]?.slice(0, -3);
  }
  return sordinfo;
};

// blob图片文件转base64
export const readAsDataUrl: (file: Blob) => Promise<string> = (file: Blob) => {
  return new Promise((resolve) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      resolve(e?.target?.result as string);
    };
  });
};

/**
 * promise防抖
 * @param inner 防抖执行函数
 * @param ms 防抖间隔，默认0.5s
 * @returns function
 */
export const asyncDebounce = (inner: any, ms = 500) => {
  let timer: any = null;
  let resolves: any = [];
  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      let result = inner(...args);
      resolves.forEach((r: any) => r(result));
      resolves = [];
    }, ms);
    // eslint-disable-next-line no-promise-executor-return
    return new Promise<any>((r) => resolves.push(r));
  };
};

// 获取当前的国际化语言环境
export const getCurrentLocal = () => {
  return localStorage.getItem('umi_locale') || 'zh-CN';
};
