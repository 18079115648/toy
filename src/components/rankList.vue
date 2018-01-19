<template>
    <div class="content">
        <Header>
        	<div class="rank-kind">
        		<span :class="{'active': rankWay == 'Catch'}" v-tap="{ methods : changeRankWay, way: 'Catch' }">大神榜</span>
        		<span :class="{'active': rankWay == 'Diamond'}" v-tap="{ methods : changeRankWay, way: 'Diamond' }">土豪榜</span>
        	</div>
        </Header>
        <div class="rank-content">
        	<div class="rank-list-select">
	        	<span :class="{'active': rankTime == 'day'}" v-tap="{ methods : changeRankTime, time: 'day' }">月榜</span>
        		<span :class="{'active': rankTime == 'total'}" v-tap="{ methods : changeRankTime, time: 'total' }">总榜</span>
	        </div>
			<div class="page-content" id="page-content">
				<div class="mask" v-show="!changeEnd"></div>
	        	<Pagination :render="render" :param="pagination" :autoload="false"  ref="pagination" :uri="rankUrl[rankWay][rankTime]" >
			        <div class="rank-list" v-show="pagination.content.length > 0">
						<router-link :to="'/rankDetail/' + item.memberId" class="rank-list-item" v-for="(item, index) in pagination.content" :key="item.rank">
							<img class="avatar" :src="item.avatar || '../../static/image/vvv.png'"  />
							<div class="rank-info">
								<p class="rank-name">{{item.nickName || '***'}}</p>
								<p class="rank-result" v-show="rankWay == 'Catch'">抓中 <span style="color: #fd485c;">{{item.successTimes}}</span> 个</p>
								<p class="rank-result" v-show="rankWay == 'Diamond'">消费 &nbsp;<span style="color: #fd485c;">&yen;{{item.total}}</span></p>
							</div>
							<i class="iconfont icon-huangguan" :class="'rank-' + item.rank" v-show="item.rank < 4">
								<b>{{item.rank}}</b>
							</i>
							<span class="rank-next" v-show="item.rank > 3">{{item.rank}}</span>
						</router-link>
					</div>
			        <div class="no_msg" v-show="pagination.content.length < 1 && pagination.loadEnd">
			            <!--<img style="width: 1.5rem;" src="../../static/image/none-charge.png">-->
			            <div>暂无排行数据~</div>
			        </div>
				</Pagination>
	        </div>
        </div>
	        
		        

		        
    </div>
</template>

<script>
export default {
  data () {
    return {
    	rankWay: 'Catch',             //Catch：大神榜     Diamond：土豪榜
    	rankTime: 'day',             //day：日榜     1：total
        pagination: {
	        content: [],
	        loadEnd: false,
	        data: {
	        	page: 1,
	        	pageSize: 15
	        }
	    },
	    rankUrl: {                                       //排行接口url
	    	Catch: {
	    		day: '/dm-api/summary/catch/month',
	    		total: '/dm-api/summary/catch/total'
	    	},
	    	Diamond: {
	    		day: '/dm-api/summary/diamond/month',
	    		total: '/dm-api/summary/diamond/total'
	    	}
	    },
	    changeEnd: false,           //loading mask
	    
	    scrollDistance: 0
    }
  },
  activated() {
  	this.pageContent.scrollTop = this.scrollDistance
  },
  beforeRouteLeave(to, from, next) {
	this.scrollDistance = this.pageContent.scrollTop
  	next()
  },
  mounted(){
    this.$refs.pagination.refresh()
    this.pageContent = document.getElementById('page-content')
  },
  methods: {
  	render(res) {
		res.data.forEach((item) => {
	    	this.pagination.content.push(item)
    	})
		!this.changeEnd && (this.pageContent.scrollTop = 0)
		this.changeEnd = true
    },
    changeRankTime(params) {
    	if(this.rankTime == params.time) {
    		return
    	}
    	this.changeEnd = false
    	this.rankTime = params.time
    	this.$refs.pagination.refresh()
    	
    },
    changeRankWay(params) {
    	if(this.rankWay == params.way) {
    		return
    	}
    	this.changeEnd = false
    	this.rankWay = params.way
    	this.$refs.pagination.refresh()
    }
  }
  
}
</script>

<style lang="scss" scoped>
.content{
	min-height: 100vh;
	background: #F5F5F9;
}
.rank-kind{
	position: absolute;
	left: 1.4rem;
	right: 1.4rem;
	height: 100%;
	top: 0;
	display: flex;
	line-height: 0.85rem;
	text-align: center;
	span{
		font-weight: 700;
		font-size: 0.26rem;
		flex: 1;
		color: #efefef;
		&.active{
			font-size: 0.28rem;
			color: #fff;
		}
	}
}
.rank-content{
	position: absolute;
	left: 0;
	top: 0.85rem;
	bottom: 0;
	right: 0;
	padding: 0.3rem 0.2rem;
	.rank-list-select{
		display: flex;
		height: 0.76rem;
		border-radius: 0.76rem;
		border: 1px solid #00BC71;
		overflow: hidden;
		background: #fff;
		span{
			flex: 1;
			line-height: 0.72rem;
			text-align: center;
			color: #333;
			&.active{
				font-size: 0.28rem;
				color: #fff;
				background: #00BC71;
			}
		}
	}
}
.page-content{
	position: absolute;
	left: 0.2rem;
	top: 1.4rem;
	bottom: 0.3rem;
	right: 0.2rem;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
	padding: 0.25rem;
	background: #fff;
	border-radius: 0.2rem;
	.mask{
		position: fixed;
		left: 0.2rem;
		top: 2.25rem;
		bottom: 0.3rem;
		right: 0.2rem;
		border-radius: 0.2rem;
		background: #fff;
		z-index: 10;
	}
}
.rank-list{
	.rank-list-item{
		display: flex;
		padding: 0.25rem 0;
		align-items: center;
		border-bottom: 1px solid #f2f2f2;
		.avatar{
			width: 0.8rem;
			height: 0.8rem;
			border-radius: 50%;
			margin-right: 0.35rem;
		}
		.rank-info{
			flex: 1;
			overflow: hidden;
			color: #000;
			padding-right: 0.2rem;
			line-height: 1.4;
			.rank-name{
				font-size: 0.28rem;
				padding-bottom: 0.1rem;
			}
		}
		.iconfont{
			font-size: 0.6rem;
			line-height: 1;
			position: relative;
			b{
				position: absolute;
				left: 50%;
				bottom: 0.1rem;
				transform: translateX(-50%);
				color: #fff;
				font-size: 0.22rem;
			}
			&.rank-1{
				color: #ffd328;
			}
			&.rank-2{
				color: #ff5c97;
			}
			&.rank-3{
				color: #71b8ff;
			}
		}
		&:last-of-type{
			border-bottom: none;
		}
		.rank-next{
			min-width: 0.6rem;
			text-align: center;
			font-size: 0.28rem;
		}
	}
}

.paymentList_body{
  padding: 0 0.3rem;
  background: #fff;
  & > .head:last-of-type{
  	border-bottom: none;
  }
}
.head{
  padding:0.2rem 0;
  font-size: .3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  border-bottom: 1px solid #f2f2f2;
}
.paymentList_msg{
    display: flex;
    justify-content: space-between;
    .paymentList_img{
        display: flex;
        align-items: center;
        font-weight:700;
        img{
            width: .4rem;
            margin-right: .2rem;
        }
    }
    .paymentList_way{
        display: flex;
        align-items: center;
        font-weight:700;
        img{
            width: .36rem;
            margin-right: .1rem;
        }
    }
    .time{
    	color: #ababab;
    	font-size: 0.26rem;
    }
    .status{
    	font-size: 0.28rem;
    }
}

</style>
