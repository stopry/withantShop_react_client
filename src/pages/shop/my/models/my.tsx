import { queryUser,queryAddressList,queryOrder,queryOrderCount } from '@/services/my';

export default {
  namespace:'my',
  state:{
    userInfo:{},
    addressList:[],
    orderList:[],
  },
  effects:{
    *fetchUserData({payload,callback}:any,{call,put}:any){
      const response = yield call(queryUser,payload);
      if(response&&response.code==200){
        yield put({
          type:'getUserData',
          payload:response
        });
        callback&&callback(response);
      }
      console.log(response,666)
    },
    *fetchAddressList({payload,callback}:any,{call,put}:any){
      const response = yield call(queryAddressList,payload);
      if(response&&response.code==200){
        yield put({
          type:'getAddressList',
          payload:response
        });
        callback&&callback(response);
      }
      console.log(response,777)
    },
    //获取全部订单数量
    *fetchOrderCount({payload}:any,{call}:any){
      yield call(queryOrderCount,payload)
    },
    *fetchOrder({payload,callback}:any,{call,put,select}:any){
      const response = yield call(queryOrder,payload);
      if(response&&response.success){
        yield put({
          type:'getOrder',
          payload:response
        });
        callback&&callback(response);
      }
    },
    //删除订单
    *deleteOrder({payload,callback}:any,{call,put}:any){

    }
  },
  reducers:{
    getUserData(state:any,{payload}:any){
      payload.data.isLogin = true;
      console.log(payload,'用户信息');
      return{
        ...state,
        userInfo:payload.data
      }
    },
    getAddressList(state:any,{payload}:any){
      payload.data.isLogin = true;
      console.log(payload.data.addressList,'收件地址');
      return{
        ...state,
        addressList:payload.data.addressList
      }
    },
    getOrder(state:any,{payload}:any){
      return{
        ...state,
        orderList:payload.data
      }
    },
    setLogin(state:any,{payload}:any){
      return{
        ...state,
        isLogin:payload.data
      }
    }
  }
}
