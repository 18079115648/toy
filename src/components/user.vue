<template>
  <div class="content">
    <Header title="我的"></Header>
    <div class="user-info">
    	<router-link to="/userInfo" class="user-info-link">
	    	<img class="avatar" :src="userInfo.avatar"  />
	    	<div class="user-info-text">
	    		<p class="nick-name">{{userInfo.nickname}}</p>
	    		<p class="user-record">
	    			<span>抓中 8</span>
	    			<i></i>
	    			<span>总排位 200</span>
	    		</p>
	    	</div>
	    	<i class="more iconfont icon-iconfontjiantou5"></i>
	    	<!--<img class="more" src="../../static/image/QEQ.png"  />-->
	    </router-link>
    </div>
	  <div class="user-bottom">
	  	<div class="navbar">
	    	<router-link to="/recharge" class="nav-item right bottom">
	    		<p class="count">
	    			<img class="nav-icon" src="../../static/image/18@3x.png" />
	    			{{userInfo.money}}
	    		</p>
	    		<p class="text">我的钻石</p>
	    	</router-link>
	    	<router-link to="/recharge" class="nav-item bottom">
	    		<p class="count">
	    			<img class="nav-icon" src="../../static/image/16@3x.png" />
	    			{{userInfo.points}}
	    		</p>
	    		<p class="text">积分抽奖</p>
	    	</router-link>
	    	<router-link to="/grabList" class="nav-item right top">
	    		<p class="count">
	    			<img class="nav-icon" src="../../static/image/15@3x.png" />
	    			{{userInfo.points}}
	    		</p>
	    		<p class="text">抓取记录</p>
	    	</router-link>
	    	<router-link to="/toysBox" class="nav-item top">
	    		<p class="count">
	    			<img class="nav-icon" src="../../static/image/17@3x.png" />
	    			{{userInfo.points}}
	    		</p>
	    		<p class="text">娃娃袋</p>
	    	</router-link>
	    </div>
	    <div class="link-list">
	    	<router-link to="/recharge" class="link-item">
	    		<img src="../../static/image/14@3x.png" style="width: 0.44rem; left: -0.04rem; margin-right: 0.26rem;" class="icon" />
	    		<p class="text">会员卡中心</p>
	    		<div class="recharge-btn">2017-12-01 <span>到期</span></div>
	    		<img src="../../static/image/wdd.png" class="more"  />
	    	</router-link>
	    </div>
	    <div class="link-list">
	    	<router-link to="/orderList" class="link-item">
	    		<img src="../../static/image/12@3x.png" class="icon" />
	    		<p class="text">订单中心</p>
	    		<img src="../../static/image/wdd.png" class="more"  />
	    	</router-link>
	    	<router-link to="/address/unselect" class="link-item">
	    		<img src="../../static/image/113@3x.png" class="icon" />
	    		<p class="text">地址管理</p>
	    		<img src="../../static/image/wdd.png" class="more"  />
	    	</router-link>
	    	<router-link to="/invite" class="link-item">
	    		<img src="../../static/image/11@3x.png" class="icon" />
	    		<p class="text">邀请有礼</p>
	    		<img src="../../static/image/wdd.png" class="more"  />
	    	</router-link>
	    	
	    	
	    </div>
	    <div class="link-list">
	    	<router-link to="/set" class="link-item">
	    		<img src="../../static/image/10@3x.png" class="icon" />
	    		<p class="text">设置</p>
	    		<img src="../../static/image/wdd.png" class="more"  />
	    	</router-link>
	    </div>
	  </div>  
	    
  </div>
</template>

<script>
import storage from '../fetch/storage'

export default {
  data () {
    return {
      isWinxin: this.$common.isWeixin(),
      userInfo:{}
    }
  },
  created() {
  	this.$api.userInfo().then(res => {
		this.userInfo = res.data
		this.userInfo.avatar = this.userInfo.avatar ? this.userInfo.avatar : '../../static/image/vvv.png'
		storage.set('headUrl', this.userInfo.avatar)
    }, err => {
    	
    })
  },
  methods: {
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../static/css/style.scss";
.content{
	padding-bottom: 0.6rem;
	min-height: 100vh;
	background: #F5F5F9;
}
.user-info{
	height: 2.4rem;
	background: $header-color;
	padding: 0.3rem 0;
	padding-bottom: 0.9rem
}
.user-bottom{
	padding: 0 0.25rem;
	position: relative;
	padding-top: 2.7rem;
	& > div {
		background: #fff;
		border-radius: 0.2rem;
	}
}
.user-info-link{
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0 0.5rem;
	color: #fff;
	font-size: 0.3rem;
	.avatar{
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 50%;
		background: #fff;
		
	}
	.user-info-text{
		flex: 1;
		padding-left: 0.3rem;
		& > p{
			padding: 0.06rem 0;
		}
		.user-record{
			font-size: 0.24rem;
			display: flex;
			align-items: center;
			i{
				border-left: 1px solid #fff;
				height: 0.26rem;
				margin: 0 0.28rem;
			}
		}
	}
	.nick-name{
		
		overflow: hidden;
		
	}
	.more{
		font-size: 0.32rem;
		color: $header-back-color;
	}
}
.navbar{
	padding: 0.36rem 0.3rem;
	display: flex;
	background: #fff;
	flex-wrap: wrap;
	position: absolute;
	right: 0.25rem;
	left: 0.25rem;
	top: -0.6rem;
	.nav-item{
		text-align: center;
		position: relative;
		width: 50%;
		position: relative;
		overflow: hidden;
		color: #969696;
		&.right:before{
			content: '';
			border-right: 1px dashed #e5e5e5;
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			transform: scaleY(2.5);
		}
		&.top:after{
			content: '';
			border-top: 1px dashed #e5e5e5;
			position: absolute;
			right: 0;
			top: 0;
			left: 0;
			transform: scaleX(2.5);
		}
		.count{
			font-size: 0.3rem;
			font-weight: 700;
			line-height: 1;
			color: #333;
			padding-bottom: 0.18rem;
			padding-top: 0.4rem;
			display: flex;
			align-items: center;
			justify-content: center;
			.nav-icon{
				height: 0.4rem;
				margin-right: 0.2rem;
			}
			
		}
		&.bottom{
			.count{
				padding-top: 0;
			}
			
		}
		.text{
			padding-bottom: 0.36rem;
		}
		&.top{
			.text{
				padding-bottom: 0;
			}
			
		}
	}
}
.link-list{
	padding-left: 0.3rem;
	padding-right: 0.3rem;
	background: #fff;
	margin-top: 0.4rem;
	.link-item{
		height: 1.05rem;
		display: flex;
		align-items: center;
	  border-bottom: 1px solid #f2f2f2;
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
	.link-item:last-child{
		border-bottom: 0;
	}
}
.recharge-btn{
	padding-right: 0.2rem;
	span{
		color: #00BC71;
	}
}
</style>
