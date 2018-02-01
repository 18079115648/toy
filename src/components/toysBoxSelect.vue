<template>
  <div class="content">
  	<Header title="娃娃袋"></Header>
  	<div class="toys-content" v-show="toysList.length > 0">
  		<div class="toys-list">
  			<div class="toys-item-content" v-for="(item, index) in toysList" :key="index">
  				<div class="toys-item img-mask shadow-text" >
		    		<img class="toys-img" :src="item.img"  />
		    		<div class="operate-status img-mask" v-tap="{ methods : toggle, item: item }">
		    			<img class="fullEle" v-show="!item.isActive"  :src="`${imageUrl}/191@3x.png`"  />
		    			<img class="fullEle" v-show="item.isActive"  :src="`${imageUrl}/192@3x.png`"  />
		    		</div>
		    		<div class="change-num ">
		    			<img  :src="`${imageUrl}/erdd.png`"  />
		    			{{item.diamonds}}
		    		</div>
		    		<div class="toys-info">
		    			<p>{{item.name}}</p>
		    			<p>x{{item.num}}</p>
		    		</div>	
		    	</div>
		    	<div class="num-operate">
		    		<span class="operate" v-tap="{ methods : minus, item: item }">-</span>
		    		<span class="num">{{item.operateNum}}</span>
		    		<span class="operate" v-tap="{ methods : plus, item: item }">+</span>
		    	</div>
  			</div>
		    	
	    	
	    	
	    </div>
	    <div class="no_msg bg-color" v-show="toysList.length < 1 && loadEnd">
	        <img  :src="`${imageUrl}/none-toy.png`"  />
	        <div>您还没有抓到娃娃~</div>
	    </div>
  	</div>
  	
	  <div class="toys-operate" v-show="toysList.length > 0">
	  	<div class="charge-btn btn-operate btn-hover" @click="chargeShow = true">兑换钻石</div>
	  	<router-link to="/orderSubmit" v-tap class="get-btn btn-operate btn-hover">立即领取</router-link>
	  </div>  
  </div>
</template>

<script>
import {Toast, Indicator } from 'mint-ui'
export default {
  data () {
    return {
    	imageUrl: this.$store.state.imageUrl,
			toysList: [],
			total: 0,  //兑换总钻石数
			chargeShow: false,
			message: '',
			loadEnd: false
    }
  },
  created() {
  	this.$api.toysWin().then(res => {
  		this.loadEnd = true
  		res.data.data.forEach((item) => {
  			item.operateNum = 1
  			item.isActive = false
  			this.toysList.push(item)
  		})
			
			this.total = res.data.total
			this.message = '当前所有娃娃可兑换 <span class="duihuan">' + this.total + '</span> 钻石'
    }, err => {
    	
    })
  },
  methods: {
  	toggle(params) {
  		params.item.isActive = !params.item.isActive
  	},
  	minus(params) {
  		(params.item.operateNum > 1) && params.item.operateNum--
  	},
  	plus(params) {
  		(params.item.operateNum < params.item.num) && params.item.operateNum++
  	},
  	charge() {
  		this.$api.convertDiamond().then(res => {
	  		Toast({
				  message: '兑换成功',
				  position: 'middle',
				  iconClass: 'toast-icon icon-success',
				  duration: 800
				})
	  		setTimeout(() => {
	  			this.$router.replace('/index')
	  		}, 1000)
	    }, err => {
	    	
	    })
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../static/css/style.scss";
.toys-content{
	position: absolute;
	left: 0;
	top: 0.85rem;
	bottom: 1rem;
	width: 100%;
	
	padding: 0.2rem 0.2rem 0.3rem;
}
.toys-list{
	width: 100%;
	height: 100%;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
	border-radius: 0.2rem;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	align-content: flex-start;
	padding: 0.3rem 0.15rem 0;
	background: #fff;
	.toys-item-content{
		padding-bottom: 0.4rem;
	}
	.num-operate{
		display: flex;
		justify-content: center;
		height:0.6rem;
		span{
			background: #efefef;
			font-size: 0.32rem;
			line-height: 0.6rem;
			text-align: center;
			margin: 0 0.04rem;
			width: 0.6rem;
			&.num{
				width: auto;
				min-width: 1.4rem;
				padding: 0 0.2rem;
			}
		}
	}
	.toys-item{
		width: 3.1rem;
		height: 3.1rem;
		position: relative;
		border-radius: 0.2rem;
		overflow: hidden;
		margin: 0 0.15rem 0.1rem;
		color: #fff;
		font-weight: 700;
		.toys-img{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			border-radius: 0.2rem;
		}
		.operate-status{
			width: 0.4rem;
			height: 0.4rem;
			position: absolute;
			top: 0.1rem;
			left: 0.1rem;
			z-index: 8;
		}
		.toys-info{
			position: absolute;
			left: 0.18rem;
			right: 0.18rem;
			bottom: 0.15rem;
			font-size: 0.28rem;
			display: flex;
			justify-content: space-between;
		}
		.change-num{
			position: absolute;
			z-index: 5;
			left: 0.18rem;
			bottom: 0.7rem;
			display: flex;
			align-items: center;
			font-size: 0.28rem;
			font-weight: 600;
			img{
				width: 0.36rem;
				margin-right: 0.1rem;
			}
		}
	}
}
.toys-operate{
	position: absolute;
	width: 100%;
	left: 0;
	bottom: 0rem;
	height: 1rem;
	display: flex;
	background: #fff;
	.btn-operate{
		flex: 1;
		text-align: center;
		line-height: 1rem;
		font-size: 0.28rem;
		color: $bg-color;
		&.get-btn{
			background: #efefef;
			color: #000;
		}
	}
}
</style>
