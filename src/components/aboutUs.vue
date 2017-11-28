<template>
    <div class="content">
        <Header title="关于我们"></Header>
        <div class="aboutUs_body">
            <h3 class="title">疯狂抓娃娃</h3>
            <h3 style="font-size: 0.32rem;">V1.0.0</h3>
            <p>娃娃机，又称选物贩卖机，台湾俗称夹娃娃机，香港称夹公仔机，为一种源于日本的电子游戏，日本原名UFO CATCHER。娃娃机属于礼品贩卖机，是大型游戏机里面比较简单的一种</p>
            <p>有日式夹公仔机(2爪)及韩式夹公仔机(3爪)等种类。是指商品陈列在一个透明的箱内，其上有一个可控制抓取物品的机械手臂，使用者要凭自己的技术操控手臂，已取得自己想要的物品。因最早大多放置毛绒玩具之类的布偶填充玩具，故有之“夹娃娃”、“夹公仔”之称。</p>
        </div>
        <div class="bg"></div>
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
.content{
    width: 100vw;
    min-height: 100vh;
    background: #ffe76e url('../../static/image/455gff.png') no-repeat center bottom;
    background-size: 100% auto;
    position: relative;
    padding-top: 20%;
}
.bg{

}
.aboutUs_body{
    display: flex;
    flex-direction: column;
    padding: 0 .48rem;
    text-align: left;
    h3{
        text-align: center;
        margin-bottom: .2rem;
        color: #fff;
        font-size: 0.36rem;
        font-weight: 700;
        text-shadow: 2px 0 1px #000,0 2px 1px #000,-2px 0 1px #000,0 -2px 1px #000;
    }
    p{
        font-size: .28rem;
        text-indent: .56rem;
        padding-top: .2rem;
        font-size: .28rem;
        color: #fff;
        text-shadow: 2px 0 1px #704a06,0 2px 1px #704a06,-2px 0 1px #704a06,0 -2px 1px #704a06;
    }
}
</style>
