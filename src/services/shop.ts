// @ts-ignore
import request from '@/utils/request';
import { stringify } from 'qs';

export async function queryBanner(params:any) {
  return request(`/api/banner?${stringify(params)}`);
}

export async function queryGoods(params:any) {
  return request(`/api/goods?${stringify(params)}`);
}

//获取首页推荐商品
export async function queryRecomGoods(params:any){
  return request(`/api/recomGoods?${stringify(params)}`);
}

//商品详情
export async function queryGoodsDetail(goodId:any){
  return request(`/api/goodsDetail/${goodId}`);
}

//用户登陆
export async function userLogin(params:any){
  return request('/api/login', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//创建订单
export async function createOrder(params:any){
  return request('/api/createOrder', {
    method: 'POST',
    body: {
      ...params,
    },
  },true);
}
