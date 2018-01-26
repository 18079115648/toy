<template>
    <div class="content">
        <Header title="新增地址"></Header>

        <div class="addAddress_body">
            <div class="addAddress_msg">
                <label for="people">联系人</label>
                <input type="text" maxlength="20" v-model="name" name="people" placeholder="请输入姓名">
            </div>
            <div class="addAddress_msg">
                <label for="phone">联系电话</label>
                <input type="tel" maxlength="11" @input="inputNumber" v-model="phone" name="phone" placeholder="请输入手机号">
            </div>
            <div class="addAddress_msg">
				<span>地区</span>
				<div class="area-select" dir="rtl">
					<select v-model="district">
                        <option disabled value="disabled">县区</option>
                        <option v-for="item in areaList" :value="item">{{item.name}}</option>
                    </select>
					
                    <select v-model="city" @change="changeCity">
                        <option disabled value="disabled">城市</option>
                        <option v-for="item in cityList" :value="item">{{item.name}}</option>
                    </select>
                    <select v-model="province" @change="changeProvince">
						<option disabled value="disabled">省份</option>
                        <option v-for="item in provinceList" :value="item">{{item.name}}</option>
                    </select>
				</div>
			</div>
            <textarea v-model="detail" placeholder="请填写详细地址~" class="trueAddress"></textarea>
            
        </div>
		<!--<div class="default-content">
    		<div class="left">
    			<p>设为默认地址</p>
    		</div>
    		<div class="right">
    			<mt-switch v-model="is_default"></mt-switch>
    		</div>
    		
    	</div>-->

        <div class="confirm" @click="addAddress">保存</div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
        province: 'disabled',
		city: 'disabled',
		district: 'disabled',
		provinceList: [],
		cityList: [],
		areaList: [],
		
		name: '',
		phone: '',
		detail: '',
		is_default: false,
		disabledBtn: false
    }
  },
  created() {
  	this.$api.provinces().then(res => { 
		this.provinceList = res.data
    }, err => {
    	
    })
  },
  methods: {
  	inputNumber() {
		if (!/^\d*$/.test(this.phone)) {	
            this.phone = this.phone.replace(/\D+/g,'')            
        } 
	},
    changeProvince() {
		this.$api.citys(this.province.id).then(res => { 
			this.cityList = res.data
			this.city = res.data[0]
			this.changeCity()
        }, err => {
        	
        })
	},
	changeCity() {
		this.$api.areas(this.city.id).then(res => { 
			this.areaList = res.data
			this.district = res.data[0]
        }, err => {
        	
        })
	},
	addAddress() {
		if(!this.name) {
			Toast({
			  message: '请填写收货人',
			  position: 'bottom',
			  duration: 1000
			});
			return
		}
		if(!/^1[23456789]\d{9}$/.test(this.phone)) {
			Toast({
			  message: '请填写正确的手机号',
			  position: 'bottom',
			  duration: 1000
			});
			return
		}
		if(this.province == 'disabled') {
			Toast({
			  message: '请选择地区',
			  position: 'bottom',
			  duration: 1000
			});
			return
		}
		if(!this.detail) {
			Toast({
			  message: '请填写详细地址',
			  position: 'bottom',
			  duration: 1000
			});
			return
		}
		if(this.disabledBtn) {
			return
		}
		this.disabledBtn = true
		let address = this.province.name + this.city.name + this.district.name + this.detail
		this.$api.editAddress({
			address: address,
			consignee: this.name,
			isDefault: 0,
			mobile: this.phone
		}).then(res => {
			this.disabledBtn = false
			Toast({
			  message: '添加成功',
			  position: 'middle',
			  iconClass: 'toast-icon icon-success',
			  duration: 1000
			})
			this.$router.go(-1)
	    }, err => {
	    	this.disabledBtn = false
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
.addAddress_body{
    width: 100%;
    background-color: #fff;
    padding-left: .3rem;
}
.addAddress_msg{
    display: flex;
    padding: .3rem .3rem .3rem 0;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #f2f2f2;
    input{
        text-align: right;
        padding: 0.06rem 0;
        width: 4rem;
    }
}
.addAddress_button_body{
    height: .8rem;
    width: 100%;
    position: absolute;
    bottom: .4rem;
    padding: 0 .2rem;
    .addAddress_button{
        height: .8rem;
        width: 100%;
        background-color: #F7D168;
        border-radius: .4rem;
        text-align: center;
        line-height: .8rem;
        font-size: .38rem;
        font-weight: 400;
    }
}
.area-select{
  select{
  	min-width: 0.8rem;
  	margin-left: 0.2rem;
  }
}
.default-content{
	background: #fff;
	margin-top: 0.3rem;
	display: flex;
	padding: 0.2rem 0.3rem;
	justify-content: space-between;
	align-items: center;
	.left{
		P{
			padding: 0.12rem 0;
		}
		.tip{
			color: #999;
			font-size: 0.24rem;
		}
	}
}
.trueAddress{
    width: 100%;
    height: 1.5rem;
    border: none;
    font-size: .26rem;
    padding: .3rem .3rem .2rem 0;
}
.confirm{
	position: absolute;
	width: 1.2rem;
	height: 0.85rem;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 10;
	text-align: center;
	line-height: 0.85rem;
	color: $header-text-color;
    font-size: 0.28rem;
    /*font-weight: 700;*/
}
</style>
