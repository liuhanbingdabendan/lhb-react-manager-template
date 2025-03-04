export interface AuthInfo {
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
