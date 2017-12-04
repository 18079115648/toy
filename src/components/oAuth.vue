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
			this.loginSuccess()
	    }, err => {
	    	
	    })
    },
    methods: {
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


