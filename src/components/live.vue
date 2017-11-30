<template>
  <div>
      <Header title="直播测试"></Header>

      <canvas id="frontview"></canvas>
      <canvas id="sideview"></canvas>
  </div>
</template>

<script>
import {} from '../../static/js/jZego-1.0.0'

export default {
  data() {
    return {
      zegoRoomId: 'WWJ_ZEGO_12345_54323',
      zegoAppId: 3177435262,
      zegoServer: 'ws://106.15.41.49:8181/ws',
      zegoIdName: '1221',
      zegoNickName: 'Demon'
    }
  },
  created() {
    const zg = new ZegoClient()
    zg.config({
      appid: this.zegoAppId,
      server: this.zegoServer,
      idName: this.zegoIdName,
      nickName: this.zegoNickName
    })

    this.$api.getZegoToken(this.zegoAppId, this.zegoIdN).then((token) => {
      zg.login(this.zegoRoomId, 2, token, function(streamList) {
        if (streamList[0]) {
          zg.startPlayingStream(streamList[0].stream_id, document.getElementById('frontview'))
        }
        if (streamList[1]) {
          zg.startPlayingStream(streamList[1].stream_id, document.getElementById('sideview'))
        }
      }, function(error) {
        console.info(error)
        console.error('连接失败:' + error.msg)
      })
    })

    

    // 断开连接通知
    zg.onDisconnect((err) => {
      alert('服务器断开连接')
      console.error('房间断开连接[code: ' + err.code + ' , msg: ' + err.msg + ']');
    })

    // 被踢下线通知
    zg.onKickOut(() => {
      alert('被踢出')
    })

    // 流变更通知
    zg.onStreamExtraInfoUpdated((streamList) => {
    })

    // 流信息变更通知
    zg.onPlayStateUpdate((type, streamId) => {

    })
  },
  methods: {
    
  },

  destoryed() {
    
  }
}
</script>

<style scoped>
#frontview, #sideview {
  width: 100%;
  height: 400px;
}
</style>

