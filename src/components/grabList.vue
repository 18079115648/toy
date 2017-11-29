<template>
    <div class="content">
        <Header title="抓取记录"></Header>
        <div class="pagination-content">
        	<Pagination :render="render" :param="pagination" :autoload="false"  ref="pagination" uri="/dm-api/doll/log" v-show="pagination.content.length > 0">
				<div class="grabList_body" >
		            <div class="grabList" @click="infoDetails(item.id)" v-for="(item, index) in pagination.content" :key="index">
		                <div class="left_img">
		                    <img :src="item.img">
		                </div>
		                <div class="list_content">
		                    <div>{{item.name}}</div>
		                    <div class="succeed" v-if="item.status == 0">抓取成功</div>
		                    <div class="fail" v-if="item.status == 1">
		                    	抓取失败
		                    	<div v-if="item.appealStatus == 0" class="appear-text">申诉中</div>
		                    	<div v-if="item.appealStatus == 2" class="appear-text">申诉失败</div>
		                    	<div v-if="item.appealStatus == 1" class="appear-text">申诉成功</div>
		                    </div>
		                    <div class="time">{{item.createTime}}</div>
		                </div>
		                <img src="../../static/image/wdd.png" class="guide">
		            </div>
		        </div>   
			</Pagination>
			<div class="no_msg" v-if="pagination.content.length<1 && pagination.loadEnd">
	            <img src="../../static/image/wfdfc.png">
	            <div>暂无抓取记录~</div>
	        </div>
        </div>
			
	        
       
    </div>
    
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  data () {
    return {
        pagination: {
	        content: [],
	        loadEnd: false,
	        data: {
	        	page: 1,
	        	pageSize: 10
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
    infoDetails(id){
        this.$router.push('/grabDetails/'+id)
    }
  }
}
</script>

<style lang="scss" scoped>
.grabList_body{
    width: 100%;
    height: auto;
    padding: .3rem .2rem;
}
.grabList{
    width: 100%;
    height: 2.4rem;
    background-color: #fff;
    border-radius: 0.15rem;
    padding: .3rem;
    display: flex;
    align-items: center;
    margin-bottom: .3rem;
}
.left_img{
    width: 1.8rem;
    height: 1.8rem;
    background-color: #ccc;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
    }
    .play_img{
        width: .6rem;
        height: .6rem;
        display: block;
        position: absolute;
        top: 50%;
        margin-top: -.3rem;
        left: 50%;
        margin-left: -.3rem;
    }
}
.list_content{
    flex: 1;
    height: 100%;
    font-size: .28rem;
    padding-left: .2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #000;
    .succeed{
        color: #EA7B97;
    }
    .time{
        color: #aaa;
        font-size: 0.26rem;
        padding-top: 0.3rem;
    }
}
.fail{
	display: flex;
	.appear-text{
		padding-left: 0.15rem;
	}
}
.guide{
  width: .16rem;
  display: block;
}
.no_msg{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #C9CACA;
    font-size: .4rem;
    img{
        width: 1.9rem;
        height: 1.7rem;
        display: block;
        margin-bottom: .3rem;
        margin-top: 1.6rem;
    }
}
.play_video{
    width: 100%;
    height: 100%;
    display: block;
}
</style>
