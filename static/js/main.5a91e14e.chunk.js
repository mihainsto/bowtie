(this.webpackJsonpbowtie=this.webpackJsonpbowtie||[]).push([[0],{36:function(e,t,a){e.exports=a(61)},41:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=(a(41),a(18)),s=a(3),o=a(14),d=a(20),m=a(4),u=(a(42),function(e){return r.a.createElement("div",{className:"titleCard-card"},r.a.createElement("div",{className:"titleCard-title-text"},e.title))}),p=a(16),b=(a(43),a(44),function(e){var t;return r.a.createElement("div",{className:"cardImage"},r.a.createElement("img",{src:(t=e.image,/^https?:\/\//i.test(t)?t:"https://".concat(t))}))}),g=function(e){return r.a.createElement(p.b,{draggableId:e.cardId,index:e.index,key:e.cardId},(function(t,a){return r.a.createElement("div",Object.assign({},t.draggableProps,t.dragHandleProps,{ref:t.innerRef}),r.a.createElement("div",{className:"card-card"},r.a.createElement("div",{className:"card-content"},e.cardImage?r.a.createElement(b,{image:e.cardImage}):null,r.a.createElement("div",{className:"card-text"},e.cardText))))}))},E=(a(49),function(e){return r.a.createElement("div",{className:"addnewcard-card"},r.a.createElement("div",{className:"addnewcard-text"},e.cardText))}),v=(a(50),r.a.forwardRef((function(e,t){return r.a.createElement("div",{className:"searchgamecard-card"},r.a.createElement("div",{className:"searchgamecard-text"},r.a.createElement("input",{type:"text",placeholder:"Search for a game",className:"searchgamecard-input",onChange:e.onChangeValue,ref:t,onFocus:e.focused,onBlur:e.blured})))}))),f=(a(51),function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=(a[0],a[1]),l=Object(n.useState)("list-visibility-visible"),i=Object(m.a)(l,2),s=i[0],d=i[1],b=Object(n.useState)("list-visibility-hidden"),f=Object(m.a)(b,2),h=f[0],j=f[1],N=Object(n.useRef)(null),O=function(e){c(e.target.value)},x=function(){N.current.focus()},w=function(){d("list-visibility-hidden"),j("list-visibility-visible")},I=function(){d("list-visibility-visible"),j("list-visibility-hidden")};return r.a.createElement(p.b,{draggableId:e.listId,index:e.index,key:e.listId},(function(t){var a;return r.a.createElement("div",Object.assign({className:"list-list-wrapper"},t.draggableProps,{ref:t.innerRef}),r.a.createElement("div",Object.assign({className:"list-title-card"},t.dragHandleProps),r.a.createElement(u,{title:e.title})),r.a.createElement("div",{className:"list-list list-overflow"},r.a.createElement(p.c,{droppableId:e.listId,type:"card"},(function(t){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.droppableProps),e.listCards.map((function(e,t){return r.a.createElement("div",{className:"list-card"},r.a.createElement(g,{cardText:e.cardTitle,cardImage:e.cardImage,cardId:e.cardId,index:t}))})),r.a.createElement("div",{className:"list-padding-emptyadd"}),t.placeholder)})),r.a.createElement("div",Object(o.a)({className:"list-card"},"className",h),r.a.createElement(v,{onChangeValue:O,ref:N,focused:w,blured:I})),r.a.createElement("div",{className:"list-add-new-wrapper"},r.a.createElement("div",(a={className:"list-card"},Object(o.a)(a,"className",s),Object(o.a)(a,"onClick",x),a),r.a.createElement(E,{cardText:"+ Add new game"})))))}))}),h=(a(52),a(53),function(e){e.children;var t=Object(n.useState)(["list-1","list-2","list-3"]),a=Object(m.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)({1:"Metro Exodus",2:"The Last of Us",3:"Doom Eternal",4:"Horizon Zero Dawn",5:"Nier Automata",6:"Until Dawn",7:"Gears 5",8:"Metro Last Light",9:"Life is Strange 2",10:"Control",11:"Star Wars Jedi: Fallen Order",12:"Just Cause 4"}),s=Object(m.a)(i,2),u=s[0],b=(s[1],Object(n.useState)({1:"https://i.imgur.com/SvPjEBF.jpg",2:"https://i.imgur.com/SvPjEBF.jpg",3:"https://i.imgur.com/SvPjEBF.jpg",4:"https://i.imgur.com/SvPjEBF.jpg",5:"https://i.imgur.com/SvPjEBF.jpg"})),g=Object(m.a)(b,2),E=g[0],v=(g[1],Object(n.useState)({"list-1":{cards:["1","2","3"],title:"Completed 2020"},"list-2":{cards:["4","5","6","7"],title:"To play"},"list-3":{cards:["8","9","10","11","12"],title:"Completed 2019"}})),h=Object(m.a)(v,2),j=h[0],N=h[1];return r.a.createElement("div",{className:"layout-wrapper"},r.a.createElement("div",{className:"layout-lists"},r.a.createElement(p.a,{onDragEnd:function(e){var t,a=e.destination,n=e.source,r=e.draggableId,i=e.type;if(a&&(a.droppableId!==n.droppableId||a.index!==n.index)){if("list"===i){var s=c;return s.splice(n.index,1),s.splice(a.index,0,r),void l(s)}var m=n.droppableId,u=a.droppableId,p=j[m],b=j[u];if(p!==b){var g=Array.from(p.cards);g.splice(n.index,1);var E=Object(d.a)({},p,{cards:g}),v=Array.from(b.cards);v.splice(a.index,0,r);var f=Object(d.a)({},b,{cards:v});N(Object(d.a)({},j,(t={},Object(o.a)(t,m,E),Object(o.a)(t,u,f),t)))}else{var h=n.droppableId,O=j[h],x=Array.from(O.cards);x.splice(n.index,1),x.splice(a.index,0,r);var w=Object(d.a)({},O,{cards:x});N(Object(d.a)({},j,Object(o.a)({},h,w)))}}}},r.a.createElement(p.c,{droppableId:"lists",direction:"horizontal",type:"list"},(function(e){return r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),c.map((function(e,t){var a=[],n=j[e],c=n.title;return n.cards.forEach((function(e){a.push({cardTitle:u[e],cardId:e,cardImage:E[e]})})),r.a.createElement(f,{listCards:a,title:c,listId:e,index:t})})),e.placeholder)})))))}),j=(a(54),a(55),a(56),function(e){return r.a.createElement("button",{className:"bluebutton",onClick:e.onClick},r.a.createElement("div",{type:"button",className:"bluebutton-text"},e.text))}),N=function(){return r.a.createElement("nav",{className:"logobuttonsnav"},r.a.createElement("span",{className:"logo"},"Bowtie"),r.a.createElement("div",{className:"register-btn"},r.a.createElement(j,{text:"Register"})),r.a.createElement("div",{className:"loginbtn"},r.a.createElement("div",{className:"loginbtn-text"},"Log In")))},O=function(){return r.a.createElement("div",{className:"LandingPage"},r.a.createElement(N,null))},x=(a(57),a(58),function(){return r.a.createElement("nav",{className:"logonav"},r.a.createElement("span",{className:"logo"},"Bowtie"))}),w=a(6),I=a(79),k=a(81),C=Object(I.a)({root:{"&:hover":{backgroundColor:"transparent"},"&:focus":{outline:"none"}},icon:{borderRadius:0,width:30,height:30,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"rgba(88, 94, 234, 0.8)",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:30,height:30,backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",content:'""'},"input:hover ~ &":{backgroundColor:"rgba(88, 94, 234, 1)"}}}),y=function(e){var t=C();return r.a.createElement(k.a,Object.assign({className:t.root,disableRipple:!0,color:"default",checkedIcon:r.a.createElement("span",{className:Object(w.a)(t.icon,t.checkedIcon)}),icon:r.a.createElement("span",{className:t.icon}),inputProps:{"aria-label":"decorative checkbox"}},e))},S=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(m.a)(l,2),o=s[0],d=s[1],u=Object(n.useState)(!1),p=Object(m.a)(u,2),b=p[0],g=p[1],E=function(e,t){t(e.target.value)};return r.a.createElement("div",{className:"loginpage"},r.a.createElement(x,null),r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("div",{className:"buttons"},r.a.createElement("span",{className:"login-btn"},"Log In"),r.a.createElement(i.b,{to:"/register",style:{textDecoration:"none"}},r.a.createElement("span",{className:"register-btn"},"Register"))),r.a.createElement("div",null,r.a.createElement("input",{type:"email",placeholder:"Email",value:a,onChange:function(e){return E(e,c)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",placeholder:"Password",value:o,onChange:function(e){return E(e,d)}})),r.a.createElement("div",{className:"remember-checkbox"},r.a.createElement(y,{checked:b,onClick:function(e){g(!0!==b)}}),r.a.createElement("span",null,"Remember me")),r.a.createElement("div",{className:"login-submit-btn"},r.a.createElement(j,{text:"Log In",onClick:function(e){console.log("login clicked")}})),r.a.createElement("div",{className:"forgot-pass-text"},"Forgot password? ",r.a.createElement("span",{className:"reset-pass-btn",onClick:function(){console.log("reset pass clicked")}}," Reset ")))))},P=(a(60),function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(m.a)(l,2),o=s[0],d=s[1],u=Object(n.useState)(""),p=Object(m.a)(u,2),b=p[0],g=p[1],E=Object(n.useState)(!1),v=Object(m.a)(E,2),f=(v[0],v[1],function(e,t){t(e.target.value)});return r.a.createElement("div",{className:"registerpage"},r.a.createElement(x,null),r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("div",{className:"buttons"},r.a.createElement(i.b,{to:"/login",style:{textDecoration:"none"}},r.a.createElement("span",{className:"login-btn"},"Log In")),r.a.createElement("span",{className:"register-btn"},"Register")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Username",value:a,onChange:function(e){return f(e,c)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"email",placeholder:"Email",value:o,onChange:function(e){return f(e,d)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",placeholder:"Password",value:b,onChange:function(e){return f(e,g)}})),r.a.createElement("div",{className:"register-submit-btn"},r.a.createElement(j,{text:"Register",onClick:function(e){console.log("register clicked")}})))))});var R=function(){return r.a.createElement(i.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/bowtie",exact:!0,component:h})," ",r.a.createElement(s.a,{path:"/",exact:!0,component:O}),r.a.createElement(s.a,{path:"/board",component:h}),r.a.createElement(s.a,{path:"/login",component:S}),r.a.createElement(s.a,{path:"/register",component:P})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.5a91e14e.chunk.js.map