import React from 'react';
import {Icon} from 'antd-mobile';

const styles = require( './Banner.less');

interface Iprops{
  title:string;
  subTitle?:string;
  onClick?:any
  // imgHeight:string;//banner高度
};

const NewTitle:React.FC<Iprops> = props=>{
  const {title,subTitle,onClick} = props;
  title;


  return (
    <div className={styles.newTitle}>
      <div className={`${styles.titleCell} ${styles.title}`}>
        {title}
      </div>
      <div className={`${styles.titleCell} ${styles.subTitle}`}>
        <b>/</b>{subTitle}
      </div>
      <div className={`${styles.titleCell} ${styles.moreStr}`} onClick={onClick}>
        查看更多 <span className={styles._icon}><Icon type='right' size='xs'/></span>
      </div>
    </div>
    
  )
}

export default NewTitle;