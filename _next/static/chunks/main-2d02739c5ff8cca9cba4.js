_N_E=(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[179],{7154:function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t},400:function(){"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var e=/\((.*)\)/.exec(this.toString());return e?e[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(e,t){return t=this.concat.apply([],this),e>1&&t.some(Array.isArray)?t.flat(e-1):t},Array.prototype.flatMap=function(e,t){return this.map(e,t).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))})},2771:function(e,t){"use strict";t.__esModule=!0,t.default=function(){var e=null;return{mountedInstances:new Set,updateHead:function(t){var r=e=Promise.resolve().then((function(){if(r===e){e=null;var a={};t.forEach((function(e){var t=a[e.type]||[];t.push(e),a[e.type]=t}));var o=a.title?a.title[0]:null,i="";if(o){var u=o.props.children;i="string"===typeof u?u:Array.isArray(u)?u.join(""):""}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach((function(e){!function(e,t){var r=document.getElementsByTagName("head")[0],a=r.querySelector("meta[name=next-head-count]");0;for(var o=Number(a.content),i=[],u=0,c=a.previousElementSibling;u<o;u++,c=c.previousElementSibling)c.tagName.toLowerCase()===e&&i.push(c);var s=t.map(n).filter((function(e){for(var t=0,r=i.length;t<r;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0}));i.forEach((function(e){return e.parentNode.removeChild(e)})),s.forEach((function(e){return r.insertBefore(e,a)})),a.content=(o-i.length+s.length).toString()}(e,a[e]||[])}))}}))}}};var r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function n(e){var t=e.type,n=e.props,a=document.createElement(t);for(var o in n)if(n.hasOwnProperty(o)&&"children"!==o&&"dangerouslySetInnerHTML"!==o&&void 0!==n[o]){var i=r[o]||o.toLowerCase();a.setAttribute(i,n[o])}var u=n.children,c=n.dangerouslySetInnerHTML;return c?a.innerHTML=c.__html||"":u&&(a.textContent="string"===typeof u?u:Array.isArray(u)?u.join(""):""),a}},7403:function(e,t,r){"use strict";var n=r(7757),a=r(8926),o=r(4575),i=r(3913),u=r(2205),c=r(8585),s=r(9754),l=r(3038);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return c(this,r)}}var p=r(862),d=r(5318);t.__esModule=!0,t.render=ae,t.renderError=ie,t.default=t.emitter=t.router=t.version=void 0;var m=d(r(7154));d(r(862));r(400);var h=d(r(7294)),v=d(r(3935)),y=r(4287),g=d(r(7332)),S=r(1642),E=r(1689),b=r(3288),_=p(r(4915)),w=p(r(9186)),x=r(3937),T=d(r(2771)),P=d(r(7365)),k=d(r(4829)),C=r(2441),A=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=A;t.version="10.0.3";var N=function(e){return[].slice.call(e)},R=A.props,L=A.err,M=A.page,F=A.query,I=A.buildId,D=A.assetPrefix,B=A.runtimeConfig,j=A.dynamicIds,q=A.isFallback,O=A.locales,H=A.locale,U=A.defaultLocale,X=D||"";r.p="".concat(X,"/_next/"),w.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:B||{}});var G=(0,x.getURL)();(0,E.hasBasePath)(G)&&(G=(0,E.delBasePath)(G));var V=new P.default(I,X),J=function(e){var t=l(e,2),r=t[0],n=t[1];return V.routeLoader.onEntrypoint(r,n)};window.__NEXT_P&&window.__NEXT_P.map((function(e){return setTimeout((function(){return J(e)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=J;var W,Y,Q,$,z,K,Z=(0,T.default)(),ee=document.getElementById("__next");t.router=Q;var te=function(e){u(r,e);var t=f(r);function r(){return o(this,r),t.apply(this,arguments)}return i(r,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),Q.isSsr&&(q||A.nextExport&&((0,b.isDynamicRoute)(Q.pathname)||location.search)||R&&R.__N_SSG&&location.search)&&Q.replace(Q.pathname+"?"+String(_.assign(_.urlQueryToSearchParams(Q.query),new URLSearchParams(location.search))),G,{_h:1,shallow:!q})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),r}(h.default.Component),re=(0,g.default)();t.emitter=re;var ne=function(){var e=a(n.mark((function e(){var r,a,o,i,u,c,s=arguments;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.length>0&&void 0!==s[0]?s[0]:{},e.next=4,V.routeLoader.whenEntrypoint("/_app");case 4:if(!("error"in(r=e.sent))){e.next=7;break}throw r.error;case 7:a=r.component,o=r.exports,z=a,o&&o.reportWebVitals&&(K=function(e){var t,r=e.id,n=e.name,a=e.startTime,i=e.value,u=e.duration,c=e.entryType,s=e.entries,l="".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12);s&&s.length&&(t=s[0].startTime),o.reportWebVitals({id:r||l,name:n,startTime:a||t,value:null==i?u:i,label:"mark"===c||"measure"===c?"custom":"web-vital"})}),i=L,e.prev=11,e.next=16;break;case 16:return e.next=18,V.routeLoader.whenEntrypoint(M);case 18:e.t0=e.sent;case 19:if(!("error"in(u=e.t0))){e.next=22;break}throw u.error;case 22:$=u.component,e.next=27;break;case 27:e.next=32;break;case 29:e.prev=29,e.t1=e.catch(11),i=e.t1;case 32:if(!window.__NEXT_PRELOADREADY){e.next=36;break}return e.next=36,window.__NEXT_PRELOADREADY(j);case 36:return t.router=Q=(0,C.createRouter)(M,F,G,{initialProps:R,pageLoader:V,App:z,Component:$,wrapApp:pe,err:i,isFallback:Boolean(q),subscription:function(e,t){return ae(Object.assign({},e,{App:t}))},locale:H,locales:O,defaultLocale:U}),ae(c={App:z,initial:!0,Component:$,props:R,err:i}),e.abrupt("return",re);case 44:return e.abrupt("return",{emitter:re,render:ae,renderCtx:c});case 45:case"end":return e.stop()}}),e,null,[[11,29]])})));return function(){return e.apply(this,arguments)}}();function ae(e){return oe.apply(this,arguments)}function oe(){return(oe=a(n.mark((function e(t){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,ie(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,de(t);case 7:e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(4),!e.t0.cancelled){e.next=13;break}throw e.t0;case 13:return e.next=16,ie((0,m.default)({},t,{err:e.t0}));case 16:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function ie(e){var t=e.App,r=e.err;return console.error(r),V.loadPage("/_error").then((function(n){var a=n.page,o=n.styleSheets,i=pe(t),u={Component:a,AppTree:i,router:Q,ctx:{err:r,pathname:M,query:F,asPath:G,AppTree:i}};return Promise.resolve(e.props?e.props:(0,x.loadGetInitialProps)(t,u)).then((function(t){return de((0,m.default)({},e,{err:r,Component:a,styleSheets:o,props:t}))}))}))}t.default=ne;var ue="function"===typeof v.default.hydrate;function ce(){x.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),K&&performance.getEntriesByName("Next.js-hydration").forEach(K),le())}function se(){if(x.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),K&&(performance.getEntriesByName("Next.js-render").forEach(K),performance.getEntriesByName("Next.js-route-change-to-render").forEach(K)),le(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function le(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function fe(e){var t=e.children;return h.default.createElement(te,{fn:function(e){return ie({App:z,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},h.default.createElement(S.RouterContext.Provider,{value:(0,C.makePublicRouterInstance)(Q)},h.default.createElement(y.HeadManagerContext.Provider,{value:Z},t)))}var pe=function(e){return function(t){var r=(0,m.default)({},t,{Component:$,err:L,router:Q});return h.default.createElement(fe,null,h.default.createElement(e,r))}};function de(e){var t=e.App,r=e.Component,n=e.props,a=e.err,o="initial"in e?void 0:e.styleSheets;r=r||W.Component,n=n||W.props;var i=(0,m.default)({},n,{Component:r,err:a,router:Q});W=i;var u,c=!1,s=new Promise((function(e,t){Y&&Y(),u=function(){Y=null,e()},Y=function(){c=!0,Y=null;var e=new Error("Cancel rendering route");e.cancelled=!0,t(e)}}));var l,f,p=h.default.createElement(me,{callback:function(){u()}},h.default.createElement(he,{callback:function(){if(o&&!c){for(var e=new Set(o.map((function(e){return e.href}))),t=N(document.querySelectorAll("style[data-n-href]")),r=t.map((function(e){return e.getAttribute("data-n-href")})),n=0;n<r.length;++n)e.has(r[n])?t[n].removeAttribute("media"):t[n].setAttribute("media","x");var a=document.querySelector("noscript[data-n-css]");a&&o.forEach((function(e){var t=e.href,r=document.querySelector('style[data-n-href="'.concat(t,'"]'));r&&(a.parentNode.insertBefore(r,a.nextSibling),a=r)})),N(document.querySelectorAll("link[data-n-p]")).forEach((function(e){e.parentNode.removeChild(e)})),getComputedStyle(document.body,"height")}}}),h.default.createElement(fe,null,h.default.createElement(t,i)));return function(){if(!o)return!1;var e=N(document.querySelectorAll("style[data-n-href]")),t=new Set(e.map((function(e){return e.getAttribute("data-n-href")}))),r=document.querySelector("noscript[data-n-css]"),n=null==r?void 0:r.getAttribute("data-n-css");o.forEach((function(e){var r=e.href,a=e.text;if(!t.has(r)){var o=document.createElement("style");o.setAttribute("data-n-href",r),o.setAttribute("media","x"),n&&o.setAttribute("nonce",n),document.head.appendChild(o),o.appendChild(document.createTextNode(a))}}))}(),l=p,f=ee,x.ST&&performance.mark("beforeRender"),ue?(v.default.hydrate(l,f,ce),ue=!1):v.default.render(l,f,se),s}function me(e){var t=e.callback,r=e.children;return h.default.useLayoutEffect((function(){return t()}),[t]),h.default.useEffect((function(){(0,k.default)(K)}),[]),r}function he(e){var t=e.callback;return h.default.useLayoutEffect((function(){return t()}),[t]),null}},5778:function(e,t,r){"use strict";var n=r(862)(r(7403));window.next=n,(0,n.default)().catch(console.error)},7365:function(e,t,r){"use strict";var n=r(4575),a=r(3913),o=r(862),i=r(5318);t.__esModule=!0,t.default=void 0;var u=r(1689),c=i(r(7892)),s=r(3288),l=r(4436),f=o(r(7599));function p(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===e?e:e.replace(/\/$/,"")}var d=function(){function e(t,r){n(this,e),this.buildId=void 0,this.assetPrefix=void 0,this.promisedSsgManifest=void 0,this.promisedDevPagesManifest=void 0,this.routeLoader=void 0,this.routeLoader=(0,f.default)(r),this.buildId=t,this.assetPrefix=r,this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return a(e,[{key:"getPageList",value:function(){return(0,f.getClientBuildManifest)().then((function(e){return e.sortedPages}))}},{key:"getDataHref",value:function(e,t,r,n){var a=this,o=(0,l.parseRelativeUrl)(e),i=o.pathname,f=o.query,d=o.search,m=(0,l.parseRelativeUrl)(t).pathname,h=p(i),v=function(e){var t=(0,c.default)((0,u.addLocale)(e,n),".json");return(0,u.addBasePath)("/_next/data/".concat(a.buildId).concat(t).concat(r?"":d))},y=(0,s.isDynamicRoute)(h),g=y?(0,u.interpolateAs)(i,m,f).result:"";return y?g&&v(g):v(h)}},{key:"_isSsg",value:function(e){var t=p((0,l.parseRelativeUrl)(e).pathname);return this.promisedSsgManifest.then((function(e){return e.has(t)}))}},{key:"loadPage",value:function(e){return this.routeLoader.loadRoute(e).then((function(e){if("component"in e)return{page:e.component,mod:e.exports,styleSheets:e.styles.map((function(e){return{href:e.href,text:e.content}}))};throw e.error}))}},{key:"prefetch",value:function(e){return this.routeLoader.prefetch(e)}}]),e}();t.default=d},4829:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,a=r(5866),o=(location.href,!1);function i(e){n&&n(e)}t.default=function(e){n=e,o||(o=!0,(0,a.getCLS)(i),(0,a.getFID)(i),(0,a.getFCP)(i),(0,a.getLCP)(i),(0,a.getTTFB)(i))}},9186:function(e,t){"use strict";var r;t.__esModule=!0,t.setConfig=function(e){r=e},t.default=void 0;t.default=function(){return r}},5866:function(e){e.exports=function(){var e={692:function(e,t){!function(e){"use strict";var t,r,n=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},a=function(e){return{name:e,value:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,delta:0,entries:[],id:n(),isFinal:!1}},o=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return r.observe({type:e,buffered:!0}),r}}catch(e){}},i=!1,u=!1,c=function(e){i=!e.persisted},s=function(){addEventListener("pagehide",c),addEventListener("beforeunload",(function(){}))},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u||(s(),u=!0),addEventListener("visibilitychange",(function(t){var r=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:r,isUnloading:i})}),{capture:!0,once:t})},f=function(e,t,r,n){var a;return function(){r&&t.isFinal&&r.disconnect(),t.value>=0&&(n||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(a||0),(t.delta||t.isFinal||void 0===a)&&(e(t),a=t.value))}},p=function(){return void 0===t&&(t="hidden"===document.visibilityState?0:1/0,l((function(e){var r=e.timeStamp;return t=r}),!0)),{get timeStamp(){return t}}},d=function(){return r||(r=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),r};e.getCLS=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a("CLS",0),i=function(e){e.hadRecentInput||(n.value+=e.value,n.entries.push(e),t())},u=o("layout-shift",i);u&&(t=f(e,n,u,r),l((function(e){var r=e.isUnloading;u.takeRecords().map(i),r&&(n.isFinal=!0),t()})))},e.getFCP=function(e){var t,r=a("FCP"),n=p(),i=o("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<n.timeStamp&&(r.value=e.startTime,r.isFinal=!0,r.entries.push(e),t())}));i&&(t=f(e,r,i))},e.getFID=function(e){var t=a("FID"),r=p(),n=function(e){e.startTime<r.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,u())},i=o("first-input",n),u=f(e,t,i);i?l((function(){i.takeRecords().map(n),i.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,n){n.timeStamp<r.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+e}],u())}))},e.getLCP=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a("LCP"),i=p(),u=function(e){var r=e.startTime;r<i.timeStamp?(n.value=r,n.entries.push(e)):n.isFinal=!0,t()},c=o("largest-contentful-paint",u);if(c){t=f(e,n,c,r);var s=function(){n.isFinal||(c.takeRecords().map(u),n.isFinal=!0,t())};d().then(s),l(s,!0)}},e.getTTFB=function(e){var t,r=a("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var r in e)"navigationStart"!==r&&"toJSON"!==r&&(t[r]=Math.max(e[r]-e.navigationStart,0));return t}();r.value=r.delta=t.responseStart,r.entries=[t],r.isFinal=!0,e(r)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)},Object.defineProperty(e,"__esModule",{value:!0})}(t)}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}},o=!0;try{e[n].call(a.exports,a,a.exports,r),o=!1}finally{o&&delete t[n]}return a.exports}return r.ab="//",r(692)}()}},0,[[5778,272,774,351]]]);
//# sourceMappingURL=main-2d02739c5ff8cca9cba4.js.map