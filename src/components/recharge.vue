<template>
    <div class="content">
        <Header title="钻石充值"></Header>
        <div class="recharge_body">
            <div class="recharge">
                <div class="recharge_left">
                    <div >
                        <img src="../../static/image/wd.png">
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
.recharge_body{
    width: 100%;
    height: auto;
    padding: .3rem .2rem;
    font-size: .3rem;

}
.recharge{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    padding: .2rem .3rem;
    align-items: center;
    margin-bottom: .3rem;
    background: url('../../static/image/333.png') no-repeat;
    background-size: 100% 100%;
}
.recharge_left{
    display: flex;
    align-items: center;
    font-size: .33rem;
    color: #fff;
    font-size: .4rem;
    div{
        width: .4rem;
        height: .6rem;
        margin-right: .2rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    span{
        text-shadow: -1.5px -.5px  #000;
    }
    
}
.recharge_center{
    color: #8B5F3A;
    font-size: .32rem;
    font-weight: 500;
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
