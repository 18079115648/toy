<template>
    <div class="content">
        <Header title="订单中心"></Header>
	        
		<Pagination :render="render" :param="pagination"  ref="pagination" uri="/dm-api/order/list" v-show="pagination.content.length > 0">
			<div class="order-list">
				<router-link :to="'/orderDetails/' + item.orderSn" class="orderList_body" v-for="(item, index) in pagination.content" :key="index">
		            <div class="orderList_title">
		                <div><span style="color:#888">订单号：</span>{{item.orderSn}}</div>
		                <div v-if="item.status == 1">待发货</div>
		                <div style="color:#fa7296" v-if="item.status == 0">已发货</div>
		            </div>
		            <div class="puppets_img">
		                <div class="puppetsList" v-for="list in item.productList">
		                    <div class="img_body">
		                        <img :src="list.img">
		                    </div>
		                    <div>
		                        <div style="margin-bottom: .1rem;">{{list.name}}</div>
		                        <div>x{{list.num}}</div>
		                    </div>
		                </div>
		            </div>
		        </router-link>
			</div>
			    
		</Pagination>
	    <div class="no_msg" v-show="pagination.content.length<1 && pagination.loadEnd">
	        <img src="../../static/image/wfdfc.png">
            <div>暂无订单数据~</div>
	    </div>	
    </div>
</template>

<script>
export default {
  data () {
    return {
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
  created(){

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
}
.succeed{
    color: #EB6E8F;
}

</style>
