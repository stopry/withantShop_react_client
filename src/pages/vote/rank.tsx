
import React from 'react';
import router from 'umi/router'
import useLogTime from '@/hooks/useLogTime';
import {Button} from 'antd-mobile';
// @ts-ignore
import styles from './rank.less';

const Rank:React.FC<any> = props=>{
  const {count} = useLogTime({log:true});
  const {route} = props;
  console.log('-');
  return (
    <div className={styles.normal}>
      <h1>打印日志</h1>
      <h1>{count}</h1>
      <Button onClick={()=>{router.push('/vote/index')}} type='ghost'>
        首页
      </Button>
      <Button>
        计时器
      </Button>
    </div>
  );
}

export default Rank;