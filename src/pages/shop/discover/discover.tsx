import React from 'react';
import DisBanner from './components/disBanner';
import DisDate from './components/disDate';
import ArticleItem from './components/articleItem';
import {querySeason} from '@/services/discover';
const styles = require('./components/styles.less');

const Disvover:React.FC<any> = props=>{

  const [season,setSeason] = React.useState('http://q8u09dd1s.bkt.clouddn.com/dis_banner.jpg');

  React.useEffect(()=>{
    getSeason(null);
  },[]);

  const getSeason = (params:any)=>{
    querySeason(params).then((res:any)=>{
      setSeason(res.data);
    })
  }


  return (
    <div style={{background: '#f8f8f8'}}>
      <DisBanner season={season}></DisBanner>
      <div className={styles.conWrap}>
        <DisDate></DisDate>
        <ul>
          {
            [1,1,1].map((item,index)=>(
              <ArticleItem key={index}></ArticleItem>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Disvover;