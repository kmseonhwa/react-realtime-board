(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{18:function(e,t,a){e.exports={primaryWhite:"white",modal:"game_options_modal__Pf9bD",dialog:"game_options_dialog__1J6wU",options:"game_options_options__53T7C",game:"game_options_game__2o-nv",gameTitle:"game_options_gameTitle__XbdLj",gameImg:"game_options_gameImg__3NvSG"}},23:function(e,t,a){e.exports={primaryWhite:"white",primaryBlack:"black",loginBox:"login_loginBox__3NKqg",loginTitle:"login_loginTitle__2UScx",loginBtns:"login_loginBtns__3ySJu",loginBtn:"login_loginBtn__3EY9k",loginIcon:"login_loginIcon__3NJdJ"}},24:function(e,t,a){e.exports={webcamAbsolute:"webcam_box_webcamAbsolute__3JGVW",webcamRelative:"webcam_box_webcamRelative__1mBUX",webcam:"webcam_box_webcam__1VGEp",meta:"webcam_box_meta__CgNXA",alt:"webcam_box_alt__1iik2",dragging:"webcam_box_dragging__1eg5W"}},25:function(e,t,a){e.exports={imgWrapper:"image_box_imgWrapper__xRCsR",img:"image_box_img__2FZW8",meta:"image_box_meta__3Q5W1",alt:"image_box_alt__1F66L",dragging:"image_box_dragging__kFgpn"}},26:function(e,t,a){e.exports={webcamController:"webcam_controller_webcamController__35AnZ",showWebcamController:"webcam_controller_showWebcamController__2iWHF",hideWebcamController:"webcam_controller_hideWebcamController__2LnrF",switch:"webcam_controller_switch__36sPo",slider:"webcam_controller_slider__3CQ-N",round:"webcam_controller_round__dJusM"}},31:function(e,t,a){e.exports={primaryEggShell:"#ece8e4",primaryBlack:"black",input:"message_box_input__2crgd",meta:"message_box_meta__qosZi",alt:"message_box_alt__zv3us",dragging:"message_box_dragging__1aN69"}},37:function(e,t,a){e.exports={primaryBlueDark:"#004d8b",primaryWhite:"white",header:"header_header__v9FKw",headerText:"header_headerText__351ni",logoutBtn:"header_logoutBtn__tmyLf"}},40:function(e,t,a){e.exports={primaryEggShell:"#ece8e4",appContainer:"app_appContainer__1KyrA",loginComponent:"app_loginComponent__3Oz8b"}},46:function(e,t,a){e.exports={primaryWhite:"white",board:"board_board__PF3JZ",motionContainer:"board_motionContainer__2YCn3"}},48:function(e,t,a){e.exports={gameBox:"game_box_gameBox__33wI0"}},56:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a.n(n),r=a(35),i=a.n(r),o=(a(56),a(49)),s=a(11),l=a(40),u=a.n(l),b=a(37),d=a.n(b),m=a(7),g=function(e){var t=e.authService,a=Object(s.f)();return Object(m.jsxs)("header",{className:d.a.header,children:[Object(m.jsx)("h1",{className:d.a.headerText,children:"RealtimeBoard"}),Object(m.jsx)("button",{className:d.a.logoutBtn,onClick:function(){t.logout().then((function(){a("/")}))},children:"sign out"})]})},j=a(23),O=a.n(j),f=function(e){var t=e.authService,a=Object(s.f)(),n=function(e){t.login(e.target.dataset.provider).then((function(e){a("/board",{state:{id:e.user.uid}})}))};return Object(m.jsxs)("div",{className:O.a.loginBox,children:[Object(m.jsx)("h1",{className:O.a.loginTitle,children:"LOGIN"}),Object(m.jsxs)("section",{className:O.a.loginBtns,children:[Object(m.jsx)("button",{className:O.a.loginBtn,"data-provider":"google",onClick:n,children:Object(m.jsx)("i",{className:"fab fa-google ".concat(O.a.loginIcon)})}),Object(m.jsx)("button",{className:O.a.loginBtn,"data-provider":"twitter",onClick:n,children:Object(m.jsx)("i",{className:"fab fa-twitter ".concat(O.a.loginIcon)})}),Object(m.jsx)("button",{className:O.a.loginBtn,"data-provider":"github",onClick:n,children:Object(m.jsx)("i",{className:"fab fa-github ".concat(O.a.loginIcon)})})]})]})},p=a(0),h=a.n(p),v=a(3),_=a(12),x=a(10),y="MESSAGE_BOX",k="IMAGE_BOX",w="WEBCAM_BOX",C={RUMMIKUB:"https://html5.gamedistribution.com/6bf29e0982a64f898a81c3f3612aba26/",DRAWANDGUESS:"https://skribbl.io/",SHELLSHOCKERS:"https://shellshock.io/"},S=a(31),I=a.n(S),E=a(29),N=a.n(E),B={Meta:I.a.meta,Alt:I.a.alt},M=function(e){var t=e.pressedKey,a=e.message,c=e.onMessageClick,r=e.onMessageChange,i=Object(n.useRef)(),o=Object(n.useRef)(),s=Object(n.useState)(y),l=Object(x.a)(s,2),u=l[0],b=(l[1],Object(n.useState)(!1)),d=Object(x.a)(b,2),g=d[0],j=d[1],O=Object(n.useState)(!1),f=Object(x.a)(O,2),p=f[0],h=f[1];return Object(n.useEffect)((function(){i.current.style.height="auto",i.current.style.height=i.current.scrollHeight+"px"}),[a]),Object(m.jsx)(N.a,{nodeRef:o,axis:"both",bounds:"parent",position:{x:0,y:0},scale:1,onStart:function(){return"Alt"===t&&(h(!0),!0)},onStop:function(e,t){h(!1),r(a.id,null,t.x,t.y)},children:Object(m.jsx)("textarea",{ref:i,id:a.id,className:"".concat(I.a.input," ").concat(g&&t?p?I.a.dragging:B[t]:I.a.autoCursor),type:"text",value:a.text,maxLength:"50",style:{top:a.y,left:a.x},onClick:function(e){u&&c(e,u)},onInput:function(e){r(e.target.id,e.target.value),e.target.style.height="auto",e.target.style.height=e.target.scrollHeight+"px"},onMouseEnter:function(){j(!0)},onMouseLeave:function(){j(!1)},onKeyDown:function(e){e.stopPropagation()},onKeyPress:function(e){e.stopPropagation()}},a.id)})},W=a(25),A=a.n(W),R={Meta:A.a.meta,Alt:A.a.alt},G=function(e){var t=e.pressedKey,a=e.img,c=e.onImageClick,r=e.onImageChange,i=Object(n.useRef)(),o=Object(n.useRef)(),s=Object(n.useState)(k),l=Object(x.a)(s,2),u=l[0],b=(l[1],Object(n.useState)(!1)),d=Object(x.a)(b,2),g=d[0],j=d[1],O=Object(n.useState)(!1),f=Object(x.a)(O,2),p=f[0],h=f[1];return Object(m.jsx)(N.a,{nodeRef:o,axis:"both",bounds:"parent",position:{x:0,y:0},scale:1,onStart:function(){return"Alt"===t&&(h(!0),!0)},onStop:function(e,t){h(!1),r(a.id,t.x,t.y)},children:Object(m.jsx)("div",{ref:i,className:"".concat(A.a.imgWrapper," ").concat(g&&t?p?A.a.dragging:R[t]:A.a.autoCursor),style:{top:a.y,left:a.x},onClick:function(e){u&&c(e,u)},onMouseEnter:function(){j(!0)},onMouseLeave:function(){j(!1)},children:Object(m.jsx)("img",{id:a.id,className:A.a.img,src:a.fileUrl,alt:"\uc0ac\uc9c4",draggable:"false"})})})},L=a(46),D=a.n(L),X={MESSAGE_BOX:{id:null,userId:null,x:null,y:null,text:null},IMAGE_BOX:{id:null,userId:null,x:null,y:null,fileUrl:null,height:null,width:null},WEBCAM_BOX:{id:null,userId:null,x:null,y:null,playing:!1},GAME_BOX:{id:null,userId:null,x:null,y:null,game:null}},K=a(26),P=a.n(K),U=function(e){var t=e.camOn,a=e.mouseEnter,n=e.changeCamState;return Object(m.jsx)("div",{className:"".concat(P.a.webcamController," ").concat(a?P.a.showWebcamController:P.a.hideWebcamController),children:Object(m.jsxs)("label",{className:P.a.switch,children:[Object(m.jsx)("input",{type:"checkbox",onClick:function(){n(!0!==t)}}),Object(m.jsx)("span",{className:"".concat(P.a.slider," ").concat(P.a.round)})]})})},T=a(47),F=a.n(T),J=a(24),H=a.n(J),Y={Meta:H.a.meta,Alt:H.a.alt},Z=function(e){var t=e.pressedKey,a=e.userId,c=e.webcam,r=e.onWebcamClick,i=e.onWebcamChange,o=Object(n.useRef)(),s=Object(n.useState)(null),l=Object(x.a)(s,2),u=l[0],b=l[1],d=Object(n.useState)(w),g=Object(x.a)(d,2),j=g[0],O=(g[1],Object(n.useState)(!1)),f=Object(x.a)(O,2),p=f[0],h=f[1],v=Object(n.useState)(!1),_=Object(x.a)(v,2),y=_[0],k=_[1],C=Object(n.useState)(!1),S=Object(x.a)(C,2),I=S[0],E=S[1];Object(n.useEffect)((function(){B(!1)}),[]),Object(n.useEffect)((function(){navigator.mediaDevices.enumerateDevices().then(M)}),[]);var B=function(e){E(e),i(c.id,null,null,e)},M=function(e){c.userId===a?e.forEach((function(e){var t=e.kind,a=e.deviceId;"videoinput"===t&&b(a)})):b(null)};return Object(m.jsx)(N.a,{nodeRef:o,axis:"both",bounds:"parent",position:{x:0,y:0},scale:1,onStart:function(){return"Alt"===t&&(k(!0),!0)},onStop:function(e,t){k(!1),i(c.id,t.x,t.y)},children:Object(m.jsx)("div",{className:"".concat(H.a.webcamAbsolute," ").concat(p&&t?y?H.a.dragging:Y[t]:H.a.autoCursor),style:{top:c.y,left:c.x},onClick:function(e){j&&r(e,j)},onMouseEnter:function(){h(!0)},onMouseLeave:function(){h(!1)},children:Object(m.jsxs)("div",{className:H.a.webcamRelative,children:[a===c.userId&&Object(m.jsx)(U,{camOn:I,mouseEnter:p,changeCamState:B}),c.playing&&Object(m.jsx)(F.a,{id:c.id,className:H.a.webcam,mirrored:!0,screenshotQuality:1,audio:!1,videoConstraints:{width:200,height:200,deviceId:u}})]})})})},z=a(18),Q=a.n(z),q=a.p+"static/media/rummikub.cd9ad04e.png",V=a.p+"static/media/drawnguess.3a392079.png",$=a.p+"static/media/shellshockers.569c1139.png",ee=function(e){var t=e.getSelectedGame;return Object(m.jsx)("div",{className:Q.a.modal,onClick:function(e){t(null)},children:Object(m.jsx)("div",{className:Q.a.dialog,children:Object(m.jsxs)("ul",{className:Q.a.options,children:[Object(m.jsxs)("li",{className:Q.a.game,children:[Object(m.jsx)("span",{className:Q.a.gameTitle,children:"Rummikub"}),Object(m.jsx)("img",{id:"RUMMIKUB",className:Q.a.gameImg,src:q,alt:"",onClick:function(e){t(e.target.id),e.stopPropagation()}})]}),Object(m.jsxs)("li",{className:Q.a.game,children:[Object(m.jsx)("span",{className:Q.a.gameTitle,children:"Drawing&Guessing"}),Object(m.jsx)("img",{id:"DRAWANDGUESS",className:Q.a.gameImg,src:V,alt:"",onClick:function(e){t(e.target.id),e.stopPropagation()}})]}),Object(m.jsxs)("li",{className:Q.a.game,children:[Object(m.jsx)("span",{className:Q.a.gameTitle,children:"Shell Shockers"}),Object(m.jsx)("img",{id:"SHELLSHOCKERS",className:Q.a.gameImg,src:$,alt:"",onClick:function(e){t(e.target.id),e.stopPropagation()}})]})]})})})},te=a(48),ae=a.n(te),ne=function(e){var t=e.userId,a=(e.pressedKey,e.game),c=e.onGameChange,r=Object(n.useRef)(),i=Object(n.useState)(!1),o=Object(x.a)(i,2),s=o[0],l=o[1];return Object(n.useEffect)((function(){a.game||t!==a.userId||l(!0)}),[a.id]),Object(m.jsx)(m.Fragment,{children:a.game?Object(m.jsx)("iframe",{ref:r,className:ae.a.gameBox,src:C[a.game]}):s?Object(m.jsx)(ee,{getSelectedGame:function(e){c(a.id,e),l(!1)}}):Object(m.jsx)("span",{children:"loadinig game..."})})},ce=function(e){var t=e.authService,a=e.database,c=e.imageUploader,r=Object(n.useRef)(),i=Object(s.e)(),o=Object(n.useState)("BOARD"),l=Object(x.a)(o,2),u=l[0],b=(l[1],Object(n.useState)(null)),d=Object(x.a)(b,2),g=d[0],j=d[1],O=Object(n.useState)(i.state&&i.state.id),f=Object(x.a)(O,2),p=f[0],C=f[1],S=Object(n.useState)({}),I=Object(x.a)(S,2),E=I[0],N=I[1],B=Object(n.useState)({}),W=Object(x.a)(B,2),A=W[0],R=W[1],L=Object(n.useState)({}),K=Object(x.a)(L,2),P=K[0],U=K[1],T=Object(n.useState)({}),F=Object(x.a)(T,2),J=F[0],H=F[1],Y=Object(s.f)();Object(n.useEffect)((function(){var e=t.onAuthChange((function(e){e?(C(e.uid),a.getMessage((function(e){N(e)})),a.getImages((function(e){R(e)})),a.getWebcam((function(e){U(e)})),a.getGames((function(e){H(e)}))):Y("/")}));return function(){e()}}),[p,t,a,Y]);var z=Object(n.useCallback)((function(e){e.preventDefault(),e.stopPropagation()}),[]),Q=Object(n.useCallback)((function(e){e.preventDefault(),e.stopPropagation()}),[]),q=Object(n.useCallback)((function(e){e.preventDefault(),e.stopPropagation()}),[]),V=Object(n.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),oe(e.dataTransfer.files[0],e.clientX,e.clientY)}),[]),$=Object(n.useCallback)((function(){r.current.addEventListener("dragenter",z),r.current.addEventListener("dragleave",Q),r.current.addEventListener("dragover",q),r.current.addEventListener("drop",V),window.addEventListener("keydown",te),window.addEventListener("keyup",te)}),[z,Q,q,V]),ee=Object(n.useCallback)((function(){r.current.removeEventListener("dragenter",z),r.current.removeEventListener("dragleave",Q),r.current.removeEventListener("dragover",q),r.current.removeEventListener("drop",V),window.addEventListener("keydown",te),window.addEventListener("keyup",te)}),[z,Q,q,V]);Object(n.useEffect)((function(){return $(),function(){}}),[$,ee]);var te=function(e){"keydown"===e.type&&(console.log(e.key),j(e.key)),"keyup"===e.type&&j(null)},ae=Object(n.useCallback)((function(e,t){if(t)switch(g){case"m":ce(e.clientX,e.clientY);break;case"i":oe();break;case"w":ue(e.clientX,e.clientY);break;case"g":me(e.clientX,e.clientY);break;case"Meta":t===y&&re(e.target.id),t===k&&se(e.target.id),t===w&&be(e.target.id)}})),ce=function(e,t){var n=Date.now(),c=r.current.getBoundingClientRect(),i=Object(_.a)({},X.MESSAGE_BOX);i.id=n,i.userId=p,i.x=e-c.left,i.y=t-c.top,i.text="",N((function(e){var t=Object(_.a)({},e);return t[n]=i,t})),a.saveMessage(i)},re=Object(n.useCallback)((function(e){N((function(t){var a=Object(_.a)({},t);return delete a[e],a})),a.removeMessage(e)})),ie=Object(n.useCallback)((function(e,t,n,c){var r=E[e].x+n,i=E[e].y+c,o=n||c?Object(_.a)(Object(_.a)({},E[e]),{},{x:r,y:i}):Object(_.a)(Object(_.a)({},E[e]),{},{text:t});N((function(t){var a=Object(_.a)({},t);return a[e]=o,a})),a.saveMessage(o)})),oe=function(){var e=Object(v.a)(h.a.mark((function e(t,n,i){var o,s,l,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,c.upload(t);case 5:o=e.sent,s=Date.now(),l=r.current.getBoundingClientRect(),(u=Object(_.a)({},X.IMAGE_BOX)).id=s,u.userId=p,u.x=n-l.left,u.y=i-l.top,u.fileUrl=o.url?o.url:"\ubd88\ub7ec\uc62c \uc218 \uc5c6\ub294 \uc774\ubbf8\uc9c0\uc785\ub2c8\ub2e4!",R((function(e){var t=Object(_.a)({},e);return t[s]=u,t})),a.saveImage(u),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,a,n){return e.apply(this,arguments)}}(),se=function(e){R((function(t){var a=Object(_.a)({},t);return delete a[e],a})),a.removeImage(e)},le=function(e,t,n){var c=A[e].x+t,r=A[e].y+n,i=Object(_.a)(Object(_.a)({},A[e]),{},{x:c,y:r});R((function(t){var a=Object(_.a)({},t);return a[e]=i,a})),a.saveImage(i)},ue=function(e,t){if(Object.keys(P).length>0)window.alert("\uc6f9\ucea0\uc740 \ud55c \uac1c\ub9cc \uc18c\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!");else{var n=Date.now(),c=r.current.getBoundingClientRect(),i=Object(_.a)({},X.WEBCAM_BOX);i.id=n,i.userId=p,i.x=e-c.left,i.y=t-c.top,U((function(e){var t=Object(_.a)({},e);return t[n]=i,t})),a.saveWebcam(i)}},be=function(e){U((function(t){var a=Object(_.a)({},t);return delete a[e],a})),a.removeWebcam(e)},de=function(e,t,n,c){var r;if(t||n){var i=P[e].x+t,o=P[e].y+n;r=Object(_.a)(Object(_.a)({},P[e]),{},{x:i,y:o})}else r=Object(_.a)(Object(_.a)({},P[e]),{},{playing:c});U((function(t){var a=Object(_.a)({},t);return a[e]=r,a})),a.saveWebcam(r)},me=function(){if(Object.keys(J).length>0)window.alert("\ud558\ub098\uc758 \uac8c\uc784\ub9cc \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!");else{var e=Date.now(),t=Object(_.a)({},X.GAME_BOX);t.id=e,t.userId=p,H((function(a){var n=Object(_.a)({},a);return n[e]=t,n})),a.saveGame(t)}},ge=function(e,t){if(t){var n=t,c=Object(_.a)(Object(_.a)({},J[e]),{},{game:n});H((function(t){var a=Object(_.a)({},t);return a[e]=c,a})),a.saveGame(c)}else je(e)},je=function(e){H((function(t){var a=Object(_.a)({},t);return delete a[e],a})),a.removeGame(e)};return Object(m.jsxs)("div",{ref:r,className:D.a.board,onClick:function(e){return ae(e,u)},children:[Object.keys(E).map((function(e){return Object(m.jsx)(M,{pressedKey:g,message:E[e],onMessageClick:ae,onMessageChange:ie},e)})),Object.keys(A).map((function(e){return Object(m.jsx)(G,{pressedKey:g,img:A[e],onImageClick:ae,onImageChange:le},e)})),Object.keys(P).map((function(e){return Object(m.jsx)(Z,{pressedKey:g,userId:p,webcam:P[e],onWebcamClick:ae,onWebcamChange:de},e)})),Object.keys(J).map((function(e){return Object(m.jsx)(ne,{userId:p,pressedKey:g,game:J[e],onGameChange:ge},e)}))]})};var re=function(e){var t=e.authService,a=e.database,n=e.imageUploader;return Object(m.jsx)("div",{className:u.a.appContainer,children:Object(m.jsx)(o.a,{basename:"/react-realtime-board",children:Object(m.jsxs)(s.c,{children:[Object(m.jsx)(s.a,{path:"/",element:Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:u.a.loginComponent,children:Object(m.jsx)(f,{authService:t})})})}),Object(m.jsx)(s.a,{path:"/board",element:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{authService:t}),Object(m.jsx)(ce,{authService:t,database:a,imageUploader:n})]})})]})})})},ie=(a(65),a(4)),oe=a(5),se=a(50),le=Object(se.a)({apiKey:"AIzaSyBXlICxbE9NAPBxoPajIXf6WXMC8K0l4Ig",authDomain:"buisness-card-maker-e6f06.firebaseapp.com",databaseURL:"https://buisness-card-maker-e6f06-default-rtdb.firebaseio.com",projectId:"buisness-card-maker-e6f06"}),ue=a(27),be=function(){function e(){Object(ie.a)(this,e),this.auth=Object(ue.c)(le)}return Object(oe.a)(e,[{key:"login",value:function(e){var t=this.getProvider(e);if(t)return Object(ue.e)(this.auth,new t);window.alert("this is expected provider. please use another")}},{key:"logout",value:function(){return Object(ue.f)(this.auth)}},{key:"onAuthChange",value:function(e){return Object(ue.d)(this.auth,e)}},{key:"getProvider",value:function(e){switch(e){case"google":return ue.b;case"twitter":return null;case"github":return ue.a;default:throw new Error("not supported provider: ".concat(e))}}}]),e}(),de=a(14),me=function(){function e(){Object(ie.a)(this,e),this.db=Object(de.a)(le)}return Object(oe.a)(e,[{key:"saveMessage",value:function(e){Object(de.e)(Object(de.c)(this.db,"messages/".concat(e.id)),e)}},{key:"saveImage",value:function(e){Object(de.e)(Object(de.c)(this.db,"images/".concat(e.id)),e)}},{key:"saveWebcam",value:function(e){Object(de.e)(Object(de.c)(this.db,"webcam/".concat(e.id)),e)}},{key:"saveGame",value:function(e){Object(de.e)(Object(de.c)(this.db,"games/".concat(e.id)),e)}},{key:"getMessage",value:function(e){Object(de.b)(Object(de.c)(this.db,"messages"),(function(t){var a=t.val();e(a||{})}))}},{key:"getImages",value:function(e){Object(de.b)(Object(de.c)(this.db,"images"),(function(t){var a=t.val();e(a||{})}))}},{key:"getWebcam",value:function(e){Object(de.b)(Object(de.c)(this.db,"webcam"),(function(t){var a=t.val();e(a||{})}))}},{key:"getGames",value:function(e){Object(de.b)(Object(de.c)(this.db,"games"),(function(t){var a=t.val();e(a||{})}))}},{key:"removeMessage",value:function(e){Object(de.d)(Object(de.c)(this.db,"messages/".concat(e)))}},{key:"removeImage",value:function(e){Object(de.d)(Object(de.c)(this.db,"images/".concat(e)))}},{key:"removeWebcam",value:function(e){Object(de.d)(Object(de.c)(this.db,"webcam/".concat(e)))}},{key:"removeGame",value:function(e){Object(de.d)(Object(de.c)(this.db,"games/".concat(e)))}}]),e}(),ge=function(){function e(t,a){Object(ie.a)(this,e),this.cloudName=t,this.presetName=a}return Object(oe.a)(e,[{key:"upload",value:function(){var e=Object(v.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),a.append("upload_preset",this.presetName),e.prev=3,e.next=6,fetch("https://api.cloudinary.com/v1_1/".concat(this.cloudName,"/image/upload"),{method:"POST",body:a});case 6:return n=e.sent,e.next=9,n.json();case 9:return e.abrupt("return",e.sent);case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0);case 15:case"end":return e.stop()}}),e,this,[[3,12]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),je=ge,Oe=new be,fe=new me,pe=new je("drclghimo","rlb0arcu");i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(re,{authService:Oe,database:fe,imageUploader:pe})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.4c67d0ed.chunk.js.map