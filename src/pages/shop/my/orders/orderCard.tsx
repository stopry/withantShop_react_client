import React from 'react';
import router from 'umi/router';
import {Modal,Toast} from 'antd-mobile';

const styles = require('../styles.less');

const OrderCard:React.FC<any> = props=>{
  const {orderInfo} = props;

  console.log(orderInfo,'订单信息');
  const statusMap = {
    '0':'全部',
    '1':'待支付',
    '2':'已支付',
    '3':'待发货',
    '4':'待收货',
    '5':'已完成',
  };

  return(
    <li>
      <div className={styles.cardHeader}>
        <span onClick={()=>{router.push(`/shop/home/goodsDetail/${orderInfo.goodsId}`)}}>{orderInfo.goods.name} <i style={{fontSize:'12px'}} className={`iconfont icon-xiangyoujiantou`}></i></span>
        <div className={styles.orderStatus}>{statusMap[`${orderInfo.status}`]}</div>
        <div className={styles.deleteThis}>
          <i className={`iconfont icon-lajixiang`}></i>
        </div>
      </div>
      <div className={`${styles.goodsInfo } clearfix`}>
        <div className={styles.infoItem}>
          <img src={require('@/assets/shop/goods_img.jpg')} alt=""/>
        </div>
        <div className={styles.infoItem}>
          {orderInfo.goods.desc}
        </div>
        <div className={`${styles.infoItem} ${styles.price}`}>
          <span className={styles.moneyIcon}>￥</span>{orderInfo.price}
        </div>
      </div>
      <div className={`${styles.cardBot} clearfix`}>
        <div className={styles.extrBtn} onClick={()=>{router.push(`/shop/home/goodsDetail/${orderInfo.goodsId}`)}}>
          再次购买
        </div>
      </div>
    </li>
  )
}

export default OrderCard;
