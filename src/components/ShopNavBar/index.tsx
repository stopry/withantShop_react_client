import React,{PureComponent} from 'react';
import {NavLink} from 'react-router-dom';
import './index.less';

interface ITabBarData{
  title?:string;
  icon?:any;
  activeIcon?:string;
  link?:any;
  id?:string;
};

const tabNarData:ITabBarData[] = [
  {
    title:'首页',
    icon:require('@/assets/shop/home.png'),
    activeIcon:require('@/assets/shop/home_active.png'),
    link:'/shop/home',
    id:'_shop_home',
  },
  {
    title:'发现',
    icon:require('@/assets/shop/discover.png'),
    activeIcon:require('@/assets/shop/discover_active.png'),
    link:'/shop/discover',
    id:'_shop_discover',
  },
  {
    title:'我的',
    icon:require('@/assets/shop/my.png'),
    activeIcon:require('@/assets/shop/my_active.png'),
    link:'/shop/my',
    id:'_shop_my',
  }
]

class ShopNavBar extends PureComponent{
  render(){
    return(
      <div id='shop_nav_bar' className={`s_border_top`}>
        {
          tabNarData.map(item=>(
            <NavLink
              key={item.id}
              to={item.link}
              activeClassName={`active`}
            >
              <img className={`iconImg`} src={item.icon} alt=""/>
              <img  className={`iconImgActive`} src={item.activeIcon} alt=""/>
              <div>
                {item.title}
              </div>
            </NavLink> 
          ))
        }
      </div>
    );
  }
}

export default ShopNavBar;