import React from 'react';
const styles = require('./styles.less');

const DisDate:React.FC<any> = props=>{

  const month = new Date().toDateString().split(' ')[1];
  const day = new Date().getDate();

  return(
    <div className={styles.disDate}>
      <h2>{month}.</h2>
      <span>{day}</span>
    </div>
  )
}
export default DisDate;