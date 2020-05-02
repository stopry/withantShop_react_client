import React from 'react';
import router from 'umi/router';

const styles = require('./myTop.less');

const MyTop:React.FC<any>=props=>{
  const {userInfo} = props;
  const {userName,avatar,isLogin} = userInfo;
  console.log(isLogin,'为证')

  const toLogin = ()=>{
    router.push('/shop/my/login');
  }


  return(
    <div className={styles.myTop}>
      <img src={isLogin?avatar:require('@/assets/shop/my.png')} alt=""/>
      <div className={`${styles.userName}`+' '+(isLogin?`${styles.userName}`:`${styles.notLogin}`)}>
        {isLogin?userName:'未登录'} {isLogin?null:<a onClick={()=>{toLogin()}}>点击登录</a>}
      </div>
    </div>
  )
}
export default MyTop;