import React from 'react';
import {Modal,Carousel,List,Button,Tabs,WhiteSpace,Toast} from 'antd-mobile';
import {connect,useDispatch} from 'dva';
import {queryGoodsDetail} from '@/services/shop';
import router from 'umi/router';

const styles = require('./style.less');

const GoodsDetail:React.FC<any>=(props:any)=>{

  const dispatch = useDispatch();

  let dtl:any;

  const [detail,setDetial] = React.useState(dtl);

  const [loading,setLoading] = React.useState(true);

  // const {goodDetails} = detail;

  React.useEffect(()=>{
    queryGoodsDetail(goodsId).then((res:any)=>{
      setDetial(
        {
          ...detail,
          ...res.data
        }
      )
      setLoading(false)
    })
  },[]);

  const prompt = Modal.alert;

  const createOrder = function () {
    console.log(detail,'创建订单');
    const payload = {
      goods:{
        name:detail.title,
        desc:detail.des,
        img:detail.imgMin,
        amount:1
      },
      remark:'',
      price:detail.price,
      status:1,
      goodsId:detail._id,
    };
    dispatch({
      type:'shop/fetchCreateOrder',
      // type:'shop/fetchBannerData',
      payload,
      callback:(res:any)=>{
        console.log(res,'获取的数据');
        Toast.success('订单创建成功！',1);
        prompt(
          '创建结果',
          '订单创建成功，是否进入我的订单页?',
          [
            {
              text: '取消', onPress: () => {}
            },
            {
              text: '好', onPress: () => {
                router.push('/shop/my/orders');
              }
            }
          ]
        )
      }
    })
  };


  console.log(detail,'商品详情')

  let goodsId = props.match.params.id||false;//商品id




  const dotStyle = {borderRadius:'0px',width:'6px',height:'3px',backgroundColor:'#f1f1f1'}
  const dotActiveStyle = {borderRadius:'0px',width:'12px',height:'3px',backgroundColor:'#99D900'}

  const [show,setShow] = React.useState(false);//默认不显示模态框

  const tabs = [
    {
      title:'产品秒杀'
    },
    {
      title:'配送说明',
    },
    {
      title:'售后服务'
    }
  ]



  return !loading&&(
    <div className={styles.detail}>
      {
        detail.bannerlImg?(<Carousel
          autoplay
          infinite
          dotStyle={dotStyle}
          dotActiveStyle={dotActiveStyle}
          autoplayInterval={3000}
        >
          {
            detail.bannerlImg.map((item:any,index:any)=>(
              <img key={index} src={item}/>
            ))
          }
        </Carousel>):''
      }
      <div className={styles.conWrap}>
        <h3 className={styles.price}>
          ￥{detail.price}
        </h3>
        <p className={styles.name}>{detail.title}</p>
        <div className={styles.baseInfo}>
          <div>
            原价￥{detail.originPrices}
          </div>
          <div>
            库存{detail.stock}件
          </div>
          <div>
            快递：免运费
          </div>
        </div>
        <List
          className={styles.seldInfo}
        >
          <List.Item
          className={styles.seldInfoItem}
            arrow='horizontal'
            onClick={()=>{setShow(true)}}
          >
            选择颜色、尺码
          </List.Item>
        </List>
        <WhiteSpace/>
          <Tabs tabs={tabs}>
            <div className={styles.detailWrap}><img src={detail.detail.customDesc} alt=""/></div>
            <div className={styles.detailWrap}><img src={detail.detail.detailDesc} alt=""/></div>
            <div className={styles.detailWrap}><img src={detail.detail.expressDesc} alt=""/></div>
          </Tabs>
        <WhiteSpace/>
      </div>
      <Button onClick={()=>{setShow(true)}} type='primary' className={styles.buyBtn}>
        立即购买
      </Button>

      <Modal
        popup
        visible={show}
        animationType="slide-up"
        maskClosable
        transparent
        onClose={()=>{setShow(false)}}
        closable
      >
        <div className={styles.proGg}>
          <div className={styles.seldInfo}>
            <div className={styles.seldImg}>
              <img src={detail.imgMin} alt=""/>
            </div>
            <div className={styles.seldTxt}>
              <b>￥58</b>
              <p>库存{detail.stock}件</p>
              <span>已选择蚂蚁森林、均码</span>
            </div>
          </div>
          <List>
            <List.Item>
            <p className={styles.selDesc}>
            颜色
          </p>
            <Button type='primary' inline size='small'>蚂蚁森林</Button>
            </List.Item>
            <List.Item>
            <p className={styles.selDesc}>
            尺码
          </p>
          <Button type='primary' inline size='small'>均码</Button>
            </List.Item>
          </List>


          <Button
            className={styles.innerBuyBtn}
            type='primary'
            onClick={()=>{createOrder()}}
          >
            立即购买
          </Button>

        </div>
      </Modal>
    </div>
  )
}
export default connect(({loading,my}:any)=>{
  return{
    loading:loading.effects['shop/fetchCreateOrder'],
  }
})(GoodsDetail);
