<template>
	<transition name="move">
		<div class="video-content move-right">
			<Header title="视频播放"></Header>
			<div class="video-box">
				<video 
					id="video"
		    	x-webkit-airplay="allow" 
		    	:src="videoInfo.url" 
		    	class="play_video fullEle"  
		    	webkit-playsinline="true" 
		    	controls="controls"
		    	:poster="videoInfo.img"
			    playsinline="true">
	      </video>
			</div>
				
		</div>
	</transition>
    
</template>

<script>
export default {
	data () {
    return {
    	videoInfo: {}
    }
  },
  created(){
    this.videoInfo = this.$storage.get('currVideoUrl')
  },
   
}
</script>

<style scoped>
.video-content{
	height: 100vh;
	background: #222;
}
.video-box{
	padding: 0 1rem;
	position: absolute;
	width: 100%;
	top: 0.85rem;
	bottom: 0;
}
#video{
	display: block;
	width: 100%;
	height: 100%;
}
</style>