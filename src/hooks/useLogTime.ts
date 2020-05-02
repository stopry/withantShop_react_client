import React, { useEffect } from 'react';

interface IData{
  log?:boolean;
  time?:boolean;
}

export default function useLogTime(data:IData){
  const [count,setCount] = React.useState(0);
  useEffect(()=>{
    data.log&&console.log('组件渲染完成');
    let timer:any = null;
    if(data.time){
      timer = setInterval(()=>{
        setCount(c=>c+1)
        console.log(count);
      },1000);
    }
    //有return 将执行return中的方法
    return ()=>{
      data.log&&console.log('组件即将卸载');
      data.time&&clearInterval(timer);
    }
  },[count]);

  return {count};

}