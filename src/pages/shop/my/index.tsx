import React from 'react';
import MyTop from './components/myTop'
import { connect,useDispatch } from 'dva';
import {List} from 'antd-mobile';
import router from 'umi/router';


const My:React.FC<any> = props=>{

  const {userInfo = false} = props;
  const dispatch = useDispatch();

  // const userInfo = {
  //   userName:'草莓',
  //   avatar:require('@/assets/shop/avatar.jpg'),
  //   isLogin:true,
  // }

  React.useEffect(()=>{
    getUserInfo(null);
  },[])

  const getUserInfo = (payload:any)=>{
    dispatch({
      type:'my/fetchUserData',
      payload
    });
  }

  console.log(userInfo,777777777)

  return (
    <div>
      {
        userInfo?(<MyTop
          userInfo = {userInfo}
        >
        </MyTop>):''
      }
      <List>
        <List.Item arrow='horizontal' onClick={()=>{router.push('/shop/my/orders')}}>
          查看全部订单
        </List.Item>
        <List.Item arrow='horizontal'  onClick={()=>{router.push('/shop/my/addressList')}}>
          我的收货地址
        </List.Item>
      </List>
    </div>
  )
}
export default connect(({loading,my}:any)=>{
  return{
    oading:loading.effects['my/fetchUserData'],
    userInfo:my.userInfo
  }
})(My);