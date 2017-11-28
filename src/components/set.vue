<template>
    <div class="content">
        <Header title="设置"></Header>
        <div class="set_body">
            <div class="set_first">
                <div class="set_list">
                    <div>推送通知</div>
                    <div>
                        <mt-switch @change="pushSwitch" v-model="push"></mt-switch>
                    </div>
                </div>
                <div class="set_list">
                    <div>背景音乐</div>
                    <div>
                        <mt-switch @change="pushSwitch" v-model="music"></mt-switch>
                    </div>
                </div>
                <div class="set_list" style="border:none;">
                    <div >背景音效</div>
                    <div>
                        <mt-switch @change="pushSwitch" v-model="sound"></mt-switch>
                    </div>
                </div>
            </div>
            <div class="set_second">
                <div class="set_list">
                    <div>清除缓存</div>
                    <div>20MB</div>
                </div>
                <div class="set_list" style="border:none;" @click="intoUs">
                    <div>关于我们</div>
                    <div>
                        <img src="../../static/image/wdd.png" class="set_last_img">
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

import { Switch } from 'mint-ui';
export default {
  data () {
    return {
        push:true,
        music:true,
        sound:true,
    }
  },
  methods: {
    pushSwitch(){
        console.log(this.push)
        console.log(this.music)
        console.log(this.sound)
    },
    intoUs(){
        this.$router.push('/aboutUs')
    }
  }
}
</script>

<style lang="scss" scoped>
.set_body{
    font-size: .3rem;
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
    width: .2rem;
    height: .3rem;
    display: block;
}
</style>
