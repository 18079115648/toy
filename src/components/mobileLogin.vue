<template>
    <div class="app" id="app" :style="{ height: wH + 'px' }">
    	<Header title="">
    		<img class="logo-text" src="../../static/image/aoin.png" />
    	</Header>
    	<div class="login-content">
    		<div class="input-item">
    			<img class="icon phone" src="../../static/image/5.png" />
    			<input v-model="phone" @input="inputNumber" class="phone" type="tel" maxlength="11" placeholder="手机号码" />
    		</div>
    		<div class="input-item">
    			<img class="icon" src="../../static/image/55.png" />
    			<input v-model="code" @input="inputCode" class="code" type="tel " maxlength="6" placeholder="验证码" />
    			<div @click="getCode" class="captcha-btn" :class="{'disabled': disableSend}">{{captchaLabel}}</div>
    		</div>
    		<p class="tip">
    			未注册澳IN娱乐的手机号，登录时将自动注册且代表您已经同意遵守<router-link to="/agree"> 用户协议及隐私条款 </router-link>
    		</p>
    	</div>
    	<div class="btn-default btn-hover btn-login" @click="login">登录</div>
    	
    	
    	<input type="file" @change="change" />
    	
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
	data() {
	    return {
	    	phone: '',
	    	code: '',
	    	wH: 0,
	    	captchaLabel:'获取验证码',
	    	timer: null,
	    	count: 60,
	    	disableSend: false
	    }
	},
	mounted() {	
		this.wH = document.getElementById('app').offsetHeight
	},
	methods: {
		change(e) {
			const self = this
			  var file = event.target.files[0];
			  var reader = new FileReader();
			  reader.onload = function(event) {
			    // 文件里的文本会在这里被打印出来
			    console.log(event.target.result)
			    self.renderFun(event.target.result);
			  };
			
			  reader.readAsDataURL(file);
		},
		renderFun(src) {
			const MAX_HEIGHT = 10
		    // 创建一个 Image 对象
		    var image = new Image();
		    // 绑定 load 事件处理器，加载完成后执行
		    image.onload = function() {
		        // 获取 canvas DOM 对象
		        var canvas = document.createElement("canvas");
		        // 如果高度超标
		        if (image.height > MAX_HEIGHT) {
		            // 宽度等比例缩放 *=
		            image.width *= MAX_HEIGHT / image.height;
		            image.height = MAX_HEIGHT;
		        }
		        // 获取 canvas的 2d 环境对象,
		        // 可以理解Context是管理员，canvas是房子
		        var ctx = canvas.getContext("2d");
		        // canvas清屏
		        ctx.clearRect(0, 0, canvas.width, canvas.height);
		        // 重置canvas宽高
		        canvas.width = image.width;
		        canvas.height = image.height;
		        // 将图像绘制到canvas上
		        ctx.drawImage(image, 0, 0, image.width, image.height);
		        // !!! 注意，image 没有加入到 dom之中
		//        document.getElementById('img').src = canvas.toDataURL("image/png");
				console.log(canvas.toDataURL("image/png"))
//		        var blob = dataURLtoBlob(canvas.toDataURL("image/png"));
//		        var fd = new FormData();
//		        fd.append("image", blob, "image.png");
//		        imgCompressUpload(canvas.toDataURL("image/png"));
		       
		    };
		    image.src = src;
		},
		inputNumber() {
			if (!/^\d*$/.test(this.phone)) {	
	            this.phone = this.phone.replace(/\D+/g,'')            
	        } 
		},
		inputCode() {
			if (!/^\d*$/.test(this.code)) {	
	            this.code = this.code.replace(/\D+/g,'')            
	        } 
		},
		getCode() {
			if(this.disableSend) {
				return
			}
			if(!this.checkPhone) {
				Toast({
				  message: '请输入正确的手机号',
				  position: 'bottom',
				  duration: 1000
				});
				return
			}
			this.$api.getCaptcha({
				mobile: this.phone
			}).then(res => {
				this.disableSend = true
				this.count = 60
				this.captchaLabel = '重新获取('+ this.count +')'
				this.timer = setInterval(() => {
					this.count--
					this.captchaLabel = '重新获取('+ this.count +')'
					if(this.count < 1) {
						this.disableSend = false
						this.captchaLabel = '获取验证码'
						clearInterval(this.timer)
					}
				}, 1000)
	        }, err => {
	        	
	        })
		},
		login() {
			const self = this
			if(!this.checkPhone) {
				Toast({
				  message: '请输入正确的手机号',
				  position: 'bottom',
				  duration: 1000
				});
				return
			}
			if(!this.checkCode) {
				Toast({
				  message: '验证码错误',
				  position: 'bottom',
				  duration: 1000
				});
				return
			}
			this.$api.mobileLogin({
				code: this.code,
				mobile: this.phone,
                platform: 4
			}).then(res => {
				let accessToken = res.data.accessToken
				self.$token.refreshToken(accessToken.accessToken, accessToken.refreshToken, accessToken.expireTime)
				this.$storage.set('hx', {id: res.data.hxId, password: res.data.hxPwd})
				this.$storage.set('user', res.data)
				this.$storage.set('headUrl', res.data.avatar || '../../static/image/avatar.png')
				this.loginSuccess()
	        }, err => {
	        	
	        })
		},
		loginSuccess() {
			let redirectURI = '/index'
//          if (this.$storage.get('history_url') && this.$storage.get('history_url') != '/login') {
//              redirectURI = this.$storage.get('history_url')
//          }
            this.$router.replace(redirectURI)
		}
	},
	computed: {
		checkPhone: function() {
			if(/^1[34578]\d{9}$/.test(this.phone)){   
		        return true; 
		    } 
		    return false
		},
		checkCode: function() {
			if(/^\d{4,6}$/.test(this.code)){   
		        return true; 
		    } 
		    return false
		}
	}

		
}
</script>

<style lang="scss" scoped>
.app{
	background: #fff !important;
	position: relative;
	height: 100vh;
} 
.logo-text{
	position: fixed;
	height: 0.46rem;
	top: 0.2rem;
	left: 50%;
	transform: translateX(-50%);
	z-index: 15;
}
.login-content{
	padding: 2rem 0.95rem 2rem;
	.input-item{
		border-bottom: 1px solid #d2d2d2;
		padding:  0.25rem 0;
		display: flex;
		position: relative;
		align-items: center;
		padding-left: 1rem;
		.icon{
			width: 0.3rem;
			position: absolute;
			left: 0.3rem;
			top: 50%;
			transform: translateY(-50%);
			&.phone{
				width: 0.26rem;
			}
		}
		input.phone{
			padding: 0.1rem 0;
			flex: 1;
		}
		input.code{
			width: 2.6rem;
		}
		.captcha-btn{
			width: 2rem;
			text-align: center;
			color: #fdaa10;
			/*font-weight: 700;*/
			&.disabled{
				color: #ccc;
			}
		}
	}
	.tip{
		text-align: center;
		padding-top: 0.5rem;
		color: #666;
		font-size: 0.24rem;
		a{
			color: #007aff;
		}
	}
}
.btn-login{
	width: 5.6rem;
}
</style>