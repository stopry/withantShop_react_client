import React from 'react';
import router from 'umi/router'
const styles = require('./style.less')

const GoodsListCard:React.FC<any> = props=>{

  const {img,price,isHot,title,_id} = props;

  return(
    <li className={styles.listCard} onClick={()=>{router.push(`/shop/home/goodsDetail/${_id}`)}}>
      <div className={styles.goodsImg}>
        <img src={img} alt=""/>
        {isHot?<b className={styles.tagType}>热门</b>:''}
      </div>
      <h3 className={styles.goodsTitle}>
        {title}
      </h3>
      <p className={styles.goodsPri}>
        ￥{price}
      </p>
    </li>
  )
}

export default GoodsListCard;