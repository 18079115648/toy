<template>
    <div class="content">
        <Header title="商品详情"></Header>
        <div class="goods-detail-content">
        	<div class="goods-img img-mask">
        		<img src="../../static/image/12.png" class="fullEle" />
        	</div>
        	<div class="goods-detail-text">
        		<div class="goods-name">
        			<span class="new">新品</span>
        			<span class="text">娃娃娃娃</span>
        		</div>
        		<div class="goods-operate">
        			<div class="goods-price">
        				<span>1500</span>积分
        			</div>
        			<div class="convert-btn btn-hover" v-tap="{ methods : openConvert }">立即兑换</div>
        		</div>
        	</div>
        	<div class="goods-image-text">
        		<p class="tit">商品介绍</p>
        		<div class="goods-rich-content">
        			
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
					<span class="plus" v-tap="{ methods : plus }">+</span>
				</div>
				<div class="convert-footer">
					<div class="convert-confirm btn-hover">确定兑换</div>
				</div>
			</div>
		</mt-popup>
    </div>
</template>

<script>

export default {
  data () {
    return {
    	menberCharge: [],
        diamondCharge:[],
        convertStatus: false,
        num: 1,   //兑换数量
    }
  },
  created(){
    this.$api.recharge().then(res => {
        this.diamondCharge = res.data.normal
        this.menberCharge = res.data.week
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
    	this.num++
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
.goods-img{
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
			}
		}
	}
	.convert-confirm{
		height: 0.62rem;
		line-height: 0.62rem;
		border-radius: 0.62rem;
		background: $bg-color;
		color: $btn-default-bgcolor;
	}
}
</style>
