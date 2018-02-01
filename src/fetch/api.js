import axios from 'axios'
import qs from 'qs'
import { Toast } from 'mint-ui'
import storage from '@/fetch/storage'
import router from '@/router'
import Token from '@/fetch/accessToken'

function getKey(name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
//	          new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var param=window.location.search.substring(1).split('/')[0];
    var currKey = storage.get('operatorKey')
    if(!param){
    	return false
    }
    var r = param.match(reg)
    if (r != null && r[2] == currKey) {
    	return r[2]
    }
    if (r != null && r[2] != currKey) {
    	storage.remove('token')
    	return r[2]
    }
    return false
}

storage.set('operatorKey', getKey('key'))
 
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
	let key = storage.get('operatorKey') ? storage.get('operatorKey') : '8dd758066c594324962cc2de7ee7a306'
	url = url+(url.indexOf('?') >= 0 ? '&' : '?') + "key=" + key
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

export function fetchPost(url, params, needToken, multiple) {
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
							if (response.data.errCode === 20002) {
								router.replace('/login')
								return
							}
	            			
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
            			if (response.data.errCode === 20002) {
							router.replace('/login')
							return
						}
            			
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
            		if(response.data.errCode == undefined || response.data.errCode == 0) {
            			resolve(response.data) 
            		}else {
            			reject(response)
						if (response.data.errCode === 20002) {
							router.replace('/login')
							return
						}
            			
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
	//	房间抓取记录
	logRoom(params) {
		return fetchGet('/dm-api/doll/log/room', params, true)
	},
    //分页
	page(url, params, needToken) {
		return fetchGet( url, params, needToken)
	},

	// 获取即构token
	getZegoToken(appId, idName) {
		return fetchGet('http://106.15.41.49:8181/token?app_id=' + appId + '&id_name=' + idName, {}, false)
	},
	// 获取即构初始化数据
	getZegoInitData(params) {
		return fetchGet('/dm-api/zego/init', params, true)
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
		return fetchGet('/dm-api/tags', params, false)
	},
	
	//标签获取房间列表
	TagRooms(params) {
		return fetchGet('/dm-api/home/tag', params, false)
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
		return fetchGet('/dm-api/doll/giftBox', params, true)
	},
	
	//用户信息
	userInfo(params) {
		return fetchGet('/dm-api/user/info/v15', params, true)
	},
	
	//消息列表
	newsList(params) {
		return fetchGet('/dm-api/messaages', params, true)
	},

	//充值选项列表
	recharge(params) {
		return fetchGet('/dm-api/charge/list/v15', params, true)
	},
	//充值下单
	payment(params) {
		return fetchPost('/dm-api/charge', params, true)
	},
	//充值记录
	paymentList(params) {
		return fetchGet('/dm-api/charge/log/v15', params, true)
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
		return fetchPost('/dm-api/doll/appeal/v15', params, true)
	},
	//收货地址列表
	address(params) {
		return fetchGet('/dm-api/address/list', params, true)
	},
	
	//添加或修改收货地址
	editAddress(params) {
		return fetchPost('/dm-api/address', params, true)
	},
	//省列表
	provinces(params) {
		return fetchGet('/dm-api/areas/provinces', params, false)
	},
	//市列表
	citys(provinceId) {
		return fetchGet('/dm-api/areas/provinces/' + provinceId, null, false)
	},
	//区列表
	areas(cityId) {
		return fetchGet('/dm-api/areas/cities/' + cityId, null, false)
	},
	//设置默认地址
	defaultAddress(params) {
		return fetchPost('/dm-api/address/default', params, true)
	},
	//获取默认地址
	getDefaultAddress(params) {
		return fetchGet('/dm-api/address/default', params, true)
	},
	//删除地址
	deleteAddress(params) {
		return fetchPost('/dm-api/address/delete', params, true)
	},
	//下单
	submitOrder(params) {
		return fetchPost('/dm-api/order/', params, true)
	},
	//修改个人
	saveUser(params) {
		return fetchPost('/dm-api/user/edit', params, true)
	},
	//上传头像
	saveHead(params) {
		return fetchPost('/dm-api/upload/image', params, true, 'updataImg')
	},
	// 上传视频
	uploadVideo(params) {
		return fetchPost('/dm-api/upload/video', params, true)
	},
    //	接受邀请
	invite(params) {
		return fetchPost('/dm-api/invite/code', params, true)
	},
	//	微信分享
	wxShare(params) {
		return fetchGet('/dm-api/wechat/getjsapi/signpackage', params, true)
	},
	// 进入房间
	enterRoom(params) {
		return fetchGet('/dm-api/enter/machine', params, true)
	},
	// 积分商城商品详情
	goodsDetail(goodsId) {
		return fetchGet('/dm-api/pm/goods/' + goodsId, null, true)
	},
	// 积分商城商品兑换
	goodsExchange(params) {
		return fetchPost('/dm-api/pm/exchange', params, true)
	},
	// 会员中心
	memberCenter(params) {
		return fetchGet('/dm-api/member/center/v15', params, true)
	},
	// 获取充值会员卡详情
	memberCardInfo(params) {
		return fetchGet('/dm-api/charge/card/v15', params, true)
	},
	// 会员卡购买
	changeCard(params) {
		return fetchPost('/dm-api/charge/card/v15', params, true)
	},
	// 会员卡中心领取奖励
	receiveCard(params) {
		return fetchGet('/dm-api/task/receiveCard', params, true)
	},
	// 任务列表
	taskList(params) {
		return fetchGet('/dm-api/task/list', params, true)
	},
	// 领取任务奖励
	receiveTask(params) {
		return fetchGet('/dm-api/task/receive', params, true)
	},
	// 娃娃盒娃娃兑换
	convertDiamond(params) {
		return fetchPost('/dm-api/doll/diamond/exchange', params, true)
	},
}
