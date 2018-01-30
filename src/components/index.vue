<template>
  <div class="content">
    <div class="header">
    	<img class="logo-text"  :src="`${imageUrl}/logo-text.png`" />
    </div>
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
					    		<div class="icon img-mask">
					    			<img :src="item.icon"  />
					    		</div>
					    		<p class="tit">{{item.title}}</p>
					    		<p class="text">{{item.text}}</p>
					    	</router-link>
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
								<img :src="`${imageUrl}/ewd.png`"  />
								<div>没有商品信息~</div>
						  </div>	
				    </div>
					</div>
						
				</div>
							
		  </Pagination>
    </div>
	  <Menu actived="first"></Menu>  
	    
  </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
export default {
  data () { 
    return {
    	imageUrl: this.$store.state.imageUrl,
    	homebar: [{
      	title: '福利社',
      	text: '做任务得钻石',
      	icon: `${this.$store.state.imageUrl}/9@2x.png`,
      	link: '/welfareCenter'
      },{
      	title: '排位榜单',
      	text: '膜拜大神土豪',
      	icon: `${this.$store.state.imageUrl}/8@2x.png`,
      	link: '/rankList'
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../static/css/style.scss";
.header{
	height: 0.85rem;
	background: $header-color;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 0.15rem;
	.link{
		width: 0.85rem;
		height: 0.85rem;
		/*background-position: center;
		background-repeat: no-repeat;
		background-size: 55%;*/
		position: relative;
		padding: 0.15rem;
		.iconfont{
			line-height: 1;
			font-size: 0.6rem;
			color: $user-icon-color;
		}
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
	top: 0.85rem;
	bottom: 1rem;
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
				color: $index-nav-color;
				padding: 0 0.1rem;
				border-bottom: 2px solid $index-nav-color;
				
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
	padding: 0.3rem 0.1rem;
	.homebar-content{
		display: flex;
		height: 1.4rem;
		
	}
	.nav-item{
		flex: 1;
    margin: 0 0.1rem;
    background: #ffffff;
    border-radius: 0.2rem;
    padding-left: 0.3rem;
    position: relative;
    padding-top: 0.16rem;
		.icon{
			position: absolute;
			right: 0;
			top: 0;
			img{
				width: 1.4rem;
			}
		}
		.tit{
			color: #000;
			font-weight: 700;
			font-size: 0.28rem;
			padding: 0.08rem 0;
		}
		.text{
			color: #aaa;
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
			background-image: url(#{$imageUrl}/66fg.png);
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
