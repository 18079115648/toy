import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const index = r => require.ensure([], () => r(require('../components/index.vue')), 'index')
const room = r => require.ensure([], () => r(require('../components/room.vue')), 'room')

const user = r => require.ensure([], () => r(require('../components/user.vue')), 'user')


const login = r => require.ensure([], () => r(require('../components/login.vue')), 'login')
const mobileLogin = r => require.ensure([], () => r(require('../components/mobileLogin.vue')), 'mobileLogin')
const oauth = r => require.ensure([], () => r(require('../components/oauth.vue')), 'oauth')
const signIn = r => require.ensure([], () => r(require('../components/signIn.vue')), 'signIn')
const toysBox = r => require.ensure([], () => r(require('../components/toysBox.vue')), 'toysBox')
const news = r => require.ensure([], () => r(require('../components/news.vue')), 'news')
const orderSubmit = r => require.ensure([], () => r(require('../components/orderSubmit.vue')), 'orderSubmit')
const invite = r => require.ensure([], () => r(require('../components/invite.vue')), 'invite')

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
//地址详情
const addressDetail = r => require.ensure([], () => r(require('../components/addressDetail.vue')), 'addressDetail')
//设置
const set = r => require.ensure([], () => r(require('../components/set.vue')), 'set')
//关于我们
const aboutUs = r => require.ensure([], () => r(require('../components/aboutUs.vue')), 'aboutUs')





/**
 * Demon Start
 */

 // 直播测试
 const live = r => require.ensure([], () => r(require('../components/live.vue')), 'live')
 // 加载动画
 const loading = r => require.ensure([], () => r(require('../components/loading.vue')), 'loading')

 /**
  * Demon End
  */



const router = new Router({
  routes: [
    { path: '/',
      redirect: '/index' 
    },
    {
      path: '/live',
      component: live
    },
    {
      path: '/loading',
      component: loading
    },
    {
      path: '/index',
      component: index,
      meta: {
      	keepAlive: true,
      	requireAuth: true
      }
    },
    {
      path: '/room',
      component: room,
      meta: {
      	requireAuth: true
      }
    },
    {
      path: '/user',
      component: user,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/userInfo',
      component: userInfo,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/grabList',
      component: grabList,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/grabDetails/:id',
      component: grabDetails,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/recharge',
      component: recharge,
      meta: {
      	keepAlive: true,
      	requireAuth: true
      }
    },{
      path: '/payment/:id',
      component: payment,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/paymentList',
      component: paymentList,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/orderList',
      component: orderList,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/orderDetails/:orderSn',
      component: orderDetails,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/address/:status',
      component: address,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/addAddress',
      component: addAddress,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/addressDetail',
      component: addressDetail,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/set',
      component: set,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/aboutUs',
      component: aboutUs
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/mobileLogin',
      component: mobileLogin
    },
    {
      path: '/oauth',
      component: oauth
    },
    {
      path: '/signIn',
      component: signIn,
      meta: {
      	requireAuth: true
      }
    },
    {
      path: '/toysBox',
      component: toysBox,
      meta: {
      	requireAuth: true
      }
    },
    {
      path: '/invite',
      component: invite,
      meta: {
      	requireAuth: true
      }
    },
    {
      path: '/orderSubmit',
      component: orderSubmit,
      meta: {
      	requireAuth: true
      }
    },
    {
      path: '/news',
      component: news,
      meta: {
      	requireAuth: true
      }
    },
  ]
})

export default router