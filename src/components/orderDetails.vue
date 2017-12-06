<template>
    <div class="content">
        <Header title="订单中心"></Header>
        <div class="orderDetails_body">
            <div class="express_body">
                <div class="express">
                    <div class="express_img"></div>
                    <div class="orderDetails_msg">
                        <div class="wait" style="color: #00913a;" v-if="orderDetail.status == 1">等待发货</div>
                        <div class="wait" style="color:#fa7296" v-if="orderDetail.status == 0">已发货</div>
                        <div class="orderDetails_text" v-if="orderDetail.status == 0"> 
                        	<span>{{orderDetail.expressName}}</span>
                        	<span>{{orderDetail.expressNo}}</span>
                        </div>
                        <div class="orderDetails_text" v-if="orderDetail.status == 1"> 
                        	暂无快递号
                        </div>
                    </div>
                    <div class="express_border"></div>
                </div>
                <div class="express">
                    <div class="contact_img"></div>
                    <div class="orderDetails_msg">
                        <div class="address">{{orderDetail.address}}</div>
                        <div class="orderDetails_text">{{orderDetail.consignee}}  {{orderDetail.mobile}}</div>
                    </div>
                </div>
            </div>
			<div class="toys-list">
				<div class="puppets_img" v-for="list in orderDetail.productList">
	                <div class="puppetsList">
	                    <div class="img_body">
	                        <img :src="list.img">
	                    </div>
	                    <div>
	                        <div style="margin-bottom: .1rem;">{{list.name}}</div>
	                        <div>x{{list.num}}</div>
	                    </div>
	                </div>
	            </div>
			</div>
	            
            <div class="order_list">
                <div style="margin-bottom: .1rem;">订单号：{{orderDetail.orderSn}}</div>
                <div>创建时间：{{orderDetail.createTime}}</div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  data () {
    return {
      orderSn:this.$route.params.orderSn,
      orderDetail:{},
    }
  },
  created(){
    this.$api.orderDetail({
        orderSn:this.orderSn
    }).then(res => {
        this.orderDetail = res.data
        if(!res.data.status) {
        	switch (res.data.type) {
				case 1:
				  this.orderDetail.expressName = '顺丰快递'
				  break;
				case 2:
				  this.orderDetail.expressName = '申通快递'
				  break;
				case 3:
				  this.orderDetail.expressName = '韵达快递'
				  break;
				case 4:
				  this.orderDetail.expressName = '天天快递'
				  break;
				case 5:
				this.orderDetail.expressName = '天天快递'
				  this.title = ''
				  break;
			}
        }
        
    }, err => {
        
    })
  },
  methods: {
  	
  }
}
</script>

<style lang="scss" scoped>
.orderDetails_body{
    width: 100%;
    height: auto;
    padding: .3rem .3rem;
    font-size: .3rem;
}
.express_body{
    background-color: #fff;
    border-radius: 0.15rem;
    margin-bottom: .3rem;
}
.express{
    display: flex;
    align-items: center;
    padding: .2rem .3rem;
    position: relative;
}
.express_img{
    width: .5rem;
    height: .5rem;
    background: url('../../static/image/dd.png') no-repeat;
    background-size: .5rem .35rem;
    background-position: center;
}
.contact_img{
    width: .5rem;
    height: .5rem;
    background: url('../../static/image/3344.png') no-repeat;
    background-size: .35rem .5rem;
    background-position: center;
}
.orderDetails_msg{
    padding-left: .3rem;
    flex: 1;
}
.express_border{
    width: 96%;
    position: absolute;
    bottom: 0;
    left: 2%;
    border-bottom: solid 1px #f2f2f2;
}
.wait{
    margin-bottom: .1rem;
    color:#559B5B;
    font-size: .3rem;
}
.address{
    margin-bottom: .1rem;
    font-size: .3rem;
}
.orderDetails_text{
    color: #666;
    font-size: .28rem;
}

.puppets_img{
    border-bottom: 1px solid #f2f2f2;
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
    &:last-of-type{
    	border-bottom: none;
    }
}
.puppetsList{
    display: flex;
    padding: .3rem 0;
}
.order_list{
    padding: .3rem .3rem;
    color: #666;
    font-size: .28rem;
    background-color: #fff;
    border-radius: 0.15rem;
}
.toys-list{
	padding: 0.1rem 0.3rem;
	border-radius: 0.15rem;
	background: #fff;
	margin-bottom: 0.3rem;
}
</style>
