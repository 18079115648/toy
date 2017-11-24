<template>
    <div class="app">
    	<Header title="签到有礼"></Header>
    	<div class="sign-content">
    		<div class="sign-tip">
    			<img src="../../static/image/dddfvvv.png" />
    			<p>每天签到获得奖励，连续签到奖励多多。每天00：00自动刷新，漏签将重新开始。</p>
    		</div>
    		<div class="sign-process">
    			<div class="one-level">
    				<div class="sign-item" :class="{'active': signList[0].status}">
    					<div>
    						<img class="icon" src="../../static/image/wd.png"  />
    						<p class="shadow-text">{{signList[0].points}}</p>
    					</div>
    					<div class="shadow-text signed">
    						已<br />签
    					</div>
    				</div>
    				<img class="arror" src="../../static/image/566gg.png"  />
    				<div class="sign-item" :class="{'active': signList[1].status}">
    					<div>
    						<img class="icon" src="../../static/image/wd.png"  />
    						<p class="shadow-text">{{signList[1].points}}</p>
    					</div>
    					<div class="shadow-text signed">
    						已<br />签
    					</div>
    				</div>
    				<img class="arror" src="../../static/image/566gg.png"  />
    				<div class="sign-item" :class="{'active': signList[2].status}">
    					<div>
    						<img class="icon" src="../../static/image/wd.png"  />
    						<p class="shadow-text">{{signList[2].points}}</p>
    					</div>
    					<div class="shadow-text signed">
    						已<br />签
    					</div>
    				</div>
    			</div>
    			<div class="two-level">
    				<img src="../../static/image/344c.png"  />
    			</div>
    			<div class="one-level">
    				<div class="sign-item" :class="{'active': signList[5].status}">
    					<div>
    						<img class="icon" src="../../static/image/wd.png"  />
    						<p class="shadow-text">{{signList[5].points}}</p>
    					</div>
    					<div class="shadow-text signed">
    						已<br />签
    					</div>
    				</div>
    				<img class="arror" src="../../static/image/gghhh.png"  />
    				<div class="sign-item" :class="{'active': signList[4].status}">
    					<div>
    						<img class="icon" src="../../static/image/wd.png"  />
    						<p class="shadow-text">{{signList[4].points}}</p>
    					</div>
    					<div class="shadow-text signed">
    						已<br />签
    					</div>
    				</div>
    				<img class="arror" src="../../static/image/gghhh.png"  />
    				<div class="sign-item" :class="{'active': signList[3].status}">
    					<div>
    						<img class="icon" src="../../static/image/wd.png"  />
    						<p class="shadow-text">{{signList[3].points}}</p>
    					</div>
    					<div class="shadow-text signed">
    						已<br />签
    					</div>
    				</div>
    			</div>
    			<div class="three-level">
    				<img src="../../static/image/34dd.png"  />
    				<div class="sign-item" :class="{'active': signList[6].status}">
    					<div>
    						<img class="icon" src="../../static/image/wd.png"  />
    						<p class="shadow-text">{{signList[6].points}}</p>
    					</div>
    					<div class="shadow-text signed">
    						已<br />签
    					</div>
    				</div>
    			</div>
    			<div class="sign-btn btn-hover" :class="{'signed': !signStatus}" @click="sign">
    				我要签到
    			</div>
    		</div>
    	</div>
    </div>
</template>

<script>
import {Toast, Indicator } from 'mint-ui'
export default {
	data() {
	    return {
	    	signList: [],
	    	signStatus: null
	    }
	},
	created() {
		this.initData()
	},
	methods: {
		initData() {
			this.$api.signList().then(res => {
				this.signList = res.data.list
				this.signStatus = res.data.status
		    }, err => {

		    })
		},
		sign() {
			if(!this.signStatus) {
				return
			}
			Indicator.open()
			this.$api.sign().then(res => {
				this.signStatus = 0
				this.initData()
				Toast({
				  message: '修改成功',
				  position: 'middle',
				  iconClass: 'toast-icon icon-success',
				  duration: 1000
				})
		    }, err => {
		    	Indicator.close()
		    })
		}
	}

		
}
</script>

<style lang="scss" scoped>
.app{
	min-height: 100vh;
	background: url(../../static/image/dffcvv.png) repeat-y;
	background-size: 100%;
} 
.sign-content{
	padding: 0.36rem 0.8rem;
	.sign-tip{
		margin: 0 auto;
		width: 5.7rem;
		height: 3.4rem;
		padding: 0.6rem 0.4rem;
		background: url(../../static/image/123@3x.png) no-repeat center;
		background-size: 100% 100%;
		img{
			display: block;
			width: 4rem;
			margin: 0 auto;
		}
		p{
			text-indent: 2em;
			padding-top: 0.3rem;
			color: #555;
			line-height: 1.4;
		}
	}
	.sign-process{
		position: relative;
		margin: 0 auto;
		left: 0.02rem;
		width: 5.78rem;
		height: 6.8rem;
		padding: 0.6rem;
		background: url(../../static/image/13@3x.png) no-repeat center;
		background-size: 100% 100%;
	}
}
.one-level{
	display: flex;
	align-items: center;
	justify-content: center;
}
.arror{
	width: 0.44rem;
	margin: 0 0.1rem;
}
.sign-item{
	width: 1rem;
	height: 1.1rem;
	
	background-image: url(../../static/image/233fccc.png);
	background-size: 100% 100%;
	position: relative;
	.icon{
		display: block;
		margin: 0 auto;
		width: 0.3rem;
		margin-top: 0.1rem;
	}
	p{
		color: #fff;
		text-align: center;
		font-size: 0.32rem;
	}
	&.active{
		background-image: url(../../static/image/sw3444.png);
		display: block;
	}
	.signed{
		display: none;
		color: #fff;
		font-size: 0.32rem;
		line-height: 1.3;
		position: absolute;
		left: 50%;
		top: 50%;
		width: 100%;
		text-align: center;
		transform: translate(-50%, -50%);
	}
}
.two-level{
	display: flex;
	justify-content: flex-end;
	padding: 0.14rem 0.54rem;
	img{
		height: 0.44rem;
	}
}
.three-level{
	padding-top: 0.6rem;
	position: relative;
	display: flex;
	justify-content: center;
	&>img{
		position: absolute;
		top: 0.14rem;
		width: 0.94rem;
		left: 0.64rem;
	}
}
.sign-btn{
	width: 2.5rem;
	height: 0.7rem;
	border-radius: 0.2rem;
	text-align: center;
	line-height: 0.7rem;
	color: #FFFFFF;
	background: #f97295;
	margin: 0.44rem auto 0;
	&.signed{
		background: #ddd;
		color: #efefef;
	}
}
</style>