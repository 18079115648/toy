<template>
  <div class="content">
    <Header title="个人中心"></Header>

    <div class="userInfo_body">
      <div class="head" style="border-bottom: solid 1px #eee;height: 1.3rem;">
        <div>头像</div>
        <div class="head_image"></div>
        <div>
          <img src="../assets/34@3x.png" class="guide">
        </div>
      </div>
      <div class="head">
        <label for="user_name">昵称</label>
        <input type="text" name="user_name" placeholder="请输入昵称">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
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
  input{
    text-align: right;
    font-size: .28rem;
  }
}
.head_image{
  position: absolute;
  background: #ffe86e;
  height: 1rem;
  width: 1rem;
  top: 50%;
  margin-top: -.5rem;
  border-radius: 50%;
  right: .8rem;
}
.guide{
  width: .2rem;
  height: .3rem;
  display: block;
}

</style>
