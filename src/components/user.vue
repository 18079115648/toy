<template>
  <div class="content">
    <Header title="我的"></Header>
    <div class="set-up"></div>
    <div class="user-info-link">
    	<img class="avatar" src=""  />
    	<p class="nick-name">昵称</p>
    	<img class="more" src="../../static/image/QEQ.png"  />
    </div>
    <div class="navbar">
    	<div class="nav-item diamount">
    		<p class="count" style="color: #f8b62d;">999</p>
    		<p class="text">钻石</p>
    	</div>
    	<div class="nav-item">
    		<p class="count" style="color: #22ac38;">999</p>
    		<p class="text">积分</p>
    	</div>
    </div>
    <div class="link-list">
    	<div class="link-item">
    		<img src="../../static/image/3333.png" class="icon" />
    		<p class="text">砖石充值</p>
    		<img src="../../static/image/wdd.png" class="more"  />
    	</div>
    </div>
    <div class="link-list">
    	<div class="link-item">
    		<img src="../../static/image/3333.png" class="icon" />
    		<p class="text">邀请好友</p>
    		<img src="../../static/image/wdd.png" class="more"  />
    	</div>
    	<div class="link-item">
    		<img src="../../static/image/3333.png" class="icon" />
    		<p class="text">抓取记录</p>
    		<img src="../../static/image/wdd.png" class="more"  />
    	</div>
    	<div class="link-item">
    		<img src="../../static/image/3333.png" class="icon" />
    		<p class="text">充值记录</p>
    		<img src="../../static/image/wdd.png" class="more"  />
    	</div>
    </div>
    <div class="link-list">
    	<div class="link-item">
    		<img src="../../static/image/3333.png" class="icon" />
    		<p class="text">订单中心</p>
    		<img src="../../static/image/wdd.png" class="more"  />
    	</div>
    	<div class="link-item">
    		<img src="../../static/image/3333.png" class="icon" />
    		<p class="text">地址管理</p>
    		<img src="../../static/image/wdd.png" class="more"  />
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.set-up{
	position: fixed;
	width: 0.85rem;
	height: 0.85rem;
	right: 0;
	top: 0;
	background: #ddd;
	z-index: 15;
}
.user-info-link{
	height: 2rem;
	display: flex;
	align-items: center;
	background: #fff;
	padding: 0 0.3rem 0.2rem;
	color: #333;
	font-size: 0.3rem;
	background-image: url(../../static/image/derr.png);
	background-size: 100%;
	background-position: bottom;
	background-repeat: no-repeat;
	.avatar{
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 50%;
		
	}
	.nick-name{
		flex: 1;
		overflow: hidden;
		padding-left: 0.3rem;
	}
	.more{
		width: 0.16rem;
	}
}
.navbar{
	height: 1.36rem;
	display: flex;
	background: #fff;
	padding-top: 0.26rem;
	.nav-item{
		flex: 1;
		text-align: center;
		position: relative;
		.count{
			font-size: 0.48rem;
			font-weight: 700;
			line-height: 1;
			padding-bottom: 0.1rem;
			
		}
		&.diamount:after{
			content: '';
			position: absolute;
			width: 0;
			border-right: 1px solid #f2f2f2;
			right: 0;
			top: 0;
			bottom: 0.4rem;
		}
	}
}
.link-list{
	padding-left: 0.3rem;
	background: #fff;
	margin-top: 0.4rem;
	.link-item{
		height: 1.05rem;
		display: flex;
		align-items: center;
	  border-bottom: 1px solid #f2f2f2;
	  padding-right: 0.3rem;
	  .icon{
	  	width: 0.36rem;
	  	margin-right: 0.3rem;
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
	.link-item:last-of-type{
		border-bottom: 0;
	}
}
</style>
