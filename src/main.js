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


//import VConsole from 'vconsole'
//var vConsole = new VConsole();

import vueTap from 'v-tap';
Vue.use(vueTap);



import common from '@/fetch/common'
Vue.prototype.$common = common
import wanbaLogin from '@/fetch/login'
Vue.prototype.$wanbaLogin = wanbaLogin

import token from '@/fetch/accessToken'
Vue.prototype.$token = token

import api from '@/fetch/api'
Vue.prototype.$api = api

import { loadJssdk, getKey } from '@/fetch/tool'
Vue.prototype.$loadJssdk = loadJssdk
Vue.prototype.$getKey = getKey

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


var jZego=document.createElement("script");  
jZego.setAttribute("type", "text/javascript");  
var ua = navigator.userAgent.toLowerCase(); 
if (/iphone|ipad|ipod/i.test(ua)) {                             // 在ios中
	if (ua.match(/MicroMessenger/i) == "micromessenger") {      // 微信中
	    if (window.__wxjs_is_wkwebview === true) {              // wkwebview
	        setSdk(true);
	        console.log('ios 微信 wk');
	    } else {                                                // UIWebView
	        setSdk(false);
	        console.log('ios 微信 ui');
	    }
	} else if (/QQ|UIWebView/i.test(ua)) {                      // 在QQ中
	    setSdk(false);
	    console.log('ios QQ ui');
	} else {
	    setSdk(true);
	    console.log('ios 其他');
	}
} else if (/Android/i.test(ua)) {                                // 在android中
    var index = ua.indexOf("android"); 
    var androidVersion = parseFloat(navigator.userAgent.slice(index + 8));   
    console.log(androidVersion);
    if (androidVersion < 4.4 ){                                  // 安卓版本小于4.4
        setSdk(false);
        console.log('android 版本小于4.4');
    } else {                                                     // 安卓版本大于4.4
        setSdk(true);
        console.log('android 版本大于4.4');
    }
}else {
	setSdk(true);
}
// 设置sdk版本
function setSdk(type){
    if (type) {     // 同步版本  适用于性能好的机器
        window.quality = true;
        jZego.setAttribute('src', 'static/js/jZego-1.0.13.min.js');
    } else {        // 异步版本  适用于性能不好的机器  视频将会码率降级
        window.quality = false;
        jZego.setAttribute('src', 'static/js/jZego-1.0.13.async.min.js');
    }
    document.documentElement.appendChild(jZego);  
}



/**
 * 玩吧 start
 */
//mqq.ui.setWebViewBehavior({
//  swipeBack:1,
//  actionButton: 1,
//  bottomBar:true
//})

/**
 * 玩吧 end
 */


/**
 * 玩吧 start
 */

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth && !token.getAccessToken()) {
        next('/login')
    } else {
    	next()
    }   
})

/**
 * 玩吧 start
 */

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