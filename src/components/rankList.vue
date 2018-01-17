<template>
    <div class="content">
        <Header>
        	<div class="rank-kind">
        		<span class="active">大神榜</span>
        		<span>土豪榜</span>
        	</div>
        </Header>
        <div class="rank-content">
        	<div class="rank-list-select">
	        	<span class="active">月榜</span>
        		<span>总榜</span>
	        </div>
			<div class="page-content">
				<div class="rank-list">
					<div class="rank-list-item">
						<img class="avatar" src="../../static/image/17@3x.png"  />
						<div class="rank-info">
							<p class="rank-name">会计师</p>
							<p class="rank-result">抓中<span style="color: #fd485c;">123</span>个</p>
						</div>
						<i class="iconfont icon-huangguan">
							<b>1</b>
						</i>
					</div>
					<div class="rank-list-item">
						<img class="avatar" src="../../static/image/17@3x.png"  />
						<div class="rank-info">
							<p class="rank-name">会计师</p>
							<p class="rank-result">抓中<span style="color: #fd485c;">123</span>个</p>
						</div>
						<i class="iconfont icon-huangguan">
							<b>1</b>
						</i>
					</div>
					<div class="rank-list-item">
						<img class="avatar" src="../../static/image/17@3x.png"  />
						<div class="rank-info">
							<p class="rank-name">会计师</p>
							<p class="rank-result">抓中<span style="color: #fd485c;">123</span>个</p>
						</div>
						<i class="iconfont icon-huangguan">
							<b>1</b>
						</i>
					</div>
				</div>
	        	<!--<Pagination :render="render" :param="pagination" :autoload="false"  ref="pagination" uri="/dm-api/charge/log" >
					<div class="paymentList_body" v-show="pagination.content.length > 0">
			            <div class="head paymentList_border" v-for="item in pagination.content">
			                <div class="paymentList_msg" style="margin-bottom:.12rem;">
			                    <div class="paymentList_img">
			                        <img src="../../static/image/erdd.png" v-if="item.type == 3">
			                        <img src="../../static/image/8@3x.png" v-if="item.type != 3">
			                        <span>{{item.money}}</span>
			                    </div>
			                    <div class="paymentList_way">
			                        <img src="../../static/image/444.png" v-if="item.type == 1">
			                        <img src="../../static/image/555.png" v-if="item.type == 2">
			                        <span>¥ {{item.price}}</span>
			                    </div>
			                </div>
			                <div class="paymentList_msg">
			                    <div class="time">
			                        {{item.createTime}}
			                    </div>
			                    <div class="status">
			                        <span v-if="item.status == 0">未支付</span>
			                        <span style="color: #00BC71;" v-if="item.status == 1">已完成</span>
			                    </div>
			                </div>
			            </div>
			            
			        </div>
			        <div class="no_msg bg-color" v-show="pagination.content.length < 1">
			            <img style="width: 1.5rem;" src="../../static/image/none-charge.png">
			            <div>暂无充值记录~</div>
			        </div>
				</Pagination>-->
				
	        </div>
        </div>
	        
		        

		        
    </div>
</template>

<script>
export default {
  data () {
    return {
        pagination: {
	        content: [],
	        loadEnd: false,
	        data: {
	        	page: 1,
	        	pageSize: 15
	        }
	    },
    }
  },
  mounted(){
    this.$refs.pagination.refresh()
  },
  methods: {
  	render(res) {
		res.data.forEach((item) => {
	    	this.pagination.content.push(item)
    	})
    },
    
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
				bottom: 0.04rem;
				transform: translateX(-50%);
				color: #fff;
				font-size: 0.2rem;
			}
		}
		&:last-of-type{
			border-bottom: none;
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
