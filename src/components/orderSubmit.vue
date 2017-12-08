<template>
    <div class="content">
        <Header title="填写订单"></Header>
        <router-link to="/address/select" class="address-content">
        	<img v-show="hasAddr" class="addr-icon" src="../../static/image/3344.png"  />
        	<div v-show="hasAddr" class="address-info">
        		<p><span>收货人：{{addrInfo.consignee}}</span><span>{{addrInfo.mobile}}</span></p>
        		<p>{{addrInfo.address}}</p>
        	</div>
        	<p v-show="!hasAddr" class="none-addr">请添加收货地址~</p>
        	<img class="more-icon" src="../../static/image/wdd.png"  />
        </router-link>
		<div class="toys-list">
			<div class="toys-item" v-for="(item, index) in toysList" :key="index">
				<img class="toy-img" :src="item.img"  />
				<p class="toys-info">
					<span class="name">{{item.name}}</span>
					<span class="count">x{{item.num}}</span>
				</p>
			</div>
		</div>
		<div class="price-content">
			<div class="price-item">
				<span>我的钻石</span>
				<span class="price"><img src="../../static/image/wd.png" />{{money}}</span>
			</div>
			<div class="price-item">
				<span>配送费用</span>
				<span class="price"><img src="../../static/image/wd.png" />{{expressMoney}}</span>
			</div>
		</div>
		<div class="btn-default btn-hover submit" @click="paySubmit">支付并配送</div>
    </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
export default {
  data () {
    return {
        hasAddr: false,
        toysList: [],
        expressMoney: 0,
        money: 0,
        addrInfo: {},
        disabledBtn: false
    }
  },
  created(){
  	this.$api.getDefaultAddress().then(res => {
			if(res.data) {
				this.hasAddr = true
				this.addrInfo = res.data
			}
    }, err => {
    	
    })
  	this.$api.userInfo().then(res => {
			this.money = res.data.money
    }, err => {
    	
    })
    this.$api.toysWin().then(res => {
			this.toysList = res.data.data
			this.expressMoney = res.data.expressMoney
    }, err => {
    	
    })
    
  },
  methods: {
  	paySubmit() {
  		if(!this.addrInfo.id) {
  			Toast({
				  message: '请选择收货地址',
				  position: 'bottom',
				  duration: 1000
				});
				return
  		}
  		if(this.disabledBtn) {
  			return
  		}
  		this.disabledBtn = true
  		this.$api.submitOrder({
  			addressId: this.addrInfo.id
  		}).then(res => {
  			this.disabledBtn = false
				this.$router.replace('/orderList')
	    }, err => {
	    	this.disabledBtn = false
	    })
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content{
	position: relative;
	min-height: 100vh;
	padding-bottom: 1.7rem;
}
.address-content{
	padding: 0.3rem;
	display: flex;
	align-items: center;
	background: #fff;
	color: #222;
	.addr-icon{
		width: 0.3rem;
	}
	.more-icon{
		width: 0.16rem;
	}
	.address-info{
		flex:1;
		padding: 0 0.4rem;
		overflow: hidden;
		p{
			display: flex;
			justify-content: space-between;
			padding: 0.1rem 0;
		}
	}
	.none-addr{
		color: #000;
		flex: 1;
		padding-left: 0.16rem;
		text-align: center;
		height: 1.16rem;
		line-height: 1.16rem;
	}
}
.toys-list{
	margin: 0.2rem 0;
	background: #fff;
	padding-left: 0.3rem;
	.toys-item{
		padding: 0.3rem 0.3rem 0.3rem 0;
		border-bottom: 1px solid #f2f2f2;
		display: flex;
		align-items: flex-start;
		&:last-of-type{
			border-bottom: none;
		}
		img.toy-img{
			width: 1.8rem;
			margin-right: 0.4rem;
			border-radius: 0.1rem;
		}
		.toys-info{
			flex: 1;
			color: #000;
			overflow: hidden;
			display: flex;
			justify-content: space-between;
			padding-top: 0.2rem;
			.name{
				flex: 1;
				overflow: hidden;
				padding-right: 0.3rem;
			}
		}
	}
}
.price-content{
	background: #fff;
	padding-left: 0.3rem;
	.price-item{
		border-bottom: 1px solid #f2f2f2;
		padding: 0.25rem 0.3rem 0.25rem 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&:last-of-type{
			border-bottom: none;
		}
		.price{
			display: flex;
			align-items: center;
			img{
				width: 0.24rem;
				margin-right: 0.14rem;
			}
		}
	}
}
.submit{
	position: absolute;
	left: 0.3rem;
	bottom: 0.5rem;
}
</style>
