<template>
    <div class="content">

        <Header title="抓取记录"></Header>

        
        
        <div class="grabList_body" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
            <div class="grabList" @click="infoDetails(item.id)" v-for="item in grabList"  >
                <div class="left_img">
                    <img :src="item.img">
                    <!-- <video :src="item.url" class="play_video"  :poster="item.img"></video> -->
                    <!-- <img src="../../static/image/weed.png"  class="play_img" v-if="item.url != '' "> -->
                </div>
                <div class="list_content">
                    <div>{{item.name}}</div>
                    <div class="succeed" v-if="item.status == 0">抓取成功</div>
                    <div v-if="item.status == 1" class="list_status">
                        <div>
                            抓取失败
                        </div>
                        <div style="padding-left:.3rem;">
                            <div  v-if="item.appealStatus == 0">申诉中</div>
                            <div  v-if="item.appealStatus == 1" class="qq">申诉成功</div>
                            <div  v-if="item.appealStatus == 2">申诉失败</div>
                        </div>
                    </div>
                    <div class="time">{{item.createTime}}</div>
                </div>
                <div>
                    <img src="../../static/image/wdd.png" class="guide">
                </div>
            </div>
            <mt-popup
                :visible.sync="popupVisible"
                position="bottom">
            </mt-popup>

            
        </div>

        <div class="no_msg" v-if="this.grabList.length == 0">
            <img src="../../static/image/wfdfc.png">
            <div>暂无数据~</div>
        </div>
       
    </div>
    
</template>

<script>
import { Indicator,Popup } from 'mint-ui';
export default {
  data () {
    return {
        page: 1,
        pageSize: 5,
        grabList:[],
        popupVisible:true 
    }
  },
  created(){
    Indicator.open('加载中...')
    this.$api.grabList({
        page:this.page,
        pageSize:this.pageSize
    }).then(res => {
        this.grabList = res.data.data
        Indicator.close()
    }, err => {
        Indicator.close()
    })
  },
  methods: {
    infoDetails(id){
        this.$router.push('/grabDetails/'+id)
    },
    loadMore() {
    //     this.loading = true;
    //     setTimeout(() => {
    //         let last = this.pageSize + 5;
    //         for(var i = last; i<=last+5; i++ ){
    //             if(i-last== 5){
    //                 last=i
    //                 this.$api.grabList({
    //                     page:this.page,
    //                     pageSize:last
    //                 }).then(res => {
    //                     this.grabList = res.data.data
    //                 }, err => {
    //                 })
    //             }
    //         }
    //         this.loading = false;
    //     }, 2500);
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
    border-radius: 10px;
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
    padding-left: .2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .list_status{
        display: flex;
    }
    .succeed{
        color: #EA7B97;
    }
    .time{
        color: #A3A3A3;
    }
}
.list_content div{
    font-size: .3rem;
    
}
.guide{
  width: .2rem;
  height: .3rem;
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
.qq{
    color: #287DF6;
}
</style>
