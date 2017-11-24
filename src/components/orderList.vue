<template>
    <div class="content">
        <Header title="订单中心"></Header>
        <div class="orderList_body">
            <div class="orderList_title">
                <div>订单：5263137153715</div>
                <div>代发货</div>
            </div>
            <div class="puppets_img">
                <div class="puppetsList">
                    <div class="img_body">
                        <img src="">
                    </div>
                    <div>
                        <div>恐龙布朗熊公仔</div>
                        <div>x1</div>
                    </div>
                </div>
                <div class="puppetsList">
                    <div class="img_body">
                        <img src="">
                    </div>
                    <div>
                        <div>恐龙布朗熊公仔</div>
                        <div>x1</div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="orderList_body">
            <div class="orderList_title">
                <div>订单：5263137153715</div>
                <div>代发货</div>
            </div>
            <div class="puppets_img">
                <div class="puppetsList">
                    <div class="img_body">
                        <img src="">
                    </div>
                    <div>
                        <div>恐龙布朗熊公仔</div>
                        <div>x1</div>
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
  },
  methods: {
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.orderList_body{
    width: 100%;
    height: auto;
    padding: .3rem .3rem;
    font-size: .3rem;
}
.orderList_title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem .3rem;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    border-bottom: solid 1px #eee;
}
.puppets_img{
    padding: 0 .3rem;
    background-color: #fff;
    border-radius: 0 0 10px 10px ;
    .img_body{
        width: 1.8rem;
        height: 1.8rem;
        // background-color: #ccc;
        border-radius: 10px;
        // overflow: hidden;
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
</style>
