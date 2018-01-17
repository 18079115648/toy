<template>
    <div class="content">
        <Header title="积分商城"></Header>
        <router-link class="recharge-record-link btn-hover" to="/paymentList">兑换记录</router-link>
        <div class="pagination-content">
            <div class="convert-list">
            	<div class="convert-list-item">
            		<div class="convert-goods-img img-mask">
            			<img class="fullEle" src="../../static/image/12.png"  />
            		</div>
            		<div class="convert-goods-info">
            			<p class="convert-goods-name">娃娃</p>
            			<p class="convert-goods-price"><span>1500</span>积分</p>
            		</div>
            	</div>
            	
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
    	menberCharge: [],
        diamondCharge:[],
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
    infoPayment(id){
        this.$router.push('/payment/'+id)
    }
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
.convert-list{
	padding: 0.3rem 0.15rem 0;
	display: flex;
	flex-wrap: wrap;
	.convert-list-item{
		width: 3.3rem;
		margin: 0 0.15rem 0.4rem;
		font-size: 0.28rem;
		color: #000000;
		
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
