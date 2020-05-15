export default [
  //仿withAnt商店
  {
    path: '/shop',
    component: '../layouts/ShopLayout',
    routes: [
      {
        path: '/shop',
        redirect: '/shop/home',
      },
      {
        path: '/shop/home',
        component: './shop/home',
        title:'首页'
      },
      {
        path: '/shop/home/goodsList',
        component: './shop/home/goodsList',
        title:'商品列表'
      },
      {
        path: '/shop/home/goodsDetail/:id',
        component: './shop/home/goodsDetail',
        title:'商品详情'
      },
      {
        path: '/shop/home/payPage',
        component: './shop/home/payPage',
        title:'支付'
      },
      {
        path: '/shop/my',
        component: './shop/my',
        title:'个人中心'
      },
      {
        path:'/shop/my/login',
        component:'./shop/my/login',
        title:'登录'
      },

      {
        path: '/shop/my/addressList',
        component: './shop/my/address/addressList',
        title:'地址管理'
      },

      {
        path: '/shop/my/orders',
        component: './shop/my/orders/orders',
        title:'我的订单'
      },

      {
        path: '/shop/discover',
        title:'发现',
        routes:[
          {
            name: 'discover',
            path:'/shop/discover',
            component: './shop/discover/discover',
          },
          {
            name: 'article',
            path:'/shop/discover/article/:id',
            component: './shop/discover/article',
          }
        ]
      },
    ],
  },
  //投票
  {
    path: '/vote',
    component: '../layouts/VoteLayout',
    routes: [
      {
        path: '/vote/rank',
        component: './vote/rank',
      },
      {
        path: '/vote/enroll',
        component: './vote/enroll',
      },
      {
        path: '/vote/award',
        component: './vote/award',
      },
      {
        path: '/vote',
        redirect: '/vote/index',
      },
      {
        path: '/vote/index',
        component: './vote/index',
      },
      {
        path: '/vote/user/index/:id',
        component: './vote/user/index',
      },
    ],
  }, // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        path: '/user/login',
        component: './User/Login',
      },
    ],
  }, // TabBar
  {
    path: '/tabbar',
    component: '../layouts/TabBarLayout',
    routes: [
      {
        path: '/tabbar',
        redirect: '/tabbar/index',
      },
      {
        path: '/tabbar/index',
        title: 'index',
        component: './tabbar/index',
        iconName: 'alipay',
      },
      {
        path: '/tabbar/koubei',
        title: 'Koubei',
        component: './tabbar/Koubei',
        iconName: 'koubei',
      },
      {
        path: '/tabbar/friend',
        title: 'Friend',
        component: './tabbar/Friend',
        iconName: 'friend',
      },
      {
        path: '/tabbar/my',
        title: 'My',
        component: './tabbar/Koubei',
        iconName: 'my',
      },
    ],
  }, // 考试答题
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['user', 'admin'],
    routes: [
      {
        path: '/vote/index.tsx',
        component: './vote/index.tsx',
      },
      {
        path: '/vote/index',
        component: './vote/index',
      },
      {
        path: '/',
        redirect: '/shop/home',
        component: './home/index',
        title: '首页',
      },
      {
        path: '/entrance',
        component: './entrance/index',
        title: '主入口',
      },
      {
        path: '/paper/:type',
        component: './paper/index',
        title: '试题页面',
      },
      {
        path: '/result',
        component: './result/index',
        title: '结果页',
      },
      {
        title: 'exception',
        path: '/exception',
        routes: [
          // Exception
          {
            path: '/exception/403',
            title: 'not-permission',
            component: './exception/403',
          },
          {
            path: '/exception/404',
            title: 'not-find',
            component: './exception/404',
          },
          {
            path: '/exception/500',
            title: 'server-error',
            component: './exception/500',
          },
        ],
      },
      {
        path: '/404',
        component: '404',
      },
    ],
  },
];
