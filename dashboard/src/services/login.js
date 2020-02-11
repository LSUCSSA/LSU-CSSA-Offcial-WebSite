import request from '@/utils/request';
export async function AccountLogin(params) {
  return request('/api/auth/local', {
    method: 'POST',
    data: params,
    getResponse: true,
  });
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
