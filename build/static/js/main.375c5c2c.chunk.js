(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,image:"./assets/images/scooby.png",used:!1},{id:2,image:"./assets/images/shaggy.png",used:!1},{id:3,image:"./assets/images/fred.png",used:!1},{id:4,image:"./assets/images/velma.png",used:!1},{id:5,image:"./assets/images/daphne.png",used:!1},{id:6,image:"./assets/images/scrappy.png",used:!1},{id:7,image:"./assets/images/ghoul.png",used:!1},{id:8,image:"./assets/images/ghost.png",used:!1},{id:9,image:"./assets/images/creeper.png",used:!1},{id:10,image:"./assets/images/zombie.png",used:!1},{id:11,image:"./assets/images/scuba.png",used:!1},{id:12,image:"./assets/images/clown.png",used:!1}]},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),c=a.n(s),i=a(4),o=a(5),l=a(7),m=a(6),g=a(8),d={margin:"0px",paddingTop:15,marginTop:0,paddingBottom:60,color:"white",paddingRight:15,paddingLeft:15},p={margin:"0px",marginTop:0,color:"white",verticalAlign:"center",paddingTop:"45px"},u={boxShadow:"0px 5px 42px #EEEEEE"},h=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:u,className:"blue-grey darken-4 center-align"},r.a.createElement("h3",{style:p},"Clicky Game"),r.a.createElement("p",{style:d},"Click the images, but don't click the same character twice! ")))},E={marginTop:0,marginBottom:0,width:"100vw",zIndex:9999,position:"fixed",top:0,height:70,boxShadow:"0px -20px 30px black",paddingLeft:25,paddingRight:25},f={paddingTop:3,marginTop:0,fontSize:15,height:70},w={paddingLeft:25,paddingRight:25};var x=function(e){return r.a.createElement("nav",null,r.a.createElement("div",{style:E,className:"deep-purple darken-2 nav-wrapper"},r.a.createElement("p",{style:f,className:"brand-logo center-on-med-and-down truncate"},"Current Score: ",e.score," | Top Score: ",e.topScore),r.a.createElement("p",{style:w,className:"right-align hide-on-med-and-down"},r.a.createElement("img",{src:"https://www.firstcomicsnews.com/wp-content/uploads/2016/09/Scooby-Doo-Logo-600x257.png",alt:"scoobydoo",width:"80"}))))},y=(a(15),{borderRadius:8,boxShadow:"1px 1px 71px #E8E8E8",zIndex:0,width:"100%",marginTop:17}),v={marginTop:50,marginBottom:100};var b=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:v},e.characters.map(function(t){return r.a.createElement("div",{className:"col s12 m3",key:t.id},r.a.createElement("img",{alt:"characters",className:"".concat(e.score?"":"wrongAnswer"),onClick:function(){return e.imageClicked(t.id)},style:y,src:t.image}))})))},N=a(1),S={marginTop:100,marginBottom:0};var k=function(){return r.a.createElement("footer",{style:S,className:"page-footer blue-grey darken-4 "},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col l6 s12 center-align"},r.a.createElement("p",{className:"grey-text text-lighten-4"},r.a.createElement("img",{src:"https://www.firstcomicsnews.com/wp-content/uploads/2016/09/Scooby-Doo-Logo-600x257.png",alt:"",width:"200"})),r.a.createElement("p",{className:"grey-text text-lighten-4"},"Made by Alex Bowden using React.js and Materialize.css")),r.a.createElement("div",{className:"col l4 offset-l2 s12  center-align"},r.a.createElement("h5",{className:"white-textn"},"Links"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{className:"grey-text text-lighten-3",href:"#!"},"Github Repository")),r.a.createElement("li",null,r.a.createElement("a",{className:"grey-text text-lighten-3",href:"#!"},"Portfolio")),r.a.createElement("li",null,r.a.createElement("a",{className:"grey-text text-lighten-3",href:"#!"},"React.js")),r.a.createElement("li",null,r.a.createElement("a",{className:"grey-text text-lighten-3",href:"#!"},"Materialize.css")))))),r.a.createElement("div",{className:"footer-copyright"},r.a.createElement("div",{className:"center-align container"},"\xa9 2019 Copyright")))},C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={characters:N,score:0,topScore:0},a.arrangeCharacters=function(e){return e.sort(function(){return.234-Math.random()})},a.imageClicked=function(e){var t=!1,n=a.state.characters.map(function(a){return a.id===e&&(a.used||(a.used=!0,t=!0)),a});t?a.guessedRight(n):a.guessedWrong(n)},a.guessedRight=function(e){var t=a.state,n=t.score,r=t.topScore,s=n+1,c=s>r?s:r;a.setState({characters:a.arrangeCharacters(e),topScore:c,score:s})},a.guessedWrong=function(e){var t=e.map(function(e){return e.used=!1,e});a.setState({characters:a.arrangeCharacters(t),score:0})},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({characters:this.arrangeCharacters(this.state.characters)})}},{key:"render",value:function(){return console.log(N),r.a.createElement("div",{centered:!0,padded:!0},r.a.createElement(x,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement(h,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement(b,{score:this.state.score,characters:this.state.characters,imageClicked:this.imageClicked}),r.a.createElement(k,{score:this.state.score,topScore:this.state.topScore}))}}]),t}(n.Component);var T=function(){return r.a.createElement(C,null)};c.a.render(r.a.createElement(T,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.375c5c2c.chunk.js.map