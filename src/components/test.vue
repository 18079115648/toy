<template>
  <div class="content">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  data () { 
    return {
    	client: null
    }
  },
  created() {
  	axios.post('https://h5cs-1.agoraio.cn:7668/geth5gw/jsonp',{
			cname: 'wawajiDemo',
			key: '8b0faaf944034061a5ffd263d3f3f7a4'
		},{
			headers:{
				"Content-type": "application/json; charset=utf-8"
			},
		}).then((res) => {
	    axios.post("https://" + res.data.gateway_addr[0] + "/v1/machine",{
				appid:'8b0faaf944034061a5ffd263d3f3f7a4',
				channel:'wawajiDemo',
				key:'',
				uid1:1,
				uid2:2
			}).then((msg) => {
				console.log(msg.data.cameras.main)
				console.log(document.getElementById('canvas'))
				console.log(JSMpeg)
	    	new JSMpeg.Player(msg.data.cameras.main, {
            canvas: document.getElementById('canvas'),
            audio: false,
            autoplay: false,
            decodeFirstFrame: true,
            agora_id: 1,
            onStartDecoding: function () {
                console.log(document.getElementById('canvas'))
            }
        })
	    })
    })
  	
  	
  	
  	
  	
//	console.log(AgoraRTC)
//	this.client = AgoraRTC.createClient({mode:'interop'});
//	this.client.init('dad6aa43944a44e3aaa8ab8cdddccc06', function(){
//	    console.log("AgoraRTC client initialized");
//	  });
//	  
//	  const parent = this
//	  this.client.join('3f818eecc17974d2787d7f3bff2ad0b6e11e3f2edad6aa43944a44e3aaa8ab8cdddccc0615130820430000066e', "1001", null, function(uid){
//		    console.log("User " + uid + " join channel successfully");
//		    
//		    
//			  
//		})
//	  
//	  this.client.on('stream-added', function (evt) {
//				 var stream = evt.stream;
//				 parent.client.setRemoteVideoStreamType(stream, 1);
//				 parent.client.subscribe(stream, function (err) {
//				   console.error("Subscribe stream failed", err);
//				 });
//				});
//	  this.client.on('stream-subscribed', function (evt) {
//	    var stream = evt.stream;
//	    console.log("Subscribe remote stream successfully: " + stream.getId());
////	    if ($('div#video #agora_remote'+stream.getId()).length === 0) {
////	      $('div#video').append('<div id="agora_remote'+stream.getId()+'" style="float:left; width:810px;height:607px;display:inline-block;"></div>');
////	    }
//	    stream.play('frontview');
//	  });
			
	  
  },
  mounted() {
	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	#canvas{
		width: 100%;
		height: 500px;
	}
</style>
