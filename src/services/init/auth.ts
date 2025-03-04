import { getAuthorityInfo } from '@/utils/common';
import { drbtrequest } from '@drbt-design/pro-components';
// import { request } from '@umijs/max';
import logrequest from '@/utils/logrequest';
import type { AuthInfo } from '.';

/** 获取当前的用户 菜单 */
// export async function get_left_feature(data: any) {
//   return request('/permission-v3/pc_permission_feature/get_left_feature', {
//     method: 'POST',
//     data,
//   });
// }

// // 获取租户列表（新）
// export async function quertTenantListbyAccount() {
//   return request(`/account-v3/relation/query_tenant_by_app_account`, {
//     method: 'GET',
//   });
// }

interface exchangeTokenParamsType {
  app_id?: string;
  tenant_id?: string;
}

// 切换令牌
export async function exchangeToken(params: exchangeTokenParamsType) {
  return drbtrequest(`account-v3/auth2/exchange_token`, {
    method: 'POST',
    data: params,
  });
}

// 根据菜单id获取token
export async function getUrlParams(id: string) {
  return drbtrequest(`permission-v3/third_party_config/url_params/${id}`, {
    method: 'GET',
  });
}

export async function queryMenuTree() {
  const authInfo = getAuthorityInfo() as AuthInfo;
  return drbtrequest(`permission-v3/pc_permission_feature/get_left_feature`, {
    method: 'POST',
    data: {
      app_id: authInfo.ud.appId,
    },
  });
}

// 根据菜单id和角色id获取按钮权限
export async function getButtonAuthList(data: any) {
  return drbtrequest(`permission-v3/pc_permission_feature/get_button_auth_list`, {
    method: 'POST',
    data,
  });
}

// 根据租户id获取租户时区
export async function query_tz_by_tenant_id(params: any) {
  return drbtrequest(`app-kernel-v3/tenant/timezone/${params}`, {
    method: 'GET',
  });
}

// 记录用户行为日志
export async function actionLogApi(data: any) {
  const authInfo = getAuthorityInfo() as AuthInfo;
  return logrequest(`data-collect-v3/action_log/record`, {
    method: 'POST',
    data: {
      ...data,
      account_id: authInfo.id,
      app_type: 1, //应用类型：null、0:移动端, 1：pc
      app_id: authInfo.ud.appId,
      tenant_id: authInfo.ud.tenantId,
    },
  });
}
