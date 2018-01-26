<template>
    <div class="content">
        <Header title="充值记录"></Header>
		<div class="pagination-content">
        	<Pagination :render="render" :param="pagination" :autoload="false"  ref="pagination" uri="/dm-api/charge/log/v15" >
				<div class="paymentList_body" v-show="pagination.content.length > 0">
		            <div class="head paymentList_border" v-for="item in pagination.content">
		                <div class="paymentList_msg" style="margin-bottom:.12rem;">
		                    <div class="paymentList_img">
		                        <img :src="`${imageUrl}/erdd.png`" v-if="item.type == 3">
		                        <img  :src="`${imageUrl}/8@3x.png`" v-if="item.type != 3">
		                        <span>{{item.money}}</span>
		                    </div>
		                    <div class="paymentList_way">
		                        <img :src="`${imageUrl}/444.png`" v-if="item.source == 1">
		                        <img :src="`${imageUrl}/555.png`" v-if="item.source == 2">
		                        <span>¥ {{item.price}}</span>
		                    </div>
		                </div>
		                <div class="paymentList_msg">
		                    <div class="time">
		                        {{item.createTime}}
		                    </div>
		                </div>
		            </div>
		            
		        </div>
		        <div class="no_msg" v-show="pagination.content.length < 1 && pagination.loadEnd">
		            <img style="width: 1.5rem;"  :src="`${imageUrl}/1266f.png`">
		            <div>暂无充值记录~</div>
		        </div>
			</Pagination>
			
        </div>
		        

		        
    </div>
</template>

<script>
export default {
  data () {
    return {
    	imageUrl: this.$store.state.imageUrl,
        pagination: {
	        content: [],
	        loadEnd: false,
	        data: {
	        	page: 1,
	        	pageSize: 15
	        }
	    },
    }
  },
  mounted(){
    this.$refs.pagination.refresh()
  },
  methods: {
  	render(res) {
		res.data.forEach((item) => {
	    	this.pagination.content.push(item)
    	})
    },
    
  }
  
}
</script>

<style lang="scss" scoped>
.content{
	min-height: 100vh;
	background: #F5F5F9;
}
.paymentList_body{
  padding: 0 0.3rem;
  background: #fff;
  & > .head:last-of-type{
  	border-bottom: none;
  }
}
.head{
  padding:0.2rem 0;
  font-size: .3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  border-bottom: 1px solid #f2f2f2;
}
.paymentList_msg{
    display: flex;
    justify-content: space-between;
    .paymentList_img{
        display: flex;
        align-items: center;
        font-weight:700;
        img{
            width: .4rem;
            margin-right: .2rem;
        }
    }
    .paymentList_way{
        display: flex;
        align-items: center;
        font-weight:700;
        img{
            width: .36rem;
            margin-right: .1rem;
        }
    }
    .time{
    	color: #ababab;
    	font-size: 0.26rem;
    }
    .status{
    	font-size: 0.28rem;
    }
}

</style>
