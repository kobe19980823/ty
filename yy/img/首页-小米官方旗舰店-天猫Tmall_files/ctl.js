!function e(t,n,a){function r(o,u){if(!n[o]){if(!t[o]){var c="function"==typeof require&&require;if(!u&&c)return c(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return r(n?n:e)},f,f.exports,e,t,n,a)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<a.length;o++)r(a[o]);return r}({1:[function(t,module,a){var r=0,c=1,s=2;function v(t){return this instanceof v?(this._state=r,this._onFulfilled=[],this._onRejected=[],this._value=null,this._reason=null,A(t)&&t(w(this.resolve,this),w(this.reject,this)),void 0):new v(t)}function h(t,a){if(t===a)return t.reject(new TypeError("A promise cannot be resolved with itself.")),void 0;if(b(a))try{a.then(function(a){h(t,a)},function(a){t.reject(a)})}catch(e){t.reject(e)}else t.resolve(a)}function p(t,a,r){return function(c){if(A(a))try{var s=a(c);h(t,s)}catch(e){t.reject(e)}else t[r](c)}}v.prototype={constructor:v,then:function(t,a){var r=new v;return this._onFulfilled.push(p(r,t,"resolve")),this._onRejected.push(p(r,a,"reject")),this.flush(),r},flush:function(){var t=this._state;if(t!==r){var a=t===c?this._onFulfilled.slice():this._onRejected.slice(),s=t===c?this._value:this._reason;setTimeout(function(){y(a,function(t){try{t(s)}catch(e){}})},0),this._onFulfilled=[],this._onRejected=[]}},resolve:function(t){this._state===r&&(this._state=c,this._value=t,this.flush())},reject:function(t){this._state===r&&(this._state=s,this._reason=t,this.flush())},always:function(t){return this.then(t,t)}},v.defer=function(){var t={};return t.promise=new v(function(a,r){t.resolve=a,t.reject=r}),t},v.all=function(t){var a=v.defer(),r=t.length,c=[];return y(t,function(t,i){t.then(function(t){c[i]=t,r--,0===r&&a.resolve(c)},function(t){a.reject(t)})}),a.promise};function b(t){return t&&A(t.then)}function w(t,a){var r=[].slice,c=r.call(arguments,2),s=function(){},v=function(){return t.apply(this instanceof s?this:a,c.concat(r.call(arguments)))};return s.prototype=t.prototype,v.prototype=new s,v}var A=T("Function");function T(t){return function(a){return{}.toString.call(a)=="[object "+t+"]"}}function y(t,a){for(var i=0,r=t.length;r>i;i++)a(t[i],i)}module.exports=v},{}],2:[function(t,module,a){var r=t("./util"),c={SendMethod:8,LogVal:"collinaua",Token:(new Date).getTime()+":"+Math.random(),MaxMCLog:10,MaxKSLog:10,MaxMPLog:10,MaxTCLog:10,MaxFocusLog:1,Sync:!0},s=".alicdn.com",g="g"+s,v="af"+s,h="aeis"+s,p="aeu"+s,b={cn:{umid:g,uac:v},us:{umid:h,uac:p},aliapp:{umid:h,uac:p},usaliapp:{umid:h,uac:p},"in":{umid:h,uac:p},sg:{umid:h,uac:p},lazada:{umid:h,uac:p}},w=A().getAttribute("data-env")||"cn";function A(){for(var t=document.getElementsByTagName("script"),a=/ctlv?\.js/,r,i=0;i<t.length;i++)if(r=T(t[i]),a.test(r))return t[i];return t[t.length-1]}function T(t){return t.hasAttribute?t.src:t.getAttribute("src",4)}module.exports={env:w,url:b[w],map:{def:r.extend({Flag:1670350},c),pc:r.extend({Flag:97422},c),h5:r.extend({Flag:1670350},c)}}},{"./util":5}],3:[function(t,module,a){module.exports=function(t){var a=[],r,f=!1,c=document,s=c.documentElement,v=s.doScroll,h="DOMContentLoaded",p="addEventListener",b="onreadystatechange",w="readyState",A=v?/^loaded|^c/:/^loaded|c/,T=A.test(c[w]);function y(f){for(T=1;f=a.shift();)f()}return c[p]&&c[p](h,r=function(){c.removeEventListener(h,r,f),y()},f),v&&c.attachEvent(b,r=function(){/^c/.test(c[w])&&(c.detachEvent(b,r),y())}),t=v?function(r){self!=top?T?r():a.push(r):function(){try{s.doScroll("left")}catch(e){return setTimeout(function(){t(r)},50)}r()}()}:function(t){T?t():a.push(t)}}()},{}],4:[function(t,module,a){var r=t("./Promise"),c=t("./config"),s=t("./util"),v=t("./domready"),h=window,p=h.ctl,b=h.UA_Opt=h.UA_Opt||{},w=h.ctl={noConflict:function(){return h.ctl===w&&(h.ctl=p),w},config:function(t,a){return h.UA_Opt&&h.UA_Opt.LogVal?void 0:(b=h.UA_Opt=h.UA_Opt||{},a||(a=t,t="def"),t=(t+"").toLowerCase(),a=s.extend(b,c.map[t]||c.map.def,a||{}),b.LogVal&&(h[b.LogVal]=""),a)},getUA:function(){b=h.UA_Opt=h.UA_Opt||{};var t=b.Token;b.Token=(new Date).getTime()+":"+Math.random();var a=W();return b.Token=t,b.reload&&b.reload(),a},getUmidToken:function(){try{return umx.getToken()}catch(e){return""}},getUmidInstance:function(){return M},ready:function(t,a){return x.promise.then(t,a),x.promise}};w.config();var A=null,T=r.defer(),y=r.defer(),k=T.promise,S=y.promise;!function(t,a){var r=1e4,g_moduleConfig={uabModule:{stable:["AWSC/uab/117.js"],grey:["AWSC/uab/118.js"],ratio:10000},umidPCModule:{stable:["AWSC/WebUMID/1.72.0/um.js"],grey:["AWSC/WebUMID/1.73.2/um.js"],ratio:9900},ncPCModule:{stable:["js/nc/60.js"],grey:["js/nc/60.js"],ratio:1e4},ncH5Module:{stable:["js/nc/60.js"],grey:["js/nc/60.js"],ratio:1e4}},c=[{name:"umidPCModule",features:["umpc","um","umh5"],depends:[],sync:!1},{name:"uabModule",features:["uab"],depends:[],sync:!1},{name:"nsModule",features:["ns"],depends:[],sync:!1},{name:"ncPCModule",features:["ncPC","scPC"],depends:["uab","umpc"],sync:!0},{name:"ncH5Module",features:["ncH5","scH5"],depends:["uab","umh5"],sync:!0}];function s(a,c){var s="AWSC_SPECIFY_"+a.toUpperCase()+"_ADDRESSES";if(t[s])return t[s];var v=[];for(var h in g_moduleConfig)if(g_moduleConfig.hasOwnProperty(h)&&h===a){var moduleConfig=g_moduleConfig[h];v=Math.ceil(Math.random()*r)<=moduleConfig.ratio?moduleConfig.grey:moduleConfig.stable;for(var p=(new Date).getDate(),b=0;b<v.length;b++){var w=c?"//"+c+"/":y;"//assets.alicdn.com/"===w&&(w+="g/"),v[b]=w+v[b]+"?d="+p}return v}}var v=[],h="loading",p="loaded",b="timeout",w="unexpected",A="no such feature",T=new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$"),y=k(S());function k(t){var a="//g.alicdn.com/";if(!t)return a;if(/aliexpress/.test(location.href))return"//aeis.alicdn.com/";var r=T.exec(t);return r?"//"+r[3]+(r[4]?":"+r[4]:"")+"/":a}function S(){for(var t=document.getElementsByTagName("script"),i=0;i<t.length;i++){var a=t[i],r=a.hasAttribute?a.src:a.getAttribute("src",4);if(/\/awsc\.js/.test(r))return r}}function x(t){for(var a=void 0,r=0;r<c.length;r++){for(var s=c[r],v=0;v<s.features.length;v++)if(s.features[v]===t){a=s;break}if(a)break}return a}function M(t){for(var a=0;a<v.length;a++){var r=v[a];if(r.name===t)return r}}function j(t){for(var a=void 0,r=0;r<c.length;r++){var s=c[r];if(s.name===t){a=s;break}if(a)break}return a}function W(t){return/http/.test(location.protocol)||(t="https:"+t),t}function U(t,r,c){if(c)for(var s=0;s<t.length;s++){var v=t[s];v=W(v),a.write("<script src="+v+"></script>")}else for(var s=0;s<t.length;s++){var v=t[s];v=W(v);var h=a.createElement("script");h.async=!1,h.src=v,h.id=r;var m=a.getElementsByTagName("script")[0];m&&m.parentNode?m.parentNode.insertBefore(h,m):(m=a.body||a.head,m&&m.appendChild(h))}}function E(a,r,c){var s="//acjs.aliyun.com/error?v="+a+"&e="+encodeURIComponent(r)+"&stack="+encodeURIComponent(c);s=W(s);var v=new Image,h="_awsc_img_"+Math.floor(1e6*Math.random());t[h]=v,v.onload=v.onerror=function(){try{delete t[h]}catch(e){t[h]=null}},v.src=s}function D(t,a){Math.random()<1e-4&&E("awsc_state","feature="+t.name+"&state="+t.state+"&href="+encodeURIComponent(location.href));for(var r=void 0;r=t.callbacks.shift();)try{r(t.state,t.exportObj)}catch(e){if(a)throw e;E(t.name,e.message,e.stack)}}function I(t,a,r){var c=x(t);if(!c)return a&&a(A),void 0;var p=r&&r.cdn,w=r&&r.sync,T=r&&r.timeout||5e3;if(0!==c.depends.length)for(var y=0;y<c.depends.length;y++){var k=c.depends[y];r&&(delete r.sync,delete r.timeout,delete r.cdn),O(k,void 0,r)}var S={};if(S.module=c,S.name=t,S.state=h,S.callbacks=[],S.options=r,a&&S.callbacks.push(a),S.timeoutTimer=setTimeout(function(){S.state=b,D(S,r&&r.throwExceptionInCallback)},T),v.push(S),!c.moduleLoadStatus){var M=c.sync;w&&(M=w);var j=s(c.name,p);U(j,"AWSC_"+c.name,M)}c.moduleLoadStatus=h}function O(t,a,r){var c=M(t);return c?(c.state===p||c.state===b?a&&a(c.state,c.exportObj):c.state===h?a&&c.callbacks.push(a):void 0,void 0):(I(t,a,r),void 0)}function P(t,a,r){var c=!1;try{var s=j(t);s||void 0,s.moduleLoadStatus=p;for(var w=void 0,A=0;A<v.length;A++){var T=v[A];T.module===s&&T.name===a&&(c=T.options&&T.options.throwExceptionInCallback,w=T,clearTimeout(w.timeoutTimer),delete w.timeoutTimer,w.exportObj=r,T.state===h||T.state===b?(w.state=p,D(w,c)):void 0)}w||(w={},w.module=s,w.name=a,w.state=p,w.exportObj=r,w.callbacks=[],v.push(w))}catch(e){if(c)throw e;E("awsc_error",e.message,e.stack)}}function L(t){t.AWSCFY=function(){},t.AWSC.configFY=function(a,r,c,s){var v=new t.AWSCFY,h=!1;v.umidToken="defaultToken1_um_not_loaded@@"+location.href+"@@"+(new Date).getTime(),t.AWSC.use("um",function(t,a){"loaded"===t?(v.umidToken="defaultToken3_init_callback_not_called@@"+location.href+"@@"+(new Date).getTime(),a.init(r,function(t,a){"success"===t?v.umidToken=a.tn:v.umidToken="defaultToken4_init_failed with "+t+"@@"+location.href+"@@"+(new Date).getTime(),h=!0,w()})):(v.umidToken="defaultToken2_load_failed with "+t+"@@"+location.href+"@@"+(new Date).getTime(),h=!0,w())});var p=!1;v.getUA=function(){return"defaultUA1_uab_not_loaded@@"+location.href+"@@"+(new Date).getTime()},t.AWSC.use("uab",function(t,a){p=!0,"loaded"===t?(v.uabModule=a,v.uabConfig=c,v.getUA=function(){return this.uabModule.getUA(this.uabConfig)}):v.getUA=function(){return"defaultUA2_load_failed with "+t+"@@"+location.href+"@@"+(new Date).getTime()},w()});var b=t.setTimeout(function(){w(!0)},s?s:2e3);function w(r){(p&&h||r)&&(a(v),t.clearTimeout(b))}}}function R(t){t.AWSC||(t.AWSC={},t.AWSC.use=O,t.AWSCInner={},t.AWSCInner.register=P,L(t))}R(t)}(window,document),h.AWSC.use("uab",function(t,a){"loaded"===t&&(A=a,T.resolve())},{cdn:c.url.uac}),h.AWSC.use("um",function(t,a){"loaded"===t&&y.resolve()},{cdn:c.url.umid});var x=r.defer(),M=null,j=r.defer();S.then(function(){void 0;var t=document.getElementById("_umfp");M=umx.init({serviceLocation:c.env,appName:"ctl",containers:{flash:t,dcp:t},callback:function(){void 0,j.resolve()}})}),v(function(){var t=S;"lazada"===c.env&&(t=j.promise),r.all([k,t]).then(function(){a();var t=setInterval(a,50);x.promise.always(function(){clearInterval(t)})},function(){x.reject()}),setTimeout(function(){h.umx?A||x.reject():x.reject()},3e3);function a(){A&&x.resolve()}});function W(){var t=h.UA_Opt||b;return t.LogVal?h[t.LogVal]||"":""}},{"./Promise":1,"./config":2,"./domready":3,"./util":5}],5:[function(t,module,a){module.exports={extend:function(t){for(var a=[].slice.call(arguments),r=a.length,c,s,i=1;r>i;i++){c=a[i];for(s in c)c.hasOwnProperty(s)&&("Flag"===s&&t[s]?t[s]=t[s]|c[s]:t[s]=c[s])}return t}}},{}]},{},[4]);