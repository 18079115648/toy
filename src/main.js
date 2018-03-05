// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import storage from '@/fetch/storage'
import store from '@/vuex/store'
import Vuex from 'vuex'

//import VConsole from 'vconsole'
//var vConsole = new VConsole();

Vue.use(Vuex)
Vue.prototype.$storage = storage



import vueTap from 'v-tap';
Vue.use(vueTap);

import bridge from '@/fetch/bridge'
Vue.prototype.$bridge = bridge

import common from '@/fetch/common'
Vue.prototype.$common = common

import token from '@/fetch/accessToken'
Vue.prototype.$token = token

import api from '@/fetch/api'
Vue.prototype.$api = api

import { loadJssdk } from '@/fetch/tool'
Vue.prototype.$loadJssdk = loadJssdk

import weixin from '@/fetch/weixin'
Vue.prototype.$weixin = weixin

import Header from '@/components/common/Header'
Vue.component('Header', Header)

import Menu from '@/components/common/tabBar'
Vue.component('Menu', Menu)

import Pagination from '@/components/common/Pagination'
Vue.component('Pagination', Pagination)

import shareTip from '@/components/common/shareTip'
Vue.component('shareTip', shareTip)

import confirmModal from '@/components/common/confirmModal'


Vue.component('confirmModal', confirmModal)

Vue.use(VueRouter)


Vue.use(mint)
Vue.config.productionTip = false



//storage.set('token', {"accessToken":"46fc837dfc34c3cc2dc0e2927380cd42","refreshToken":"08ca7e2ecff421c706408deb37d9fb58","expired":1521448979})
//storage.set('token', {"accessToken":"3c03841e4f9ff8578188e94330f9d7e2","refreshToken":"7eac68599c020ecdfcbc4ba9ee144b2b","expired":1519627714})

//router.beforeEach((to, from, next) => {
//  if (to.meta.requireAuth && !token.getAccessToken() && common.isWeixin()) {
//      storage.set('history_url', to.fullPath)
//      next('/login')
//  } else {
//  	next()
//  }   
//})
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth && !token.getAccessToken()) {
        storage.set('history_url', to.fullPath)
        if(common.isHybrid()) {
			bridge.enterAppPage({
        		page: 'login'
        	})
        }else {
        	next('/login')
        }
        
    } else {
    	next()
    }   
})

console.log(window.navigator.userAgent)
console.log(common.isHybrid())
/* eslint-disable no-new */
if(common.isHybrid()) {
	bridge.getUserInfo().then((res) => {
		storage.set('token', {'accessToken': res.access_token, 'expired': res.expireTime})
		new Vue({
		  el: '#app',
		  data() {
		    return {
		        bgAudio: undefined
		    }
		  },
		  store,
		  router,
		  template: '<App/>',
		  components: { App }
		})
	})
}else {
	new Vue({
	  el: '#app',
	  data() {
	    return {
	        bgAudio: undefined
	    }
	  },
	  store,
	  router,
	  template: '<App/>',
	  components: { App }
	})
}





