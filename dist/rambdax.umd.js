!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.rambdax={})}(this,function(n){function t(n){return function(t){for(var r=[],e=arguments.length-1;e-- >0;)r[e]=arguments[e+1];var u=0;return n.apply(null,[function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return t.apply(null,n.concat([u++]))}].concat(r))}}function r(n,t){if(1===arguments.length)return function(t){return r(n,t)};if(void 0===t)return[];if(void 0===t.length)return function(n,t){var r={};for(var e in t)n(t[e],e)&&(r[e]=t[e]);return r}(n,t);for(var e=-1,u=0,i=t.length,o=[];++e<i;){var c=t[e];n(c)&&(o[u++]=c)}return o}function e(n,t){return 1===arguments.length?function(t){return e(n,t)}:r(n,t).length===t.length}function u(n,t){if(1===arguments.length)return function(t){return u(n,t)};for(var r=0;r<t.length;){if(n(t[r]))return!0;r++}return!1}function i(n,t){return void 0===t&&(t=[]),function(){for(var r,e=[],u=arguments.length;u--;)e[u]=arguments[u];return(r=t.concat(e)).length>=n.length?n.apply(void 0,r):i(n,r)}}var o=i(function(n,t,r){var e;return Object.assign({},r,((e={})[n]=t,e))});function c(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];var e=n.slice();if(e.length>0){for(var u=e.pop().apply(void 0,t);e.length>0;)u=e.pop()(u);return u}}}function f(n){var t=typeof n;if(null===n)return"Null";if(void 0===n)return"Undefined";if("boolean"===t)return"Boolean";if("number"===t)return"Number";if("string"===t)return"String";if(Array.isArray(n))return"Array";if(n instanceof RegExp)return"RegExp";var r=n.toString();return r.startsWith("async")?"Async":"[object Promise]"===r?"Promise":r.includes("function")||r.includes("=>")?"Function":"Object"}function a(n,t){if(1===arguments.length)return function(t){return a(n,t)};if(n===t)return!0;var r=f(n);if(r!==f(t))return!1;if("Array"===r){var e=Array.from(n),u=Array.from(t);if(e.toString()!==u.toString())return!1;var i=!0;return e.forEach(function(n,t){i&&(n===u[t]||a(n,u[t])||(i=!1))}),i}if("Object"===r){var o=Object.keys(n);if(o.length!==Object.keys(t).length)return!1;var c=!0;return o.forEach(function(r){if(c){var e=n[r],u=t[r];e===u||a(e,u)||(c=!1)}}),c}return!1}function l(n,t){if(1===arguments.length)return function(t){return l(n,t)};for(var r=-1,e=!1;++r<t.length&&!e;)a(t[r],n)&&(e=!0);return e}function h(n,t){return 1===arguments.length?function(t){return h(n,t)}:void 0===t||null===t||!0===Number.isNaN(t)?n:t}function s(n,t){return 1===arguments.length?function(t){return s(n,t)}:t.slice(n)}function v(n,t,r){var e=-1,u=n.length;(r=r>u?u:r)<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(u);++e<u;)i[e]=n[e+t];return i}function p(n,t){if(1===arguments.length)return function(t){return p(n,t)};var r=t.length,e=n>r?r:n;return"string"==typeof t?t.slice(r-e):v(t,e=r-e,r)}function g(n,t){if(1===arguments.length)return function(t){return g(n,t)};if(void 0===t)return[];if(void 0===t.length)return function(n,t){var r={};for(var e in t)r[e]=n(t[e],e);return r}(n,t);for(var r=-1,e=t.length,u=Array(e);++r<e;)u[r]=n(t[r]);return u}function d(n){return"string"==typeof n?n.slice(0,-1):n.length?v(n,0,-1):[]}function y(n){return"string"==typeof n?n[n.length-1]||"":n[n.length-1]}function m(n){return n.length}function b(n,t){return 1===arguments.length?function(t){return b(n,t)}:Object.assign({},n||{},t||{})}var _=i(function(n,t,r){return n(r)<n(t)?r:t});function j(n,t){if(1===arguments.length)return function(t){return j(n,t)};if(null!==t&&void 0!==t){var r="string"==typeof n?n=n.split(","):n,e={};for(var u in t)r.includes(u)||(e[u]=t[u]);return e}}function w(n,t){if(1===arguments.length)return function(t){return w(n,t)};if(null!==t&&void 0!==t){for(var r=t,e=0,u="string"==typeof n?n.split("."):n;e<u.length;){if(null===r||void 0===r)return;r=r[u[e]],e++}return r}}var O=i(function(n,t,r){return h(n,w(t,r))});function A(n,t){if(1===arguments.length)return function(t){return A(n,t)};for(var r=[],e=n;e<t;e++)r.push(e);return r}function P(n,t,r){return void 0===t?function(t,r){return P(n,t,r)}:void 0===r?function(r){return P(n,t,r)}:r.reduce(n,t)}function S(n,t,r){return void 0===t?function(t,r){return S(n,t,r)}:void 0===r?function(r){return S(n,t,r)}:r.replace(n,t)}function E(n,t){return 1===arguments.length?function(t){return E(n,t)}:t.concat().sort(n)}function k(n,t){return 1===arguments.length?function(t){return k(n,t)}:t.split(n)}function x(n,t){return 1===arguments.length?function(t){return x(n,t)}:"string"==typeof t?t.slice(0,n):v(t,0,n)}function R(n,t){return 1===arguments.length?function(t){return R(n,t)}:-1!==t.search(n)}function B(n){return n.toLowerCase()}var T="Expected a function",M="__lodash_hash_undefined__",F=1/0,N=9007199254740991,I="[object Function]",$="[object GeneratorFunction]",C="[object Symbol]",L=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,D=/^\w*$/,W=/^\./,U=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,V=/\\(\\)?/g,q=/^\[object .+?Constructor\]$/,z=/^(?:0|[1-9]\d*)$/,J="object"==typeof global&&global&&global.Object===Object&&global,H="object"==typeof self&&self&&self.Object===Object&&self,Y=J||H||Function("return this")();var X,G=Array.prototype,Z=Function.prototype,K=Object.prototype,Q=Y["__core-js_shared__"],nn=(X=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+X:"",tn=Z.toString,rn=K.hasOwnProperty,en=K.toString,un=RegExp("^"+tn.call(rn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),on=Y.Symbol,cn=G.splice,fn=_n(Y,"Map"),an=_n(Object,"create"),ln=on?on.prototype:void 0,hn=ln?ln.toString:void 0;function sn(n){var t=-1,r=n?n.length:0;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function vn(n){var t=-1,r=n?n.length:0;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function pn(n){var t=-1,r=n?n.length:0;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function gn(n,t,r){var e=n[t];rn.call(n,t)&&Pn(e,r)&&(void 0!==r||t in n)||(n[t]=r)}function dn(n,t){for(var r=n.length;r--;)if(Pn(n[r][0],t))return r;return-1}function yn(n){return!(!En(n)||(t=n,Boolean(nn)&&nn in t))&&(function(n){var t=En(n)?en.call(n):"";return t==I||t==$}(n)||function(n){var t=!1;if(null!=n&&"function"!=typeof n.toString)try{t=Boolean(String(n))}catch(n){}return t}(n)?un:q).test(function(n){if(null!=n){try{return tn.call(n)}catch(n){}try{return String(n)}catch(n){}}return""}(n));var t}function mn(n,t,r,e){if(!En(n))return n;for(var u=-1,i=(t=function(n,t){if(Sn(n))return!1;var r=typeof n;if("number"==r||"symbol"==r||"boolean"==r||null==n||kn(n))return!0;return D.test(n)||!L.test(n)||null!=t&&n in Object(t)}(t,n)?[t]:function(n){return Sn(n)?n:wn(n)}(t)).length,o=i-1,c=n;null!=c&&++u<i;){var f=On(t[u]),a=r;if(u!=o){var l=c[f];void 0===(a=e?e(l,f,c):void 0)&&(a=En(l)?l:jn(t[u+1])?[]:{})}gn(c,f,a),c=c[f]}return n}function bn(n,t){var r,e,u=n.__data__;return("string"==(e=typeof(r=t))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r)?u["string"==typeof t?"string":"hash"]:u.map}function _n(n,t){var r=function(n,t){return null==n?void 0:n[t]}(n,t);return yn(r)?r:void 0}function jn(n,t){return t=null==t?N:t,Boolean(t)&&("number"==typeof n||z.test(n))&&n>-1&&n%1==0&&n<t}sn.prototype.clear=function(){this.__data__=an?an(null):{}},sn.prototype.delete=function(n){return this.has(n)&&delete this.__data__[n]},sn.prototype.get=function(n){var t=this.__data__;if(an){var r=t[n];return r===M?void 0:r}return rn.call(t,n)?t[n]:void 0},sn.prototype.has=function(n){var t=this.__data__;return an?void 0!==t[n]:rn.call(t,n)},sn.prototype.set=function(n,t){return this.__data__[n]=an&&void 0===t?M:t,this},vn.prototype.clear=function(){this.__data__=[]},vn.prototype.delete=function(n){var t=this.__data__,r=dn(t,n);return!(r<0||(r==t.length-1?t.pop():cn.call(t,r,1),0))},vn.prototype.get=function(n){var t=this.__data__,r=dn(t,n);return r<0?void 0:t[r][1]},vn.prototype.has=function(n){return dn(this.__data__,n)>-1},vn.prototype.set=function(n,t){var r=this.__data__,e=dn(r,n);return e<0?r.push([n,t]):r[e][1]=t,this},pn.prototype.clear=function(){this.__data__={hash:new sn,map:new(fn||vn),string:new sn}},pn.prototype.delete=function(n){return bn(this,n).delete(n)},pn.prototype.get=function(n){return bn(this,n).get(n)},pn.prototype.has=function(n){return bn(this,n).has(n)},pn.prototype.set=function(n,t){return bn(this,n).set(n,t),this};var wn=An(function(n){var t;n=null==(t=n)?"":function(n){if("string"==typeof n)return n;if(kn(n))return hn?hn.call(n):"";var t=String(n);return"0"==t&&1/n==-F?"-0":t}(t);var r=[];return W.test(n)&&r.push(""),n.replace(U,function(n,t,e,u){r.push(e?u.replace(V,"$1"):t||n)}),r});function On(n){if("string"==typeof n||kn(n))return n;var t=String(n);return"0"==t&&1/n==-F?"-0":t}function An(n,t){if("function"!=typeof n||t&&"function"!=typeof t)throw new TypeError(T);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o),o};return r.cache=new(An.Cache||pn),r}function Pn(n,t){return n===t||n!=n&&t!=t}An.Cache=pn;var Sn=Array.isArray;function En(n){var t=typeof n;return Boolean(n)&&("object"==t||"function"==t)}function kn(n){return"symbol"==typeof n||function(n){return Boolean(n)&&"object"==typeof n}(n)&&en.call(n)==C}function xn(n,t,r){return null==n?n:mn(n,t,r)}var Rn=function(n){return!(null===n||Array.isArray(n)||"object"!=typeof n)&&Object.keys(n).length>0};var Bn=["Null","Undefined","RegExp"];var Tn=i(function(n,t){var e=Object.assign({},t),u=r(function(n){return void 0!==e[n]})(Object.keys(n));return 0===u.length?t:(u.map(function(t){var r=n[t];"Function"===f(r)?e[t]=r(e[t]):"Object"===f(r)&&(e[t]=Tn(r,e[t]))}),e)});function Mn(n){if("Object"!==f(n))throw new Error("R.headObject.type");var t=Object.keys(n),r=t[0],e=t[1];if(void 0===r)throw new Error("R.headObject.less");if(void 0!==e)throw new Error("R.headObject.more");return{prop:r,value:n[r]}}function Fn(n){return function(t){return new Promise(function(r,e){return r(n(t))})}}function Nn(n){var t=n.input,r=n.schema;if(void 0===t||void 0===r)return!1;var i=!0,o=function(n){n||(i=!1)};for(var c in r)if(i){var a=c.endsWith("?"),h=a?d(c):c,s=r[c],v=f(s),p=t[h],g=f(t[h]);if(!(a&&void 0!==p||!a)||"any"===s&&null!=p)continue;if("Object"===v)o(Nn({input:p,schema:s}));else if("String"===v)o(B(g)===s);else if("function"==typeof s)o(s(p));else if("Array"===v&&"String"===g)o(l(p,s));else if("Array"===v&&1===s.length&&"Array"===g){var y=s[0],m=f(s[0]);if(o("String"===m||"Object"===m),"String"===m)o(!u(function(n){return f(n).toLowerCase()!==y},p));if("Object"===m)o(e(function(n){return Nn({input:n,schema:y})},p))}else o("RegExp"===v&&"String"===g&&R(s,p))}return i}function In(n){return["Async","Promise"].includes(f(n))}function $n(n,t){return new Promise(function(r,e){var u=function(n){try{throw n}catch(n){return e(n)}};try{var i;if(Array.isArray(t)){var o,c,f;function a(){var n=f();return l.bind(this,n[0],n[1])}function l(t,r){return f=function(){return[t,r]},!(r[1]=r[0].next()).done&&(t=r[1].value,1)?n(t).then(function(n){try{return o.push(n),a}catch(n){return u(n)}},u):[1]}return o=[],(c=function(n){for(;n;){if(n.then)return void n.then(c,u);try{if(n.pop){if(n.length)return n.pop()?h.call(this):n;n=a}else n=n.call(this)}catch(n){return u(n)}}}.bind(this))(l.bind(this,void 0,[t[Symbol.iterator]()]));function h(){return r(o)}}i={};var s,v,p=[];for(s in t)p.push(s);function g(r){return p.length?(r=p.shift(),n(t[r],r).then(function(n){try{return i[r]=n,g}catch(n){return u(n)}},u)):[1]}return(v=function(n){for(;n;){if(n.then)return void n.then(v,u);try{if(n.pop){if(n.length)return n.pop()?d.call(this):n;n=g}else n=n.call(this)}catch(n){return u(n)}}}.bind(this))(g.bind(this,void 0));function d(){return r(i)}}catch(n){u(n)}})}function Cn(n,t){return new Promise(function(r,e){var u=function(n){try{throw n}catch(n){return e(n)}};try{var i;return i=t.map(function(t){return n(t)}),Promise.all(i).then(r,u)}catch(n){u(n)}})}var Ln={},Dn=function(n){return"String"===f(n)?n:["Function","Async"].includes(f(n))?S(/\s/g,"_",x(15,S(/\s{1,}/g," ",n.toString()))):("Object"===f(n)&&(t=n,r={},c(g(function(n){return r[n]=t[n]}),E(function(n,t){return n>t}))(Object.keys(t)),n=r),JSON.stringify(n));var t,r},Wn=function(n){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var e="";return t.map(function(n){e+=Dn(n)+"_"}),""+e+Dn(n)};function Un(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return n.length===t.length&&!1===function(n,t){for(var r=0;r<t.length;){if(n(t[r],r))return!0;r++}return!1}(function(n,r){return!function(n,t){return Nn({input:{singleInput:n},schema:{singleInput:t}})}(n,t[r])},n)}}function Vn(n,t){var r;return function(){return n&&(r=n.apply(t||this,arguments),n=null),r}}function qn(n){var t=n.condition,r=n.inputArgument,e=n.prop;return new Promise(function(n,u){if("Async"!==f(t))return n({type:e,payload:t(r)});t(r).then(function(t){n({type:e,payload:t})}).catch(function(n){return u(n)})})}var zn=function(n){return new Promise(function(t){n.then(function(n){t({payload:n,type:"RESULT"})}).catch(function(n){t({payload:n,type:"ERROR"})})})};var Jn=function(n){return n.match(/{{[_a-zA-Z0-9]+}}/g)},Hn=function(n){return n.replace(/{{|}}/g,"")},Yn=function(n){return n.inputHolder.replace("{{"+n.prop+"}}",n.replacer)};function Xn(n,t){var r=Jn(n);if(null===r)return n;for(var e=n,u=0,i=r;u<i.length;u+=1){var o=Hn(i[u]),c=t[o];void 0!==c&&(e=Yn({inputHolder:e,prop:o,replacer:c}))}return e}var Gn={label:"string"},Zn={foo:"any",t:"any",f:"any"};var Kn=Symbol?Symbol("NO_MATCH_FOUND"):void 0,Qn=function(n,t,r){return void 0!==n&&void 0===t&&void 0===r?(this.cases=[],this.defaultValue=void 0,this.willMatch=n):(this.cases=t,this.defaultValue=n,this.willMatch=r),this};Qn.prototype.default=function(n){return new Qn(n,this.cases,this.willMatch).match(this.willMatch)},Qn.prototype.is=function n(t,r){return new Qn(this.defaultValue,this.cases.concat([n(t,r)]),this.willMatch)},Qn.prototype.match=function(n){return function(n,t,r){for(var e,u=0;u<n.length;u++)if((e=n[u].test(t))!==Kn)return e;return r}(this.cases,n,this.defaultValue)};var nt=function n(t,r){return void 0===r?function(r){return n(t,r)}:t+r},tt=t,rt=function n(t,r,e){return void 0===r?function(r,e){return n(t,r,e)}:void 0===e?function(e){return n(t,r,e)}:e.concat().map(function(n,u){return u===r?t(e[r]):n})},et=e,ut=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:!u(function(n){return!n(r)},t)},it=function(n){return function(){return n}},ot=u,ct=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:u(function(n){return n(r)})(t)},ft=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};if("string"==typeof r)return""+r+t;var e=r.concat();return e.push(t),e},at=o,lt=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:function(n){return t(n)&&r(n)}},ht=function(n){return function(t){return!n(t)}},st=c,vt=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:"string"==typeof t?""+t+r:t.concat(r)},pt=l,gt=i,dt=function(n){return n-1},yt=h,mt=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};if(null===r||void 0===r)return{};var e={};for(var u in r)e[u]=r[u];return delete e[t],e},bt=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:t/r},_t=s,jt=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r.slice(0,-t)},wt=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:function(n){return t(n)||r(n)}},Ot=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:a(t,p(t.length,r))},At=a,Pt=function(){return!1},St=r,Et=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r.find(t)},kt=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};for(var e=r.length,u=-1;++u<e;)if(t(r[u]))return u;return-1},xt=function n(t,r){r=void 0===r?[]:r;for(var e=0;e<t.length;e++)Array.isArray(t[e])?n(t[e],r):r.push(t[e]);return r},Rt=function(n){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];return function(n){return function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return 1===t.length?function(r){return n(r,t[0])}:2===t.length?n(t[1],t[0]):void 0}}(n)},Bt=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:(g(t,r),r)},Tt=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};for(var e={},u=0;u<r.length;u++){var i=r[u],o=t(i);e[o]||(e[o]=[]),e[o].push(i)}return e},Mt=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:void 0!==r[t]},Ft=function(n){return"string"==typeof n?n[0]||"":n[0]},Nt=function(n){return n},It=function n(t,r,e){return void 0===r?function(r,e){return n(t,r,e)}:void 0===e?function(e){return n(t,r,e)}:function(n){return!0===("boolean"==typeof t?t:t(n))?r(n):e(n)}},$t=function(n){return n+1},Ct=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r.includes(t)},Lt=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};for(var e={},u=0;u<r.length;u++){var i=r[u];e[t(i)]=i}return e},Dt=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};for(var e=-1,u=r.length;++e<u;)if(r[e]===t)return e;return-1},Wt=d,Ut=function(n){return void 0===n||null===n},Vt=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r.join(t)},qt=function(n){return Object.keys(n)},zt=y,Jt=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};var e=-1;return r.map(function(n,r){a(n,t)&&(e=r)}),e},Ht=m,Yt=g,Xt=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};var e=r.match(t);return null===e?[]:e},Gt=b,Zt=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r>t?r:t},Kt=function n(t,r,e){return 2===arguments.length?function(e){return n(t,r,e)}:1===arguments.length?function(r,e){return n(t,r,e)}:t(e)>t(r)?e:r},Qt=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r<t?r:t},nr=_,tr=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:t%r},rr=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:t*r},er=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:0===r.filter(t).length},ur=function(n){return!n},ir=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};var e=t<0?r.length+t:t;return"[object String]"===Object.prototype.toString.call(r)?r.charAt(e):r[e]},or=j,cr=function(n,t){return void 0===t&&(t={}),function(r){return"Async"===f(n)||"Promise"===f(n)?new Promise(function(e,u){n(b(r,t)).then(e).catch(u)}):n(b(r,t))}},fr=w,ar=O,lr=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};if(null!==r&&void 0!==r){for(var e="string"==typeof t?t.split(","):t,u={},i=0;i<e.length;)e[i]in r&&(u[e[i]]=r[e[i]]),i++;return u}},hr=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};if(null!==r&&void 0!==r){for(var e="string"==typeof t?t.split(","):t,u={},i=0;i<e.length;)u[e[i]]=e[i]in r?r[e[i]]:void 0,i++;return u}},sr=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return c.apply(void 0,n.reverse())},vr=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};var e=[];return g(function(n){void 0!==n[t]&&e.push(n[t])},r),e},pr=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};if("string"==typeof r)return""+t+r;var e=r.concat();return e.unshift(t),e},gr=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r[t]},dr=function n(t,r,e){return void 0===r?function(r,e){return n(t,r,e)}:void 0===e?function(e){return n(t,r,e)}:e[t]===r},yr=A,mr=P,br=function n(t,e){return 1===arguments.length?function(r){return n(t,r)}:r(function(n){return!t(n)},e)},_r=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:Array(r).fill(t)},jr=S,wr=function(n){return n.concat().reverse()},Or=E,Ar=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r.concat().sort(function(n,r){var e=t(n),u=t(r);return e<u?-1:e>u?1:0})},Pr=k,Sr=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};for(var e=t>1?t:1,u=[],i=0;i<r.length;)u.push(r.slice(i,i+=e));return u},Er=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r.startsWith(t)},kr=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:t-r},xr=function(){return!0},Rr=function(n){return s(1,n)},Br=x,Tr=p,Mr=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:(t(r),r)},Fr=R,Nr=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:g(t,A(0,r))},Ir=B,$r=function(n){return n.toString()},Cr=function(n){return n.toUpperCase()},Lr=function(n){return n.trim()},Dr=f,Wr=function(n){for(var t=-1,r=[];++t<n.length;){var e=n[t];l(e,r)||r.push(e)}return r},Ur=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};for(var e=-1,i=[],o=function(){var n=r[e];u(function(r){return t(n,r)},i)||i.push(n)};++e<r.length;)o();return i},Vr=function n(t,r,e){return void 0===r?function(r,e){return n(t,r,e)}:void 0===e?function(e){return n(t,r,e)}:e.concat().fill(r,t,t+1)},qr=function(n){var t=[];for(var r in n)t.push(n[r]);return t},zr=function(n,t){return P(function(t,r){return l(r,n)?t:t.concat(r)},[],t)},Jr=function n(r,e){return 1===arguments.length?function(t){return n(r,t)}:t(P)(function(n,t,r){return e[r]?n.concat([[t,e[r]]]):n},[],r)},Hr=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:t.reduce(function(n,t,e){return n[t]=r[e],n},{})};n.DELAY="RAMBDAX_DELAY",n.add=nt,n.addIndex=tt,n.adjust=rt,n.all=et,n.allPass=ut,n.always=it,n.any=ot,n.anyPass=ct,n.append=ft,n.assoc=at,n.both=lt,n.complement=ht,n.compose=st,n.concat=vt,n.contains=pt,n.curry=gt,n.dec=dt,n.defaultTo=yt,n.dissoc=mt,n.divide=bt,n.drop=_t,n.dropLast=jt,n.either=wt,n.endsWith=Ot,n.equals=At,n.F=Pt,n.filter=St,n.find=Et,n.findIndex=kt,n.flatten=xt,n.flip=Rt,n.forEach=Bt,n.groupBy=Tt,n.has=Mt,n.head=Ft,n.identity=Nt,n.ifElse=It,n.inc=$t,n.includes=Ct,n.indexBy=Lt,n.indexOf=Dt,n.init=Wt,n.isNil=Ut,n.join=Vt,n.keys=qt,n.last=zt,n.lastIndexOf=Jt,n.length=Ht,n.map=Yt,n.match=Xt,n.merge=Gt,n.max=Zt,n.maxBy=Kt,n.min=Qt,n.minBy=nr,n.modulo=tr,n.multiply=rr,n.none=er,n.not=ur,n.nth=ir,n.omit=or,n.partialCurry=cr,n.path=fr,n.pathOr=ar,n.pick=lr,n.pickAll=hr,n.pipe=sr,n.pluck=vr,n.prepend=pr,n.prop=gr,n.propEq=dr,n.range=yr,n.reduce=mr,n.reject=br,n.repeat=_r,n.replace=jr,n.reverse=wr,n.sort=Or,n.sortBy=Ar,n.split=Pr,n.splitEvery=Sr,n.startsWith=Er,n.subtract=kr,n.T=xr,n.tail=Rr,n.take=Br,n.takeLast=Tr,n.tap=Mr,n.test=Fr,n.times=Nr,n.toLower=Ir,n.toString=$r,n.toUpper=Cr,n.trim=Lr,n.type=Dr,n.uniq=Wr,n.uniqWith=Ur,n.update=Vr,n.values=qr,n.without=zr,n.zip=Jr,n.zipObj=Hr,n.allFalse=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];for(var r=0;r<n.length;){if("Function"===f(n[r])){if(n[r]())return!1}else if(n[r])return!1;r++}return!0},n.allTrue=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];for(var r=0;r<n.length;){if("Function"===f(n[r])){if(!n[r]())return!1}else if(!n[r])return!1;r++}return!0},n.change=function(n,t,r){var e=JSON.parse(JSON.stringify(n));if(!Rn(r))return xn(e,t,r),e;for(var u=""===t?"":t+".",i=function(){var n=c[o],t=r[n];Rn(t)?(Object.keys(t).filter(function(n){return!Rn(t[n])}).map(function(r){xn(e,""+u+n+"."+r,t[r])}),Object.keys(t).filter(function(n){return Rn(t[n])}).map(function(r){Object.keys(t[r]).map(function(i){xn(e,""+u+n+"."+r+"."+i,t[r][i])})})):xn(e,""+u+n,t)},o=0,c=Object.keys(r);o<c.length;o+=1)i();return e},n.compact=function(n){return r(function(n){var t=f(n);return!Bn.includes(t)&&("Object"===t?!a(n,{}):0!==n.length)},n)},n.composeAsync=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return function(t){return new Promise(function(r,e){var u,i;function o(){if(0===n.length)return[1];{var t,r;return"Async"===(r=f(t=n.pop()))||"Promise"===r?t(u).then(function(n){try{return u=n,i.call(this)}catch(n){return e(n)}}.bind(this),e):(u=t(u),i.call(this));function i(){return o}}}return u=t,(i=function(n){for(;n;){if(n.then)return void n.then(i,e);try{if(n.pop){if(n.length)return n.pop()?c.call(this):n;n=o}else n=n.call(this)}catch(n){return e(n)}}}.bind(this))(o);function c(){return r(u)}})}},n.defaultWhen=function n(t,r,e){return 2===arguments.length?function(e){return n(t,r,e)}:Boolean(t(e))?e:r},n.debounce=function(n,t,r){var e;return void 0===r&&(r=!1),function(){for(var u=[],i=arguments.length;i--;)u[i]=arguments[i];var o=r&&!e;clearTimeout(e),e=setTimeout(function(){e=null,r||n.apply(null,u)},t),o&&n.apply(null,u)}},n.delay=function(n){return new Promise(function(t){setTimeout(function(){t("RAMBDAX_DELAY")},n)})},n.evolve=Tn,n.findInObject=function(n,t){var r={fallback:!0};return Object.entries(t).map(function(t){var e=t[0],u=t[1];r.fallback&&n(u,e)&&(r={prop:e,value:u})}),r},n.greater=function n(t,r){return void 0===r?function(r){return n(t,r)}:r>t},n.headObject=Mn,n.ifElseAsync=function n(t,r,e){return void 0===r?function(r,e){return n(t,r,e)}:void 0===e?function(e){return n(t,r,e)}:function(n){return new Promise(function(u,i){var o=Fn(t),c=Fn(r),f=Fn(e);o(n).then(function(t){(!0===t?c:f)(n).then(u).catch(i)}).catch(i)})}},n.inject=function(n,t,r){return S(t,""+t+n,r)},n.intersection=function n(t,e){return void 0===e?function(r){return n(t,r)}:r(function(n){return e.includes(n)})(t)},n.is=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return function(){for(var t,r=[],e=arguments.length;e--;)r[e]=arguments[e];if(n.length!==r.length)throw new Error("inputs.length !== schemas.length");if(function(n,t){for(var r=0;r<t.length;){if(n(t[r],r))return!0;r++}return!1}(function(n,e){var u=function(n,t){return Nn({input:{singleInput:n},schema:{singleInput:t}})}(n,r[e]);return u||(t={singleInput:n,schema:r[e]}),!u},n))throw new Error(JSON.stringify(t));return!0}},n.isInit=function(){return void 0===Object.prototype.is&&(Object.defineProperty(Object.prototype,"is",{value:function(n){return Nn({input:{isProp:this},schema:{isProp:n}})},writable:!0,configurable:!0}),!0)},n.isPromise=In,n.isType=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:f(r)===t},n.isValid=Nn,n.less=function n(t,r){return void 0===r?function(r){return n(t,r)}:r<t},n.mapAsync=function(n,t){return void 0===t?function(t){return new Promise(function(r,e){return $n(n,t).then(r,e)})}:new Promise(function(r,e){$n(n,t).then(r).catch(e)})},n.mapFastAsync=function(n,t){return void 0===t?function(t){return new Promise(function(r,e){return Cn(n,t).then(r,e)})}:new Promise(function(r,e){Cn(n,t).then(r).catch(e)})},n.memoize=function n(t){for(var r=[],e=arguments.length-1;e-- >0;)r[e]=arguments[e+1];if(1===arguments.length)return function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return n.apply(void 0,[t].concat(r))};var u=Wn.apply(void 0,[t].concat(r));if(u in Ln)return Ln[u];if("Async"===f(t))return new Promise(function(n){t.apply(void 0,r).then(function(t){Ln[u]=t,n(t)})});var i=t.apply(void 0,r);return Ln[u]=i,i},n.mergeAll=function(n){var t={};return g(function(n){t=b(t,n)},n),t},n.mergeRight=function(n,t){return b(t,n)},n.multiline=function(n,t){return n.split("\n").filter(function(n){return n.trim().length>0}).map(function(n){return n.trim()}).join(t||" ")},n.ok=Un,n.omitBy=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};var e={};for(var u in r)t(u,r[u])||(e[u]=r[u]);return e},n.once=function(n,t){return 1===arguments.length?i(Vn(n,t)):Vn(n,t)},n.pickBy=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};var e={};for(var u in r)t(u,r[u])&&(e[u]=r[u]);return e},n.produce=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};var e=!1;for(var u in t)!1===e&&"Async"===f(t[u])&&(e=!0);if(!1===e){var i={};for(var o in t)i[o]=t[o](r);return i}var c=[];for(var a in t)c.push(qn({inputArgument:r,condition:t[a],prop:a}));return new Promise(function(n,t){Promise.all(c).then(function(t){var r={};g(function(n){return r[n.type]=n.payload},t),n(r)}).catch(function(n){return t(n)})})},n.promiseAllObject=function(n){return new Promise(function(t,r){var e=0,u={},i=[];for(var o in n)u[e]=o,i.push(n[o]),e++;Promise.all(i).then(function(n){var r={};n.map(function(n,t){r[u[t]]=n}),t(r)}).catch(r)})},n.promiseAllSecure=function(n){return new Promise(function(t,r){var e=function(n){try{return console.log(n),function(){try{return t()}catch(n){return r(n)}}()}catch(n){return r(n)}};try{var u;return u=g(function(n){return zn(n)},n),Promise.all(u).then(t,e)}catch(n){e(n)}})},n.random=function(n,t){return Math.floor(Math.random()*(t-n+1))+n},n.rangeBy=function(n,t,r){var e=!r.toString().includes(".");if(n>t){var u=n;n=t,t=u}var i=[n],o=n;if(e)for(var f=0,a=A(0,Math.floor((t-n)/r));f<a.length;f+=1)i.push(o+=r);else for(var l=c(m,y,k("."))(r.toString()),h=0,s=A(0,Math.floor((t-n)/r));h<s.length;h+=1)o+=r,i.push(Number(o.toFixed(l)));return i},n.remove=function(n,t){if("Array"!==f(n))return S(n,"",t).trim();var r=t;return n.forEach(function(n){r=S(n,"",r).trim()}),r},n.renameProps=function n(t,r){if(void 0===r)return function(r){return n(t,r)};var e={};return Object.keys(t).map(function(n){Object.keys(r).includes(n)&&(e[t[n]]=r[n])}),b(e,j(Object.keys(t),r))},n.runTests=function(n){var t=Un(n)({testSuite:"string",evaluations:[Gn]});if(void 0===describe||!t)throw new Error("R.runTests.init");try{var r=n.evaluations,e=n.data;describe(n.testSuite,function(){r.forEach(function(n){e.forEach(function(t){var r=Mn(t),e=r.prop,u=r.value,i=Mn(j("label",n)).value,o=Xn(n.label,{tag:e});if(!Un(u)(Zn))throw new Error("R.runTests.okData");test(o,function(){i(u)})})})})}catch(n){throw console.log(n),new Error("R.runTestsCatch")}},n.s=function(){return void 0===Object.prototype.s&&(Object.defineProperty(Object.prototype,"s",{value:function(n){return n(this.valueOf())},writable:!0,configurable:!0}),!0)},n.shuffle=function(n){for(var t=n.concat(),r=t.length;r>0;){var e=Math.floor(Math.random()*r),u=t[--r];t[r]=t[e],t[e]=u}return t},n.switcher=function(n){return new Qn(n)},n.tapAsync=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:!0===In(t)?new Promise(function(n,e){t(r).then(function(){n(r)}).catch(e)}):(t(r),r)},n.template=Xn,n.throttle=function(n,t){var r=!1;return function(){for(var e=[],u=arguments.length;u--;)e[u]=arguments[u];r||(n.apply(null,e),r=!0,setTimeout(function(){r=!1},t))}},n.validate=function(n,t){return 2===arguments.length?Nn({input:n,schema:t}):function(t){return Nn({input:n,schema:t})}},n.when=function n(t,r){return void 0===r?function(r){return n(t,r)}:function(n){return("boolean"==typeof t?t:t(n))?r(n):n}},n.whenAsync=function n(t,r){return void 0===r?function(t,r){return n(t,r)}:function(n){return new Promise(function(e,u){if("boolean"==typeof t){if(!1===t)return e(n);r(n).then(e).catch(u)}else(i=t,function(n){return new Promise(function(t,r){return t(i(n))})})(n).then(function(t){if(!1===t)return e(n);r(n).then(e).catch(u)}).catch(u);var i})}},n.where=function n(t,r){if(void 0===r)return function(r){return n(t,r)};var e=!0;for(var u in t){var i=t[u](r[u]);e&&!1===i&&(e=!1)}return e}});
//# sourceMappingURL=rambdax.umd.js.map
