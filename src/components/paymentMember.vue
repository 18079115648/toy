<template>
    <div class="content">
        <Header title="订单确认"></Header>
        
        <div class="payment_body">
            <div class="payment">
                <div class="payment_left">
                    <p class="payment-name shadow-text">{{cardInfo.title}}</p>
                    <p class="desc">{{cardInfo.desc}}</p>
                </div>
                <div class="payment_right">
                    <div>&yen; {{parseFloat(cardInfo.price).toFixed(2)}}</div>
                </div>
            </div>
			<div class="payment-kind-desc">
				<p class="desc-text">
					{{cardInfo.detail}}
				</p>
				<div class="member-profit-process">
					<p class="tit">领取说明：</p>
					<p>1、个人中心 → 会员中心 → 领取钻石</p>
					<p>2、首页 → 福利中心 → 领取钻石</p>
					<p>3、当日钻石必须当天领取，逾期失效</p>
				</div>
			</div>
            <div class="payment_way">
            	<div class="pay-item" @click="payWay = 2">
            		<img class="pay-icon" src="../../static/image/555.png">
	                <div class="payment_way_text">微信支付</div>
	                <i class="default iconfont icon-xuanze" v-show="payWay == 2"></i>
	                <img class="select-icon" v-show="payWay != 2" src="../../static/image/rrrr.png">
            	</div>  
            	<div class="pay-item" @click="payWay = 1"  v-if="!isWinxin">
            		<img class="pay-icon" src="../../static/image/444.png">
	                <div class="payment_way_text">支付宝支付</div>
	                <i class="default iconfont icon-xuanze" v-show="payWay == 1" ></i>
	                <img class="select-icon" v-show="payWay != 1" src="../../static/image/rrrr.png">
            	</div>
	              
            </div>
            <div class="agree">
            	<div class="agree-icon" @click="agree = !agree">
            		<i class="default select-icon iconfont icon-xuanze" v-show="agree" ></i>
            		<i class="default select-icon iconfont icon-weixuanzhong-01" v-show="!agree" ></i>
            	</div>
	            	
            	我已阅读并同意 <router-link to="/agree"> 会员卡购买规则 </router-link>
            </div>

            <div class="btn-default btn-hover recharge" :class="{'disabled': !agree}" v-tap="{ methods : recharge }">确认充值</div>
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
        type:this.$route.params.type,
        cardInfo:{
        	price: 0
        },
        payWay: 2,   //1 支付宝   2 微信
        agree: true
    }
  },
  created(){
    this.$api.memberCardInfo({
    	type: this.type
    }).then(res => {
        this.cardInfo = res.data
    }, err => {
    	
    })
  },
  methods: {
    recharge() {
//  	this.$api.changeCard({
//	    	buyType: this.type,
//	    	type: this.payWay
//	    }).then(res => {
//	    	document.write(res.data)
////	        this.cardInfo = res.data
//	    }, err => {
//	    	
//	    })
//  	if(this.isWinxin) {
//  		this.$api.payment({
//		        id: this.id,
//		        type: 2,
//		        tradeType: 'JSAPI'
//		    }).then(res => {
//				function onBridgeReady() {
//					WeixinJSBridge.invoke(
//						'getBrandWCPayRequest', {
//				           "appId": res.data.app_id,     //公众号名称，由商户传入     
//				           "timeStamp": res.data.time_stamp,       //时间戳，自1970年以来的秒数     
//				           "nonceStr": res.data.nonce_str,  //随机串     
//				           "package": 'prepay_id=' + res.data.prepay_id,      
//				           "signType":'MD5',         //微信签名方式：     
//				           "paySign": res.data.pay_sign //微信签名 
//				        },
//						function(res) {
//							if(res.err_msg == "get_brand_wcpay_request:ok") {
//								Toast({
//									message: '充值成功',
//									position: 'middle',
//									iconClass: 'toast-icon icon-success',
//									duration: 1000
//								})
//								setTimeout(() => {
//									self.$router.go(-1)
//								}, 500)
//							}
//						}
//					);
//				}
//				if(typeof WeixinJSBridge == "undefined") {
//					if(document.addEventListener) {
//						document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
//					} else if(document.attachEvent) {
//						document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
//						document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
//					}
//				} else {
//					onBridgeReady();
//				}
//		    }, err => {
//		        
//	        })
//  	}else {
//  		if(this.payWay == 1) {
//  			this.$api.payment({
//			        id: this.id,
//			        type: 3,
//			        returnUrl: 'http://' + window.location.host + '/#/index'
//			    }).then(res => {
//		            document.write(res.data)
//			    }, err => {
//			        
//		        })
//			    return
//  		}
//  		this.$api.payment({
//		        id: this.id,
//		        type: 2,
//		        tradeType: 'MWEB'
//		    }).then(res => {
//				window.location.replace(res.data.mweb_url + '&redirect_url=http://' + window.location.host + '/#/index')
//		    }, err => {
//		        
//	        })
//  	}
	    	
        
    }
  }
}
</script>

<style lang="scss" scoped>

.payment_body{
    width: 100%;
    height: auto;
    padding: .3rem .2rem 0.5rem;
    
}
.payment{
    width: 100%;
    background: #fff;
    border-radius: 0.15rem;
    display: flex;
    justify-content: space-between;
    padding: 0.24rem .3rem;
    align-items: center;
    font-size: .32rem;
    font-weight: 700;
    
}
.payment_left{
    color: #fff;
    .payment-name{
    	/*font-weight: normal;*/
    	font-size: 0.3rem;
    	color: #ededed;
    }
    .desc{
    	text-align: center;
    	color: #969696;
    	font-weight: normal;
    	font-size: 0.24rem;
    	padding-top: 0.06rem;
    }
    
}

.payment_right{
    font-size: .32rem;
    line-height: .6rem;
}
.payment-kind-desc{
	color: #fff;
	padding: 0.3rem;
	font-size: 0.24rem;
	.desc-text{
		padding-bottom: 0.2rem;
	}
	.member-profit-process{
		line-height: 1.7;
	}
}
.payment_way{
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
    	.select-icon, .default{
    		font-size: 0.4rem;
    		line-height: 1;
    		color: #00BC71;
    		width: 0.4rem;
    		margin-right: 0.14rem;
    	}
    }
}
.agree{
	padding: 0.2rem 0.15rem 1.2rem;
	color: #fff;
	display: flex;
	align-items: center;
	.agree-icon{
		width: 0.8rem;
		height: 0.8rem;
		position: relative;
		.select-icon{
			font-size: 0.36rem;
    	line-height: 1;
    	width: 0.36rem;
    	position: absolute;
    	left: 50%;
    	top: 50%;
    	transform: translate(-50%, -50%);
		}
	}
	a{
		color: #fff;
		text-decoration: underline;
		margin-left: 0.08rem;
	}
}
.recharge.disabled{
	background: #eee;
	color: #ccc;
}
</style>
