import React from 'react';
import {Icon} from 'antd-mobile';
const styles = require('./style.less')

const FilterHeader:React.FC<any> = props=>{

  const {title,selections,titleHandlerClick,selHandlerClick,isFocus} = props;

  return(
    <div className={styles.selBox}>
      <div className={`${styles.selTitle}`+' '+(isFocus?`${styles.active}`:'')} onClick={()=>{titleHandlerClick();}}>
        {title}
        <span className={styles._icon}><Icon type={'down'} size='xs'/></span>
      </div>
      <ul className={`${styles.selDatas}`+' '+(isFocus?`${styles.active}`:'')}>
        {
          selections.map((item:any,index:number)=>(
            <li key={item.id} className={item.seled?`${styles.active}`:''} onClick={()=>{selHandlerClick(item.name,index);titleHandlerClick()}}>
              {item.name}
            </li>
          ))
        }
      </ul>
      <div onClick={()=>{titleHandlerClick()}} className={`${styles.mask}`+' '+(isFocus?`${styles.active}`:'')}></div>
    </div>
  )
}


export default FilterHeader;