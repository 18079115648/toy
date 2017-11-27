<template>
</template>

<script>
export default {
    created() {
        let code = ''
        window.location.search.split('&').forEach(value => {
            if (value.indexOf('code') >= 0) {
                code = value.split('=')[1]
            }
        })
        this.$weixin.getAccessToken(code).then(response => {
            this.$weixin.getUserInfo(response.access_token, response.openid).then(response => {
            	let data = {
                    openid: response.openid,
                    nickname: response.nickname,
                    avatar: response.headimgurl,
                }
                this.$storage.set('oauthInfo', data)
                this.wechatLogin(data)
            }).catch(error => {
                Promise.reject(error)
            })
        }).catch(error => {
            Promise.reject(error)
        })
    },
    methods: {
    	wechatLogin(data) {
    		const self = this
    		this.$api.wechatLogin({
    			nickname: data.nickname,
    			avatar: data.avatar,
    			oauthId: data.openid,
    			platform: this.$common.getPlatformType()
    			
    		}).then(res => {
				let accessToken = res.data.accessToken
                self.$token.refreshToken(accessToken.accessToken, accessToken.refreshToken, accessToken.expireTime)
				this.loginSuccess()
		    }, err => {
		    	
		    })
    	},
    	loginSuccess() {
			let redirectURI = '/index'
            if (this.$storage.get('history_url') && this.$storage.get('history_url') != '/login') {
                redirectURI = this.$storage.get('history_url')
            }
            this.$router.replace(redirectURI)
		}
    }
}
</script>


