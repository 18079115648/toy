<template>
    <div class="content">
        <Header title="新增地址"></Header>

        <div class="addAddress_body">
            <div class="addAddress_msg">
                <label for="people">联系人</label>
                <input type="text" name="people" placeholder="请输入姓名">
            </div>
            <div class="addAddress_msg">
                <label for="phone">联系电话</label>
                <input type="text" name="phone" placeholder="请输入手机号">
            </div>
            <div class="addAddress_msg">
                <label for="phone">联系电话</label>
                <input type="text" name="phone" placeholder="请输入手机号">
            </div>
            <textarea placeholder="请填写详细地址~" class="trueAddress"></textarea>
        </div>


        <div class="addAddress_button_body">
            <div class="addAddress_button" @click="addAddress">确认</div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
       
    }
  },
  methods: {
    addAddress(){

    }
  }
}
</script>

<style lang="scss" scoped>
.addAddress_body{
    width: 100%;
    background-color: #fff;
    padding-left: .3rem;
}
.addAddress_msg{
    font-size: .3rem;
    display: flex;
    padding: .3rem .3rem .3rem 0;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #eee;
    input{
        font-size: .3rem;
        text-align: right;
        
    }
}
.addAddress_button_body{
    height: .8rem;
    width: 100%;
    position: absolute;
    bottom: .4rem;
    padding: 0 .2rem;
    .addAddress_button{
        height: .8rem;
        width: 100%;
        background-color: #F7D168;
        border-radius: .4rem;
        text-align: center;
        line-height: .8rem;
        font-size: .38rem;
        font-weight: 400;
    }
}
.trueAddress{
    width: 100%;
    height: 2rem;
    border: none;
    font-size: .3rem;
    padding: .3rem .3rem .2rem 0;
}
</style>
