import React from 'react';
const styles = require('./styles.less');

const DisBanner:React.FC<any> = props=>{

  const {season} = props;
  const addAct = require('@/assets/shop/add_act.png');
  return(
    <div style={{position:"relative"}}>
      <img className={styles.bannerBg} src={season} alt=""/>
      
      <div className={styles.addAct}>
        <img src={addAct} alt=""/>
      </div>

    </div>
  )
}
export default DisBanner;