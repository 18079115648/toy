<template>

    <div class="content">
        <Header title="钻石充值"></Header>
        <div class="payment_body">
            <div class="payment" v-for="item in payment" v-if="item.id == id">
                <div class="payment_left">
                    <img class="diamond-icon" src="../../static/image/wd.png">
                    <span class="payment_left_text">{{item.money}}</span>
                </div>
               
                <div class="payment_right">
                    <div>&yen; {{item.price}}</div>
                </div>
            </div>

            <div class="payment_way">
            	<div class="pay-item" v-if="!isWinxin">
            		<img class="pay-icon" src="../../static/image/444.png">
	                <div class="payment_way_text">支付宝支付</div>
	                <img class="select-icon" src="../../static/image/bbb.png">
            	</div>
	            <div class="pay-item" v-if="isWinxin">
            		<img class="pay-icon" src="../../static/image/555.png">
	                <div class="payment_way_text">微信支付</div>
	                <img class="select-icon" src="../../static/image/bbb.png">
            	</div>    
            </div>

            <div class="btn-default btn-hover recharge">确认支付</div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
    	isWinxin: this.$common.isWeixin(),
        id:this.$route.params.id,
        price:'',
        money:'',
        payment:[],
        type:1
    }
  },
  created(){
    this.$api.recharge().then(res => {
        this.payment = res.data
    }, err => {
    	
    })
  },
  methods: {
    confirmPay(){
        if(this.type == 3){
            Toast({
                message: '请选择支付方式',
                position: 'bottom',
                duration: 1000
            })
        }else{
            this.$api.payment({
                id: this.id,
                type: this.type
            }).then(res => {
                if(res.errMsg == 0){
                    Toast({
                        message: '充值成功',
                        position: 'bottom',
                        duration: 1000
                    })
                }
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
    padding: 0.3rem;
    background: #fff;
    .pay-item{
    	display: flex;
    	align-items: center;
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
