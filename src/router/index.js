import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('../components/index.vue')), 'index')

//个人中心
const userInfo = r => require.ensure([], () => r(require('../components/userInfo.vue')), 'userInfo')
//抓取记录
const grabList = r => require.ensure([], () => r(require('../components/grabList.vue')), 'grabList')
//钻石充值
const recharge = r => require.ensure([], () => r(require('../components/recharge.vue')), 'recharge')
//确认支付
const payment = r => require.ensure([], () => r(require('../components/payment.vue')), 'payment')


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      redirect: '/index' 
    },
    {
      path: '/index',
      component: index
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
    },
  ]
})
