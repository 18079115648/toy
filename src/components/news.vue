<template>
  <div class="content">
  	<Header title="消息"></Header>
    <div class="news-list">
    	<div class="news-item">
    		<div class="news-tit">
    			<span>系统消息</span>
    			<span class="time">2017.12.01</span>
    		</div>
    		<div class="news-content">
    			<div class="text">
    				阿里的卡就来打卡
    			</div>
    			<span class="status"></span>
    		</div>
    	</div>
    	<div class="news-item">
    		<div class="news-tit">
    			<span>系统消息</span>
    			<span class="time">2017.12.01</span>
    		</div>
    		<div class="news-content">
    			<div class="text">
    				阿里的卡就来打卡
    			</div>
    			<span class="status"></span>
    		</div>
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
.content{
	padding: 0.3rem;
}
.news-item{
	background: #fff;
	border-radius: 0.3rem;
	padding: 0.3rem;
	margin-bottom: 0.4rem;
	.news-tit{
		padding-bottom: 0.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #000;
		font-size: 0.3rem;
		.time{
			color: #bbb;
			font-size: 0.24rem;
		}
	}
	.news-content{
		display: flex;
		.text{
			flex: 1;
			color: #888;
		}
		.status{
			background: #ff5236;
			border-radius: 50%;
			width: 0.14rem;
			height: 0.14rem;
			margin: 0.1rem 0 0 0.2rem;
		}
	}
}
</style>
