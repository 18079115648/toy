<template>
  <div class="content">
    <Header title="个人中心" ></Header>
    <div class="save" @click="save">保存</div>

    <div class="userInfo_body">
      <div class="head" style="border-bottom: solid 1px #f2f2f2;height: 1.3rem;">
        <div>头像</div>
        <div class="head_image" @click="openImage">
          <img :src="avatar" >
        </div>
        <input type="file" id="file" name="avatar" class="save_img"  @change="changeAvatar" accept="image/*" alt="avatar">
        <div>
          <img src="../../static/image/wdd.png" class="guide">
        </div>
      </div>
      <div class="head" style="border-bottom: solid 1px #f2f2f2;">
        <label for="user_name">昵称</label>
        <input type="text" class="nickname-text" name="user_name" placeholder="请输入昵称" v-model="nickname">
        <div>
          <img src="../../static/image/wdd.png" class="guide">
        </div>
      </div>
      <!--<div class="head" >
        <label for="user_name">邀请码</label>
        <span class="nickname-text" >{{inviteCode}}</span>
      </div>-->
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
      inviteCode: '',
      disabledBtn: false
    }
  },
  created(){
    // this.saveImg()
    this.$api.userInfo().then(res => {
      this.avatar = res.data.avatar ? res.data.avatar : '../../static/image/avatar.png'
      this.nickname = res.data.nickname
      this.inviteCode = res.data.inviteCode
    }, err => {
        
    })
  },
  methods: {
    save(){
    	if(!this.nickname) {
    		Toast({
				  message: '请填写昵称',
				  position: 'bottom',
				  duration: 1000
				});
				return
    	}
    	if(this.disabledBtn) {
    		return
    	}
    	this.disabledBtn = true
      this.$api.saveUser({
        avatar:this.avatar,
        nickname:this.nickname
      }).then(res => {
      	this.disabledBtn = false
        Toast({
				  message: '修改成功',
				  position: 'middle',
				  iconClass: 'toast-icon icon-success',
				  duration: 1000
				})
				this.$router.go(-1)
      }, err => {
         this.disabledBtn = false 
      })
    },
    openImage() {
    	document.getElementById('file').click()
    },
    changeAvatar(e){
      Indicator.open('上传中...')
      let self = this
      let file = e.target.files[0];
      let formData = new FormData()
      formData.append('image', e.target.files[0])
      this.$api.saveHead(formData).then(res => {
        this.avatar = res.data
        setTimeout(() => {
        	Indicator.close()
        },200)
        
      }, err => {
        Indicator.close()
      })
      
    }

  }
}
</script>

<style lang="scss" scoped>
.save{
	position: absolute;
	width: 1.2rem;
	height: 0.85rem;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 10;
	text-align: center;
	line-height: 0.85rem;
	color: #704a06;
    font-size: 0.28rem;
    /*font-weight: 700;*/
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
  .nickname-text{
    text-align: right;
    line-height: 1;
    padding: 0.08rem 0;
    flex: 1;
    padding-right: .3rem;
  }
}
#file{
	position: absolute;
	left: 100rem;
}
.head_image{
  position: absolute;
  // background: #ffe86e;
  height: 1rem;
  width: 1rem;
  top: 50%;
  margin-top: -.5rem;
  border-radius: 50%;
  right: .7rem;
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
  width: .16rem;
  display: block;
}

</style>
