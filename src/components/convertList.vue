<template>
    <div class="content">
        <Header v-if="!isHybrid" title="兑换记录"></Header>
	    <div class="pagination-content" :class="{'isHybrid' : isHybrid}">
	    	<Pagination :render="render" :param="pagination" :autoload="false"  ref="pagination" uri="/dm-api/pm/exchanges" >
				<div class="order-list" v-show="pagination.content.length > 0">
					<div class="orderList_body" v-for="(item, index) in pagination.content" :key="index">
			            <div class="orderList_title">
			                <div><span style="color:#999">{{item.create_time}}</span></div>
			                <div style="color:#00bc71">
			                	<span v-if="item.exchangeType == 1">积分兑换</span>
			                	<span v-if="item.exchangeType == 2">碎片兑换</span>
			                </div>
			            </div>
			            <div class="puppets_img">
			                <div class="puppetsList">
			                    <div class="img_body">
			                        <img :src="item.goods_thumb">
			                    </div>
			                    <div class="convert-info">
			                        <div style="color: #000;">{{item.goods_name}}</div>
			                        <div style="color: #000;">x{{item.quantity}}</div>
			                        <div v-if="item.exchangeType == 1" style="margin-top: 0.1rem;"><span class="points">{{item.goods_points}}</span>积分</div>
			                    	<div v-if="item.exchangeType == 2" style="margin-top: 0.1rem;"><span class="points">{{item.fragmentNum}}</span>{{item.fragmentName}}碎片</div>
			                    </div>
			                </div>
			            </div>
			        </div>
				</div>
				<div class="no_msg bg-color" v-show="pagination.content.length<1 && pagination.loadEnd">
			        <img style="width: 1.4rem;" :src="`${imageUrl}/none-record.png`" >
		            <div>暂无兑换记录~</div>
			    </div>	   
			</Pagination>
		    
	    </div>    
			
    </div>
</template>

<script>
export default {
  data () {
    return {
    	imageUrl: this.$store.state.imageUrl,
    	isHybrid: this.$common.isHybrid(),
        pagination: {
	        content: [],
	        loadEnd: false,
	        data: {
	        	page: 1,
	        	pageSize: 10
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.isHybrid{
	top: 0 !important;
}
.orderList_body{
    width: 100%;
    height: auto;
    padding: .3rem .3rem;
    font-size: .28rem;
    display: block;
}
.orderList_title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem .3rem;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    border-bottom: solid 1px #eee;
    font-size: .28rem;
}
.puppets_img{
    padding: 0.15rem .3rem;
    background-color: #fff;
    border-radius: 0 0 10px 10px ;
    .img_body{
        width: 1.8rem;
        height: 1.8rem;
        margin-right: .3rem;
        img{
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 0.15rem;
        }
    }
}
.puppetsList{
    display: flex;
    padding: .15rem 0;
    align-items: center;
}
.succeed{
    color: #EB6E8F;
}
.convert-info{
	flex: 1;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0.06rem 0;
	min-height: 1.8rem;
	line-height: 1.4;
	.points{
		font-weight: 700;
	    font-size: 0.3rem;
	    color: #fd485c;
	    margin-right: 0.04rem;
	}
}
</style>
