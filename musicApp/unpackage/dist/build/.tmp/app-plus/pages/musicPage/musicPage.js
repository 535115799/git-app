(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/musicPage/musicPage"],{2397:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("2f62")),i=r(n("08cb"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={components:{player:i.default},data:function(){return{start:"",end:"",value:0,timeUpdate:!0,arr:[0],index:-1}},computed:o({},a.default.mapState(["detail","audio","lyric","paused","degs"])),mounted:function(){var e=this;t.setNavigationBarTitle({title:e.detail.songs[0].name}),e.audio.onTimeUpdate(e.jindu),e.audio.onEnded(function(){t.setNavigationBarTitle({title:e.detail.songs[0].name})})},methods:o({},a.default.mapMutations(["degsadd"]),{jindu:function(){var t=this.audio.currentTime,e=this.audio.duration,n=Math.floor(t/60),a=Math.floor(t%60);n=1===n.toString().length?"0"+n:n,a=1===a.toString().length?"0"+a:a;var i=Math.floor(e/60),r=Math.floor(e%60);i=1===i.toString().length?"0"+i:i,r=1===r.toString().length?"0"+r:r,this.start="".concat(n,":").concat(a),this.end="".concat(i,":").concat(r),this.timeUpdate&&(this.value=t/e*100)},adjust:function(t){this.audio.seek(t.detail.value*this.audio.duration/100),this.timeUpdate=!0},timeState:function(){this.timeUpdate=!1}})};e.default=s}).call(this,n("6e42")["default"])},"261b":function(t,e,n){"use strict";n.r(e);var a=n("d5f6"),i=n("6e55");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("700f");var o=n("2877"),u=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},3250:function(t,e,n){},"415d":function(t,e,n){"use strict";n("2443");var a=r(n("b0ce")),i=r(n("261b"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},"6e55":function(t,e,n){"use strict";n.r(e);var a=n("2397"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},"700f":function(t,e,n){"use strict";var a=n("3250"),i=n.n(a);i.a},d5f6:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"m-body"},[n("view",{staticClass:"bgBody"},[n("img",{style:"border-radius: 50%;margin-top: 45%;transform: rotate("+t.degs+"deg)",attrs:{src:t.detail.songs[0].al.picUrl+"?param=220y220",alt:""}})]),n("player",{attrs:{mpcomid:"9e648232-0"}}),n("view",{staticClass:"slideBt"},[n("view",[t._v(t._s(t.start))]),n("view",{staticStyle:{width:"80%"}},[n("slider",{attrs:{value:t.value,activeColor:"#b82525",backgroundColor:"#6D6D72",eventid:"9e648232-0"},on:{change:t.adjust,changing:t.timeState}})]),n("view",[t._v(t._s(t.end))])])],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})}},[["415d","common/runtime","common/vendor"]]]);