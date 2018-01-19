<template>
    <div class="content">
        <Header title="福利社" headClass="welfare-header"></Header>
        <div class="welfare-content">
        	<div class="sign-content" v-if="signList">
        		<p class="welfare-tit">
        			<span class="tit">{{signList.title}}</span>
        			<span class="tip">连续签到才可领取后续礼包</span>
        		</p>
        		<div class="sign-list">
        			<div class="sign-list-item" :class="{'sign': !item.status}" v-for="(item, index) in signList.data" :key="index">
        				<div class="unsign fullEle">
    						<img class="icon" src="../../static/image/erdd.png"  />
    						<p class="shadow-text">{{item.points}}</p>
    					</div>
    					<div class="shadow-text fullEle signed">
    						已<br />签
    					</div>
        			</div>
        		</div>
        		<div class="sign-btn border-btn btn-hover " :class="{'disabled-btn': !signList.receiveStatus}">立即领取</div>
        	</div>
        	<div class="member-content" v-if="chargeCard">
        		<p class="welfare-tit">
        			<span class="tit">{{chargeCard.title}}</span>
        			<!--<span class="tip">最后领取截止2018-12-30</span>-->
        		</p>
        		<div class="member-list">
        			<div class="member-list-item" :class="{'month': item.type == 2}" v-for="(item, index) in chargeCard.data" :key="index">
        				<div class="member-name">
        					<span v-if="item.type == 1">周卡每日礼包</span>
        					<span v-if="item.type == 2">月卡每日礼包</span>
        				</div>
        				<div class="member-desc">{{item.erpireDate}}到期</div>
        				<div class="member-profit shadow-text">
        					<img src="../../static/image/erdd.png"  />
        					{{item.dayMoney}}
        				</div>
        			</div>
        		</div>
        		<div class="border-btn btn-hover" :class="{'disabled-btn': !chargeCard.receiveStatus}">立即领取</div>
        	</div>
        	<div class="daily-task-content">
        		<p class="welfare-tit">
        			<span class="tit">每日任务礼包</span>
        			<span class="tip">当前全部完成才可领取</span>
        		</p>
        		<div class="daily-list">
        			<div class="daily-list-item">
        				<div class="daily-task-icon flex-center">
        					<img src="../../static/image/43@3x.png"  />
        				</div>
        				<p class="text finish">分享APP/1</p>
        			</div>
        			<span class="process">---</span>
        			<div class="daily-list-item">
        				<div class="daily-task-icon flex-center">
        					<img src="../../static/image/42@3x.png"  />
        				</div>
        				<p class="text">邀请好友/1</p>
        			</div>
        			<span class="process">---</span>
        			<div class="daily-list-item">
        				<div class="daily-task-icon flex-center">
        					<img src="../../static/image/41@3x.png"  />
        				</div>
        				<p class="text">积分抽奖/1</p>
        			</div>
        			<span class="process">---</span>
        			<div class="daily-list-item">
        				<div class="daily-task-icon flex-center">
        					<img src="../../static/image/40@3x.png"  />
        				</div>
        				<p class="text">抓取商品 1/3</p>
        			</div>
        		</div>
        		<div class="tasks-rate flex-center">
        			<div class="rate">进度 <span class="bold">1/4</span></div>
        			<div class="profit flex-center">奖励 &nbsp;
        				<img class="dia-icon" src="../../static/image/erdd.png"  />
        				<span class="bold">15</span>
        			</div>
        		</div>
        		<div class="border-btn btn-hover">立即领取</div>
        	</div>
        	<div class="grab-content" v-if="grabList">
        		<p class="welfare-tit">
        			<span class="tit">{{grabList.title}}</span>
        		</p>
        		<div class="tasks-list">
        			<div class="tasks-list-item" v-for="(item, index) in grabList.data" :key="index">
        				<div class="tesks-info">
        					<p class="text">{{item.title}}
        						<img class="dia-icon" src="../../static/image/erdd.png"  />
        						<span class="num">+{{item.reward}}</span>
        					</p>
        					<p class="rate">当前进度：{{item.progress}}/100</p>
        				</div>
        				<div class="task-btn border-btn btn-hover">立即领取</div>
        			</div>
        		</div>
        	</div>
        	<div class="grab-content">
        		<p class="welfare-tit">
        			<span class="tit">充值奖励礼包</span>
        		</p>
        		<div class="tasks-list">
        			<div class="tasks-list-item">
        				<div class="tesks-info">
        					<p class="text">累计充值满20次
        						<img class="dia-icon" src="../../static/image/erdd.png"  />
        						<span class="num">+10</span>
        					</p>
        					<p class="rate">当前进度：10/100</p>
        				</div>
        				<div class="task-btn border-btn btn-hover">立即领取</div>
        			</div>
        			<div class="tasks-list-item">
        				<div class="tesks-info">
        					<p class="text">累计充值满20次
        						<img class="dia-icon" src="../../static/image/erdd.png"  />
        						<span class="num">+10</span>
        					</p>
        					<p class="rate">当前进度：10/100</p>
        				</div>
        				<div class="task-btn border-btn btn-hover">立即领取</div>
        			</div>
        		</div>
        	</div>
        </div>
	    <img class="welfare-bottom-icon" src="../../static/image/122@2x.png"  />	
    </div>
</template>

<script>
export default {
  data () {
    return {
        signList: undefined,      //签到
        chargeCard: undefined,    //会员卡
        grabList: undefined,      //抓取奖励
    }
  },
  created(){
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
			}
		})
    }, err => {
    	
    })
  },
  methods: {
  	

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content{
	min-height: 100vh;
	background: #fbcb44;
}
.border-btn{
	border: 0.06rem solid #743828;
	height: 0.72rem;
	border-radius: 0.72rem;
	line-height: 0.6rem;
	text-align: center;
	color: #743828;
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
	border: 0.1rem solid #743828;
	background: #ffe67b;
	border-radius: 0.08rem;
	padding: 0.25rem;
	padding-bottom: 0;
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
				border: 0.06rem solid #743828;
				border-radius: 0.2rem;
				background-image: url(../../static/image/38@2x.png);
				overflow: hidden;
				background-size: 100% 100%;
				margin: 0 0.22rem 0.3rem;
				color: #fff;
				font-weight: 700;
				font-size: 0.3rem;
				text-align: center;
				&.sign{
					background-image: url(../../static/image/39@2x.png);
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
						width: 0.4rem;
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
			.process{
				width: 0.5rem;
				font-weight: 700;
				color: #743828;
				font-size: 0.32rem;
				line-height: 1rem;
			}
			.daily-list-item{
				flex: 1;
				.daily-task-icon{
					border: 2px solid #743828;
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
					font-size: 0.24rem;
					padding-top: 0.14rem;
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
				font-size: 0.32rem;
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
