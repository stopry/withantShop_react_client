import React from 'react';
import { connect ,useDispatch} from 'dva';
import router from 'umi/router';
import Banner from './components/Banner'
import NewTitle from './components/NewTitle'
import GoodsCard ,{Iprops} from './components/GoodsCard'
import GoodsCardSingle from './components/GoodsCardSingle'
import Footer from './components/footer';

const Home:React.FC<any> = props=>{
  const dispatch = useDispatch()

  const {banner=false,loading,recomGoods=false} = props;

  // const recom_1 = recomGoods.splice(0,3);

  React.useEffect(()=>{
    getBanner(null);
    getRecom(null);
  },[]);

  const goodCard:Iprops = {
    title:'积分兑换',
    desc:'森林积分系列',
    goods:[
      {
        imgMin:require('@/assets/shop/goods_img.jpg'),
        _id:'1',
        title:'分系列',
      },
      {
        imgMin:require('@/assets/shop/goods_img.jpg'),
        _id:'2',
        title:'木系列',
      },
      {
        imgMin:require('@/assets/shop/goods_img.jpg'),
        _id:'3',
        title:'类系列',
      }
    ]
  }

  const vipCard:any = {
    title:'轻会员',
    desc:'WithAnt线下店专用 轻会员优惠',
    link:'http://www.stopry.com',
    id:'10010',
    img:require('@/assets/shop/vip_card.png'),
  };

  const bigImg = require('@/assets/shop/goods_img_single.jpg');

  const getBanner = (payload:any) =>{
    dispatch({
      type:'shop/fetchBannerData',
      payload
    });
  };

  const getRecom = (payload:any) =>{
    dispatch({
      type:'shop/fetchRecomGoods',
      payload
    });
  };

  // alert(1)
  console.log(recomGoods,'loadinnnn')
  return(
    <div style={{background:'#fcfcfc',minHeight:'100vh',paddingBottom:'46px'}}>
      {
        (loading||loading===undefined)?<div>loading</div>:<Banner
        logo={banner.logo}
        shopDesc={banner.shopDesc}
        imgList={banner.imgList}
      >

      </Banner>
      
      }
      <NewTitle
        title='新品上市'
        subTitle='NEW ARRIVAL'
        onClick={()=>{router.push('/shop/home/goodsList')}}
      ></NewTitle>

      
      {
        recomGoods.length?
        <GoodsCard
        title={goodCard.title}
        desc={goodCard.desc}
        goods={recomGoods.slice(0,3)}
        />:''
      }
      
      {
        recomGoods.length?<GoodsCard
          title={'Ant Env'}
          desc={'环保礼包系列'}
          goods={recomGoods.slice(3,6)}
        />:''
      }

      {
        recomGoods.length?<GoodsCardSingle
          {...recomGoods[6]}
          showCorner={true}
        />:''
      }
      
      {
        recomGoods.length?<GoodsCardSingle
          { ...recomGoods[7]}
          showCorner={true}
        />:''
      }
      

      <GoodsCardSingle
        title={vipCard.title}
        des={vipCard.desc}
        img={vipCard.img}
        showCorner={false}
        _id="1"
        isVipCard={true}
      />
      <Footer></Footer>
    </div>
  )
}

//组件与状态连接
export default connect(({loading,shop}:any)=>{
  return{
    loading:loading.effects['shop/fetchBannerData'],
    banner:shop.bannerData,
    recomGoods:shop.recomGoods
  }
})(Home);