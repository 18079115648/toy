<template>
    <div class="content">
        <Header title="充值"></Header>
        <router-link class="recharge-record-link btn-hover" to="/paymentList">充值记录</router-link>
        <div class="recharge_body">
            <div class="member-charge" v-if="menberCharge.week || menberCharge.month">
            	<p class="menber-tit kind-tit">超值会员</p>
            	<div class="charge-list">
            		<router-link to="/paymentMember/1" v-tap class="charge-item" v-if="menberCharge.week">
            			<!--<img class="pop" src="../../static/image/7@2x.png"  />-->
            			<p class="charge-item-mark" v-if="menberCharge.week.mark">{{menberCharge.week.mark}}</p>
            			<p class="tit shadow-text">{{menberCharge.week.title}}</p>
            			<p class="desc">{{menberCharge.week.desc}}</p>
            			<p class="price">&yen;{{menberCharge.week.price.toFixed(2)}}</p>
            		</router-link>
            		<router-link to="/paymentMember/1" v-tap class="charge-item" v-if="menberCharge.month">
            			<p class="charge-item-mark" v-if="menberCharge.month.mark">{{menberCharge.month.mark}}</p>
            			<p class="tit shadow-text">{{menberCharge.week.title}}</p>
            			<p class="desc">{{menberCharge.week.desc}}</p>
            			<p class="price">&yen;{{menberCharge.week.price.toFixed(2)}}</p>
            		</router-link>
            	</div>
            </div>
            <div class="diamond-charge" v-show="diamondCharge.length > 0">
            	<p class="diamond-tit kind-tit">钻石充值</p>
            	<div class="charge-list">
            		<router-link :to="'/payment/' + item.id" v-tap class="charge-item diamond" v-for="(item, index) in diamondCharge" :key="index">
            			<p class="charge-item-mark" v-if="item.mark">{{item.mark}}</p>
            			<p class="tit shadow-text">
            				<img class="dia-icon" :src="`${imageUrl}/erdd.png`" />
            				{{item.money}}
            			</p>
            			<p class="desc">{{item.desc}}</p>
            			<p class="price">&yen;{{item.price}}</p>
            		</router-link>
            	</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
    	imageUrl: this.$store.state.imageUrl,
    	menberCharge: {
    		week:null,
    		month: null
    	},
        diamondCharge:[],
    }
  },
  created(){
    this.$api.recharge().then(res => {
        this.diamondCharge = res.data.normal
        res.data.week && (this.menberCharge.week = res.data.week)
        res.data.month && (this.menberCharge.month = res.data.month)
    }, err => {
    	
    })
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "../../static/css/style.scss";
.recharge-record-link{
	position: fixed;
	top: 0;
	right: 0;
	height: 0.85rem;
	line-height: 0.85rem;
	padding: 0 0.2rem;
	color: $header-text-color;
	z-index: 30;
	font-size: 0.28rem;
}
.recharge_body{
	position: absolute;
	left: 0;
	top: 0.85rem;
	bottom: 0.3rem;
	overflow-y: auto;
    -webkit-overflow-scrolling : touch;
    width: 100%;
    padding: 0.2rem .2rem 0;
    & > div{
    	background: #fff;
    	border-radius: 0.2rem;
    	padding: 0 0.3rem;
    	margin-bottom: 0.4rem;
    	.kind-tit{
    		padding: 0.22rem 0 0.26rem;
    		font-weight: 700;
    		font-size: 0.3rem;
    		&.menber-tit{
	    		color: #ffce45;
	    	}
	    	&.diamond-tit{
	    		color: #8ec1f4;
	    	}
    	}
	    	
    }
    .charge-list{
    	display: flex;
    	flex-wrap: wrap;
    	margin: 0 -0.15rem;
    	.charge-item{
    		background: $pay-member-bgcolor;
    		border-radius: 0.2rem;
    		width: 3.1rem;
    		margin: 0 0.15rem 0.3rem;
    		padding: 0.15rem;
    		text-align: center;
    		color: $pay-member-textcolor;
    		position: relative;
    		display: flex;
    		flex-direction: column;
    		justify-content: space-between;
    		min-height: 2.1rem;
    		&.diamond{
    			background: $pay-diamond-bgcolor;
    			.price{
    				color: $pay-diamond-bgcolor;
    			}
    		}
    		.charge-item-mark{
    			position: absolute;
    			left: 0;
    			top: -0.15rem;
    			font-size: 0.2rem;
    			border-radius: 0 0.06rem 0.06rem 0.06rem;
    			background: linear-gradient(to right, #c552fa , #7e2afc);
    			padding: 0.04rem 0.1rem;
    		}
    		.tit{
    			font-size: 0.3rem;
    			display: flex;
    			justify-content: center;
    			align-items: center;
    			font-weight: 700;
    			.dia-icon{
    				width: 0.4rem;
    				margin-right: 0.1rem;
    			}
    		}
    		.desc{
    			font-size: 0.24rem;
    			padding: 0.15rem 0 0.2rem;
    		}
    		.price{
    			height: 0.54rem;
    			line-height: 0.54rem;
    			display: inline-block;
    			background: #fff;
    			width: 2rem;
    			margin: 0 auto;
    			border-radius: 0.54rem;
    			color: $pay-member-bgcolor;
    			font-weight: 700;
    			font-size: 0.3rem;
    		}
    		.pop{
    			position: absolute;
    			left: 0;
    			width: 0.6rem;
    			top: -0.12rem;
    		}
    	}
    }

}


</style>
