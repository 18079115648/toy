<template>
    <div class="content">
        <Header title="地址管理"></Header>
		<div class="addrsss-list">
			<div class="address_body" v-for="(item, index) in addressList" :key="index">
	            <div class="address_title" @click="selectAddr(item)">
	                <div class="address_first">{{item.address}}</div>
	                <div>{{item.consignee}} &nbsp; {{item.mobile}}</div>
	            </div>
	            <div class="address_img">
	                <div class="address">
	                    <div class="img_body" @click="defaultChange(item)">
	                    	<i class="default iconfont icon-xuanze" v-show="item.isDefault"></i>
	                        <!--<img src="../../static/image/bbb.png" v-show="item.isDefault">-->
	                        <img src="../../static/image/rrrr.png" v-show="!item.isDefault">
	                        <div>默认地址</div>
	                    </div>
	                    <div  class="address_operation">
	                        <div @click="goDetail(item)">
	                            <img src="../../static/image/11223.png">
	                            <span>编辑</span>
	                        </div>
	                        <div @click="selectDelete(item.id, index)">
	                            <img src="../../static/image/424.png">
	                            <span>删除</span>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div class="no_msg bg-color" v-show="addressList.length < 1">
	            <img src="../../static/image/none-addr.png">
	            <div>暂无收货地址~</div>
	        </div>
		</div>
	        
        <router-link to="/addAddress" class="btn-default btn-hover add">新增收货地址</router-link>

        <confirm-modal :show="deleteShow" @confirm_modal="addrDelete" @closeModal="deleteShow = false" message="确定删除该地址?"></confirm-modal>	
    </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
export default {
  data () {
    return {
        addressList:[],
        
        deleteShow: false
    }
  },
  created(){
    //获取地址列表
    this.$api.address({
        page: 1,
        pageSize: 100
    }).then(res => {
        this.addressList = res.data.data
    }, err => {
        
    })
  },

  methods: {
    //删除地址
	selectDelete(id, index){
		this.currIndex = index
		this.currId = id
		this.deleteShow = true
	},
	addrDelete() {
		Indicator.open()
		this.$api.deleteAddress({
			id:  this.currId
		}).then(res => {
			setTimeout(() => {
	    		Indicator.close()
	    	}, 300)
			this.addressList.splice(this.currIndex, 1)
        }, err => {
        	Indicator.close()
        })
	},
    //设置默认地址
    defaultChange(obj){
    	if(obj.isDefault) {
    		return
    	}
    	Indicator.open()
        this.$api.defaultAddress({
	        id: obj.id
	    }).then(res => {
	    	setTimeout(() => {
	    		Indicator.close()
	    	}, 300)
	        this.addressList.forEach((item) => {
	        	item.isDefault = item.id == obj.id
	        })
	    }, err => {
	        Indicator.close()
	    })
    },
    //订单地址选择
    selectAddr(item){
    	if(this.$route.params.status == 'select') {
    		this.$api.defaultAddress({
		        id: item.id
		    }).then(res => {
		    	this.$router.go(-1)
		    }, err => {

		    })
    	}
    },
    goDetail(item){
    	this.$storage.set('currAddrDetail', item)
    	this.$router.push('/addressDetail')
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
	position: relative;
	min-height: 100vh;
	padding-bottom: 1.7rem;
}
.addrsss-list{
	padding: 0.4rem 0.3rem 0;
}
.address_body{
    width: 100%;
    height: auto;
    padding: 0 0.3rem;
    background: #fff;
    border-radius: 0.2rem;
    margin-bottom: 0.3rem;
    
}
.address_title{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: .2rem 0;
    position: relative;
    border-bottom: 1px solid #f2f2f2;
    color: #666;
}
.address_first{
    color: #000;
    font-size: .3rem;
    padding-bottom: .1rem;
}
.address_img{
    .img_body{
        display: flex;
        align-items: center;
        img{
            width: .4rem;
            height: .4rem;
            display: block;
            margin-right: .15rem;
        }
        .default{
        	width: .4rem;
            height: .4rem;
            margin-right: .15rem;
            line-height: 0.4rem;
            font-size: 0.4rem;
            color: #00BC71;
        }
        div{
            color: #666;
        }
    }
}
.address{
    display: flex;
    justify-content: space-between;
    height: 1rem;
    
}
.address_operation{
    display: flex;
    div{
        display: flex;
        align-items: center;
        padding-left: .4rem;
        color: #666;
        img{
            height: .3rem;
            display: block;
            margin-right: .15rem;
        }
    }
}
.address_button_body{
    height: .8rem;
    width: 100%;
    position: fixed;
    bottom: .4rem;
    padding: 0 .2rem;
    .address_button{
        height: .8rem;
        width: 100%;
        background-color: #F7D168;
        border-radius: .4rem;
        text-align: center;
        line-height: .8rem;
        font-size: .38rem;
        font-weight: 400;
    }
}

.add{
	position: absolute;
	left: 0.3rem;
	bottom: 0.5rem;
}
</style>
