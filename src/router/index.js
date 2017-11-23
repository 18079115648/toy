import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('../components/index.vue')), 'index')

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      redirect: '/index' 
    },
    {
      path: '/index',
      component: index
    },
  ]
})
