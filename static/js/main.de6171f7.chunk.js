(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(3),r=n.n(i),l=(n(16),n(6)),d=n(1),o=n(4),s=n.n(o),u=n(5),m=n.n(u),v=function(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)({adviceNum:"",advice:""}),o=Object(d.a)(r,2),u=o[0],v=o[1];Object(c.useEffect)(function(){fetch("https://api.adviceslip.com/advice").then(function(e){return e.json()}).then(function(e){return i(e)})},[u]);return a.a.createElement("main",{className:"container"},a.a.createElement("div",{className:"card"},a.a.createElement("p",{className:"advice"},"Advice #",u.adviceNum?u.adviceNum:n&&n.slip.id),a.a.createElement("h3",{className:"tc"},'"',u.advice?u.advice:n&&n.slip.advice,'"'),a.a.createElement("img",{src:m.a,className:"pattern-divider",alt:"pattern divider"})),a.a.createElement("div",{onClick:function(){v(function(e){return Object(l.a)({},e,{adviceNum:n.slip.id,advice:n.slip.advice})})},className:"dice-icon"},a.a.createElement("img",{src:s.a,alt:"dice icon"})))},p=(n(18),function(){return a.a.createElement("div",null,a.a.createElement(v,null))}),f=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,23)).then(function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)})};n(20);r.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null))),f()},4:function(e,t,n){e.exports=n.p+"static/media/icon-dice.3c1696ee.svg"},5:function(e,t,n){e.exports=n.p+"static/media/pattern-divider-mobile.afbe147e.svg"},7:function(e,t,n){e.exports=n(22)}},[[7,3,2]]]);
//# sourceMappingURL=main.de6171f7.chunk.js.map