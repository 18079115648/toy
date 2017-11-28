import axios from 'axios'
import qs from 'qs'
import { Toast } from 'mint-ui'
import storage from '@/fetch/storage'
import router from '@/router'
import Token from '@/fetch/accessToken'





// axios 配置
axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//axios.defaults.baseURL = '/dm-api/'
						
//POST传参序列化
axios.interceptors.request.use((config) => {
    return config;
},(error) =>{
    
    return Promise.reject(error);
});


function buildURL(url, needToken) {

	url = url+(url.indexOf('?') >= 0 ? '&' : '?') + "key=8dd758066c594324962cc2de7ee7a306" 
	let token = Token.getAccessToken()
    if (!needToken) {
        return token ? url + (url.indexOf('?') >= 0 ? '&' : '?') + "accessToken=" + token : url
    }
    if (!token) {
    	storage.set('history_url', router.history.current.path)
        router.replace('/login')
        return false
    }
    return url + (url.indexOf('?') >= 0 ? '&' : '?') + "accessToken=" + token
}

export function fetchPost(url, params, needToken,multiple) {
	url = buildURL(url, needToken)
	if (!url) {
        return new Promise((resolve, reject) => {
	        reject()
	      })
	}
	if(multiple) {
		return new Promise((resolve, reject) => {
	        axios.post( url, params, {
	            headers: {
	                'Content-Type': 'multiple/form-data'
	            }
	        }).then(response => {
	            	if(response.status == 200) {
	            		if(response.data.errCode == 0) {
	            			resolve(response.data) 
	            		}else {
	            			reject(response)
	            			Toast({
							  message: response.data.errMsg,
							  position: 'bottom',
							  duration: 1500
							});
	            		} 
	            	}else {
	            		reject(response)
		               	Toast({
						  message: '网络错误',
						  position: 'bottom',
						  duration: 2000
						});
	            	}
	            	  
	            })
	            .catch((error) => {
	               	reject(error)
	               	Toast({
					  message: '网络错误',
					  position: 'bottom',
					  duration: 2000
					});
	            })
	    })
	}
    return new Promise((resolve, reject) => {
        axios.post( url, qs.stringify(params))
            .then(response => {
            	if(response.status == 200) {
            		if(response.data.errCode == 0) {
            			resolve(response.data) 
            		}else {
            			reject(response)
            			Toast({
						  message: response.data.errMsg,
						  position: 'bottom',
						  duration: 1500
						});
            		} 
            	}else {
            		reject(response)
	               	Toast({
					  message: '网络错误',
					  position: 'bottom',
					  duration: 2000
					});
            	}
            	  
            })
            .catch((error) => {
               	reject(error)
               	Toast({
				  message: '网络错误',
				  position: 'bottom',
				  duration: 2000
				});
            })
    })
}
export function fetchGet(url, params, needToken) {
	
	url = buildURL(url, needToken)
	if (!url) {
        return new Promise((resolve, reject) => {
	        reject()
	      })
    }
    return new Promise((resolve, reject) => {
        axios.get( url, {
        	params: params
        }).then(response => {
            	if(response.status == 200) {
            		if(response.data.errCode == 0) {
            			resolve(response.data) 
            		}else {
            			reject(response)
            			Toast({
						  message: response.data.errMsg,
						  position: 'bottom',
						  duration: 1500
						});
            		} 
            	}else {
            		reject(response)
	               	Toast({
					  message: '网络错误',
					  position: 'bottom',
					  duration: 2000
					});
            	}
            	  
            })
            .catch((error) => {
               	reject(error)
               	Toast({
				  message: '网络错误',
				  position: 'bottom',
				  duration: 2000
				});
            })
    })
}
export default {
    //分页
	page(url, params, needToken) {
		return fetchGet( url, params, needToken)
	},

	
	
	//获取验证码
	getCaptcha(params) {
		return fetchPost('/dm-api/mobile/captcha', params, false)
	},
	
	//手机号登录
	mobileLogin(params) {
		return fetchPost('/dm-api/login', params, false)
	},
	//微信登录
	wechatLogin(params) {
		return fetchPost('/dm-api/oauth/login', params, false)
	},
	
	//首页标签
	homeTags(params) {
		return fetchGet('/dm-api/tags', params, true)
	},
	
	//标签获取房间列表
	TagRooms(params) {
		return fetchGet('/dm-api/home/tag', params, true)
	},
	
	//首页banner
	homeBanner(params) {
		return fetchGet('/dm-api/banner', params, false)
	},
	
	//签到列表
	signList(params) {
		return fetchGet('/dm-api/signList', params, true)
	},
	
	//签到
	sign(params) {
		return fetchPost('/dm-api/sign', params, true)
	},
	
	//娃娃袋
	toysWin(params) {
		return fetchGet('/dm-api/doll/list', params, true)
	},
	
	//用户信息
	userInfo(params) {
		return fetchGet('/dm-api/user/info', params, true)
	},
	
	//消息列表
	newsList(params) {
		return fetchGet('/dm-api/messaages', params, true)
	},

	//充值选项列表
	recharge(params) {
		return fetchGet('/dm-api/charge/list', params, true)
	},
	//充值下单
	payment(params) {
		return fetchPost('/dm-api/charge', params, true)
	},
	//充值记录
	paymentList(params) {
		return fetchGet('/dm-api/charge/log', params, true)
	},
	//订单列表
	orderList(params) {
		return fetchGet('/dm-api/order/list', params, true)
	},
	//订单详情
	orderDetail(params) {
		return fetchGet('/dm-api/order/info', params, true)
	},
	//抓取记录
	grabList(params) {
		return fetchGet('/dm-api/doll/log', params, true)
	},
	//抓取详情
	grabDetails(params) {
		return fetchGet('/dm-api/doll/log/info', params, true)
	},
	//申诉
	appeal(params) {
		return fetchPost('/dm-api/doll/appeal', params, true)
	},
	//收货地址列表
	address(params) {
		return fetchGet('/dm-api/address/list', params, true)
	},
	//删除地址
	deleteAddress(params) {
		return fetchPost('/dm-api/address/delete', params, true)
	},
	//个人中新信息
	userInfo(params) {
		return fetchGet('/dm-api/user/info', params, true)
	},
	//修改个人
	saveUser(params) {
		return fetchPost('/dm-api/user/edit', params, true)
	},
	//上传头像
	saveHead(params) {
		return fetchPost('/dm-api/upload/image', params, true, 'updataImg')
	},

}
