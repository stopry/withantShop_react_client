import React from 'react';
import { connect, useDispatch } from 'dva';
import router from 'umi/router';
import {Button,List,InputItem,WingBlank} from 'antd-mobile';
//@ts-ignore
import { createForm } from 'rc-form';

const My:React.FC<any> = props=>{

  const [act,setAct] = React.useState({mobile:'13855418476',password:'123456...'});

  const dispatch = useDispatch();

  const handlerChange = (value:any)=>{
    setAct({
      ...act,
      mobile:value
    })
  };
  const pwdHandlerChange = (value:any)=>{
    setAct({
      ...act,
      password:value
    })
  };

  const sendLogin = ()=>{
    const payload = act;
    dispatch({
      type:'shop/fetchLogin',
      payload,
      callback:()=>{
        //跳转至个人中心
        router.push('/shop/my');
        // dispatch({
        //   type:'my/fetchUserData',
        //   payload
        // });
      }
    });

    

    
  }



  const userInfo = {
    userName:'草莓',
    avatar:require('@/assets/shop/avatar.jpg'),
    isLogin:true,
  }

  return (
    <div>
      <WingBlank>
        <img style={{width:150,marginTop:50,marginBottom:50,marginLeft:'auto',marginRight:'auto',display:'block'}} src={require('@/assets/shop/logo_login.png')} alt=""/>
      <List>
        <InputItem
          clear
          placeholder="请输入账号"
          value={act.mobile}
          onChange={handlerChange}
        >账号</InputItem>
         <InputItem
          type='password'
          clear
          placeholder="请输入密码"
          value={act.password}
          onChange={pwdHandlerChange}
        >密码</InputItem>
      </List>
      
      <Button onClick={()=>{sendLogin()}} style={{marginTop:50}} type='primary'>登录</Button>
      </WingBlank>
      
    </div>
  )
}

const MyWrap = createForm()(My);

export default connect(({loading,my}:any)=>{
  return{
    loading:loading.effects['shop/fetchLogin']
  }
})(MyWrap);