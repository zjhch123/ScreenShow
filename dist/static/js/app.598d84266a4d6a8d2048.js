webpackJsonp([0],{"+p09":function(t,a,s){"use strict";var n=s("YaEn");a.a={name:"launch",data:function(){return{isLoaded:!1}},methods:{launch:function(){console.log("123"),this.isLoaded=!0,setTimeout(function(){n.a.push("/index")}.bind(this),900)}},created:function(){}}},"2dV1":function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"c-index",class:{leave:t.isLeave}},[s("div",{staticClass:"u-mask"}),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"g-in",class:{init:t.init}},[s("div",{staticClass:"m-function m-photo"},[s("a",{staticClass:"u-link",attrs:{"data-to":"/photo"},on:{"!click":function(a){t.fJumpTo(a)}}},[t._m(1)])]),t._v(" "),s("div",{staticClass:"m-function m-face"},[s("a",{staticClass:"u-link",attrs:{"data-to":"/face"},on:{"!click":function(a){t.fJumpTo(a)}}},[t._m(2)])]),t._v(" "),s("div",{staticClass:"m-function m-cloud"},[s("a",{staticClass:"u-link",attrs:{"data-to":"/cloud"},on:{"!click":function(a){t.fJumpTo(a)}}},[t._m(3)])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"g-title"},[s("p",{staticClass:"u-title"},[t._v("人工智能·终端机")]),t._v(" "),s("p",{staticClass:"u-subtitle"},[t._v("Artificial intelligence")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"u-content"},[s("label",{staticClass:"icon"}),t._v(" "),s("p",{staticClass:"u-text f-shadow"},[t._v("现场拍照")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"u-content"},[s("label",{staticClass:"icon"}),t._v(" "),s("p",{staticClass:"u-text f-shadow"},[t._v("人脸识别")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"u-content"},[s("label",{staticClass:"icon"}),t._v(" "),s("p",{staticClass:"u-text f-shadow"},[t._v("云摄影")])])}],i={render:n,staticRenderFns:e};a.a=i},"42Hy":function(t,a,s){"use strict";function n(t){s("SBJz")}var e=s("DK6z"),i=s("2dV1"),c=s("VU/8"),A=n,u=c(e.a,i.a,A,"data-v-4f495fcc",null);a.a=u.exports},"90Sy":function(t,a,s){"use strict";a.a={name:"Cloud",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},"9G0t":function(t,a,s){"use strict";function n(t){s("LUsE")}var e=s("90Sy"),i=s("ycud"),c=s("VU/8"),A=n,u=c(e.a,i.a,A,"data-v-6604abaf",null);a.a=u.exports},"B/z9":function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("img",{staticClass:"u-app-bg",attrs:{src:s("C34Q")}}),t._v(" "),n("div",{staticClass:"c-app-container"},[n("router-view")],1)])},e=[],i={render:n,staticRenderFns:e};a.a=i},C34Q:function(t,a,s){t.exports=s.p+"static/img/bg.10765b0.png"},DK6z:function(t,a,s){"use strict";var n=s("YaEn");a.a={name:"Index",data:function(){return{isLeave:!1,init:!0}},methods:{fJumpTo:function(t){this.isLeave=!0,setTimeout(function(){n.a.push(t.target.getAttribute("data-to"))},1e3)}},created:function(){var t=this;setTimeout(function(){t.init=!1},801)}}},GTho:function(t,a,s){"use strict";function n(t){s("aKag")}var e=s("HAFI"),i=s("Vk4n"),c=s("VU/8"),A=n,u=c(e.a,i.a,A,"data-v-f680be5a",null);a.a=u.exports},HAFI:function(t,a,s){"use strict";s("YaEn");a.a={name:"Face",data:function(){return{}},created:function(){}}},Jyr5:function(t,a,s){"use strict";function n(t){s("j2Sk")}var e=s("VrWp"),i=s("KSHo"),c=s("VU/8"),A=n,u=c(e.a,i.a,A,"data-v-8520c660",null);a.a=u.exports},KSHo:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"c-save",class:{saved:t.saved}},[s("div",{staticClass:"g-in"},[t._m(0),t._v(" "),s("div",{staticClass:"m-btn-group"},[s("a",{staticClass:"u-back u-btn f-shadow",on:{click:t.fBack}},[t._v("重拍")]),t._v(" "),s("a",{staticClass:"u-save u-btn f-shadow",on:{click:t.savePhoto}},[t._v("保存")])])])])},e=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"m-photo"},[n("div",{staticClass:"u-border"}),t._v(" "),n("div",{staticClass:"m-container"},[n("div",{staticClass:"u-inner"},[n("img",{attrs:{src:s("shP1")}})])])])}],i={render:n,staticRenderFns:e};a.a=i},LUsE:function(t,a){},LX1l:function(t,a){},M93x:function(t,a,s){"use strict";function n(t){s("lqaN")}var e=s("xJD8"),i=s("B/z9"),c=s("VU/8"),A=n,u=c(e.a,i.a,A,null,null);a.a=u.exports},Mjp4:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"c-photo",class:{back:t.back}},[s("div",{staticClass:"u-flash",class:{take:t.take}}),t._v(" "),s("div",{staticClass:"g-in"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"m-btn-group"},[s("a",{staticClass:"u-back u-btn f-shadow",on:{click:t.fBack}},[t._v("返回")]),t._v(" "),s("a",{staticClass:"u-save u-btn f-shadow",on:{click:t.fSave}},[t._v("拍照")])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"u-title"},[s("label",{staticClass:"icon"}),s("span",{staticClass:"title f-shadow"},[t._v("现场拍照")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"m-photo"},[n("label",{staticClass:"u-border"}),t._v(" "),n("div",{staticClass:"u-inner"},[n("img",{attrs:{src:s("shP1")}})])])}],i={render:n,staticRenderFns:e};a.a=i},NAPy:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s("7+uW"),e=s("M93x"),i=s("YaEn");n.a.config.productionTip=!1,new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:e.a}})},QrRH:function(t,a){},SBJz:function(t,a){},STwf:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"c-hello",class:{launched:t.isLoaded},on:{click:t.launch}},[s("div",{staticClass:"u-mask"}),t._v(" "),t._m(0),t._v(" "),t._m(1)])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"g-title f-shadow"},[s("p",{staticClass:"u-title"},[t._v("人工智能·终端机")]),t._v(" "),s("p",{staticClass:"u-subtitle"},[t._v("Artificial intelligence")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"g-footer"},[s("p",{staticClass:"u-footer"},[t._v("杭州木笔科技有限公司")])])}],i={render:n,staticRenderFns:e};a.a=i},Sbvw:function(t,a,s){"use strict";function n(t){s("NAPy")}var e=s("f5cp"),i=s("eVM+"),c=s("VU/8"),A=n,u=c(e.a,i.a,A,"data-v-ec4299c8",null);a.a=u.exports},Vk4n:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement;return(t._self._c||a)("div",{staticClass:"c-face"},[t._v("\n  face\n")])},e=[],i={render:n,staticRenderFns:e};a.a=i},VrWp:function(t,a,s){"use strict";var n=s("YaEn");a.a={name:"TakePhoto",data:function(){return{msg:"Welcome to Your Vue.js App",saved:!1}},methods:{savePhoto:function(){var t=this;setTimeout(function(){t.saved=!0,setTimeout(function(){n.a.push("/photo/share")},200)},1e3)},fBack:function(){n.a.push("/photo")}},created:function(){}}},X0Fl:function(t,a){},YaEn:function(t,a,s){"use strict";var n=s("7+uW"),e=s("/ocq"),i=s("iw3l"),c=s("42Hy"),A=s("ewKd"),u=s("mAKM"),o=s("Jyr5"),r=s("Sbvw"),l=s("GTho"),f=s("9G0t");n.a.use(e.a),a.a=new e.a({routes:[{path:"/launch",component:i.a},{path:"/",component:c.a},{path:"/index",component:c.a},{path:"/photo",component:A.a,children:[{path:"",component:u.a},{path:"save",component:o.a},{path:"share",component:r.a}]},{path:"/fade",component:l.a},{path:"/cloud",component:f.a}]})},ZXKY:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"c-photo-index"},[s("div",{staticClass:"u-mask"}),t._v(" "),s("div",{staticClass:"c-photo-container"},[s("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[s("router-view")],1)],1)])},e=[],i={render:n,staticRenderFns:e};a.a=i},a2nB:function(t,a){t.exports="data:image/png;base64,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"},aKag:function(t,a){},"eVM+":function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"c-share",class:{init:t.init,leave:t.leave}},[s("div",{staticClass:"g-in"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"m-btn-group"},[s("a",{staticClass:"u-back u-btn f-shadow",on:{click:t.fBack}},[t._v("返回")])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"m-title"},[s("p",{staticClass:"u-title f-shadow"},[t._v("保存成功!")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"m-photo"},[n("div",{staticClass:"u-border"}),t._v(" "),n("div",{staticClass:"m-container"},[n("div",{staticClass:"u-inner"},[n("img",{attrs:{src:s("shP1")}})])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"m-func"},[n("div",{staticClass:"u-qr"},[n("img",{attrs:{src:s("a2nB")}})]),t._v(" "),n("div",{staticClass:"m-content"},[n("p",[n("label",{staticClass:"icon icon-timeline"}),n("span",{staticClass:"u-title"},[t._v("扫一扫")])]),t._v(" "),n("p",[t._v("立即分享到微信朋友圈")])])])}],i={render:n,staticRenderFns:e};a.a=i},ewKd:function(t,a,s){"use strict";function n(t){s("X0Fl")}var e=s("m1KT"),i=s("ZXKY"),c=s("VU/8"),A=n,u=c(e.a,i.a,A,null,null);a.a=u.exports},f5cp:function(t,a,s){"use strict";var n=s("YaEn");a.a={name:"TakePhoto",data:function(){return{init:!0,leave:!1}},methods:{fBack:function(){this.leave=!0,setTimeout(function(){n.a.push("/index")},2001)}},created:function(){var t=this;setTimeout(function(){t.init=!1},2001)}}},iw3l:function(t,a,s){"use strict";function n(t){s("QrRH")}var e=s("+p09"),i=s("STwf"),c=s("VU/8"),A=n,u=c(e.a,i.a,A,"data-v-dee798ae",null);a.a=u.exports},j2Sk:function(t,a){},lqaN:function(t,a){},m1KT:function(t,a,s){"use strict";s("YaEn");a.a={name:"Photo",data:function(){return{transitionName:"slide-right"}},watch:{$route:function(t,a){var s=t.path.split("/").length,n=a.path.split("/").length;this.transitionName=s<n?"slide-right":s===n?"fade":"slide-left"}}}},mAKM:function(t,a,s){"use strict";function n(t){s("LX1l")}var e=s("tFzS"),i=s("Mjp4"),c=s("VU/8"),A=n,u=c(e.a,i.a,A,"data-v-128b7ada",null);a.a=u.exports},shP1:function(t,a,s){t.exports=s.p+"static/img/temp.bd2e87f.png"},tFzS:function(t,a,s){"use strict";var n=s("YaEn");a.a={name:"TakePhoto",data:function(){return{init:!0,back:!1,take:!1}},methods:{fBack:function(){this.back=!0,setTimeout(function(){n.a.push("/index")},1e3)},fSave:function(){this.take=!0,setTimeout(function(){n.a.push("/photo/save")},500)}}}},xJD8:function(t,a,s){"use strict";a.a={name:"app"}},ycud:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement;return(t._self._c||a)("div",{staticClass:"hello"},[t._v("\n  Cloud\n")])},e=[],i={render:n,staticRenderFns:e};a.a=i}},["NHnr"]);
//# sourceMappingURL=app.598d84266a4d6a8d2048.js.map