(function(t){function e(e){for(var r,a,c=e[0],i=e[1],l=e[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);s&&s(e);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={page5:0},u=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=i;u.push([5,"chunk-vendors"]),n()})({2975:function(t,e,n){"use strict";var r=n("b1da"),o=n.n(r);o.a},"37c0":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("페이지5")]),n("div",{staticClass:"menu"},[n("router-link",{attrs:{to:"/"}},[t._v("홈")]),n("router-link",{attrs:{to:"/notice"}},[t._v("공지사항")]),n("router-link",{attrs:{to:"/chatting"}},[t._v("채팅")])],1),n("router-view",{staticClass:"view"})],1)},u=[],a=n("8c4f"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.user?n("img",{attrs:{src:t.user.photoURL}}):t._e(),t.user?n("button",{attrs:{type:"button"},on:{click:t.logout}},[t._v("로그아웃")]):t._e(),t.user?t._e():n("button",{attrs:{type:"button"},on:{click:function(e){return t.login("google")}}},[t._v("Google 로그인")]),t.user?t._e():n("button",{attrs:{type:"button"},on:{click:function(e){return t.login("github")}}},[t._v("Github 로그인")])])},i=[],l=n("8aa5"),s=n.n(l),p={apiKey:"AIzaSyDQkg2ZtC8S_5aelTdxBKAQ_6WVezeLQPs",authDomain:"skhu-bom04.firebaseapp.com",databaseURL:"https://skhu-bom04.firebaseio.com",projectId:"skhu-bom04",storageBucket:"skhu-bom04.appspot.com",messagingSenderId:"209853802515",appId:"1:209853802515:web:5c1df16b2de72718ea37e6",measurementId:"G-NTBL5TW1F1"},f=s.a.initializeApp(p),h=f,d={name:"Home",data:function(){return{user:null}},methods:{login:function(t){var e,n=this;"google"==t?e=new s.a.auth.GoogleAuthProvider:"github"==t&&(e=new s.a.auth.GithubAuthProvider),h.auth().signInWithPopup(e).then((function(t){console.log(t),n.user=t.user})).catch((function(t){alert("로그인 실패 "+t.message),console.log(t)}))},logout:function(){var t=this;h.auth().signOut().then((function(){t.user=null})).catch((function(t){console.log(t)}))}}},b=d,v=(n("2975"),n("2877")),g=Object(v["a"])(b,c,i,!1,null,"51c21c8c",null),m=g.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("공지사항")])])}],w={name:"Notice"},O=w,k=Object(v["a"])(O,_,y,!1,null,null,null),j=k.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("채팅")])])}],S={name:"Chatting"},$=S,A=Object(v["a"])($,x,P,!1,null,null,null),E=A.exports,I=new a["a"]({routes:[{path:"/",component:m},{path:"/notice",component:j},{path:"/chatting",component:E}]}),T={name:"App",router:I},G=T,C=(n("4de3"),Object(v["a"])(G,o,u,!1,null,"6c54fb2c",null)),L=C.exports;r["a"].config.productionTip=!1,r["a"].use(a["a"]),new r["a"]({render:function(t){return t(L)}}).$mount("#app")},"4de3":function(t,e,n){"use strict";var r=n("677d"),o=n.n(r);o.a},5:function(t,e,n){t.exports=n("37c0")},"677d":function(t,e,n){},b1da:function(t,e,n){}});
//# sourceMappingURL=page5.72dd5ead.js.map