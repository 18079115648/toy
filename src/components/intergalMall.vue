<template>
    <div class="content" :class="{'isHybrid' : isHybrid}">
        <Header back="hidden" v-if="!isHybrid">
        	<div class="mall-kind">
        		<router-link replace to="/intergalMall/2" :class="{'active' : type == 2}">碎片商城</router-link>
        		<router-link replace to="/intergalMall/1" :class="{'active' : type == 1}" >积分商城</router-link>
        	</div>
        </Header>
        <div class="user-amount">
        	<div class="fragment item">
        		<div class="icon img-mask">
        			<img class="fullEle" :src="`${imageUrl}/27@3x.png`">
        		</div>
        		碎片
        		<span> &nbsp;{{userFragment}}</span>
        	</div>
        	<div class="points item">
        		<div class="icon img-mask">
        			<img class="fullEle" :src="`${imageUrl}/26@3x.png`">
        		</div>
        		积分
        		<span> &nbsp;{{userPoints}}</span>
        	</div>
        	<router-link to="/convertList" class="record item">
        		<div class="icon img-mask">
        			<img class="fullEle" :src="`${imageUrl}/25@3x.png`">
        		</div>
        		兑换记录
        	</router-link>
        </div>
        <!--<div class="user-amount">
        	<i class="icon-duihuanqingkuang iconfont convert-icon"></i>
        	<router-link to="/convertList" class="record item">
        		<div class="icon img-mask">
        			<img class="fullEle" :src="`${imageUrl}/25@3x.png`">
        		</div>
        		兑换记录
        	</router-link>
        </div>-->
        <div class="pagination-content" id="page-content" :class="{'isHybrid' : isHybrid}">
        	<Pagination :render="render" :param="pagination" :autoload="false"  ref="pagination" :uri="currUrl" > 
		        <div class="convert-list" v-show="pagination.content.length > 0">
	            	<router-link :to="`/goodsDetail/${item.goods_id}/${type}`" v-tap class="convert-list-item" v-for="(item, index) in pagination.content" :key="index">
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
    	type: this.$route.params.type,
    	pagination: {
	        content: [],
	        loadEnd: false,
	        data: {
	        	page: 1,
	        	pageSize: 10
	        }
	    },
	    userPoints: 0,
	    userFragment: 0,
    }
  },
  computed: {
	changeUnit: function() {
		return (this.type == 1 ? '积分' : '碎片')
	},
  	currUrl: function() {
  		return (this.type == 1 ? '/dm-api/pm/goods' : '/dm-api/fragment')
  	},
  },
  beforeRouteUpdate (to, from, next) {
    this.type = to.params.type
    
	this.$refs.pagination.refresh()
	next()
  },
	activated() {
		(this.type == 1) && this.$router.replace(`/intergalMall/${this.type}`)
		this.$api.userInfo().then(res => {
			this.userPoints = res.data.points
			this.userFragment = res.data.fragmentCounts
	    }, err => {
	    	
	    })
		
	},
  mounted(){
	this.$refs.pagination.refresh()
	this.pageContent = document.getElementById('page-content')
  },
  methods: {
  	render(res) {
		res.data.forEach((item) => {
			if(this.type == 2) {
				item.goods_id = item.productId
				item.name = item.productName
				item.thumb = item.productImg
				item.points = item.num
			}
	    	this.pagination.content.push(item)
       })
		this.pageContent.scrollTop = 0
    }, 
  }
}
</script>

<style lang="scss" scoped>
@import "../../static/css/style.scss";
.isHybrid{
	.pagination-content{
		bottom:0 !important;
		top: 1rem !important;
	}
}
.content{
	background: #fff;
	min-height: 100vh;
}
.mall-kind{
	position: absolute;
	left: 1.4rem;
	right: 1.4rem;
	height: 100%;
	top: 0;
	display: flex;
	line-height: 0.85rem;
	text-align: center;
	a{
		font-weight: 700;
		font-size: 0.26rem;
		flex: 1;
		opacity: 0.6;
		color: $header-text-color;
		&.active{
			font-size: 0.28rem;
			color: $header-text-color;
			opacity: 1;
		}
	}
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
.user-amount{
	height: 1rem;
	display: flex;
	border-bottom: 1px solid #f2f2f2;
	/*.convert-icon{
		color: #f7b52d;
		font-size: 0.6rem;
		line-height: 1.4rem;
	}*/
	.item{
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		.icon{
			width: 0.4rem;
			height: 0.4rem;
			margin-right: 0.1rem;
			
		}
		span{
			color: #fd485c;
		}
	}
}
.pagination-content{
	top: 1.85rem;
}
.convert-list{
	display: flex;
	flex-wrap: wrap;
	/*padding: 0 0.1rem;*/
	.convert-list-item{
		width: 50%;
		font-size: 0.28rem;
		color: #000000;
		border-bottom: 1px solid #f2f2f2;
		border-right: 1px solid #f2f2f2;
		padding-bottom: 0.2rem;
		.convert-goods-img{
			overflow: hidden;
			height: 3.75rem;
			padding: 0.2rem;
		}
		.convert-goods-info{
			text-align: center;
			position: relative;
			top: -0.04rem;
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
