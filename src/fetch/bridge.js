import router from '@/router'
import common from '@/fetch/common'
import storage from '@/fetch/storage'
import querystring from 'querystring'
import axios from 'axios'

function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge)
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function() {
            callback(WebViewJavascriptBridge)
        }, false)
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}

setupWebViewJavascriptBridge(function(bridge) {
    //初始化
    if (common.isAndroid()) {
        bridge.init(function(message, responseCallback) {
            var data = {
                'Javascript Responds': 'Wee!'
            };
            responseCallback(data);
        })
    }



    // 跳转h5页面
    bridge.registerHandler('toViewPage', (data, responseCallback) => {
    	  router.push('/workerMessage')
        responseCallback()
    })

    // 绑定推送编号
    bridge.registerHandler('bindRegistrationId', (data, responseCallback) => {
        let token = storage.get('token')
        if (!token) {
            return responseCallback(0)
        }
        axios.post(process.env.API_HOST + '/user/updateInfo?access_token=' + token.accessToken, querystring.stringify({
            registrationId: data
        })).then(response => {
            responseCallback(1)
        }).catch(error => {
            responseCallback(0)
        })
    })

    // 上传地理位置
    bridge.registerHandler('uploadLocation', (data, responseCallback) => {
        let param = JSON.parse(data)

        // 判定是否为工人
        // if (storage.get('role') != 2) {
        //     return responseCallback(0)
        // }

        // 判断经纬度合法
        // if (!param.latitude || param.latitude == -1 || !param.longitude || param.longitude != -1) {
        //     return responseCallback(0)
        // }

        // 上传位置
        let token = storage.get('token')
        if (!token) {
            return responseCallback(0)
        }
        axios.post(process.env.API_HOST + '/location/add?access_token=' + token.accessToken, querystring.stringify({
            latitude: param.latitude,
            longitude: param.longitude
        })).then(response => {
            responseCallback(1)
        }).catch(error => {
            responseCallback(0)
        })
    })
})




export default {
    // 微信支付
    wechatPay(params) {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('callWeChatPay', JSON.stringify(params), response => {
                    resolve(response)
                })
            })
        })
    },

    // 支付宝支付
    alipay(params) {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('callAlipay', params, response => {
                    resolve(response)
                })
            })
        })
    },

    // 查询GPS
    getGPS() {
        return new Promise((resovle, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('getLocation', null, response => {
                    resovle(response)
                })
            })
        })
    },
    
    // 打电话
    callPhone(params) {
        return new Promise((resovle, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('callPhone', params, null)
            })
        })
    },

    // 微信OAuth认证
    wechatOAuth() {
        return new Promise((resolve, reject) => [
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('oauth', "1", response => {
                    resolve(response)
                })
            })
        ])
    },

    // 分享
    share(params) {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('share', JSON.stringify(params), response => {
                    resolve(response)
                })
            })
        })
    },

    // 选择图片
    choosePhoto() {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('choosePhoto', null, response => {
                    resolve(response)
                })
            })
        })
    },
    
    openGaoDeMap(params) {
    	return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('openGaoDeMap', JSON.stringify(params), response => {
                    resolve(response)
                })
            })
        })
    }
}