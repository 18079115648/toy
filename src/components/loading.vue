<template>
  <div class="loading-container">
      <h3>抓娃娃</h3>
    <!-- <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
    </div> -->
    <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    </div>
  </div>
</template>

<script>
import storage from '../fetch/storage'

export default {
data() {
    return  {
        loadCount: 0
    }
},
created() {
  this.a()
},
mounted() {
    
},
methods: {
  a() {
    document.addEventListener("WeixinJSBridgeReady", function () {  
      document.getElementById('bg-audio').play()
    }, false);  
    
  },

    /**
     * 加载完成检查
     */
    loadCheck() {
        this.loadCount++
        if (this.loadCount === 6) {
            let history = storage.get('history')
            // if (history) {
                // this.$router.push(history)
            // } else {
                this.$router.push('/index')
            // }
        }
    },

    loadAudios() {
        const parent = this

        // 背景音乐
        this.$bgAudio = new Audio()
        this.$bgAudio.src = '../../static/audio/bgm02.mp3'
        this.$bgAudio.onloadedmetadata = function() {
            console.info('背景音乐加载完成')
            parent.loadCheck()
        }

        // 点击音效
        this.$clickAudio = new Audio()
        this.$clickAudio.src = '../../static/audio/startClickItem.mp3'
        this.$clickAudio.onloadedmetadata = function() {
            console.info('点击音乐加载完成')
            parent.loadCheck()
        }

        // 准备音效
        this.$readyGoAudio = new Audio()	
        this.$readyGoAudio.src = '../../static/audio/readygo.mp3'
        this.$readyGoAudio.onloadedmetadata = function() {
            console.info('准备音乐加载完成')
            parent.loadCheck()
        }

        // 抓取成功音效
        this.$successAudio = new Audio()	
        this.$successAudio.src = '../../static/audio/result_succeed.mp3'
        this.$successAudio.onloadedmetadata = function() {
            console.info('抓取成功音效加载完成')
            parent.loadCheck()
        }

        // 抓取失败音效  
        this.$failureAudio = new Audio()
        this.$failureAudio.src = '../../static/audio/result_failed.mp3'
        this.$failureAudio.onloadedmetadata = function() {
            console.info('抓取失败音效加载完成')
            parent.loadCheck()
        }

        // 抓取音效
        this.$takeAudio = new Audio()
        this.$takeAudio.src = '../../static/audio/take.mp3'
        this.$takeAudio.onloadedmetadata = function() {
            console.info('抓取音效加载完成')
            parent.loadCheck()
        }
    }
}
}
</script>

<style scoped>
.loading-container {
    width: 100%;
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    background: #1abc9c;
}

.loading-container h3 {
    color: #fff;
    text-align: center;
    margin-top: 40px;
    font-size: 18px;
}

/* 动画效果1 */
/* .sk-folding-cube {
  margin: 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  -webkit-transform: rotateZ(45deg);
          transform: rotateZ(45deg);
}

.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
          transform: scale(1.1); 
}
.sk-folding-cube .sk-cube:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
          animation: sk-foldCubeAngle 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}
.sk-folding-cube .sk-cube2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
          transform: scale(1.1) rotateZ(90deg);
}
.sk-folding-cube .sk-cube3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
          transform: scale(1.1) rotateZ(180deg);
}
.sk-folding-cube .sk-cube4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
          transform: scale(1.1) rotateZ(270deg);
}
.sk-folding-cube .sk-cube2:before {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
.sk-folding-cube .sk-cube3:before {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s; 
}
.sk-folding-cube .sk-cube4:before {
  -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
}
@-webkit-keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  } 
}

@keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  }
} */


/* 动画效果2 */
.spinner {
  margin: 200px auto;
  width: 80px;
  height: 50px;
  text-align: center;
  font-size: 14px;
}

.spinner > div {
  background-color: #fff;
  height: 100%;
  width: 6px;
  display: inline-block;
  
  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
  20% { -webkit-transform: scaleY(1.0) }
}

@keyframes sk-stretchdelay {
  0%, 40%, 100% { 
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}


</style>


