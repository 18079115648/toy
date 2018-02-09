<template>

    <div class="content">
        <Header title="订单确认"></Header>
        <div class="payment_body">
            <div class="payment">
                <div class="payment_left">
                    <img class="diamond-icon" :src="`${imageUrl}/erdd.png`">
                    <span class="payment_left_text shadow-text">{{payment.money}}</span>
                </div>
                <div class="desc">{{payment.desc}}</div>
                <div class="payment_right">
                    <div>&yen; {{parseFloat(payment.price).toFixed(2)}}</div>
                </div>
            </div>

            <div class="payment_way">
            	<div class="pay-item" @click="payWay = 2">
            		<img class="pay-icon" :src="`${imageUrl}/555.png`">
	                <div class="payment_way_text">微信支付</div>
	                <i class="default iconfont " :class="[payWay == 2 ? 'icon-xuanze': 'icon-weixuanzhong-01']"></i>
            	</div>  
            	<!--<div class="pay-item" @click="payWay = 1"  v-if="!isWinxin">
            		<img class="pay-icon" :src="`${imageUrl}/444.png`">
	                <div class="payment_way_text">支付宝支付</div>
	                <i class="default iconfont" :class="[payWay == 1 ? 'icon-xuanze': 'icon-weixuanzhong-01']" ></i>
            	</div>-->
	              
            </div>

            <div class="btn-default btn-hover recharge" @click="recharge">确认充值</div>
        </div>
    </div>
</template>

<script>
import wx from 'weixin-js-sdk'
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
    	imageUrl: this.$store.state.imageUrl,
    	isWinxin: this.$common.isWeixin(),
        id:this.$route.params.id,
        payment:{},
        payWay: 2,   //1 支付宝   2 微信
    }
  },
  created(){
    this.$api.recharge().then(res => {
        res.data.normal.forEach((item) => {
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
    	const self = this
    	if(this.isWinxin) {
    		this.$api.payment({
		        id: this.id,
		        type: 2,
		        tradeType: 'JSAPI'
		    }).then(res => {
				function onBridgeReady() {
					WeixinJSBridge.invoke(
						'getBrandWCPayRequest', {
				           "appId": res.data.app_id,     //公众号名称，由商户传入     
				           "timeStamp": res.data.time_stamp,       //时间戳，自1970年以来的秒数     
				           "nonceStr": res.data.nonce_str,  //随机串     
				           "package": 'prepay_id=' + res.data.prepay_id,      
				           "signType":'MD5',         //微信签名方式：     
				           "paySign": res.data.pay_sign //微信签名 
				        },
						function(res) {
							if(res.err_msg == "get_brand_wcpay_request:ok") {
								Toast({
									message: '充值成功',
									position: 'middle',
									iconClass: 'toast-icon icon-success',
									duration: 1000
								})
								setTimeout(() => {
									self.$router.go(-1)
								}, 500)
							}
						}
					);
				}
				if(typeof WeixinJSBridge == "undefined") {
					if(document.addEventListener) {
						document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
					} else if(document.attachEvent) {
						document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
						document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
					}
				} else {
					onBridgeReady();
				}
		    }, err => {
		        
	        })
    	}else {
    		let key = this.$storage.get('key') ? '/?key=' + this.$storage.get('key') : ''
    		key += this.$storage.get('channelKey') ? '&channelKey=' + this.$storage.get('channelKey') : ''
    		if(this.payWay == 1) {
    			this.$api.payment({
			        id: this.id,
			        type: 3,
			        returnUrl: location.protocol + '//' + window.location.host + key + '/#/index'
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
				window.location.replace(res.data.mweb_url + '&redirect_url='+ location.protocol + '//' + window.location.host + key + '/#/index')
		    }, err => {
		        
	        })
    	}  
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../static/css/style.scss";
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
    font-size: .32rem;
    font-weight: 700;
    .desc{
    	text-align: center;
    	color: #969696;
    	font-weight: normal;
    	font-size: 0.26rem;
    }
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
        color: #eee;
    }
    
    .diamond-icon{
    	width: 0.4rem;
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
    	.iconfont, .icon-xuanze{
    		font-size: 0.4rem;
    		line-height: 1;
    		color: $checkbox-selected-color;
    		width: 0.4rem;
    		margin-right: 0.14rem;
    	}
    	.icon-weixuanzhong-01{
    		color: $checkbox-color;
    	}
    }
}

</style>
