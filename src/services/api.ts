import { request } from 'umi';

export async function query(): Promise<any> {
  return request('/api/hello');
}

export async function queryList(data: any): Promise<any> {
  console.log(data);
  return request('/api/list', { data });
}
