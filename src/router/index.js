import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const index = r => require.ensure([], () => r(require('../components/index.vue')), 'index')
const room = r => require.ensure([], () => r(require('../components/room.vue')), 'room')

const user = r => require.ensure([], () => r(require('../components/user.vue')), 'user')


const login = r => require.ensure([], () => r(require('../components/login.vue')), 'login')
const signIn = r => require.ensure([], () => r(require('../components/signIn.vue')), 'signIn')
const toysBox = r => require.ensure([], () => r(require('../components/toysBox.vue')), 'toysBox')
const news = r => require.ensure([], () => r(require('../components/news.vue')), 'news')

//个人中心
const userInfo = r => require.ensure([], () => r(require('../components/userInfo.vue')), 'userInfo')
//抓取记录
const grabList = r => require.ensure([], () => r(require('../components/grabList.vue')), 'grabList')
//抓取详情
const grabDetails = r => require.ensure([], () => r(require('../components/grabDetails.vue')), 'grabDetails')
//钻石充值
const recharge = r => require.ensure([], () => r(require('../components/recharge.vue')), 'recharge')
//确认支付
const payment = r => require.ensure([], () => r(require('../components/payment.vue')), 'payment')
//充值记录
const paymentList = r => require.ensure([], () => r(require('../components/paymentList.vue')), 'paymentList')
//订单中心
const orderList = r => require.ensure([], () => r(require('../components/orderList.vue')), 'orderList')
//订单详情
const orderDetails = r => require.ensure([], () => r(require('../components/orderDetails.vue')), 'orderDetails')
//地址管理
const address = r => require.ensure([], () => r(require('../components/address.vue')), 'address')
//添加地址
const addAddress = r => require.ensure([], () => r(require('../components/addAddress.vue')), 'addAddress')
//设置
const set = r => require.ensure([], () => r(require('../components/set.vue')), 'set')
//关于我们
const aboutUs = r => require.ensure([], () => r(require('../components/aboutUs.vue')), 'aboutUs')









/**
 * Demon Start
 */

 // 直播测试
 const live = r => require.ensure([], () => r(require('../components/live.vue')), 'live')

 /**
  * Demon End
  */


export default new Router({
  routes: [
    { path: '/',
      redirect: '/index' 
    },
    {
      path: '/live',
      component: live
    },
    {
      path: '/index',
      component: index,
      meta: {
      	keepAlive: true
      }
    },
    {
      path: '/room',
      component: room,
    },
    {
      path: '/user',
      component: user
    },{
      path: '/userInfo',
      component: userInfo
    },{
      path: '/grabList',
      component: grabList
    },{
      path: '/grabDetails/:id',
      component: grabDetails
    },{
      path: '/recharge',
      component: recharge
    },{
      path: '/payment/:id',
      component: payment
    },{
      path: '/paymentList',
      component: paymentList
    },{
      path: '/orderList',
      component: orderList
    },{
      path: '/orderDetails/:orderSn',
      component: orderDetails
    },{
      path: '/address',
      component: address
    },{
      path: '/addAddress',
      component: addAddress
    },{
      path: '/set',
      component: set
    },{
      path: '/aboutUs',
      component: aboutUs
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/signIn',
      component: signIn
    },
    {
      path: '/toysBox',
      component: toysBox
    },
    {
      path: '/news',
      component: news
    },
  ]
})
