<template>
    <!--<div class="app">
    	<div class="top">
    		<div class="bg"></div>
    		<img :src="`${imageUrl}/45534.jpg`"  />
    		<div class="miss" @click="miss">跳过</div>
    	</div>
    	<div class="bottom">
    		<p class="login-tit">选择登录方式</p>
    		<div class="login-way">
    			<img :src="`${imageUrl}/rr.png`" @click="wechatLogin" />
    			<img :src="`${imageUrl}/ff.png`" @click="mobileLogin" />
    		</div>
    	</div>
    </div>-->
</template>

<script>
import { Toast } from 'mint-ui'
export default {
	data() {
	    return {
	    	imageUrl: this.$store.state.imageUrl,
	    }
	},
	created() {
		this.$storage.remove('token')
//		this.$router.replace('/mobileLogin')
		this.$weixin.authorize()
//		if(!this.$common.isWeixin()) {
//			this.$router.replace('/mobileLogin')
//		}else {
//			this.$weixin.authorize()
//		}
	},
	methods: {
		miss() {
			this.$router.go(-1)
		},
		mobileLogin() {
			this.$router.replace('/mobileLogin')
		},
		wechatLogin() {
			this.$weixin.authorize()
		}
	},
	

		
}
</script>

<style lang="scss" scoped>
.app{
	background: #fff !important;
	position: relative;
	height: 100vh;
	.top{
		position: absolute;
		width: 100%;
		bottom: 3.1rem;
		left:0;
		top:0;
		
		.bg{
			background: #9ac84e;
			width: 100%;
			height: 100%;
		}
		img{
			position: absolute;
			width: 100%;
			left:0;
			bottom:0;
			z-index: 3;
		}
	}
	.bottom{
		position: absolute;
		width: 100%;
		height: 3.1rem;
		left:0;
		bottom:0;
		padding: 0 2rem 0;
		.login-tit{
			text-align: center;
			color: #222;
			position: relative;
			&:before{
				content: '';
				position: absolute;
				left: -0.4rem;
				top: 50%;
				transform: translateY(-50%);
				height: 0;
				border-top: 1px solid #ccc;
				width: 1rem;
			}
			&:after{
				content: '';
				position: absolute;
				right: -0.4rem;
				top: 50%;
				transform: translateY(-50%);
				height: 0;
				border-top: 1px solid #ccc;
				width: 1rem;
			}
		}
		.login-way{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-top: 0.6rem;
			img{
				width: 1.1rem;
				
			}
		}
		
	}
} 
.miss{
	position: fixed;
	right: 0.1rem;
	top: 0.2rem;
	font-size: 0.3rem;
	color: #fff;
	z-index: 10;
	padding: 0.2rem;
}
</style>