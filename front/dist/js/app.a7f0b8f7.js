(function(e){function t(t){for(var n,a,c=t[0],i=t[1],l=t[2],d=0,m=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,c=1;c<o.length;c++){var i=o[c];0!==s[i]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},s={app:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},3201:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAYAAAAiYZ4HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABXSURBVHgB7ZDBDQAhCAQ3lyuE/pu66wR9SALIGv07CR/dAQKQUFXp9Y0SrHBhg0tFmEspnCdEqQiLE6Y/VF0sXTU0IezphXw5doAgeB4ccoUdXvL+M6EBofTfU/AarmkAAAAASUVORK5CYII="},"881c":function(e,t,o){},ca1b:function(e,t,o){"use strict";o("881c")},cd49:function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("d3b7");var n=o("7a23"),s=o("bc3a"),r=o.n(s),a={id:"app"};function c(e,t,o,s,r,c){var i=Object(n["s"])("router-view"),l=Object(n["s"])("Model");return Object(n["n"])(),Object(n["d"])("div",a,[Object(n["e"])(i),Object(n["e"])(l)])}var i={class:"modal-content"};function l(e,t,o,s,r,a){return Object(n["n"])(),Object(n["d"])("div",{class:["modal",{open:e.getModalShow}]},[Object(n["e"])("div",i,[Object(n["e"])("p",null,Object(n["u"])(e.getModalMessage),1),Object(n["e"])("button",{onClick:t[1]||(t[1]=function(){return a.closeModal&&a.closeModal.apply(a,arguments)}),class:"close-btn"},"Close")])],2)}var u=o("5530"),d=o("5502"),m={name:"Modal",computed:Object(u["a"])({},Object(d["c"])(["getModalShow","getModalMessage"])),methods:Object(u["a"])(Object(u["a"])({},Object(d["b"])(["setShowModel"])),{},{closeModal:function(){this.$store.dispatch("setShowModel",!1)}})};m.render=l;var h=m,g={name:"App",data:function(){return{windowHeight:window.innerHeight}},components:{Model:h},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("resize",e.onResize)})),this.onResize()},unmount:function(){window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){this.windowHeight=window.innerHeight,document.querySelector("body").style.height=this.windowHeight+"px"}}};o("ca1b");g.render=c;var p=g,f=o("1da1"),b=(o("96cf"),o("b0c0"),o("6c02")),O={class:"flex-1"},j=Object(n["e"])("h1",null,"Join Chatroom",-1),A=Object(n["e"])("button",{type:"submit",class:"join-btn"},"Join",-1);function S(e,t,o,s,r,a){return Object(n["n"])(),Object(n["d"])("div",null,[Object(n["e"])("form",{onSubmit:t[3]||(t[3]=Object(n["z"])((function(){return a.login&&a.login.apply(a,arguments)}),["prevent"])),class:"login-area"},[Object(n["e"])("div",O,[j,Object(n["y"])(Object(n["e"])("input",{type:"text",class:"form-input",placeholder:"Username","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.name=t}),name:"name"},null,512),[[n["w"],e.name,void 0,{trim:!0}]]),Object(n["y"])(Object(n["e"])("input",{type:"text",class:"form-input",placeholder:"RoomID","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.roomId=t}),name:"roomId"},null,512),[[n["w"],e.roomId,void 0,{trim:!0}]])]),A],32)])}var v={name:"Login",data:function(){return{name:"",roomId:"",token:""}},computed:Object(u["a"])({},Object(d["c"])(["getUser","getRoom","getServerUrl"])),created:function(){this.getUser&&(this.name=this.getUser.name,this.token=this.getUser.token),this.getRoom&&(this.roomId=this.getRoom.id)},methods:Object(u["a"])(Object(u["a"])({},Object(d["b"])(["setUser","setAuth","setRoom"])),{},{login:function(){var e=this;this.name&&this.roomId?r.a.post(this.getServerUrl+"/api/join-room",{name:this.name,roomId:this.roomId,token:this.token}).then((function(t){t.data.msg?(e.$store.dispatch("setShowModel",!0),e.$store.dispatch("setMessageModel",t.data.msg)):(e.$store.dispatch("setAuth",!0),e.$store.dispatch("setUser",t.data.user),e.$store.dispatch("setRoom",t.data.room),e.$router.push({name:"ChatRoom"}))})):(this.$store.dispatch("setShowModel",!0),this.$store.dispatch("setMessageModel","Username or RoomID cann't empty!"))}})};v.render=S;var M=v,y={class:"chat-area"},R={class:"chat-header"};function U(e,t,o,s,r,a){var c=Object(n["s"])("MessageList"),i=Object(n["s"])("TextingInput");return Object(n["n"])(),Object(n["d"])("div",y,[Object(n["e"])("div",R,[Object(n["e"])("a",{class:"exit-btn",onClick:t[1]||(t[1]=function(){return a.logout&&a.logout.apply(a,arguments)})},"Exit"),Object(n["e"])("h1",null,Object(n["u"])(e.getRoom.id),1)]),Object(n["e"])(c,{messages:e.messages},null,8,["messages"]),Object(n["e"])(i)])}o("99af");var w={class:"flex-1 message-area",ref:"scrollArea"},k={key:1};function x(e,t,o,s,r,a){var c=Object(n["s"])("Message");return Object(n["n"])(),Object(n["d"])("div",w,[o.messages&&o.messages.length?(Object(n["n"])(!0),Object(n["d"])(n["a"],{key:0},Object(n["r"])(o.messages,(function(t){return Object(n["n"])(),Object(n["d"])(c,{key:t._id,message:t,mine:t.user._id==e.getUser._id},null,8,["message","mine"])})),128)):(Object(n["n"])(),Object(n["d"])("p",k,"There are no messages yet"))],512)}var E={key:0,class:"message-user"},I={key:1,class:"flex-1"},L={class:"message-content"};function T(e,t,o,s,r,a){return Object(n["n"])(),Object(n["d"])("div",{class:["message",{"left-message":!o.mine,"right-message":o.mine}]},[o.mine?(Object(n["n"])(),Object(n["d"])("div",I)):(Object(n["n"])(),Object(n["d"])("div",E,Object(n["u"])(o.message.user.name),1)),Object(n["e"])("div",L,Object(n["u"])(o.message.content),1)],2)}var C={name:"Message",props:["message","mine"]};C.render=T;var _=C,P={name:"MessageList",props:["messages"],data:function(){return{scrollArea:null,loaded:!1,lastCreatedAt:null,timeoutScroll:null}},components:{Message:_},computed:Object(u["a"])({},Object(d["c"])(["getUser","getSocket","getRoom"])),methods:{scrollToLast:function(){this.scrollArea.scrollTop=this.scrollArea.scrollHeight-this.scrollArea.clientHeight},handleScroll:function(){var e=this;clearTimeout(this.timeoutScroll),this.scrollArea.scrollTop<20&&this.scrollArea.scrollHeight-this.scrollArea.clientHeight>0&&(this.timeoutScroll=setTimeout((function(){e.getSocket.emit("loadMoreMessage",{roomId:e.getRoom._id,lastCreatedAt:e.lastCreatedAt})}),1e3))}},mounted:function(){this.scrollArea=this.$refs.scrollArea,this.scrollToLast(),this.scrollArea.addEventListener("scroll",this.handleScroll)},updated:function(){(this.scrollArea.scrollHeight-this.scrollArea.clientHeight-this.scrollArea.scrollTop<200||!this.loaded)&&this.scrollToLast(),this.loaded=!0,this.messages.length&&(this.lastCreatedAt=this.messages[0].createdAt)},unmounted:function(){this.scrollArea.removeEventListener("scroll",this.handleScroll)}};P.render=x;var H=P,$=o("3201"),J=o.n($),N={class:"texting-area"},z=Object(n["e"])("img",{src:J.a,alt:""},null,-1);function V(e,t,o,s,r,a){return Object(n["n"])(),Object(n["d"])("div",N,[Object(n["y"])(Object(n["e"])("textarea",{ref:"textingArea","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.content=t}),onKeyup:t[2]||(t[2]=function(){return a.onKeyUp&&a.onKeyUp.apply(a,arguments)}),placeholder:"Message here..."},null,544),[[n["w"],e.content,void 0,{trim:!0}]]),Object(n["e"])("button",{onClick:t[3]||(t[3]=function(){return a.createMessage&&a.createMessage.apply(a,arguments)})},[z])])}var B={name:"TextingInput",data:function(){return{content:"",textingArea:null}},computed:Object(u["a"])({},Object(d["c"])(["getUser","getSocket","getRoom"])),methods:{createMessage:function(){""!=this.content&&(this.getSocket.emit("createMessage",{userId:this.getUser._id,roomId:this.getRoom._id,token:this.getUser.token,content:this.content}),this.content="",this.focusTextingArea())},onKeyUp:function(e){e.preventDefault(),13!==e.keyCode||e.shiftKey||this.createMessage()},focusTextingArea:function(){this.$refs.textingArea.focus()}},mounted:function(){this.textingArea=this.$refs.textingArea,this.focusTextingArea()}};B.render=V;var K=B,X=o("8e27"),D=o.n(X),Q={name:"ChatRoom",components:{MessageList:H,TextingInput:K},data:function(){return{room:[],users:[],messages:[]}},computed:Object(u["a"])({},Object(d["c"])(["getUser","getRoom","getSocket","getServerProxy"])),methods:Object(u["a"])(Object(u["a"])({},Object(d["b"])(["setAuth","setSocket"])),{},{logout:function(){this.$store.dispatch("setAuth",!1),this.getSocket.emit("leaveRoom",{roomId:this.getRoom._id}),this.$store.dispatch("setSocket",null),this.$router.push({name:"Login"})},connectSocket:function(){var e=D()(this.getServerProxy,{secure:!0,reconnect:!0,rejectUnauthorized:!1});this.$store.dispatch("setSocket",e)}}),created:function(){var e=this;this.connectSocket(),this.getSocket.emit("joinRoom",{roomId:this.getRoom._id}),this.getSocket.on("messages",(function(t){e.messages=e.messages.concat(t.reverse())})),this.getSocket.on("moreMessages",(function(t){e.messages=t.reverse().concat(e.messages)}))}};Q.render=U;var Y=Q,F=Object(n["e"])("h1",null,"Page Not Found",-1);function G(e,t,o,s,r,a){return Object(n["n"])(),Object(n["d"])("div",null,[F])}var q={name:"PageNotFound"};q.render=G;var W=q,Z=[{path:"/",name:"Login",component:M},{path:"/chat-room",name:"ChatRoom",component:Y},{path:"/:pathMatch(.*)*",component:W}],ee=Object(b["a"])({history:Object(b["b"])("/"),routes:Z});ee.beforeEach(function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,o,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"ChatRoom"==t.name?null==localStorage.user||1!=JSON.parse(localStorage.auth)?n({name:"Login"}):n():"Login"==t.name&&(null!=localStorage.user&&1==JSON.parse(localStorage.auth)?n({name:"ChatRoom"}):n());case 1:case"end":return e.stop()}}),e)})));return function(t,o,n){return e.apply(this,arguments)}}());var te=ee,oe=Object(d["a"])({state:{user:null,auth:!1,room:null,socket:null,modalShow:!1,modalMessage:"",serverUrl:"",serverProxy:""},getters:{getUser:function(e){return e.user},getAuth:function(e){return e.auth},getRoom:function(e){return e.room},getSocket:function(e){return e.socket},getModalShow:function(e){return e.modalShow},getModalMessage:function(e){return e.modalMessage},getServerUrl:function(e){return e.serverUrl},getServerProxy:function(e){return e.serverProxy}},mutations:{USER:function(e,t){e.user=t},AUTH:function(e,t){e.auth=t},ROOM:function(e,t){e.room=t},SOCKET:function(e,t){e.socket=t},MODEL_SHOW:function(e,t){e.modalShow=t},MODEL_MESSAGE:function(e,t){e.modalMessage=t},SERVER_URL:function(e,t){e.serverUrl=t},SERVER_PROXY:function(e,t){e.serverProxy=t}},actions:{setUser:function(e,t){e.commit("USER",t),localStorage.setItem("user",JSON.stringify(t))},setAuth:function(e,t){e.commit("AUTH",t),localStorage.setItem("auth",t),t||te.push({name:"Login"})},setRoom:function(e,t){e.commit("ROOM",t),localStorage.setItem("room",JSON.stringify(t)),t||e.commit("AUTH",!1)},setSocket:function(e,t){e.commit("SOCKET",t)},setShowModel:function(e,t){e.commit("MODEL_SHOW",t)},setMessageModel:function(e,t){e.commit("MODEL_MESSAGE",t)},setServerUrl:function(e,t){e.commit("SERVER_URL",t)},setServerProxy:function(e,t){e.commit("SERVER_PROXY",t)}}});oe.dispatch("setSocket",null),oe.dispatch("setServerProxy","https://chatapp.vothanhdanh.info"),oe.dispatch("setServerUrl","https://chatapp.vothanhdanh.info"),localStorage.user&&localStorage.auth?r.a.defaults.headers.common["Authorization"]=JSON.parse(localStorage.user).token:delete r.a.defaults.headers.common["Authorization"],localStorage.user&&oe.dispatch("setUser",JSON.parse(localStorage.user)),localStorage.auth&&oe.dispatch("setAuth",JSON.parse(localStorage.auth)),localStorage.room&&oe.dispatch("setRoom",JSON.parse(localStorage.room)),r.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),r.a.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&(localStorage.removeItem("user"),oe.dispatch("setUser",!1),te.push({name:"Login",params:{message:"Session has expired!"}})),Promise.reject(e)})),Object(n["c"])(p).use(te).use(oe).mount("#root")}});
//# sourceMappingURL=app.a7f0b8f7.js.map