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
    	<img class="view-change" v-if="isGame" @click="changeView" src="../../static/image/dd33.png"  />
    	<div class="room-bottom" v-show="!operateShow">
    		<div class="detail" @click="goGrabList">
    			<img src="../../static/image/d122.png"  />
    			<p class="shadow-text">详情</p>
    		</div>
    		<div class="begin btn-hover" @click="beginGame">
    			<p class="price">
    				<img src="../../static/image/wd.png"  />
    				<span class="shadow-text">{{price}}</span>
    			</p>
    			<p class="shadow-text begin-text" :class="{enabled: roomStatus == 0}">开始游戏</p>
    		</div>
    		<div class="rechatge" @click="goRecharge">
    			<img src="../../static/image/ccc3.png"  />
    			<p class="shadow-text">充值</p>
    		</div>
    	</div>

		<!-- 操作区域 -->
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
    	
		<!-- 准备开始页面 -->
    	<mt-popup v-model="readyStatus" :closeOnClickModal="false">
			<div class="ready-time shadow-text">
				<p>即将开始</p>
				<p class="time">{{readyTime}}</p>
			</div>
		</mt-popup>
		
		<!-- 抓取成功提示页面 -->
		<mt-popup v-model="succStatus" class="pop" :closeOnClickModal="false">
			<div class="succ-content">
				<div class="goods-img">
					<img src="../../static/image/wrwr.png"  />
				</div>
				<div class="shadow-text" style="text-align: center; color: #fff;">
					<p class="succ-tip">太棒了，抓到娃娃了耶！</p>
					<a class="check-goods shadow-text" @click="toToysPocket">立即查看</a>
					<p class="operate-btn">
						<span class="btn-hover">分享好友</span>
						<span class="btn-hover" @click="beginGame">再次挑战</span>
					</p>
					<p class="time" v-if="endTime >= 1">倒计时 {{endTime}}秒</p>
				</div>
				<img src="../../static/image/qe.png" class="close" @click="closePop"/>	
			</div>
		</mt-popup>
		
		<!-- 抓取失败提示页面 -->
		<mt-popup v-model="failStatus" class="pop" :closeOnClickModal="false">
			<div class="fail-content">
				<div class="shadow-text" style="text-align: center; color: #fff;">
					<p class="succ-tip">很遗憾，差点就抓到了！</p>
					<p class="operate-btn">
						<span class="btn-hover">分享好友</span>
						<span class="btn-hover" @click="beginGame">再次挑战</span>
					</p>
					<p class="time" v-if="endTime >= 1">倒计时 {{endTime}}秒</p>
				</div>
				<img src="../../static/image/qe.png" class="close" @click="closePop" />	
			</div>
		</mt-popup>

		<!-- <audio id="bg-audio" src="../../static/audio/bgm01.mp3"  preload="preload" loop></audio> -->
		
		<mt-popup v-model="roomDetail" class="pop">
			<div class="detail-content">
				<div class="tit">抓取记录</div>
				<div class="grab-list">
					<Pagination :render="render" :param="pagination"  ref="pagination" uri="/dm-api/doll/log/room" >
						<div class="grab-item" v-for="(item, index) in pagination.content" :key="index">
							<img class="avatar" :src="item.avatar" />
							<div class="grab-text">
								<p class="name">{{item.nickname}}</p>
								<p class="status">
									<span v-if="item.status">抓取失败</span>
									<span v-if="!item.status" style="color: #EA7B97;">抓取成功</span>
								</p>
							</div>
							<div class="grab-time">{{item.createTime.split(' ')[0]}}<br>{{item.createTime.split(' ')[1]}}</div>
						</div>
						<div class="no_msg" v-show="pagination.content.length<1 && pagination.loadEnd">
					        <img src="../../static/image/wfdfc.png">
				            <div>暂无抓取数据~</div>
					    </div>	   
					</Pagination>
				</div>
				<img src="../../static/image/x.png" class="close" @click="roomDetail = false" />	
			</div>
		</mt-popup>
    </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'
import accessToken from '../fetch/accessToken'
import storage from '../fetch/storage'
import common from '../fetch/common'
import * as SockJS from 'sockjs-client'
import {} from '../../static/js/jZego-1.0.0'

export default {
	data() {
	    return {
	    	wH: 0,							// 页面高度
	    	readyStatus: false, 			//readyGO 倒计时3秒弹框
	    	readyTime: 3,					// 准备倒计时（3秒）
	    	operateShow: false, 			// 操作区域显示标志位
			operateTime: 30, 				// 抓取操作倒计时
			operationTimer: undefined,		// 抓取操作倒计时句柄
	    	succStatus: false, 				// 成功抓到娃娃,
	    	failStatus: false, 				// 没有抓到娃娃,
			endTime: 3,						// 抓取结果展示倒计时
			remainGold: storage.get('remain_gold'),	// 剩余金币
			memberNum: 0, 					// 房间人数
			avatar: storage.get('headUrl'), // 头像
			
			machineSn: undefined,			// 设备编号
      		sock: undefined,				// socket handler
			roomStatus: 0, 					// 1游戏中 0空闲
			price: 20,						// 价格
			  
			zegoRoomId: 'WWJ_ZEGO_12345_54323',
			zg: undefined,								// zego对象
			// zegoRoomId: 'sander_21312312312',			// 房间号
			zegoAppId: 3177435262,						// 应用编号
			zegoServer: 'ws://106.15.41.49:8181/ws',	// 服务器地址
			zegoIdName: '1221',							// 用户编号
			zegoNickName: 'Demon',						// 昵称
			showFront: true,							// 显示正摄像头
			showSide: false,							// 显示副摄像头

			frontStreamId: undefined,		// 正面视频流编号
			sideStreamId: undefined,		// 侧面视频流编号

			bgAudio: undefined,			// 背景音效
			clickAudio: undefined,		// 点击音效
			readyGoAudio: undefined, 	// 准备音效
			successAudio: undefined, 	// 抓取成功音效
			failureAudio: undefined,	// 抓取失败音效
			takeAudio: undefined,		// 抓取音效
			loadCount: 0,				// 加载统计

			isGame: false,				// 是否游戏中

			musicSwitch: true,			// 背景音乐开关
			soundSwitch: true,			// 背景音效开关
			
			roomDetail: false,    // 房间抓取详情
			
			
			//分页参数
			pagination: {
		        content: [],
		        loadEnd: false,
		        data: {
		        	page: 1,
		        	pageSize: 15,
		        	machineId: this.$route.query.machineId
		        }
		    },
	    }
	},
	created() {	
		// 机器编号
		this.machineSn = this.$route.query.machineSn 	
//		// 房间人数
//		this.memberNum = this.$route.query.num		
//		// 抓取价格
//		this.price = parseInt(this.$route.query.price)
//		// 加载音频资源
//		this.loadAudios()
//		// 获取金币
//		this.getGold()
//		// 初始化socket
//		this.initWebSocket()
//		// 即构推流初始化
//		this.initZego()
//		// 阻止缩放
//		this.preventScale()
//		document.addEventListener("WeixinJSBridgeReady", function () {  
//         document.getElementById('bg-audio').play()
//  	}, false);  
	},
	mounted() {	
		this.wH = document.getElementById('app').offsetHeight
	},
	methods: {
		//房间抓取记录
		render(res) {
			res.data.forEach((item) => {
		    	this.pagination.content.push(item)
	    	})
	    },
			
		// 初始化socket
		initWebSocket() {
			this.sock = new SockJS(process.env.WEBSOCKET_URL)

			const parent = this

			// 打开成功连接
			this.sock.onopen = () => {
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
						// this.avatar = data.headUrl

						if (data.isGame === 1) {
							this.operateTime = data.remainSecond
							this.operateShow = true
							this.isGame = true
							this.startSideStream()
							this.operateCountDown(data.remainSecond)
						}

						// 自动发送心跳包（30s一次）
						this.sendHeartBeate()
						console.debug('连接服务器成功')
						break;
					case 'hb_r':
						console.debug('心跳包答复')
						break;
					case 'status':
						console.debug('游戏状态更新')
						this.roomStatus = data.gameStatus
						if (data.gameStatus === 1) {
							data.headUrl && (this.avatar = data.headUrl)
						}
						break;
					case 'start_r':
						console.debug('游戏开始状态')
						if (data.status === 200) {
							this.succStatus = false
							this.failStatus = false
							this.operateShow = true
							this.isGame = true
							this.startSideStream()
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
						this.isGame = false
						this.closeSideStream()
						this.showFront = true
						this.showSide = false
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
				console.info('关闭socket')
			}
		},

		// 即构推流初始化
		initZego() {
			this.zg = new ZegoClient()
			this.zg.config({
				appid: this.zegoAppId,
				server: this.zegoServer,
				idName: this.zegoIdName,
				nickName: this.zegoNickName
			})

			const parent = this

			// 获取token
			this.$api.getZegoToken(this.zegoAppId, this.zegoIdName).then((token) => {
				// 登录房间
				this.zg.login(this.zegoRoomId, 1, token, (streamList) => {
					streamList.forEach((item) => {
						// 设置音量0
						parent.zg.setPlayVolume(item.stream_id, 0)
						if (item.stream_id.endsWith('_2')) {
							parent.sideStreamId = item.stream_id
							// 只有游戏中才开始播放侧边视频流，观众模式播放侧边视频流
							this.isGame && parent.zg.startPlayingStream(item.stream_id, document.getElementById('sideview'))
						} else {
							parent.frontStreamId = item.stream_id
							parent.zg.startPlayingStream(item.stream_id, document.getElementById('frontview'))
						}
					})
				}, (error) => {
					console.error('连接失败:' + error.msg)
				})
			})

			// 房间连接断开通知
			this.zg.onDisconnect((err) => {
				console.error('房间断开连接[code: ' + err.code + ' , msg: ' + err.msg + ']')
				MessageBox.alert('连接断开，退出房间').then(action => {
					this.$router.push('/index')
				})
			})

			// 被踢下线通知
			this.zg.onKickOut((err) => {
				console.error('被踢下线通知[code: ' + err.code + ' , msg: ' + err.msg + ']')
				MessageBox.alert('账号冲突，退出房间').then(action => {
					this.$router.push('/index')
				})
			})

			// 流更新通知
			this.zg.onStreamUpdated((type, streamList) => {
				console.info('流更新通知')
			})

			// 流状态变更通知
			this.zg.onStreamExtraInfoUpdated((streamList) => {
				console.info("流状态变更通知")
			})

			// 流信息变更通知
			this.zg.onPlayStateUpdate((type, streamId) => {
				console.info('流' + streamId + ', 状态：' + type)
			})
		},

		//点击开始游戏
		beginGame() {
			this.playClickAudio()
			this.startGame()
		},

	    //准备到计时
		readyGo() {
			this.readyStatus = true
			this.readyTime = 3		// 倒计时3秒
			this.playReadyGoAudio()
			const parent = this
			parent.operateCountDown(30)
			function timeout() {
				setTimeout(() => {
					if (parent.readyTime === 1) {
						parent.readyStatus = false
						// parent.operateShow = true
						return
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

			const parent = this
			setTimeout(() => {
				parent.takeAudio.play()
			}, 400)

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
			this.soundSwitch && this.clickAudio.play()
		},

		/**
		 * 播放ReadyGo音效
		 */
		playReadyGoAudio() {
			this.soundSwitch && this.readyGoAudio.play()
		},

		/**
		 * 播放抓取成功音效
		 */
		playSuccessAudio() {
			this.soundSwitch && this.successAudio.play()
		},

		/**
		 * 暂停抓取成功音乐
		 */
		pauseSuccessAudio() {
			this.successAudio.load()
		},

		/**
		 * 播放抓取失败音效
		 */
		playFailureAudio() {
			this.soundSwitch && this.failureAudio.play()
		},

		/**
		 * 暂停抓取失败音效
		 */
		pauseFailureAudio() {
			this.failureAudio.load()
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
			this.roomDetail = true
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
						// parent.succStatus = false
						parent.endTime--
						return
					}
					parent.endTime--
					timeout()
				}, 1000)
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
						// parent.failStatus = false
						parent.endTime--
						return
					}
					parent.endTime--
					timeout()
				}, 1000)
			}
			timeout()
		},

		/**
		 * 获取金币
		 */
		getGold() {
			this.$api.userInfo().then(response => {
				this.remainGold = response.data.money
				this.avatar = response.data.avatar
			})
		},

		/**
		 * 跳转娃娃袋
		 */
		toToysPocket() {
			this.$router.push('/toysBox')
		},

		/**
		 * 加载音频资源
		 */
		loadAudios() {
			// 控制音乐和音效
			if (storage.get('music_switch') != null) {
				this.musicSwitch = storage.get('music_switch')
			}
			if (storage.get('sound_switch') != null) {
				this.soundSwitch = storage.get('sound_switch')
			}

			// 背景音乐
			this.bgAudio = document.getElementById('bg-audio')
			// if (common.isWeixin()) {
			// 	const parent = this
			// 	document.addEventListener("WeixinJSBridgeReady", function () {  
			// 		 document.getElementById('bg-audio').play()
			// 	}, false);  
			// } else {
				this.bgAudio.play()
			// }
			

			// 点击音效
			this.clickAudio = document.getElementById('click-audio')

			// 准备音效
			this.readyGoAudio = document.getElementById('ready-audio')

			// 抓取成功音效
			this.successAudio = document.getElementById('success-audio')

			// 抓取失败音效
			this.failureAudio = document.getElementById('failure-audio')

			// 抓取音效
			this.takeAudio = document.getElementById('take-audio')
		},

		/**
		 * 关闭侧边视频
		 */
		closeSideStream() {
			this.zg.stopPlayingStream(this.sideStreamId)
		},

		/**
		 * 播放侧边视频
		 */
		startSideStream() {
			this.zg.startPlayingStream(this.sideStreamId, document.getElementById('sideview'))
			this.zg.setPlayVolume(this.sideStreamId, 0)
		},

		preventScale() {
			const parent = this
			window.onload = function () {
				document.addEventListener('gesturestart', function (e) {
					e.preventDefault()
				})
				document.addEventListener('dblclick', function (e) {
					e.preventDefault();
				})
				document.addEventListener('touchstart', function (event) {
					// if (parent.bgAudio.paused) {
					// 	parent.bgAudio.play()
					// }
					if (event.touches.length > 1) {
						event.preventDefault();
					}
				})
				var lastTouchEnd = 0
				document.addEventListener('touchend', function (event) {
					var now = (new Date()).getTime()
					if (now - lastTouchEnd <= 300) {
						event.preventDefault();
					}
					lastTouchEnd = now;
				}, false)
			}
		}
	},

	beforeDestroy() {
		// 关闭背景音量
		this.bgAudio && !this.bgAudio.paused && this.bgAudio.pause()

		// 释放即构资源
		// this.zg.release()
	}

		
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
.loading {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	background: rgba(0, 0, 0, 0.7);
	// opacity: 0.5;
	z-index: 2;
}
.progress {
	width: 80%;
	height: 60px;
	margin: 300px auto 0;
}
.app{
	background: #6d6481 !important;
	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;
	font-weight: 700;
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
.detail-content{
	width: 6.5rem;
	height: 66vh;
	border-radius: 0.2rem;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	padding-bottom: 1.3rem;
	position: relative;
	.tit{
		text-align: center;
		padding: 0.2rem 0 0.25rem;
		background: #fff;
	}
	.grab-list{
		background: #fff;
		flex: 1;
		border-radius: 0 0 0.2rem 0.2rem;
		overflow-y: auto;
		.grab-item{
			display: flex;
			padding: 0.2rem 0.3rem;
			border-top: 1px solid #f2f2f2;
			font-weight: normal;
			align-items: center;
			.avatar{
				width: 0.6rem;
				height: 0.6rem;
				border-radius: 100%;
				margin-right: 0.2rem;
				
	        }
	        .grab-text{
	        	flex: 1;
	        	overflow: hidden;
	        }
		}
	}
	.close{
		top: auto;
		bottom: 0 !important;
		left: 50%;
		transform: translateX(-50%);
		width: 0.8rem;
		height: 0.8rem;
	}
}
</style>