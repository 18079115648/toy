<template>
    <div class="recharge_content">
        <div class="recharge_head">钻石充值</div>

        <div class="recharge_body">
            <div class="recharge">
                <div class="recharge_left">
                    <div >
                        <img src="">
                    </div>
                    <span >60</span>
                </div>
                <div class="recharge_center">
                    <div>多送6个</div>
                </div>
                <div class="recharge_right">
                    <div>¥ 6.00</div>
                </div>
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
.recharge_content{
    width: 100%;
    height: 100vh;
    background: #f5f5f5;
    padding: 0;
    margin: 0;
}
.recharge_head{
    height: .85rem;
    background: #ffe86e;
    text-align: center;
    line-height: .85rem;
}
.recharge_body{
    width: 100%;
    height: auto;
    padding: .3rem .2rem;
    font-size: .3rem;

}
.recharge{
    width: 100%;
    height: 1rem;
    background: #ffe86e;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    padding: .2rem .3rem;
    align-items: center;
    margin-bottom: .3rem;
}
.recharge_left{
    display: flex;
    align-items: center;
    font-size: .33rem;
    color: #fff;
    div{
        width: .4rem;
        height: .6rem;
        background-color: #ccc;
        margin-right: .3rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    
}
.recharge_center{
    color: #8B5F3A;
}
.recharge_right{
    color: #EA7B97;
    height: 100%;
    div{
        width: 1.8rem;
        height: 100%;
        background-color: #fff;
        border-radius: .6rem;;
        text-align: center;
        line-height: .6rem;
    }
}

</style>
