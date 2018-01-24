<template>
    <div class="content recharge-content">
        <Header title="充值"></Header>
        <router-link class="recharge-record-link btn-hover" to="/paymentList">充值记录</router-link>
        <div class="recharge_body">
            <div class="member-charge" v-if="menberCharge.week || menberCharge.month">
            	<p class="menber-tit kind-tit">超值会员</p>
            	<div class="charge-list">
            		<router-link :to="'/paymentMember/' + menberCharge.week.itemId" class="charge-item" v-if="menberCharge.week">
            			<img class="pop" src="../../static/image/7@2x.png"  />
            			<p class="tit shadow-text">{{menberCharge.week.title}}</p>
            			<p class="desc">{{menberCharge.week.desc}}</p>
            			<p class="price">&yen;{{menberCharge.week.price.toFixed(2)}}</p>
            		</router-link>
            		<router-link :to="'/paymentMember/' + menberCharge.month.itemId" class="charge-item" v-if="menberCharge.month">
            			<p class="tit shadow-text">{{menberCharge.month.title}}</p>
            			<p class="desc">{{menberCharge.month.desc}}</p>
            			<p class="price">&yen;{{menberCharge.month.price.toFixed(2)}}</p>
            		</router-link>
            	</div>
            </div>
            <div class="diamond-charge" v-show="diamondCharge.length > 0">
            	<p class="diamond-tit kind-tit">钻石充值</p>
            	<div class="charge-list">
            		<div v-tap="{ methods : infoPayment, item: item }" class="charge-item diamond" v-for="(item, index) in diamondCharge" :key="index">
            			<img class="pop" src="../../static/image/6@2x.png" v-if="index == 0"  />
            			<p class="tit shadow-text">
            				<img class="dia-icon" src="../../static/image/erdd.png" />
            				{{item.money}}
            			</p>
            			<p class="desc">{{item.title}}</p>
            			<p class="price">&yen;{{item.price.toFixed(2)}}</p>
            		</div>
            	</div>
            </div>
        </div>
        <confirm-modal :show="payShow" @confirm_modal="chargePay" @closeModal="payShow = false" :message="payText"></confirm-modal>
    	<mt-popup v-model="failShow" :closeOnClickModal="false" position="top" class="pay-fail-tip" :class="{'pay-success': isSuccess}">
	      <p v-html="failText"></p>
	    </mt-popup>
	    
    </div>
</template>

<script>

export default {
  data () {
    return {
    	menberCharge: {
    		week:null,
    		month: null
    	},
        diamondCharge:[],
        
        payShow: false,
        payText: '',
        currPayId: null,
        currPayPrice: null,
        
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
        	switch(item.type) {
				case 1:
					this.menberCharge.week = item
					break;
				case 2:
					this.menberCharge.month = item
					break;
				case 3:
					this.diamondCharge.push(item)
					break;
			}
        })
    }, err => {
    	
    })
  	
  },
  methods: {
	infoPayment(params){
		let item = params.item
    	this.payShow = true
    	this.currPayId = item.itemId
    	this.currPayPrice = parseFloat(item.price)
    	this.payText = '充值 <b style="color: #000;">' + item.price + '</b> 元获得<b style="color: #000;"> ' + item.money + ' </b>钻石'	
    },
    chargePay() {
    	const self = this
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
	    		itemId: self.currPayId
	    	}).then(res => {
				if(res.errCode == 0) {
					self.isSuccess = true
					self.payTip('<img src="../../static/image/succ-pay.png" />充值成功')
					setTimeout(() => {
						window.history.back()
					}, 2000)
				}else if(res.errCode == 44444) {
					window.popPayTips({
					    defaultScore : parseInt(self.currPayPrice * 10),
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
.recharge_body{
	position: absolute;
	left: 0;
	top: 0.85rem;
	bottom: 0.3rem;
	overflow-y: auto;
    -webkit-overflow-scrolling : touch;
    width: 100%;
    padding: 0.2rem .2rem 0;
    & > div{
    	background: #fff;
    	border-radius: 0.2rem;
    	padding: 0 0.3rem;
    	margin-bottom: 0.4rem;
    	.kind-tit{
    		padding: 0.22rem 0 0.26rem;
    		font-weight: 700;
    		font-size: 0.3rem;
    		&.menber-tit{
	    		color: #ffce45;
	    	}
	    	&.diamond-tit{
	    		color: #8ec1f4;
	    	}
    	}
	    	
    }
    .charge-list{
    	display: flex;
    	flex-wrap: wrap;
    	margin: 0 -0.15rem;
    	.charge-item{
    		background: #ffce45;
    		border-radius: 0.2rem;
    		width: 3.1rem;
    		margin: 0 0.15rem 0.3rem;
    		padding: 0.15rem;
    		text-align: center;
    		color: #fff;
    		position: relative;
    		display: flex;
    		flex-direction: column;
    		justify-content: space-between;
    		min-height: 2.1rem;
    		&.diamond{
    			background: #8ec1f4;
    			.price{
    				color: #8ec1f4;
    			}
    		}
    		.tit{
    			font-size: 0.3rem;
    			display: flex;
    			justify-content: center;
    			align-items: center;
    			font-weight: 700;
    			.dia-icon{
    				width: 0.4rem;
    				margin-right: 0.1rem;
    			}
    		}
    		.desc{
    			font-size: 0.24rem;
    			padding: 0.15rem 0 0.2rem;
    		}
    		.price{
    			height: 0.54rem;
    			line-height: 0.54rem;
    			display: inline-block;
    			background: #fff;
    			width: 2rem;
    			margin: 0 auto;
    			border-radius: 0.54rem;
    			color: #ffce45;
    			font-weight: 700;
    			font-size: 0.3rem;
    		}
    		.pop{
    			position: absolute;
    			left: 0;
    			width: 0.6rem;
    			top: -0.12rem;
    		}
    	}
    }

}
.recharge{
    width: 100%;
    height: 1rem;
    display: flex;
    padding: 0 .3rem;
    align-items: center;
    margin-bottom: .3rem;
    background: url('../../static/image/333.png') no-repeat;
    background-size: 100% 100%;
}
.recharge_left{
    display: flex;
    align-items: center;
    font-size: .33rem;
    color: #fff;
    font-size: .32rem;
    width: 2rem;
    text-shadow: 1px 0 0 #000,0 1px 0 #000,-1px 0 0 #000,0 -1px 0 #000;
    .diamond-icon{
    	width: 0.3rem;
    	margin-right: 0.2rem;
    }
    
}
.recharge_center{
    color: #956134;
    font-size: .28rem;
    font-weight: 500;
    flex: 1;
    overflow: hidden;
}
.recharge_right{
    color: #fc7298;
    height: 0.54rem;
    line-height: 0.54rem;
    border-radius: 0.54rem;
    width: 1.8rem;
    text-align: center;
    background: #fff;
    font-size: 0.3rem;
    font-weight: 700;
}

</style>
