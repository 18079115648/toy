webpackJsonp([27],{"/nqF":function(e,n,t){function i(e){t("rCA/")}var a=t("VU/8")(t("DuGP"),t("y5qa"),i,"data-v-641ce32d",null);e.exports=a.exports},DuGP:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("Au9i");t.n(i);n.default={data:function(){return{province:"disabled",city:"disabled",district:"disabled",provinceList:[],cityList:[],areaList:[],name:"",phone:"",detail:"",is_default:!1,disabledBtn:!1}},created:function(){var e=this;this.$api.provinces().then(function(n){e.provinceList=n.data},function(e){})},methods:{inputNumber:function(){/^\d*$/.test(this.phone)||(this.phone=this.phone.replace(/\D+/g,""))},changeProvince:function(){var e=this;this.$api.citys(this.province.id).then(function(n){e.cityList=n.data,e.city=n.data[0],e.changeCity()},function(e){})},changeCity:function(){var e=this;this.$api.areas(this.city.id).then(function(n){e.areaList=n.data,e.district=n.data[0]},function(e){})},addAddress:function(){var e=this;if(!this.name)return void Object(i.Toast)({message:"请填写收货人",position:"bottom",duration:1e3});if(!/^1[23456789]\d{9}$/.test(this.phone))return void Object(i.Toast)({message:"请填写正确的手机号",position:"bottom",duration:1e3});if("disabled"==this.province)return void Object(i.Toast)({message:"请选择地区",position:"bottom",duration:1e3});if(!this.detail)return void Object(i.Toast)({message:"请填写详细地址",position:"bottom",duration:1e3});if(!this.disabledBtn){this.disabledBtn=!0;var n=this.province.name+this.city.name+this.district.name+this.detail;this.$api.editAddress({address:n,consignee:this.name,isDefault:0,mobile:this.phone}).then(function(n){e.disabledBtn=!1,Object(i.Toast)({message:"添加成功",position:"middle",iconClass:"toast-icon icon-success",duration:1e3}),e.$router.go(-1)},function(n){e.disabledBtn=!1})}}}}},nzLV:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"\n.content[data-v-641ce32d] {\n  padding-bottom: 0.8rem;\n}\n.addAddress_body[data-v-641ce32d] {\n  width: 100%;\n  background-color: #fff;\n  padding-left: .3rem;\n}\n.addAddress_msg[data-v-641ce32d] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: .3rem .3rem .3rem 0;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: solid 1px #f2f2f2;\n}\n.addAddress_msg input[data-v-641ce32d] {\n    text-align: right;\n    padding: 0.06rem 0;\n    width: 4rem;\n}\n.addAddress_button_body[data-v-641ce32d] {\n  height: .8rem;\n  width: 100%;\n  position: absolute;\n  bottom: .4rem;\n  padding: 0 .2rem;\n}\n.addAddress_button_body .addAddress_button[data-v-641ce32d] {\n    height: .8rem;\n    width: 100%;\n    background-color: #F7D168;\n    border-radius: .4rem;\n    text-align: center;\n    line-height: .8rem;\n    font-size: .38rem;\n    font-weight: 400;\n}\n.area-select select[data-v-641ce32d] {\n  min-width: 0.8rem;\n  margin-left: 0.2rem;\n}\n.default-content[data-v-641ce32d] {\n  background: #fff;\n  margin-top: 0.3rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0.2rem 0.3rem;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.default-content .left P[data-v-641ce32d] {\n    padding: 0.12rem 0;\n}\n.default-content .left .tip[data-v-641ce32d] {\n    color: #999;\n    font-size: 0.24rem;\n}\n.trueAddress[data-v-641ce32d] {\n  width: 100%;\n  height: 1.5rem;\n  border: none;\n  font-size: .26rem;\n  padding: .3rem .3rem .2rem 0;\n}\n.confirm[data-v-641ce32d] {\n  position: absolute;\n  width: 1.2rem;\n  height: 0.85rem;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 10;\n  text-align: center;\n  line-height: 0.85rem;\n  color: #704a06;\n  font-size: 0.28rem;\n  /*font-weight: 700;*/\n}\n","",{version:3,sources:["D:/catchToys/H5/src/components/addAddress.vue"],names:[],mappings:";AACA;EACE,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,uBAAuB;EACvB,oBAAoB;CACrB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,iCAAiC;CAClC;AACD;IACI,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;CACf;AACD;EACE,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,iBAAiB;CAClB;AACD;IACI,cAAc;IACd,YAAY;IACZ,0BAA0B;IAC1B,qBAAqB;IACrB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;CACpB;AACD;EACE,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,uBAAuB;EACvB,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;CAC7B;AACD;IACI,mBAAmB;CACtB;AACD;IACI,YAAY;IACZ,mBAAmB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,6BAA6B;CAC9B;AACD;EACE,mBAAmB;EACnB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,SAAS;EACT,OAAO;EACP,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;EACrB,eAAe;EACf,mBAAmB;EACnB,qBAAqB;CACtB",file:"addAddress.vue",sourcesContent:["\n.content[data-v-641ce32d] {\n  padding-bottom: 0.8rem;\n}\n.addAddress_body[data-v-641ce32d] {\n  width: 100%;\n  background-color: #fff;\n  padding-left: .3rem;\n}\n.addAddress_msg[data-v-641ce32d] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: .3rem .3rem .3rem 0;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: solid 1px #f2f2f2;\n}\n.addAddress_msg input[data-v-641ce32d] {\n    text-align: right;\n    padding: 0.06rem 0;\n    width: 4rem;\n}\n.addAddress_button_body[data-v-641ce32d] {\n  height: .8rem;\n  width: 100%;\n  position: absolute;\n  bottom: .4rem;\n  padding: 0 .2rem;\n}\n.addAddress_button_body .addAddress_button[data-v-641ce32d] {\n    height: .8rem;\n    width: 100%;\n    background-color: #F7D168;\n    border-radius: .4rem;\n    text-align: center;\n    line-height: .8rem;\n    font-size: .38rem;\n    font-weight: 400;\n}\n.area-select select[data-v-641ce32d] {\n  min-width: 0.8rem;\n  margin-left: 0.2rem;\n}\n.default-content[data-v-641ce32d] {\n  background: #fff;\n  margin-top: 0.3rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0.2rem 0.3rem;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.default-content .left P[data-v-641ce32d] {\n    padding: 0.12rem 0;\n}\n.default-content .left .tip[data-v-641ce32d] {\n    color: #999;\n    font-size: 0.24rem;\n}\n.trueAddress[data-v-641ce32d] {\n  width: 100%;\n  height: 1.5rem;\n  border: none;\n  font-size: .26rem;\n  padding: .3rem .3rem .2rem 0;\n}\n.confirm[data-v-641ce32d] {\n  position: absolute;\n  width: 1.2rem;\n  height: 0.85rem;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 10;\n  text-align: center;\n  line-height: 0.85rem;\n  color: #704a06;\n  font-size: 0.28rem;\n  /*font-weight: 700;*/\n}\n"],sourceRoot:""}])},"rCA/":function(e,n,t){var i=t("nzLV");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("3f481c50",i,!0)},y5qa:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("Header",{attrs:{title:"新增地址"}}),e._v(" "),t("div",{staticClass:"addAddress_body"},[t("div",{staticClass:"addAddress_msg"},[t("label",{attrs:{for:"people"}},[e._v("联系人")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"people",placeholder:"请输入姓名"},domProps:{value:e.name},on:{input:function(n){n.target.composing||(e.name=n.target.value)}}})]),e._v(" "),t("div",{staticClass:"addAddress_msg"},[t("label",{attrs:{for:"phone"}},[e._v("联系电话")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"tel",maxlength:"11",name:"phone",placeholder:"请输入手机号"},domProps:{value:e.phone},on:{input:[function(n){n.target.composing||(e.phone=n.target.value)},e.inputNumber]}})]),e._v(" "),t("div",{staticClass:"addAddress_msg"},[t("span",[e._v("地区")]),e._v(" "),t("div",{staticClass:"area-select",attrs:{dir:"rtl"}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.district,expression:"district"}],on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.district=n.target.multiple?t:t[0]}}},[t("option",{attrs:{disabled:"",value:"disabled"}},[e._v("县区")]),e._v(" "),e._l(e.areaList,function(n){return t("option",{domProps:{value:n}},[e._v(e._s(n.name))])})],2),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],on:{change:[function(n){var t=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.city=n.target.multiple?t:t[0]},e.changeCity]}},[t("option",{attrs:{disabled:"",value:"disabled"}},[e._v("城市")]),e._v(" "),e._l(e.cityList,function(n){return t("option",{domProps:{value:n}},[e._v(e._s(n.name))])})],2),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.province,expression:"province"}],on:{change:[function(n){var t=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.province=n.target.multiple?t:t[0]},e.changeProvince]}},[t("option",{attrs:{disabled:"",value:"disabled"}},[e._v("省份")]),e._v(" "),e._l(e.provinceList,function(n){return t("option",{domProps:{value:n}},[e._v(e._s(n.name))])})],2)])]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.detail,expression:"detail"}],staticClass:"trueAddress",attrs:{placeholder:"请填写详细地址~"},domProps:{value:e.detail},on:{input:function(n){n.target.composing||(e.detail=n.target.value)}}})]),e._v(" "),t("div",{staticClass:"confirm",on:{click:e.addAddress}},[e._v("保存")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=27.293485bf67ca5d6699f6.js.map