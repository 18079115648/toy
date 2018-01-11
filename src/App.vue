<template>
  <div id="app">
    <keep-alive>
		    <router-view v-if="$route.meta.keepAlive"></router-view>
	</keep-alive>
	<router-view v-if="!$route.meta.keepAlive"></router-view>

	<audio id="bg-audio" src='../static/audio/bgm03.mp3' preload loop></audio>
  </div>
</template>

<script>

export default {
	mounted() {
		this.$root.bgAudio = document.getElementById('bg-audio')
	}
}
</script>

<style lang="scss">
	#app{
		background: #f5f5f9;
		min-height: 100vh;
		position: relative;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
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
	.btn-default{
		width: 6.9rem;
		height: 0.8rem;
		line-height: 0.8rem;
		text-align: center;
		color: #333;
		font-size: 0.32rem;
		margin: 0 auto;
		background: #fdd152;
		border-radius: 0.8rem;
		letter-spacing: 2px;
		font-weight: 700;
	}
	.btn-hover:active{
		opacity: 0.7;
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
	.mint-switch-input:checked + .mint-switch-core {
	    border-color: #fdd152 !important;
	    background-color: #fdd152 !important;
	}
	.no_msg{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #C9CACA;
    font-size: .3rem;
    padding-top: 1.4rem;
    img{
        width: 2rem;
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

</style>
