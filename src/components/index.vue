<template>
  <div class="content">
  	<!--玩吧 start-->
    <!--<div class="header">
    	<router-link to="/user" class="user-link link">
    		<img :src="avatar"  class="fullAuto" />
    	</router-link>
    	<img class="logo-text"  src="../../static/image/logo-text.png" />
    	<router-link to="/toysBox" class="user-link link">
    		<img src="../../static/image/toys-box.png"  class="fullAuto" />
    	</router-link>
    </div>-->
    <!--玩吧 end-->
    <div class="home-pagination-content">
    	<Pagination :render="render" :needToken="false" :param="pagination" :autoload="false" ref="pagination" uri="/dm-api/home/tag" >
	    	<div class="home-data">
					<div class="banner">
				    	<mt-swipe :auto="4000" class="swipe-content">
								<mt-swipe-item v-for="(item,index) in banner" :key="index">
									<div class="fullEle" v-tap="{ methods : bannerLink, item: item }">
										<img :src="item.imgUrl" class="fullEle" />
									</div>
								</mt-swipe-item>
							</mt-swipe>
				    </div>
				    <div class="homebar">
				    	<div class="homebar-content">
				    		<router-link :to="item.link" class="nav-item" v-for="(item,index) in homebar" :key="index">
					    		<div class="icon">
					    			<img :src="item.icon"  />
					    		</div>
					    		<p>{{item.text}}</p>
					    	</router-link>
				    	</div>
					    	
				    </div>
				    <div class="homeNav">
			    		<router-link to="/user" class="nav-item">
				    		<img src="../../static/image/user-icon.png"  />
				    		个人中心
				    	</router-link>
				    	<div class="nav-item" @click="vipGiftShow = true">
				    		<img src="../../static/image/tequan.png"  />
				    		礼包
				    	</div>
				    </div>
				</div>	
				<div class="home-toys-content">
					<div class="home-toys-list">
						<div class="navbar">
				    	<div v-tap="{ methods : changeTag, item: item }" v-for="(item, index) in navbar" :class="currTags == item.id ? 'active' : ''"  class="nav-item">
				    		<div class="text">{{item.name}}</div>
				    	</div>
				    </div>
				    <div class="nav-content">
				    	<div class="toys-content">
									<div class="toys-list" v-show="pagination.content.length>0">
								    	<div v-tap="{ methods : enterRoom, item: item }" class="toys-item img-mask" v-for="(item, index) in pagination.content" :key="index">
								    		<img class="toys-img" :src="item.imgs[0]"  />
								    		<div class="toys-status" :class="[item.statusClass]">{{item.statusText}}</div>
								    		<p class="join-count">
									    			<span class="shadow-text">{{parseInt(item.price)}}</span>
									    		</p>
								    		<div class="toys-info">
									    		<p class="toys-name shadow-text">{{item.name}}</p>
								    		</div>	
								    	</div>
								   </div>	
				    	</div>
				    	<div class="no_msg" style="padding-bottom: 1rem; padding-top: 1.3rem;" v-show="pagination.content.length<1 && pagination.loadEnd">
								<img src="../../static/image/ewd.png"  />
								<div>没有商品信息~</div>
						  </div>	
				    </div>
					</div>
						
				</div>
							
		  </Pagination>
    </div>
	  
	  <!--玩吧 start-->
	  <div class="sign-content"  v-show="signShow && (!guideShow) && (!giftShow) && loadEnd">
    	<div class="sign-box">
    		<img class="bg" src="../../static/image/sign.png"  />
    		<div class="sign-text">
    			<div class="one-level">
    				<div class="sign-item" :class="{'active': signItem_1.status}">
    					<div class="unsign">
    						<img class="icon" src="../../static/image/wd.png"  />
    						<p class="shadow-text">{{signItem_1.points}}</p>
    					</div>
    					<div class="shadow-text signed">
    						已<br />签
    					</div>
    				</div>
    				<img class="arror" src="../../static/image/566gg.png"  />
    				<div class="sign-item" :class="{'active': signItem_2.status}">
    					<div class="unsign">
    						<img class="icon" src="../../static/image/wd.png"  />
    						<p class="shadow-text">{{signItem_2.points}}</p>
    					</div>
    					<div class="shadow-text signed">
    						已<br />签
    					</div>
    				</div>
    				<img class="arror" src="../../static/image/566gg.png"  />
    				<div class="sign-item" :class="{'active': signItem_3.status}">
    					<div class="unsign">
    						<img class="icon" src="../../static/image/wd.png"  />
    						<p class="shadow-text">{{signItem_3.points}}</p>
    					</div>
    					<div class="shadow-text signed">
    						已<br />签
    					</div>
    				</div>
    			</div>
    			<div class="two-level">
    				<img src="../../static/image/344c.png"  />
    			</div>
    			<div class="one-level">
    				<div class="sign-item" :class="{'active': signItem_6.status}">
    					<div class="unsign">
    						<img class="icon" src="../../static/image/wd.png"  />
    						<p class="shadow-text">{{signItem_6.points}}</p>
    					</div>
    					<div class="shadow-text signed">
    						已<br />签
    					</div>
    				</div>
    				<img class="arror" src="../../static/image/gghhh.png"  />
    				<div class="sign-item" :class="{'active': signItem_5.status}">
    					<div class="unsign">
    						<img class="icon" src="../../static/image/wd.png"  />
    						<p class="shadow-text">{{signItem_5.points}}</p>
    					</div>
    					<div class="shadow-text signed">
    						已<br />签
    					</div>
    				</div>
    				<img class="arror" src="../../static/image/gghhh.png"  />
    				<div class="sign-item" :class="{'active': signItem_4.status}">
    					<div class="unsign">
    						<img class="icon" src="../../static/image/wd.png"  />
    						<p class="shadow-text">{{signItem_4.points}}</p>
    					</div>
    					<div class="shadow-text signed">
    						已<br />签
    					</div>
    				</div>
    			</div>
    			<div class="three-level">
    				<img src="../../static/image/34dd.png"  />
    				<div class="sign-item" :class="{'active': signItem_7.status}">
    					<div class="unsign">
    						<img class="icon" src="../../static/image/wd.png"  />
    						<p class="shadow-text">{{signItem_7.points}}</p>
    					</div>
    					<div class="shadow-text signed">
    						已<br />签
    					</div>
    				</div>
    			</div>
    			<div class="sign-btn btn-hover" :class="{'signed': !signStatus}" v-tap="{ methods : sign }" >
    				<span v-show="signStatus">我要签到</span>
    				<span v-show="!signStatus">已签到</span>
    			</div>
    		</div>
    	</div>
    </div>
    <div class="guide-tip img-mask" v-show="guideShow && (!giftShow) && loadEnd">
    	<img class="mask" src="../../static/image/guide1.png"  />
    	<div class="click-area" v-tap="{ methods : guideOperate }"></div>
    </div>
    
    
    <div class="float-content">
    	<div class="share" @click="shareShow = true">
    		<div class="float-icon"><img src="../../static/image/wanba-share.png"  /></div>
    		<p>分享有礼</p>
    	</div>
    	<div class="save" @click="saveShow = true" v-show="platform != 2">
    		<div class="float-icon"><img src="../../static/image/wanba-save.png"  /></div>
    		<p>收藏有礼</p>
    	</div>
    </div>
    <mt-popup v-model="saveShow" class="float-pop">
			<div class="float-box">
				<p class="tit">添加到桌面收藏可获得奖励</p>
				<img class="profit-icon" src="../../static/image/81@2x.png"  />
				<p class="profit-text shadow-text">
					<span>钻石</span>
					<span>x {{collectionNum}}</span>
				</p>
				<div class="float-btn" v-show="!saveConfirm"  v-tap="{ methods : save }">收藏</div>
				<div class="float-btn" v-show="saveConfirm" v-tap="{ methods : getSaveProfit }">领取</div>
			</div>
		</mt-popup>
		<mt-popup v-model="shareShow" class="float-pop">
			<div class="float-box">
				<p class="tit">分享游戏可获得奖励</p>
				<img class="profit-icon" src="../../static/image/intergal.png"  />
				<p class="profit-text shadow-text">
					<span>金币</span>
					<span>x {{shareNum}}</span>
				</p>
				<div class="float-btn" v-show="!shareConfirm"  v-tap="{ methods : share }">分享</div>
				<div class="float-btn" v-show="shareConfirm"  v-tap="{ methods : getShareProfit }">领取</div>
			</div>
		</mt-popup>
		<!--礼包-->
		<mt-popup v-model="giftShow" class="float-pop">
			<div class="float-box gift-box">
				<p class="tit" v-if="receiveGiftInfo.name">{{receiveGiftInfo.name}}</p>
				<div class="content">
					<p class="receive-status">{{receiveGiftInfo.title}}</p>
					<p class="receive-desc">{{receiveGiftInfo.content}}</p>
					<p class="receive-tip" v-if="receiveGiftInfo.res">记得明天继续到礼包中心领取新的礼包哦！</p>
				</div>
				<img src="../../static/image/33333.png" class="close" @click="giftShow = false" />
			</div>
		</mt-popup>
		<!--vip礼包-->
		<mt-popup v-model="vipGiftShow" class="float-pop">
			<div class="float-box vip-gift-box">
				<img src="../../static/image/33333.png" class="close" @click="vipGiftShow = false"  />
				<img src="../../static/image/vip.png" class="vip-logo"  />
				<p class="title">vip特权每日礼包</p>
				<p class="vip-grade">
					<span v-show="privilegeData.level">当前VIP等级 {{privilegeData.level}} 级</span>
					<span v-show="!privilegeData.level">您当前不是VIP用户</span>
				</p>
				<p class="tip">VIP详情请在	QQ空间小游戏特权中心内查看</p>
				<div class="vip-item" v-show="privilegeData.level">
					<p class="vip-item-tit">
						<img src="../../static/image/3@3x.png"  />
						当前VIP等级可领取特权礼包内容
					</p>
					<div class="vip-item-content">
						<div class="receive-content">
							<div class="gold">
								<div class="icon flex-center">
									<img src="../../static/image/34cd.png"  />
								</div>
								<p class="num">{{privilegeData.point}}金币</p>
							</div>
							<div class="gold ">
								<div class="icon flex-center dia">
									<img src="../../static/image/erdd.png"  />
								</div>
								<p class="num">{{privilegeData.money}}钻石</p>
							</div>
						</div>
							
						<div class="receive-btn" :class="{'disabled': privilegeData.receiveStatus}" @click="receiveprivilege">
							<span v-show="!privilegeData.receiveStatus">领取礼包</span>
							<span v-show="privilegeData.receiveStatus">已领取</span>
						</div>
					</div>
				</div>
				<div class="vip-item" v-if="privilegeData.level < 6">
					<p class="vip-item-tit">
						<img src="../../static/image/3@3x.png"  />
						下一档VIP等级可领取特权礼包内容
					</p>
					<div class="vip-item-content">
						<div class="receive-content">
							<div class="gold">
								<div class="icon flex-center">
									<img src="../../static/image/34cd.png"  />
								</div>
								<p class="num">{{privilegeData.nextPoint}}金币</p>
							</div>
							<div class="gold ">
								<div class="icon flex-center dia">
									<img src="../../static/image/erdd.png"  />
								</div>
								<p class="num">{{privilegeData.nextMoney}}钻石</p>
							</div>
						</div>
						<div class="receive-btn recharge" v-tap="{ methods : goRecharge }">
							<span>升级</span>
						</div>
					</div>
				</div>
			</div>
		</mt-popup>
		<mt-popup v-model="vipReceiveStatus" class="float-pop" >
			<div class="float-box gift-box" style="z-index: 4000 !important;">
				<div class="content">
					<p class="receive-status" style="padding-bottom: 0.15rem;">{{vipReceiveData.title}}</p>
					<p class="receive-desc">{{vipReceiveData.content}}</p>
				</div>
				<img src="../../static/image/33333.png" class="close" @click="vipReceiveStatus = false" />
			</div>
		</mt-popup>
	  <!--玩吧 end-->  
  </div>
</template>

<script>
import { Toast, Indicator, MessageBox } from 'mint-ui'
export default {
  data () { 
    return {
    	loadEnd: false,
    	homebar: [{
      	text: '福利中心',
      	icon: '../../static/image/112344.png',
      	link: '/welfareCenter'
      },{
      	text: '排行榜',
      	icon: '../../static/image/d44f.png',
      	link: '/rankList'
      },{
      	text: '金币商城',
      	icon: '../../static/image/34dxf.png',
      	link: '/intergalMall'
      },{
      	text: '充值中心',
      	icon: '../../static/image/344fs.png',
      	link: '/recharge'
      },{
      	text: '娃娃袋',
      	icon: '../../static/image/222.png',
      	link: '/toysBox'
      }],
      banner: [],
      
      navbar: [],
      toysList: [],
      currTags: null,
      firstTag: null,
      pagination: {
	        content: [],
	        loadEnd: false,
	        data: {
	        	page: 1,
	        	pageSize: 20
	        }
	    },
	    
	    avatar: '../../static/image/78@3x.png',  //头像
	    
	    musicSwitch: true,  //背景音乐
	    
	    /**
	     *玩吧start
			**/
	    guideShow: false,   //新手指引
	    
	    signShow: false,   //签到
	    signItem_1: {},
	    signItem_2: {},
	    signItem_3: {},
	    signItem_4: {},
	    signItem_5: {},
	    signItem_6: {},
	    signItem_7: {},
	    signStatus: null,
	    
	    
	    saveShow: false,    //收藏有礼
		  saveConfirm: false,
    	collectionNum: null,
    	
    	shareShow: false,   //分享有礼
    	shareNum: null,
    	shareConfirm: false,
	    platform: null,
	    
	    giftShow: false,    //礼包
	    receiveGiftInfo: {},
	    
	    vipGiftShow: false,  //vip礼包
	    privilegeData: {},
	    
	    vipReceiveStatus: false, //vip特权礼包
	    vipReceiveData: {}
	    /**
	     *玩吧start
			**/
    }
  },
  created() {
  	
  	/**
	     *玩吧start
			**/
		
	const self = this
	this.platform = window.OPEN_DATA.platform
		mqq.invoke('ui', 'webviewCanScroll', {"enable" : false})
		mqq.invoke('ui','setOnShareHandler',function(type){
		    mqq.invoke('ui','shareMessage',{
		        title: '掌上抓物机',
		        desc: '真实在线远程操控抓娃娃机',
		        share_type: type,
		        share_url: window.OPEN_DATA.shareurl,
		        image_url: 'http://a.qpic.cn/psb?/V12zhLgs0wFmud/rglvmrzOorCAmDbEpSxLfEyIjagK*2frRbWR4eOMEPM!/b/dPQAAAAAAAAA&bo=yADIAMgAyAADEDU!',
		        back: true
		    },function(ret){
		    	if(ret.retCode == 0) {
		    		  self.shareShow = true
		    			self.shareConfirm = true
		    	}else {
		    		self.shareShow = false
		    	}
		    });
		});
		window.mqq.invoke('ui','setOnAddShortcutHandler', {'callback':mqq.callback(self.save, false,true)})
		this.$api.userTask().then(res => {
	    this.collectionNum = res.data.collection
		  this.shareNum = res.data.share
	  }, err => {
	        
	  })
		this.$wanbaLogin().then(res => {
			let accessToken = res.data.accessToken
			self.$token.refreshToken(accessToken.accessToken, accessToken.refreshToken, accessToken.expireTime)
			self.$storage.set('user', res.data)
		  self.$storage.set('isNew', res.data.firstLogin)
		  res.data.firstLogin ? window.reportRegister() : window.reportLogin()
		  self.$getKey('GIFT') && self.getGift()
		  self.getPrivilegeData()
			self.signData()
    }, err => {
    	
    })
		/**
	     *玩吧start
			**/
		
		
  	this.$api.homeBanner().then(res => {
			this.banner = res.data
    }, err => {
    	  
		})
  	
  
  },
  activated() {
		if(this.$token.getAccessToken() && window.OPEN_DATA.openkey) {
    		this.getPrivilegeData()
    }
  	//背景音乐
  	if (this.$storage.get('music_switch') != null) {
			this.musicSwitch = this.$storage.get('music_switch')
		}
  },
  mounted() {
  	this.$api.homeTags().then(res => {
			this.navbar = res.data
			this.currTags = this.navbar[0].id
			this.firstTag = this.navbar[0].id
			this.tagChange(this.navbar[0].id)
    }, err => {
    	
    })
  },
  methods: {
  	tagChange(id) {
  		this.pagination.data.page = 1
  		this.pagination.data.type = id
  		this.$refs.pagination.refresh() 
  	},
  	changeTag(params) {
  		let item = params.item
  		if(this.currTags == item.id) {
  			return
  		}
  		this.tagChange(item.id)
  	},
  	bannerLink(params) {
  		let room = params.item
  		if(room.type == 1) {
  			this.$router.push({path: '/room', query: {machineSn: room.machineSn, num: room.num, price: room.price, machineId: room.machineId, liveRoomCode: room.liveRoomCode}})
  		}else if(room.type == 2) {
				this.$router.push('/recharge')
  		}else {
  			window.location.href = room.url
  		}
  	},
  	render(res) {
			this.currTags = this.pagination.data.type
			res.data.forEach((item) => {
				if(item.status == 0) {
					item.statusText = '空闲中'
					item.statusClass = 'none'
				}else if(item.status == 1) {
					item.statusText = '游戏中'
					item.statusClass = 'ing'
				}else if(item.status == 2) {
					item.statusText = '维护中'
					item.statusClass = 'end'
				}
        this.pagination.content.push(item)
      })
			this.guideShow = this.$storage.get('isNew')
    },

    // 进入房间
    enterRoom(params) {
    	let room = params.item
    	if(!this.$token.getAccessToken()) {
    		this.$router.push('/login')
    		return
    	}
    	if(room.status == 2) {
    		Toast({
					message: '机器维护中，请选择其他房间吧',
					position: 'middle',
					duration: 1500
				})
    		return
    	}
    	if(this.musicSwitch) {
    		this.$root.bgAudio.paused && this.$root.bgAudio.play()
    	}
        
      this.$router.push({path: '/room', query: {machineSn: room.machineSn, num: room.num, price: room.price, machineId: room.machineId, liveRoomCode: room.liveRoomCode}})
    },
    
    /**
	     *玩吧start
			**/
		//礼包
		getGift() {
			this.$api.giftReceive({
				option_id: this.$getKey('GIFT'),
				openid: window.OPEN_DATA.openid,
				openkey: window.OPEN_DATA.openkey
			}).then(res => {
				this.giftShow = true
				this.receiveGiftInfo = res.data
		  }, err => {
	
		  })
		},
		//特权礼包
		getPrivilegeData() {
			this.$api.getPrivilege({
				option_id: this.$getKey('GIFT'),
				openid: window.OPEN_DATA.openid,
				openkey: window.OPEN_DATA.openkey
			}).then(res => {
				this.privilegeData = res.data
		  }, err => {
	
		  })
		},
		receiveprivilege() {
			if(this.privilegeData.receiveStatus) {
				return
			}
			this.$api.giftReceive({
				option_id: this.privilegeData.optionId,
				openid: window.OPEN_DATA.openid,
				openkey: window.OPEN_DATA.openkey
			}).then(res => {
				this.privilegeData.receiveStatus = 1
				this.vipReceiveData = res.data
				this.vipReceiveStatus = true
		  }, err => {
	
		  })
		},
		goRecharge() {
			this.vipGiftShow = false
			this.$router.push('/recharge')
		},
    //签到
  	signData() {
			this.$api.signList().then(res => {
				this.signItem_1 = res.data.list[0]
				this.signItem_2 = res.data.list[1]
				this.signItem_3 = res.data.list[2]
				this.signItem_4 = res.data.list[3]
				this.signItem_5 = res.data.list[4]
				this.signItem_6 = res.data.list[5]
				this.signItem_7 = res.data.list[6]
				this.signStatus = res.data.status
				this.signShow = !!res.data.status
				this.loadEnd = true
		  }, err => {
	
		  })
		},
		sign() {
			this.$api.sign().then(res => {
					this.signStatus = 0
					this.signShow = false
					Toast({
					  message: '领取成功',
					  position: 'middle',
					  iconClass: 'toast-icon icon-success',
					  duration: 1500
					})
		    }, err => {
					this.signShow = false
		    })
		},
		
		//新手操作进入房间
    guideOperate() {
    	let room = {
    		item: this.pagination.content[0]
    	}
    	this.enterRoom(room)
			setTimeout(() => {
				this.guideShow = false
			},600)
    },
    goUser() {
    	this.$router.push('/user')
		},
		share() {
			mqq.ui.showShareMenu();
		},
		getShareProfit() {
			const self = this
			self.$api.userTaskComplete({
				task_key: 'share'
			}).then(res => {
				  self.shareConfirm = false
				  self.shareShow = false
		        Toast({
						  message: '分享成功',
						  position: 'middle',
						  iconClass: 'toast-icon icon-success',
						  duration: 2000
						})
		  }, err => {
		        
		  })
		},
		save() {
			const self = this
			mqq.ui.addShortcut({
	        action: 'web',
	        title: '掌上抓物机',
	        icon: 'http://a.qpic.cn/psb?/V12zhLgs0wFmud/rglvmrzOorCAmDbEpSxLfEyIjagK*2frRbWR4eOMEPM!/b/dPQAAAAAAAAA&bo=yADIAMgAyAADEDU!',
	        url: window.OPEN_DATA.jumpurl,
	        callback: function(ret){
	        	if(ret.result == 0) {
	        		self.saveShow = true
	        		self.saveConfirm = true
	        		
	        	}else {
	        		Toast({
							  message: '您已收藏过了哦！',
							  position: 'bottom',
							  duration: 2000
							});
		        	self.saveShow = false
	        	}
		        	
	        }
	    })
		},
		getSaveProfit() {
			const self = this
			self.$api.userTaskComplete({
				task_key: 'collection'
			}).then(res => {
			  self.saveConfirm = false
			  self.saveShow = false
	        Toast({
					  message: '收藏成功',
					  position: 'bottom',
					  duration: 2000
					});
	    }, err => {
	        self.saveConfirm = false
			    self.saveShow = false
	    })
		}
    /**
	     *玩吧end
			**/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../static/css/style.scss";
/*玩吧start*/

.gift-box{
	position: relative;
	border-radius: 0.2rem;
	background: #fff3b7;
	border: 0.1rem solid #fff;
	.receive-status{
		font-size: 0.32rem;
		color: #ff9435;
		padding-top: 0.1rem;
	}
	.receive-desc{
		padding: 0.2rem 0;
	}
	.close{
		position: absolute;
		width: 0.6rem;
		right: -0.26rem;
		top: -0.26rem;
		
	}
}
.vip-gift-box{
	background: #fff3b7;
	border: 0.1rem solid #fff;
	border-radius: 0.2rem;
	width: 6.5rem !important;
	font-size: 0.28rem;
	color: #000;
	position: relative;
	.vip-logo{
		position: absolute;
		left: 0.1rem;
		top: 0.1rem;
		width: 1.1rem;
	}
	.close{
		position: absolute;
		width: 0.6rem;
		right: -0.26rem;
		top: -0.26rem;
	}
	.title{
		font-size: 0.36rem;
		color:#ff5505;
		font-weight: 700;
	}
	.vip-grade{
		background: #fff;
		height: 0.76rem;
		border-radius: 0.76rem;
		text-align: center;
		line-height: 0.76rem;
		margin: 0.25rem 0 0.2rem;
	}
	.tip{
		font-size: 0.24rem;
		color: #fb640b;
		padding-bottom: 0.06rem;
	}
	.vip-item{
		padding-top: 0.4rem;
		.vip-item-tit{
			display: flex;
			align-items: center;
			padding-bottom:0.15rem;
			img{
				width: 0.44rem;
				margin-right: 0.1rem;
			}
		}
		.vip-item-content{
			display: flex;
			background: #fee86e;
			align-items: center;
			justify-content: space-between;
			border-radius: 0.3rem;
			padding: 0.3rem 0 0.15rem;
			.receive-content{
				display: flex;
				.gold{
					display: flex;
					flex-direction: column;
	
					align-items: center;
					min-width:1.7rem;
					.icon{
						width: 1.04rem;
						height: 1.04rem;
						border: 0.06rem solid #fff;
						padding: 0.18rem;
						border-radius: 0.2rem;
						background: #95c1ff;
						img{
							display: block;
							width: 100%;
						}
						&.dia{
							background: #ffe03d;
						}
					}
					.num{
						padding-top: 0.2rem;
					}
				}
			}
				
		}
		.receive-btn{
			width: 1.8rem;
			height: 0.6rem;
			background: url(../../static/image/4444.png);
			background-size: 100% 100%;
			line-height: 0.56rem;
			font-size: 0.26rem;
			color: #fff;
			margin-right: 0.2rem;
			&.disabled{
				background-image: url(../../static/image/44444.png);
			}
			&.recharge{
				background-image: url(../../static/image/333@3x.png);
			}
		}
	}
}

.float-pop{
	border-radius: 0.2rem;
}
.float-box{
	width: 6rem;
	padding: 0.3rem 0.2rem;
	text-align: center;
	
	.tit{
		padding: 0.15rem;
		color: #000000;
		font-size: 0.32rem;
	}
	.profit-icon{
		display: block;
		width: 3.1rem;
		margin: 0 auto;
	}
	.profit-text{
		color: #fff;
		font-size: 0.3rem;
		text-shadow: 2px 0 1px #000,0 2px 1px #000,-2px 0 1px #000,0 -2px 1px #000;
		*filter: Glow(color=#000, strength=1);
	}
	.float-btn{
		width: 4rem;
		height: 0.66rem;
		line-height: 0.66rem;
		background: #f97295;
		border-radius: 0.66rem;
		margin: 0.5rem auto 0.2rem;
		color: #fff;
		font-size: 0.3rem;
	}
}
.float-content{
	position: fixed;
	z-index: 100;
	right: 0.2rem;
	bottom: 0.8rem;
	text-align: center;
	.float-icon{
		margin: 0 auto;
		width: 0.7rem;
		height: 0.7rem;
		img{
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	&>div{
		text-align: center;
		margin-bottom: 0.3rem;
		color: #000;
		p{
			padding-top: 0.1rem;
			font-size: 0.24rem;
		}
	}
}
.sign-content{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 100;
	background: rgba(55,55,55,0.6);
	.sign-box{
		position: absolute;
		width: 6.5rem;
		transform: translate(-50%, -55%);
		left:50%;
		top:50%;
		.bg{
			display: block;
			width: 100%;
		}
		.sign-text{
			position: absolute;
			top: 3.1rem;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 110;
			padding: 0 1.06rem;
		}
	}
}

.guide-tip{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1000;
	.mask{
		position: absolute;
		width: 100%;
		left: 0;
		top: -0.84rem;
		z-index: 3001;
	}
}
.click-area{
	width: 3.18rem;
	height: 3.18rem;
	position: absolute;
	left: 0.44rem;
	top: 6.22rem;
	z-index: 3005;
}
.one-level{
	display: flex;
	align-items: center;
	justify-content: center;
}
.arror{
	width: 0.44rem;
	margin: 0 0.1rem;
}
.sign-item{
	width: 0.9rem;
	height: 1.04rem;
	
	background-image: url(../../static/image/233fccc.png);
	background-size: 100% 100%;
	position: relative;
	.icon{
		display: block;
		margin: 0 auto;
		width: 0.3rem;
		margin-top: 0.1rem;
	}
	p{
		color: #fff;
		text-align: center;
		font-size: 0.28rem;
	}
	&.active{
		background-image: url(../../static/image/sw3444.png);
		display: block;
		.signed{
			display: none;
		}
		.unsign{
			display: block;
		}
	}
	.unsign{
		display: none;
	}
	.signed{
		display: block;
		color: #fff;
		font-size: 0.28rem;
		line-height: 1.3;
		position: absolute;
		left: 50%;
		top: 50%;
		width: 100%;
		text-align: center;
		transform: translate(-50%, -50%);
	}
}
.two-level{
	display: flex;
	justify-content: flex-end;
	padding: 0.14rem 0.54rem;
	img{
		height: 0.44rem;
	}
}
.three-level{
	padding-top: 0.6rem;
	position: relative;
	display: flex;
	justify-content: center;
	&>img{
		position: absolute;
		top: 0.14rem;
		width: 0.94rem;
		left: 0.64rem;
	}
}
.sign-btn{
	width: 2.5rem;
	height: 0.7rem;
	border-radius: 0.2rem;
	text-align: center;
	line-height: 0.7rem;
	color: #FFFFFF;
	background: #f97295;
	margin: 0.44rem auto 0;
	&.signed{
		background: #ddd;
		color: #efefef;
	}
}
/*玩吧end*/





.header{
	height: 0.85rem;
	background: #00bc71;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0.15rem;
	.link{
		width: 0.85rem;
		height: 0.85rem;
		/*background-position: center;
		background-repeat: no-repeat;
		background-size: 55%;*/
		position: relative;
		padding: 0.15rem;
	}
	/*.user-link{
		background-image: url(../../static/image/vvv.png);
	}
	.news-link{
		background-image: url(../../static/image/sdde.png);
		background-size: 50%;
		.count{
			position: absolute;
			padding: 0 0.06rem;
			min-width: 0.36rem;
			height: 0.36rem;
			border-radius: 50%;
			background: #f43c5f;
			color: #fff;
			text-align: center;
			line-height: 0.36rem;
			font-size: 0.24rem;
			top: 0.1rem;
			right: 0.06rem;
		}
	}*/
	.logo-text{
		height: 0.7rem;
	}
}
.home-pagination-content{
	position: absolute;
	width: 100%;
	left: 0;
	top: 0.2rem;
	/*top: 0.85rem;*/  /*玩吧 */
	bottom: 0;
	overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.3rem;
}
.navbar{
	height: 0.8rem;
	display: flex;
	overflow-x: auto;
	border-bottom: 1px solid #eee;
	.nav-item{
		flex: 1;
		display: flex;
		justify-content: center;
		line-height: 0.8rem;
		min-width: 1.42rem;
		position: relative;
		.text{
			color: #666;
			font-size: 0.28rem;
			transition: all 0.1s;
		}
		&.active{
			.text{
				color: $bg-text-color;
				padding: 0 0.1rem;
				border-bottom: 2px solid $bg-text-color;
				
			}
		}
	}
}
.nav-content{
	
	display: flex;
	flex-direction: column;
	margin: 0 -0.12rem;
	min-height: 4.9rem;
}
.banner{
	height: 3.2rem;
	padding: 0 0.2rem;
	.swipe-content{	
		overflow: hidden;
		img{
			border-radius: 0.2rem;
		}
	}
}
.homebar{	
	padding: 0.3rem 0.2rem;
	.homebar-content{
		background: #fff;
		display: flex;
		height: 1.4rem;
		border-radius: 0.2rem;
	}
	.nav-item{
		flex: 1;
		display: flex;
		flex-direction: column;
    align-items: center;
    padding: 0.06rem 0;
    
		.icon{
			display: flex;
			align-items: center;
			justify-content: center;
			height: 0.8rem;
			img{
				height: 0.46rem;
			}
		}
		p{
			color: #000;
		}
	}
}
.homeNav{	
	display: flex;
	padding: 0 0 0.3rem;
	.nav-item{
		flex: 1;
		display: flex;
    align-items: center;
    justify-content: center;    
    color: #000;
    margin: 0 0.2rem;
    background: #fff;
    border-radius: 0.2rem;
    padding:0.24rem 0;
		img{
			height: 0.5rem;
			margin-right: 0.15rem;
		}
	}
}
.home-toys-content{
	padding: 0 0.2rem;
	.home-toys-list{
		background: #fff;
		border-radius: 0.2rem;
		overflow: hidden;
		padding: 0 0.25rem;
	}
}
.toys-content{
	flex: 1;
	overflow-y: auto;
	-webkit-overflow-scrolling : touch;
}
.toys-list{
	padding-top: 0.24rem;
	display: flex;
		flex-wrap: wrap;
	.toys-item{
		margin: 0 0.12rem 0.24rem;
		width: 3.18rem;
		height: 3.18rem;
		background: #fff;
		position: relative;
		border-radius: 0.3rem;
		overflow: hidden;
		
		.toys-img{
			border-radius: 0.3rem;
			position: absolute;
			top:50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
			height: 100%;
		}
		.toys-status{
			position: absolute;
			right: 0.2rem;
			top: 0.2rem;
			height: 0.34rem;
			line-height: 0.34rem;
			border-radius: 0.17rem;
			color:#fff;
			padding: 0 0.12rem;
			z-index: 3;
			font-size: 0.22rem;
			&.ing{
				background: #ff556e;
			}
			&.none{
				background: #3eb428;
			}
			&.end{
				background: #c7c8c8;
			}
		}
		.join-count{
			position: absolute;
			left: 0.2rem;
			top: 0.12rem;
			width: 1.1rem;
			height: 0.5rem;
			line-height: 0.5rem;
			background-image: url(../../static/image/66fg.png);
			background-size: 100% 100%;
			.shadow-text{
				position: absolute;
				right: 0.1rem;
				left: 0.5rem;
				text-align: center;
				top: 50%;
				font-size: 0.24rem;
				color: #8dff98;
				transform: translateY(-46%);
			}
		}
		.toys-info{
			position: absolute;
			left: 0.2rem;
			right: 0.2rem;
			bottom: 0.2rem;
			z-index: 3;
			color: #fff;
			font-weight: 700;
			font-size: 0.28rem;
			
		}
	}
}
</style>
