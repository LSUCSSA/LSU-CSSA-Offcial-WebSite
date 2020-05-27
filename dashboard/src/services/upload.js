import request from '@/utils/request';

export async function uploadRoster() {
  return request('/api/bulkCreate');
}
