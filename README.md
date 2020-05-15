# 前言

学React已经有一段时间了，期间都是接触到的都是些概念性的东西和一些简单的demo示例。想要更加熟悉框架以及能够安全的运用在项目中，还需要真正的实战练习，无意中看到支付宝小程序中有一个withAnt商店小程序，于是就用刚学的Umi,React,Antd-mobile照着写了起来。

项目中涉及到用户登陆，jwt token验证，商品列表，商品详情，用户信息，商品下单，订单，收货地址等。。。,并对webpack做了一些必要的优化配置。

项目都是在利用业余时间写的，仅仅用于学习使用。

此项目为用户客户端，另外有基于Umi React Antd的后台数据管理界面和基于node egg mongodb的服务端系统，此客户端和后台管理界面需要结合服务端使用，否出会出现找不到数据的异常。

>[[服务端项目传送地址]](https://github.com/stopry/WithAntShop_Server_egg.git)<br/>
[[后台管理页面传送地址]](https://github.com/stopry/WithAntShop_AdminClient_React.git)

__<font color='#ff7875'>注：本项目主要用户学习目的，因此包含了一些和之前写的其他无关的代码（包括一个投票相关的和仿别人的考试答题的demo，具体可看项目目录和路由配置），商店项目代码主要在shop目录下以及其他的一些带有shop字样的代码如models下的shop.tsx。</font>__

# Umi React WithAntShop

__项目源码基于 GPL 协议，仅仅用于 Umi React 框架的学习，请勿作为商业用途。 请抵制一切盗版侵权行为，请尊重作者的劳动果实！__


## 框架文档

>[[Build With Umi]](http://umijs.org/)<br/>
[[Build With dva]](https://dvajs.com/)<br/>
[[Build With antd-mobile]](https://mobile.ant.design)<br/>

该项目主要以 [UMI](https://umijs.org/zh/) + [DVA](https://dvajs.com/) 为底层框架，以[Ant Design Mobile](https://mobile.ant.design/)为 UI 组件库，包含完整的前端工程化实践。

部分代码及功能参考于 [Ant Design pro](https://pro.ant.design/)


## 技术栈

react + umi + dva + antd-mobile + postcss + ES6/7 + typeScript + mock


## 目录结构

    |-- config                                # umi 配置，包含路由，构建等配置
    |-- mock                                  # 本地模拟数据
    |-- public                                
    |   |-- favicon.png                       # favicon
    |-- src                                   # 
    |   |-- assets                            # 本地静态资源
    |   |-- components                        # 业务通用组件
    |   |-- layout                            # 通用布局
    |   |-- models                            # 全局 dva model
    |   |-- services                          # 后台接口服务
    |   |-- pages                             # 业务页面入口和常用模板
    |   |-- e2e                               # 集成测试用例
    |   |-- global.less                       # 全局样式
    |   |-- global.tsx                         # 全局 JS
    |   |-- theme.js                          
    |-- tests                                 # 测试工具
    |-- .gitignore                            # git忽略文件
    |-- .editorconfig                         # 编辑器代码风格配置
    |-- .eslintignore                         # eslint忽略文件
    |-- .eslintrc                             # eslint规则
    |-- .prettierignore                       # 代码风格配置忽略文件
    |-- .prettierrc                           # 代码风格配置文件
    |-- .stylelintrc                          # 样式风格配置文件
    |-- package.json                          
    |-- README.md                              

## 快速开始

```javascript

// 安装项目
$ git clone --depth=1 https://github.com/stopry/withantShop_react_client.git my-project

$ cd my-project

// 安装依赖
$ yarn or npm install

// 运行
$ yarn start or npm run start # 访问 http://localhost:8066

// 打包
$ yarn build or npm run build

```
更多命令可在[package.json](./package.json)中查看


# 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ☺

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  开发环境 windows10 64位 Chrome 73.0.3683.86  nodejs 10.19.0  npm 6.14.2

>  本项目会不定期更新完善 @auther 809746561@qq.com



# 部分截图

<img src="http://qny.stopry.com/home_t.png" width="365" height="auto"/> <img src="http://qny.stopry.com/home_b.png" width="365" height="auto"/>
<br/>
<img src="http://qny.stopry.com/address_list.png" width="365" height="auto"/> <img src="http://qny.stopry.com/order_lisr.png" width="365" height="auto"/>
<br/>
<img src="http://qny.stopry.com/goods_list.png" width="365" height="auto"/> <img src="http://qny.stopry.com/goods_detail.png" width="365" height="auto"/>
<br/>
<img src="http://qny.stopry.com/page_discover.png" width="365" height="auto"/> <img src="http://qny.stopry.com/dis_detail.png" width="365" height="auto"/>
<br/>
<img src="http://qny.stopry.com/page_my.png" width="365" height="auto"/>