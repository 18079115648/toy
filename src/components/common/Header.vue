<template>
    <div class="header">
	    <div class="headPart" :class="headClass">
	        <div class="headCont" >
	            <div v-tap="{ methods : goBack }" class="back" v-if="!hiddenBack">
	                <i class="iconfont icon-zuojiantou"></i>
	            </div>
	            <slot>
	            	<p class="defalut-slot">{{title}}</p>
	            </slot>
	        </div>
	    </div>
	    <div class="menu-blank" style="height: 0.85rem;"></div>
	    
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: false
            },
            back: {
                type: String,
                required: false
            },
            headClass: {
                type: String,
                required: false
            }
        },
        data: function () {
            return {
                hiddenBack: false
            }
        },
        created: function() {
            if (this.back === 'hidden') {
                this.hiddenBack = true
            }
        },
        methods: {
            goBack() {
                if (!this.back) {
                    this.$router.back()
                } else {
                    this.$router.replace(this.back)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
	@import "../../../static/css/style.scss";
    .header, .headPart {
        z-index: 10;
    }
    .headPart{
        width: 100%;
        height: 0.85rem;
        background: $header-color;
        overflow: hidden;
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
    }
    .welfare-header{
    	background: #fbcb44;
    }
    .invite-header{
    	background: url(../../../static/image/invite-header.png) no-repeat center;
    	background-size: 100% 100%;
    }
    .headCont{
    	position: absolute;
    	left: 0;
    	top: 0;
        width: 100%;
        height: 100%;
    }
    .headCont div.back{
    	position: absolute;
    	width: 0.85rem;
    	height: 0.85rem;
        left: 0;
        top:0;
        z-index: 10;
    }
    .headCont div.back .iconfont{
        color: $header-back-color;
        font-size: 0.36rem;
        line-height: 0.4rem;
        width: 0.4rem;
        height: 0.4rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .headCont p.defalut-slot{
    	position: absolute;
    	width: 100%;
    	height: 100%;
        color: $header-text-color;
        font-size: 0.3rem;
        font-weight: 700;
        left: 0;
        top: 0;
        text-align: center;
        line-height: 0.85rem;
        z-index: -1;
    }
</style>