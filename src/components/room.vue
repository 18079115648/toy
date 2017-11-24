<template>
    <div class="app" :style="{ height: wH + 'px' }">
    	<div class="room-top">
    		<img class="back" src="../../static/image/feee.png"  />
    		<img class="avatar" src="../../static/image/qd.png"  />
    		<div class="room-count shadow-text">
    			<p>当前房间人数</p>
    			<p>71</p>
    		</div>
    		<div class="price">
    			<img src="../../static/image/wd.png"  />
    			<span class="shadow-text">29</span>
    		</div>
    	</div>
    	<img class="view-change" src="../../static/image/dd33.png"  />
    	<div class="room-bottom">
    		<div class="detail">
    			<img src="../../static/image/d122.png"  />
    			<p class="shadow-text">详情</p>
    		</div>
    		<div class="begin btn-hover" @click="beginGame">
    			<p class="price">
    				<img src="../../static/image/wd.png"  />
    				<span class="shadow-text">29</span>
    			</p>
    			<p class="shadow-text begin-text">开始游戏</p>
    		</div>
    		<div class="rechatge">
    			<img src="../../static/image/ccc3.png"  />
    			<p class="shadow-text">充值</p>
    		</div>
    	</div>
    	<mt-popup v-model="readyStatus">
			<div class="ready-time shadow-text">
				<p>即将开始</p>
				<p class="time">{{readyTime}}</p>
			</div>
		</mt-popup>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
	data() {
	    return {
	    	wH: 0,
	    	readyStatus: false, //readyGO 倒计时3秒弹框
	    	readyTime: 3,
	    }
	},
	mounted() {	
		this.wH = document.getElementById('app').offsetHeight
	},
	methods: {
		beginGame() {
			this.readyStatus = true
//			Toast({
//			  message: '玩家正在游戏，请稍后！',
//			  position: 'bottom',
//			  duration: 1000
//			});
		}
	},
	

		
}
</script>

<style lang="scss" scoped>
.app{
	background: #6d6481 !important;
	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;
} 
.room-top{
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	padding: 0.2rem;
	color: #fff;
	.back{
		width: 1rem;
		margin-right: 0.2rem;
	}
	.avatar{
		width: 0.7rem;
		height: 0.7rem;
		border-radius: 50%;
	}
	.price{
		width: 1.7rem;
		height: 0.7rem;
		background: rgba(0,0,0,0.2);
		border-radius: 0.35rem;
		display: flex;
		align-items: center;
		padding-left: 0.2rem;
		margin-left: 0.2rem;
		img{
			width: 0.28rem;
			margin-right: 0.16rem;
		}
	}
	.room-count{
		text-align: center;
		flex: 1;
		font-size: 0.3rem;
		line-height: 1.2;
	}
}
.view-change{
	position: absolute;
	right: 0.2rem;
	top: 40%;
	width: 1.05rem;
}
.room-bottom{
	position: absolute;
	width: 100%;
	bottom: 0;
	display: flex;
	padding: 0.1rem;
	color: #fff;
	font-size: 0.3rem;
	&>div{
		background: rgba(0,0,0,0.2);
		border-radius: 0.2rem;
		height: 1.1rem;
		padding-top: 0.12rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 0.08rem;
		img{
			height: 0.44rem;
		}
		&>p{
			padding-bottom: 0.06rem;
		}
	}
	.detail, .rechatge{
		width: 1.7rem;
	}
	.begin{
		flex: 1;
		.price{
			display: flex;
			align-items: center;
			margin-left: 0.2rem;
			img{
				margin-right: 0.16rem;
			}
		}
		.begin-text{
			color: #ff83a8;
		}
		.begin-text.enabled{
			color: #6bf780;
		}
	}
}
.mint-popup{
	background: transparent;
}
.ready-time{
	font-size: 0.6rem;
	color: #fff;
	text-align: center;
	.time{
		font-size: 1rem;
	}
}
</style>