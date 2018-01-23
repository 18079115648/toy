<template>
  <div id="app">
    <keep-alive>
		    <router-view v-if="$route.meta.keepAlive"></router-view>
	</keep-alive>
	<router-view v-if="!$route.meta.keepAlive"></router-view>

	<audio id="bg-audio" src='https://yingdd.oss-cn-hangzhou.aliyuncs.com/d0bda63fee3ad56ab8938d349b791fa1.mp3' preload loop></audio>
  </div>
</template>

<script>
import "../static/css/font/iconfont.css"
export default {
	mounted() {
		this.$root.bgAudio = document.getElementById('bg-audio')
	}
}
</script>

<style lang="scss">
	@import "../static/css/style.scss";
	#app{
		background: $bg-color;
		min-height: 100vh;
		position: relative;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.flex-center{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.dia-icon{
		width: 0.38rem;
	}
	.pagination-content{
		position: absolute;
		width: 100%;
		left: 0;
		top: 0.85rem;
		bottom: 0;
		overflow-y: auto;
		-webkit-overflow-scrolling : touch;
	}
	.mint-loadmore{
		min-height: 100% !important;
	}
	.mint-loadmore-bottom{
		display: none !important;
	}
	.mint-toast{
		z-index: 2100 !important;
	}
	.btn-default{
		width: 6.9rem;
		height: 0.8rem;
		line-height: 0.8rem;
		text-align: center;
		color: $btn-default-color;
		font-size: 0.3rem;
		margin: 0 auto;
		background: $btn-default-bgcolor;
		border-radius: 0.8rem;
		letter-spacing: 2px;
		font-weight: 700;
	}
	.btn-hover:active{
		opacity: 0.7;
	}
	input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
        color: #ccc;
  }
  input::-webkit-search-decoration,
	input::-webkit-search-cancel-button {
			display: none;
	}
	.shadow-text{
		text-shadow: 1px 0 0 #000,0 1px 0 #000,-1px 0 0 #000,0 -1px 0 #000;
		*filter: Glow(color=#000, strength=1);
	}
	.fullEle{
		display: block;
		width: 100%;
		height: 100%;
	}
	.fullAuto{
		display: block;
		height: 100%;
	}
	.toast-icon{
		width: 1.5rem;
		height: 1.5rem;
		display: inline-block !important;
		background-position: center;
		background-size: 100%;
		background-repeat: no-repeat;
	}
	.toast-icon.icon-success{
		background-image: url(../static/image/icon-success.png);
	}
	.v-modal{
		opacity: 0.7 !important;
	}
	.mint-popup, .mint-indicator{
		transition: none !important;
	}
	.mint-switch-input:checked + .mint-switch-core {
	    border-color: $bg-color !important;
	    background-color: $bg-color !important;
	}
	.mint-indicator-wrapper{
		z-index: 1000;
	}
	.no_msg{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #C9CACA;
    font-size: .3rem;
    padding-top: 3.5rem;
    &.bg-color{
    	color: $bg-text-color;
    }
    img{
        width: 1.8rem;
        display: block;
        margin-bottom: .6rem;
    }
  }
  .mint-actionsheet-listitem, .mint-actionsheet-button{
  	height: 0.9rem !important;
  	line-height: 0.9rem !important;
  	color: #007aff !important;
  	font-size: 0.3rem !important;
  }
  .mint-actionsheet-listitem{
  	border-color: #eee !important;
  }
  .member-list .mint-swipe-indicator.is-active{
  	background: #fff !important;
  }
  .mint-swipe-indicators{
  	bottom: 0.1rem !important;
  }
  .mint-swipe-indicator.is-active{
  	background: #ff385a !important;
  	opacity: 1 !important;
  }
	.img-mask{
		position: relative;
		&:before{
			content: '';
			position: absolute;
			z-index: 6;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			background: transparent;
		}
	}
</style>
