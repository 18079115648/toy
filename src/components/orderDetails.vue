<template>
    <div class="content">
        <Header title="订单中心"></Header>
        <div class="orderDetails_body">
            <div class="express_body">
                <div class="express">
                    <div class="express_img "></div>
                    <div class="orderDetails_msg">
                        <div class="wait">等待发货</div>
                        <div class="orderDetails_text">暂无快递单号</div>
                    </div>
                    <div class="express_border"></div>
                </div>
                <div class="express">
                    <div class="contact_img"></div>
                    <div class="orderDetails_msg">
                        <div class="address">江苏省苏州市吴中区淞泽家园八区1303室</div>
                        <div class="orderDetails_text">唐先生：10101010101</div>
                    </div>
                </div>
            </div>

            <div class="puppets_img">
                <div class="puppetsList">
                    <div class="img_body">
                        <img src="">
                    </div>
                    <div>
                        <div style="margin-bottom: .1rem;">恐龙布朗熊公仔</div>
                        <div>x1</div>
                    </div>
                </div>
                <div class="puppetsList">
                    <div class="img_body">
                        <img src="">
                    </div>
                    <div>
                        <div style="margin-bottom: .1rem;">恐龙布朗熊公仔</div>
                        <div>x1</div>
                    </div>
                </div>
            </div>
            
            <div class="express_body order_list">
                <div style="margin-bottom: .1rem;">订单号：12318289348929</div>
                <div>创建时间：2010-10-10 10:10</div>
            </div>
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
  	
  }
}
</script>

<style lang="scss" scoped>
.orderDetails_body{
    width: 100%;
    height: auto;
    padding: .3rem .3rem;
    font-size: .3rem;
}
.express_body{
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: .3rem;
}
.express{
    display: flex;
    align-items: center;
    padding: .2rem .3rem;
    position: relative;
}
.express_img{
    width: .5rem;
    height: .5rem;
    background: url('../../static/image/dd.png') no-repeat;
    background-size: .5rem .35rem;
    background-position: center;
}
.contact_img{
    width: .5rem;
    height: .5rem;
    background: url('../../static/image/3344.png') no-repeat;
    background-size: .35rem .5rem;
    background-position: center;
}
.orderDetails_msg{
    padding-left: .3rem;
    flex: 1;
}
.express_border{
    width: 96%;
    position: absolute;
    bottom: 0;
    left: 2%;
    border-bottom: solid 1px #eee;
}
.wait{
    margin-bottom: .1rem;
    color:#559B5B;
    font-size: .3rem;
}
.address{
    margin-bottom: .1rem;
    font-size: .3rem;
}
.orderDetails_text{
    color: #666;
    font-size: .28rem;
}

.puppets_img{
    padding: 0 .3rem;
    background-color: #fff;
    border-radius: 10px ;
    margin-bottom: .3rem;
    .img_body{
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 10px;
        margin-right: .3rem;
        img{
            width: 100%;
            height: 100%;
            display: block;
        }
    }
}
.puppetsList{
    display: flex;
    padding: .3rem 0;
}
.order_list{
    padding: .2rem .3rem;
    color: #666;
    font-size: .28rem;
}
</style>
