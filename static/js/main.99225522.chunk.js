(this.webpackJsonpbowtie=this.webpackJsonpbowtie||[]).push([[0],{33:function(e,t,a){},40:function(e,t,a){e.exports=a(65)},45:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},46:function(e,t,a){},47:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(14),l=a.n(r),i=(a(45),a(20)),s=a(5),o=a(18),d=a(19),m=a(4),u=(a(33),a(35)),p=function(e){return c.a.createElement("div",{className:"titleCard-card"},c.a.createElement("div",{className:"titleCard-title-text"},e.title),c.a.createElement("span",{className:"plusIcon",onClick:e.onAddNewCardClick},c.a.createElement(u.a,{size:"40"})))},b=a(16),g=(a(46),a(47),function(e){var t;return c.a.createElement("div",{className:"cardImage"},c.a.createElement("img",{src:(t=e.image,/^https?:\/\//i.test(t)?t:"https://".concat(t))}))}),f=function(e){return c.a.createElement(b.b,{draggableId:e.cardId,index:e.index,key:e.cardId},(function(t,a){return c.a.createElement("div",Object.assign({},t.draggableProps,t.dragHandleProps,{ref:t.innerRef}),c.a.createElement("div",{className:"card-card"},c.a.createElement("div",{className:"card-content"},e.cardImage?c.a.createElement(g,{image:e.cardImage}):null,c.a.createElement("div",{className:"card-text"},e.cardText))))}))},E=(a(52),function(e){var t={height:e.height.toString()+"px",lineHeight:e.height.toString()+"px"};return c.a.createElement("div",{className:"addnewcard-card",style:t,onClick:e.onClick},c.a.createElement("div",{className:"addnewcard-text"},e.cardText))}),v=(a(53),c.a.forwardRef((function(e,t){return c.a.createElement("div",{className:"searchgamecard-card"},c.a.createElement("div",{className:"searchgamecard-text"},c.a.createElement("input",{type:"text",placeholder:"Search for a game",className:"searchgamecard-input",onChange:e.onChangeValue,ref:t,onFocus:e.focused,onBlur:e.blured})))})),a(54),function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=(a[0],a[1],Object(n.useState)("list-visibility-visible")),l=Object(m.a)(r,2),i=(l[0],l[1],Object(n.useState)("list-visibility-hidden")),s=Object(m.a)(i,2);s[0],s[1],Object(n.useRef)(null);return c.a.createElement(b.b,{draggableId:e.listId,index:e.index,key:e.listId},(function(t){return c.a.createElement("div",Object.assign({className:"list-list-wrapper"},t.draggableProps,{ref:t.innerRef}),c.a.createElement("div",Object.assign({className:"list-title-card"},t.dragHandleProps),c.a.createElement(p,{title:e.title,onAddNewCardClick:e.onAddNewCardClick})),c.a.createElement("div",{className:"list-list list-overflow"},c.a.createElement(b.c,{droppableId:e.listId,type:"card"},(function(t){return c.a.createElement("div",Object.assign({ref:t.innerRef},t.droppableProps),e.listCards.map((function(e,t){return c.a.createElement("div",{className:"list-card"},c.a.createElement(f,{cardText:e.cardTitle,cardImage:e.cardImage,cardId:e.cardId,index:t}))})),c.a.createElement("div",{className:"list-padding-emptyadd"}),t.placeholder,c.a.createElement("div",{className:"list-bottom-padding"}))}))))}))}),h=c.a.forwardRef((function(e,t){return c.a.createElement("div",{className:"titleCard-card"},c.a.createElement("div",{className:"titleCard-title-text"},c.a.createElement("input",{type:"text",placeholder:"Enter the title of the list",className:"titleCard-card-input",onChange:e.onChangeValue,ref:t,onFocus:e.focused,onBlur:e.blured,onKeyPress:e.onKeyPress,value:e.value})))})),j=(a(55),a(37)),N=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){e.status&&t.current.focus()}),[e.status]),c.a.createElement("div",{className:"modal-wrapper",onClick:e.modalOutsideClicked,style:{display:e.status?"block":"none"}},c.a.createElement("div",{className:"game-search-modal",onClick:function(e){return e.stopPropagation()}},c.a.createElement("span",{className:"icon"}," ",c.a.createElement(j.a,{size:"40",style:{color:"rgb(238,247,255)"}})," "),c.a.createElement("span",{className:"search-box"},c.a.createElement("input",{type:"text",placeholder:"Search for a game",ref:t}))))},O=(a(56),a(57),function(e){e.children;var t=Object(n.useState)(["list-1","list-2","list-3"]),a=Object(m.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)({1:"Metro Exodus",2:"The Last of Us",3:"Doom Eternal",4:"Horizon Zero Dawn",5:"Nier Automata",6:"Until Dawn",7:"Gears 5",8:"Metro Last Light",9:"Life is Strange 2",10:"Control",11:"Star Wars Jedi: Fallen Order",12:"Just Cause 4"}),s=Object(m.a)(i,2),u=s[0],p=(s[1],Object(n.useState)({1:"https://i.imgur.com/SvPjEBF.jpg",2:"https://i.imgur.com/SvPjEBF.jpg",3:"https://i.imgur.com/SvPjEBF.jpg",4:"https://i.imgur.com/SvPjEBF.jpg",5:"https://i.imgur.com/SvPjEBF.jpg"})),g=Object(m.a)(p,2),f=g[0],j=(g[1],Object(n.useState)({"list-1":{cards:["1","2","3"],title:"Completed 2020"},"list-2":{cards:["4","5","6","7"],title:"To play"},"list-3":{cards:["8","9","10","11","12"],title:"Completed 2019"}})),O=Object(m.a)(j,2),x=O[0],C=O[1],w=Object(n.useState)("visibility-visible"),k=Object(m.a)(w,2),y=k[0],I=k[1],S=Object(n.useState)("visibility-hidden"),P=Object(m.a)(S,2),R=P[0],B=P[1],A=Object(n.useState)(""),L=Object(m.a)(A,2),F=L[0],T=L[1],D=Object(n.useRef)(null),z=function(){D.current.focus(),window.scrollTo(9999999,0)},H=function(e){T(e.target.value)},J=Object(n.useState)(!1),M=Object(m.a)(J,2),K=M[0],U=M[1],V=function(){I("visibility-hidden"),B("visibility-visible"),U(!0)},W=function(){if(I("visibility-visible"),B("visibility-hidden"),""!=F){var e=Object.keys(x).sort(),t=e[e.length-1],a="list-"+(parseInt(t.replace("list-",""))+1).toString();C(Object(d.a)({},x,Object(o.a)({},a,{cards:[],title:F})));var n=r;n.push(a),l(n),console.log(D.value),T("")}},G=function(e){"Enter"===e.key&&!0===K&&(W(),U(!1))},Z=Object(n.useState)(!0),$=Object(m.a)(Z,2),q=$[0],Q=$[1];return c.a.createElement("div",{className:"layout-wrapper"},c.a.createElement(N,{modalOutsideClicked:function(e){Q(!1),e.stopPropagation()},status:q}),c.a.createElement("div",{className:"layout-lists"},c.a.createElement(b.a,{onDragEnd:function(e){var t,a=e.destination,n=e.source,c=e.draggableId,i=e.type;if(a&&(a.droppableId!==n.droppableId||a.index!==n.index)){if("list"===i){var s=r;return s.splice(n.index,1),s.splice(a.index,0,c),void l(s)}var m=n.droppableId,u=a.droppableId,p=x[m],b=x[u];if(p!==b){var g=Array.from(p.cards);g.splice(n.index,1);var f=Object(d.a)({},p,{cards:g}),E=Array.from(b.cards);E.splice(a.index,0,c);var v=Object(d.a)({},b,{cards:E});C(Object(d.a)({},x,(t={},Object(o.a)(t,m,f),Object(o.a)(t,u,v),t)))}else{var h=n.droppableId,j=x[h],N=Array.from(j.cards);N.splice(n.index,1),N.splice(a.index,0,c);var O=Object(d.a)({},j,{cards:N});C(Object(d.a)({},x,Object(o.a)({},h,O)))}}}},c.a.createElement(b.c,{droppableId:"lists",direction:"horizontal",type:"list"},(function(e){return c.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,className:"lists-wrapper"}),r.map((function(e,t){var a=[],n=x[e],r=n.title;return n.cards.forEach((function(e){a.push({cardTitle:u[e],cardId:e,cardImage:f[e]})})),c.a.createElement(v,{listCards:a,title:r,listId:e,index:t,onAddNewCardClick:function(){Q(!0)}})})),e.placeholder,c.a.createElement("div",{className:"addnew-list-card "+R},c.a.createElement(h,{onChangeValue:H,ref:D,focused:V,blured:W,onKeyPress:G,value:F})),c.a.createElement("div",{className:"addnew-list-card "+y},c.a.createElement(E,{cardText:"+ Add new list",height:60,onClick:z})))})))))}),x=(a(58),a(59),a(60),function(e){return c.a.createElement("button",{className:"bluebutton",onClick:e.onClick},c.a.createElement("div",{type:"button",className:"bluebutton-text"},e.text))}),C=function(){return c.a.createElement("nav",{className:"logobuttonsnav"},c.a.createElement("span",{className:"logo"},"Bowtie"),c.a.createElement("div",{className:"register-btn"},c.a.createElement(x,{text:"Register"})),c.a.createElement("div",{className:"loginbtn"},c.a.createElement("div",{className:"loginbtn-text"},"Log In")))},w=function(){return c.a.createElement("div",{className:"LandingPage"},c.a.createElement(C,null))},k=(a(61),a(62),function(){return c.a.createElement("nav",{className:"logonav"},c.a.createElement("span",{className:"logo"},"Bowtie"))}),y=a(7),I=a(83),S=a(85),P=Object(I.a)({root:{"&:hover":{backgroundColor:"transparent"},"&:focus":{outline:"none"}},icon:{borderRadius:0,width:30,height:30,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"rgba(88, 94, 234, 0.8)",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:30,height:30,backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",content:'""'},"input:hover ~ &":{backgroundColor:"rgba(88, 94, 234, 1)"}}}),R=function(e){var t=P();return c.a.createElement(S.a,Object.assign({className:t.root,disableRipple:!0,color:"default",checkedIcon:c.a.createElement("span",{className:Object(y.a)(t.icon,t.checkedIcon)}),icon:c.a.createElement("span",{className:t.icon}),inputProps:{"aria-label":"decorative checkbox"}},e))},B=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),s=Object(m.a)(l,2),o=s[0],d=s[1],u=Object(n.useState)(!1),p=Object(m.a)(u,2),b=p[0],g=p[1],f=function(e,t){t(e.target.value)};return c.a.createElement("div",{className:"loginpage"},c.a.createElement(k,null),c.a.createElement("div",{className:"form-container"},c.a.createElement("div",{className:"form-wrapper"},c.a.createElement("div",{className:"buttons"},c.a.createElement("span",{className:"login-btn"},"Log In"),c.a.createElement(i.b,{to:"/register",style:{textDecoration:"none"}},c.a.createElement("span",{className:"register-btn"},"Register"))),c.a.createElement("div",null,c.a.createElement("input",{type:"email",placeholder:"Email",value:a,onChange:function(e){return f(e,r)}})),c.a.createElement("div",null,c.a.createElement("input",{type:"password",placeholder:"Password",value:o,onChange:function(e){return f(e,d)}})),c.a.createElement("div",{className:"remember-checkbox"},c.a.createElement(R,{checked:b,onClick:function(e){g(!0!==b)}}),c.a.createElement("span",null,"Remember me")),c.a.createElement("div",{className:"login-submit-btn"},c.a.createElement(x,{text:"Log In",onClick:function(e){console.log("login clicked")}})),c.a.createElement("div",{className:"forgot-pass-text"},"Forgot password? ",c.a.createElement("span",{className:"reset-pass-btn",onClick:function(){console.log("reset pass clicked")}}," Reset ")))))},A=(a(64),function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),s=Object(m.a)(l,2),o=s[0],d=s[1],u=Object(n.useState)(""),p=Object(m.a)(u,2),b=p[0],g=p[1],f=Object(n.useState)(!1),E=Object(m.a)(f,2),v=(E[0],E[1],function(e,t){t(e.target.value)});return c.a.createElement("div",{className:"registerpage"},c.a.createElement(k,null),c.a.createElement("div",{className:"form-container"},c.a.createElement("div",{className:"form-wrapper"},c.a.createElement("div",{className:"buttons"},c.a.createElement(i.b,{to:"/login",style:{textDecoration:"none"}},c.a.createElement("span",{className:"login-btn"},"Log In")),c.a.createElement("span",{className:"register-btn"},"Register")),c.a.createElement("div",null,c.a.createElement("input",{type:"text",placeholder:"Username",value:a,onChange:function(e){return v(e,r)}})),c.a.createElement("div",null,c.a.createElement("input",{type:"email",placeholder:"Email",value:o,onChange:function(e){return v(e,d)}})),c.a.createElement("div",null,c.a.createElement("input",{type:"password",placeholder:"Password",value:b,onChange:function(e){return v(e,g)}})),c.a.createElement("div",{className:"register-submit-btn"},c.a.createElement(x,{text:"Register",onClick:function(e){console.log("register clicked")}})))))});var L=function(){return c.a.createElement(i.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/bowtie",exact:!0,component:O})," ",c.a.createElement(s.a,{path:"/",exact:!0,component:w}),c.a.createElement(s.a,{path:"/board",component:O}),c.a.createElement(s.a,{path:"/login",component:B}),c.a.createElement(s.a,{path:"/register",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.99225522.chunk.js.map