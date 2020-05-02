import React, { PureComponent } from 'react';

import {NavLink} from 'react-router-dom';
//@ts-ignore;
import './index.less';

const tabBarData = [
  {
    title: '首页',
    icon: 'icon-home',
    link: '/vote/index',
    id:'vote_index'
  },
  {
    title: '排行',
    icon: 'icon-V',
    link: '/vote/rank',
    id:'vote_rank'
  },
  {
    title: '奖品',
    icon: 'icon-wodejiangpin',
    link: '/vote/award',
    id:'vote_award'
  },
  {
    title: '报名',
    icon: 'icon-baoming2',
    link: '/vote/enroll',
    id:'vote_enroll'
  },
];

class VoteNavBar extends PureComponent {
  render() {
    // const { isMenubar, children, pathname } = this.props;
    return (
      <div id="navBar">
        {
          tabBarData.map((item)=>(
            <NavLink key={item.id} activeClassName={'active'} to={item.link} className={`iconfont ${item.icon}`}>
              <p>
                {item.title}
              </p>
            </NavLink>
          ))
        }
      </div>
    );
  }
}
export default VoteNavBar;
