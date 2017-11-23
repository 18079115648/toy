<template>
  <div class="content">
    <div class="header">
    	<router-link to="" class="user-link link"></router-link>
    	抓娃娃
    	<router-link to="" class="news-link link"></router-link>
    </div>
    <div class="navbar">
    	<div v-for="(item, index) in navbar" :class="{'active': item.active}" class="nav-item">
    		<div class="text">{{item.text}}</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navbar: [{
      	text: '首页',
      	active: true
      },{
      	text: '最新',
      	active: false
      },{
      	text: '爆款',
      	active: false
      },{
      	text: '畅玩',
      	active: false
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header{
	height: 0.85rem;
	background: #ffe86e;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0.15rem;
	.link{
		width: 0.85rem;
		height: 0.85rem;
		background: #ddd;
	}
}
.navbar{
	height: 0.66rem;
	display: flex;
	background: #ffe86e;
	.nav-item{
		flex: 1;
		display: flex;
		justify-content: center;
		line-height: 0.66rem;
		.text{
			color: #cb8c32;
			font-size: 0.28rem;
		}
		&.active{
			.text{
				color: #704a06;
			}
		}
	}
}
</style>
