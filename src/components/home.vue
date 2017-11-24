<template>
  <div class="content">
    <div class="banner"></div>
    <div class="navbar">
    	<router-link :to="item.link" class="nav-item" v-for="(item,index) in navbar" :key="index">
    		<!-- <img class="icon" src="../../../疯狂抓娃娃/1.png"  /> -->
    		<p>{{item.text}}</p>
    	</router-link>
    </div>
    <div class="toys-list">
    	<router-link to="" class="toys-item">
    		<!-- <img class="toys-img" src="../../../疯狂抓娃娃/1.png"  /> -->
    		<div class="toys-status ing">游戏中</div>
    		<div class="toys-info">
    			<p class="join-count">
	    			<!--<img class="icon" src="../../../疯狂抓娃娃/1.png" />-->
	    			<span>24</span>
	    		</p>
	    		<p class="toys-name">公仔</p>
    		</div>	
    	</router-link>
    	<router-link to="" class="toys-item">
    		<!-- <img class="toys-img" src="../../../疯狂抓娃娃/1.png"  /> -->
    		<div class="toys-status ing">游戏中</div>
    		<div class="toys-info">
    			<p class="join-count">
	    			<!--<img class="icon" src="../../../疯狂抓娃娃/1.png" />-->
	    			<span>24</span>
	    		</p>
	    		<p class="toys-name">公仔</p>
    		</div>	
    	</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navbar: [{
      	text: '签到',
      	link: ''
      },{
      	text: '邀请好友',
      	link: ''
      },{
      	text: '娃娃盒',
      	link: ''
      },{
      	text: '积分商城',
      	link: ''
      }]
    }
  },
  methods: {
  	changeNav(obj) {
  		this.navbar.forEach((item) => {
  			item.active = false
  		})
  		obj.active = true
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner{
	height: 2.7rem;
	background: #ddd;
}
.navbar{
	height: 1.6rem;
	display: flex;
	background: #fff;
	padding-top: 0.2rem;
	.nav-item{
		flex: 1;
		display: flex;
		flex-direction: column;
    align-items: center;
		img.icon{
			display: block;
			height: 0.75rem;
			margin-bottom: 0.15rem;
		}
		p{
			color: #666;
		}
	}
}
.toys-list{
	padding: 0.2rem 0.1rem 0;
	display: flex;
		flex-wrap: wrap;
	.toys-item{
		margin: 0 0.1rem 0.2rem;
		width: 3.45rem;
		height: 3.45rem;
		background: #fff;
		position: relative;
		border-radius: 0.15rem;
		overflow: hidden;
		
		.toys-img{
			position: absolute;
			top:50%;
			left: 50%;
			transform: translate(-50%, -50%);
			min-width: 100%;
			min-height: 100%;
			max-width: 300%;
			max-height: 300%;
			z-index: 1;
		}
		.toys-status{
			position: absolute;
			right: 0.2rem;
			top: 0.2rem;
			height: 0.34rem;
			line-height: 0.34rem;
			border-radius: 0.17rem;
			color:#fff;
			padding: 0 0.12rem;
			z-index: 3;
			font-size: 0.22rem;
			&.ing{
				background: #ff556e;
			}
		}
		.toys-info{
			position: absolute;
			left: 0.2rem;
			bottom: 0.2rem;
			z-index: 3;
			color: #fff;
			font-weight: 700;
			font-size: 0.3rem;
		}
	}
}
</style>
