import React from 'react';
import{connect,useDispatch} from 'dva';

const styles = require('./article.less')

const Article:React.FC<any> = props=>{

  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch({
      type:'shop/setInDetail',
      payload:true
    })
  },[]);

  return(
    <div className={styles.articleWrap}>
      <h2 className={styles.arcTitle}>
        又到了春如四季的日子了
      </h2>
      <div className={styles.arcCom}>
        <b  id='ddd'>
          一些文章
        </b>
      </div>
      <div className={styles.arcBot}>

      </div>
    </div>
  )
}


export default connect(({shop}:any)=>{

  return{

  }
})(Article);