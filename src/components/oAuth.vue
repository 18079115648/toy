<template>
</template>

<script>
export default {
	data () {
	    return {
	      imageUrl: this.$store.state.imageUrl,
	    }
	},
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
            res.data.avatar = res.data.avatar ? res.data.avatar : `${this.imageUrl}/vvv.png`
			res.data.nickname = res.data.nickname ? res.data.nickname : '***'
			this.$storage.set('avatar', res.data.avatar)
			this.$storage.set('nickname', res.data.nickname)
			this.loginSuccess()
	    }, err => {
	    	
	    })
    },
    methods: {
    	loginSuccess() {
    		let key = this.$storage.get('key') ? '/?key=' + this.$storage.get('key') : ''
    		key += this.$storage.get('channelKey') ? '&channelKey=' + this.$storage.get('channelKey') : ''
			let redirectURI = '/index'
			window.location.replace('http://' + window.location.host + key + '/#/index')
//          this.$router.replace(redirectURI)
		}
    }
}
</script>


