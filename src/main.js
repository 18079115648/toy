// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import storage from '@/fetch/storage'
Vue.prototype.$storage = storage

import common from '@/fetch/common'
Vue.prototype.$common = common

import token from '@/fetch/accessToken'
Vue.prototype.$token = token

import api from '@/fetch/api'
Vue.prototype.$api = api

import weixin from '@/fetch/weixin'
Vue.prototype.$weixin = weixin

import Header from '@/components/common/Header'
Vue.component('Header', Header)

import Pagination from '@/components/common/Pagination'
Vue.component('Pagination', Pagination)

import confirmModal from '@/components/common/confirmModal'


Vue.component('confirmModal', confirmModal)

Vue.use(VueRouter)

Vue.use(mint)
Vue.config.productionTip = false

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