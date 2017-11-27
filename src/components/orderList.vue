<template>
    <div class="content">
        <Header title="订单中心"></Header>
        <div class="orderList_body" @click="infoDetails(item.orderSn)" v-for="item in orderList">
            <div class="orderList_title">
                <div><span style="color:#888">订单号：</span>{{item.orderSn}}</div>
                <div v-if="item.status == 1">代发货</div>
                <div v-if="item.status == 0">已发货</div>
            </div>
            <div class="puppets_img">
                <div class="puppetsList" v-for="list in item.productList">
                    <div class="img_body">
                        <img :src="list.img">
                    </div>
                    <div>
                        <div style="margin-bottom: .1rem;">{{list.name}}</div>
                        <div>x{{list.num}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="no_msg" v-if="this.orderList.length == 0">
            <img src="../../static/image/wfdfc.png">
            <div>暂无数据~</div>
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
        page: 1,
        pageSize: 10,
        orderList:[],
        orderSn:'',
    }
  },
  created(){
    this.$api.orderList({
        page:this.page,
        pageSize:this.pageSize
    }).then(res => {
        this.orderList = res.data.data
    }, err => {
        
    })
  },
  methods: {
  	infoDetails(orderSn){
        this.$router.push('/orderDetails/'+orderSn)
    }
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
    font-size: .28rem;
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
.succeed{
    color: #EB6E8F;
}
.no_msg{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #C9CACA;
    font-size: .4rem;
    img{
        width: 1.9rem;
        height: 1.7rem;
        display: block;
        margin-bottom: .3rem;
        margin-top: 2rem;
    }
}
</style>
