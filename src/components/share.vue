<template>
    <div class="content">
        <Header title="邀请好友"></Header>
        <div class="invite-receive">
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
        	<div class="receive btn-hover">分享邀请好友</div>
        </div>
    </div>
</template>

<script>

import { Toast } from 'mint-ui'
export default {
  data () {
    return {
		isWinxin: this.$common.isWeixin(),
		inviteCode: '',
		code:[]
    }
  },
  created() {
  	if(this.$common.isWeixin()) {
  		this.$api.userInfo().then(res => {
			this.code = res.data.inviteCode.split('')
			this.lineLink = 'http://' + location.host + '/#/share'
			this.imgUrl = '../../static/image/512.png'
			this.shareTitle = '超级疯狂抓娃娃'
			this.descContent = '疯狂抓娃娃，分享奖励多多！'
        	if(this.isWinxin) {
				this.wxShare(this.lineLink, this.imgUrl, this.shareTitle, this.descContent)
			}	
	    }, err => {
	    	
	    })
  	}
  },
  methods: {
    wxShare(lineLink, imgUrl, shareTitle, descContent) {
		let self = this
		this.$api.wxShare({
			url: window.location.href.split('#')[0]
		}).then((res) => {
			wx.config({
				debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: res.appId, // 必填，公众号的唯一标识
				timestamp: parseInt(res.timestamp), // 必填，生成签名的时间戳
				nonceStr: res.noncestr, // 必填，生成签名的随机串
				signature: res.signature, // 必填，签名，见附录1
				jsApiList: ['uploadImage', 'getLocation', 'chooseImage', 'previewImage', 'uploadImage', 'scanQRCode', 'chooseWXPay', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			})
			wx.ready(function() {
				self.$loadJssdk(lineLink, imgUrl, shareTitle, descContent, self.wxShare)
			})
			wx.error(function(res){
				self.wxShare(lineLink, imgUrl, shareTitle, descContent)
			});
		}).catch((err) => {
			console.log(err)
		})
	}
  }
}
</script>

<style lang="scss" scoped>
.content{
	padding: 0.4rem 0.8rem;
}
.invite-receive{
	height: 5.6rem;
	background: url(../../static/image/d33.png) no-repeat center;
	background-size: 100% 100%;
	padding: 0.6rem;
	position: relative;
	.invite-input{
		position: absolute;
		width: 4.7rem;
		left: 0.6rem;
		top: 8%;
		height: 0.7rem;
		border-radius: 0.7rem;
		background: #ffe889;
		padding:0 0.5rem;
		input{
			background: transparent;
			height: 100%;
			width: 100%;
			text-align: center;
			color: #f3ad00;
			line-height: 0.7rem;
		}
		input::-webkit-input-placeholder{
			color: #f3ad00;
		}
	}
	.invite-tip{
		position: absolute;
		width: 4.7rem;
		left: 0.6rem;
		top: 40%;
		h3{
			font-size: 0.28rem;
		}
		p{
			font-size: 0.24rem;
		}
	}
	.receive{
		position: absolute;
		width: 4.7rem;
		left: 0.6rem;
		top: 77%;
	}
}
.receive{
	width: 4.7rem;
	height: 0.66rem;
	line-height: 0.66rem;
	border-radius: 0.66rem;
	background: #f97295;
	text-align: center;
	color: #fff;
	margin: 0 auto;
}
.invite-content{
	background: #FFFFFF;
	border-radius: 0.2rem;
	margin-top: 0.6rem;
	padding-bottom: 0.5rem;
	.tit{
		color: #000000;
		text-align: center;
		padding: 0.4rem 0 0.6rem;
		font-size: 0.3rem;
	}
	.invite-code{
		display: flex;
		justify-content: center;
		margin-bottom: 1rem;
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
</style>
