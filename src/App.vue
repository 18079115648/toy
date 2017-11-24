<template>
  <div id="app">
    <keep-alive>
		    <router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
</script>

<style lang="scss">
	#app{
		background: #f5f5f9;
		min-height: 100vh;
		position: relative;
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
</style>
