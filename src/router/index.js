import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('../components/index.vue')), 'index')
const home = r => require.ensure([], () => r(require('../components/home.vue')), 'home')
const New = r => require.ensure([], () => r(require('../components/new.vue')), 'new')
const pop = r => require.ensure([], () => r(require('../components/pop.vue')), 'pop')
const fun = r => require.ensure([], () => r(require('../components/fun.vue')), 'fun')
const user = r => require.ensure([], () => r(require('../components/user.vue')), 'user')

//个人中心
const userInfo = r => require.ensure([], () => r(require('../components/userInfo.vue')), 'userInfo')
//抓取记录
const grabList = r => require.ensure([], () => r(require('../components/grabList.vue')), 'grabList')
//钻石充值
const recharge = r => require.ensure([], () => r(require('../components/recharge.vue')), 'recharge')
//确认支付
const payment = r => require.ensure([], () => r(require('../components/payment.vue')), 'payment')
//充值记录
const paymentList = r => require.ensure([], () => r(require('../components/paymentList.vue')), 'paymentList')
//订单中心
const orderList = r => require.ensure([], () => r(require('../components/orderList.vue')), 'orderList')
//地址管理
const address = r => require.ensure([], () => r(require('../components/address.vue')), 'address')






/**
 * Demon Start
 */

 // 直播测试
 const live = r => require.ensure([], () => r(require('../components/live.vue')), 'live')

 /**
  * Demon End
  */


Vue.use(Router)

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
      children: [{
	        path: '/index',
	        component: home
	    },{
	        path: '/index/new',
	        component: 	New
	    },{
	        path: '/index/pop',
	        component: pop
	    },{
	        path: '/index/fun',
	        component: fun
	    }]
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
      path: '/recharge',
      component: recharge
    },{
      path: '/payment',
      component: payment
    },{
      path: '/paymentList',
      component: paymentList
    },{
      path: '/orderList',
      component: orderList
    },{
      path: '/address',
      component: address
    },
  ]
})
