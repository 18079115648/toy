import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
	imageUrl: '/static/image/renwozhua',
	bgAudio: 'https://yingdd.oss-cn-hangzhou.aliyuncs.com/d0bda63fee3ad56ab8938d349b791fa1.mp3',  //背景音乐
	clickAudioUrl: '/static/audio/click.mp3', // 按钮点击音效
	grabAudioUrl: 'https://yingdd.oss-cn-hangzhou.aliyuncs.com/9b38b54c6af6f4113a476df225043a01.mp3', //点击抓取音效
	moveAudioUrl: '/static/audio/move.mp3',   //点击方向键移动音效
	readyGoAudioUrl: '/static/audio/readygo.mp3', //readyGo开始音效
	successAudioUrl: 'https://yingdd.oss-cn-hangzhou.aliyuncs.com/fa81942687d7d259c7f4979a00367a48.mp3', //抓取成功音效
	failAudioUrl: 'https://yingdd.oss-cn-hangzhou.aliyuncs.com/e95cb5cc6a8070f063b09ce9f6843b18.mp3',    //抓取失败音效
}

export default new Vuex.Store({
    state
})