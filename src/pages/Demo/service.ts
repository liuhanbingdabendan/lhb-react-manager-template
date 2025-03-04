import { drbtrequest } from '@drbt-design/pro-components';
import { signDrbtrequest } from '@drbt-design/pro-components';

// 分页查询账户列表
export async function queryAccountList(data: any) {
  return drbtrequest(`account-v3/account_info/query`, {
    method: 'post',
    data,
  });
}

// 获取用户信息
export async function accountInfo() {
  return drbtrequest(`account-v3/account_info`, {
    method: 'get',
  });
}

// 发送短信验证码 要签名不需登录
export async function signVerifyCode(data: any) {
  return signDrbtrequest(`message-v3/sms/send_un_verify_code`, {
    method: 'post',
    data,
  });
}
