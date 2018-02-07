import common from '@/fetch/common'
import storage from '@/fetch/storage'

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
})




export default {
    // 获取用户信息
    getUserInfo() {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('getUserInfo', null, response => {
                    resolve(JSON.parse(response))
                })
            })
        })
    },

    // 进入房间
    enterRoom(params) {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('enterRoom', params, response => {
                    resolve(response)
                })
            })
        })
    },
    // 调起app分享
    shareApp() {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('shareApp', null, response => {
                    resolve(response)
                })
            })
        })
    },
    // 播放视频
    playVideo(url) {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('playVideo', url, response => {
                    resolve(response)
                })
            })
        })
    },

    // 进入app指定页面
    enterAppPage(params) {
        return new Promise((resovle, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('enterAppPage', params, response => {
                    resovle(response)
                })
            })
        })
    },
    
    
}