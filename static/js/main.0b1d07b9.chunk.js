(this.webpackJsonpbowtie=this.webpackJsonpbowtie||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1),c=a.n(i),l=(a(15),a(3)),s=a(4),d=(a(16),function(e){return r.a.createElement("div",{className:"titleCard-card"},r.a.createElement("div",{className:"titleCard-title-text"},e.title))}),o=a(2),u=(a(17),function(e){return r.a.createElement(o.b,{draggableId:e.cardId,index:e.index},(function(t){return r.a.createElement("div",Object.assign({},t.draggableProps,t.dragHandleProps,{ref:t.innerRef}),r.a.createElement("div",{className:"card-card"},r.a.createElement("div",{className:"card-text"},e.cardText)))}))}),m=(a(24),function(e){return r.a.createElement("div",{className:"addnewcard-card"},r.a.createElement("div",{className:"addnewcard-text"},e.cardText))}),f=(a(25),r.a.forwardRef((function(e,t){return r.a.createElement("div",{className:"searchgamecard-card"},r.a.createElement("div",{className:"searchgamecard-text"},r.a.createElement("input",{type:"text",placeholder:"Search for a game",className:"searchgamecard-input",onChange:e.onChangeValue,ref:t,onFocus:e.focused,onBlur:e.blured})))}))),v=(a(26),function(e){var t,a=Object(n.useState)(""),i=Object(s.a)(a,2),c=(i[0],i[1]),v=Object(n.useState)("list-visibility-visible"),E=Object(s.a)(v,2),b=E[0],p=E[1],h=Object(n.useState)("list-visibility-hidden"),g=Object(s.a)(h,2),N=g[0],w=g[1],x=Object(n.useRef)(null);return r.a.createElement("div",{className:"list-list-wrapper"},r.a.createElement("div",{className:"list-title-card"},r.a.createElement(d,{title:e.title})),r.a.createElement("div",{className:"list-list"},r.a.createElement(o.c,{droppableId:e.listId},(function(t){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.droppableProps),e.listCards.map((function(e,t){return r.a.createElement("div",{className:"list-card"},r.a.createElement(u,{cardText:e.cardTitle,cardId:e.cardId,index:t}))})),t.placeholder)})),r.a.createElement("div",Object(l.a)({className:"list-card"},"className",N),r.a.createElement(f,{onChangeValue:function(e){c(e.target.value)},ref:x,focused:function(){p("list-visibility-hidden"),w("list-visibility-visible")},blured:function(){p("list-visibility-visible"),w("list-visibility-hidden")}})),r.a.createElement("div",{className:"list-add-new-wrapper"},r.a.createElement("div",(t={className:"list-card"},Object(l.a)(t,"className",b),Object(l.a)(t,"onClick",(function(){x.current.focus()})),t),r.a.createElement(m,{cardText:"+ Add new game"})))))}),E=(a(27),a(28),{1:"Metro Exodus",2:"The Last of Us",3:"Doom Eternal",4:"Horizon Zero Dawn",5:"Nier Automata",6:"Until Dawn",7:"Gears 5",8:"Metro Last Light",9:"Life is Strange 2",10:"Control",11:"Star Wars Jedi: Fallen Order",12:"Just Cause 4"}),b={1:{cards:["1","2","3"],title:"Completed 2020"},2:{cards:["4","5","6","7"],title:"To play"},3:{cards:["1","2","3","4","5","6","7","8","9","10"],title:"Completed 2019"}},p=["1"],h=function(e){e.children;return r.a.createElement("div",{className:"layout-wrapper"},r.a.createElement("div",{className:"layout-lists"},r.a.createElement(o.a,{onDragEnd:function(e){}},p.map((function(e){var t=[],a=b[e],n=a.title;return a.cards.forEach((function(e){t.push({cardTitle:E[e],cardId:e})})),r.a.createElement(v,{listCards:t,title:n,listId:e})})))))};var g=function(){return r.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.0b1d07b9.chunk.js.map