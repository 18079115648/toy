<template>
  <div class="content">
    <div class="header">
    	<router-link to="/user" class="user-link link">
    		<img :src="avatar" style="border-radius: 50%;"  class="fullEle" />
    	</router-link>
    	<img class="logo-text" src="../../static/image/logo-text.png" />
    	<span style="width: 0.85rem;"></span>
    </div>
    <div class="navbar">
    	<div @click="changeTag(item)" v-for="(item, index) in navbar" :class="currTags == item.id ? 'active' : ''"  class="nav-item">
    		<div class="text">{{item.name}}</div>
    	</div>
    </div>
    <div class="nav-content">
    	<div class="toys-content">
    		<Pagination :render="render" :needToken="false" :param="pagination" :autoload="false" ref="pagination" uri="/dm-api/home/tag" >
					<div class="home-data" v-show="firstTag == currTags">
		    		<div class="banner">
				    	<mt-swipe :auto="4000">
								<mt-swipe-item v-for="(item,index) in banner" :key="index">
									<div class="fullEle" @click="bannerLink(item)">
										<img :src="item.imgUrl" class="fullEle" />
									</div>
								</mt-swipe-item>
							</mt-swipe>
				    </div>
				    <div class="homebar">
				    	<router-link :to="item.link" class="nav-item" v-for="(item,index) in homebar" :key="index">
				    		<div class="icon">
				    			<img :src="item.icon"  />
				    		</div>
				    		<p>{{item.text}}</p>
				    	</router-link>
				    </div>
		    	</div>	
				<div class="toys-list" v-show="pagination.content.length>0">
			    	<div @click="enterRoom(item)" class="toys-item" v-for="(item, index) in pagination.content" :key="index">
			    		<img class="toys-img" :src="item.imgs[0]"  />
			    		<div class="toys-status" :class="[item.statusClass]">{{item.statusText}}</div>
			    		<div class="toys-info">
			    			<p class="join-count">
				    			<img class="icon" src="../../static/image/wd.png" />
				    			<span class="shadow-text">{{parseInt(item.price)}}</span>
				    		</p>
				    		<p class="toys-name shadow-text">{{item.name}}</p>
			    		</div>	
			    	</div>
			    </div>
				<div class="no_msg" v-show="pagination.content.length<1 && pagination.loadEnd">
					<img src="../../static/image/ewd.png"  />
					<div>没有商品信息~</div>
				</div>	
			</Pagination>
    	</div>
    </div>
  </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
export default {
  data () { 
    return {
    	homebar: [{
      	text: '签到',
      	icon: '../../static/image/saaa.png',
      	link: '/signIn'
      },{
      	text: '邀请好友',
      	icon: '../../static/image/2333d.png',
      	link: '/invite'
      },{
      	text: '娃娃盒',
      	icon: '../../static/image/222.png',
      	link: '/toysBox'
      },{
      	text: '积分商城',
      	icon: '../../static/image/111.png',
      	link: ''
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
	        	pageSize: 10
	        }
	    },
	    
	    avatar: '../../static/image/vvv.png',  //头像
	    
	    musicSwitch: true,  //背景音乐
    }
  },
  created() {
  	
  	this.$api.homeBanner().then(res => {
			this.banner = res.data
    }, err => {
    	  
	})
	// document.addEventListener("WeixinJSBridgeReady", function () {  
    //   document.getElementById('bg-audio').play()
    // }, false);  
  },
  activated() {
  	
  	this.avatar = this.$storage.get('headUrl') || '../../static/image/vvv.png'
  	//背景音乐
  	if (this.$storage.get('music_switch') != null) {
			this.musicSwitch = this.$storage.get('music_switch')
		}
  },
  mounted() {
	console.log(this.$refs)
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
  		this.pagination.data.type = id
  		this.$refs.pagination.refresh() 
  	},
  	changeTag(item) {
  		if(this.currTags == item.id) {
  			return
  		}
  		this.tagChange(item.id)
  	},
  	bannerLink(item) {
  		if(item.type == 1) {
  			
  		}else if(item.type == 2) {
			this.$router.push('/recharge')
  		}else {
  			window.location.href = item.url
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
    },

    // 进入房间
    enterRoom(room) {
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header{
	height: 0.85rem;
	background: #ffe86e;
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
		height: 0.66rem;
	}
}
.navbar{
	height: 0.66rem;
	display: flex;
	background: #ffe86e;
	.nav-item{
		flex: 1;
		display: flex;
		justify-content: center;
		line-height: 0.66rem;
		.text{
			color: #cb8c32;
			font-size: 0.28rem;
			transition: all 0.1s;
		}
		&.active{
			.text{
				color: #704a06;
				padding: 0 0.06rem;
				border-bottom: 2px solid #704a06;
			}
		}
	}
}
.nav-content{
	position: absolute;
	width: 100%;
	left: 0;
	top: 1.51rem;
	bottom: 0;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
}
.banner{
	height: 2.7rem;
	background: #ddd;
}
.homebar{
	height: 1.6rem;
	display: flex;
	background: #fff;
	padding-top: 0.12rem;
	.nav-item{
		flex: 1;
		display: flex;
		flex-direction: column;
    align-items: center;
		.icon{
			display: flex;
			align-items: center;
			justify-content: center;
			height: 0.75rem;
			margin-bottom: 0.15rem;
			img{
				width: 0.5rem;
			}
		}
		p{
			color: #666;
		}
	}
}
.toys-content{
	flex: 1;
	overflow-y: auto;
}
.toys-list{
	padding: 0.2rem 0.1rem 0;
	display: flex;
		flex-wrap: wrap;
	.toys-item{
		margin: 0 0.1rem 0.2rem;
		width: 3.45rem;
		height: 3.45rem;
		background: #fff;
		position: relative;
		border-radius: 0.3rem;
		overflow: hidden;
		
		.toys-img{
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
		.toys-info{
			position: absolute;
			left: 0.2rem;
			right: 0.2rem;
			bottom: 0.2rem;
			z-index: 3;
			color: #fff;
			font-weight: 700;
			font-size: 0.28rem;
			.join-count{
				display: flex;
				align-items: center;
				font-weight: normal;
				padding-bottom: 0.1rem;
				.icon{
					width: 0.26rem;
					margin-right: 0.16rem;
				}
			}
		}
	}
}
</style>
