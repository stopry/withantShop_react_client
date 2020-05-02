import React from 'react'
const styles = require('./styles.less');

const NoData:React.FC<any> = props=>{
  return(
    <div className={styles.noData}>
      {props.child||(<p><i className={`iconfont icon-wuneirong1`}></i></p>)}
    </div>
  )
}
export default NoData;
