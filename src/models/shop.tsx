// @ts-ignore
import { queryBanner,queryGoods,queryRecomGoods,userLogin,createOrder } from '@/services/shop';
import { Toast } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import LS from 'parsec-ls';


export default {
  namespace:'shop',
  //状态数据
  state: {
    isInDetail:false,//是否在二级页面
    bannerData:{
    },
    //商品列表
    goods:[],
    recomGoods:[],//首页推荐商品
    isLogin:false,//用户是否登陆
  },
  //异步action
  effects:{
    * fetchBannerData({payload}:any,{call,put}:any){
      const response = yield call(queryBanner,payload);
      console.log(payload,9929)
      yield put({
        type:'getBannerData',
        payload:response
      })
    },
    *fetchGoodsData({payload}:any,{call,put}:any){
      const res = yield call(queryGoods,payload);
      yield put({
        type:'getGoodsData',
        payload:res
      })
    },
    *fetchRecomGoods({payload}:any,{call,put}:any){
      const res = yield call(queryRecomGoods,payload);
      console.log(res,'推荐商品列表')
      yield put({
        type:'getRecomGoods',
        payload:res
      })
    },

    *fetchLogin({payload,callback,failCallBack}:any,{call,put}:any){
      const response = yield call(userLogin,payload);
      console.log(response,999)
      if(response&&response.code===200){
        if(response.success){
          localStorage.setItem('token',`Bearer ${response.data.token}`);
          yield put({
            type:'userLogin',
            payload:response
          })
        }
        callback&&callback(response);
      }else{
        failCallBack&&failCallBack()
      }
    },
    *fetchCreateOrder({payload,callback}:any,{call,put}:any){
      const response = yield call(createOrder,payload);
      if(response&&response.success){
        callback&&callback(response);
      }
    }
  },
  //同步action
  reducers:{
    setInDetail(state:any,{payload}:any){
      state.isInDetail = payload;
      return state;
    },
    getBannerData(state:any,{payload}:any){
      console.log(payload.data,'数据')
      return {
        ...state,
        bannerData:payload.data
      }
    },
    getGoodsData(state:any,{payload}:any){
      console.log(payload.data,'商品列表')
      return {
        ...state,
        goods:payload.data
      }
    },
    getRecomGoods(state:any,{payload}:any){
      return{
        ...state,
        recomGoods:payload.data
      }
    },
    userLogin(state:any,{payload}:any){
      return{
        ...state,
        isLogin:payload.success
      }
    }
  },
  //监听函数
  subscriptions:{
    setup({dispatch,history}:any){
      console.log(dispatch,history);
      return history.listen(({pathname,query}:any)=>{
        console.log(pathname,query,'监听');
        // if(pathname.indexOf('article')>-1){
        if(pathname.split('/').length>3){
          dispatch({
            type:'setInDetail',
            payload:true
          })
        }else{
          dispatch({
            type:'setInDetail',
            payload:false
          })
        }
      })
    }
  }
}
