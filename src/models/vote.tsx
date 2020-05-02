// @ts-ignore
import { getUsers } from '@/services/api';
import { Toast } from 'antd-mobile';
import LS from 'parsec-ls';

export default {
  namespace:'vote',
  //状态数据
  state: {
    isInDetail:false,//是否在二级页面
    userList:[],
  },
  //异步action
  effects:{
    * fetchUserList({payload},{call,put}){
      const response = yield call(getUsers,payload);
      console.log(payload,9929)
      yield put({
        type:'getUserList',
        payload:response
      })
    }
  },
  //同步action
  reducers:{
    setInDetail(state,{payload}){
      state.isInDetail = payload;
      return state;
    },
    getUserList(state,{payload}){
      return {
        ...state,
        userList:payload.list
      }
    }
  },
  //监听函数
  subscriptions:{
    setup({dispatch,history}){
      console.log(dispatch,history);
      return history.listen(({pathname,query})=>{
        console.log(pathname,query,'监听');
        if(pathname.indexOf('user')>-1){
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
