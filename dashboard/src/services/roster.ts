import request from '@/utils/request';
import {TableListParams} from "@/pages/Roster/data";

export async function updateMember(id:string, params: TableListParams) {
  return request(`/api/users/${id}`, {
    method: 'PUT',
    data: params
  });
}
export async function getPositionList(params: object) {
  return request('/api/getpositionlist', {
    params,
  });
}
export async function getRoster(params: object) {
  return request('/api/fetchRoster', {
    params,
  });
}
export async function addMember(params: TableListParams) {
  return request('/api/users', {
    method: 'POST',
    data: params,
  });
}

export async function removeMembers(params: object) {
  return request(`/api/bulkDestroy`, {
    method: 'POST',
    data: params,
  });
}
export async function removeMember(id: string ) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  });
}
