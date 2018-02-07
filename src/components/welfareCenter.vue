<template>
    <div class="content">
        <Header title="福利社" headClass="welfare-header" v-if="!isHybrid"></Header>
        <div class="welfare-content" :class="{'isHybrid' : isHybrid}">
        	<div class="sign-content" v-if="signList">
        		<p class="welfare-tit">
        			<span class="tit">{{signList.title}}</span>
        			<span class="tip">{{signList.desc}}</span>
        		</p>
        		<div class="sign-list">
        			<div class="sign-list-item" :class="{'sign': !item.status}" v-for="(item, index) in signList.data" :key="index">
        				<div class="unsign fullEle">
    						<img v-if="item.type == 1" class="icon" :src="`${imageUrl}/erdd.png`"  />
    						<img v-if="item.type == 2" class="icon" :src="`${imageUrl}/34cd.png`"  />
    						<p class="shadow-text">{{item.points}}</p>
    					</div>
    					<div class="shadow-text fullEle signed">
    						已<br />签
    					</div>
        			</div>
        		</div>
        		<div class="sign-btn border-btn btn-hover " :class="{'disabled-btn': signList.receiveStatus}" v-tap="{ methods : sign, status: signList.receiveStatus }">
        			<span v-show="!signList.receiveStatus">签到领取</span>
        			<span v-show="signList.receiveStatus">已领取</span>
        		</div>
        	</div>
        	<div class="member-content" v-if="chargeCard">
        		<p class="welfare-tit">
        			<span class="tit">{{chargeCard.title}}</span>
        			<span class="tip">{{chargeCard.desc}}</span>
        		</p>
        		<div class="member-list">
        			<div class="member-list-item" :class="{'month': item.type == 2}" v-for="(item, index) in chargeCard.data" :key="index">
        				<div class="member-name">
        					<span v-if="item.type == 1">周卡每日礼包</span>
        					<span v-if="item.type == 2">月卡每日礼包</span>
        				</div>
        				<div class="member-desc">{{item.erpireDate}}到期</div>
        				<div class="member-profit shadow-text">
        					<img :src="`${imageUrl}/erdd.png`"  />
        					{{item.dayMoney}}
        				</div>
        			</div>
        		</div>
        		<div class="border-btn btn-hover" :class="{'disabled-btn': chargeCard.receiveStatus}" v-tap="{ methods : receiveCard, status: chargeCard.receiveStatus }">
        			<span v-show="!chargeCard.receiveStatus">立即领取</span>
        			<span v-show="chargeCard.receiveStatus">已领取</span>
        		</div>
        	</div>
        	<div class="daily-task-content" v-if="dailyList">
        		<p class="welfare-tit">
        			<span class="tit">{{dailyList.title}}</span>
        			<span class="tip">{{dailyList.desc}}</span>
        		</p>
        		<div class="daily-list">
        			<div class="daily-list-item" v-for="(item, index) in dailyList.data" :key="index">
        				<div class="daily-task-icon flex-center">
        					<img :src="item.icon"  />
        				</div>
        				<p class="text" :class="{'finish': item.reached}">{{item.title}}/{{item.goal}}</p>
        				<span class="process">---</span>
        			</div>
        		</div>
        		<div class="tasks-rate flex-center">
        			<div class="rate">进度 <span class="bold">{{dailyList.reachedCount}}/{{dailyList.data.length}}</span></div>
        			<div class="profit flex-center">奖励 &nbsp;
        				<img class="dia-icon" :src="`${imageUrl}/erdd.png`"  />
        				<span class="bold">{{dailyList.reward}}</span>
        			</div>
        		</div>
        		<div v-tap="{ methods : receiveTask, status: dailyList.receiveStatus || (dailyList.data.length > dailyList.reachedCount), key: dailyList.key, item: dailyList }" class="border-btn btn-hover" :class="{'disabled-btn': dailyList.receiveStatus || (dailyList.data.length > dailyList.reachedCount)}">
        			<span v-show="!dailyList.receiveStatus">立即领取</span>
        			<span v-show="dailyList.receiveStatus">已领取</span>
        		</div>
        	</div>
        	<div class="grab-content" v-if="dailyShare">
        		<p class="welfare-tit">
        			<span class="tit">{{dailyShare.title}}</span>
        			<span class="tip">{{dailyShare.desc}}</span>
        		</p>
        		<div class="tasks-list">
        			<div class="tasks-list-item" v-for="(item, index) in dailyShare.data" :key="index">
        				<div class="tesks-info">
        					<p class="text">{{item.title}}
        						<img class="dia-icon" :src="`${imageUrl}/erdd.png`" />
        						<span class="num">+{{item.reward}}</span>
        					</p>
        					<p class="rate" v-if="item.goal > 0">每日最多可领取{{item.goal}}次</p>
        				</div>
        				<div v-tap="{ methods : receiveTask, status: item.receiveStatus || !item.reached , key: dailyShare.key, item: item  }" class="task-btn border-btn btn-hover" :class="{'disabled-btn': item.receiveStatus || !item.reached}">
        					<span v-show="!item.receiveStatus">立即领取</span>
        					<span v-show="item.receiveStatus">已领取</span>
        				</div>
        			</div>
        		</div>
        	</div>
        	<div class="grab-content" v-if="grabList">
        		<p class="welfare-tit">
        			<span class="tit">{{grabList.title}}</span>
        			<span class="tip">{{grabList.desc}}</span>
        		</p>
        		<div class="tasks-list">
        			<div class="tasks-list-item" v-for="(item, index) in grabList.data" :key="index">
        				<div class="tesks-info">
        					<p class="text">{{item.title}}
        						<img class="dia-icon" :src="`${imageUrl}/erdd.png`"  />
        						<span class="num">+{{item.reward}}</span>
        					</p>
        					<p class="rate">当前进度：{{item.progress > item.goal ? item.goal : item.progress}}/{{item.goal}}</p>
        				</div>
        				<div v-tap="{ methods : receiveTask, status: item.receiveStatus || (item.goal > item.progress), key: grabList.key, item: item  }" class="task-btn border-btn btn-hover" :class="{'disabled-btn': item.receiveStatus || (item.goal > item.progress)}">
        					<span v-show="!item.receiveStatus">立即领取</span>
        					<span v-show="item.receiveStatus">已领取</span>
        				</div>
        			</div>
        		</div>
        	</div>
        	<div class="grab-content" v-if="grabSuccList">
        		<p class="welfare-tit">
        			<span class="tit">{{grabSuccList.title}}</span>
        			<span class="tip">{{grabSuccList.desc}}</span>
        		</p>
        		<div class="tasks-list">
        			<div class="tasks-list-item" v-for="(item, index) in grabSuccList.data" :key="index">
        				<div class="tesks-info">
        					<p class="text">{{item.title}}
        						<img class="dia-icon" :src="`${imageUrl}/erdd.png`" />
        						<span class="num">+{{item.reward}}</span>
        					</p>
        					<p class="rate">当前进度：{{item.progress > item.goal ? item.goal : item.progress}}/{{item.goal}}</p>
        				</div>
        				<div v-tap="{ methods : receiveTask, status: item.receiveStatus || (item.goal > item.progress), key: grabSuccList.key, item: item  }" class="task-btn border-btn btn-hover" :class="{'disabled-btn': item.receiveStatus || item.goal > item.progress}">
        					<span v-show="!item.receiveStatus">立即领取</span>
        					<span v-show="item.receiveStatus">已领取</span>
        				</div>
        			</div>
        		</div>
        	</div>
        	<div class="grab-content" v-if="exchargeList">
        		<p class="welfare-tit">
        			<span class="tit">{{exchargeList.title}}</span>
        			<span class="tip">{{exchargeList.desc}}</span>
        		</p>
        		<div class="tasks-list">
        			<div class="tasks-list-item" v-for="(item, index) in exchargeList.data" :key="index">
        				<div class="tesks-info">
        					<p class="text">{{item.title}}
        						<img class="dia-icon" :src="`${imageUrl}/erdd.png`" />
        						<span class="num">+{{item.reward}}</span>
        					</p>
        					<p class="rate">当前进度：{{item.progress > item.goal ? item.goal : item.progress}}/{{item.goal}}</p>
        				</div>
        				<div v-tap="{ methods : receiveTask, status: item.receiveStatus || (item.goal > item.progress), key: exchargeList.key, item: item  }" class="task-btn border-btn btn-hover" :class="{'disabled-btn': item.receiveStatus || item.goal > item.progress}">
        					<span v-show="!item.receiveStatus">立即领取</span>
        					<span v-show="item.receiveStatus">已领取</span>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>
	    <img class="welfare-bottom-icon" :src="`${imageUrl}/122@2x.png`"  />	
    </div>
</template>

<script>
import {Toast, Indicator } from 'mint-ui'
export default {
  data () {
    return {
    	imageUrl: this.$store.state.imageUrl,
    	isHybrid: this.$common.isHybrid(), //是否是混合开发
        signList: undefined,      //签到
        chargeCard: undefined,    //会员卡
        grabList: undefined,      //抓取奖励
        grabSuccList: undefined,      //抓取成功奖励
        exchargeList: undefined,      //充值奖励
        dailyList: undefined,       //每日任务奖励
        dailyShare: undefined,
    }
  },
  created(){
	this.initData()
  },
  methods: {
  	initData() {
  		Indicator.open()
  		this.$api.taskList().then(res => {
			res.data.forEach((item) => {
				switch(item.key) {
					case 'sign':
						this.signList = item
						break;
					case 'charge_card':
						this.chargeCard = item
						break;
					case 'grab_reward':
						this.grabList = item
						break;
					case 'grab_success_reward':
						this.grabSuccList = item
						break;
					case 'charge_reward':
						this.exchargeList = item
						break;
					case 'day_task':
						this.dailyList = item
						break;
					case 'daily_share_rewards':
						this.dailyShare = item
						break;
				}
			})
			setTimeout(() => {
				Indicator.close()
			},200)
	    }, err => {
	    	Indicator.close()
	    })
  	},
  	//签到
  	sign(params) {
		if(params.status) {
			return
		}
		Indicator.open()
		this.$api.sign().then(res => {
			this.signList.receiveStatus = 1
			this.initData()
	    }, err => {
	    	Indicator.close()
	    })
	},
//	领取会员卡奖励
  	receiveCard(params) {
		if(params.status) {
			return
		}
		Indicator.open()
		let length = 0
		let receiveLength = 0
		this.chargeCard.data.forEach((item) => {
			if(!item.receiveStatus) {
				length++
				this.$api.receiveCard({
		  			type: item.type
		  		}).then(res => {
		  			receiveLength++
		  			item.receiveStatus = 1
		  			if(receiveLength == length) {
		  				setTimeout(() => {
		  				  this.chargeCard.receiveStatus = 1
			  			  Indicator.close()
						}, 200);
		  			}
			  			
			    }, err => {
			    	Indicator.close()
			    })
			}
		})
  	},
//	领取任务奖励
  	receiveTask(params) {
  		console.log(params)
  		if(params.status) {
			return
		}
  		Indicator.open()
		this.$api.receiveTask({
			childId: params.item.childId,
			taskKey: params.key
		}).then(res => {
			setTimeout(() => {
			  Indicator.close()
			  if(params.key == 'daily_share_rewards') {
			  	this.initData()
			  	return
			  }
			  params.item.receiveStatus = 1
  			  
			}, 200);
	  			
	    }, err => {
	    	Indicator.close()
	    })
  	},

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../static/css/style.scss";
.content{
	min-height: 100vh;
	background: $welfare-bgcolor;
}
.border-btn{
	border: 0.06rem solid $welfare-btn-color;
	height: 0.72rem;
	border-radius: 0.72rem;
	line-height: 0.6rem;
	text-align: center;
	color: $welfare-btn-color;
	background: $welfare-btn-bgcolor;
	font-weight: 700;
	width: 2.5rem;
	margin: 0 auto;
	text-align: center;
}
.disabled-btn{
	background: #efefef;
	color: #bbb;
	border-color: #efefef;
}
.welfare-bottom-icon{
	position: absolute;
	width: 5.8rem;
	left: 50%;
	bottom: 0;
	transform: translateX(-50%);
}
.welfare-content{
	position: absolute;
	left: 0.18rem;
	right: 0.18rem;
	bottom: 1.6rem;
	top: 0.9rem;
	overflow-y: auto;
	-webkit-overflow-scrolling : touch;
	border: 0.1rem solid $welfare-content-bordercolor;
	background: $welfare-content-bgcolor;
	border-radius: 0.08rem;
	padding: 0.25rem;
	padding-bottom: 0;
	&.isHybrid{
		top: 0.06rem;
	}
	& > div{
		background: #fff;
		border-radius: 0.2rem;
		padding: 0 0.2rem;
		margin-bottom: 0.3rem;
		padding-bottom: 0.34rem;
		.sign-list{
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			margin: 0 -0.1rem;
			padding-top: 0.16rem;
			padding-bottom: 0.15rem;
			.sign-list-item{
				width: 1.05rem;
				height: 1.15rem;
				border: 0.06rem solid $welfare-btn-color;
				border-radius: 0.2rem;
				background-image: url(#{$imageUrl}/38@2x.png);
				overflow: hidden;
				background-size: 100% 100%;
				margin: 0 0.22rem 0.3rem;
				color: #fff;
				font-weight: 700;
				font-size: 0.3rem;
				text-align: center;
				&.sign{
					background-image: url(#{$imageUrl}/39@2x.png);
					.unsign{
						display: none;
					}
				}
				.unsign{
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					line-height: 1;
					img.icon{
						height: 0.36rem;
						margin-bottom: 0.1rem;
					}
				}
				.signed{
					line-height: 1.2;
					padding-top: 0.16rem;
				}
			}
		}
		.member-list{
			padding: 0.1rem 0.2rem 0.2rem;
			.member-list-item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 0.8rem;
				padding: 0 0.4rem;
				border-radius: 0.8rem;
				background: #ff8689;
				color: #fff;
				margin-bottom: 0.25rem;
				&.month{
					background: #a1c6ff;
				}
				.member-name{
					font-size: 0.28rem;
					font-weight: 700;
				}
				.member-desc{
					font-size: 0.24rem;
				}
				.member-profit{
					display: flex;
					align-items: center;
					font-size: 0.32rem;
					font-weight: 700;
					img{
						width: 0.36rem;
						margin-right: 0.04rem;
						
					}
				}
			}
		}
		.daily-list{
			display: flex;
			padding: 0.2rem 0 0.3rem;
			text-align: center;
			margin: 0 -0.1rem;	
			.daily-list-item{
				flex: 1;
				position: relative;
				&:last-of-type{
					.process{
						display: none;
					}
				}
				.process{
					position: absolute;
					right: 0;
					top: 0.5rem;
					transform: translate(50%, -50%);
					width: 0.8rem;
					font-weight: 700;
					color: #743828;
					font-size: 0.32rem;
					line-height: 1rem;
					white-space: nowrap;
				}
				.daily-task-icon{
					border: 2px solid $welfare-btn-color;
					width: 1rem;
					height: 1rem;
					margin: 0 auto;
					border-radius:100%;
					img{
						height: 0.4rem;
					}
				}
				.text{
					margin: 0 -0.2rem;
					font-size: 0.22rem;
					padding-top: 0.12rem;
					&.finish{
						color: #f39800;
					}
				}
			}
		}
		.tasks-rate{
			padding-bottom: 0.35rem;
			.bold{
				color: #000;
				font-size: 0.28rem;
				font-weight: 700;
			}
			& > div{
				padding: 0 0.5rem;
			}
		}
		.tasks-list-item{
			border-top: 1px solid #f2f2f2;
			padding: 0.25rem 0;
			display: flex;
			align-items: center;
			.tesks-info{
				flex: 1;
				overflow: hidden;
				.text{
					padding-bottom: 0.08rem;
					display: flex;
					align-items: center;
					color: #000;
					font-size: 0.28rem;
					img{
						margin-left: 0.2rem;
						margin-right: 0.06rem;
					}
					.num{
						font-weight: 700;
						font-size: 0.28rem;
					}
				}
				.rate{
					color: #999999;
				}
			}
			.task-btn{
				width: 1.8rem;
			}
		}
	}
	.welfare-tit{
		padding: 0.25rem 0.15rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #969696;
		
		.tit{
			color: #000;
			font-size: 0.28rem;
			font-weight: 700;
		}
		.tip{
			font-size: 0.24rem;
		}
	}
}
</style>
