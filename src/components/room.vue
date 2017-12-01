<template>
    <div class="app" :style="{ height: wH + 'px' }">
		<canvas id="frontview" :class="{show:showFront}" :style="{ height: wH + 'px' }"></canvas>
      	<canvas id="sideview" :class="{show:showSide}" :style="{ height: wH + 'px' }"></canvas>
    	<div class="room-top">
    		<img class="back" src="../../static/image/feee.png" @click="back" />
    		<img class="avatar" :src="avatar"  />
    		<div class="room-count shadow-text">
    			<p>当前房间人数</p>
    			<p>{{memberNum}}</p>
    		</div>
    		<div class="price">
    			<img src="../../static/image/wd.png"  />
    			<span class="shadow-text">{{remainGold}}</span>
    		</div>
    	</div>
    	<img class="view-change" @click="changeView" src="../../static/image/dd33.png"  />
    	<div class="room-bottom" v-show="!operateShow">
    		<div class="detail" @click="goGrabList">
    			<img src="../../static/image/d122.png"  />
    			<p class="shadow-text">详情</p>
    		</div>
    		<div class="begin btn-hover" @click="beginGame">
    			<p class="price">
    				<img src="../../static/image/wd.png"  />
    				<span class="shadow-text">{{remainGold}}</span>
    			</p>
    			<p class="shadow-text begin-text">开始游戏</p>
    		</div>
    		<div class="rechatge" @click="goRecharge">
    			<img src="../../static/image/ccc3.png"  />
    			<p class="shadow-text">充值</p>
    		</div>
    	</div>
    	<div class="operate-area" v-show="operateShow">
    		<div class="operate-direc">
    			<div class="direction-item left has-box" @click="moveDirection(3)">
    				<img class="fullEle com" src="../../static/image/sss33.png"  />
    				<img class="fullEle active" src="../../static/image/qdd.png"  />
    			</div>
    			<div class="direction-item top has-box" @click="moveDirection(1)">
    				<img class="fullEle com" src="../../static/image/fff33.png"  />
    				<img class="fullEle active" src="../../static/image/dd112.png"  />
    			</div>
    			<div class="direction-item right has-box" @click="moveDirection(4)">
    				<img class="fullEle com" src="../../static/image/wfff.png"  />
    				<img class="fullEle active" src="../../static/image/wrwf.png"  />
    			</div>
    			<div class="direction-item bottom has-box" @click="moveDirection(2)">
    				<img class="fullEle com" src="../../static/image/adad.png"  />
    				<img class="fullEle active" src="../../static/image/wrqe.png"  />
    			</div>
    		</div>
    		<div class="operate-click has-box" @click="grab">
    			<img class="fullEle com" src="../../static/image/adada.png"  />
    			<img class="fullEle active" src="../../static/image/wfwfc.png"  />
    		</div>
    		<div class="count-dowm shadow-text">倒计时 {{operateTime}}秒</div>
    	</div>
    	
    	<mt-popup v-model="readyStatus" :closeOnClickModal="false">
			<div class="ready-time shadow-text">
				<p>即将开始</p>
				<p class="time">{{readyTime}}</p>
			</div>
		</mt-popup>
		
		<mt-popup v-model="succStatus" class="pop" :closeOnClickModal="false">
			<div class="succ-content">
				<div class="goods-img">
					<img src="../../static/image/wrwr.png"  />
				</div>
				<div class="shadow-text" style="text-align: center; color: #fff;">
					<p class="succ-tip">太棒了，抓到娃娃了耶！</p>
					<a class="check-goods shadow-text">立即查看</a>
					<p class="operate-btn">
						<span class="btn-hover">分享好友</span>
						<span class="btn-hover" @click="beginGame">再次挑战</span>
					</p>
					<p class="time">倒计时 {{endTime}}秒</p>
				</div>
				<img src="../../static/image/qe.png" class="close" @click="closePop"/>	
			</div>
		</mt-popup>
		
		<mt-popup v-model="failStatus" class="pop" :closeOnClickModal="false">
			<div class="fail-content">
				<div class="shadow-text" style="text-align: center; color: #fff;">
					<p class="succ-tip">很遗憾，差点就抓到了！</p>
					<p class="operate-btn">
						<span class="btn-hover">分享好友</span>
						<span class="btn-hover" @click="beginGame">再次挑战</span>
					</p>
					<p class="time">倒计时 {{endTime}}秒</p>
				</div>
				<img src="../../static/image/qe.png" class="close" @click="closePop" />	
			</div>
		</mt-popup>

		<audio id="click-audio" src="../../static/audio/startClickItem.mp3" preload></audio>
		<audio id="bg-audio" src="../../static/audio/bgm01.mp3" autoplay loop></audio>
		<audio id="ready-audio" src="../../static/audio/readygo.mp3" preload></audio>
		<audio id="success-audio" src="../../static/audio/result_succeed.mp3" preload></audio>
		<audio id="failure-audio" src="../../static/audio/result_failed.mp3" preload></audio>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import accessToken from '../fetch/accessToken'
import storage from '../fetch/storage'
import * as SockJS from 'sockjs-client'
import {} from '../../static/js/jZego-1.0.0'

export default {
	data() {
	    return {
	    	wH: 0,
	    	readyStatus: false, //readyGO 倒计时3秒弹框
	    	readyTime: 3,
	    	operateShow: false, //开始操作
			operateTime: 30, //操作时间
			operationTimer: undefined,
	    	succStatus: false, //成功抓到娃娃,
	    	failStatus: false, //没有抓到娃娃,
			endTime: 3,
			remainGold: storage.get('remain_gold'),			// 剩余金币
			memberNum: 0, 			// 房间人数
			avatar: storage.get('headUrl'),
			
			machineSn: undefined,	// 设备编号
      		sock: undefined,		// socket handler
			roomStatus: 1, 			// 1游戏中 0空闲
			  
			// zegoRoomId: 'WWJ_ZEGO_12345_54323',
			zegoRoomId: 'sander_21312312312',
			zegoAppId: 3177435262,
			zegoServer: 'ws://106.15.41.49:8181/ws',
			zegoIdName: '1221',
			zegoNickName: 'Demon',
			showFront: true,
			showSide: false,

			clickAudio: undefined,		// 点击音效
			readyGoAudio: undefined, 	// 准备音效
			successAudio: undefined, 	// 抓取成功音效
			failureAudio: undefined,	// 抓取失败音效

			isGame: false,				// 是否游戏中
	    }
	},
	created() {
		this.machineSn = this.$route.query.machineSn
		this.memberNum = this.$route.query.num
		// this.machineSn = '117.81.164.129'

		const method = this
		this.sock = new SockJS(process.env.WEBSOCKET_URL)

		// 打开成功连接
		this.sock.onopen = () => {
			console.debug('连接成功')
			this.sock.send(JSON.stringify({
				cmd: 'conn',
				headUrl: storage.get('headUrl'),
				token: accessToken.getAccessToken(),
				vmc_no: this.machineSn
			}))
		}

		// 接收数据
		this.sock.onmessage = (e) => {
		
		let data = JSON.parse(e.data)
		switch(data.cmd) {
			case 'conn_r':
				if (data.status !== 200) {
					Toast({
						message: data.msg,
						position: 'middle',
						duration: 1500
					})
					return;
				}

				this.roomStatus = data.room_status
				this.avatar = data.headUrl

				if (data.isGame === 1) {
					this.operateTime = data.remainSecond
					this.operateShow = true
					this.operateCountDown(data.remainSecond)
				}

				// 自动发送心跳包（30s一次）
				method.sendHeartBeate()
				console.debug('连接服务器成功')
				break;
			case 'hb_r':
				console.debug('心跳包答复')
				break;
			case 'status':
				console.debug('游戏状态更新')
				break;
			case 'start_r':
				console.debug('游戏开始状态')
				if (data.status === 200) {
					this.succStatus = false
					this.failStatus = false
					this.operateShow = true
					this.pauseSuccessAudio()
					this.pauseFailureAudio()
					this.readyGo()	
					this.remainGold = data.remainGold
					storage.set('remain_gold', data.remainGold)
				} else {
					Toast({
						message: data.msg,
						position: 'middle',
						duration: 1500
					})
				}
				break;
			case 'grab_r':
				console.debug('抓取' + (data.value === 1 ? '成功' : '失败'))
				this.operateShow = false
				clearInterval(this.operationTimer)
				if (data.value === 1) {
					// 抓取成功
					this.grabSucces()
				} else {
					// 抓取失败
					this.grabFailure()
				}
				break;
			default:
				console.debug('message', e.data)
				break;
			}
		}

		this.sock.onclose = () => {
			console.info('close connection')
		}


		const zg = new ZegoClient()
		zg.config({
			appid: this.zegoAppId,
			server: this.zegoServer,
			idName: this.zegoIdName,
			nickName: this.zegoNickName
		})

		this.$api.getZegoToken(this.zegoAppId, this.zegoIdName).then((token) => {
			zg.login(this.zegoRoomId, 2, token, function(streamList) {
				streamList.forEach((item) => {
					console.info(item.stream_id)
					if (item.stream_id.endsWith('_2')) {
						zg.startPlayingStream(item.stream_id, document.getElementById('sideview'))
					} else {
						zg.startPlayingStream(item.stream_id, document.getElementById('frontview'))
					}
				})
				// zg.startPlayingStream(streamList[1].stream_id, document.getElementById('sideview'))
				// zg.startPlayingStream(streamList[0].stream_id, document.getElementById('frontview'))
			}, function(error) {
				console.info(error)
				console.error('连接失败:' + error.msg)
			})
		})

		

		// 断开连接通知
		zg.onDisconnect((err) => {
			alert('服务器断开连接')
			console.error('房间断开连接[code: ' + err.code + ' , msg: ' + err.msg + ']');
		})

		// 被踢下线通知
		zg.onKickOut(() => {
			alert('被踢出')
		})

		// 流变更通知
		zg.onStreamExtraInfoUpdated((streamList) => {
		})

		// 流信息变更通知
		zg.onPlayStateUpdate((type, streamId) => {
		})
	},
	mounted() {	
		this.wH = document.getElementById('app').offsetHeight
	},
	methods: {
		//点击开始游戏
		beginGame() {
			this.playClickAudio()
			this.startGame()
		},

	    //准备到计时
		readyGo() {
			this.readyStatus = true
			this.readyTime = 3		// 倒计时3秒
			const parent = this
			parent.operateCountDown(30)
			function timeout() {
				setTimeout(() => {
					if (parent.readyTime === 1) {
						parent.readyStatus = false
						// parent.operateShow = true
						return
					}
					if (parent.readyTime == 2) {
						parent.playReadyGoAudio()
					}
					parent.readyTime--
					timeout()
				}, 1000)
			}
			timeout()
		},

		//操作计时
		operateCountDown(seconds) {
			const self = this
			this.operateTime = seconds
			const parent = this
			this.operationTimer = setInterval(() => {
				if (self.operateTime === 0) {
					this.grab()
					clearInterval(parent.operationTimer)
					return
				}
				self.operateTime--
			}, 1000)
		},
		
		//退出计时
		resultGo() {
			this.endTime = 3
			this.endTimer = setInterval(() => {
				this.endTime--
				if(this.endTime === 1) {
					this.succStatus = false
					this.failStatus = false
					clearInterval(this.endTimer)
				}
			},1000)
		},

		// 关闭弹窗
		closePop() {
			this.succStatus = false
			this.failStatus = false
			this.operateShow = false
			clearInterval(this.endTimer)
		},
		
		// 返回
		back() {
			this.$router.go(-1)
		},

		/**
		 * 发送心跳包
		 */
    	sendHeartBeate() {
      		if (this.sock == undefined) {
        		alert('服务器连接失败，请重试')
        		return
      		} 

			const sock = this.sock
			setTimeout(() => {
				sock.send(JSON.stringify({
				cmd: 'hb',
				vmc_no: this.machineSn
				}))

				// 循环发送
				this.sendHeartBeate()
			}, 30000)
		},

		/**
		 * 开始游戏
		 */
		startGame() {
			if (this.sock == undefined) {
				alert('服务器连接失败，请重试')
				return
			}

			this.sock.send(JSON.stringify({
				cmd: 'start',
				vmc_no: this.machineSn
			}))
		},

		/**
		 * 移动方向（1前2后3左4右）
		 */
		moveDirection(direction) {
			if (this.showSide) {
				if (direction === 1) {
					direction = 4
				} else if (direction === 2) {
					direction = 3
				} else if (direction === 3) {
					direction = 1
				} else if (direction === 4) {
					direction = 2
				}
			}

			this.playClickAudio()
			if (this.sock == undefined) {
				alert('服务器连接失败，请重试')
				return
			}

			this.sock.send(JSON.stringify({
				cmd: 'move',
				vmc_no: this.machineSn,
				direction: direction
			}))
		},

		/**
		 * 抓取
		 */
		grab() {
			if (this.sock == undefined) {
				alert('服务器连接失败，请重试')
				return
			}

			this.sock.send(JSON.stringify({
				cmd: 'grab',
				vmc_no: this.machineSn,
			}))
		},
		
		/**
		 * 切换视角
		 */
		changeView() {
			this.showFront = !this.showFront
			this.showSide = !this.showSide
			this.playClickAudio()
		},

		/**
		 * 播放点击音效
		 */
		playClickAudio() {
			if (this.clickAudio === undefined) {
				this.clickAudio = document.getElementById('click-audio')
			}
			this.clickAudio.play()
		},

		/**
		 * 播放ReadyGo音效
		 */
		playReadyGoAudio() {
			if (this.readyGoAudio === undefined) {
				this.readyGoAudio = document.getElementById('ready-audio')
			}
			this.readyGoAudio.play()
		},

		/**
		 * 播放抓取成功音效
		 */
		playSuccessAudio() {
			if (this.successAudio === undefined) {
				this.successAudio = document.getElementById('success-audio')
			}
			this.successAudio.play()
		},

		/**
		 * 暂停抓取成功音乐
		 */
		pauseSuccessAudio() {
			if (this.successAudio != undefined) {
				this.successAudio.load()
			}
		},

		/**
		 * 播放抓取失败音效
		 */
		playFailureAudio() {
			if (this.failureAudio === undefined) {
				this.failureAudio = document.getElementById('failure-audio')
			}
			this.failureAudio.play()
		},

		/**
		 * 暂停抓取失败音效
		 */
		pauseFailureAudio() {
			if (this.failureAudio != undefined) {
				this.failureAudio.load()
			}
		},

		/**
		 * 去充值
		 */
		goRecharge() {
			this.$router.push('/recharge')
		},

		/**
		 * 去抓取记录
		 */
		goGrabList() {
			this.$router.push('/grabList')
		},

		/**
		 * 抓取成功
		 */
		grabSucces() {
			this.succStatus = true
			this.playSuccessAudio()
			this.endTime = 3
			const parent = this
			function timeout() {
				setTimeout(() => {
					if (parent.endTime === 1) {
						parent.succStatus = true
						return
					}
					parent.endTime--
					timeout()
				})
			}
			timeout()
		},

		/**
		 * 抓取失败
		 */
		grabFailure() {
			this.failStatus = true
			this.playFailureAudio()
			this.endTime = 3
			const parent = this
			function timeout() {
				setTimeout(function() {
					if (parent.endTime === 1) {
						parent.failStatus = false
						return
					}
					parent.endTime--
					timeout()
				}, 1000)
			}
			timeout()
		}
	},
	

		
}
</script>

<style lang="scss" scoped>
#frontview, #sideview {
	width: 100%;
	z-index: -2;
	position: absolute;
	left: 0;
	top: 0;
}
#frontview.show, #sideview.show {
	z-index: 0;
}
.app{
	background: #6d6481 !important;
	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;
} 
.room-top{
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	padding: 0.2rem;
	color: #fff;
	background: #6d6481;
	.back{
		width: 1rem;
		margin-right: 0.2rem;
	}
	.avatar{
		width: 0.7rem;
		height: 0.7rem;
		border-radius: 50%;
	}
	.price{
		width: 1.7rem;
		height: 0.7rem;
		background: rgba(0,0,0,0.2);
		border-radius: 0.35rem;
		display: flex;
		align-items: center;
		padding-left: 0.2rem;
		margin-left: 0.2rem;
		img{
			width: 0.28rem;
			margin-right: 0.16rem;
		}
	}
	.room-count{
		text-align: center;
		flex: 1;
		font-size: 0.3rem;
		line-height: 1.2;
	}
}
.view-change{
	position: absolute;
	right: 0.2rem;
	top: 40%;
	width: 1.05rem;
}
.room-bottom{
	position: absolute;
	width: 100%;
	bottom: 0;
	display: flex;
	padding: 0.1rem;
	color: #fff;
	font-size: 0.3rem;
	background: #6d6481;
	&>div{
		background: rgba(0,0,0,0.2);
		border-radius: 0.2rem;
		height: 1.1rem;
		padding-top: 0.12rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 0.08rem;
		img{
			height: 0.44rem;
		}
		&>p{
			padding-bottom: 0.06rem;
		}
	}
	.detail, .rechatge{
		width: 1.7rem;
	}
	.begin{
		flex: 1;
		.price{
			display: flex;
			align-items: center;
			margin-left: 0.2rem;
			img{
				margin-right: 0.16rem;
			}
		}
		.begin-text{
			color: #ff83a8;
		}
		.begin-text.enabled{
			color: #6bf780;
		}
	}
}
.mint-popup{
	background: transparent;
}
.v-modal{
	opacity: 0.7 !important;
}
.ready-time{
	font-size: 0.6rem;
	color: #fff;
	text-align: center;
	text-shadow: 0.06rem 0 0 #000,0 0.06rem 0 #000,-0.06rem 0 0 #000,0 -0.06rem 0 #000;
	*filter: Glow(color=#000, strength=1);
	.time{
		font-size: 1.2rem;
	}
}
.operate-area{
	display: flex;
	position: absolute;
	width: 100%;
	align-items: center;
	padding: 0.2rem 0.3rem;
	left: 0;
	bottom: 0;
	justify-content: space-between;
	.operate-direc{
		width: 4rem;
		height: 2.8rem;
		position: relative;
		.direction-item{
			position: absolute;
			width: 1.08rem;
			height: 1.08rem;
			&.left{
				left: 0;
				top: 50%;
				transform: translateY(-50%);
			}
			&.top{
				left: 50%;
				top: 0;
				transform: translateX(-50%);
			}
			&.right{
				right: 0;
				top: 50%;
				transform: translateY(-50%);
			}
			&.bottom{
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);
			}
		}
			
	}
	.operate-click{
		width: 1.6rem;
		height: 1.6rem;
		
	}
	.count-dowm{
		position: absolute;
		right: 0.36rem;
		color: #fff;
		bottom: 0.26rem;
	}
}
.has-box{
	position: relative;
	img.active{
		display: none;
	}
	&:active{
		img.active{
			display: block;
		}
		img.com{
			display: none;
		}
	}
}
.has-box:after{
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 100;
	left: 0;
	top: 0;
}
.succ-content{
	width: 5.4rem;
	position: relative;
	.goods-img{
		height: 5.2rem;
		background:  url(../../static/image/sw.png) no-repeat center;
		background-size: 100%;
		position: relative;
		img{
			position: absolute;
			width: 2.5rem;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}
	}
	
}
.fail-content{
	padding: 2rem 0;
}
.close{
	position: absolute;
	right: 0;
	top: 0;
	width: 0.6rem;
}
.time{
	padding-top: 0.5rem;
	font-size: 0.3rem;
}
.succ-tip{
	font-size: 0.44rem;
}
.check-goods{
	padding: 0.3rem 0 0;
	display: inline-block;
	color: #fff;
	font-size: 0.3rem;
	text-decoration: underline;
}
.operate-btn{
	padding-top: 0.6rem;
	display: flex;
	justify-content: center;
	margin: 0 -0.3rem;
	span{
		width: 2rem;
		height: 0.9rem;
		border-radius: 0.1rem;
		background: #fdd152;
		line-height: 0.9rem;
		font-size: 0.3rem;
		margin:  0 0.5rem;
		box-shadow: 3px 0 0 #000,0 3px 0 #000,-2px 0 0 #000,0 -2px 0 #000;;
	}
}
</style>