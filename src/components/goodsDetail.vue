<template>
    <div class="content">
        <Header title="商品详情"></Header>
        <div class="goods-detail-content">
        	<div class="goods-banner">
		    	<mt-swipe :auto="4000" class="swipe-content">
					<mt-swipe-item v-for="(item,index) in goodsInfo.pics" :key="index">
						<div class="goods-img img-mask">
			        		<img :src="item.pic" class="fullEle" />
			        	</div>
					</mt-swipe-item>
				</mt-swipe>
		    </div>
        	
        	<div class="goods-detail-text">
        		<div class="goods-name">
        			<span class="new">新品</span>
        			<span class="text">{{goodsInfo.name}}</span>
        		</div>
        		<div class="goods-operate">
        			<div class="goods-price">
        				<span>{{goodsInfo.points}}</span>积分
        			</div>
        			<div class="convert-btn btn-hover"  v-tap="{ methods : openConvert }">立即兑换</div>
        		</div>
        		<p class="tip" v-if="goodsInfo.goods_id == 1">提示：兑换的娃娃商品可在娃娃袋中查看</p>
        	</div>
        	<div class="goods-image-text">
        		<p class="tit">商品介绍</p>
        		<div class="goods-rich-content" v-html="goodsInfo.description">
        			
        		</div>
        	</div>
        </div>
        <mt-popup v-model="convertStatus" class="convert-content">
			<div>
				<div class="convert-tit">
					兑换数量
				</div>
				<div class="convert-body">
					<span class="minus" v-tap="{ methods : minus }">-</span>
					<span class="num">{{num}}</span>
					<span class="plus" :class="{disabled : checkPlus}" v-tap="{ methods : plus }">+</span>
				</div>
				<div class="convert-footer">
					<div class="convert-confirm btn-hover" :class="{disabled : checkConvert}" v-tap="{ methods : convertConfirm }">确定兑换</div>
				</div>
			</div>
		</mt-popup>
    </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
export default {
  data () {
    return {
    	goodsId: this.$route.params.id,
    	goodsInfo: {},
    	userPoints: 100, //用户积分
        convertStatus: false,
        num: 1,   //兑换数量
        
    }
  },
  computed: {
  	checkConvert: function() {
  		let totalPoints = parseInt(this.goodsInfo.points) * this.num
  		return (this.userPoints < totalPoints ? true : false )
  	},
  	checkPlus: function() {
  		let totalPoints = parseInt(this.goodsInfo.points) * (this.num + 1)
  		return (this.userPoints < totalPoints ? true : false )
  	}
  },
  created(){
  	Indicator.open('加载中...')
    this.$api.goodsDetail(this.goodsId).then(res => {
    	setTimeout(() => {
    		Indicator.close()
    	},200)
    	
        this.goodsInfo = res.data
    }, err => {
    	Indicator.close()
    })
    this.$api.userInfo().then(res => {
//		this.userPoints = res.data
    }, err => {
    	
    })
  },
  methods: {
    openConvert() {
    	this.num = 1
    	this.convertStatus = true
    },
    minus() {
    	this.num > 1 && this.num--
    },
    plus() {
    	if(this.checkPlus) {
    		Toast({
			  message: '当前积分不足',
			  position: 'bottom',
			  duration: 1500
			});
    		return
    	}
    	this.num++	
    },
    convertConfirm() {
    	this.convertStatus = false
    	Indicator.open()
    	this.$api.goodsExchange({
    		goods_id: this.goodsId,
    		quantity: this.num
    	}).then(res => {
    		Indicator.close()
			Toast({
			  message: '兑换成功',
			  position: 'middle',
			  iconClass: 'toast-icon icon-success',
			  duration: 800
			})
			setTimeout(() => {
			  this.$router.push('/convertList')
			}, 1000);
	    }, err => {
	    	Indicator.close()
	    })
    	
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../static/css/style.scss";
.content{
	background: #f5f5f9;
	min-height: 100vh;
}
.goods-banner,.goods-img{
	width: 100%;
	height: 7.5rem;
	background: #fff;
}
.goods-detail-text{
	padding: 0.25rem 0.2rem;
	background: #fff;
	.goods-name{
		display: flex;
		align-items: flex-start;
		padding-bottom: 0.2rem;
		.new{
			border: 1px solid #fd7584;
			color: #fd7584;
			font-size: 0.22rem;
			padding: 0.02rem 0.1rem;
			border-radius: 0.06rem;
		}
		.text{
			color: #000;
			font-size: 0.28rem;
			flex: 1;
			overflow: hidden;
			padding-left: 0.25rem;
		}
	}
	.goods-operate{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.goods-price{
			color: #999;
			font-size:0.24rem;
			span{
				font-weight: 700;
				font-size: 0.3rem;
				color: #fd485c;
				margin-right: 0.08rem;
			}
		}
		.convert-btn{
			padding: 0 0.35rem;
			color: #00BC71;
			border: 1px solid #00BC71;
			height: 0.62rem;
			line-height: 0.62rem;
			border-radius: 0.58rem;
		}
	}
	.tip{
		padding-top: 0.25rem;
		color: #bbb;
		font-size: 0.24rem;
	}
}
.goods-image-text{
	background: #fff;
	margin-top: 0.3rem;
	.tit{
		line-height: 1;
		padding: 0.3rem 0;
		padding-left: 0.48rem;
		position: relative;
		color: #000;
		&:before{
			position: absolute;
			content: '';
			border-left: 0.06rem solid #fd485c;
			left: 0.24rem;
			top: 0.28rem;
			bottom: 0.28rem;
			width: 0;
		}
		
	}
}
.convert-content{
	width: 4.5rem;
	background: #fff;
	border-radius: 0.2rem;
	padding: 0.4rem;
	text-align: center;
	font-size: 0.3rem;
	.convert-tit{
		color: #000;
	}
	.convert-body{
		padding: 0.8rem 0 1rem;
		display: flex;
		span{
			border: 1px solid #dbdbdb;
			width: 0.66rem;
			height: 0.66rem;
			line-height: 0.62rem;
			font-size: 0.32rem;
			font-weight: 700;
			margin: 0 0.06rem;
			&.num{
				flex: 1;
			}
			&.plus{
				color: $btn-default-bgcolor;
				background: $bg-color;
				border-color: $bg-color;
				&.disabled{
					background: #eee;
					border-color: #eee;
					color: #ccc;
				}
			}
		}
	}
	.convert-confirm{
		height: 0.62rem;
		line-height: 0.62rem;
		border-radius: 0.62rem;
		background: $bg-color;
		color: $btn-default-bgcolor;
		&.disabled{
			background: #eee;
			color: #ccc;
		}
	}
}
</style>
