<template>
    <div class="content">
        <Header title="钻石充值"></Header>
        <div class="recharge_body">
            <div class="recharge" v-for="item in diamond" @click="infoPayment(item.id)">
                <div class="recharge_left">
                    <img class="diamond-icon" src="../../static/image/wd.png">
                    <span >{{item.money}}</span>
                </div>
                <div class="recharge_center">
                    <div>{{item.desc}}</div>
                </div>
                <div class="recharge_right">
                    &yen; {{item.price}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
        diamond:[],
    }
  },
  created(){
    this.$api.recharge().then(res => {
        this.diamond = res.data
    }, err => {
    	
    })
  },
  methods: {
    infoPayment(id){
        this.$router.push('/payment/'+id)
    }
  }
}
</script>

<style lang="scss" scoped>
.recharge_body{
    width: 100%;
    position: absolute;
    left: 0;
    top: 0.85rem;
    bottom: 0;
    padding: .4rem .2rem;

}
.recharge{
    width: 100%;
    height: 1rem;
    display: flex;
    padding: 0 .3rem;
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
    font-size: .32rem;
    width: 2rem;
    text-shadow: 1px 0 0 #000,0 1px 0 #000,-1px 0 0 #000,0 -1px 0 #000;
    .diamond-icon{
    	width: 0.3rem;
    	margin-right: 0.2rem;
    }
    
}
.recharge_center{
    color: #956134;
    font-size: .28rem;
    font-weight: 500;
    flex: 1;
    overflow: hidden;
}
.recharge_right{
    color: #fc7298;
    height: 0.54rem;
    line-height: 0.54rem;
    border-radius: 0.54rem;
    width: 1.8rem;
    text-align: center;
    background: #fff;
    font-size: 0.3rem;
    font-weight: 700;
}

</style>
