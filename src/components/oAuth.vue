<template>
</template>

<script>
export default {
    created() {
    	const self = this
        let code = ''
        window.location.search.split('&').forEach(value => {
            if (value.indexOf('code') >= 0) {
                code = value.split('=')[1]
            }
        })
        this.$api.wechatLogin({
			code: code,
			platform: 5
		}).then(res => {
			let accessToken = res.data.accessToken
            self.$token.refreshToken(accessToken.accessToken, accessToken.refreshToken, accessToken.expireTime)
            this.$storage.set('hx', {id: res.data.hxId, password: res.data.hxPwd})
            this.$storage.set('user', res.data)
			this.loginSuccess()
	    }, err => {
	    	
	    })
    },
    methods: {
    	loginSuccess() {
    		let key = this.$storage.get('operatorKey') ? '/?key=' + this.$storage.get('operatorKey') : ''
			let redirectURI = '/index'
			window.location.replace('http://' + window.location.host + key + '/#/index')
//          this.$router.replace(redirectURI)
		}
    }
}
</script>


