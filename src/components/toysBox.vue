<template>
  <div class="content">
  	<Header back="hidden" title="娃娃袋"></Header>
  	<div class="toys-content" v-show="toysList.length > 0">
  		<p class="total-dia">当前娃娃总价值为：
  			<img  :src="`${imageUrl}/erdd.png`"  />
	    	<span style="font-weight: 700;">{{ total}}</span>
  		</p>
  		
  		<div class="toys-list">
	    	<div class="toys-item img-mask shadow-text" v-for="(item, index) in toysList" :key="index">
	    		<img class="toys-img" :src="item.img"  />
	    		
	    		<div class="change-num ">
	    			<img  :src="`${imageUrl}/erdd.png`"  />
	    			{{item.diamonds}}
	    		</div>
	    		<div class="toys-info">
	    			<p>{{item.name}}</p>
	    			<p>x{{item.num}}</p>
	    		</div>	
	    	</div>
	    	
	    	
	    </div>
	    
	    <p class="tip">
	  		<span class="tit">温馨提示：</span><span class="text">抓中娃娃后15天内未领取，系统将自动兑换成钻石</span>
	  	</p>
  	</div>
  	<div class="no_msg bg-color" v-show="toysList.length < 1 && loadEnd">
        <img  :src="`${imageUrl}/none-toy.png`"  />
        <div>您还没有抓到娃娃~</div>
    </div>
	  <div class="toys-operate" v-show="toysList.length > 0">
	  	<router-link to="/toysBoxSelect/1" v-tap class="charge-btn btn-operate btn-hover">兑换钻石</router-link>
	  	<router-link to="/toysBoxSelect/2" v-tap class="get-btn btn-operate btn-hover">立即领取</router-link>
	  </div>  
	  <Menu actived="second"></Menu>
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
		loadEnd: false
    }
  },
  created() {
  	this.$api.toysWin().then(res => {
  		this.loadEnd = true
			this.toysList = res.data.data
			this.total = res.data.total
    }, err => {
    	
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../static/css/style.scss";
.toys-content{
	position: absolute;
	left: 0;
	top: 0.85rem;
	bottom: 2rem;
	width: 100%;
	
	padding: 0.3rem 0.2rem 1.5rem;
	.tip{
		position: absolute;
		left: 0.4rem;
		right: 0.4rem;
		bottom: 0.4rem;
		color: $bg-text-color;
		display: flex;
		.tit{
			width: 1.4rem;
		}
		.text{
			flex: 1;
			overflow: hidden;
		}
		
	}
}
.total-dia{
	display: flex;
	justify-content: center;
	align-items: center;
	color: $bg-text-color;
	font-size: 0.3rem;
	padding-bottom: 0.4rem;
	img{
		width: 0.4rem;
		margin-left: 0.2rem;
		margin-right: 0.06rem;
	}
}
.toys-list{
	position: absolute;
	left: 0.2rem;
	right: 0.2rem;
	top: 1.04rem;
	bottom: 1.4rem;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
	border-radius: 0.2rem;
	display: flex;
	flex-wrap: wrap;
	padding: 0.3rem 0.15rem;
	background: #fff;
	.toys-item{
		width: 3.1rem;
		height: 3.1rem;
		position: relative;
		border-radius: 0.2rem;
		overflow: hidden;
		margin: 0 0.15rem 0.3rem;
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
	bottom: 1rem;
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
