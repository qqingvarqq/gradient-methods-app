!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/gradient-methods-app/",r(r.s=10)}([function(t,n,r){"use strict";r.d(n,"a",(function(){return a}));var e=r(6);function o(t){return t.length>=2}var a={srcUrl:r.n(e).a,id:"penaltyFunction1",name:"Penalty function 1",xMin:"(point depends from dimension of the input)",outputMin:"(output depends from dimension of the input)",functionToCall:function(t){if(!o(t))throw new Error("x :".concat(t," should be array with length at least 2"));for(var n=0,r=0,e=0;e<t.length;e++)n+=Math.pow(t[e]-1,2),r+=Math.pow(t[e],2);return r-=.25,(n*=Math.pow(10,-5))+(r*=r)},isValidParams:o}},function(t,n,r){"use strict";r.d(n,"a",(function(){return a}));var e=r(7);function o(t){return t.length>=2}var a={srcUrl:r.n(e).a,id:"penaltyFunction2",name:"Penalty function 2",xMin:"(point depends from dimension of the input)",outputMin:"(output depends from dimension of the input)",functionToCall:function(t){if(!o(t))throw new Error("x :".concat(t," should be array with length at least 2"));for(var n=0,r=0,e=0;e<t.length;e++)n+=Math.pow(t[e]-1,2),r+=Math.pow(t[e],2);return r-=.25,n+(r=Math.pow(10,-3)*r*r)},isValidParams:o}},function(t,n,r){"use strict";r.d(n,"a",(function(){return a}));var e=r(8);function o(t){return t.length>=2&&t.length%2===0}var a={srcUrl:r.n(e).a,id:"rosenbrockFunction",name:"Rosenbrock function",xMin:"[1, 1, 1, 1, 1, 1, ...]",outputMin:"0",functionToCall:function(t){if(!o(t))throw new Error("x :".concat(t," should be array with length at least 2 and length can be divided by 2 without remainder"));for(var n=0,r=0;r<t.length/2;r++)n+=100*Math.pow(t[2*r+1]-t[2*r]*t[2*r],2)+Math.pow(1-t[2*r],2);return n},isValidParams:o}},function(t,n,r){"use strict";r.d(n,"a",(function(){return a}));var e=r(9);function o(t){return t.length>=4&&t.length%4===0}var a={srcUrl:r.n(e).a,id:"powellFunction",name:"Powell function",xMin:"[0, 0, 0, 0, ...]",outputMin:"0",functionToCall:function(t){if(!o(t))throw new Error("x :".concat(t," should be array with length at least 4 length can be divided by 4 without remainder"));for(var n=0,r=0;r<t.length/4;r++)n+=Math.pow(t[4*r]+10*t[4*r+1],2)+5*Math.pow(t[4*r+2]-t[4*r+3],2)+Math.pow(t[4*r+1]-2*t[4*r+2],4)+10*Math.pow(t[4*r]-t[4*r+3],4);return n},isValidParams:o}},function(t,n){},function(t,n,r){"use strict";r.d(n,"functionsToOptimize",(function(){return u}));var e=r(0),o=r(1),a=r(2),i=r(3),u=(r(4),new Map([[e.a.id,e.a],[o.a.id,o.a],[a.a.id,a.a],[i.a.id,i.a]]))},function(t,n,r){t.exports=r.p+"static/media/penalty-function-1.857c236f.svg"},function(t,n,r){t.exports=r.p+"static/media/penalty-function-2.77d1764b.svg"},function(t,n,r){t.exports=r.p+"static/media/rosenbrock-function.dfc14948.svg"},function(t,n,r){t.exports=r.p+"static/media/powell-function.e9525fb4.svg"},function(t,n,r){"use strict";function e(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,n,r,o){for(var a=new Array(n.length),i=0;i<n.length;i++){var u=e(n);u[i]+=o,a[i]=(t(u)-r)/o}return a}function a(t){for(var n=0,r=0;r<t.length;r++)n+=Math.pow(t[r],2);return n=Math.sqrt(n)}function i(t,n,r,e,o){for(var i=u(n,e,o),c=t(i),f=.5*Math.pow(a(o),2);r-c<=f*e&&(e/=1.25)!==e/1.25;)c=t(i=u(n,e,o));return[e,i,c]}function u(t,n,r){for(var e=new Array(t.length),o=0;o<t.length;o++)e[o]=t[o]-n*r[o];return e}function c(t,n,r){if(n.length!==r.length)throw new Error("vectors length mismatch");for(var e=new Array(n.length),o=0;o<n.length;o++)e[o]=t(n[o],r[o]);return e}r.r(n);var f=[.1,.3,.5,.6,.8].map((function(t){return{id:"twoStepDifferenceGradientMethodWithGamma".concat(t),name:"Two-step difference-gradient method with \u03b3 = ".concat(t),method:function(n,r,e){return function(t,n,r,e){for(var u=0,f=n,l=.01,s=.01,h=1e-4,d=1e-4;;){u++;var p=t(f),v=o(t,f,p,h),m=i(t,f,p,l,v);l=m[0];var g=c((function(t,n){return e*t+(1-e)*n}),m[1],f),w=t(g),y=o(t,g,w,d),M=i(t,f,p,s,y);s=M[0];var b=M[1],O=M[2];h=Math.min(h,a(v)),d=Math.min(d,a(y));var T=Math.max.apply(c((function(t,n){return Math.abs(t-n)}),f,b));if(f=b,Math.abs(p-O)<r&&T<r)break}return[f,u]}(n,r,e,t)}}}));var l={id:"differenceGradientMethod",name:"Difference-gradient method",method:function(t,n,r){for(var e=0,u=n,f=.01,l=1e-4;;){e++;var s=t(u),h=o(t,u,s,l),d=i(t,u,s,f,h);f=d[0];var p=d[1],v=d[2];l=Math.min(l,a(h));var m=Math.max.apply(c((function(t,n){return Math.abs(t-n)}),u,p));if(u=p,Math.abs(s-v)<r&&m<r)break}return[u,e]}};function s(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(r.push(i.value),!n||r.length!==n);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return r}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var d=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.fn=void 0,this.callCount=void 0,this.fn=n,this.callCount=0}var n,r,e;return n=t,(r=[{key:"callFn",value:function(t){return this.callCount++,this.fn(t)}},{key:"getCallCount",value:function(){return this.callCount}}])&&h(n.prototype,r),e&&h(n,e),t}();var p,v=new Map([[l.id,l]].concat(e(f.map((function(t){return[t.id,t]}))))),m=r(5);!function(t){t[t.OPTIMIZE_FUNCTION=0]="OPTIMIZE_FUNCTION",t[t.RSULT_OF_OPTIMIZATION=1]="RSULT_OF_OPTIMIZATION"}(p||(p={}));const g=t=>{if(void 0===t||!Array.isArray(t)||0===t.length)return;if(t.shift()!==p.OPTIMIZE_FUNCTION)return;const[n,r,e,o]=t,a=function(t,n,r,e){var o=function(t){for(var n=0;t<1;)t*=10,n++;return n}(e),a=new d(n),i=a.callFn.bind(a),u=performance.now(),c=s(t(i,r,e),2),f=c[0],l=c[1],h=performance.now(),p=a.getCallCount(),v=n(f).toFixed(o);return{xMin:f.map((function(t){return t.toFixed(o)})),outputMin:v,countOfIteration:l,countOfCalculationFX:p,timeInMs:Math.round(h-u)}}(v.get(o).method,m.functionsToOptimize.get(e).functionToCall,n,r);self.postMessage([p.RSULT_OF_OPTIMIZATION,a])};self.addEventListener("message",t=>{const n=t.data;g(n)})}]);
//# sourceMappingURL=16a68a57d6b9d1e4029e.worker.js.map