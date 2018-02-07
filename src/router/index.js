import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const index = r => require.ensure([], () => r(require('../components/index.vue')), 'index')
const room = r => require.ensure([], () => r(require('../components/room.vue')), 'room')

const user = r => require.ensure([], () => r(require('../components/user.vue')), 'user')


const login = r => require.ensure([], () => r(require('../components/login.vue')), 'login')
const mobileLogin = r => require.ensure([], () => r(require('../components/mobileLogin.vue')), 'mobileLogin')
const oauth = r => require.ensure([], () => r(require('../components/oauth.vue')), 'oauth')
const toysBox = r => require.ensure([], () => r(require('../components/toysBox.vue')), 'toysBox')
const toysBoxSelect = r => require.ensure([], () => r(require('../components/toysBoxSelect.vue')), 'toysBoxSelect')
const orderSubmit = r => require.ensure([], () => r(require('../components/orderSubmit.vue')), 'orderSubmit')
const invite = r => require.ensure([], () => r(require('../components/invite.vue')), 'invite')
const share = r => require.ensure([], () => r(require('../components/share.vue')), 'share')
const agree = r => require.ensure([], () => r(require('../components/agree.vue')), 'agree')

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
//会员确认支付
const paymentMember = r => require.ensure([], () => r(require('../components/paymentMember.vue')), 'paymentMember')
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
//排行榜
const rankList = r => require.ensure([], () => r(require('../components/rankList.vue')), 'rankList')
const rankListApp = r => require.ensure([], () => r(require('../components/rankListApp.vue')), 'rankListApp')
//排行榜用户详情
const rankDetail = r => require.ensure([], () => r(require('../components/rankDetail.vue')), 'rankDetail')
//积分商城
const intergalMall = r => require.ensure([], () => r(require('../components/intergalMall.vue')), 'intergalMall')
//商城商品详情
const goodsDetail = r => require.ensure([], () => r(require('../components/goodsDetail.vue')), 'goodsDetail')
//兑换记录
const convertList = r => require.ensure([], () => r(require('../components/convertList.vue')), 'convertList')
//会员卡中心
const memberCenter = r => require.ensure([], () => r(require('../components/memberCenter.vue')), 'memberCenter')
//奖励明细
const rewardList = r => require.ensure([], () => r(require('../components/rewardList.vue')), 'rewardList')
//福利中心
const welfareCenter = r => require.ensure([], () => r(require('../components/welfareCenter.vue')), 'welfareCenter')

//我的碎片
const fragmentList = r => require.ensure([], () => r(require('../components/fragmentList.vue')), 'fragmentList')




const router = new Router({
  routes: [
    { path: '/',
      redirect: '/index' 
    },
    {
      path: '/index',
      component: index,
      meta: {
      	keepAlive: true,
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
      path: '/intergalMall/:type', //type 1 积分  2 碎片
      component: intergalMall,
      meta: {
      	keepAlive: true,
      	requireAuth: true
      }
    },{
      path: '/goodsDetail/:id/:type',  //type 1 积分  2 碎片
      component: goodsDetail,
      meta: {
      	keepAlive: true,
      	requireAuth: true
      }
    },{
      path: '/memberCenter',
      component: memberCenter,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/rewardList/:type',
      component: rewardList,
      meta: {
      	requireAuth: true
      }
    }
    ,{
      path: '/welfareCenter',
      component: welfareCenter,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/convertList',
      component: convertList,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/payment/:id',
      component: payment,
      meta: {
      	requireAuth: true
      }
    },{
      path: '/paymentMember/:type',
      component: paymentMember,
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
      path: '/rankList',
      component: rankList,
      meta: {
      	requireAuth: true,
      	keepAlive: true,
      }
    },{
      path: '/rankListApp/:type',
      component: rankListApp,
      meta: {
      	requireAuth: true,
      }
    },{
      path: '/rankDetail/:id',
      component: rankDetail,
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
      path: '/agree',
      component: agree 
    },
    {
      path: '/oauth',
      component: oauth
    },
    {
      path: '/toysBox',
      component: toysBox,
      meta: {
      	requireAuth: true
      }
    },
    {
      path: '/toysBoxSelect/:type',
      component: toysBoxSelect,
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
      path: '/share/:id',
      component: share,
    },
    {
      path: '/orderSubmit',
      component: orderSubmit,
      meta: {
      	requireAuth: true
      }
    },
    {
      path: '/fragmentList',
      component: fragmentList,
      meta: {
      	requireAuth: true
      }
    },
    
  ]
})

export default router