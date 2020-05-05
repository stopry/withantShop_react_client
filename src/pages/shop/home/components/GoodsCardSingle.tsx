//展示单个商品的卡片
import React from 'react';
import router from 'umi/router';

const styles = require( './GoodsCardSingle.less');

export interface Iprops{
  title:string;
  des:string;
  img:any;
  _id:string;
  showCorner?:any;
  isVipCard?:Boolean;
};

const GoodsCardSingle:React.FC<Iprops> = props=>{
  const {title,des,img,_id,showCorner,isVipCard} = props;

  return (
    <div className={styles.goodsCard} onClick={()=>{!isVipCard&&router.push(`/shop/home/goodsDetail/${_id}`)}}>
      {showCorner?<div className={styles.cornerTip}>积分兑换</div>:null}
      <div className={styles.cardHead}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.desc}>
          {des}
        </div>
      </div>
      <img className={styles.goodsImg} src={img} alt=""/>

    </div>

  )
}

export default GoodsCardSingle;
