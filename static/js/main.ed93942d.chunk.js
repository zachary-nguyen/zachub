(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),l=(a(82),a(66)),i=a(34),s=a(35),m=a(153),u=a(154),p=a(155),h=a(44),d=a(157),b=a(142),E=a(12),g=a(70),f=a.n(g),v=a(71),y=a.n(v),w=(a(83),a(158)),k=a(149),N=a(150),O=a(151),j=a(152),C=a(69),x=a.n(C),z=a(14),I=a(51),S=a(143),R=a(144),B=a(146),H=a(145),A=a(147),D=a(159),G=Object(b.a)({card:{height:400,position:"relative"},center:{position:"absolute",textAlign:"center",bottom:0,width:"100%"},top:{height:"90%"},btn:{width:"100%",bottom:0},typography:{margin:8}});function L(e){var t=G(),a=o.a.useState(null),n=Object(i.a)(a,2),r=n[0],c=n[1];var l=Boolean(r),s=l?"simple-popover":void 0;return o.a.createElement(S.a,{className:t.card},o.a.createElement(R.a,{className:t.top},o.a.createElement(H.a,null,o.a.createElement(h.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.repository),o.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},e.description))),o.a.createElement(B.a,{className:t.center},o.a.createElement(A.a,{href:"https://github.com/zachary-nguyen/"+e.repository+"/archive/master.zip",download:!0,className:t.btn,size:"small",color:"primary"},"Download"),o.a.createElement(A.a,{"aria-describedby":s,onClick:function(e){c(e.currentTarget)},className:t.btn,size:"small",color:"primary"},"Clone"),o.a.createElement(D.a,{id:s,open:l,anchorEl:r,onClose:function(){c(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},o.a.createElement(h.a,{className:t.typography}," ",o.a.createElement("b",null,"Use the following Url with Git or Svn to clone: ")," ",o.a.createElement("br",null)," https://github.com/zachary-nguyen/",e.repository,".git"))))}var J=a(148),M=a(67),T=a.n(M);var U=function(){var e=o.a.useState(null),t=Object(i.a)(e,2),a=t[0],n=t[1];return o.a.useEffect(function(){null===a&&T.a.get("https://api.github.com/users/zachary-nguyen/repos").then(function(e){console.log(e.data),n(e.data)}).catch(function(e){console.log(e)})},[]),o.a.createElement("div",{className:"homepage"},o.a.createElement(J.a,{container:!0,alignItems:"stretch",spacing:0},function(){var e=[];if(console.log(a),a){for(var t=0;t<a.length;t++)e.push(o.a.createElement(J.a,{key:a[t].id,item:!0,xs:!0},o.a.createElement(L,{key:a[t].id,repository:a[t].name,description:a[t].description})));return console.log(e),e}return null}()))};var F=function(){return o.a.createElement("div",null,"Hi")};var K=function(){return o.a.createElement("div",null,"Hello")};var P=function(){return o.a.createElement("div",null,"Hi")},W=Object(b.a)(function(e){return{root:{flexGrow:1},background:{background:"#2D2675"},menuButton:{marginRight:e.spacing(2)},title:Object(s.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(s.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(E.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(E.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(s.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:200,"&:focus":{width:200}}),list:{width:250},fullList:{width:"auto"}}});var q=function(){var e=W(),t=o.a.useState({open:!1}),a=Object(i.a)(t,2),n=a[0],r=a[1],c=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&r(Object(l.a)({},n,{open:e}))}};return o.a.createElement(o.a.Fragment,null,o.a.createElement(I.a,null,o.a.createElement("div",{className:e.root},o.a.createElement(m.a,{className:e.background,position:"static"},o.a.createElement(u.a,null,o.a.createElement(p.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",onClick:c(!0)},o.a.createElement(f.a,null)),o.a.createElement(w.a,{open:n.open,onClose:c(!1)},o.a.createElement("div",{className:e.list,role:"presentation",onClick:c(!1),onKeyDown:c(!1)},o.a.createElement(k.a,null,[{"All Repositories":"/"},{Compiler:"/compiler"},{"About Me":"/about"},{"Contact Me":"/contact"}].map(function(e){return o.a.createElement(N.a,{className:"nav",component:I.b,to:Object.values(e)[0],key:Object.values(e)[0]},o.a.createElement(O.a,null,o.a.createElement(x.a,null)),o.a.createElement(j.a,{className:"nav-button",primary:Object.keys(e)[0]}))})))),o.a.createElement(h.a,{align:"left",className:e.title,variant:"h6",noWrap:!0},"Code Hub"),o.a.createElement("div",{className:e.search},o.a.createElement("div",{className:e.searchIcon},o.a.createElement(y.a,null)),o.a.createElement(d.a,{placeholder:"Search for a repository\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}}))))),o.a.createElement(z.c,null,o.a.createElement(z.a,{path:"/",exact:!0,component:U}),o.a.createElement(z.a,{path:"/about",exact:!0,component:K}),o.a.createElement(z.a,{path:"/contact",exact:!0,component:F}),o.a.createElement(z.a,{path:"/compiler",exact:!0,component:P}))))};c.a.render(o.a.createElement(q,null),document.getElementById("root"))},77:function(e,t,a){e.exports=a(106)},82:function(e,t,a){},83:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.ed93942d.chunk.js.map