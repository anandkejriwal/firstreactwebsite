(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),i=a(10),o=a(2);var m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"This is Home Page"))},u=a(21),s=a(13),E=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"todo_style"},r.a.createElement("i",{className:"fa fa-times",onClick:function(){e.onSelect(e.id)}}),r.a.createElement("li",null," ",e.text," ")))},f=a(20),p=a.n(f),d=a(49);a(28);var b=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),i=Object(s.a)(c,2),o=i[0],m=i[1],f=function(e){console.log("deleted"),m((function(t){return t.filter((function(t,a){return a!==e}))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main_div"},r.a.createElement("div",{className:"center_div"},r.a.createElement("h4",{className:"clock_color"},r.a.createElement(p.a,{format:"hh-mm"})),r.a.createElement(d.a,{variant:"contained",style:{fontSize:"10px",color:"red",border:"1px solid black"}},"Primary"),r.a.createElement("br",null),r.a.createElement("h1",null,"ToDo List"),r.a.createElement("input",{type:"text",placeholder:"Add a item",value:a,onChange:function(e){l(e.target.value)}}),r.a.createElement("button",{onClick:function(){m((function(e){return[].concat(Object(u.a)(e),[a])})),l("")}}," + "),r.a.createElement("ol",null,o.map((function(e,t){return r.a.createElement(E,{key:t,id:t,text:e,onSelect:f})}))),r.a.createElement("br",null))))},v=function(e){return r.a.createElement("div",null,e.name)},h=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0];t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",id:"TextInput",onInput:function(){console.log(document.getElementById("TextInput").value)}}),r.a.createElement("button",null,"+"),a.map((function(e){return r.a.createElement(v,{name:e})})))};var g=function(){var e=Object(o.f)().fname;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello ",e),r.a.createElement("h4",null,"How R U?"))};a(34);var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav_div"},r.a.createElement(i.b,{exact:!0,activeClassName:"active",className:"nav",to:"/anandkejriwal.github.io/firstreactwebsite/"},"Home"),r.a.createElement(i.b,{exact:!0,activeClassName:"active",className:"nav",to:"/anandkejriwal.github.io/firstreactwebsite/mainApp"},"Main App"),r.a.createElement(i.b,{exact:!0,activeClassName:"active",className:"nav",to:"/anandkejriwal.github.io/firstreactwebsite/yashApp"},"Yash App"),r.a.createElement(i.b,{exact:!0,activeClassName:"active",className:"nav",to:"/anandkejriwal.github.io/firstreactwebsite/user/new/user/"},"User")))};var j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Sorry Page Not found"))};var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/anandkejriwal.github.io/firstreactwebsite/",component:m}),r.a.createElement(o.a,{path:"/anandkejriwal.github.io/firstreactwebsite/mainapp",component:b}),r.a.createElement(o.a,{path:"/anandkejriwal.github.io/firstreactwebsite/yashapp",component:h}),r.a.createElement(o.a,{path:"/anandkejriwal.github.io/firstreactwebsite/user/:fname",component:g}),r.a.createElement(o.a,{component:j})))};c.a.render(r.a.createElement(i.a,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.48e1df92.chunk.js.map