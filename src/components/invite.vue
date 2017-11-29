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
	    }, err => {
	    	
	    })
  	}
  },
  methods: {
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
