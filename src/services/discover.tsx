// @ts-ignore
import request from '@/utils/request';
// @ts-ignore
import { stringify } from 'qs';


export async function querySeason(params:any) {
  return request(`/api/seasonPic?${stringify(params)}`);
}
