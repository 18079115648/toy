<template>

    <div class="content">
        <Header title="钻石充值"></Header>
        <div class="payment_body">
            <div class="payment" v-for="item in payment" v-if="item.id == id">
                <div class="payment_left">
                    <div >
                        <img src="../../static/image/wd.png">
                    </div>
                    <span class="payment_left_text">{{item.money}}</span>
                </div>
               
                <div class="payment_right">
                    <div>¥ {{item.price}}</div>
                </div>
            </div>

            <div class="payment_way">
                <div class="payment_way_body payment_way_top">
                    <div class="way_left">
                        <img src="../../static/image/444.png">
                    </div>
                    <div class="payment_way_text">支付宝支付</div>
                    <div class="way_right">
                        <img src="../../static/image/bbb.png" v-if="type == 1" @click="type = 3">
                        <img src="../../static/image/rrrr.png" v-if="type == 2" @click="type = 1">
                        <img src="../../static/image/rrrr.png" v-if="type == 3" @click="type = 1">
                    </div>
                </div>
                <div class="payment_way_body payment_way_bottom">
                    <div class="way_left">
                        <img src="../../static/image/555.png">
                    </div>
                    <div class="payment_way_text">微信支付</div>
                    <div class="way_right">
                        <img src="../../static/image/bbb.png" v-if="type == 2" @click="type = 3">
                        <img src="../../static/image/rrrr.png" v-if="type == 1" @click="type = 2">
                        <img src="../../static/image/rrrr.png" v-if="type == 3" @click="type = 2">
                    </div>
                </div>
            </div>

            <div class="payment_button_body">
                <div class="payment_button" @click="confirmPay">确认支付</div>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
        id:this.$route.params.id,
        price:'',
        money:'',
        payment:[],
        type:1
    }
  },
  created(){
    this.$api.recharge().then(res => {
        this.payment = res.data
    }, err => {
    	
    })
  },
  methods: {
    confirmPay(){
        if(this.type == 3){
            Toast({
                message: '请选择支付方式',
                position: 'bottom',
                duration: 1000
            })
        }else{
            this.$api.payment({
                id: this.id,
                type: this.type
            }).then(res => {
                if(res.errMsg == 0){
                    Toast({
                        message: '充值成功',
                        position: 'bottom',
                        duration: 1000
                    })
                }
            }, err => {
                
            })
        }
        
    }
  }
}
</script>

<style lang="scss" scoped>
.payment_body{
    width: 100%;
    height: auto;
    padding: .3rem .2rem;
    font-weight: 600;
}
.payment{
    width: 100%;
    height: 1rem;
    background: #fff;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    padding: .2rem .3rem;
    align-items: center;
    margin-bottom: .3rem;
    font-size: .36rem;
}
.payment_left{
    display: flex;
    align-items: center;
    div{
        width: .34rem;
        height: .5rem;
        margin-right: .2rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .payment_left_text{
       
    }
    
}

.payment_right{
    height: 100%;
    font-size: .32rem;
    line-height: .6rem;
}
.payment_way{
    margin-bottom: 1.2rem;
}
.payment_way_body{
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    align-items: center;
    padding-left: .2rem;
    padding-right: .3rem;
    width: 100%;
    height: 1rem;
    .way_left{
        width: .5rem;
        height: .5rem;
        img{
            width: 100%;
            height: 100%;

        }
    }
    .way_right{
        width: .4rem;
        height: .4rem;
        img{
            width: 100%;
            height: 100%;
            
        }
    }
}
.payment_way_text{
    flex: 1;
    font-size: .3rem;
    padding-left: .2rem;
}
.payment_way_top{
    border-bottom:solid 1px #eee;
    border-radius: 15px 15px 0 0;
}
.payment_way_bottom{
    border-radius: 0 0 15px 15px;
}
.payment_button_body{
    padding: 0 .2rem;
    .payment_button{
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
