(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(t,e,a){t.exports=a(379)},183:function(t,e,a){},184:function(t,e,a){},218:function(t,e){},220:function(t,e){},255:function(t,e){},256:function(t,e){},376:function(t,e){function a(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id=376},379:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),s=a(11),i=a.n(s),r=(a(183),a(65)),c=a(48),l=a(49),u=a(426),h=a(427),m=a(428),p=a(73),g=a(430),d=a(415),f=a(16),b=a(169),v=a.n(b),w=a(170),y=a.n(w),E=(a(184),a(431)),O=a(422),k=a(423),j=a(424),S=a(425),I=a(168),_=a.n(I),T=a(17),R=a(101),D=a(416),H=a(417),N=a(419),A=a(418),x=a(420),C=a(432),z=Object(d.a)({card:{height:400,position:"relative",margin:"20px",minWidth:"400px"},center:{position:"absolute",textAlign:"center",bottom:0,width:"100%"},top:{height:"90%"},btn:{width:"100%",bottom:0},typography:{margin:8}});function M(t){var e=z(),a=o.a.useState(null),n=Object(c.a)(a,2),s=n[0],i=n[1];var r=Boolean(s),l=r?"simple-popover":void 0;return o.a.createElement(D.a,{className:e.card},o.a.createElement(H.a,{href:"https:/github.com/zachary-nguyen/"+t.repository,className:e.top},o.a.createElement(A.a,null,o.a.createElement(p.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.repository),o.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},t.description))),o.a.createElement(N.a,{className:e.center},o.a.createElement(x.a,{href:"https://github.com/zachary-nguyen/"+t.repository+"/archive/master.zip",download:!0,className:e.btn,size:"small",color:"primary"},"Download"),o.a.createElement(x.a,{"aria-describedby":l,onClick:function(t){i(t.currentTarget)},className:e.btn,size:"small",color:"primary"},"Clone"),o.a.createElement(C.a,{id:l,open:r,anchorEl:s,onClose:function(){i(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},o.a.createElement(p.a,{className:e.typography}," ",o.a.createElement("b",null,"Use the following Url with Git or Svn to clone: ")," ",o.a.createElement("br",null)," https://github.com/zachary-nguyen/",t.repository,".git"))))}var B=a(421),P=a(164),G=a.n(P);var U=function(){var t=o.a.useState(null),e=Object(c.a)(t,2),a=e[0],n=e[1];return o.a.useEffect(function(){null===a&&G.a.get("https://api.github.com/users/zachary-nguyen/repos").then(function(t){console.log(t.data),n(t.data)}).catch(function(t){console.log(t)})},[]),o.a.createElement("div",{className:"homepage"},o.a.createElement(B.a,{container:!0,alignItems:"stretch",spacing:0,className:"grid-background"},function(){var t=[];if(a){for(var e=0;e<a.length;e++)t.push(o.a.createElement(B.a,{key:a[e].id,item:!0,xs:!0},o.a.createElement(M,{key:a[e].id,repository:a[e].name,description:a[e].description})));return console.log(t),t}return null}()))};var V=function(){return o.a.createElement("div",null,"Hi")};var L=function(){return o.a.createElement("div",null,o.a.createElement("img",{src:"./codehublogo.png",align:"middle",alt:"logo",height:"100%",width:"50%"}))};var W=function(){return o.a.createElement("div",null,"Hi")},F=a(165),J=a(50),K=a(172),q=a(166),Q=a(171),X=(a(204),{STOP:"STOP",START:"START",PAUSE:"PAUSE",OVER:"OVER"}),Y=5,Z=function(t){function e(t){var a;Object(F.a)(this,e),(a=Object(K.a)(this,Object(q.a)(e).call(this,t))).start=function(){a.status!==X.START&&(a.status=X.START,a.__setTimer(),a.jump())},a.pause=function(){a.status===X.START&&(a.status=X.PAUSE,a.__clearTimer())},a.goOn=function(){a.status===X.PAUSE&&(a.status=X.START,a.__setTimer())},a.stop=function(){a.status!==X.OVER&&(a.status=X.OVER,a.playerStatus=3,a.__clearTimer(),a.__draw(),a.__clear())},a.restart=function(){a.obstacles=a.__obstaclesGenerate(),a.start()},a.jump=function(){a.jumpHeight>2||(a.jumpDelta=Y,a.jumpHeight=Y)};var n=0,o=function(){3===++n&&a.__draw()},s=new Image,i=new Image,c=new Image,l=new Image,u=new Image,h=new Image,m=new Image;return s.onload=o,i.onload=o,c.onload=o,s.src="./img/cloud.png",i.src="./img/ground.png",c.src="./img/dinosaur.png",l.src="./img/dinosaur_left.png",u.src="./img/dinosaur_right.png",h.src="./img/dinosaur_die.png",m.src="./img/obstacle.png",a.options=Object(r.a)({fps:60,skySpeed:40,groundSpeed:100,skyImage:s,groundImage:i,playerImage:[c,l,u,h],obstacleImage:m,skyOffset:0,groundOffset:0},a.props.options),a.status=X.STOP,a.timer=null,a.score=0,a.highScore=window.localStorage&&window.localStorage.highScore||0,a.jumpHeight=0,a.jumpDelta=0,a.obstaclesBase=1,a.obstacles=a.__obstaclesGenerate(),a.currentDistance=0,a.playerStatus=0,a}return Object(Q.a)(e,t),Object(J.a)(e,[{key:"componentDidMount",value:function(){var t=this;window.innerWidth>=680&&(this.canvas.width=680);var e=function(){switch(t.status){case X.STOP:t.start();break;case X.START:t.jump();break;case X.OVER:t.restart()}};window.onkeypress=function(t){" "===t.key&&e()},this.canvas.parentNode.onclick=e,window.onblur=this.pause,window.onfocus=this.goOn}},{key:"componentWillUnmount",value:function(){window.onblur=null,window.onfocus=null}},{key:"__draw",value:function(){if(this.canvas){var t=this.options,e=Math.min(200,Math.floor(this.score/100)),a=(t.groundSpeed+e)/t.fps,n=t.skySpeed/t.fps,o=t.obstacleImage.width,s=t.playerImage[0].width,i=t.playerImage[0].height,r=this.canvas.getContext("2d"),c=this.canvas,l=c.width,u=c.height;r.clearRect(0,0,l,u),r.save(),this.options.skyOffset=this.options.skyOffset<l?this.options.skyOffset+n:this.options.skyOffset-l,r.translate(-this.options.skyOffset,0),r.drawImage(this.options.skyImage,0,0),r.drawImage(this.options.skyImage,this.options.skyImage.width,0),this.options.groundOffset=this.options.groundOffset<l?this.options.groundOffset+a:this.options.groundOffset-l,r.translate(this.options.skyOffset-this.options.groundOffset,0),r.drawImage(this.options.groundImage,0,76),r.drawImage(this.options.groundImage,this.options.groundImage.width,76),r.translate(this.options.groundOffset,0),r.drawImage(this.options.playerImage[this.playerStatus],80,64-this.jumpHeight),this.jumpHeight=this.jumpHeight+this.jumpDelta,this.jumpHeight<=1?(this.jumpHeight=0,this.jumpDelta=0):this.jumpHeight<60&&this.jumpDelta>0?this.jumpDelta=this.jumpHeight*this.jumpHeight*.001033-.137*this.jumpHeight+5:this.jumpHeight<60&&this.jumpDelta<0||this.jumpHeight>=60&&(this.jumpDelta=-Y/2.7);var h=(this.status===X.OVER?"GAME OVER  ":"")+Math.floor(this.score);r.font="Bold 18px Arial",r.textAlign="right",r.fillStyle="#595959",r.fillText(h,l-30,23),this.status===X.START&&(this.score+=.5,this.score>this.highScore&&(this.highScore=this.score,window.localStorage.highScore=this.score),this.currentDistance+=a,this.score%4===0&&(this.playerStatus=(this.playerStatus+1)%3)),this.highScore&&(r.textAlign="left",r.fillText("HIGH  "+Math.floor(this.highScore),30,23));for(var m=0,p=0;p<this.obstacles.length&&this.currentDistance>=this.obstacles[p].distance;++p){var g=l-(this.currentDistance-this.obstacles[p].distance+a);g>0?r.drawImage(t.obstacleImage,g,84):++m}for(var d=0;d<m;++d)this.obstacles.shift();this.obstacles.length<5&&(this.obstacles=this.obstacles.concat(this.__obstaclesGenerate()));var f=l-(this.currentDistance-this.obstacles[0].distance+a);90-o<f&&f<60+s&&64-this.jumpHeight+i>84&&this.stop(),r.restore()}}},{key:"__obstaclesGenerate",value:function(){for(var t=[],e=0;e<10;++e){var a=Math.floor(100*Math.random())%60;a=(10*Math.random()%2===0?1:-1)*a,t.push({distance:a+200*this.obstaclesBase}),++this.obstaclesBase}return t}},{key:"__setTimer",value:function(){var t=this;this.timer=setInterval(function(){return t.__draw()},1e3/this.options.fps)}},{key:"__clearTimer",value:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},{key:"__clear",value:function(){this.score=0,this.jumpHeight=0,this.currentDistance=0,this.obstacles=[],this.obstaclesBase=1,this.playerStatus=0}},{key:"render",value:function(){var t=this;return o.a.createElement("canvas",{id:"canvas",ref:function(e){return t.canvas=e},height:160,width:340})}}]),e}(o.a.Component),$={fps:120,skySpeed:50,groundSpeed:200};function tt(){return o.a.createElement("div",null,o.a.createElement("p",null," ERROR 404 "),o.a.createElement("p",null," Oh no! Page not found !"),o.a.createElement(Z,{options:$}))}var et=a(20),at=Object(et.a)(),nt=Object(d.a)(function(t){return{root:{flexGrow:1},background:{background:"#2D2675"},menuButton:{marginRight:t.spacing(2)},title:Object(l.a)({flexGrow:1,display:"none"},t.breakpoints.up("sm"),{display:"block"}),search:Object(l.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(f.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(f.b)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"}),searchIcon:{width:t.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:t.spacing(1,1,1,7),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:200,"&:focus":{width:200}}),list:{width:250},fullList:{width:"auto"}}});var ot=function(){var t=nt(),e=o.a.useState({open:!1}),a=Object(c.a)(e,2),n=a[0],s=a[1],i=function(t){return function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&s(Object(r.a)({},n,{open:t}))}};return o.a.createElement(o.a.Fragment,null,o.a.createElement(R.a,{history:at,basename:"/zachub"},o.a.createElement("div",{className:t.root},o.a.createElement(u.a,{className:t.background,position:"static"},o.a.createElement(h.a,null,o.a.createElement(m.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",onClick:i(!0)},o.a.createElement(v.a,null)),o.a.createElement(E.a,{open:n.open,onClose:i(!1)},o.a.createElement("div",{className:t.list,role:"presentation",onClick:i(!1),onKeyDown:i(!1)},o.a.createElement(O.a,null,[{"All Repositories":"zachub/"},{Compiler:"zachub/compiler"},{"About Me":"/about"},{"Contact Me":"/contact"}].map(function(t){return o.a.createElement(k.a,{className:"nav",component:R.b,to:Object.values(t)[0],key:Object.values(t)[0]},o.a.createElement(j.a,null,o.a.createElement(_.a,null)),o.a.createElement(S.a,{className:"nav-button",primary:Object.keys(t)[0]}))})))),o.a.createElement(p.a,{align:"left",className:t.title,variant:"h6",noWrap:!0},o.a.createElement("img",{src:"codehublogo.png",alt:"logo",height:"50",width:"10%"})),o.a.createElement("div",{className:t.search},o.a.createElement("div",{className:t.searchIcon},o.a.createElement(y.a,null)),o.a.createElement(g.a,{placeholder:"Search for a repository\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}}))))),o.a.createElement(T.c,null,o.a.createElement(T.a,{path:"*/",exact:!0,component:U}),o.a.createElement(T.a,{path:"/about",component:L}),o.a.createElement(T.a,{path:"/contact",component:V}),o.a.createElement(T.a,{path:"/compiler",component:W}),o.a.createElement(T.a,{component:tt}))))};i.a.render(o.a.createElement(ot,null),document.getElementById("root"))}},[[178,1,2]]]);
//# sourceMappingURL=main.bc300878.chunk.js.map