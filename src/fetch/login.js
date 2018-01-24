import api from '@/fetch/api'
import storage from '@/fetch/storage'
export default function wanbaLogin() {
		
	return new Promise((resolve, reject) => {
		window.getOpenKey(function(msg){
		    api.wanbaLogin({
				platform: parseInt(window.OPEN_DATA.platform) + 1,
				openid: msg.data.openid,
				openkey: msg.data.openkey
			}).then(res => {
				resolve(res) 
		    }, err => {
		    	reject(err)
		    })
		})
    })
	
}