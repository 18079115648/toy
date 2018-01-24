<template>
    <div class="content recharge-content">
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
            <div class="agree" >
            	<div class="agree-icon" @click="agree = !agree">
            		<i class="default select-icon iconfont icon-xuanze" v-show="agree" ></i>
            		<i class="default select-icon iconfont icon-weixuanzhong-01" v-show="!agree" ></i>
            	</div>
	            	
            	我已阅读并同意 <router-link to="/agree"> 会员卡购买规则 </router-link>
            </div>

            <div class="btn-default btn-hover recharge" :class="{'disabled': !agree}" v-tap="{ methods : recharge }">确认充值</div>
        </div>
        <mt-popup v-model="failShow" :closeOnClickModal="false" position="top" class="pay-fail-tip" :class="{'pay-success': isSuccess}">
	      <p v-html="failText"></p>
	    </mt-popup>
    </div>
</template>

<script>
import wx from 'weixin-js-sdk'
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
        id:this.$route.params.type,
        cardInfo:{
        	price: 0,
        	type: 3
        },
        agree: true,
        
        
        failShow: false,
        failText: '<img src="../../static/image/fail-pay.png" />支付失败',
        isSuccess: false
    }
  },
  created(){
    this.$api.chargeTextList({
    	platform: window.OPEN_DATA.platform
    }).then(res => {
        res.data.forEach((item) => {
        	if(item.itemId == this.id) {
        		this.cardInfo = item
        		return
        	}
        })
    }, err => {
    	
    })
  },
  methods: {
    recharge() {
		const self = this
		if(!this.agree) {
			return
		}
    	this.pay()
    	
    	window.__paySuccess = function(){
		    self.pay()
		}
		
		window.__payError = function(){
			self.isSuccess = false
			self.payTip('<img src="../../static/image/fail-pay.png" />充值失败')
		}
	    window.__payClose = function(){
	    	self.isSuccess = false
		    self.payTip('<img src="../../static/image/fail-pay.png" />用户取消充值')
		}	       
    },
    pay() {
    	const self = this
    	window.getOpenKey(function(msg){
    		self.$api.chargePay({
	    		openid: msg.data.openid,
	    		openkey: msg.data.openkey,
	    		platform: window.OPEN_DATA.platform,
	    		itemId: self.id
	    	}).then(res => {
				if(res.errCode == 0) {
					self.isSuccess = true
					self.payTip('<img src="../../static/image/succ-pay.png" />充值成功')
					setTimeout(() => {
						self.$router.go(-2)
					}, 2000)
				}else if(res.errCode == 44444) {
					window.popPayTips({
					    defaultScore : parseInt(parseFloat(self.cardInfo.price) * 10),
					    appid : 1106587346
					})
				}
		    }, err => {
		    	
		    })
		    
		})
    },
    payTip(text) {
    	this.failShow = true
		this.failText = text
		setTimeout(() => {
			this.failShow = false
		}, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../static/css/style.scss";
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
	color: $bg-text-color;
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
	color: $bg-text-color;
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
		color: $bg-text-color;
		text-decoration: underline;
		margin-left: 0.08rem;
	}
}
.recharge.disabled{
	background: #eee;
	color: #ccc;
}
</style>
