!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function o(){return document.getElementById("textview").value}function l(e){document.getElementById("textview").value=e}t.d=function(){l(o()+this.value)},t.b=function(){l("")},t.a=function(){let e=o();l(e.substring(0,e.length-1))},t.c=o,t.e=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),l=(n.n(o),n(0)),c=n(3);let r=document.getElementsByClassName("insert");for(let e=0;e<r.length;e++)r[e].onclick=l.d;document.getElementById("clean").onclick=l.b,document.getElementById("back").onclick=l.a,document.getElementById("equal").onclick=c.a},function(e,t){},function(e,t,n){"use strict";t.a=function(){let e=Object(o.c)();e&&Object(o.e)(function(e){let t,n=[{"^":(e,t)=>Math.pow(e,t)},{"*":(e,t)=>e*t,"/":(e,t)=>e/t},{"+":(e,t)=>e+t,"-":(e,t)=>e-t}],o=[];for(let l=0;l<n.length;l++){for(let c=0;c<e.length;c++)n[l][e[c]]?t=n[l][e[c]]:t?(o[o.length-1]=t(o[o.length-1],e[c]),t=null):o.push(e[c]),console.log(o);e=o,o=[]}return e.length>1?(console.log("Error: unable to resolve calculation"),e):e[0]}(function(e){let t=[],n="";for(let o,l=0;l<e.length;l++)o=e.charAt(l),"^*/+-".indexOf(o)>-1?""===n&&"-"===o?n="-":(t.push(parseFloat(n),o),n=""):n+=e.charAt(l);""!==n&&t.push(parseFloat(n));return t}(e)))};var o=n(0)}]);