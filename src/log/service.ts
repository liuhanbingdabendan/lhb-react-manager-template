// 记录用户行为日志
import type { AuthInfo } from '@/services/init';
import { getAuthorityInfo } from '@/utils/common';
import { IConfig } from './interface';
import { cancelRequest, request } from './logrequest';
export async function actionLogApi(data: any, config: IConfig) {
  const authInfo = getAuthorityInfo() as AuthInfo;
  return request(`data-collect-v3/action_log/record`, {
    method: 'POST',
    data: {
      ...data,
      account_id: authInfo.id,
      app_type: 1, //应用类型：null、0:移动端, 1：pc
      app_id: authInfo.ud.appId,
      tenant_id: authInfo.ud.tenantId,
    },
    requestId: config?.cancelable ? config.requestId : undefined,
  });
}
export const cancelApi = (requestId: string) => {
  cancelRequest(requestId);
};
