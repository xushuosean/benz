(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d6d4958"],{"2b57":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"compChange"},[n("div",{staticClass:"leftContainer"},[n("h2",[t._v("你的任务")]),n("img",{attrs:{src:a("451d"),alt:"person1"}}),n("p",[t._v(t._s(t.from))])]),n("div",{staticClass:"content"},[t._t("content")],2),n("div",{staticClass:"sendBox"},[n("h2",[t._v("你的答复")]),n("el-input",{attrs:{type:"textarea",rows:10,placeholder:"请输入内容"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),n("el-button",{attrs:{type:"primary"},on:{click:t.enterDown}},[t._v("下一步")])],1)])},s=[],i={name:"compChange",props:{from:{default:"",type:String},value:{default:"",type:String}},computed:{textarea:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{enterDown:function(){this.$emit("enterDown")}}},o=i,c=(a("767c"),a("2877")),r=Object(c["a"])(o,n,s,!1,null,"d49a98aa",null);e["a"]=r.exports},3071:function(t,e,a){"use strict";var n=a("4683"),s=a.n(n);s.a},"451d":function(t,e,a){t.exports=a.p+"img/person1.d169593f.png"},4683:function(t,e,a){},"5d04":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"audio"},[n("div",{staticClass:"con",on:{click:t.audioClick}},[n("div",{staticClass:"status"},[t.status?n("img",{attrs:{src:a("df84"),alt:"play"}}):n("img",{attrs:{src:a("e7e7"),alt:"stop"}})]),t._t("default")],2),n("audio",{ref:"audio",attrs:{controls:"controls"}},[n("source",{attrs:{src:t.audioLink,type:"audio/mp3"}})])])},s=[],i={name:"el-audio",props:{audioLink:{default:"",type:String}},data:function(){return{status:!1}},created:function(){var t=this;this.$nextTick((function(){t.$refs.audio.addEventListener("ended",(function(){t.status=!1}),!1)}))},methods:{audioClick:function(){this.status?this.pause():this.play()},play:function(){this.$refs.audio.play(),this.status=!0},pause:function(){this.$refs.audio.pause(),this.status=!1}}},o=i,c=(a("74f0"),a("2877")),r=Object(c["a"])(o,n,s,!1,null,"39ef0f23",null);e["a"]=r.exports},"656d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"change"},[a("comp-change",{attrs:{from:t.from},on:{enterDown:t.enterClick},scopedSlots:t._u([{key:"content",fn:function(){return[a("div",{staticClass:"inner"},[a("p",[t._v("韩总，您好！")]),a("p",{staticClass:"text"},[t._v("今天有个比较棘手的客户投诉，需要你出面帮忙处理。具体情况如下： 客户李钰是去年10月份在我们这里买的车，20天前车辆的后挡风玻璃破裂了，因为他没有购买玻璃险，这个不在保险公司的赔付范围，所以他就把车辆放在店里，要求我们负责赔偿。 我让车间经理看过，车辆到店里的时候，玻璃已经碎裂地比较厉害，都已经看不出来是什么原因造成的，后来在客户的坚持下，我们还是上报了厂家，厂家回复说，玻璃破裂是外力造成的，不是质量问题，不在保修范围内。 但是客户不认可这样的结果，不仅要求我们更换玻璃，还要我们赔偿一万元的误工费和交通费，现在客户天天到店里来，我一直跟他沟通，都没有什么效果。 昨天客户提出今天要跟总经理进行沟通，我们已经将客户投诉录音发送给您，请您给出具体的指示，我们如何处理较为妥当。 谢谢你的支持！")]),a("el-audio",{attrs:{audioLink:"https://ddileaf-test-report-pdf.oss-cn-shanghai.aliyuncs.com/tmp/MercedesBenz/4%E6%B5%8B%E8%AF%84%E9%A1%B5-%E5%AE%A2%E6%88%B7%E6%8A%95%E8%AF%89%E5%BD%95%E9%9F%B3.mp3"}},[a("div",{staticClass:"audiobox"},[t._v(" 投诉录音 ")])])],1)]},proxy:!0}]),model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)},s=[],i=a("2b57"),o=a("5d04"),c={components:{compChange:i["a"],elAudio:o["a"]},data:function(){return{from:"来自售后经理苏适的邮件",textarea:""}},methods:{enterClick:function(){this.$router.push("/home/final")}}},r=c,u=(a("3071"),a("2877")),l=Object(u["a"])(r,n,s,!1,null,"48175be4",null);e["default"]=l.exports},"74f0":function(t,e,a){"use strict";var n=a("b3c5"),s=a.n(n);s.a},"767c":function(t,e,a){"use strict";var n=a("dab8"),s=a.n(n);s.a},b3c5:function(t,e,a){},dab8:function(t,e,a){},df84:function(t,e,a){t.exports=a.p+"img/play.3bae4868.png"},e7e7:function(t,e,a){t.exports=a.p+"img/stop.cd602c75.png"}}]);
//# sourceMappingURL=chunk-5d6d4958.4db1b570.js.map