import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('../components/index.vue')), 'index')
const home = r => require.ensure([], () => r(require('../components/home.vue')), 'home')
const New = r => require.ensure([], () => r(require('../components/new.vue')), 'new')
const pop = r => require.ensure([], () => r(require('../components/pop.vue')), 'pop')
const fun = r => require.ensure([], () => r(require('../components/fun.vue')), 'fun')
const user = r => require.ensure([], () => r(require('../components/user.vue')), 'user')

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      redirect: '/index' 
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
    },
  ]
})
