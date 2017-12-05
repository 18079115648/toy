<template>

    <div class="content">
        <Header title="钻石充值"></Header>
        <div class="payment_body">
            <div class="payment">
                <div class="payment_left">
                    <img class="diamond-icon" src="../../static/image/wd.png">
                    <span class="payment_left_text">{{payment.money}}</span>
                </div>
               
                <div class="payment_right">
                    <div>&yen; {{payment.price}}</div>
                </div>
            </div>

            <div class="payment_way">
            	<div class="pay-item" @click="payWay = 1"  v-if="!isWinxin">
            		<img class="pay-icon" src="../../static/image/444.png">
	                <div class="payment_way_text">支付宝支付</div>
	                <img class="select-icon" v-show="payWay == 1" src="../../static/image/bbb.png">
	                <img class="select-icon" v-show="payWay != 1" src="../../static/image/rrrr.png">
            	</div>
	            <div class="pay-item" @click="payWay = 2">
            		<img class="pay-icon" src="../../static/image/555.png">
	                <div class="payment_way_text">微信支付</div>
	                <img class="select-icon" v-show="payWay == 2" src="../../static/image/bbb.png">
	                <img class="select-icon" v-show="payWay != 2" src="../../static/image/rrrr.png">
            	</div>    
            </div>

            <div class="btn-default btn-hover recharge" @click="recharge">确认支付</div>
        </div>
    </div>
</template>

<script>
import wx from 'weixin-js-sdk'
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
    	isWinxin: this.$common.isWeixin(),
        id:this.$route.params.id,
        payment:{},
        payWay: 1,   //1 支付宝   2 微信
    }
  },
  created(){
    this.$api.recharge().then(res => {
        res.data.forEach((item) => {
        	if(item.id == this.id) {
        		this.payment = item
        		return
        	}
        })
    }, err => {
    	
    })
  },
  methods: {
    recharge() {
    	if(this.isWinxin) {
    		
    	}else {
    		if(this.payWay == 1) {
    			this.$api.payment({
			        id: this.id,
			        type: 3,
			        returnUrl: 'http://' + window.location.host + '/#/index'
			    }).then(res => {
		            document.write(res.data)
			    }, err => {
			        
		        })
			    return
    		}
    		this.$api.payment({
		        id: this.id,
		        type: 2,
		        tradeType: 'MWEB'
		    }).then(res => {

		    }, err => {
		        
	        })
    	}
	    	
        
    }
  }
}
</script>

<style lang="scss" scoped>
.payment_body{
    width: 100%;
    height: auto;
    padding: .3rem .2rem;
    
}
.payment{
    width: 100%;
    height: 1rem;
    background: #fff;
    border-radius: 0.15rem;
    display: flex;
    justify-content: space-between;
    padding: 0 .3rem;
    align-items: center;
    margin-bottom: .5rem;
    font-size: .36rem;
    font-weight: 700;
}
.payment_left{
    display: flex;
    align-items: center;
    div{
        width: .34rem;
        height: .5rem;
        margin-right: .2rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .payment_left_text{
        
    }
    .diamond-icon{
    	width: 0.3rem;
    	margin-right: 0.2rem;
    }
    
}

.payment_right{
    font-size: .32rem;
    line-height: .6rem;
}
.payment_way{
    margin-bottom: 1.6rem;
    border-radius: 0.15rem;
    padding: 0.15rem 0.3rem;
    background: #fff;
    .pay-item{
    	display: flex;
    	align-items: center;
    	padding: 0.25rem 0;
    	border-bottom: 1px solid #f2f2f2;
    	&:last-of-type{
    		border-bottom: none;
    	}
    	.pay-icon{
    		width: 0.5rem;
    		margin-right: 0.2rem;
    	}
    	.payment_way_text{
    		flex: 1;
    		color: #000;
    		font-size: 0.3rem;
    	}
    	.select-icon{
    		width: 0.36rem;
    	}
    }
}

</style>
