<template>
    <div class="content">
        <Header title="抓取详情"></Header>
        <div class="grabDetails_body" >
            <div style="margin-bottom:.3rem;" >
                <div class="grabDetails_title">
                    <div> <span >抓取编号：</span>{{id}}</div> 
                    <div v-if="url == '' ">暂无视频～</div>
                    <div class="grabDetails_border"></div>
                </div>
                <div class="puppets_img">
                    <div class="puppetsList">
                        <div class="img_body" @click="video = true">
                            <img :src="img" v-if="url == ''">
                            <video :src="url" class="play_video"  :poster="img" v-if="url != ''"></video>
                            <img src="../../static/image/weed.png"  class="play_img" v-if="url != ''">
                        </div>
                        <div class="grabDetails_msg">
                            <div>{{productName}}</div>
                            <div v-if="this.status = 1">抓取失败</div>
                            <div v-if="this.status = 0" class="succeed">抓取成功</div>
                            <div style="color:#aaa;">{{createTime}}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="appeal_body"  v-if="this.status = 1 && this.reason == '' ">
                <div class="appeal_button_body">
                    <div class="appeal_button" @click="appeal">我要申诉</div>
                </div>

                <div class="problem">
                    <p>如果在游戏中遇到以下问题：</p>
                    <p>1.画面黑屏或定格</p>
                    <p>2.按键操作失灵</p>
                    <p>3.爪子卡住动不了</p>
                    <p>4.游戏中工作人员补货</p>
                </div>
            </div>
            
            <div class="replenishment" v-if="this.reason != ''">
                <div class="fail" v-if="this.appealStatus == 0">申诉中</div>
                <div class="fail" v-if="this.appealStatus == 1">申诉成功</div>
                <div class="fail" v-if="this.appealStatus == 2">申诉失败</div>
                <div>{{reason}}</div>
            </div>
            
            <div class="replenishment" v-if="this.appealStatus == 1">
                <div class="fail">处理结果</div>
                <div class="succeed">28个钻石已退回您的账户</div>
            </div>

        </div>
        <mt-actionsheet
        :actions="actions"
        v-model="Actionsheet">
        </mt-actionsheet>

            
        
    </div>
</template>

<script>
import { Actionsheet,Indicator } from 'mint-ui';
export default {
  data () {
    return {
      Actionsheet: false,
      id:this.$route.params.id,
      appeal_body: true,
      grabDetail:[],
      results:[],
      createTime:'',
      img:'',
      productName:'',
      status:'',
      appealStatus:'',
      reason:'',
      serial:'',
      url:'',
      actions:[
        {name:'画面黑屏或定格',method:this.add},
        {name:'按键操作失灵',method:this.add},
        {name:'爪子卡住动不了',method:this.add},
        {name:'游戏中工作人员补货',method:this.add},
        ]
    }
  },
  created(){
    let self = this
    this.$api.grabDetails({
        id:this.id,
    }).then(res => {
        this.url = res.data.url
        this.createTime = res.data.createTime
        this.img = res.data.img
        this.productName = res.data.productName
        this.status = res.data.status
        this.reason = res.data.appeal.reason
        this.appealStatus = res.data.appeal.status
    }, err => {
        
    })
  },
  
  methods: {
    getData(){
        this.$api.grabDetails({
            id:this.id,
        }).then(res => {
            
            this.createTime = res.data.createTime
            this.img = res.data.img
            this.productName = res.data.productName
            this.status = res.data.status
            this.reason = res.data.appeal.reason
            this.appealStatus = res.data.appeal.status
            this.url = res.data.url
        }, err => {
            
        })
    },
  	appeal(){
        this.Actionsheet = true
    },

    add: function(actions,index){
        console.log(this.url)
        Indicator.open('上传中...')
        
        this.$api.appeal({
            id: this.id,
            reason: actions.name
        }).then(res => {
            this.getData()
            Indicator.close()
        }, err => {
            Indicator.close()
            
        })
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.grabDetails_body{
    width: 100%;
    height: auto;
    padding: .3rem .3rem;
    font-size: .3rem;
}
.grabDetails_title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem .3rem;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    position: relative;
    span{
        color:#aaa;
    }
    .grabDetails_border{
        width: 96%;
        position: absolute;
        bottom: 0;
        left: 2%;
        border-bottom:solid 1px #eee;
    }
}
.puppets_img{
    padding: 0 .3rem;
    background-color: #fff;
    border-radius: 0 0 10px 10px ;
    .img_body{
        width: 1.8rem;
        height: 1.8rem;
        // background-color: #ccc;
        border-radius: 10px;
        // overflow: hidden;
        margin-right: .3rem;
        position: relative;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            display: block;
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
            z-index: 10;
        }
    }
}
.puppetsList{
    display: flex;
    padding: .3rem 0;
    font-size:.3rem;
    .grabDetails_msg{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
.replenishment{
    padding: .2rem .3rem;
    background-color: #fff;
    border-radius: 10px;
    color: #287DF6;
    font-size: .3rem;
    margin-bottom: .3rem;
    .fail{
        color: #000;
        margin-bottom: .1rem;
    }
}
.succeed{
    color: #EB6E8F;
}
.appeal_button_body{
    padding: 0 .2rem;
    margin-top: 1rem;
    .appeal_button{
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
.problem{
    margin-top: .5rem;
    padding: 0 .35rem;
    color: #999999;
    p{
        margin-bottom: .1rem;
    }
}
.qq{
    color: #287DF6;
}
.play_video{
    width: 100%;
    height: 100%;
    display: block;
    z-index: 11;
}

</style>
