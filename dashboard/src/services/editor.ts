import request from '@/utils/request';

export async function getSponsorComp() {
  return request(`/api/getSponsorComp`, {
    method: 'GET',
    // data: params,
  });
}
export async function setSponsorComp(params: string) {
  return request(`/api/setSponsorComp`, {
    method: 'PUT',
    data: params,
  });
}

export async function setGuideID(params: object) {
  return request(`/api/newcomer-guide`, {
    method: 'PUT',
    data: params
  })
}
