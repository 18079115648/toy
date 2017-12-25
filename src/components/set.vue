<template>
    <div class="content">
        <Header title="设置"></Header>
        <div class="set_body">
            <div class="set_first">
                <div class="set_list">
                    <div>背景音乐</div>
                    <div>
                        <mt-switch @change="changeMusicSwitch" v-model="music"></mt-switch>
                    </div>
                </div>
                <div class="set_list" style="border:none;">
                    <div >背景音效</div>
                    <div>
                        <mt-switch @change="changeSoundSwitch" v-model="sound"></mt-switch>
                    </div>
                </div>
            </div>
            <div class="set_second">
                <div class="set_list" style="border:none;" @click="intoUs">
                    <div>关于我们</div>
                    <div>
                        <img src="../../static/image/wdd.png" class="set_last_img">
                    </div>
                </div>
            </div>
            <div class="btn-default btn-hover login-out" @click="loginOut">退出登录</div>
        </div>
        
    </div>
</template>

<script>

import { Switch } from 'mint-ui';
import storage from '../fetch/storage'
export default {
  data () {
    return {
        push:true,
        music:true,
        sound:true,
    }
  },
  created() {
      if (storage.get('music_switch') != null) {
          this.music = storage.get('music_switch')
      }
      if (storage.get('sound_switch') != null) {
          this.sound = storage.get('sound_switch')
      }
  },
  methods: {
    /**
     * 背景音乐开关
     */
    changeMusicSwitch(){
        storage.set('music_switch', this.music)
    },
    /**
     * 背景音效开关
     */
    changeSoundSwitch() {
        storage.set('sound_switch', this.sound)
    },

    intoUs(){
        this.$router.push('/aboutUs')
    },

    //退出登录
    loginOut() {
        window.localStorage.clear()
        this.$router.replace('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.set_body{
    padding-top: 0.3rem;
}
.set_first{
    padding-left: .3rem;
    background-color: #fff;

}
.set_list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1rem;
    border-bottom: solid 1px #eee;
    padding-right: .3rem;
}
.set_second{
    padding-left: .3rem;
    background-color: #fff;
    margin-top: .4rem;
}
.set_last_img{
    width: .16rem;
    display: block;
}
.login-out{
    position:absolute;
    bottom: 1rem;
    left: 0.3rem;
}
</style>
