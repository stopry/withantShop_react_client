import React from 'react';
import {Modal,NoticeBar,Icon,List,Button,WhiteSpace} from 'antd-mobile';

const styles = require('./style.less');

const PayPage:React.FC<any>=props=>{

  const Item = List.Item;
  const Brief = Item.Brief;


  return(
    <div className={styles.payPage}>
      <List
        className={styles.payList}

      >
        <Item
          arrow='horizontal'
          multipleLine
          platform='android'
          onClick={()=>{console.log(1)}}
          thumb={require('@/assets/shop/location.png')}
        >

          <div>
            收货人：王贝贝
            <span style={{float:"right"}}>
              1385518476
            </span>

          </div>
          <Brief style={{"whiteSpace":"initial"}}>
          收货地址：安徽省淮南市潘集区There may have water ripple effect of
          </Brief>

        </Item>
        <Item>

          <div className={styles.imgWrap}>
            <img src={require('@/assets/shop/goods_img.jpg')} className={styles.proImg} alt=""/>
          </div>
          <div className={styles.proDesc}>
            <p className={styles.descText}>
              withAnt 玩具，蚂蚁森林梭梭树，创意毛绒玩具摆台汽车靠枕。
            </p>
            <p className={styles.sizeInfo}>
              均码/森林梭梭树
            </p>
            <div className={styles.priInfo}>
              ￥58
              <span style={{float:'right',fontSize:'12Px',color:'#999'}}>X1</span>
            </div>
          </div>

        </Item>
      </List>
      <WhiteSpace></WhiteSpace>
      <List>
        <Item 
          arrow='horizontal'
          platform='android'
          onClick={()=>{}}
        >
          配送方式 <span style={{color:'#888',paddingLeft:'5Px',fontSize:'12px'}}>快递 包邮 （专属权益）</span>
        </Item>
        <Item extra={'88'}>使用积分</Item>
      </List>
      <NoticeBar className={styles.tips} mode="closable">
        若需要发票，请备注需要发票
      </NoticeBar>
      <div className={styles.payBot}>
        <div className={styles.priDesc}>
          <p>合计</p>
          <span>￥58</span>
        </div>
        <Button className={styles.payBtn}>
          去支付(1)
        </Button>
      </div>
    </div>
  )
}
export default PayPage;