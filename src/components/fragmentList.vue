<template>
    <div class="content">
        <Header title="我的碎片" v-if="!isHybrid"></Header>
        <div class="pagination-content" :class="{'isHybrid' : isHybrid}">
        	<Pagination :render="render" :param="pagination" :autoload="false"  ref="pagination" uri="/dm-api/fragment/member" >
				<div class="grabList_body" v-show="pagination.content.length > 0">
		            <div class="grabList" v-for="(item, index) in pagination.content" :key="index">
		                <div class="left_img">
		                    <img :src="item.img">
		                </div>
		                <div class="list_content">
		                    <div class="name">{{item.name}}</div>
		                    <div class="num">x{{item.num}}</div>
		                </div>
		            </div>
		        </div>  
		        <div class="no_msg bg-color" v-if="pagination.content.length<1 && pagination.loadEnd">
		            <img :src="`${imageUrl}/3@3x.png`">
		            <div>暂无碎片~</div>
		        </div>
			</Pagination>
			
        </div>
			
	        
       
    </div>
    
</template>

<script>
export default {
  data () {
    return {
    	isHybrid: this.$common.isHybrid(),
    	imageUrl: this.$store.state.imageUrl,
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
  created() {

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
.isHybrid{
	top: 0 !important;
}
.grabList_body{
    width: 100%;
    height: auto;
    padding: .3rem .2rem;
}
.grabList{
    width: 100%;
    height: 2.2rem;
    background-color: #fff;
    border-radius: 0.15rem;
    padding: .3rem;
    display: flex;
    align-items: center;
    margin-bottom: .3rem;
}
.left_img{
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        display: block;
    }
   
}
.list_content{
    flex: 1;
    height: 100%;
    padding-left: .3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
    
}
</style>
