<template>
    <div class="app">
    	<div class="top">
    		<div class="bg"></div>
    		<img src="../../static/image/vv.png"  />
    	</div>
    	<div class="bottom">
    		<p class="login-tit">选择登录方式</p>
    		<div class="login-way">
    			<img src="../../static/image/rr.png" @click="wechatLogin" />
    			<img src="../../static/image/ff.png" @click="mobileLogin" />
    		</div>
    	</div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
	data() {
	    return {
	    	
	    }
	},
	created() {
		if(!this.$common.isWeixin()) {
			this.$router.replace('/mobileLogin')
		}
	},
	methods: {
		mobileLogin() {
			this.$router.push('/mobileLogin')
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
		height: 65vh;
		left:0;
		top:0;
		
		.bg{
			background: #ffed8d;
			width: 100%;
			height: 50vh;
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
		height: 35vh;
		left:0;
		bottom:0;
		padding: 1rem 2rem 0;
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

</style>