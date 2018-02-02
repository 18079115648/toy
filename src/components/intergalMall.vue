<template>
    <div class="content" :class="{'isHybrid' : isHybrid}">
        <Header back="hidden" v-if="!isHybrid"  title="商城"></Header>
        <router-link v-if="!isHybrid" class="recharge-record-link btn-hover" to="/convertList">兑换记录</router-link>
        <div class="pagination-content" id="page-content" @scroll="scrollContent($event)" :class="{'isHybrid' : isHybrid}">
        	<Pagination :render="render" :param="pagination" :autoload="false"  ref="pagination" :uri="currUrl" >
		        <div class="mall-top">
		        	<div class="total-num" id="total-num">
		        		<img class="icon" :src="`${imageUrl}/2@3x.png`"  />
		        		39999
		        	</div>
		        	<div class="mall-nav-content">
		        		<div class="mall-nav" :class="{'position': navPosition}">
			        		<span :class="{'active': currUrl == '/dm-api/pm/goods'}" v-tap="{ methods : changeMall, url: '/dm-api/pm/goods' }">积分商城</span>
			        		<span :class="{'active': currUrl == '/dm-api/fragment'}" v-tap="{ methods : changeMall, url: '/dm-api/fragment' }">碎片商城</span>
			        	</div>
		        	</div>
			        	
		        </div>
		        
		        <div class="convert-list" v-show="pagination.content.length > 0">
	            	<router-link :to="`/goodsDetail/${item.goods_id}/${changeType}`" v-tap class="convert-list-item" v-for="(item, index) in pagination.content" :key="index">
	            		<div class="convert-goods-img img-mask">
	            			<img class="fullEle" :src="item.thumb"  />
	            		</div>
	            		<div class="convert-goods-info">
	            			<p class="convert-goods-name">{{item.name}}</p>
	            			<p class="convert-goods-price"><span>{{item.points}}</span>{{changeUnit}}</p>
	            		</div>
	            	</router-link>
	            </div>
		        <div class="no_msg" style="padding-top: 1.5rem;" v-if="pagination.content.length<1 && pagination.loadEnd">
		            <img :src="`${imageUrl}/ewd.png`">
		            <div>暂无商品~</div>
		        </div>
			</Pagination>
	            
        </div>
        <Menu v-if="!isHybrid" actived="third"></Menu>  
    </div>
</template>

<script>

export default {
  data () {
    return {
    	imageUrl: this.$store.state.imageUrl,
    	isHybrid: this.$common.isHybrid(),
    	currUrl: '/dm-api/pm/goods',
    	pagination: {
	        content: [],
	        loadEnd: false,
	        data: {
	        	page: 1,
	        	pageSize: 12
	        }
	    },
	    scrollH: 0,
	    navPosition: false,
    }
  },
  computed: {
  	changeUnit: function() {
  		return (this.currUrl == '/dm-api/fragment' ? '碎片' : '积分')
  	},
  	changeType: function() {
  		return (this.currUrl == '/dm-api/fragment' ? 2 : 1)
  	}
  },
  mounted(){
	this.$refs.pagination.refresh()
	this.scrollH = document.getElementById('total-num').offsetHeight
	this.pageContent = document.getElementById('page-content')
	console.log(this.scrollH)
  },
  methods: {
  	render(res) {
		res.data.forEach((item) => {
			if(this.currUrl == '/dm-api/fragment') {
				item.goods_id = item.productId
				item.name = item.productName
				item.thumb = item.productImg
				item.points = item.num
			}
	    	this.pagination.content.push(item)
        })
		this.pageContent.scrollTop = 0
    }, 
    scrollContent(e) {
    	this.navPosition = (e.target.scrollTop > this.scrollH ? true : false)
    },
    changeMall(params) {
    	if(this.currUrl == params.url) {
    		return
    	}
    	this.currUrl = params.url
    	this.$refs.pagination.refresh()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../static/css/style.scss";
.isHybrid{
	.pagination-content{
		bottom:0 !important;
		top: 0 !important;
	}
	.position{
		top: 0 !important;
	}
}
.content{
	background: #fff;
	min-height: 100vh;
}
.recharge-record-link{
	position: fixed;
	top: 0;
	right: 0;
	height: 0.85rem;
	line-height: 0.85rem;
	padding: 0 0.2rem;
	color: $header-text-color;
	z-index: 30;
	font-size: 0.28rem;
}
.content .pagination-content{
	bottom: 1rem;
}
.mall-top{
	.total-num{
		background: $bg-color;
		color: $bg-text-color;
		font-weight: 700;
		font-size: 0.48rem;
		height: 1.6rem;
		display: flex;
		align-items: center;
		justify-content: center;
		.icon{
			width: 0.4rem;
			margin-right: 0.15rem;
		}
	}
	.mall-nav-content{
		height: 0.9rem;
	}
	.mall-nav{
		display: flex;
		padding: 0 0.5rem;
		height: 0.9rem;
		line-height: 0.88rem;
		border-bottom: 1px solid #f2f2f2;
		width: 100%;
		position: relative;
		left: 0;
		top: 0;
		background: #fff;
		&.position{
			position: fixed;
			top: 0.85rem;
			z-index: 60;
		}
		span{
			flex: 1;
			text-align: center;
			color: #888;
			&.active{
				color: $bg-color;
			}
		}
	}
}
.convert-list{
	padding: 0.3rem 0.15rem 0;
	display: flex;
	flex-wrap: wrap;
	.convert-list-item{
		width: 3.3rem;
		margin: 0 0.15rem 0.4rem;
		font-size: 0.28rem;
		color: #000000;
		.convert-goods-img{
			overflow: hidden;
			height: 3.3rem;
			border-radius: 0.2rem;
			img.fullEle{
				border-radius: 0.2rem;
			}
		}
		.convert-goods-info{
			text-align: center;
			padding-top: 0.15rem;
			.convert-goods-price{
				color: #999;
				font-size: 0.26rem;
				span{
					color: #fd485c;
					font-size: 0.32rem;
					font-weight: 700;
					margin-right: 0.08rem;
				}
			}
		}
	}
}
</style>
