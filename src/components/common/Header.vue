<template>
    <div class="header">
	    <div class="headPart">
	        <div class="headCont">
	            <div @click="goBack" class="back" v-if="!hiddenBack">
	                <span class="fl"></span>
	            </div>
	            <p class="right">{{title}}</p>
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
                required: true
            },
            back: {
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
                    this.$router.push(this.back)
                }
            }
        }
    }
</script>

<style scoped>
    .header, .headPart {
        z-index: 10;
    }
    .headPart{
        width: 100%;
        height: 0.85rem;
        background: #ffe86e;
        overflow: hidden;
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
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
    .headCont div.back span{
        color: #FFFFFF;
        width: 0.18rem;
        height: 0.32rem;
        /*background: url("../../../static/images/white-arror.png");*/
        background-size: 100% 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .headCont p{
    	position: absolute;
    	width: 100%;
    	height: 100%;
        color: #704a06;
        font-size: 0.3rem;
        font-weight: 700;
        left: 0;
        top: 0;
        text-align: center;
        line-height: 0.85rem;
        z-index: -1;
    }
    
</style>