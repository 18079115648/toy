<template>
    <div class="content">
        <Header title="邀请好友"></Header>
        <div class="invite-content">
        	<p class="tit">分享邀请码</p>
        	<div class="invite-code" >
        		<span v-for="(item, index) in code" :key="index">{{item}}</span>
        	</div>
        	<div class="btn-default btn-hover go-index" @click="goIndex">开启优抓</div>
        </div>
    </div>
</template>

<script>

import { Toast } from 'mint-ui'
export default {
  data () {
    return {
		code:[]
    }
  },
  created() {
  	this.code = this.$route.params.id
  },
  methods: {
    goIndex() {
    	this.$router.replace('/index')
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
	padding: 0.4rem 0.8rem;
}
.receive{
	width: 4.7rem;
	height: 0.66rem;
	line-height: 0.66rem;
	border-radius: 0.66rem;
	background: #f97295;
	text-align: center;
	color: #fff;
	margin: 0 auto;
}
.invite-content{
	background: #FFFFFF;
	border-radius: 0.2rem;
	margin-top: 0.6rem;
	padding-bottom: 0.5rem;
	.tit{
		color: #000000;
		text-align: center;
		padding: 0.4rem 0 0.6rem;
		font-size: 0.3rem;
	}
	.invite-code{
		display: flex;
		justify-content: center;
		margin-bottom: 1.8rem;
		span{
			width: 0.46rem;
			height: 0.56rem;
			text-align: center;
			line-height: 0.56rem;
			border-radius: 0.06rem;
			background: #946134;
			color: #fff;
			font-size: 0.3rem;
			margin: 0 0.06rem;
		}
	}
}
.go-index{
	width: 4rem;
	font-size: 0.3rem;
}
</style>
