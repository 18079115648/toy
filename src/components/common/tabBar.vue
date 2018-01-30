<template>
<div>
    <div class="menu-blank"></div>
    <ul class="nav_bottm">
        <li :class="{'active':actived == 'first'}">
            <router-link to='/index' replace>
            	<img v-show="actived == 'first'" :src="`${imageUrl}/1-1-01.png`"  alt="娃娃袋"/>
                <img v-show="actived != 'first'" :src="`${imageUrl}/1-2-01.png`"  alt="娃娃袋"/>
                <div>首页</div>
            </router-link>
        </li>
        <li :class="{'active':actived == 'second'}">
            <router-link to='/toysBox' replace>
                <img v-show="actived == 'second'" :src="`${imageUrl}/4-1-01.png`"  alt="娃娃袋"/>
                <img v-show="actived != 'second'" :src="`${imageUrl}/4-2-01.png`"  alt="娃娃袋"/>
                <div>娃娃袋</div>
            </router-link>
        </li>
        <li :class="{'active':actived == 'third'}">
            <router-link to='/intergalMall' replace>
                <img v-show="actived == 'third'" :src="`${imageUrl}/3-1-01.png`" alt="商城"/>
                <img v-show="actived != 'third'" :src="`${imageUrl}/3-2-01.png`" alt="商城"/>
                <div>商城</div>
            </router-link>
        </li>
        <li :class="{'active':actived == 'four'}">
            <router-link to='/user' replace>
                <img v-show="actived == 'four'" :src="`${imageUrl}/2-1-01.png`" alt="我的"/>
                <img v-show="actived != 'four'" :src="`${imageUrl}/2-2-01.png`" alt="我的"/>
                <div>我的</div>
            </router-link>
        </li>
    </ul>
</div>
</template>

<script>
    export default {
        props: ['actived'],
        data () {
		    return {
		      imageUrl: this.$store.state.imageUrl,
		    }
		},
    }
</script>

<style scoped lang="scss">
    @import "../../../static/css/style.scss";
    .menu-blank {
        height: 1rem;
    }
    .nav_bottm{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        background: $footer-bgcolor;
        border-top: 1px solid $footer-border-color;
        box-sizing: border-box;       
        display: flex;
        z-index: 10;
    }
    .nav_bottm li{
        flex: 1;
        display: flex;
        &.active a{
        	color: $footer-active-text-color;
        }
        a{
        	display: block;
	        width: 100%;
	        color: $footer-text-color;
	        text-align: center;
	        padding-top: 0.14rem;
	        .iconfont{
	        	font-size: 0.4rem;
	        	line-height: 1;
	        }
        }
    }
    .nav_bottm img{
        height: 0.4rem;
        display: block;
        margin:0 auto ;
    }
    .nav_bottm div{
        font-size: 0.22rem;
        text-align: center;
        line-height: 0.44rem;
    }
</style>
