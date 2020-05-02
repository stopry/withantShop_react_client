import React from 'react';
import router from 'umi/router'
const styles = require( './GoodsCard.less');

export interface Iprops{
  title:string;
  desc:string;
  goods:Array<{
    imgMin:string;
    _id:string;
    title:string;
  }>;
};

const GoodsCard:React.FC<Iprops> = props=>{
  const {title,desc,goods} = props;

  return (
    <div className={styles.goodsCard}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.desc}>
        {desc}
      </div>
      
      <div className={styles.goodsBox}>
        {
          goods.map((item,index)=>(
            <div className={styles.goodsItem} key={item._id} onClick={()=>{router.push(`/shop/home/goodsDetail/${item._id}`)}}>
              <img src={item.imgMin} alt=""/>
              <div className={styles.goodsTitle}>
                {item.title}
              </div>
            </div>
          ))
        }
        {/* <div className={styles.goodsItem}>
          <img src={require('@/assets/shop/goods_img.jpg')} alt=""/>
          <div className={styles.goodsTitle}>
            分系列
          </div>
        </div>
        <div className={styles.goodsItem}>
          <img src={require('@/assets/shop/goods_img.jpg')} alt=""/>
          <div className={styles.goodsTitle}>
            积系列
          </div>
        </div>
        <div className={styles.goodsItem}>
          <img src={require('@/assets/shop/goods_img.jpg')} alt=""/>
          <div className={styles.goodsTitle}>
            木系列
          </div>
        </div> */}
      </div>

    </div>
    
  )
}

export default GoodsCard;