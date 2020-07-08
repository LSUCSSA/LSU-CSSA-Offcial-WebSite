import request from '@/utils/request';

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function AccountLogin(params: LoginParamsType) {
  return request('/api/auth/local', {
    method: 'POST',
    data: params,
    getResponse: true,
  });
}
