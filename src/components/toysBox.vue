<template>
  <div class="content">
  	<Header title="娃娃盒"></Header>
    <div class="toys-list" v-show="toysList.length > 0">
    	<div class="toys-item" v-for="(item, index) in toysList" :key="index">
    		<img class="toys-img" :src="item.img"  />
    		<div class="toys-info shadow-text">
    			<span>{{item.name}}</span>
    			<span>x{{item.num}}</span>
    		</div>	
    	</div>
    	
    </div>
    <div class="no_msg" v-show="toysList.length < 1">
        <img src="../../static/image/ewd.png"  />
        <div>您还没有抓到娃娃~</div>
    </div>
    <router-link v-show="toysList.length > 0" to="/orderSubmit" class="btn-default btn-hover btn-receive">立即领取</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
			toysList: []
    }
  },
  created() {
  	this.$api.toysWin().then(res => {
		this.toysList = res.data.data
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

}
.toys-list{
	position: absolute;
	width: 100%;
	top: 0.85rem;
	bottom: 1.8rem;
	left: 0;
	overflow-y: auto;
	padding: 0.2rem 0.1rem 0;
	display: flex;
	flex-wrap: wrap;
	.toys-item{
		margin: 0 0.1rem 0.2rem;
		width: 3.45rem;
		height: 3.45rem;
		background: #fff;
		position: relative;
		border-radius: 0.3rem;
		overflow: hidden;
		
		.toys-img{
			position: absolute;
			top:50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
			height: 100%;
		}
		.toys-info{
			position: absolute;
			left: 0.25rem;
			right: 0.25rem;
			bottom: 0.2rem;
			z-index: 3;
			color: #fff;
			font-weight: 700;
			font-size: 0.28rem;
			display: flex;
			justify-content: space-between;
		}
	}
}
.btn-receive{
	position: absolute;
	left: 0.3rem ;
	bottom: 0.5rem;
}
</style>
