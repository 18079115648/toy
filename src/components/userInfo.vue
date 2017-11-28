<template>
  <div class="content">
    <Header title="个人中心" ></Header>
    <div class="save" @click="save">保存</div>

    <div class="userInfo_body">
      <div class="head" style="border-bottom: solid 1px #eee;height: 1.3rem;">
        <div>头像</div>
        <div class="head_image">
          <img :src="avatar" >
        </div>
        <input type="file" name="avatar" class="save_img"  @change="changeAvatar" accept="image/*" alt="avatar">
        <div>
          <img src="../../static/image/wdd.png" class="guide">
        </div>
      </div>
      <div class="head">
        <label for="user_name">昵称</label>
        <input type="text" name="user_name" placeholder="请输入昵称" v-model="nickname">
        <div>
          <img src="../../static/image/wdd.png" class="guide">
        </div>
      </div>
    </div>
  </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import { Toast,Indicator } from 'mint-ui';
export default {
  data () {
    return {
      avatar:'../../static/image/avatar.png',
      nickname:'',
    }
  },
  created(){
    // this.saveImg()
    this.$api.userInfo().then(res => {
      this.avatar = res.data.avatar
      this.nickname = res.data.nickname
    }, err => {
        
    })
  },
  methods: {
    save(){
      this.$api.saveUser({
        avatar:this.avatar,
        nickname:this.nickname
      }).then(res => {
        if(res.errCode == 0){
          Toast({
            message: '保存成功',
            position: 'bottom',
            duration: 3000
          });
          this.$router.push('/user/')
        }else{
          Toast({
            message: res.errMsg,
            position: 'bottom',
            duration: 3000
          });
        }
        
      }, err => {
          
      })
    },
    changeAvatar(e){
      Indicator.open('上传中...')
      let self = this
      let file = e.target.files[0];
      let formData = new FormData()
      formData.append('image', e.target.files[0])
      this.$api.saveHead(formData).then(res => {
        this.avatar = res.data
        Indicator.close()
      }, err => {
        Indicator.close()
      })
      
    }

  }
}
</script>

<style lang="scss" scoped>
.save{
  text-align: right;
  height: .85rem;
  line-height: .85rem;
  color: #704a06;
  font-size: 0.28rem;
  font-weight: 700;
  padding-right: .3rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
}
.userInfo_body{
  padding-left:.3rem;
  background: #fff;
}
.head{
  display: flex;
  justify-content: space-between;
  padding-right: .3rem;
  height: 1rem;
  align-items: center;
  font-size: .28rem;
  position: relative;
  overflow: hidden;
  input{
    text-align: right;
    font-size: .30rem;
    font-weight: 400;
    flex: 1;
    padding-right: .3rem;
  }
}
.head_image{
  position: absolute;
  // background: #ffe86e;
  height: 1rem;
  width: 1rem;
  top: 50%;
  margin-top: -.5rem;
  border-radius: 50%;
  right: .8rem;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 50%;
    
  }
}
.save_img{
  width: .5rem;
  height: 1rem;
  z-index: 10;
  position: absolute;
  background-color: #FAE951;
  right: .3rem;
  opacity: 0;

}
.guide{
  width: .2rem;
  height: .3rem;
  display: block;
}




.container {
        padding-left: .22rem;
        background: #FFF;
        margin-top: .4rem;
    }
    .container .row:first-child {
        border-top: 0;   
    }
    .clear {
        clear: both;
    }
    .row {
        padding: .26rem .22rem .26rem 0;
        text-align: left;
        color: #666;
        border-top: 1px solid #EEE;
        font-size: .26rem;
    }
    .row.avatar label {
        height: 1rem;
        line-height: 1rem;
        display: block;
    }
    .row img {
        float: right;
        height: 1rem;
        width: 1rem;
        border-radius: 1rem;
        margin-right: .2rem;
    }
    .row input {
        font-size: .26rem;
        float: right;
        text-align: right;
        width: 3rem;
        padding-right: .1rem;
        color: #666;
        border: 0;
    }
    .row .arrow {
        float: right;
    }
    .row .arrow:before {
        content: '\003e';
        color: #999;
        font-size: .3rem;
    }
    .row .avatar-input {
        opacity: 0;
        float: right;
    }
</style>
