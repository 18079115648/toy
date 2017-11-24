<template>
  <div class="content">
    <Header title="充值记录"></Header>

    <div class="paymentList_body">
        <div class="head paymentList_border" >
            <div class="paymentList_msg" style="margin-bottom:.1rem;">
                <div class="paymentList_img">
                    <img src="../../static/image/wd.png">
                    <span>60</span>
                </div>
                <div class="paymentList_way">
                    <!-- <img src="../../static/image/444.png"> -->
                    <img src="../../static/image/555.png">
                    <span>¥ 6.00</span>
                </div>
            </div>
            <div class="paymentList_msg">
                <div>
                    <span style="color:#ccc">2010-10-10 10:10</span>
                </div>
                <div>
                    <span>充值成功</span>
                </div>
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
.paymentList_body{
  padding-left:.3rem;
  background: #fff;
}
.head{
  padding-right: .3rem;
  font-size: .3rem;
  height: 1.4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
}
.paymentList_msg{
    display: flex;
    justify-content: space-between;
    .paymentList_img{
        display: flex;
        align-items: center;
        img{
            width: .34rem;
            height: .5rem;
            margin-right: .2rem;
        }
    }
    .paymentList_way{
        display: flex;
        align-items: center;
        img{
            width: .32rem;
            height: .32rem;
            margin-right: .1rem;
        }
    }
}
.paymentList_border{
    border-bottom: solid 1px #f5f5f9
}
</style>
