import React from 'react';
import { connect ,useDispatch} from 'dva';
import {List,NavBar,Icon,Button} from 'antd-mobile';

const styles = require('../styles.less');

const AddressList:React.FC<any> = props=>{

  const {addressList} = props;
  console.log(addressList,'addressListaddressListaddressList')

  const dispatch = useDispatch()

  React.useEffect(()=>{
    getAddress(null);
  },[]);

  const getAddress = (payload:any) =>{
    
    dispatch({
      type:'my/fetchAddressList',
      payload,
      callback:(res:any)=>{

      }
    })
  };

  const Item = List.Item;
  const Brief = Item.Brief;
  
  return addressList.length&&(
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.back()}
      >
        管理收货地址
      </NavBar>
      
      <List
        className={styles.payList}

      >
        {
          addressList.map((item:any,index:any)=>(
            <Item
            key={index}
            arrow='horizontal'
            multipleLine
            platform='android'
            onClick={()=>{console.log(1)}}
            thumb={require('@/assets/shop/location.png')}
          >

            <div>
              收货人：{item.name}
              <span style={{float:"right"}}>
                {item.mobile}
              </span>

            </div>
            <Brief style={{"whiteSpace":"initial"}}>
            收货地址：{`${item.province}${item.city}市${item.area}区${item.town}镇${item.detail}`}
            {
              item.isDefault&&(<span className={styles.isDefault}>
                默认
              </span>)
            }
            </Brief>

          </Item>
          ))
        }
        {/* <Item
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

        </Item> */}
        </List>
        <Button
            className={styles.innerBuyBtn}
            type='primary'
          >
            新增收货地址
          </Button>
    </div>
  )

}

//组件与状态连接
export default connect(({loading,my}:any)=>{
  return{
    loading:loading.effects['my/fetchAddressList'],
    addressList:my.addressList
    // banner:shop_my.userInfo
  }
})(AddressList);