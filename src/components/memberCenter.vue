<template>
    <div class="content">
        <Header title="会员中心"></Header>
	    <div class="member-list">
	    	<mt-swipe :auto="0" class="swipe-content" :showIndicators="memberCart.length > 1">
				<mt-swipe-item v-for="(item, index) in memberCart" :key="index">
					<div class="fullEle member-content">
						<div class="member-tit">
							<span v-if="item.type == 1">周卡会员</span>
							<span v-if="item.type == 2">月卡会员</span>
						</div>
						<div class="menber-info">
							<p class="member-time">
								{{item.erpireDate}}到期，
								<router-link to="/recharge" class="recharge-link">立即续费</router-link>
							</p>
							<div class="member-profit">
								<div class="profit-item">
									<p class="profit-name">已领取专属奖励</p>
									<p class="profit-num">
										<img src="../../static/image/erdd.png"  />
										{{item.totalMoney}}
									</p>
									<router-link :to="'/rewardList/' + item.type" class="reward-link">查看奖励明细 ></router-link>
								</div>
								<div class="profit-item">
									<p class="profit-name">每日可领取</p>
									<p class="profit-num">
										<img src="../../static/image/erdd.png"  />
										{{item.dayMoney}}
									</p>
									<a class="receive-btn finish" v-if="item.receiveStatus" >已领取</a>
									<a v-tap="{ methods : receiveCard, item: item }" class="receive-btn btn-hover" v-if="!item.receiveStatus" >立即领取</a>
								</div>
							</div>
						</div>
					</div>
				</mt-swipe-item>
			</mt-swipe>
	    </div> 
		<div class="link-list">
	    	<router-link to="/welfareCenter" class="link-item">
	    		<img src="../../static/image/11@3x.png" class="icon" />
	    		<p class="text">福利中心</p>
	    		<p style="padding-right: 0.3rem; color: #969696;">更多福利</p>
	    		<img src="../../static/image/wdd.png" class="more"  />
	    	</router-link>
	    </div>	
    </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
export default {
  data () {
    return {
       memberCart: [],
       
    }
  },
  created() {
  	Indicator.open()
  	this.$api.memberCenter().then(res => {
		this.memberCart = res.data
		setTimeout(() => {
			Indicator.close()
		}, 200)
    }, err => {
    	Indicator.close()
    })
  },
  mounted(){
	
  },
  methods: {
  	receiveCard(params) {
  		Indicator.open()
  		this.$api.receiveCard({
  			type: params.item.type
  		}).then(res => {
  			setTimeout(() => {
  			  params.item.receiveStatus = 1
			  Indicator.close()
			}, 200);
	    }, err => {
	    	Indicator.close()
	    })
  	}

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../static/css/style.scss";
.content{
	min-height: 100vh;
	background: #F5F5F9;
}
.member-list{
	height: 4.64rem;
	background: #21232e;
	
	color: #eee;
	.member-content{
		padding: 0.06rem 0.65rem;
	}
	a{
		color: $bg-text-color;
	}
	.member-tit{
		text-align: center;
		color: #e5e5e5;
		padding: 0.2rem 0;
		span{
			position: relative;
			&:before, &:after{
				content: '';
				position: absolute;
				top: 50%;
				transform: translateY(-50%) rotate(45deg);
				width: 0.1rem;
				height: 0.1rem;
				background: #fff;
			}
			&:before{
				left: -0.28rem;
			}
			&:after{
				right: -0.28rem;
			}
		}
	}
	.menber-info{
		background: $bg-color;
		border-radius: 0.2rem;
		height: 3.2rem;
		padding: 0.12rem;
		.member-time{
			display: inline-block;
			height: 0.48rem;
			line-height: 0.48rem;
			border-radius: 0.48rem;
			background: rgba(0,0,0,0.2);
			padding: 0 0.3rem;
			.recharge-link{
				text-decoration: underline;
			}
		}
		.member-profit{
			display: flex;
			text-align: center;
			padding-top: 0.3rem;
			color: $bg-text-color;
			.profit-item{
				flex: 1;
				.profit-num{
					display: flex;
					align-items: center;
					justify-content: center;
					color: $bg-text-color;
					font-size:0.3rem;
					font-weight:700;
					padding: 0.3rem 0;
					img{
						width: 0.38rem;
						margin-right: 0.06rem;
					}
				}
				.reward-link{
					display: inline-block;
					height: 0.6rem;
					line-height: 0.6rem;
				}
				.receive-btn{
					display: inline-block;
					height: 0.6rem;
					line-height: 0.6rem;
					border-radius: 0.6rem;
					padding: 0 0.45rem;
					background: rgba(255,255,255, 0.3);
					&.finish{
						background: transparent;
					}
				}
			}
				
		}
	}
}
.link-list{
	padding-left: 0.3rem;
	padding-right: 0.3rem;
	margin-top: 0.4rem;
	.link-item{
		height: 1rem;
		display: flex;
		align-items: center;
		background: #fff;
		border-radius: 0.2rem;
		padding: 0 0.3rem;
	  .icon{
	  	width: 0.36rem;
	  	margin-right: 0.3rem;
	  	position: relative;
	  }
	  .text{
	  	flex: 1;
	  	font-size: 0.28rem;
	  	color: #222;
	  }
	  .more{
	  	width: 0.14rem;
	  	
	  }
	}
}
</style>
