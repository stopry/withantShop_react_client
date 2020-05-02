// @ts-ignore
import request from '@/utils/request';
import { stringify } from 'qs';

export async function query(params:any) {
  return request(`/api/chapter?${stringify(params)}`);
}

export async function getUsers(params:any){
	console.log(params,'fetchReques');
	return request(`/api/userList?${stringify(params)}`);
}