<template>
    <div class="content">
        <Header title="地址管理"></Header>

        <div class="address_body">
            <div class="address_title">
                <div class="address_hr"></div>
                <div class="address_first">江苏省苏州市吴中区淞泽家园八区35栋1303室</div>
                <div>唐先生 10101010101</div>
            </div>
            <div class="address_img">
                <div class="address">
                    <div class="img_body">
                        <!-- <img src="../../static/image/rrrr.png"> -->
                        <img src="../../static/image/bbb.png">
                        <div>默认地址</div>
                    </div>
                    <div  class="address_operation">
                        <div>
                            <img src="../../static/image/11223.png">
                            <span>编辑</span>
                        </div>
                        <div>
                            <img src="../../static/image/424.png">
                            <span>删除</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="address_body">
            <div class="address_title">
                <div class="address_hr"></div>
                <div class="address_first">江苏省苏州市吴中区淞泽家园八区35栋1303</div>
                <div>唐先生 10101010101</div>
            </div>
            <div class="address_img">
                <div class="address">
                    <div class="img_body">
                        <img src="../../static/image/rrrr.png">
                        <!-- <img src="../../static/image/bbb.png"> -->
                        <div>默认地址</div>
                    </div>
                    <div  class="address_operation">
                        <div>
                            <img src="../../static/image/11223.png">
                            <span>编辑</span>
                        </div>
                        <div>
                            <img src="../../static/image/424.png">
                            <span>删除</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="address_button_body">
            <div class="address_button" @click="address">+ 新增收获地址</div>
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
    address(){
        this.$router.push('/addAddress')
    }
  }
}
</script>

<style lang="scss" scoped>

.address_body{
    width: 100%;
    height: auto;
    padding: .4rem .3rem 0 .3rem;
    font-size: .3rem;
    color: #aaa;
    font-size: .28rem;
    
}
.address_title{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: .2rem .3rem;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    position: relative;
}
.address_hr{
    position: absolute;
    bottom: 0;
    left: 3%;
    width: 94%;
    border-bottom: solid 1px #eee;
    
}
.address_first{
    color: #000;
    font-size: .3rem;
    padding-bottom: .1rem;
}
.address_img{
    padding: 0 .3rem;
    background-color: #fff;
    border-radius: 0 0 10px 10px ;
    .img_body{
        display: flex;
        img{
            width: .4rem;
            height: .4rem;
            display: block;
            margin-right: .15rem;
        }
    }
}
.address{
    display: flex;
    padding: .3rem 0;
    justify-content: space-between;
    align-items: center;
    
}
.address_operation{
    display: flex;
    div{
        display: flex;
        align-items: center;
        margin-left: .4rem;
        img{
            width: .3rem;
            height: .3rem;
            display: block;
            margin-right: .15rem;
        }
    }
}
.address_button_body{
    height: .8rem;
    width: 100%;
    position: absolute;
    bottom: .4rem;
    padding: 0 .2rem;
    .address_button{
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
</style>
