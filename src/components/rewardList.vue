<template>
    <div class="content">
        <Header title="奖励明细"></Header>
	    <div class="pagination-content">
	    	<div class="reward-total">
	    		<p class="reward-tit">
	    			<span v-if="type == 1">周卡会员</span>
	    			<span v-if="type == 2">月卡会员</span>
	    			 累计领取</p>
	    		<p class="reward-num">
	    			<img src="../../static/image/erdd.png"  />
	    			{{memberCard.totalMoney}}
	    		</p>
	    		<p class="reward-tip">当日未领取将不可领取，领取到期{{memberCard.erpireDate}}</p>
	    	</div>
		    <div class="reward-list">
		    	<div class="reward-list-item" v-for="value in receiveTime">
		    		<div class="reward-left">
		    			<p>已领取</p>
		    			<p class="time">{{value}}</p>
		    		</div>
		    		<div class="reward-right">+<span>{{memberCard.dayMoney}}</span></div>
		    	</div>
		    </div>
	    </div>    
			
    </div>
</template>

<script>
export default {
  data () {
    return {
        type: this.$route.params.type,
        memberCard: {},
        receiveTime: []
    }
  },
  created(){
	this.$api.memberCenter().then(res => {
		res.data.forEach((item) => {
			if(item.type == this.type) {
				this.memberCard = item
				return
			}
		})
		this.memberCard.receiveRecord && (this.receiveTime = this.memberCard.receiveRecord.split('|').reverse())
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
	min-height: 100vh;
	background: #F5F5F9;
}
.reward-total{
	background: #20c369;
	padding: 0.5rem 0.7rem;
	color: #eee;
	.reward-num{
		display: flex;
		align-items:center;
		color: #fff;
		font-size:0.44rem;
		font-weight:700;
		padding:0.3rem 0 0.25rem;
		line-height:1;
		img{
			width: 0.36rem;
			margin-right: 0.12rem;
		}
	}
	.reward-tip{
		font-size: 0.24rem;
	}
}
.reward-list{
	background: #fff;
	padding-left: 0.3rem;
	.reward-list-item{
		border-bottom: 1px solid #f2f2f2;
		padding: 0.2rem 0.3rem 0.2rem 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		&:last-of-type{
			border-bottom: none;
		}
		.time{
			font-size: 0.24rem;
			color: #969696;
			padding-top: 0.1rem;
		}
		.reward-right{
			span{
				font-size: 0.32rem;
			}
		}
	}
}
</style>
