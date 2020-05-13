import React from 'react';
const styles = require('./styles.less');
import router from 'umi/router';

const ArticleItem:React.FC<any> = props=>{
  
  return(
    <div className={styles.articleItem} onClick={()=>{router.push('/shop/discover/article/1')}}>
      <img className={styles.articleBg} src={ require('@/assets/shop/goods_img_single.jpg')} alt=""/>
      <div className={styles.articleDesc}>
        <h3>
          又到了春如四季的日子了
        </h3>
        <span>Spring is commign! Let us traver!</span> 
        <p className={styles.activeInfo}>
          <b>活动</b>
          2020.3 合肥
        </p>
      </div>
    </div>
  )

}

export default ArticleItem;