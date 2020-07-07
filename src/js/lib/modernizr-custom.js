/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-cssgrid_cssgridlegacy-csstransforms3d-flexbox-focuswithin-touchevents-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,a;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],n=S[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),C.push((s?"":"no-")+a.join("-"))}}function o(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?x.className.baseVal=n:x.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(_?"svg":"body"),e.fake=!0),e}function l(e,t,r,s){var o,l,u,f,c="modernizr",d=i("div"),p=a();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=s?s[r]:c+(r+1),d.appendChild(u);return o=i("style"),o.type="text/css",o.id="s"+c,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",f=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),l=t(d,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=f,x.offsetHeight):d.parentNode.removeChild(d),!!l}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?c(s,t||n):s);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,t,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,n,t);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!t&&n.currentStyle&&n.currentStyle[r];return s}function h(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(p(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+p(n[s])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return t}function v(e,n,s,o){function a(){c&&(delete q.style,delete q.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var l=h(e,s);if(!r(l,"undefined"))return l}for(var c,d,p,m,v,y=["modernizr","tspan","samp"];!q.style&&y.length;)c=!0,q.modElem=i(y.shift()),q.style=q.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],v=q.style[m],u(m,"-")&&(m=f(m)),q.style[m]!==t){if(o||r(s,"undefined"))return a(),"pfx"==n?m:!0;try{q.style[m]=s}catch(g){}if(q.style[m]!=v)return a(),"pfx"==n?m:!0}return a(),!1}function y(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+N.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,s,o):(a=(e+" "+j.join(i+" ")+i).split(" "),d(a,n,t))}function g(e,n,r){return y(e,t,t,n,r)}var C=[],S=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){S.push({name:e,fn:n,options:t})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("focuswithin",function(){try{n.querySelector(":focus-within")}catch(e){return!1}return!0});var x=n.documentElement,_="svg"===x.nodeName.toLowerCase(),T=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=T;var b="CSS"in e&&"supports"in e.CSS,z="supportsCSS"in e;Modernizr.addTest("supports",b||z);var P=w.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var r=["@media (",T.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");P(r,function(e){t=9===e.offsetTop})}return t});var E="Moz O ms Webkit",N=w._config.usePrefixes?E.split(" "):[];w._cssomPrefixes=N;var j=w._config.usePrefixes?E.toLowerCase().split(" "):[];w._domPrefixes=j;var k={elem:i("modernizr")};Modernizr._q.push(function(){delete k.elem});var q={style:k.elem.style};Modernizr._q.unshift(function(){delete q.style}),w.testAllProps=y,w.testAllProps=g,Modernizr.addTest("cssanimations",g("animationName","a",!0)),Modernizr.addTest("cssgridlegacy",g("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",g("grid-template-rows","none",!0)),Modernizr.addTest("csstransforms3d",function(){return!!g("perspective","1px",!0)}),Modernizr.addTest('textstroke',function(){return!!g("textStroke","1px",!0)}),Modernizr.addTest("flexbox",g("flexBasis","1px",!0)),s(),o(C),delete w.addTest,delete w.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);
