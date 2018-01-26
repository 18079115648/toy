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
                <router-link to="/aboutUs" v-tap class="set_list" style="border:none;">
                    <div>关于我们</div>
                    <div>
                        <img :src="`${imageUrl}/wdd.png`" class="set_last_img">
                    </div>
                </router-link>
            </div>
            <div class="btn-default btn-hover login-out" v-tap="{ methods : loginOut }">退出登录</div>
        </div>
        
    </div>
</template>

<script>

import { Switch } from 'mint-ui';
import storage from '../fetch/storage'
export default {
  data () {
    return {
    	imageUrl: this.$store.state.imageUrl,
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


    //退出登录
    loginOut() {
    	let operatorKey = storage.get('operatorKey') ? storage.get('operatorKey') : false
        window.localStorage.clear()
        this.$router.replace('/login')
        storage.set('operatorKey', operatorKey)
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
	background: #F5F5F9;
	min-height: 100vh;
}
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
