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

import VConsole from 'vconsole'
var vConsole = new VConsole();

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



//storage.set('token', {"accessToken":"34bea3264fa230e8741dcd61158c8197","refreshToken":"1aa2ef0da2038a6aefbbe49d75ef066b","expired":1517912614})
//storage.set('token', {"accessToken":"d5adf1eeeed4d246e4d7bc4c9c3f623d","refreshToken":"869a3ea969b39cec8e4062ac886ee4a6","expired":1519374115})

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





