<template>
    <div class="content">
        <Header title="邀请好友" headClass="invite-header"></Header>
        <img class="bg-img" src="../../static/image/44@2x.jpg"  />
        <!--<div class="invite-receive">
        	<div class="invite-input">
        		<input type="tel" v-model="inviteCode" maxlength="20" placeholder="输入好友邀请码" />
        	</div>
        	<div class="invite-tip">
        		<h3>奖励规则:</h3>
        		<p>邀请好友加入，好友兑换邀请码后，您和好友将获得一定数量的钻石</p>
        	</div>
        	<div class="receive btn-hover" @click="receive">兑换钻石</div>
        </div>
        <div class="invite-content" v-if="isWinxin">
        	<p class="tit">我的邀请码</p>
        	<div class="invite-code" >
        		<span v-for="(item, index) in code" :key="index">{{item}}</span>
        	</div>
        	<div class="receive btn-hover" @click="show = true">分享邀请好友</div>
        </div>-->
        <div class="invite-content">
        	<p class="invite-tip">
        		邀请好友加入，好友兑换邀请码后，您和好友将获得一定数量的钻石
        	</p>
        	<div class="invite-bottom">
        		<div class="invite-receive">
		        	<div class="invite-input">
		        		<input type="tel" v-model="inviteCode" maxlength="20" placeholder="输入好友邀请码" />
		        	</div>
		        	<div class="receive btn-hover" v-tap="{ methods : receive }">立即兑换</div>
		        </div>
		        <div class="invite-my" >
		        	<p class="tit">我的邀请码</p>
		        	<div class="invite-code" >
		        		<span v-for="(item, index) in code" :key="index">{{item}}</span>
		        	</div>
		        	<div v-show="isWinxin" class="receive btn-hover" @click="show = true">分享邀请好友</div>
		        </div>
        	</div>
        </div>
        <share-tip v-show="show" @shareCancel="show = false"></share-tip>
    </div>
</template>

<script>
import wx from 'weixin-js-sdk'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
		isWinxin: this.$common.isWeixin(),
		inviteCode: '',
		code:[],
		
		show: false
    }
  },
  created() {
	this.$api.userInfo().then(res => {
		this.code = res.data.inviteCode.split('')
		if(!this.$common.isWeixin()) {
			return
		}
		let key = this.$storage.get('operatorKey') ? '?key=' + this.$storage.get('operatorKey') : ''
		this.lineLink = 'http://' + location.host + '/' + key + '/#/share/' + res.data.inviteCode
		this.imgUrl = this.$store.state.shareLogo
		this.shareTitle = this.appName
		this.descContent = '欢乐抓娃娃，分享奖励多多！'
		this.wxShare(this.lineLink, this.imgUrl, this.shareTitle, this.descContent)	
    }, err => {
    	
    })
  },
  methods: {
  	wxShare(lineLink, imgUrl, shareTitle, descContent) {
		let self = this
		this.$api.wxShare({
			url: window.location.href.split('#')[0]
		}).then((res) => {
			console.log(res)
			wx.config({
				debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: res.data.appId, // 必填，公众号的唯一标识
				timestamp: parseInt(res.data.timestamp), // 必填，生成签名的时间戳
				nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
				signature: res.data.signature, // 必填，签名，见附录1
				jsApiList: ['uploadImage', 'getLocation', 'chooseImage', 'previewImage', 'uploadImage', 'scanQRCode', 'chooseWXPay', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			})
			wx.ready(function() {
				self.$loadJssdk(lineLink, imgUrl, shareTitle, descContent, self.wxShare)
			})
		}).catch((err) => {
			console.log(err)
		})
	},
    receive() {
    	if(!this.inviteCode) {
    		Toast({
			  message: '请填写邀请码',
			  position: 'bottom',
			  duration: 1000
			});
			return
    	}
    	this.$api.invite({
    		code: this.inviteCode
    	}).then(res => {
			Toast({
			  message: '兑换成功',
			  position: 'middle',
			  iconClass: 'toast-icon icon-success',
			  duration: 1000
			})
			this.$router.go(-1)
	    }, err => {
	    	
	    })
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
	min-height: 100vh;
	background: #fdf2b7;
	padding: 3.3rem 0.25rem 0.2rem;
}
.bg-img{
	position: absolute;
	z-index: 0;
	left: 0;
	top: -0.3rem;
	width: 100%;
}
.receive{
	height: 0.68rem;
	line-height: 0.68rem;
	border-radius: 0.68rem;
	background: #fd485c;
	text-align: center;
	color: #fff;
	margin: 0 auto;
}
.invite-content{
	.invite-tip{
		padding: 0.1rem 0.3rem 0.2rem;
		color: #946134;
	}
	.invite-bottom{
		height: 7.6rem;
		background: url(../../static/image/45@2x.png) no-repeat;
		background-size: 100% auto;
		position: relative;
		.invite-receive{
			position: absolute;
			width: 3.8rem;
			left: 50%;
			transform: translateX(-50%);
			top: 0.9rem;
			.invite-input{
				height: 0.68rem;
				border-radius: 0.68rem;
				background: #fff;
				padding:0.1rem 0.5rem;
				margin-bottom: 0.4rem;
				input{
					background: transparent;
					height: 100%;
					width: 100%;
					text-align: center;
					color: #333;
					line-height: 0.48rem;
					font-size: 0.28rem;
				}
				input::-webkit-input-placeholder{
					color: #ddd;
				}
			}
		}
		.invite-my{
			position: absolute;
			width: 3.8rem;
			left: 50%;
			transform: translateX(-50%);
			top: 50%;
			.tit{
				color: #ab5608;
				text-align: center;
				padding-bottom: 0.3rem;
				font-size: 0.3rem;
			}
			.invite-code{
				display: flex;
				justify-content: center;
				margin-bottom: 0.5rem;
				span{
					width: 0.46rem;
					height: 0.56rem;
					text-align: center;
					line-height: 0.56rem;
					border-radius: 0.06rem;
					background: #946134;
					color: #fff;
					font-size: 0.3rem;
					margin: 0 0.06rem;
				}
			}
		}
	}
			
			
}
</style>
