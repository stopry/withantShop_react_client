import React from 'react';
import {Carousel,WingBlank} from 'antd-mobile';

const styles = require( './Banner.less');

interface Iprops{
  logo:string;
  shopDesc:string;
  imgList:Array<{
    imgPath:string;//图片路径
    bgPath:string;//对应bg路径
    id:string;//商品id
    proName:string;//产品名称
    proTitle:string;//产品标题
    proDesc:string;//产品描述
  }>,
  // imgHeight:string;//banner高度
};

const Banner:React.FC<Iprops> = props=>{
  const {logo,shopDesc,imgList} = props;
  
  const [curImg,setCurImg] = React.useState(imgList[0].imgPath);
  const [fade,setFade] = React.useState(styles.fade);
  const imgHeight = '80vw';

  const setBg = (index:number)=>{
    setCurImg(imgList[index].imgPath);
  }

  return (
    <div className={styles.bannerWrap}>
      <img src={curImg} className={`${styles.bannerBg} ${fade}`} alt=""/>
      <div className={styles.logo}>
        <img src={require('@/assets/shop/logo.png')} alt=""/>  
      </div>
      <WingBlank>
        <Carousel
          autoplay
          infinite
          dots={false}
          autoplayInterval={5000}
          afterChange={index => {setBg(index);setFade(styles.fade)}}
          beforeChange={index => {setFade(styles.bannerBg)}}
        >
          {
            imgList.map(item=>(
              <div className={styles.carWrap} style={{height:imgHeight}} key={item.id}>
                <img src={item.imgPath} className={styles.bannerImg} alt=""/>
                <div className={styles.proInfo}>
                  <div className={`${styles.proName} s_border`}>
                    {item.proName}
                  </div>
                  <div className={styles.proTitle}>
                    {item.proTitle}
                  </div>
                  <div className={`${styles.proDesc}`}>
                    <b>/</b>{item.proDesc}
                  </div>
                </div>
              </div>
            ))
          }
        </Carousel>
      </WingBlank>
    </div>
    
  )
}

export default Banner;