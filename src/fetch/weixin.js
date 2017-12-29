import axios from 'axios'
import storage from './storage'
import router from '../router'

const APP_ID = process.env.WEIXIN.APP_ID
const APP_SECRET = process.env.WEIXIN.APP_SECRET

export default {
    // 认证
    authorize() {
    	let key = storage.get('operatorKey') ? '?key=' + storage.get('operatorKey') : ''
        let redirect = process.env.WEIXIN.REDIRECT_URI + key + '#/oauth'
        let authURI = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + APP_ID + '&redirect_uri=' + encodeURIComponent(redirect) + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
        window.location.replace(authURI)
    },

    // 获取凭证
    getAccessToken(code) {
        return new Promise((resolve, reject) => {
            let URI = '/wx-api/sns/oauth2/access_token?appid=' + APP_ID + '&secret=' + APP_SECRET + '&code=' + code + '&grant_type=authorization_code'
            axios.get(URI).then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 获取用户信息
    getUserInfo(accessToken, openid) {
        return new Promise((resolve, reject) => {
            let URI = '/wx-api/sns/userinfo?access_token=' + accessToken + '&openid=' + openid + '&lang=zh_CN'
            axios.get(URI, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }).then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(error)
            })
        })
    }
}