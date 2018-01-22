<template>
    <div class="content">
        <Header :title="memberInfo.nickName + '的主页'"></Header>
        <div class="rank-user-info">
		    	<div class="user-info-link">
			    	<img class="avatar" :src="memberInfo.avatar || '../../static/image/vvv.png'"  />
			    	<div class="user-info-text">
			    		<p class="nick-name">{{memberInfo.nickName || '***'}}</p>
			    		<p class="user-record">
			    			<span>抓中 {{memberInfo.successTimes}} 次</span>
			    			<!--<i></i>
			    			<span>总排位 {{memberInfo.rank}}</span>-->
			    		</p>
			    	</div>
			    </div>
		    </div>
	      <div class="rank-page">  	
	      	<Pagination :render="render" :param="pagination" :autoload="false"  ref="pagination" uri="/dm-api/doll//log/success" >
				<div class="rank-record" v-show="pagination.content.length > 0">
		      		<div class="rank-item" v-for="(item, index) in pagination.content" :key="index">
		      			<div class="rank-info-media" v-if="!item.url">
		      				<img class="fullEle toy-img" :src="item.img"  />
		      			</div>
		      			<div class="rank-info-media" v-if="item.url">
		      				<video 
		      					:id="'video-'+index"
                            	x-webkit-airplay="allow" 
                            	:src="item.url" 
                            	class="play_video fullEle"  
                            	webkit-playsinline="true"   
						      	playsinline="true"
                            	:poster="item.img">
                            </video>
                            <img src="../../static/image/weed.png" v-tap="{ methods : playVideo, id: 'video-'+index }"   class="play_img">
		      			</div>
		      			<div class="rank-info-text">
		      				<p class="rank-goods-name">{{item.name}}</p>
		      				<p class="rank-time">{{item.createTimeStr}}</p>
		      				<p class="rank-enter" v-tap="{ methods : enterRoom, machineId: item.machineId }" >进入游戏</p>
		      			</div>
		      		</div>
		      	</div>
		        <div class="no_msg" v-show="pagination.content.length < 1 && pagination.loadEnd">
		            <!--<img style="width: 1.5rem;" src="../../static/image/none-charge.png">-->
		            <div>暂时没有抓中过哦！~</div>
		        </div>
			</Pagination>
	      </div> 
		        

		        
    </div>
</template>

<script>
export default {
  data () {
    return {
        pagination: {
	        content: [],
	        loadEnd: false,
	        data: {
	        	page: 1,
	        	pageSize: 10,
	        	memberId: this.$route.params.id
	        }
	    },
	    memberInfo: {}
    }
  },
  mounted(){
    this.$refs.pagination.refresh()
  },
  methods: {
  	render(res) {
  		this.memberInfo = res.data.info
		res.data.list.forEach((item) => {
	    	this.pagination.content.push(item)
    	})
    },
    playVideo(params) {
    	const video = document.getElementById(params.id)
    	video.paused ? video.play() : video.pause()
    },
    enterRoom(params) {
    	this.$api.enterRoom({machineId: params.machineId}).then((res) => {
    		let room = res.data
			this.$router.push({path: '/room', query: {machineSn: room.machineSn, num: room.num, price: room.price, machineId: room.machineId, liveRoomCode: room.liveRoomCode}})
		}, (err) => {
			
		})
    }
  }
  
}
</script>

<style lang="scss" scoped>
@import "../../static/css/style.scss";
.content{
	min-height: 100vh;
	background: #F5F5F9;
}
.rank-user-info{
	height: 2.4rem;
	background: $header-color;
	padding: 0.2rem 0;
	padding-bottom: 0.9rem;
		.user-info-link{
		height: 100%;
		display: flex;
		align-items: center;
		padding: 0 0.5rem;
		color: #fff;
		font-size: 0.3rem;
		.avatar{
			width: 1.2rem;
			height: 1.2rem;
			border-radius: 50%;
			background: #fff;
			
		}
		.user-info-text{
			flex: 1;
			padding-left: 0.3rem;
			& > p{
				padding: 0.06rem 0;
			}
			.user-record{
				font-size: 0.24rem;
				display: flex;
				align-items: center;
				i{
					border-left: 1px solid #fff;
					height: 0.26rem;
					margin: 0 0.28rem;
				}
			}
		}
		.nick-name{
			
			overflow: hidden;
			
		}
	}
}
.rank-page{
	position: absolute;
	left: 0.2rem;
	right: 0.2rem;
	top: 2.55rem;
	bottom: 0.3rem;
	background: #fff;
	border-radius: 0.2rem;
	overflow-y: auto;
	-webkit-overflow-scrolling : touch;
	padding: 0.4rem 0.2rem 0;
	.rank-record{
		display: flex;
		flex-wrap: wrap;
		.rank-item{
			width: 2.95rem;
			margin: 0 0.2rem 0.5rem;
			.rank-info-media{
				width: 100%;
				height: 2.95rem;
				border-radius: 0.3rem;
				overflow: hidden;
				position: relative;
				img.toy-img{
					border-radius: 0.3rem;
				}
				.play_img{
					position: absolute;
					width: 1.2rem;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
			}
			.rank-info-text{
				padding-top: 0.2rem;
				text-align: center;
				color: #000;
				.rank-time{
					color: #969696;
					padding-top: 0.06rem;
				}
				.rank-enter{
					padding-top: 0.06rem;
					display: block;
					text-decoration: underline;
					color: #00BC71;
				}
			}
		}
	}
}
</style>
