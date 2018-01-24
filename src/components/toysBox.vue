<template>
  <div class="content">
  	<Header title="娃娃袋"></Header>
  	<div class="toys-content" v-show="toysList.length > 0">
  		<p class="total-dia">当前娃娃总价值为：
  			<img src="../../static/image/erdd.png"  />
	    	<span style="font-weight: 700;">{{ total}}</span>
  		</p>
  		
  		<div class="toys-list">
	    	<div class="toys-item" v-for="(item, index) in toysList" :key="index">
	    		<img class="toys-img" :src="item.img"  />
	    		<div class="toys-info">
	    			<p>{{item.name}}</p>
	    			<p>x{{item.num}}</p>
	    			<p></p>
	    		</div>	
	    		<div class="change-num">
	    			<img src="../../static/image/erdd.png"  />
	    			{{item.diamonds}}
	    		</div>
	    	</div>
	    	
	    	
	    </div>
	    
	    <p class="tip">
	  		<span class="tit">温馨提示：</span><span class="text">抓中娃娃后15天内未领取，系统将自动兑换成钻石</span>
	  	</p>
  	</div>
  	<div class="no_msg bg-color" v-show="toysList.length < 1 && loadEnd">
        <img src="../../static/image/none-toy.png"  />
        <div>您还没有抓到娃娃~</div>
    </div>
	  <div class="toys-operate" v-show="toysList.length > 0">
	  	<div class="charge-btn btn-operate btn-hover" @click="chargeShow = true">兑换钻石</div>
	  	<router-link to="/orderSubmit" class="get-btn btn-operate btn-hover">立即领取</router-link>
	  </div>  
	  <confirm-modal :show="chargeShow" @confirm_modal="charge" title="兑换钻石确认" @closeModal="chargeShow = false" :message="message"></confirm-modal>	
    <!--<router-link v-show="toysList.length > 0" to="/orderSubmit" class="btn-default btn-hover btn-receive">立即领取</router-link>-->
  </div>
</template>

<script>
import {Toast, Indicator } from 'mint-ui'
export default {
  data () {
    return {
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
			this.toysList = res.data.data
			this.total = res.data.total
			this.message = '当前所有娃娃可兑换 <span style="color: #00bc71;">' + this.total + '</span> 钻石'
    }, err => {
    	
    })
  },
  methods: {
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
	.toys-item{
		background: #fff;
		position: relative;
		border-radius: 0.2rem;
		overflow: hidden;
		display: flex;
		align-items: center;
		padding: 0.3rem;
		margin-bottom: 0.3rem;
		.toys-img{
			width: 1.6rem;
			height: 1.6rem;
			border-radius: 0.2rem;
		}
		.toys-info{
			height: 1.6rem;
			flex: 1;
			padding-left: 0.2rem;
			font-size: 0.28rem;
			p{
				padding: 0.06rem 0;
				color: #333;
			}
		}
		.change-num{
			display: flex;
			align-items: center;
			font-size: 0.3rem;
			font-weight: 600;
			img{
				width: 0.4rem;
				margin-right: 0.1rem;
			}
		}
	}
}
.toys-operate{
	position: absolute;
	width: 100%;
	left: 0;
	bottom: 0;
	height: 1rem;
	display: flex;
	background: #fff;
	.btn-operate{
		flex: 1;
		text-align: center;
		line-height: 1rem;
		font-size: 0.28rem;
		color: #00BC71;
		&.get-btn{
			background: #efefef;
			color: #000;
		}
	}
}
</style>
