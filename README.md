# catchtoys

> 娃娃机h5版本

## 版本列表如下

``` bash
# crazy1.5
公司最新版本娃娃机

# 版本切换
#主要有三个地方
#1. src/vuex/store.js
  const state = {
      appName: '任我抓', //app名称
      roomLoadImg: 'https://yingdd.oss-cn-hangzhou.aliyuncs.com/90530c7ba350e128fa64cee4d4aee58a.jpg', //房间loading图片
      shareLogo: 'https://yingdd.oss-cn-hangzhou.aliyuncs.com/79aa741598a6d9ab392b91cc309637a1.png',   //分享图片
      imageUrl: '/static/image/renwozhua',
      bgAudio: 'https://yingdd.oss-cn-hangzhou.aliyuncs.com/d0bda63fee3ad56ab8938d349b791fa1.mp3',  //背景音乐
      clickAudioUrl: '/static/audio/click.mp3', // 按钮点击音效
      grabAudioUrl: 'https://yingdd.oss-cn-hangzhou.aliyuncs.com/9b38b54c6af6f4113a476df225043a01.mp3', //点击抓取音效
      moveAudioUrl: '/static/audio/move.mp3',   //点击方向键移动音效
      readyGoAudioUrl: '/static/audio/readygo.mp3', //readyGo开始音效
      successAudioUrl: 'https://yingdd.oss-cn-hangzhou.aliyuncs.com/fa81942687d7d259c7f4979a00367a48.mp3', //抓取成功音效
      failAudioUrl: 'https://yingdd.oss-cn-hangzhou.aliyuncs.com/e95cb5cc6a8070f063b09ce9f6843b18.mp3',    //抓取失败音效

      WEBSOCKET_URL: 'https://api.zwwgame.com/netty/socket-wawaji',  //socket
      WEIXIN: {  //微信登录信息
          APP_ID: 'wx74953a61b831d625',
          REDIRECT_URI: 'https://h5.zwwgame.com/'
      },
  }
#2. static/css/style.scss
用于对各页面定制化样式
#3. static/image/
替换需要修改的图标


# xmren
熊喵人娃娃机项目公众号， 支持微信登录、支付
为crazy版本bug修复版本

# xiaozhu
北京小主娃娃机项目公众号， 支持微信登录、支付
为xmren版本同步版本

# allinZego
澳IN娱乐娃娃机项目公众号， 原U抓版本，支持微信登录、支付
# wanba2.0
澳IN娱乐娃娃机项目玩吧版，参照crazy版本

# 其余版本为过渡测试版本
```

