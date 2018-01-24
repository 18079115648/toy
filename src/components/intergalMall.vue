<template>
    <div class="content">
        <Header title="金币商城" v-if="!isHybrid"></Header>
        <router-link v-if="!isHybrid" class="recharge-record-link btn-hover" to="/convertList">兑换记录</router-link>
        <div class="pagination-content" :class="{'isHybrid' : isHybrid}">
        	<Pagination :render="render" :param="pagination" :autoload="false"  ref="pagination" uri="/dm-api/pm/goods" >
		        <div class="convert-list" v-show="pagination.content.length > 0">
	            	<router-link :to="'/goodsDetail/' + item.goods_id" class="convert-list-item" v-for="(item, index) in pagination.content" :key="index">
	            		<div class="convert-goods-img img-mask">
	            			<img class="fullEle" :src="item.thumb"  />
	            		</div>
	            		<div class="convert-goods-info">
	            			<p class="convert-goods-name">{{item.name}}</p>
	            			<p class="convert-goods-price"><span>{{item.points}}</span>金币</p>
	            		</div>
	            	</router-link>
	            </div>
		        <div class="no_msg" v-if="pagination.content.length<1 && pagination.loadEnd">
		            <img src="../../static/image/ewd.png">
		            <div>暂无商品~</div>
		        </div>
			</Pagination>
	            
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
    	isHybrid: this.$common.isHybrid(),
    	pagination: {
	        content: [],
	        loadEnd: false,
	        data: {
	        	page: 1,
	        	pageSize: 12
	        }
	    },
    }
  },
  mounted(){
	this.$refs.pagination.refresh()
  },
  methods: {
  	render(res) {
		res.data.forEach((item) => {
	    	this.pagination.content.push(item)
    	})
    },  
  }
}
</script>

<style lang="scss" scoped>
@import "../../static/css/style.scss";
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
.pagination-content.isHybrid{
	top: 0;
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
