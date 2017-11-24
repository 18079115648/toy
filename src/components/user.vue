<template>
  <div class="content">
    <Header title="我的"></Header>
    <div class="set-up"></div>
    <div class="user-info-link">
    	<img class="avatar" src=""  />
    	<p class="nick-name">昵称</p>
    	>
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
	height: 2.2rem;
	display: flex;
	align-items: center;
	background: #fff;
	padding: 0 0.3rem 0.2rem;
	color: #333;
	font-size: 0.3rem;
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
}
.navbar{
	height: 1.1rem;
	display: flex;
	background: #fff;
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
			border-right: 1px solid #f1f1f1;
			right: 0;
			top: 0;
			bottom: 0.4rem;
		}
	}
}
</style>
