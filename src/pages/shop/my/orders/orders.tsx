import React from 'react';
import { connect ,useDispatch} from 'dva';
import {List,NavBar,Icon,Button,Tabs,WhiteSpace,Modal,Toast} from 'antd-mobile';
import OrderCard from './orderCard';
import NoData from '@/components/shop/noData';
import {deleteOrder} from "@/services/my";
import router from 'umi/router';


const styles = require('../styles.less');

const Orders:React.FC<any> = props=>{

  const [orderStatus,setOrderStatus] = React.useState(0);

  const {orderList} = props;

  const dispatch = useDispatch();


  const [orderLists,setOrderLists] = React.useState(orderList);



  React.useEffect(()=>{
    getOrder({orderStatus});
  },[]);

  React.useEffect(()=>{
    setTimeout(()=>{
      filterOrders(0);
    },0)
  },[orderList]);


  const getOrder = (payload:any) =>{
    dispatch({
      type:'my/fetchOrder',
      payload,
      callback:(res:any)=>{
        setOrderLists(res.data);
        filterOrders(orderStatus);
        // 订单
      }
    })
  };
  //过滤订单
  const filterOrders = (orderStatus:number)=>{
    setOrderStatus(orderStatus);
    if(orderStatus!==0){
      const res = orderList.filter((val:any)=>{
        return val.status === orderStatus;
      });
      setOrderLists(res);
    }else{
      setOrderLists(orderList);
    }
  };

  const alert = Modal.alert;

  //删除订单
  const deleteHandler = (payload:any)=>{
    alert(
      '是否删除',
      '确认删除订单吗？',
      [
        {
          text:'取消'
        },
        {
          text:'确定',
          onPress:()=>{
            (()=>{
              deleteOrder(payload).then((res:any)=>{
                res.success&&Toast.success('删除成功');
                // 重新获取
                getOrder(orderStatus);
              }).catch((error)=>{
                console.log(error);
              });
            })();
          }
        }
      ]
    );
    console.log(payload,'删除参数');
  };


  const orderTypes = [
    {
      title:'全部',
    },
    {
      title:'待支付'
    },
    {
      title:'已支付'
    },
    {
      title:'待发货'
    },
    {
      title:'待收货'
    },
    {
      title:'已完成'
    },
  ]


  return (
    <div className={styles.order}>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.back()}
        rightContent={[
          <i className={`iconfont icon-shouye`} key={2} onClick={()=>{router.push('/shop/home')}}></i>
        ]}
      >
        我的订单
      </NavBar>
      <div className={styles.tabWrap}>
        <Tabs
          tabs={orderTypes}
          onChange={(tab, index) => { filterOrders(index) }}
          tabBarUnderlineStyle='none'>
          <ul className={styles.orderCardWrap}>

            {
              orderLists.length?orderLists.map((item:any,index:number)=>(
                <OrderCard key={index} deleteHandler={deleteHandler} orderInfo = {item}></OrderCard>
              )):(<NoData>444</NoData>)
            }

            {/*<li>
              <div className={styles.cardHeader}>
                <span>梭梭树礼盒 <i style={{fontSize:'12px'}} className={`iconfont icon-xiangyoujiantou`}></i></span>
                <div className={styles.orderStatus}>已完成</div>
                <div className={styles.deleteThis}>
                  <i className={`iconfont icon-lajixiang`}></i>
                </div>
              </div>
              <div className={`${styles.goodsInfo } clearfix`}>
                <div className={styles.infoItem}>
                  <img src={require('@/assets/shop/goods_img.jpg')} alt=""/>
                </div>
                <div className={styles.infoItem}>
                  剪刀梅花剑刘海剪，专业画廊用品买贵包赔,专业画...
                </div>
                <div className={styles.infoItem}>
                  <span>￥</span>58.00
                </div>
              </div>
              <div className={`${styles.cardBot} clearfix`}>
                <div className={styles.extrBtn}>
                  再次购买
                </div>
              </div>
            </li>*/}
          </ul>
        </Tabs>
      </div>
    </div>
  )

}

//组件与状态连接
export default connect(({loading,my}:any)=>{
  return{
    loading:loading.effects['my/fetchOrder'],
    orderList:my.orderList
  }
})(Orders);
