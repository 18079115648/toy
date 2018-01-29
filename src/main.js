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



Vue.use(Vuex)
Vue.prototype.$storage = storage



import vueTap from 'v-tap';
Vue.use(vueTap);



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
//storage.set('token', {"accessToken":"2d4a3707b499361b40c551059fa54c11","refreshToken":"e23dc5e0c40b4ab5d794753463c18ec9","expired":1518140923})

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
  store,
  router,
  template: '<App/>',
  components: { App }
})