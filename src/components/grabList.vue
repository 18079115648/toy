<template>
    <div class="content">

        <Header title="抓取记录"></Header>
        <div class="grabList_body">
            <div class="grabList" @click="infoDetails">
                <div class="left_img">
                    <img src="">
                </div>
                <div class="list_content">
                    <div>粉红小猪猪</div>
                    <!-- <div class="succeed">抓取成功</div> -->
                    <div>抓取失败</div>
                    <div class="time">2010-10-10 12:12</div>
                </div>
                <div>
                    <img src="../../static/image/wdd.png" class="guide">
                </div>
            </div>
            <div class="grabList">
                <div class="left_img">
                    <img src="">
                </div>
                <div class="list_content">
                    <div>粉红小猪猪</div>
                    <div class="succeed">抓取成功</div>
                    <!-- <div>抓取失败</div> -->
                    <div class="time">2010-10-10 12:12</div>
                </div>
                <div>
                    <img src="../../static/image/wdd.png" class="guide">
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
    infoDetails(){
        this.$router.push('/grabDetails')
    }
  }
}
</script>

<style lang="scss" scoped>
.grabList_body{
    width: 100%;
    height: auto;
    padding: .3rem .2rem;
}
.grabList{
    width: 100%;
    height: 2.4rem;
    background-color: #fff;
    border-radius: 10px;
    padding: .3rem;
    display: flex;
    align-items: center;
    margin-bottom: .3rem;
}
.left_img{
    width: 1.8rem;
    height: 1.8rem;
    background-color: #ccc;
    border-radius: 10px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
    }
}
.list_content{
    flex: 1;
    height: 100%;
    font-size: .28rem;
    padding-left: .2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .succeed{
        color: #EA7B97;
    }
    .time{
        color: #A3A3A3;
    }
}
.guide{
  width: .2rem;
  height: .3rem;
  display: block;
}

</style>
