<template>
  <div class="content">
    <Header title="充值记录"></Header>

    <div class="paymentList_body">
        <div class="head paymentList_border" v-for="item in paymentList">
            <div class="paymentList_msg" style="margin-bottom:.1rem;">
                <div class="paymentList_img">
                    <img src="../../static/image/wd.png">
                    <span>{{item.money}}</span>
                </div>
                <div class="paymentList_way">
                    <img src="../../static/image/444.png" v-if="item.type == 1">
                    <img src="../../static/image/555.png" v-if="item.type == 2">
                    <span>¥ {{item.price}}</span>
                </div>
            </div>
            <div class="paymentList_msg">
                <div>
                    <span style="color:#ccc">{{item.createTime}}</span>
                </div>
                <div>
                    <span v-if="item.status == 0">未支付</span>
                    <span v-if="item.status == 1">已完成</span>
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
        page: 1,
        pageSize: 10,
        paymentList:[],
    }
  },
  created(){
    this.$api.paymentList({
        page:this.page,
        pageSize:this.pageSize
    }).then(res => {
        this.paymentList = res.data.data
    }, err => {
        
    })
  },
  
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
