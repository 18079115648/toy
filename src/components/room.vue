<template> 
    <div class="app" id="fastClick" :style="{ height: wH + 'px' }">
    	<div class="room-loading" v-show="loadingStatus"></div>
    	<!--<Header>
        	<div class="room-top">
	    		<img v-show="avatar" class="avatar" :src="avatar"  />
	    		<div v-show="!avatar" class="avatar-position"></div>
	    		<div class="room-count">
	    			<p>当前房间 {{roomNum}} 人</p>
	    		</div>
	    		<div class="room-price" style="margin-right: 0.52rem;">
	    			<img src="../../static/image/erdd.png"  />
	    			{{price}}
	    		</div>
	    		<div class="room-price">
	    			<img src="../../static/image/34cd.png"  />
	    			{{remainGold}}
	    		</div>
	    	</div>
        </Header>-->
        <div class="room-top">
        	<div class="back">
        		<i class="iconfont icon-zuojiantou"></i>
        	</div>
    		<img v-show="avatar" class="avatar" :src="avatar"  />
    		<div v-show="!avatar" class="avatar-position"></div>
    		<div class="room-count">
    			<p>当前房间 {{roomNum}} 人</p>
    		</div>
    		<div class="room-price" style="margin-right: 0.52rem;">
    			<img src="../../static/image/erdd.png"  />
    			{{price}}
    		</div>
    		<div class="room-price">
    			<img src="../../static/image/34cd.png"  />
    			{{remainGold}}
    		</div>
    	</div>
        <div class="video-content">
        	<canvas id="frontview" :class="{show:showFront}"></canvas>
	      	<canvas id="sideview" :class="{show:showSide}"></canvas>
	      	
	      	<!--聊天列表-->
	      	<div class="room-news-content" v-show="roomNewsList.length > 0">
    			<div class="room-news-list" v-show="toggleStatus">
    				<div class="room-news-item" v-for="(item, index) in roomNewsList" :id="'news-item-' + index" :key="index">
    					<span class="tit">{{item.tit}} </span>
    					<span class="text">{{item.text}}</span>
    				</div>
    			</div>
    			<div class="toggle-news-list" @touchstart="toggleNews">
    				<span v-show="!toggleStatus">展开</span>
    				<span v-show="toggleStatus">隐藏</span>
    			</div>
    		</div>
        </div>
    	<!--<img class="view-change" v-if="isGame" v-tap.prevent="{ methods : changeView }" src="../../static/image/dd33.png"  />-->
    	<div class="audio-change img-mask child" v-tap="{ methods : changeAudio, status: musicSwitch && soundSwitch }">
			<img class="fullEle" src="../../static/image/73@3x.png" v-show="musicSwitch && soundSwitch"  />
			<img class="fullEle" src="../../static/image/74@3x.png" v-show="!(musicSwitch && soundSwitch)"  />
		</div>
    	<div class="room-side">
    		<div class="view-change child" v-tap="{ methods : changeView }" ></div>
    		<div class="btn-hover open-detail child" v-tap.prevent="{ methods : openChat }"></div>
    		<div class="btn-hover open-record child" v-tap.prevent="{ methods : goGrabList }"></div>
    	</div>
    	<div class="room-bottom" v-show="!operateShow">
    		<div class="open-chat com" @touchstart="depress($event)" @touchend="loosen($event)">
    			<!--<img src=""-->
    		</div>
    		<div class="begin">
    			<p>
    			</p>
    		</div>
    		<div class="open-recharge com"></div>
    	</div>
    	<!--<div class="room-bottom" v-show="!operateShow">
    		
    		<div class="chat-input" v-show="chatStatus">
    			<input type="text" id="chat-input"  @blur="chatStatus = false" @keyup.enter="sendChat" @focus="chatFocus($event)" ref="Input" placeholder="输入发言内容(最多30字)" maxlength="30" v-model="chatText" />
    			<span class="chat-send btn-hover" @click="sendChat">发送</span>
    		</div>
    		<div class="btn-hover open-chat child" v-tap.prevent="{ methods : openChat }"></div>
    		<div class="btn-hover open-detail child" v-tap.prevent="{ methods : goRoomDatail }" ></div>
    		<div class="btn-hover begin" v-tap.prevent="{ methods : beginGame }" :class="{enabled: roomStatus == 1}">
    			<span class="price shadow-text">{{price}}</span>
    		</div>
    		<div class="btn-hover open-record child" v-tap.prevent="{ methods : goGrabList }"></div>
    		<div class="btn-hover open-recharge child" v-tap.prevent="{ methods : goRecharge }"></div>
    	</div>-->

		<!-- 操作区域 -->
    	<div class="operate-area" v-show="operateShow">
    		<div class="operate-direc">
    			<div class="direction-item left has-box" @touchstart="touchstart(3, $event)" @touchend="touchend(3)">
    				<img class="fullEle com" src="../../static/image/sss33.png"  />
    				<img class="fullEle active" src="../../static/image/qdd.png"  />
    			</div>
    			<div class="direction-item top has-box" @touchstart="touchstart(1, $event)" @touchend="touchend(1)">
    				<img class="fullEle com" src="../../static/image/fff33.png"  />
    				<img class="fullEle active" src="../../static/image/dd112.png"  />
    			</div>
    			<div class="direction-item right has-box" @touchstart="touchstart(4, $event)" @touchend="touchend(4)">
    				<img class="fullEle com" src="../../static/image/wfff.png"  />
    				<img class="fullEle active" src="../../static/image/wrwf.png"  />
    			</div>
    			<div class="direction-item bottom has-box" @touchstart="touchstart(2, $event)" @touchend="touchend(2)">
    				<img class="fullEle com" src="../../static/image/adad.png"  />
    				<img class="fullEle active" src="../../static/image/wrqe.png"  />
    			</div>
    		</div>
    		<div class="operate-click has-box" v-tap.prevent="{ methods : grab }">
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
					<img :src="winImg"  />
				</div>
				<div class="shadow-text" style="text-align: center; color: #fff;">
					<p class="succ-tip shadow-text">太棒了，抓到娃娃了耶！</p>
					<a class="check-goods shadow-text" v-tap.prevent="{ methods : toToysPocket }">立即查看</a>
					<p class="operate-btn">
						<!--<span class="btn-hover">分享好友</span>-->
						<span class="btn-hover shadow-text" v-tap.prevent="{ methods : beginGame }">再次挑战</span>
					</p>
					<p class="again-time shadow-text" :class="{show: endTime >= 1}">倒计时 {{endTime}}秒</p>
				</div>
				<img src="../../static/image/2@2x.png" class="close" v-tap.prevent="{ methods : closePop }"/>	
			</div>
		</mt-popup>
		
		<!-- 抓取失败提示页面 -->
		<mt-popup v-model="failStatus" class="pop" :closeOnClickModal="false">
			<div class="fail-content">
				<div class="shadow-text" style="text-align: center; color: #fff;">
					<img class="fail-img" src="../../static/image/61@2x.png"  />
					<p class="succ-tip shadow-text">很遗憾，差点就抓到了！</p>
					<p class="operate-btn">
						<!--<span class="btn-hover">分享好友</span>-->
						<span class="btn-hover shadow-text" v-tap.prevent="{ methods : beginGame }">再次挑战</span>
					</p>
					<p class="again-time shadow-text" :class="{show: endTime >= 1}">倒计时 {{endTime}}秒</p>
				</div>
				<img src="../../static/image/2@2x.png" class="close" v-tap.prevent="{ methods : closePop }" />	
			</div>
		</mt-popup>

		<audio id="take-audio" src='https://yingdd.oss-cn-hangzhou.aliyuncs.com/9b38b54c6af6f4113a476df225043a01.mp3' preload></audio>
		<audio id="click-audio" src='../static/audio/startClickItem.mp3' preload></audio>
		<audio id="move-audio" src='../static/audio/move.mp3' preload></audio>
		<audio id="ready-audio" src='../static/audio/readygo.mp3' preload></audio>
		<audio id="success-audio" src='https://yingdd.oss-cn-hangzhou.aliyuncs.com/fa81942687d7d259c7f4979a00367a48.mp3' preload></audio>
		<audio id="failure-audio" src='https://yingdd.oss-cn-hangzhou.aliyuncs.com/e95cb5cc6a8070f063b09ce9f6843b18.mp3' preload></audio>

		<!-- 详情页面 -->
		<mt-popup v-model="roomDetail" class="pop">
			<div class="detail-content">
				<div class="tit">
					<span>娃娃详情</span>
				</div>
				<div class="toy-imgs">
					<img :src="item" v-for="(item, index) in toyImgs" :key="index"  />
				</div>
				<img src="../../static/image/x.png" class="close" v-tap.prevent="{ methods : closeGrabList }" />	
			</div>
		</mt-popup>
		<!--抓中记录-->
		<mt-popup v-model="grabList" class="pop">
			<div class="detail-content">
				<div class="tit">
					<span>抓取记录</span>
				</div>
				<div class="grab-list">
					<Pagination :render="render" :param="pagination"  ref="pagination" uri="/dm-api/doll/log/room" >
						<div class="grab-item" v-for="(item, index) in pagination.content" :key="index">
							<img class="avatar" :src="item.avatar || '../../static/image/vvv.png'" />
							<div class="grab-text">
								<p class="name">{{item.nickname}}</p>
								<p class="status" style="color: #999; font-size: 0.24rem;">
									{{item.createTime}}
								</p>
							</div>
							<div class="grab-time">
								<span v-if="item.status">抓取失败</span>
								<span v-if="!item.status" style="color: #EA7B97;">抓取成功</span>
							</div>
						</div>
						<div class="no_msg" v-show="pagination.content.length<1 && pagination.loadEnd">
					        <img src="../../static/image/wfdfc.png">
				            <div>暂无抓取数据~</div>
					    </div>	   
					</Pagination>
				</div>
				<img src="../../static/image/x.png" class="close" v-tap.prevent="{ methods : closeGrabList }" />	
			</div>
		</mt-popup>
		
		<div id="danmu-container" ref="pro"></div>

		
		<!-- 充值页面 -->
		<!--<mt-popup v-model="rechargeStatus" class="pop">
			<div class="recharge-content">
				<div class="recharge-list">
					<div class="recharge-item" v-for="(item, index) in rechargeList" :key="index">
		                <div class="recharge_left">
		                    <img class="diamond-icon" src="../../static/image/wd.png">
		                    <span >{{item.money}}</span>
		                </div>
		                <div class="recharge_center">
		                    <div>{{item.desc}}</div>
		                </div>
		                <div class="recharge_right">
		                    &yen; {{item.price}}
		                </div>
		            </div>
				</div>
				<img src="../../static/image/x.png" class="close" @click="rechargeStatus = false" />	
			</div>
		</mt-popup>-->
    </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'
import accessToken from '../fetch/accessToken'
import storage from '../fetch/storage'
import common from '../fetch/common'
import * as SockJS from 'sockjs-client'

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
			endTime: 5,						// 抓取结果展示倒计时
			remainGold: storage.get('remain_gold'),	// 剩余金币
			avatar: '', // 当前操作用户头像
			userAvatar: '',  //登录用户头像
			roomNum: 0,  //房间人数
			
			machineSn: undefined,			// 设备编号
      		sock: undefined,				// socket handler
			roomStatus: 0, 					// 1游戏中 0空闲
			price: 20,						// 价格
			  
			// zegoRoomId: 'WWJ_ZEGO_12345_54323',
			zg: undefined,								// zego对象
			zegoRoomId: 'sander_21312312312',			// 房间号
			zegoAppId: 3177435262,						// 应用编号
			zegoToken: '',                              //zego登录token
			zegoServer: 'ws://106.15.41.49:8181/ws',	// 服务器地址
			zegoIdName: accessToken.getAccessToken(),			// 用户编号
			zegoNickName: 'U' + accessToken.getAccessToken(),	// 昵称
			showFront: true,							// 显示正摄像头
			showSide: false,							// 显示副摄像头

			frontStreamId: undefined,		// 正面视频流编号
			sideStreamId: undefined,		// 侧面视频流编号

			clickAudio: undefined,		// 点击音效
			moveAudio: undefined,		// 移动音效
			readyGoAudio: undefined, 	// 准备音效
			successAudio: undefined, 	// 抓取成功音效
			failureAudio: undefined,	// 抓取失败音效
			takeAudio: undefined,		// 抓取音效
			loadCount: 0,				// 加载统计

			isGame: false,				// 是否游戏中

			musicSwitch: true,			// 背景音乐开关
			soundSwitch: true,			// 背景音效开关

			
			roomDetail: false,   	 	// 房间娃娃详情
			grabList: false,             //抓取记录
			nickname: storage.get('user').nickname,	// 昵称
			
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
		    toyImgs: [],            //娃娃大图
		    winImg: '',
		    
		    loadingStatus: false,    //loading
		    
		    grabProcess: false,     //点击抓取后的一段禁止操作时间
		    moveDisabled: false,    //方向键禁止连续点击
		    
		    startMoveTime: undefined, //点击移动开始时间
		    stopMoveTime: undefined, //点击移动结束时间
		    delayStopMove: undefined, //点击不足200ms延时定时器
		    delayStopMoveFlag: true,  //点击不足200ms延时定时器是否执行
		    currDirection: null,  //当前移动方向
		    
		    toggleStatus: true,   //消息列表显示状态
		    roomNewsList: [],     //消息列表
		    
		    chatText: '',        //发言内容
		    chatStatus: false,   //聊天input显示状态
		    
//		    rechargeStatus: false,  //充值
//		    rechargeList: []
	    }
	},
	created() {	
		this.machineId = this.$route.query.machineId
		//房间人数
		this.roomNum = this.$route.query.num
		// 机器编号
		this.machineSn = this.$route.query.machineSn 	
		//房间号
		this.zegoRoomId = this.$route.query.liveRoomCode
		// 抓取价格
		this.price = parseInt(this.$route.query.price)
		// 获取金币
		this.getGold()
		//进入房间
		this.enterRoom()
		// 初始化socket
		this.initWebSocket()
		// 即构推流初始化
		this.getInitZegoData()
		// 阻止缩放
		this.preventScale()
	},
	mounted() {	
		let self = this
		this.wH = document.getElementById('app').offsetHeight
		// 加载音频资源
		this.loadAudios()
	},
	updated() {
		let length = this.roomNewsList.length
		if(length > 1) {
			length = length - 1
			document.getElementById(`news-item-${length}`).scrollIntoView();
		}
		
	},
	methods: {
		
		depress(event) {
			event.target.classList.add("active")
		},
		loosen(event) {
			event.target.classList.remove("active")
		},
		
		/**
		 * 房间抓取记录
		 */
		render(res) {
			res.data.forEach((item) => {
		    	this.pagination.content.push(item)
	    	})
	    },

		/**
		 * 初始化环信
		 */
		enterRoom() { 
			this.$api.enterRoom({machineId: this.$route.query.machineId}).then((response) => {
				this.toyImgs = response.data.imgs
				this.winImg = response.data.winImg
				
			})
			
		},


		/**
		 * 初始化socket
		 */
		initWebSocket() {
			this.sock = new SockJS(process.env.WEBSOCKET_URL)

			const parent = this 

			// 打开成功连接
			this.sock.onopen = () => {
				this.sock.send(JSON.stringify({
					cmd: 'conn',
//					headUrl: storage.get('headUrl'),
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
							if(data.status == 201) {
								parent.$router.replace('/login')
							}
							return;
						}

						this.roomStatus = data.room_status
						data.room_status && (this.avatar = data.headUrl)
						
						this.roomNum = data.member_count
						if (data.isGame === 1) {
							this.operateTime = data.remainSecond
							this.operateShow = true
							this.isGame = true
//							this.startSideStream()
							this.operateCountDown(data.remainSecond)
						}
						
						var news = {
							tit: this.nickname,
							text: '进入了房间！'
						}
						this.roomNewsList.push(news)

						// 自动发送心跳包（30s一次）
						this.sendHeartBeate()
						console.debug('连接服务器成功')
						break;
					case 'hb_r':
						console.debug('心跳包答复')
						this.roomNum = data.member_count
						break;
					case 'status':
						console.debug('游戏状态更新')
						this.roomNum = data.member_count
						this.roomStatus = data.gameStatus
						if (data.gameStatus === 1) {
							data.headUrl ? this.avatar = data.headUrl : this.avatar = '../../static/image/vvv.png'
						}else {
							this.avatar = ''
						}
						break;
					case 'into_room':
						console.debug('进入房间通知')
						this.roomNum = data.member_count
						var news = {
							tit: data.nickname,
							text: '进入了房间！'
						}
						this.roomNewsList.push(news)
						
						break;
					case 'leave_room':
						console.debug('退出房间通知')
						this.roomNum = data.member_count
						var news = {
							tit: data.nickname,
							text: '离开了房间~~~'
						}
						this.roomNewsList.push(news)
						break;
					case 'system':
						console.debug('系统通知')
						this.roomNum = data.member_count
						var news = {
							tit: '系统消息：',
							text: data.content
						}
						this.roomNewsList.push(news)
						break;
					case 'text_message':
						console.debug('聊天消息')
						this.roomNum = data.member_count
						var news = {
							tit: data.sender + '：',
							text: data.content
						}
						this.roomNewsList.push(news)
						break;
					case 'maintain':
						console.debug('设备维护通知')
						MessageBox.alert('设备维护中， 请切换到其他房间').then(action => {
							this.$router.replace('/index')
						})
						this.succStatus = false
						this.failStatus = false
						this.operateShow = false
						clearInterval(this.endTimer)
						
						break;
					case 'other_grab':
						console.debug('其他玩家抓取结果通知')
						this.roomNum = data.member_count
						if(data.value == 1) {
							var news = {
								tit: data.nickname,
								text: '太棒啦，抓中了娃娃~~'
							}
							this.roomNewsList.push(news)
						}else {
							var news = {
								tit: data.nickname,
								text: '差点就抓到了，继续努力哦~~~'
							}
							this.roomNewsList.push(news)
						}
						
						break;
					case 'start_r':
						console.debug('游戏开始状态')
						if (!this.isGame && data.status === 200) {
							this.avatar = this.userAvatar
							this.roomNum = data.member_count
							this.succStatus = false
							this.failStatus = false
							this.operateShow = true
							this.isGame = true
//							this.startSideStream()
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
						this.roomNum = data.member_count
						this.operateShow = false
						this.isGame = false
//						this.closeSideStream()
						this.showFront = true
						this.showSide = false
						clearInterval(this.operationTimer)
						this.grabProcess = false
						if (data.value === 1) {
							// 抓取成功
							this.grabSucces()
							var news = {
								tit: this.nickname,
								text: '太棒啦，抓中了娃娃~~'
							}
							this.roomNewsList.push(news)
						} else {
							// 抓取失败
							this.grabFailure()
							var news = {
								tit: this.nickname,
								text: '差点就抓到了，继续努力哦~~~'
							}
							this.roomNewsList.push(news)
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
		getInitZegoData() {
			this.$api.getZegoInitData().then(res => {
				this.zegoAppId = res.data.appId
				this.zegoServer = res.data.server
				this.zegoToken = res.data.zegoToken
				this.initZego()
		    }, err => {
		    	
		    })
		},
		initZego() {
			this.zg = new ZegoClient()
			this.zg.config({
				appid: parseInt(this.zegoAppId),
				server: this.zegoServer,
				idName: this.zegoIdName,
				nickName: this.zegoNickName
			})

			const parent = this

			// 登录房间
			this.zg.login(this.zegoRoomId, 2, this.zegoToken, (streamList) => {
				streamList.forEach((item) => {
					// 设置音量0
					parent.zg.setPlayVolume(item.stream_id, 0)
					if (item.stream_id.endsWith('_2')) {
						parent.sideStreamId = item.stream_id
						// 只有游戏中才开始播放侧边视频流，观众模式播放侧边视频流
//						this.isGame && parent.zg.startPlayingStream(item.stream_id, document.getElementById('sideview'), 1)
						parent.zg.startPlayingStream(item.stream_id, document.getElementById('sideview'), 0)
					} else {
						parent.frontStreamId = item.stream_id
						parent.zg.startPlayingStream(item.stream_id, document.getElementById('frontview'), 0)
					}
				})
			}, (error) => {
				console.error('连接失败:' + error.msg)
			})

			// 房间连接断开通知
			this.zg.onDisconnect = (err) => {
				console.error('房间断开连接[code: ' + err.code + ' , msg: ' + err.msg + ']')
				MessageBox.alert('连接断开，退出房间').then(action => {
					this.$router.replace('/index')
				})
			}

			// 被踢下线通知
			this.zg.onKickOut = (err) => {
				console.error('被踢下线通知[code: ' + err.code + ' , msg: ' + err.msg + ']')
				MessageBox.alert('账号冲突，退出房间').then(action => {
					this.$router.replace('/index')
				})
			}

			// 流更新通知
			this.zg.onStreamUpdated = (type, streamList) => {
				console.info('流更新通知')
			}

			// 流状态变更通知
			this.zg.onStreamExtraInfoUpdated = (streamList) => {
				console.info("流状态变更通知")
			}

			// 流信息变更通知
			this.zg.onPlayStateUpdate = (type, streamId) => {
				setTimeout(() => {
					parent.loadingStatus = false
				}, 600)
				console.info('流' + streamId + ', 状态：' + type)
			}
		},

		//点击开始游戏
		beginGame() {
			this.playClickAudio()
			this.succStatus = false
			this.failStatus = false
			this.startGame()
		},

	    //准备到计时
		readyGo() {
			this.readyStatus = true
			this.readyTime = 3		// 倒计时3秒
			this.playReadyGoAudio()
			const parent = this
			this.operateCountDown(30)
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
			this.operationTimer = setInterval(() => {
				if (self.operateTime === 0) {
					self.grab()
					console.info("抓取:" + self.operationTimer)
					clearInterval(self.operationTimer)
					return
				}
				self.operateTime--
			}, 1000)
		},
		
		
		//退出计时
		resultGo() {
			this.endTime = 5
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
		
		//消息列表显示或隐藏
		toggleNews() {
			this.toggleStatus = !this.toggleStatus
		},
		
		//打开聊天input
		openChat() {
			const self = this
			this.chatStatus = true
			this.$nextTick(function() {
				this.$refs.Input.focus()
				this.$refs.Input.scrollIntoView()
			})
		},
		//聊天input出现在屏幕内
		chatFocus(event) {
			event.target.scrollIntoView();
			
		},
		//聊天input出现在屏幕内
		chatClick(params) {
			params.event.target.scrollIntoView();
			
		},
		
        //发送聊天
		sendChat() {
			if(!this.chatText) {
				Toast({
					message: '请输入聊天内容',
					position: 'middle',
					duration: 1000
				})
			}
			if (this.sock == undefined) {
				alert('服务器连接失败，请重试')
				return
			}
			this.sock.send(JSON.stringify({
				cmd: 'text_message',
				vmc_no: this.machineSn,
				content: this.chatText
			}))
			var news = {
				tit: this.nickname + '：',
				text: this.chatText
			}
			this.roomNewsList.push(news)
			this.chatText = ''
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
		touchstart(direction, e) {
			if(this.grabProcess) {
				return
			}
			if (this.showSide) {
				if (direction === 1) {
					direction = 3
				} else if (direction === 2) {
					direction = 4
				} else if (direction === 3) {
					direction = 2
				} else if (direction === 4) {
					direction = 1
				}
			}
			console.info("移动方向：" + this.currDirection+","+ direction)
			var changeDirect = (this.currDirection != direction)
			var currDirect = this.currDirection
	    	let self = this
	    	this.startMoveTime = new Date().getTime()
	    	this.currDirection = direction
	    	e.preventDefault()
	    	if(this.stopMoveTime) {
	    		var diffTime = this.startMoveTime - this.stopMoveTime
	    		if(diffTime < 200 && !changeDirect) {
	    			clearTimeout(this.delayStopMove)
	    			this.delayStopMoveFlag = false
	    			return
	    		}
	    		if(diffTime < 200 && changeDirect) {
	    			clearTimeout(this.delayStopMove)
	    			this.delayStopMoveFlag = false
	    			this.sock.send(JSON.stringify({
						cmd: 'stop',
						vmc_no: this.machineSn,
						direction: currDirect
					}))
	    		}
	    		
	    		self.moveDirection(direction)
	    	}else {
	    		self.moveDirection(direction)
	    	}
	    	
		},
		touchend(direction){
			if(this.grabProcess) {
				return
			}
			if (this.showSide) {
				if (direction === 1) {
					direction = 3
				} else if (direction === 2) {
					direction = 4
				} else if (direction === 3) {
					direction = 2
				} else if (direction === 4) {
					direction = 1
				}
			}
			this.stopMoveTime = new Date().getTime()
			this.moveClickAudio()
			this.stopMove(direction)
			return false 
		},
		moveDirection(direction) {
			

//			this.playClickAudio()
			if (this.sock == undefined) {
				alert('服务器连接失败，请重试')
				return
			}
			this.sock.send(JSON.stringify({
				cmd: 'move_direction',
				vmc_no: this.machineSn,
				direction: direction
			}))
		},
		stopMove(direction) {
			if (this.sock == undefined) {
				alert('服务器连接失败，请重试')
				return
			}
			
			var timeDiff = this.stopMoveTime - this.startMoveTime
			this.delayStopMoveFlag = true
			if(timeDiff < 200) {
				this.delayStopMove = setTimeout(() => {
					if(this.delayStopMoveFlag) {
						this.sock.send(JSON.stringify({
							cmd: 'stop',
							vmc_no: this.machineSn,
							direction: direction
						}))
						
					}	
					
				}, 200)
				return
			}
			this.sock.send(JSON.stringify({
				cmd: 'stop',
				vmc_no: this.machineSn,
				direction: direction
			}))
		},
//		touchstart(direction, e) {
//			if(this.moveDisabled) {
//				return
//			}
//			if(this.grabProcess) {
//				return
//			}
//	    	let self = this
//	    	self.moveDirection(direction)
//			this.timeInter = setInterval(() => {
//				console.log('move')
//				self.moveDirection(direction)
//			},300)
//		 	e.preventDefault()
//		},
//		touchend(){
//			if(this.grabProcess) {
//				return
//			}
//			this.moveDisabled = true
//			setTimeout(() => {
//				this.moveDisabled = false
//			},300)
//			this.playClickAudio()
//		   	clearInterval(this.timeInter)
//		   	this.timeInter = 0
//			return false 
//		},
//		moveDirection(direction) {
//			if (this.showSide) {
//				if (direction === 1) {
//					direction = 3
//				} else if (direction === 2) {
//					direction = 4
//				} else if (direction === 3) {
//					direction = 2
//				} else if (direction === 4) {
//					direction = 1
//				}
//			}
//
////			this.playClickAudio()
//			if (this.sock == undefined) {
//				alert('服务器连接失败，请重试')
//				return
//			}
//
//			this.sock.send(JSON.stringify({
//				cmd: 'move',
//				vmc_no: this.machineSn,
//				direction: direction
//			}))
//		},

		/**
		 * 抓取
		 */
		grab() {
			if (this.sock == undefined) {
				alert('服务器连接失败，请重试')
				return
			}
			if(this.grabProcess) {
				return
			}
			this.grabProcess = true
			const parent = this
			setTimeout(() => {
				parent.takeAudio.play()
			}, 200)

			this.sock.send(JSON.stringify({
				cmd: 'grab',
				vmc_no: this.machineSn,
			}))
		},
		
		/**
		 * 离开房间
		 */
		leaveRoom() {
			if (this.sock == undefined) {
				alert('服务器连接失败，请重试')
				return
			}
			this.sock.send(JSON.stringify({
				cmd: 'leave',
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
		
		//切换声音
		changeAudio(params) {
			this.playClickAudio()
			const status = !params.status
			console.log(status)
			this.musicSwitch = this.soundSwitch = status
			storage.set('music_switch', status)
			storage.set('sound_switch', status)
			if(status) {
				this.$root.bgAudio && this.$root.bgAudio.paused && this.$root.bgAudio.play()
				
			}else {
				this.$root.bgAudio && !this.$root.bgAudio.paused && this.$root.bgAudio.pause()
			}
		},

		/**
		 * 播放点击音效
		 */
		playClickAudio() {
			this.soundSwitch && this.clickAudio.play()
		},
		
		/**
		 * 移动点击音效
		 */
		moveClickAudio() {
			this.soundSwitch && this.moveAudio.play()
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
//			this.rechargeStatus = true
		},

		/**
		 *打开娃娃详情
		 */
		goRoomDatail() {
			this.playClickAudio()
			this.roomDetail = true
		},
		
		/**
		 *打开抓取记录
		 */
		goGrabList() {
			this.playClickAudio()
			this.grabList = true
		},

		/**
		 * 抓取成功
		 */
		grabSucces() {
			this.succStatus = true
			this.playSuccessAudio()
			this.endTime = 5
			const parent = this
			function timeout() {
				setTimeout(() => {
					if (parent.endTime === 1) {
//						 parent.succStatus = false
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
			this.endTime = 5
			const parent = this
			function timeout() {
				setTimeout(function() {
					if (parent.endTime === 1) {
//						 parent.failStatus = false
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
				this.nickname = response.data.nickname
				this.remainGold = response.data.money
				this.userAvatar = response.data.avatar || '../../static/image/vvv.png'
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
			if(this.musicSwitch) {
				this.$root.bgAudio.paused && this.$root.bgAudio.play()
			}
			// 点击音效
			this.clickAudio = document.getElementById('click-audio')
			
			// 移动音效
			this.moveAudio = document.getElementById('move-audio')

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
			this.zg.startPlayingStream(this.sideStreamId, document.getElementById('sideview'), 1)
			this.zg.setPlayVolume(this.sideStreamId, 0)
		},

		// 阻止双击放大
		preventScale() {
			const parent = this
			
			document.addEventListener('gesturestart', function (e) {
				e.preventDefault()
			}, false)
			document.addEventListener('dblclick', function (e) {
				e.preventDefault();
			}, false)
			document.addEventListener('touchstart', function (event) {
				if (event.touches.length > 1) {
					event.preventDefault();
				}
			}, false)
			var lastTouchEnd = 0
			document.addEventListener('touchend', function (event) {
				var now = (new Date()).getTime()
				if (now - lastTouchEnd <= 300) {
					event.preventDefault();
				}
				lastTouchEnd = now;
			}, false)
		},

		/**
		 * 关闭抓取记录弹框
		 */
		closeGrabList() {
			this.playClickAudio()
			this.roomDetail = false
			this.grabList = false
		},

		/**
		 * 创建弹幕
		 */
		createDanmu(text) {
			let box = document.getElementById('danmu-container')
			const colors = ['#a1c843', '#f2b02d', '#ff808e']
			const randomNum = Math.floor(Math.random()*3);
			let html = `<div class = "danmu ${colors[randomNum]}" style = "top: ${100 + 20 * randomNum}px" >${text}</div>`
			let myhtml = document.createElement('div')
			myhtml.className = "danmu"
			myhtml.style = `
				top: ${100 + 20 * randomNum}px; 
				position: fixed;
				left: 100%;
				font-size: .4rem;
				font-weight: bold;
				width: 4rem;
				color: white;
				animation: danmu 5s linear 0s 1;
				text-shadow: 0 0 .03rem #fff064;
				text-stroke: .02rem ${colors[randomNum]};
				-webkit-text-stroke: .02rem ${colors[randomNum]};`
			myhtml.innerHTML = html
			box.appendChild(myhtml)

			console.log(box.childNodes)
			setTimeout(() => {
				box.childNodes.forEach((item, index) => {
					if(index > 30) {
						box.childNodes.forEach((it, ind) => {
							box.removeChild(box.childNodes[ind])
						})
					}
				})
			}, 10000);
		},

		// 
		danmu() {
			
		}
	},

	beforeDestroy() {
		// 关闭背景音量
		this.$root.bgAudio && !this.$root.bgAudio.paused && this.$root.bgAudio.pause()
		this.leaveRoom()
		this.zg.release()
	}

		
}
</script>

<style lang="scss" scoped>
@import "../../static/css/style.scss";
.room-loading{
	position: absolute;
	width: 100%;
	z-index: 9999;
	left: 0;
	top: 0;
	bottom: 0;
	background: url(https://yingdd.oss-cn-hangzhou.aliyuncs.com/90530c7ba350e128fa64cee4d4aee58a.jpg) no-repeat center;
	background-color: #a6a2a1;
	background-size: 100% 100%;
}
.video-content{
	width: 100%;
	height: 9.3333333rem;
	border-radius: 0.2rem;
	position: relative;
}
#frontview, #sideview {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	z-index: -2;
	border-radius: 0.2rem;
}
#frontview.show, #sideview.show {
	z-index: 0;
}
.app{
	position: relative;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	font-weight: 700;
	padding: 0 0.25rem;
} 
.room-top{
	height: 0.85rem;
	display: flex;
	align-items: center;
	color: #fff;
	margin-left: -0.25rem;
	.back{
		width: 0.85rem;
		height: 0.85rem;
		position:relative;
		.iconfont{
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
	}
	.avatar, .avatar-position{
		width: 0.68rem;
		height: 0.68rem;
		border-radius: 50%;
	}
	.room-price{
		background: rgba(0,0,0,0.3);
		position: relative;
		line-height: 0.38rem;
		height: 0.38rem;
		border-radius: 0.38rem;
		padding-left: 0.4rem;
		padding-right: 0.15rem;
		img{
			position: absolute;
			left: -0.2rem;
			width: 0.48rem;
			top: 50%;
			transform: translateY(-50%);
		}
	}
	.room-count{
		padding-left: 0.2rem;
		flex: 1;
		font-size: 0.28rem;
		line-height: 1.2;
	}
}
.audio-change{
	position: fixed;
	width: 0.9rem;
	height: 0.9rem;
	right: 0.35rem;
	top: 1rem;
}
.room-side{
	position: absolute;
	right: 0.2rem;
	top: 40%;
	width: 0.9rem;
	& > .child{
		width: 100%;
		height: 0.9rem;
		margin-bottom: 0.2rem;
		background-size: 100% 100%;
	}
	.view-change{
		background-image: url(../../static/image/dd33.png);
	}
	.open-detail{
		background-image: url(../../static/image/ssrr.png);
	}
	.open-record{
		background-image: url(../../static/image/ewsd.png);
	}
}
.room-news-content{
	position: absolute;
	bottom: 0.15rem;
	left: 0.18rem;
	width: 3.8rem;
	z-index: 5;
	.room-news-list{
		overflow-y: auto;
		height: 2.3rem;
	}
	.room-news-item{
		font-size: 0.22rem;
		font-weight: normal;
		color: #fff;
		background: rgba(0,0,0,0.2);
		padding: 0.06rem 0.1rem;
		border-radius: 0.1rem;
		line-height: 1.4;
		margin-bottom: 0.14rem;
		display: inline-block;
		min-width: 60%;
		max-width: 100%;
		.tit{
			color: #f7ed00;
		}
	}
	.toggle-news-list{
		margin-top: 0.2rem;
		width: 0.78rem;
		height: 0.54rem;
		border-radius: 0.2rem;
		background: #3ede62;
		position: relative;
		text-align: center;
		line-height: 0.54rem;
		color: #fff;
		font-size: 0.22rem;
		font-weight: normal;
	}
}
.room-bottom{
	width: 100%;
	display: flex;
	padding: 0.74rem 0;
	color: #fff;
	font-size: 0.3rem;
	justify-content: space-around;
	align-items: center;
	&>div.com{
		height: 1.32rem;
		width: 1.26rem;
		background-size: 100% 100%;
		overflow: hidden;
		background-image: url(../../static/image/111-1.png);
		&.active{
			background-image: url(../../static/image/111-2.png);
		}
	}
	&>div.begin{
		width: 2.96rem;
		height: 1.32rem;
		background-size: 100% 100%;
		background-image: url(../../static/image/11222.png);
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
			min-width: 1.2rem;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			max-height: 100%;
			max-width: 100%;
		}
	}
	
}
.fail-content{
	width: 5.4rem;
	padding: 1.3rem 0 1rem;
	position: relative;
	.fail-img{
		display: block;
		width: 2.6rem;
		margin: 0 auto 0.5rem;
	}
}
.close{
	position: absolute;
	right: 0;
	top: 0;
	width: 0.6rem;
}
.again-time{
	padding-top: 0.5rem;
	font-size: 0.3rem;
	opacity: 0;
	&.show{
		opacity: 1;
	}
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
		background: $bg-color;
		line-height: 0.9rem;
		font-size: 0.3rem;
		margin:  0 0.5rem;
		box-shadow: 3px 0 0 #000,0 3px 0 #000,-2px 0 0 #000,0 -2px 0 #000;;
	}
}
.back-position {
	width: 1rem;
	margin-right: .2rem;
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
		padding: 0 0.6rem;
		background: #fff;
		display: flex;
		span{
			flex: 1;
			padding: 0.2rem 0 0.25rem;
		}
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
	.toy-imgs{
		background: #fff;
		flex: 1;
		border-radius: 0 0 0.2rem 0.2rem;
		overflow-y: auto;
		padding: 0.4rem 0.5rem;
		img{
			display: block;
			width: 100%;
			margin-bottom: 0.3rem;
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
.recharge-content{
	width: 6.5rem;
	height: 60vh;
	overflow: hidden;
	padding-bottom: 1.3rem;
	position: relative;
	display: flex;
	.recharge-list{
		background: #fff;
		width: 100%;
		border-radius: 0.2rem;
		overflow-y: auto;
		padding: 0.4rem 0.3rem;
		.recharge-item{
			display: flex;
			height: 0.8rem;
			align-items: center;
			font-weight: normal;
			border: 1px solid #ddd;
			padding: 0 0.3rem;
			border-radius: 0.8rem;
			margin-bottom: 0.4rem;
			.recharge_left{
			    display: flex;
			    align-items: center;
			    font-size: .33rem;
			    color: #fff;
			    font-size: .3rem;
			    width: 1.6rem;
			    text-shadow: 1px 0 0 #000,0 1px 0 #000,-1px 0 0 #000,0 -1px 0 #000;
			    .diamond-icon{
			    	width: 0.22rem;
			    	margin-right: 0.2rem;
			    }
			    
			}
			.recharge_center{
			    color: #956134;
			    font-size: .28rem;
			    font-weight: 500;
			    flex: 1;
			    overflow: hidden;
			}
			.recharge_right{
			    color: #fc7298;
			    height: 0.54rem;
			    line-height: 0.54rem;
			    border-radius: 0.54rem;
			    width: 1.1rem;
			    text-align: right;
			    background: #fff;
			    font-size: 0.3rem;
			    font-weight: 700;
			}
			&:last-of-type{
				margin-bottom: 0;
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