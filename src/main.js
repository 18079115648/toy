// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import vueTap from 'v-tap';
Vue.use(vueTap);

import storage from '@/fetch/storage'
Vue.prototype.$storage = storage

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

import Pagination from '@/components/common/Pagination'
Vue.component('Pagination', Pagination)

import shareTip from '@/components/common/shareTip'
Vue.component('shareTip', shareTip)

import confirmModal from '@/components/common/confirmModal'


Vue.component('confirmModal', confirmModal)

Vue.use(VueRouter)


Vue.use(mint)
Vue.config.productionTip = false

function getKey(name) {
	var reg = new RegExp('^' + name + '=([^&]*)(&|$)');
//	          new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var param=window.location.search.substring(1).split('/')[0];
    var currKey = storage.get('operatorKey')
    if(!param){
    	return false
    }
    var r = param.match(reg)
    if (r != null && r[1] == currKey) {
    	return r[1]
    }
    if (r != null && r[1] != currKey) {
    	storage.remove('token')
    	return r[1]
    }
    return false
}

storage.set('operatorKey', getKey('key'))

//storage.set('token', {"accessToken":"337f01014ed58ee4de283ae2556caa5c","refreshToken":"b0c1703bd76cc87750f3ad73b5c145bc","expired":1517536840})
storage.set('token', {"accessToken":"b0e1b6e1bf3ecf383f1d036e786a47b6","refreshToken":"90e6e97d6ee187d9c35b03cdcaeedbcf","expired":1517556005})

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
        next('/login')
    } else {
    	next()
    }   
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
        bgAudio: undefined
    }
  },
  router,
  template: '<App/>',
  components: { App }
})