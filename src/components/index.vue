<template>
  <div class="content">
    <div class="header">
    	<router-link to="/user" class="user-link link"></router-link>
    	抓娃娃
    	<router-link to="" class="news-link link"></router-link>
    </div>
    <div class="navbar">
    	<div v-for="(item, index) in navbar" :class="{'active': item.active}" @click="changeNav(item)" class="nav-item">
    		<div class="text">{{item.text}}</div>
    	</div>
    </div>
    <div class="nav-content">
    	<keep-alive>
		    	<router-view></router-view>
			</keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navbar: [{
      	text: '首页',
      	active: true,
      	link: '/index'
      },{
      	text: '最新',
      	active: false,
      	link: '/index/new'
      },{
      	text: '爆款',
      	active: false,
      	link: '/index/pop'
      },{
      	text: '畅玩',
      	active: false,
      	link: '/index/fun'
      }]
    }
  },
  methods: {
  	changeNav(obj) {
  		this.navbar.forEach((item) => {
  			item.active = false
  		})
  		obj.active = true
  		this.$router.replace(obj.link)
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
			transition: all 0.2s;
		}
		&.active{
			.text{
				color: #704a06;
				padding: 0 0.06rem;
				border-bottom: 2px solid #704a06;
			}
		}
	}
}
.nav-content{
	position: absolute;
	width: 100%;
	left: 0;
	top: 1.51rem;
	bottom: 0;
	overflow-y: auto;
}
</style>
