(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),l=(n(9),n(1));n(10);var i=function(){var e=Object(a.useState)("Loading..."),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("john"),i=Object(l.a)(r,2),s=i[0],u=i[1],m=Object(a.useState)("doe"),d=Object(l.a)(m,2),h=d[0],f=d[1],p=function(e,t){fetch("https://api.icndb.com/jokes/random?firstName=".concat(e,"&lastName=").concat(t)).then(function(e){return e.json()}).then(function(e){console.log(e),c(e.value.joke)})},E=Object(a.useState)(null==localStorage.getItem("Mode")?!!window.matchMedia("(prefers-color-scheme:dark)").matches:JSON.parse(localStorage.getItem("Mode"))),g=Object(l.a)(E,2),b=g[0],v=g[1];return Object(a.useEffect)(function(){localStorage.setItem("Mode",JSON.stringify(b)),p(s,h)},[b]),o.a.createElement("div",{className:b?"App dark-mode":"App"},o.a.createElement("div",{className:"nav"},o.a.createElement("label",{className:"switch"},o.a.createElement("input",{type:"checkbox",checked:b,onChange:function(){return v(!b)}}),o.a.createElement("span",{class:"slider round"}))),o.a.createElement("div",{className:"content"},o.a.createElement("h1",null,b?"Dark Mode is on":"Light Mode is on"),o.a.createElement("h1",null,"JOKE APP"),"First Name:",o.a.createElement("input",{type:"text",value:s,onChange:function(e){return u(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("br",null),"Last Name:",o.a.createElement("input",{type:"text",value:h,onChange:function(e){return f(e.target.value)}}),o.a.createElement("h1",null,"This is Your Jokes"),o.a.createElement("h4",null,n),o.a.createElement("button",{onClick:function(){return p(s,h)}},"Get Another Joke")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[4,1,2]]]);
//# sourceMappingURL=main.d9fa7989.chunk.js.map