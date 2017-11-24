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


export default new Router({
  routes: [
    { path: '/',
      redirect: '/index' 
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
