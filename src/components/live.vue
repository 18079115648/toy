<template>
  <div>
      <Header title="直播测试"></Header>


  </div>
</template>

<script>
import * as SockJS from 'sockjs-client'

export default {
  data() {
    return {
      machineSn: 'f527008d0248001',
      sock: undefined,
      roomStatus: 1, // 1有效中 0空闲
    }
  },
  created() {
    const method = this
    this.sock = new SockJS(process.env.WEBSOCKET_URL)

    // 打开成功连接
    this.sock.onopen = () => {
      console.debug('连接成功')
      this.sock.send(JSON.stringify({
        cmd: 'conn',
        headUrl: 'https://yingdd.oss-cn-hangzhou.aliyuncs.com/d5cf13b139824790bafe863949fce514.png',
        token: 'aabbd5219d893fc2fd15fd41123f0c55',
        vmc_no: 'f527008d0248001'
      }))
    }

    // 接收数据
    this.sock.onmessage = (e) => {
      
      let data = JSON.parse(e.data)
      switch(data.cmd) {
        case 'conn_r':
          if (data.status !== 200) {
            alert('房间连接失败，请退出重试')
            console.error('房间连接失败：' + data.msg)
            return;
          }

          // 自动发送心跳包（30s一次）
          method.sendHeartBeate()
          console.debug('连接服务器成功')
          break;
        case 'hb_r':
          console.debug('心跳包答复')
          break;
        case 'status':
          console.debug('游戏状态更新')
          break;
        case 'start_r':
          console.debug('游戏开始状态')
          break;
        case 'grab_r':
          console.debug('抓取' + (data.value === 1 ? '成功' : '失败'))
          break;
        default:
          console.debug('message', e.data)
          break;
      }
    }

    this.sock.onclose = () => {
      console.info('close connection')
    }

  },
  methods: {
    /**
     * 发送心跳包
     */
    sendHeartBeate() {
      if (this.sock == undefined) {
        alert('服务器连接失败，请重试')
        return
      } 

      const sock = this.sock
      setTimeout(() => {
        sock.send(JSON.stringify({
          cmd: 'hb',
          vmc_no: this.machineSn
        }))

        // 循环发送
        this.sendHeartBeate()
      }, 30000)
    },

    /**
     * 开始游戏
     */
    startGame() {
      if (this.sock == undefined) {
        alert('服务器连接失败，请重试')
        return
      }

      this.sock.send(JSON.stringify({
        cmd: 'start',
        vmc_no: this.machineSn
      }))
    },

    /**
     * 移动方向（1前2后3左4右）
     */
    moveDirection(direction) {
      if (this.sock == undefined) {
        alert('服务器连接失败，请重试')
        return
      }

      this.sock.send(JSON.stringify({
        cmd: 'move',
        vmc_no: this.machineSn,
        direction: direction
      }))
    },

    /**
     * 抓取
     */
    grab() {
      if (this.sock == undefined) {
        alert('服务器连接失败，请重试')
        return
      }

      this.sock.send(JSON.stringify({
        cmd: 'grap',
        vmc_no: this.machineSn,
      }))
    }
  },

  destoryed() {
    if (this.sock !== undefined) {
      console.debug('关闭socket连接')
      this.sock.close()
    }
  }
}
</script>
