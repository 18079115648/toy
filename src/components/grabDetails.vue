<template>
    <div class="content">
        <Header title="抓取详情"></Header>
        <div class="grabDetails_body" >
            <div class="grab-info" >
                <div class="grabDetails_title">
                    <div> <span >抓取编号：</span>{{grabInfo.id}}</div> 
                </div>
                <div class="puppets_img">
                    <div class="puppetsList">
                        <div class="img_body" v-if="grabInfo.url">
                            <video 
                            	@click="play"
                            	id="video"
                            	x-webkit-airplay="allow" 
                            	:src="grabInfo.url" 
                            	class="play_video"  
                            	webkit-playsinline="true"   
						      	playsinline="true"
                            	:poster="grabInfo.img">
                            </video>
                            <img src="../../static/image/weed.png" @click="play"  class="play_img">
                        </div>
                        <div class="img_body none-video" v-if="!grabInfo.url">
                        	<img class="none-img" src="../../static/image/none-video.png"  />
                        	<p class="none-text">暂无视频</p>
                        </div>
                        <div class="grabDetails_msg">
                            <div>{{grabInfo.productName}}</div>
                            <div v-if="grabInfo.status">抓取失败</div>
                            <div v-if="!grabInfo.status" class="succeed">抓取成功</div>
                            <div class="time">{{grabInfo.createTime}}</div>
                        </div>
                    </div>
                </div>
                <div class="appear-info" v-if="grabInfo.status == 1 && status != 0">
                	<div class="status">
                		<span class="tit">申诉状态：</span>
                		<span class="text" v-if="grabInfo.appeal.status == 0">申诉中</span>
                		<span class="text" v-if="grabInfo.appeal.status == 1">申诉成功</span>
                		<span class="text" v-if="grabInfo.appeal.status == 2">申诉失败</span>
                	</div>
                	<div class="reason">
                		<span class="tit">申诉原因：</span>
                		<span class="text">{{grabInfo.appeal.reason}}</span>
                		
                	</div>
                </div>
            </div>

            <div class="appeal_body"  v-if="grabInfo.status == 1 && !grabInfo.appeal ">
				<div class="btn-default btn-hover" @click="Actionsheet = true">我要申诉</div>
                <div class="problem">
                    <p>如果在游戏中遇到以下问题：</p>
                    <p>1. 画面黑屏或定格</p>
                    <p>2. 按键操作失灵</p>
                    <p>3. 爪子卡住动不了</p>
                    <p>4. 游戏中工作人员补货</p>
                </div>
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
	    actions:[
	        {name:'画面黑屏或定格',method:this.add},
	        {name:'按键操作失灵',method:this.add},
	        {name:'爪子卡住动不了',method:this.add},
	        {name:'游戏中工作人员补货',method:this.add},
        ],
        // status:'',
        grabInfo: {},
    }
  },
  created(){
    Indicator.open('加载中...')
    this.initData()
    
  },
  
  methods: {
  	play() {
  		let video = document.getElementById('video')
  		if(video.paused) {
  			document.getElementById('video').play()
  		}else {
  			document.getElementById('video').pause()
  		}
  		
  	},
    initData(){
        
        this.$api.grabDetails({
	        id:this.id,
	    }).then(res => {
            this.grabInfo = res.data
            Indicator.close()
            
	    }, err => {
            Indicator.close()
        })
        
    },
    add(actions,index) {
    	Indicator.open()
        this.$api.appeal({
            id: this.id,
            reason: actions.name
        }).then(res => {
            this.initData()
            setTimeout(() => {
            	Indicator.close()
            },200)
            
        }, err => {
            Indicator.close()
            
        })
        
    },
    show_url(){
        var myVideo = document.getElementById("video");
        if(this.play == true){
            myVideo.play();
            this.play = false
        }else if(this.play == false){
            myVideo.pause();
            this.play = true
        }
        
            

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
    font-size: .28rem;
}
.grab-info{
	border-radius: 0.15rem;
	background: #FFFFFF;
	padding: 0.1rem 0.3rem;
	color: #000;
	margin-bottom: 0.3rem;
}
.grabDetails_title{
    display: flex;
    padding: .15rem 0;
    position: relative;
    border-bottom:1px solid #f2f2f2;
    span{
        color:#aaa;
    }
    
}
.appear-info{
	padding: 0.3rem 0 0.2rem;
	border-top:1px solid #f2f2f2;
	&>div{
		display: flex;
	}
	&>div>span.tit{
		color: #aaa;
	}
	&>div>span.text{
		flex: 1;
		overflow: hidden;
	}
	.reason{
		color: #287DF6;
		padding-top: 0.06rem;
	}
}
.puppets_img{
    .img_body{
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 0.15rem;
        margin-right: .3rem;
        position: relative;
        overflow: hidden;
        &.none-video{
        	border: 1px solid #f2f2f2;
        	padding-top: 0.3rem;
        	background: #eee;
        }
        
        .none-img{
        	display: block;
        	width: 100%;
        }
        .none-text{
        	text-align: center;
        	padding-top: 0.2rem;
        	font-size: 0.24rem;
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
}
.puppetsList{
    display: flex;
    padding: .3rem 0;
    .grabDetails_msg{
        display: flex;
        flex: 1;
        overflow: hidden;
        flex-direction: column;
        justify-content: space-between;
        .time{
        	padding-top: 0.25rem;
        	color: #aaa;
        }
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
.appeal_body{
	padding-top: 0.5rem;
}
.problem{
    margin-top: .5rem;
    padding: 0 .35rem;
    color: #999999;
    font-size: 0.26rem;
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
    border-radius: 0.15rem;
}

</style>
