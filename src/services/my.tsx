// @ts-ignore
import request from '@/utils/request';
// @ts-ignore
import { stringify } from 'qs';

//获取用户信息
export async function queryUser(params:any) {
  // return request(`api/userInfo?${stringify(params)}`,{headers:{Authorization:localStorage.getItem('token')}});
  return request(`api/userInfo?${stringify(params)}`,{},true);
}

//获取地址列表
export async function queryAddressList(params:any){
  return request(`api/addressList?${stringify(params)}`,{},true);
}

//获取用户订单
export async function  queryOrder(params:any){
  return request(`api/order?${stringify(params)}`,{},true)
}

//删除订单
export async function deleteOrder(params:any){
  return request('/api/deleteOrder', {
    method: 'POST',
    body: {
      ...params,
    },
  },true);
}

//订单数量
export async function queryOrderCount(params:any){
  return request(`api/orderCount?${stringify(params)}`);
}
