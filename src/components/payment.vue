<template>
    <div class="payment_content">
        <div class="payment_head">钻石充值</div>

        <div class="payment_body">
            <div class="payment">
                <div class="payment_left">
                    <div >
                        <img src="">
                    </div>
                    <span >60</span>
                </div>
               
                <div class="payment_right">
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
.payment_content{
    width: 100%;
    height: 100vh;
    background: #f5f5f5;
    padding: 0;
    margin: 0;
}
.payment_head{
    height: .85rem;
    background: #ffe86e;
    text-align: center;
    line-height: .85rem;
}
.payment_body{
    width: 100%;
    height: auto;
    padding: .3rem .2rem;
    font-size: .3rem;

}
.payment{
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
.payment_left{
    display: flex;
    align-items: center;
    font-size: .33rem;
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

.payment_right{
    height: 100%;
}

</style>
