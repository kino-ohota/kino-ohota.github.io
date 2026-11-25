const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/export-CsPotGo8.js","assets/zipFiles-BzCnSlv5.js"])))=>i.map(i=>d[i]);
import{t as e}from"./zipFiles-BzCnSlv5.js";var t=Object.create,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,s=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),c=(e,t,a,s)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var c=i(t),l=0,u=c.length,d;l<u;l++)d=c[l],!o.call(e,d)&&d!==a&&n(e,d,{get:(e=>t[e]).bind(null,d),enumerable:!(s=r(t,d))||s.enumerable});return e},l=(e,r,i)=>(i=e==null?{}:t(a(e)),c(r||!e||!e.__esModule?n(i,`default`,{value:e,enumerable:!0}):i,e));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function ee(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function j(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function M(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,M(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ee(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),M(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ee(a,u),c+=M(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ee(a,u++),c+=M(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return M(j(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function N(e,t,n){if(e==null)return e;var r=[],i=0;return M(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function te(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var P=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},F={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=F,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:te}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,P)}catch(e){P(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),d=s(((e,t)=>{t.exports=u()})),f=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&ee(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ee(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function ee(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ee(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),h=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=s((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),ee=Symbol.iterator;function j(e){return typeof e!=`object`||!e?null:(e=ee&&e[ee]||e[`@@iterator`],typeof e==`function`?e:null)}var M=Symbol.for(`react.client.reference`);function N(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===M?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?N(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return N(e(t))}catch{}}return null}var te=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},re=[],ie=-1;function I(e){return{current:e}}function L(e){0>ie||(e.current=re[ie],re[ie]=null,ie--)}function R(e,t){ie++,re[ie]=e.current,e.current=t}var z=I(null),B=I(null),ae=I(null),oe=I(null);function se(e,t){switch(R(ae,t),R(B,e),R(z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}L(z),R(z,e)}function ce(){L(z),L(B),L(ae)}function le(e){e.memoizedState!==null&&R(oe,e);var t=z.current,n=Hd(t,e.type);t!==n&&(R(B,e),R(z,n))}function ue(e){B.current===e&&(L(z),L(B)),oe.current===e&&(L(oe),Qf._currentValue=ne)}var V,de;function fe(e){if(V===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);V=t&&t[1]||``,de=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+V+e+de}var pe=!1;function me(e,t){if(!e||pe)return``;pe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{pe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?fe(n):``}function he(e,t){switch(e.tag){case 26:case 27:case 5:return fe(e.type);case 16:return fe(`Lazy`);case 13:return e.child!==t&&t!==null?fe(`Suspense Fallback`):fe(`Suspense`);case 19:return fe(`SuspenseList`);case 0:case 15:return me(e.type,!1);case 11:return me(e.type.render,!1);case 1:return me(e.type,!0);case 31:return fe(`Activity`);default:return``}}function ge(e){try{var t=``,n=null;do t+=he(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var _e=Object.prototype.hasOwnProperty,ve=t.unstable_scheduleCallback,ye=t.unstable_cancelCallback,be=t.unstable_shouldYield,xe=t.unstable_requestPaint,Se=t.unstable_now,Ce=t.unstable_getCurrentPriorityLevel,we=t.unstable_ImmediatePriority,Te=t.unstable_UserBlockingPriority,Ee=t.unstable_NormalPriority,De=t.unstable_LowPriority,Oe=t.unstable_IdlePriority,ke=t.log,Ae=t.unstable_setDisableYieldValue,je=null,Me=null;function Ne(e){if(typeof ke==`function`&&Ae(e),Me&&typeof Me.setStrictMode==`function`)try{Me.setStrictMode(je,e)}catch{}}var Pe=Math.clz32?Math.clz32:Le,Fe=Math.log,Ie=Math.LN2;function Le(e){return e>>>=0,e===0?32:31-(Fe(e)/Ie|0)|0}var Re=256,ze=262144,Be=4194304;function Ve(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function He(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ve(n))):i=Ve(o):i=Ve(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ve(n))):i=Ve(o)):i=Ve(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ue(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function We(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ge(){var e=Be;return Be<<=1,!(Be&62914560)&&(Be=4194304),e}function Ke(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Je(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Pe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Ye(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Ye(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Pe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Xe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Ze(e,t){var n=t&-t;return n=n&42?1:Qe(n),(n&(e.suspendedLanes|t))===0?n:0}function Qe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $e(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function et(){var e=F.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function tt(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var nt=Math.random().toString(36).slice(2),rt=`__reactFiber$`+nt,it=`__reactProps$`+nt,at=`__reactContainer$`+nt,ot=`__reactEvents$`+nt,st=`__reactListeners$`+nt,ct=`__reactHandles$`+nt,lt=`__reactResources$`+nt,ut=`__reactMarker$`+nt;function dt(e){delete e[rt],delete e[it],delete e[ot],delete e[st],delete e[ct]}function ft(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[rt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function pt(e){if(e=e[rt]||e[at]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function mt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function ht(e){var t=e[lt];return t||=e[lt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function gt(e){e[ut]=!0}var _t=new Set,vt={};function yt(e,t){bt(e,t),bt(e+`Capture`,t)}function bt(e,t){for(vt[e]=t,e=0;e<t.length;e++)_t.add(t[e])}var xt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),St={},Ct={};function wt(e){return _e.call(Ct,e)?!0:_e.call(St,e)?!1:xt.test(e)?Ct[e]=!0:(St[e]=!0,!1)}function Tt(e,t,n){if(wt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Et(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Dt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ot(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function kt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function At(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jt(e){if(!e._valueTracker){var t=kt(e)?`checked`:`value`;e._valueTracker=At(e,t,``+e[t])}}function Mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=kt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Nt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Pt=/[\n"\\]/g;function Ft(e){return e.replace(Pt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function It(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ot(t)):e.value!==``+Ot(t)&&(e.value=``+Ot(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Rt(e,o,Ot(n)):Rt(e,o,Ot(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ot(s):e.removeAttribute(`name`)}function Lt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){jt(e);return}n=n==null?``:``+Ot(n),t=t==null?n:``+Ot(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),jt(e)}function Rt(e,t,n){t===`number`&&Nt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ot(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bt(e,t,n){if(t!=null&&(t=``+Ot(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ot(n)}function Vt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(te(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ot(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),jt(e)}function Ht(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ut=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Wt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Ut.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Gt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Wt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Wt(e,o,t[o])}function Kt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var qt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Jt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yt(e){return Jt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Xt(){}var Zt=null;function Qt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $t=null,en=null;function tn(e){var t=pt(e);if(t&&(e=t.stateNode)){var n=e[it]||null;a:switch(e=t.stateNode,t.type){case`input`:if(It(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ft(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[it]||null;if(!a)throw Error(i(90));It(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Mt(r)}break a;case`textarea`:Bt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&zt(e,!!n.multiple,t,!1)}}}var nn=!1;function rn(e,t,n){if(nn)return e(t,n);nn=!0;try{return e(t)}finally{if(nn=!1,($t!==null||en!==null)&&(vu(),$t&&(t=$t,e=en,en=$t=null,tn(t),e)))for(t=0;t<e.length;t++)tn(e[t])}}function an(e,t){var n=e.stateNode;if(n===null)return null;var r=n[it]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var on=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),sn=!1;if(on)try{var cn={};Object.defineProperty(cn,`passive`,{get:function(){sn=!0}}),window.addEventListener(`test`,cn,cn),window.removeEventListener(`test`,cn,cn)}catch{sn=!1}var ln=null,un=null,dn=null;function fn(){if(dn)return dn;var e,t=un,n=t.length,r,i=`value`in ln?ln.value:ln.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return dn=i.slice(e,1<r?1-r:void 0)}function pn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mn(){return!0}function hn(){return!1}function gn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?mn:hn,this.isPropagationStopped=hn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=mn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=mn)},persist:function(){},isPersistent:mn}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vn=gn(_n),yn=m({},_n,{view:0,detail:0}),bn=gn(yn),xn,Sn,Cn,wn=m({},yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Cn&&(Cn&&e.type===`mousemove`?(xn=e.screenX-Cn.screenX,Sn=e.screenY-Cn.screenY):Sn=xn=0,Cn=e),xn)},movementY:function(e){return`movementY`in e?e.movementY:Sn}}),Tn=gn(wn),En=gn(m({},wn,{dataTransfer:0})),Dn=gn(m({},yn,{relatedTarget:0})),On=gn(m({},_n,{animationName:0,elapsedTime:0,pseudoElement:0})),kn=gn(m({},_n,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),An=gn(m({},_n,{data:0})),jn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Mn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Nn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Pn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nn[e])?!!t[e]:!1}function Fn(){return Pn}var In=gn(m({},yn,{key:function(e){if(e.key){var t=jn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=pn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Mn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fn,charCode:function(e){return e.type===`keypress`?pn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?pn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Ln=gn(m({},wn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Rn=gn(m({},yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fn})),zn=gn(m({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0})),Bn=gn(m({},wn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Vn=gn(m({},_n,{newState:0,oldState:0})),Hn=[9,13,27,32],Un=on&&`CompositionEvent`in window,Wn=null;on&&`documentMode`in document&&(Wn=document.documentMode);var Gn=on&&`TextEvent`in window&&!Wn,Kn=on&&(!Un||Wn&&8<Wn&&11>=Wn),qn=` `,Jn=!1;function Yn(e,t){switch(e){case`keyup`:return Hn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Xn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Zn=!1;function Qn(e,t){switch(e){case`compositionend`:return Xn(t);case`keypress`:return t.which===32?(Jn=!0,qn):null;case`textInput`:return e=t.data,e===qn&&Jn?null:e;default:return null}}function $n(e,t){if(Zn)return e===`compositionend`||!Un&&Yn(e,t)?(e=fn(),dn=un=ln=null,Zn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Kn&&t.locale!==`ko`?null:t.data;default:return null}}var er={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!er[e.type]:t===`textarea`}function nr(e,t,n,r){$t?en?en.push(r):en=[r]:$t=r,t=Td(t,`onChange`),0<t.length&&(n=new vn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var rr=null,ir=null;function ar(e){vd(e,0)}function or(e){if(Mt(mt(e)))return e}function sr(e,t){if(e===`change`)return t}var cr=!1;if(on){var lr;if(on){var ur=`oninput`in document;if(!ur){var H=document.createElement(`div`);H.setAttribute(`oninput`,`return;`),ur=typeof H.oninput==`function`}lr=ur}else lr=!1;cr=lr&&(!document.documentMode||9<document.documentMode)}function dr(){rr&&(rr.detachEvent(`onpropertychange`,fr),ir=rr=null)}function fr(e){if(e.propertyName===`value`&&or(ir)){var t=[];nr(t,ir,e,Qt(e)),rn(ar,t)}}function pr(e,t,n){e===`focusin`?(dr(),rr=t,ir=n,rr.attachEvent(`onpropertychange`,fr)):e===`focusout`&&dr()}function mr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return or(ir)}function hr(e,t){if(e===`click`)return or(t)}function gr(e,t){if(e===`input`||e===`change`)return or(t)}function _r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var vr=typeof Object.is==`function`?Object.is:_r;function yr(e,t){if(vr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_e.call(t,i)||!vr(e[i],t[i]))return!1}return!0}function br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xr(e,t){var n=br(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=br(n)}}function Sr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Nt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Nt(e.document)}return t}function U(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var wr=on&&`documentMode`in document&&11>=document.documentMode,Tr=null,Er=null,Dr=null,Or=!1;function kr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Or||Tr==null||Tr!==Nt(r)||(r=Tr,`selectionStart`in r&&U(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&yr(Dr,r)||(Dr=r,r=Td(Er,`onSelect`),0<r.length&&(t=new vn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Tr)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var jr={animationend:Ar(`Animation`,`AnimationEnd`),animationiteration:Ar(`Animation`,`AnimationIteration`),animationstart:Ar(`Animation`,`AnimationStart`),transitionrun:Ar(`Transition`,`TransitionRun`),transitionstart:Ar(`Transition`,`TransitionStart`),transitioncancel:Ar(`Transition`,`TransitionCancel`),transitionend:Ar(`Transition`,`TransitionEnd`)},Mr={},Nr={};on&&(Nr=document.createElement(`div`).style,`AnimationEvent`in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),`TransitionEvent`in window||delete jr.transitionend.transition);function Pr(e){if(Mr[e])return Mr[e];if(!jr[e])return e;var t=jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nr)return Mr[e]=t[n];return e}var Fr=Pr(`animationend`),Ir=Pr(`animationiteration`),Lr=Pr(`animationstart`),Rr=Pr(`transitionrun`),zr=Pr(`transitionstart`),Br=Pr(`transitioncancel`),Vr=Pr(`transitionend`),Hr=new Map,Ur=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Ur.push(`scrollEnd`);function Wr(e,t){Hr.set(e,t),yt(t,[e])}var Gr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Kr=[],qr=0,Jr=0;function Yr(){for(var e=qr,t=Jr=qr=0;t<e;){var n=Kr[t];Kr[t++]=null;var r=Kr[t];Kr[t++]=null;var i=Kr[t];Kr[t++]=null;var a=Kr[t];if(Kr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&$r(n,i,a)}}function Xr(e,t,n,r){Kr[qr++]=e,Kr[qr++]=t,Kr[qr++]=n,Kr[qr++]=r,Jr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Zr(e,t,n,r){return Xr(e,t,n,r),ei(e)}function Qr(e,t){return Xr(e,null,null,t),ei(e)}function $r(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Pe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ei(e){if(50<lu)throw lu=0,uu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ti={};function ni(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,t,n,r){return new ni(e,t,n,r)}function ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ai(e,t){var n=e.alternate;return n===null?(n=ri(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function oi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function si(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ii(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,z.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=ri(31,n,t,a),e.elementType=k,e.lanes=o,e;case y:return ci(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ri(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ri(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ri(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ri(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ci(e,t,n,r){return e=ri(7,e,r,t),e.lanes=n,e}function li(e,t,n){return e=ri(6,e,null,t),e.lanes=n,e}function ui(e){var t=ri(18,null,null,0);return t.stateNode=e,t}function di(e,t,n){return t=ri(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var fi=new WeakMap;function pi(e,t){if(typeof e==`object`&&e){var n=fi.get(e);return n===void 0?(t={value:e,source:t,stack:ge(t)},fi.set(e,t),t):n}return{value:e,source:t,stack:ge(t)}}var mi=[],hi=0,gi=null,_i=0,vi=[],yi=0,bi=null,xi=1,Si=``;function Ci(e,t){mi[hi++]=_i,mi[hi++]=gi,gi=e,_i=t}function wi(e,t,n){vi[yi++]=xi,vi[yi++]=Si,vi[yi++]=bi,bi=e;var r=xi;e=Si;var i=32-Pe(r)-1;r&=~(1<<i),n+=1;var a=32-Pe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xi=1<<32-Pe(t)+i|n<<i|r,Si=a+e}else xi=1<<a|n<<i|r,Si=e}function Ti(e){e.return!==null&&(Ci(e,1),wi(e,1,0))}function Ei(e){for(;e===gi;)gi=mi[--hi],mi[hi]=null,_i=mi[--hi],mi[hi]=null;for(;e===bi;)bi=vi[--yi],vi[yi]=null,Si=vi[--yi],vi[yi]=null,xi=vi[--yi],vi[yi]=null}function Di(e,t){vi[yi++]=xi,vi[yi++]=Si,vi[yi++]=bi,xi=t.id,Si=t.overflow,bi=e}var Oi=null,ki=null,W=!1,Ai=null,ji=!1,Mi=Error(i(519));function Ni(e){throw zi(pi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Mi}function Pi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[rt]=e,t[it]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<gd.length;n++)$(gd[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),Lt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),Vt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||Ni(e,!0)}function Fi(e){for(Oi=e.return;Oi;)switch(Oi.tag){case 5:case 31:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:Oi=Oi.return}}function Ii(e){if(e!==Oi)return!1;if(!W)return Fi(e),W=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&ki&&Ni(e),Fi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ki=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ki=uf(e)}else t===27?(t=ki,Zd(e.type)?(e=lf,lf=null,ki=e):ki=t):ki=Oi?cf(e.stateNode.nextSibling):null;return!0}function Li(){ki=Oi=null,W=!1}function Ri(){var e=Ai;return e!==null&&(Yl===null?Yl=e:Yl.push.apply(Yl,e),Ai=null),e}function zi(e){Ai===null?Ai=[e]:Ai.push(e)}var Bi=I(null),Vi=null,Hi=null;function Ui(e,t,n){R(Bi,t._currentValue),t._currentValue=n}function Wi(e){e._currentValue=Bi.current,L(Bi)}function Gi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ki(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Gi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Gi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function qi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;vr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===oe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Ki(t,e,n,r),t.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!vr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Yi(e){Vi=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xi(e){return Qi(Vi,e)}function Zi(e,t){return Vi===null&&Yi(e),Qi(e,t)}function Qi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Hi===null){if(e===null)throw Error(i(308));Hi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Hi=Hi.next=t;return n}var $i=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ea=t.unstable_scheduleCallback,ta=t.unstable_NormalPriority,na={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ra(){return{controller:new $i,data:new Map,refCount:0}}function ia(e){e.refCount--,e.refCount===0&&ea(ta,function(){e.controller.abort()})}var aa=null,oa=0,sa=0,ca=null;function la(e,t){if(aa===null){var n=aa=[];oa=0,sa=ud(),ca={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return oa++,t.then(ua,ua),t}function ua(){if(--oa===0&&aa!==null){ca!==null&&(ca.status=`fulfilled`);var e=aa;aa=null,sa=0,ca=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function da(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var fa=P.S;P.S=function(e,t){Ql=Se(),typeof t==`object`&&t&&typeof t.then==`function`&&la(e,t),fa!==null&&fa(e,t)};var pa=I(null);function ma(){var e=pa.current;return e===null?X.pooledCache:e}function ha(e,t){t===null?R(pa,pa.current):R(pa,t.pool)}function ga(){var e=ma();return e===null?null:{parent:na._currentValue,pool:e}}var _a=Error(i(460)),va=Error(i(474)),ya=Error(i(542)),ba={then:function(){}};function xa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Sa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Xt,Xt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ea(e),e;default:if(typeof t.status==`string`)t.then(Xt,Xt);else{if(e=X,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ea(e),e}throw wa=t,_a}}function Ca(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(wa=e,_a):e}}var wa=null;function Ta(){if(wa===null)throw Error(i(459));var e=wa;return wa=null,e}function Ea(e){if(e===_a||e===ya)throw Error(i(483))}var Da=null,Oa=0;function ka(e){var t=Oa;return Oa+=1,Da===null&&(Da=[]),Sa(Da,e,t)}function Aa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ja(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ma(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ai(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=li(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Ca(i)===t.type)?(t=a(t,n.props),Aa(t,n),t.return=e,t):(t=si(n.type,n.key,n.props,null,e.mode,r),Aa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=di(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ci(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=li(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=si(t.type,t.key,t.props,null,e.mode,n),Aa(n,t),n.return=e,n;case v:return t=di(t,e.mode,n),t.return=e,t;case O:return t=Ca(t),f(e,t,n)}if(te(t)||j(t))return t=ci(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ka(t),n);if(t.$$typeof===C)return f(e,Zi(e,t),n);ja(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Ca(n),p(e,t,n,r)}if(te(n)||j(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ka(n),r);if(n.$$typeof===C)return p(e,t,Zi(e,n),r);ja(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Ca(r),m(e,t,n,r,i)}if(te(r)||j(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ka(r),i);if(r.$$typeof===C)return m(e,t,n,Zi(t,r),i);ja(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),W&&Ci(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return W&&Ci(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),W&&Ci(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),W&&Ci(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return W&&Ci(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),W&&Ci(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Ca(l)===r.type){n(e,r.sibling),c=a(r,o.props),Aa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=ci(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=si(o.type,o.key,o.props,null,e.mode,c),Aa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=di(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Ca(o),b(e,r,o,c)}if(te(o))return h(e,r,o,c);if(j(o)){if(l=j(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,ka(o),c);if(o.$$typeof===C)return b(e,r,Zi(e,o),c);ja(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=li(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Oa=0;var i=b(e,t,n,r);return Da=null,i}catch(t){if(t===_a||t===ya)throw t;var a=ri(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Na=Ma(!0),Pa=Ma(!1),Fa=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function La(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ei(e),$r(e,null,n),t}return Xr(e,r,t,n),ei(e)}function Ba(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xe(e,n)}}function Va(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ha=!1;function Ua(){if(Ha){var e=ca;if(e!==null)throw e}}function Wa(e,t,n,r){Ha=!1;var i=e.updateQueue;Fa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Q&f)===f:(r&f)===f){f!==0&&f===sa&&(Ha=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Fa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Ul|=o,e.lanes=o,e.memoizedState=d}}function Ga(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ka(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ga(n[e],t)}var qa=I(null),Ja=I(0);function Ya(e,t){e=Vl,R(Ja,e),R(qa,t),Vl=e|t.baseLanes}function Xa(){R(Ja,Vl),R(qa,qa.current)}function Za(){Vl=Ja.current,L(qa),L(Ja)}var Qa=I(null),$a=null;function eo(e){var t=e.alternate;R(ao,ao.current&1),R(Qa,e),$a===null&&(t===null||qa.current!==null||t.memoizedState!==null)&&($a=e)}function to(e){R(ao,ao.current),R(Qa,e),$a===null&&($a=e)}function no(e){e.tag===22?(R(ao,ao.current),R(Qa,e),$a===null&&($a=e)):ro(e)}function ro(){R(ao,ao.current),R(Qa,Qa.current)}function io(e){L(Qa),$a===e&&($a=null),L(ao)}var ao=I(0);function oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var so=0,G=null,co=null,lo=null,K=!1,uo=!1,fo=!1,po=0,mo=0,ho=null,go=0;function _o(){throw Error(i(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vr(e[n],t[n]))return!1;return!0}function yo(e,t,n,r,i,a){return so=a,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?Ps:Fs,fo=!1,a=n(r,i),fo=!1,uo&&(a=xo(t,n,r,i)),bo(e),a}function bo(e){P.H=Ns;var t=co!==null&&co.next!==null;if(so=0,lo=co=G=null,K=!1,mo=0,ho=null,t)throw Error(i(300));e===null||Qs||(e=e.dependencies,e!==null&&Ji(e)&&(Qs=!0))}function xo(e,t,n,r){G=e;var a=0;do{if(uo&&(ho=null),mo=0,uo=!1,25<=a)throw Error(i(301));if(a+=1,lo=co=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=Is,o=t(n,r)}while(uo);return o}function So(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?q(t):t,e=e.useState()[0],(co===null?null:co.memoizedState)!==e&&(G.flags|=1024),t}function Co(){var e=po!==0;return po=0,e}function wo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function To(e){if(K){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}K=!1}so=0,lo=co=G=null,uo=!1,mo=po=0,ho=null}function Eo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?G.memoizedState=lo=e:lo=lo.next=e,lo}function Do(){if(co===null){var e=G.alternate;e=e===null?null:e.memoizedState}else e=co.next;var t=lo===null?G.memoizedState:lo.next;if(t!==null)lo=t,co=e;else{if(e===null)throw G.alternate===null?Error(i(467)):Error(i(310));co=e,e={memoizedState:co.memoizedState,baseState:co.baseState,baseQueue:co.baseQueue,queue:co.queue,next:null},lo===null?G.memoizedState=lo=e:lo=lo.next=e}return lo}function Oo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function q(e){var t=mo;return mo+=1,ho===null&&(ho=[]),e=Sa(ho,e,t),t=G,(lo===null?t.memoizedState:lo.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?Ps:Fs),e}function ko(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return q(e);if(e.$$typeof===C)return Xi(e)}throw Error(i(438,String(e)))}function Ao(e){var t=null,n=G.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=G.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Oo(),G.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function jo(e,t){return typeof t==`function`?t(e):t}function Mo(e){return No(Do(),co,e)}function No(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(so&f)===f:(Q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===sa&&(d=!0);else if((so&p)===p){u=u.next,p===sa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,G.lanes|=p,Ul|=p;f=u.action,fo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,G.lanes|=f,Ul|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!vr(o,e.memoizedState)&&(Qs=!0,d&&(n=ca,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Po(e){var t=Do(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);vr(o,t.memoizedState)||(Qs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Fo(e,t,n){var r=G,a=Do(),o=W;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!vr((co||a).memoizedState,n);if(s&&(a.memoizedState=n,Qs=!0),a=a.queue,as(J.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,es(9,{destroy:void 0},Lo.bind(null,r,a,n,t),null),X===null)throw Error(i(349));o||so&127||Io(r,t,n)}return n}function Io(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t=Oo(),G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lo(e,t,n,r){t.value=n,t.getSnapshot=r,Ro(t)&&zo(e)}function J(e,t,n){return n(function(){Ro(t)&&zo(e)})}function Ro(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vr(e,n)}catch{return!0}}function zo(e){var t=Qr(e,2);t!==null&&pu(t,e,2)}function Bo(e){var t=Eo();if(typeof e==`function`){var n=e;if(e=n(),fo){Ne(!0);try{n()}finally{Ne(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:e},t}function Vo(e,t,n,r){return e.baseState=n,No(e,co,typeof r==`function`?r:jo)}function Ho(e,t,n,r,a){if(As(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};P.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Uo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Uo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=P.T,o={};P.T=o;try{var s=n(i,r),c=P.S;c!==null&&c(o,s),Wo(e,t,s)}catch(n){Ko(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),P.T=a}}else try{a=n(i,r),Wo(e,t,a)}catch(n){Ko(e,t,n)}}function Wo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Go(e,t,n)},function(n){return Ko(e,t,n)}):Go(e,t,n)}function Go(e,t,n){t.status=`fulfilled`,t.value=n,qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Uo(e,n)))}function Ko(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,qo(t),t=t.next;while(t!==r)}e.action=null}function qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Jo(e,t){return t}function Yo(e,t){if(W){var n=X.formState;if(n!==null){a:{var r=G;if(W){if(ki){b:{for(var i=ki,a=ji;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){ki=cf(i.nextSibling),r=i.data===`F!`;break a}}Ni(r)}r=!1}r&&(t=n[0])}}return n=Eo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},n.queue=r,n=Ds.bind(null,G,r),r.dispatch=n,r=Bo(!1),a=ks.bind(null,G,!1,r.queue),r=Eo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ho.bind(null,G,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Xo(e){return Zo(Do(),co,e)}function Zo(e,t,n){if(t=No(e,t,Jo)[0],e=Mo(jo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=q(t)}catch(e){throw e===_a?ya:e}else r=t;t=Do();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(G.flags|=2048,es(9,{destroy:void 0},Qo.bind(null,i,n),null)),[r,a,e]}function Qo(e,t){e.action=t}function $o(e){var t=Do(),n=co;if(n!==null)return Zo(t,n,e);Do(),t=t.memoizedState,n=Do();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function es(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=G.updateQueue,t===null&&(t=Oo(),G.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ts(){return Do().memoizedState}function ns(e,t,n,r){var i=Eo();G.flags|=e,i.memoizedState=es(1|t,{destroy:void 0},n,r===void 0?null:r)}function rs(e,t,n,r){var i=Do();r=r===void 0?null:r;var a=i.memoizedState.inst;co!==null&&r!==null&&vo(r,co.memoizedState.deps)?i.memoizedState=es(t,a,n,r):(G.flags|=e,i.memoizedState=es(1|t,a,n,r))}function is(e,t){ns(8390656,8,e,t)}function as(e,t){rs(2048,8,e,t)}function os(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=Oo(),G.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ss(e){var t=Do().memoizedState;return os({ref:t,nextImpl:e}),function(){if(Y&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function cs(e,t){return rs(4,2,e,t)}function ls(e,t){return rs(4,4,e,t)}function us(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ds(e,t,n){n=n==null?null:n.concat([e]),rs(4,4,us.bind(null,t,e),n)}function fs(){}function ps(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ms(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&vo(t,r[1]))return r[0];if(r=e(),fo){Ne(!0);try{e()}finally{Ne(!1)}}return n.memoizedState=[r,t],r}function hs(e,t,n){return n===void 0||so&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=n,e=fu(),G.lanes|=e,Ul|=e,n)}function gs(e,t,n,r){return vr(n,t)?n:qa.current===null?!(so&42)||so&1073741824&&!(Q&261930)?(Qs=!0,e.memoizedState=n):(e=fu(),G.lanes|=e,Ul|=e,t):(e=hs(e,n,r),vr(e,t)||(Qs=!0),e)}function _s(e,t,n,r,i){var a=F.p;F.p=a!==0&&8>a?a:8;var o=P.T,s={};P.T=s,ks(e,!1,t,n);try{var c=i(),l=P.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Os(e,t,da(c,r),du(e)):Os(e,t,r,du(e))}catch(n){Os(e,t,{then:function(){},status:`rejected`,reason:n},du())}finally{F.p=a,o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}function vs(){}function ys(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=bs(e).queue;_s(e,a,t,ne,n===null?vs:function(){return xs(e),n(r)})}function bs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xs(e){var t=bs(e);t.next===null&&(t=e.alternate.memoizedState),Os(e,t.next.queue,{},du())}function Ss(){return Xi(Qf)}function Cs(){return Do().memoizedState}function ws(){return Do().memoizedState}function Ts(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=du();e=Ra(n);var r=za(t,e,n);r!==null&&(pu(r,t,n),Ba(r,t,n)),t={cache:ra()},e.payload=t;return}t=t.return}}function Es(e,t,n){var r=du();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},As(e)?js(t,n):(n=Zr(e,t,n,r),n!==null&&(pu(n,e,r),Ms(n,t,r)))}function Ds(e,t,n){Os(e,t,n,du())}function Os(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(As(e))js(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,vr(s,o))return Xr(e,t,i,0),X===null&&Yr(),!1}catch{}if(n=Zr(e,t,i,r),n!==null)return pu(n,e,r),Ms(n,t,r),!0}return!1}function ks(e,t,n,r){if(r={lane:2,revertLane:ud(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},As(e)){if(t)throw Error(i(479))}else t=Zr(e,n,r,2),t!==null&&pu(t,e,2)}function As(e){var t=e.alternate;return e===G||t!==null&&t===G}function js(e,t){uo=K=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ms(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xe(e,n)}}var Ns={readContext:Xi,use:ko,useCallback:_o,useContext:_o,useEffect:_o,useImperativeHandle:_o,useLayoutEffect:_o,useInsertionEffect:_o,useMemo:_o,useReducer:_o,useRef:_o,useState:_o,useDebugValue:_o,useDeferredValue:_o,useTransition:_o,useSyncExternalStore:_o,useId:_o,useHostTransitionStatus:_o,useFormState:_o,useActionState:_o,useOptimistic:_o,useMemoCache:_o,useCacheRefresh:_o};Ns.useEffectEvent=_o;var Ps={readContext:Xi,use:ko,useCallback:function(e,t){return Eo().memoizedState=[e,t===void 0?null:t],e},useContext:Xi,useEffect:is,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ns(4194308,4,us.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ns(4194308,4,e,t)},useInsertionEffect:function(e,t){ns(4,2,e,t)},useMemo:function(e,t){var n=Eo();t=t===void 0?null:t;var r=e();if(fo){Ne(!0);try{e()}finally{Ne(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Eo();if(n!==void 0){var i=n(t);if(fo){Ne(!0);try{n(t)}finally{Ne(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Es.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Eo();return e={current:e},t.memoizedState=e},useState:function(e){e=Bo(e);var t=e.queue,n=Ds.bind(null,G,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:fs,useDeferredValue:function(e,t){return hs(Eo(),e,t)},useTransition:function(){var e=Bo(!1);return e=_s.bind(null,G,e.queue,!0,!1),Eo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=G,a=Eo();if(W){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),X===null)throw Error(i(349));Q&127||Io(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,is(J.bind(null,r,o,e),[e]),r.flags|=2048,es(9,{destroy:void 0},Lo.bind(null,r,o,n,t),null),n},useId:function(){var e=Eo(),t=X.identifierPrefix;if(W){var n=Si,r=xi;n=(r&~(1<<32-Pe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=po++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=go++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ss,useFormState:Yo,useActionState:Yo,useOptimistic:function(e){var t=Eo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ks.bind(null,G,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ao,useCacheRefresh:function(){return Eo().memoizedState=Ts.bind(null,G)},useEffectEvent:function(e){var t=Eo(),n={impl:e};return t.memoizedState=n,function(){if(Y&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Fs={readContext:Xi,use:ko,useCallback:ps,useContext:Xi,useEffect:as,useImperativeHandle:ds,useInsertionEffect:cs,useLayoutEffect:ls,useMemo:ms,useReducer:Mo,useRef:ts,useState:function(){return Mo(jo)},useDebugValue:fs,useDeferredValue:function(e,t){return gs(Do(),co.memoizedState,e,t)},useTransition:function(){var e=Mo(jo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:q(e),t]},useSyncExternalStore:Fo,useId:Cs,useHostTransitionStatus:Ss,useFormState:Xo,useActionState:Xo,useOptimistic:function(e,t){return Vo(Do(),co,e,t)},useMemoCache:Ao,useCacheRefresh:ws};Fs.useEffectEvent=ss;var Is={readContext:Xi,use:ko,useCallback:ps,useContext:Xi,useEffect:as,useImperativeHandle:ds,useInsertionEffect:cs,useLayoutEffect:ls,useMemo:ms,useReducer:Po,useRef:ts,useState:function(){return Po(jo)},useDebugValue:fs,useDeferredValue:function(e,t){var n=Do();return co===null?hs(n,e,t):gs(n,co.memoizedState,e,t)},useTransition:function(){var e=Po(jo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:q(e),t]},useSyncExternalStore:Fo,useId:Cs,useHostTransitionStatus:Ss,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){var n=Do();return co===null?(n.baseState=e,[e,n.queue.dispatch]):Vo(n,co,e,t)},useMemoCache:Ao,useCacheRefresh:ws};Is.useEffectEvent=ss;function Ls(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=du(),i=Ra(r);i.payload=t,n!=null&&(i.callback=n),t=za(e,i,r),t!==null&&(pu(t,e,r),Ba(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=du(),i=Ra(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=za(e,i,r),t!==null&&(pu(t,e,r),Ba(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=du(),r=Ra(n);r.tag=2,t!=null&&(r.callback=t),t=za(e,r,n),t!==null&&(pu(t,e,n),Ba(t,e,n))}};function zs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(i,a):!0}function Bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rs.enqueueReplaceState(t,t.state,null)}function Vs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Hs(e){Gr(e)}function Us(e){console.error(e)}function Ws(e){Gr(e)}function Gs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ks(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function qs(e,t,n){return n=Ra(n),n.tag=3,n.payload={element:null},n.callback=function(){Gs(e,t)},n}function Js(e){return e=Ra(e),e.tag=3,e}function Ys(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ks(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ks(t,n,r),typeof i!=`function`&&(tu===null?tu=new Set([this]):tu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Xs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&qi(t,n,a,!0),n=Qa.current,n!==null){switch(n.tag){case 31:case 13:return $a===null?Tu():n.alternate===null&&Hl===0&&(Hl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ba?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wu(e,r,a)),!1;case 22:return n.flags|=65536,r===ba?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wu(e,r,a)),!1}throw Error(i(435,n.tag))}return Wu(e,r,a),Tu(),!1}if(W)return t=Qa.current,t===null?(r!==Mi&&(t=Error(i(423),{cause:r}),zi(pi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=pi(r,n),a=qs(e.stateNode,r,a),Va(e,a),Hl!==4&&(Hl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Mi&&(e=Error(i(422),{cause:r}),zi(pi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=pi(o,n),Jl===null?Jl=[o]:Jl.push(o),Hl!==4&&(Hl=2),t===null)return!0;r=pi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=qs(n.stateNode,r,e),Va(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(tu===null||!tu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Js(a),Ys(a,e,n,r),Va(n,a),!1}n=n.return}while(n!==null);return!1}var Zs=Error(i(461)),Qs=!1;function $s(e,t,n,r){t.child=e===null?Pa(t,null,n,r):Na(t,e.child,n,r)}function ec(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Yi(t),r=yo(e,t,n,o,a,i),s=Co(),e!==null&&!Qs?(wo(e,t,i),wc(e,t,i)):(W&&s&&Ti(t),t.flags|=1,$s(e,t,r,i),t.child)}function tc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ii(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,nc(e,t,a,r,i)):(e=si(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Tc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?yr:n,n(o,r)&&e.ref===t.ref)return wc(e,t,i)}return t.flags|=1,e=ai(a,r),e.ref=t.ref,e.return=t,t.child=e}function nc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(yr(a,r)&&e.ref===t.ref)if(Qs=!1,t.pendingProps=r=a,Tc(e,i))e.flags&131072&&(Qs=!0);else return t.lanes=e.lanes,wc(e,t,i)}return uc(e,t,n,r,i)}function rc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return ac(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ha(t,a===null?null:a.cachePool),a===null?Xa():Ya(t,a),no(t);else return r=t.lanes=536870912,ac(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ha(t,null),Xa(),ro(t)):(ha(t,a.cachePool),Ya(t,a),ro(t),t.memoizedState=null);return $s(e,t,i,n),t.child}function ic(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ac(e,t,n,r,i){var a=ma();return a=a===null?null:{parent:na._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ha(t,null),Xa(),no(t),e!==null&&qi(e,t,r,!0),t.childLanes=i,null}function oc(e,t){return t=yc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sc(e,t,n){return Na(t,e.child,null,n),e=oc(t,t.pendingProps),e.flags|=2,io(t),t.memoizedState=null,e}function cc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(W){if(r.mode===`hidden`)return e=oc(t,r),t.lanes=536870912,ic(null,e);if(to(t),(e=ki)?(e=rf(e,ji),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bi===null?null:{id:xi,overflow:Si},retryLane:536870912,hydrationErrors:null},n=ui(e),n.return=t,t.child=n,Oi=t,ki=null)):e=null,e===null)throw Ni(t);return t.lanes=536870912,null}return oc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(to(t),a)if(t.flags&256)t.flags&=-257,t=sc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(Qs||qi(e,t,n,!1),a=(n&e.childLanes)!==0,Qs||a){if(r=X,r!==null&&(s=Ze(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Qr(e,s),pu(r,e,s),Zs;Tu(),t=sc(e,t,n)}else e=o.treeContext,ki=cf(s.nextSibling),Oi=t,W=!0,Ai=null,ji=!1,e!==null&&Di(t,e),t=oc(t,r),t.flags|=4096;return t}return e=ai(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function lc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function uc(e,t,n,r,i){return Yi(t),n=yo(e,t,n,r,void 0,i),r=Co(),e!==null&&!Qs?(wo(e,t,i),wc(e,t,i)):(W&&r&&Ti(t),t.flags|=1,$s(e,t,n,i),t.child)}function dc(e,t,n,r,i,a){return Yi(t),t.updateQueue=null,n=xo(t,r,n,i),bo(e),r=Co(),e!==null&&!Qs?(wo(e,t,a),wc(e,t,a)):(W&&r&&Ti(t),t.flags|=1,$s(e,t,n,a),t.child)}function fc(e,t,n,r,i){if(Yi(t),t.stateNode===null){var a=ti,o=n.contextType;typeof o==`object`&&o&&(a=Xi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Rs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ia(t),o=n.contextType,a.context=typeof o==`object`&&o?Xi(o):ti,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ls(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Rs.enqueueReplaceState(a,a.state,null),Wa(t,r,a,i),Ua(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Vs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ti,typeof u==`object`&&u&&(o=Xi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Bs(t,a,r,o),Fa=!1;var f=t.memoizedState;a.state=f,Wa(t,r,a,i),Ua(),l=t.memoizedState,s||f!==l||Fa?(typeof d==`function`&&(Ls(t,n,d,r),l=t.memoizedState),(c=Fa||zs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,La(e,t),o=t.memoizedProps,u=Vs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ti,typeof l==`object`&&l&&(c=Xi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Bs(t,a,r,c),Fa=!1,f=t.memoizedState,a.state=f,Wa(t,r,a,i),Ua();var p=t.memoizedState;o!==d||f!==p||Fa||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof s==`function`&&(Ls(t,n,s,r),p=t.memoizedState),(u=Fa||zs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,lc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Na(t,e.child,null,i),t.child=Na(t,null,n,i)):$s(e,t,n,i),t.memoizedState=a.state,e=t.child):e=wc(e,t,i),e}function pc(e,t,n,r){return Li(),t.flags|=256,$s(e,t,n,r),t.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(e){return{baseLanes:e,cachePool:ga()}}function gc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Kl),e}function _c(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(ao.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(W){if(a?eo(t):ro(t),(e=ki)?(e=rf(e,ji),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bi===null?null:{id:xi,overflow:Si},retryLane:536870912,hydrationErrors:null},n=ui(e),n.return=t,t.child=n,Oi=t,ki=null)):e=null,e===null)throw Ni(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ro(t),a=t.mode,c=yc({mode:`hidden`,children:c},a),r=ci(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=hc(n),r.childLanes=gc(e,s,n),t.memoizedState=mc,ic(null,r)):(eo(t),vc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(eo(t),t.flags&=-257,t=bc(e,t,n)):t.memoizedState===null?(ro(t),c=r.fallback,a=t.mode,r=yc({mode:`visible`,children:r.children},a),c=ci(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Na(t,e.child,null,n),r=t.child,r.memoizedState=hc(n),r.childLanes=gc(e,s,n),t.memoizedState=mc,t=ic(null,r)):(ro(t),t.child=e.child,t.flags|=128,t=null);else if(eo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,zi({value:r,source:null,stack:null}),t=bc(e,t,n)}else if(Qs||qi(e,t,n,!1),s=(n&e.childLanes)!==0,Qs||s){if(s=X,s!==null&&(r=Ze(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Qr(e,r),pu(s,e,r),Zs;af(c)||Tu(),t=bc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ki=cf(c.nextSibling),Oi=t,W=!0,Ai=null,ji=!1,e!==null&&Di(t,e),t=vc(t,r.children),t.flags|=4096);return t}return a?(ro(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ai(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ci(c,a,n,null),c.flags|=2):c=ai(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,ic(null,r),r=t.child,c=e.child.memoizedState,c===null?c=hc(n):(a=c.cachePool,a===null?a=ga():(l=na._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=gc(e,s,n),t.memoizedState=mc,ic(e.child,r)):(eo(t),n=e.child,e=n.sibling,n=ai(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function vc(e,t){return t=yc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function yc(e,t){return e=ri(22,e,null,t),e.lanes=0,e}function bc(e,t,n){return Na(t,e.child,null,n),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gi(e.return,t,n)}function Sc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Cc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=ao.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,R(ao,o),$s(e,t,r,n),r=W?_i:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xc(e,n,t);else if(e.tag===19)xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sc(t,!0,n,null,a,r);break;case`together`:Sc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function wc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ul|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(qi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ai(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ai(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Ji(e))):!0}function Ec(e,t,n){switch(t.tag){case 3:se(t,t.stateNode.containerInfo),Ui(t,na,e.memoizedState.cache),Li();break;case 27:case 5:le(t);break;case 4:se(t,t.stateNode.containerInfo);break;case 10:Ui(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,to(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(eo(t),e=wc(e,t,n),e===null?null:e.sibling):_c(e,t,n):(eo(t),t.flags|=128,null);eo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(qi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Cc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(ao,ao.current),r)break;return null;case 22:return t.lanes=0,rc(e,t,n,t.pendingProps);case 24:Ui(t,na,e.memoizedState.cache)}return wc(e,t,n)}function Dc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qs=!0;else{if(!Tc(e,n)&&!(t.flags&128))return Qs=!1,Ec(e,t,n);Qs=!!(e.flags&131072)}else Qs=!1,W&&t.flags&1048576&&wi(t,_i,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ca(t.elementType),t.type=e,typeof e==`function`)ii(e)?(r=Vs(e,r),t.tag=1,t=fc(null,t,e,r,n)):(t.tag=0,t=uc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ec(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=tc(null,t,e,r,n);break a}}throw t=N(e)||e,Error(i(306,t,``))}}return t;case 0:return uc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Vs(r,t.pendingProps),fc(e,t,r,a,n);case 3:a:{if(se(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,La(e,t),Wa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ui(t,na,r),r!==o.cache&&Ki(t,[na],n,!0),Ua(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=pc(e,t,r,n);break a}else if(r!==a){a=pi(Error(i(424)),t),zi(a),t=pc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(ki=cf(e.firstChild),Oi=t,W=!0,Ai=null,ji=!0,n=Pa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Li(),r===a){t=wc(e,t,n);break a}$s(e,t,r,n)}t=t.child}return t;case 26:return lc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:W||(n=t.type,e=t.pendingProps,r=Bd(ae.current).createElement(n),r[rt]=t,r[it]=e,Pd(r,n,e),gt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return le(t),e===null&&W&&(r=t.stateNode=ff(t.type,t.pendingProps,ae.current),Oi=t,ji=!0,a=ki,Zd(t.type)?(lf=a,ki=cf(r.firstChild)):ki=a),$s(e,t,t.pendingProps.children,n),lc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&W&&((a=r=ki)&&(r=tf(r,t.type,t.pendingProps,ji),r===null?a=!1:(t.stateNode=r,Oi=t,ki=cf(r.firstChild),ji=!1,a=!0)),a||Ni(t)),le(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=yo(e,t,So,null,null,n),Qf._currentValue=a),lc(e,t),$s(e,t,r,n),t.child;case 6:return e===null&&W&&((e=n=ki)&&(n=nf(n,t.pendingProps,ji),n===null?e=!1:(t.stateNode=n,Oi=t,ki=null,e=!0)),e||Ni(t)),null;case 13:return _c(e,t,n);case 4:return se(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Na(t,null,r,n):$s(e,t,r,n),t.child;case 11:return ec(e,t,t.type,t.pendingProps,n);case 7:return $s(e,t,t.pendingProps,n),t.child;case 8:return $s(e,t,t.pendingProps.children,n),t.child;case 12:return $s(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ui(t,t.type,r.value),$s(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Yi(t),a=Xi(a),r=r(a),t.flags|=1,$s(e,t,r,n),t.child;case 14:return tc(e,t,t.type,t.pendingProps,n);case 15:return nc(e,t,t.type,t.pendingProps,n);case 19:return Cc(e,t,n);case 31:return cc(e,t,n);case 22:return rc(e,t,n,t.pendingProps);case 24:return Yi(t),r=Xi(na),e===null?(a=ma(),a===null&&(a=X,o=ra(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ia(t),Ui(t,na,a)):((e.lanes&n)!==0&&(La(e,t),Wa(t,null,null,n),Ua()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ui(t,na,r),r!==a.cache&&Ki(t,[na],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ui(t,na,r))),$s(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Oc(e){e.flags|=4}function kc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Su())e.flags|=8192;else throw wa=ba,va}else e.flags&=-16777217}function Ac(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(Su())e.flags|=8192;else throw wa=ba,va}function jc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ge(),e.lanes|=t,ql|=t)}function Mc(e,t){if(!W)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Nc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pc(e,t,n){var r=t.pendingProps;switch(Ei(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nc(t),null;case 1:return Nc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Wi(na),ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ii(t)?Oc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ri())),Nc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Oc(t),o===null?(Nc(t),kc(t,a,null,r,n)):(Nc(t),Ac(t,o))):o?o===e.memoizedState?(Nc(t),t.flags&=-16777217):(Oc(t),Nc(t),Ac(t,o)):(e=e.memoizedProps,e!==r&&Oc(t),Nc(t),kc(t,a,e,r,n)),null;case 27:if(ue(t),n=ae.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Oc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Nc(t),null}e=z.current,Ii(t)?Pi(t,e):(e=ff(a,r,n),t.stateNode=e,Oc(t))}return Nc(t),null;case 5:if(ue(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Oc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Nc(t),null}if(o=z.current,Ii(t))Pi(t,o);else{var s=Bd(ae.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[rt]=t,o[it]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Oc(t)}}return Nc(t),kc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Oc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ae.current,Ii(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Oi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[rt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||Ni(t,!0)}else e=Bd(e).createTextNode(r),e[rt]=t,t.stateNode=e}return Nc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ii(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[rt]=t}else Li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Nc(t),e=!1}else n=Ri(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(io(t),t):(io(t),null);if(t.flags&128)throw Error(i(558))}return Nc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ii(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[rt]=t}else Li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Nc(t),a=!1}else a=Ri(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(io(t),t):(io(t),null)}return io(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),jc(t,t.updateQueue),Nc(t),null);case 4:return ce(),e===null&&xd(t.stateNode.containerInfo),Nc(t),null;case 10:return Wi(t.type),Nc(t),null;case 19:if(L(ao),r=t.memoizedState,r===null)return Nc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Mc(r,!1);else{if(Hl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=oo(e),o!==null){for(t.flags|=128,Mc(r,!1),e=o.updateQueue,t.updateQueue=e,jc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)oi(n,e),n=n.sibling;return R(ao,ao.current&1|2),W&&Ci(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Se()>$l&&(t.flags|=128,a=!0,Mc(r,!1),t.lanes=4194304)}else{if(!a)if(e=oo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,jc(t,e),Mc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!W)return Nc(t),null}else 2*Se()-r.renderingStartTime>$l&&n!==536870912&&(t.flags|=128,a=!0,Mc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Nc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Se(),e.sibling=null,n=ao.current,R(ao,a?n&1|2:n&1),W&&Ci(t,r.treeForkCount),e);case 22:case 23:return io(t),Za(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Nc(t),t.subtreeFlags&6&&(t.flags|=8192)):Nc(t),n=t.updateQueue,n!==null&&jc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&L(pa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wi(na),Nc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Fc(e,t){switch(Ei(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wi(na),ce(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ue(t),null;case 31:if(t.memoizedState!==null){if(io(t),t.alternate===null)throw Error(i(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(io(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(ao),null;case 4:return ce(),null;case 10:return Wi(t.type),null;case 22:case 23:return io(t),Za(),e!==null&&L(pa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wi(na),null;case 25:return null;default:return null}}function Ic(e,t){switch(Ei(t),t.tag){case 3:Wi(na),ce();break;case 26:case 27:case 5:ue(t);break;case 4:ce();break;case 31:t.memoizedState!==null&&io(t);break;case 13:io(t);break;case 19:L(ao);break;case 10:Wi(t.type);break;case 22:case 23:io(t),Za(),e!==null&&L(pa);break;case 24:Wi(na)}}function Lc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Uu(t,t.return,e)}}function Rc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Uu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Uu(t,t.return,e)}}function zc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ka(t,n)}catch(t){Uu(e,e.return,t)}}}function Bc(e,t,n){n.props=Vs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Uu(e,t,n)}}function Vc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Uu(e,t,n)}}function Hc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Uu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Uu(e,t,n)}else n.current=null}function Uc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Uu(e,e.return,t)}}function Wc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[it]=t}catch(t){Uu(e,e.return,t)}}function Gc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Kc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}function Jc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Jc(e,t,n),e=e.sibling;e!==null;)Jc(e,t,n),e=e.sibling}function Yc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[rt]=e,t[it]=n}catch(t){Uu(e,e.return,t)}}var Xc=!1,Zc=!1,Qc=!1,$c=typeof WeakSet==`function`?WeakSet:Set,el=null;function tl(e,t){if(e=e.containerInfo,Rd=sp,e=Cr(e),U(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,el=t;el!==null;)if(t=el,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,el=e;else for(;el!==null;){switch(t=el,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Vs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Uu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,el=e;break}el=t.return}}function nl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:_l(e,n),r&4&&Lc(5,n);break;case 1:if(_l(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Uu(n,n.return,e)}else{var i=Vs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Uu(n,n.return,e)}}r&64&&zc(n),r&512&&Vc(n,n.return);break;case 3:if(_l(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ka(e,t)}catch(e){Uu(n,n.return,e)}}break;case 27:t===null&&r&4&&Yc(n);case 26:case 5:_l(e,n),t===null&&r&4&&Uc(n),r&512&&Vc(n,n.return);break;case 12:_l(e,n);break;case 31:_l(e,n),r&4&&cl(e,n);break;case 13:_l(e,n),r&4&&ll(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Xc,!r){t=t!==null&&t.memoizedState!==null||Zc,i=Xc;var a=Zc;Xc=r,(Zc=t)&&!a?yl(e,n,(n.subtreeFlags&8772)!=0):_l(e,n),Xc=i,Zc=a}break;case 30:break;default:_l(e,n)}}function rl(e){var t=e.alternate;t!==null&&(e.alternate=null,rl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&dt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var il=null,al=!1;function ol(e,t,n){for(n=n.child;n!==null;)sl(e,t,n),n=n.sibling}function sl(e,t,n){if(Me&&typeof Me.onCommitFiberUnmount==`function`)try{Me.onCommitFiberUnmount(je,n)}catch{}switch(n.tag){case 26:Zc||Hc(n,t),ol(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Zc||Hc(n,t);var r=il,i=al;Zd(n.type)&&(il=n.stateNode,al=!1),ol(e,t,n),pf(n.stateNode),il=r,al=i;break;case 5:Zc||Hc(n,t);case 6:if(r=il,i=al,il=null,ol(e,t,n),il=r,al=i,il!==null)if(al)try{(il.nodeType===9?il.body:il.nodeName===`HTML`?il.ownerDocument.body:il).removeChild(n.stateNode)}catch(e){Uu(n,t,e)}else try{il.removeChild(n.stateNode)}catch(e){Uu(n,t,e)}break;case 18:il!==null&&(al?(e=il,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(il,n.stateNode));break;case 4:r=il,i=al,il=n.stateNode.containerInfo,al=!0,ol(e,t,n),il=r,al=i;break;case 0:case 11:case 14:case 15:Rc(2,n,t),Zc||Rc(4,n,t),ol(e,t,n);break;case 1:Zc||(Hc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Bc(n,t,r)),ol(e,t,n);break;case 21:ol(e,t,n);break;case 22:Zc=(r=Zc)||n.memoizedState!==null,ol(e,t,n),Zc=r;break;default:ol(e,t,n)}}function cl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Uu(t,t.return,e)}}}function ll(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Uu(t,t.return,e)}}function ul(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $c),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $c),t;default:throw Error(i(435,e.tag))}}function dl(e,t){var n=ul(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Ju.bind(null,e,t);t.then(r,r)}})}function fl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){il=c.stateNode,al=!1;break a}break;case 5:il=c.stateNode,al=!1;break a;case 3:case 4:il=c.stateNode.containerInfo,al=!0;break a}c=c.return}if(il===null)throw Error(i(160));sl(o,s,a),il=null,al=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ml(t,e),t=t.sibling}var pl=null;function ml(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fl(t,e),hl(e),r&4&&(Rc(3,e,e.return),Lc(3,e),Rc(5,e,e.return));break;case 1:fl(t,e),hl(e),r&512&&(Zc||n===null||Hc(n,n.return)),r&64&&Xc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=pl;if(fl(t,e),hl(e),r&512&&(Zc||n===null||Hc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ut]||o[rt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[rt]=e,gt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[rt]=e,gt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Wc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:fl(t,e),hl(e),r&512&&(Zc||n===null||Hc(n,n.return)),n!==null&&r&4&&Wc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(fl(t,e),hl(e),r&512&&(Zc||n===null||Hc(n,n.return)),e.flags&32){a=e.stateNode;try{Ht(a,``)}catch(t){Uu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Wc(e,a,n===null?a:n.memoizedProps)),r&1024&&(Qc=!0);break;case 6:if(fl(t,e),hl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Uu(e,e.return,t)}}break;case 3:if(Bf=null,a=pl,pl=gf(t.containerInfo),fl(t,e),pl=a,hl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Uu(e,e.return,t)}Qc&&(Qc=!1,gl(e));break;case 4:r=pl,pl=gf(e.stateNode.containerInfo),fl(t,e),hl(e),pl=r;break;case 12:fl(t,e),hl(e);break;case 31:fl(t,e),hl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,dl(e,r)));break;case 13:fl(t,e),hl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zl=Se()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,dl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Xc,d=Zc;if(Xc=u||a,Zc=d||l,fl(t,e),Zc=d,Xc=u,hl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Xc||Zc||vl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Uu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Uu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Uu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,dl(e,n))));break;case 19:fl(t,e),hl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,dl(e,r)));break;case 30:break;case 21:break;default:fl(t,e),hl(e)}}function hl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Gc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Jc(e,Kc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Ht(o,``),n.flags&=-33),Jc(e,Kc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;qc(e,Kc(e),s);break;default:throw Error(i(161))}}catch(t){Uu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;gl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function _l(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)nl(e,t.alternate,t),t=t.sibling}function vl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Rc(4,t,t.return),vl(t);break;case 1:Hc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Bc(t,t.return,n),vl(t);break;case 27:pf(t.stateNode);case 26:case 5:Hc(t,t.return),vl(t);break;case 22:t.memoizedState===null&&vl(t);break;case 30:vl(t);break;default:vl(t)}e=e.sibling}}function yl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:yl(i,a,n),Lc(4,a);break;case 1:if(yl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Uu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ga(c[i],s)}catch(e){Uu(r,r.return,e)}}n&&o&64&&zc(a),Vc(a,a.return);break;case 27:Yc(a);case 26:case 5:yl(i,a,n),n&&r===null&&o&4&&Uc(a),Vc(a,a.return);break;case 12:yl(i,a,n);break;case 31:yl(i,a,n),n&&o&4&&cl(i,a);break;case 13:yl(i,a,n),n&&o&4&&ll(i,a);break;case 22:a.memoizedState===null&&yl(i,a,n),Vc(a,a.return);break;case 30:break;default:yl(i,a,n)}t=t.sibling}}function bl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ia(n))}function xl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ia(e))}function Sl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cl(e,t,n,r),t=t.sibling}function Cl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Sl(e,t,n,r),i&2048&&Lc(9,t);break;case 1:Sl(e,t,n,r);break;case 3:Sl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ia(e)));break;case 12:if(i&2048){Sl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Uu(t,t.return,e)}}else Sl(e,t,n,r);break;case 31:Sl(e,t,n,r);break;case 13:Sl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Sl(e,t,n,r):(a._visibility|=2,wl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Sl(e,t,n,r):Tl(e,t),i&2048&&bl(o,t);break;case 24:Sl(e,t,n,r),i&2048&&xl(t.alternate,t);break;default:Sl(e,t,n,r)}}function wl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:wl(a,o,s,c,i),Lc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,wl(a,o,s,c,i)):u._visibility&2?wl(a,o,s,c,i):Tl(a,o),i&&l&2048&&bl(o.alternate,o);break;case 24:wl(a,o,s,c,i),i&&l&2048&&xl(o.alternate,o);break;default:wl(a,o,s,c,i)}t=t.sibling}}function Tl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Tl(n,r),i&2048&&bl(r.alternate,r);break;case 24:Tl(n,r),i&2048&&xl(r.alternate,r);break;default:Tl(n,r)}t=t.sibling}}var El=8192;function Dl(e,t,n){if(e.subtreeFlags&El)for(e=e.child;e!==null;)Ol(e,t,n),e=e.sibling}function Ol(e,t,n){switch(e.tag){case 26:Dl(e,t,n),e.flags&El&&e.memoizedState!==null&&Gf(n,pl,e.memoizedState,e.memoizedProps);break;case 5:Dl(e,t,n);break;case 3:case 4:var r=pl;pl=gf(e.stateNode.containerInfo),Dl(e,t,n),pl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=El,El=16777216,Dl(e,t,n),El=r):Dl(e,t,n));break;default:Dl(e,t,n)}}function kl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Al(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];el=r,Nl(r,e)}kl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jl(e),e=e.sibling}function jl(e){switch(e.tag){case 0:case 11:case 15:Al(e),e.flags&2048&&Rc(9,e,e.return);break;case 3:Al(e);break;case 12:Al(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ml(e)):Al(e);break;default:Al(e)}}function Ml(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];el=r,Nl(r,e)}kl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Rc(8,t,t.return),Ml(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ml(t));break;default:Ml(t)}e=e.sibling}}function Nl(e,t){for(;el!==null;){var n=el;switch(n.tag){case 0:case 11:case 15:Rc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ia(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,el=r;else a:for(n=e;el!==null;){r=el;var i=r.sibling,a=r.return;if(rl(r),r===n){el=null;break a}if(i!==null){i.return=a,el=i;break a}el=a}}}var Pl={getCacheForType:function(e){var t=Xi(na),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Xi(na).controller.signal}},Fl=typeof WeakMap==`function`?WeakMap:Map,Y=0,X=null,Z=null,Q=0,Il=0,Ll=null,Rl=!1,zl=!1,Bl=!1,Vl=0,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=null,Yl=null,Xl=!1,Zl=0,Ql=0,$l=1/0,eu=null,tu=null,nu=0,ru=null,iu=null,au=0,ou=0,su=null,cu=null,lu=0,uu=null;function du(){return Y&2&&Q!==0?Q&-Q:P.T===null?et():ud()}function fu(){if(Kl===0)if(!(Q&536870912)||W){var e=ze;ze<<=1,!(ze&3932160)&&(ze=262144),Kl=e}else Kl=536870912;return e=Qa.current,e!==null&&(e.flags|=32),Kl}function pu(e,t,n){(e===X&&(Il===2||Il===9)||e.cancelPendingCommit!==null)&&(bu(e,0),_u(e,Q,Kl,!1)),qe(e,n),(!(Y&2)||e!==X)&&(e===X&&(!(Y&2)&&(Wl|=n),Hl===4&&_u(e,Q,Kl,!1)),nd(e))}function mu(e,t,n){if(Y&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ue(e,t),a=r?Ou(e,t):Eu(e,t,!0),o=r;do{if(a===0){zl&&!r&&_u(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!gu(n)){a=Eu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Jl;var l=c.current.memoizedState.isDehydrated;if(l&&(bu(c,s).flags|=256),s=Eu(c,s,!1),s!==2){if(Bl&&!l){c.errorRecoveryDisabledLanes|=o,Wl|=o,a=4;break a}o=Yl,Yl=a,o!==null&&(Yl===null?Yl=o:Yl.push.apply(Yl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){bu(e,0),_u(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:_u(r,t,Kl,!Rl);break a;case 2:Yl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Zl+300-Se(),10<a)){if(_u(r,t,Kl,!Rl),He(r,0,!0)!==0)break a;au=t,r.timeoutHandle=Kd(hu.bind(null,r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,`Throttled`,-0,0),a);break a}hu(r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,null,-0,0)}}break}while(1);nd(e)}function hu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},Ol(t,a,d);var m=(a&62914560)===a?Zl-Se():(a&4194048)===a?Ql-Se():0;if(m=qf(d,m),m!==null){au=a,e.cancelPendingCommit=m(Fu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),_u(e,a,o,!l);return}}Fu(e,t,a,n,r,i,o,s,c)}function gu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!vr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _u(e,t,n,r){t&=~Gl,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Pe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Ye(e,n,t)}function vu(){return Y&6?!0:(rd(0,!1),!1)}function yu(){if(Z!==null){if(Il===0)var e=Z.return;else e=Z,Hi=Vi=null,To(e),Da=null,Oa=0,e=Z;for(;e!==null;)Ic(e.alternate,e),e=e.return;Z=null}}function bu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),au=0,yu(),X=e,Z=n=ai(e.current,null),Q=t,Il=0,Ll=null,Rl=!1,zl=Ue(e,t),Bl=!1,ql=Kl=Gl=Wl=Ul=Hl=0,Yl=Jl=null,Xl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Pe(r),a=1<<i;t|=e[i],r&=~a}return Vl=t,Yr(),n}function xu(e,t){G=null,P.H=Ns,t===_a||t===ya?(t=Ta(),Il=3):t===va?(t=Ta(),Il=4):Il=t===Zs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ll=t,Z===null&&(Hl=1,Gs(e,pi(t,e.current)))}function Su(){var e=Qa.current;return e===null?!0:(Q&4194048)===Q?$a===null:(Q&62914560)===Q||Q&536870912?e===$a:!1}function Cu(){var e=P.H;return P.H=Ns,e===null?Ns:e}function wu(){var e=P.A;return P.A=Pl,e}function Tu(){Hl=4,Rl||(Q&4194048)!==Q&&Qa.current!==null||(zl=!0),!(Ul&134217727)&&!(Wl&134217727)||X===null||_u(X,Q,Kl,!1)}function Eu(e,t,n){var r=Y;Y|=2;var i=Cu(),a=wu();(X!==e||Q!==t)&&(eu=null,bu(e,t)),t=!1;var o=Hl;a:do try{if(Il!==0&&Z!==null){var s=Z,c=Ll;switch(Il){case 8:yu(),o=6;break a;case 3:case 2:case 9:case 6:Qa.current===null&&(t=!0);var l=Il;if(Il=0,Ll=null,Mu(e,s,c,l),n&&zl){o=0;break a}break;default:l=Il,Il=0,Ll=null,Mu(e,s,c,l)}}Du(),o=Hl;break}catch(t){xu(e,t)}while(1);return t&&e.shellSuspendCounter++,Hi=Vi=null,Y=r,P.H=i,P.A=a,Z===null&&(X=null,Q=0,Yr()),o}function Du(){for(;Z!==null;)Au(Z)}function Ou(e,t){var n=Y;Y|=2;var r=Cu(),a=wu();X!==e||Q!==t?(eu=null,$l=Se()+500,bu(e,t)):zl=Ue(e,t);a:do try{if(Il!==0&&Z!==null){t=Z;var o=Ll;b:switch(Il){case 1:Il=0,Ll=null,Mu(e,t,o,1);break;case 2:case 9:if(xa(o)){Il=0,Ll=null,ju(t);break}t=function(){Il!==2&&Il!==9||X!==e||(Il=7),nd(e)},o.then(t,t);break a;case 3:Il=7;break a;case 4:Il=5;break a;case 7:xa(o)?(Il=0,Ll=null,ju(t)):(Il=0,Ll=null,Mu(e,t,o,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var c=Z;if(s?Wf(s):c.stateNode.complete){Il=0,Ll=null;var l=c.sibling;if(l!==null)Z=l;else{var u=c.return;u===null?Z=null:(Z=u,Nu(u))}break b}}Il=0,Ll=null,Mu(e,t,o,5);break;case 6:Il=0,Ll=null,Mu(e,t,o,6);break;case 8:yu(),Hl=6;break a;default:throw Error(i(462))}}ku();break}catch(t){xu(e,t)}while(1);return Hi=Vi=null,P.H=r,P.A=a,Y=n,Z===null?(X=null,Q=0,Yr(),Hl):0}function ku(){for(;Z!==null&&!be();)Au(Z)}function Au(e){var t=Dc(e.alternate,e,Vl);e.memoizedProps=e.pendingProps,t===null?Nu(e):Z=t}function ju(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=dc(n,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=dc(n,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:To(t);default:Ic(n,t),t=Z=oi(t,Vl),t=Dc(n,t,Vl)}e.memoizedProps=e.pendingProps,t===null?Nu(e):Z=t}function Mu(e,t,n,r){Hi=Vi=null,To(t),Da=null,Oa=0;var i=t.return;try{if(Xs(e,i,t,n,Q)){Hl=1,Gs(e,pi(n,e.current)),Z=null;return}}catch(t){if(i!==null)throw Z=i,t;Hl=1,Gs(e,pi(n,e.current)),Z=null;return}t.flags&32768?(W||r===1?e=!0:zl||Q&536870912?e=!1:(Rl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Qa.current,r!==null&&r.tag===13&&(r.flags|=16384))),Pu(t,e)):Nu(t)}function Nu(e){var t=e;do{if(t.flags&32768){Pu(t,Rl);return}e=t.return;var n=Pc(t.alternate,t,Vl);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);Hl===0&&(Hl=5)}function Pu(e,t){do{var n=Fc(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);Hl=6,Z=null}function Fu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Bu();while(nu!==0);if(Y&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Jr,Je(e,n,o,s,c,l),e===X&&(Z=X=null,Q=0),iu=t,ru=e,au=n,ou=o,su=a,cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Yu(Ee,function(){return Vu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=P.T,P.T=null,a=F.p,F.p=2,s=Y,Y|=4;try{tl(e,t,n)}finally{Y=s,F.p=a,P.T=r}}nu=1,Iu(),Lu(),Ru()}}function Iu(){if(nu===1){nu=0;var e=ru,t=iu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=Y;Y|=4;try{ml(t,e);var a=zd,o=Cr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Sr(s.ownerDocument.documentElement,s)){if(c!==null&&U(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=xr(s,h),v=xr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{Y=i,F.p=r,P.T=n}}e.current=t,nu=2}}function Lu(){if(nu===2){nu=0;var e=ru,t=iu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=Y;Y|=4;try{nl(e,t.alternate,t)}finally{Y=i,F.p=r,P.T=n}}nu=3}}function Ru(){if(nu===4||nu===3){nu=0,xe();var e=ru,t=iu,n=au,r=cu;t.subtreeFlags&10256||t.flags&10256?nu=5:(nu=0,iu=ru=null,zu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(tu=null),$e(n),t=t.stateNode,Me&&typeof Me.onCommitFiberRoot==`function`)try{Me.onCommitFiberRoot(je,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=P.T,i=F.p,F.p=2,P.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{P.T=t,F.p=i}}au&3&&Bu(),nd(e),i=e.pendingLanes,n&261930&&i&42?e===uu?lu++:(lu=0,uu=e):lu=0,rd(0,!1)}}function zu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ia(t)))}function Bu(){return Iu(),Lu(),Ru(),Vu()}function Vu(){if(nu!==5)return!1;var e=ru,t=ou;ou=0;var n=$e(au),r=P.T,a=F.p;try{F.p=32>n?32:n,P.T=null,n=su,su=null;var o=ru,s=au;if(nu=0,iu=ru=null,au=0,Y&6)throw Error(i(331));var c=Y;if(Y|=4,jl(o.current),Cl(o,o.current,s,n),Y=c,rd(0,!1),Me&&typeof Me.onPostCommitFiberRoot==`function`)try{Me.onPostCommitFiberRoot(je,o)}catch{}return!0}finally{F.p=a,P.T=r,zu(e,t)}}function Hu(e,t,n){t=pi(n,t),t=qs(e.stateNode,t,2),e=za(e,t,2),e!==null&&(qe(e,2),nd(e))}function Uu(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(tu===null||!tu.has(r))){e=pi(n,e),n=Js(2),r=za(t,n,2),r!==null&&(Ys(n,r,t,e),qe(r,2),nd(r));break}}t=t.return}}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Bl=!0,i.add(n),e=Gu.bind(null,e,t,n),t.then(e,e))}function Gu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,X===e&&(Q&n)===n&&(Hl===4||Hl===3&&(Q&62914560)===Q&&300>Se()-Zl?!(Y&2)&&bu(e,0):Gl|=n,ql===Q&&(ql=0)),nd(e)}function Ku(e,t){t===0&&(t=Ge()),e=Qr(e,t),e!==null&&(qe(e,t),nd(e))}function qu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function Ju(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ku(e,n)}function Yu(e,t){return ve(e,t)}var Xu=null,Zu=null,Qu=!1,$u=!1,ed=!1,td=0;function nd(e){e!==Zu&&e.next===null&&(Zu===null?Xu=Zu=e:Zu=Zu.next=e),$u=!0,Qu||(Qu=!0,ld())}function rd(e,t){if(!ed&&$u){ed=!0;do for(var n=!1,r=Xu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Pe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cd(r,a))}else a=Q,a=He(r,r===X?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ue(r,a)||(n=!0,cd(r,a));r=r.next}while(n);ed=!1}}function id(){ad()}function ad(){$u=Qu=!1;var e=0;td!==0&&Gd()&&(e=td);for(var t=Se(),n=null,r=Xu;r!==null;){var i=r.next,a=od(r,t);a===0?(r.next=null,n===null?Xu=i:n.next=i,i===null&&(Zu=n)):(n=r,(e!==0||a&3)&&($u=!0)),r=i}nu!==0&&nu!==5||rd(e,!1),td!==0&&(td=0)}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Pe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=We(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=X,n=Q,n=He(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Il===2||Il===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ye(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ue(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ye(r),$e(n)){case 2:case 8:n=Te;break;case 32:n=Ee;break;case 268435456:n=Oe;break;default:n=Ee}return r=sd.bind(null,e),n=ve(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ye(r),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(nu!==0&&nu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bu()&&e.callbackNode!==n)return null;var r=Q;return r=He(e,e===X?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(mu(e,r,t),od(e,Se()),e.callbackNode!=null&&e.callbackNode===n?sd.bind(null,e):null)}function cd(e,t){if(Bu())return null;mu(e,t,!0)}function ld(){Yd(function(){Y&6?ve(we,id):ad()})}function ud(){if(td===0){var e=sa;e===0&&(e=Re,Re<<=1,!(Re&261888)&&(Re=256)),td=e}return td}function dd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Yt(``+e)}function fd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=dd((i[it]||null).action),o=r.submitter;o&&(t=(t=o[it]||null)?dd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new vn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(td!==0){var e=o?fd(i,o):new FormData(i);ys(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?fd(i,o):new FormData(i),ys(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var md=0;md<Ur.length;md++){var hd=Ur[md];Wr(hd.toLowerCase(),`on`+(hd[0].toUpperCase()+hd.slice(1)))}Wr(Fr,`onAnimationEnd`),Wr(Ir,`onAnimationIteration`),Wr(Lr,`onAnimationStart`),Wr(`dblclick`,`onDoubleClick`),Wr(`focusin`,`onFocus`),Wr(`focusout`,`onBlur`),Wr(Rr,`onTransitionRun`),Wr(zr,`onTransitionStart`),Wr(Br,`onTransitionCancel`),Wr(Vr,`onTransitionEnd`),bt(`onMouseEnter`,[`mouseout`,`mouseover`]),bt(`onMouseLeave`,[`mouseout`,`mouseover`]),bt(`onPointerEnter`,[`pointerout`,`pointerover`]),bt(`onPointerLeave`,[`pointerout`,`pointerover`]),yt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),yt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),yt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),yt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),yt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),yt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var gd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),_d=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));function vd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Gr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Gr(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[ot];n===void 0&&(n=t[ot]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,_t.forEach(function(t){t!==`selectionchange`&&(_d.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!sn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=ft(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}rn(function(){var r=a,i=Qt(n),s=[];a:{var c=Hr.get(e);if(c!==void 0){var l=vn,u=e;switch(e){case`keypress`:if(pn(n)===0)break a;case`keydown`:case`keyup`:l=In;break;case`focusin`:u=`focus`,l=Dn;break;case`focusout`:u=`blur`,l=Dn;break;case`beforeblur`:case`afterblur`:l=Dn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Tn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=En;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Rn;break;case Fr:case Ir:case Lr:l=On;break;case Vr:l=zn;break;case`scroll`:case`scrollend`:l=bn;break;case`wheel`:l=Bn;break;case`copy`:case`cut`:case`paste`:l=kn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Ln;break;case`toggle`:case`beforetoggle`:l=Vn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=an(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Zt&&(u=n.relatedTarget||n.fromElement)&&(ft(u)||u[at]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?ft(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Tn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Ln,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:mt(l),h=u==null?c:mt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,ft(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?mt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=sr;else if(tr(c))if(cr)v=gr;else{v=mr;var y=pr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Kt(r.elementType)&&(v=sr):v=hr;if(v&&=v(e,r)){nr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Rt(c,`number`,c.value)}switch(y=r?mt(r):window,e){case`focusin`:(tr(y)||y.contentEditable===`true`)&&(Tr=y,Er=r,Dr=null);break;case`focusout`:Dr=Er=Tr=null;break;case`mousedown`:Or=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Or=!1,kr(s,n,i);break;case`selectionchange`:if(wr)break;case`keydown`:case`keyup`:kr(s,n,i)}var b;if(Un)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Zn?Yn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Kn&&n.locale!==`ko`&&(Zn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Zn&&(b=fn()):(ln=i,un=`value`in ln?ln.value:ln.textContent,Zn=!0)),y=Td(r,x),0<y.length&&(x=new An(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Xn(n),b!==null&&(x.data=b)))),(b=Gn?Qn(e,n):$n(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new An(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),pd(s,e,r,n,i)}vd(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=an(e,n),i!=null&&r.unshift(wd(e,i,a)),i=an(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=an(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=an(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Ht(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Ht(e,``+r);break;case`className`:Et(e,`class`,r);break;case`tabIndex`:Et(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Et(e,n,r);break;case`style`:Gt(e,r,o);break;case`data`:if(t!==`object`){Et(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Yt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Yt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Xt);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Yt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Tt(e,`popover`,r);break;case`xlinkActuate`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Dt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Dt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Dt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Tt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=qt.get(n)||n,Tt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Gt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Ht(e,r):(typeof r==`number`||typeof r==`bigint`)&&Ht(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Xt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!vt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[it]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Tt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}Lt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&zt(e,!!r,n,!0):zt(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}Vt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<gd.length;r++)$(gd[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if(Kt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}It(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?zt(e,!!n,n?[]:``,!1):zt(e,!!n,t,!0)):zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}Bt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(Kt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ut]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),dt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[ut])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);dt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=F.d;F.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=vu();return e||t}function yf(e){var t=pt(e);t!==null&&t.tag===5&&t.type===`form`?xs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Ft(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),gt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ft(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ft(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ft(n.imageSizes)+`"]`)):i+=`[href="`+Ft(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),gt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ft(r)+`"][href="`+Ft(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),gt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=ht(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);gt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=ht(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),gt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=ht(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),gt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ae.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=ht(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=ht(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=ht(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Ft(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),gt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Ft(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ft(n.href)+`"]`);if(r)return t.instance=r,gt(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),gt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,gt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),gt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,gt(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),gt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ut]||a[rt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,gt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),gt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.hiddenUpdates=Ke(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ri(3,null,null,t),e.current=a,a.stateNode=e,t=ra(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ia(a),e}function tp(e){return e?(e=ti,e):ti}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ra(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=za(e,r,t),n!==null&&(pu(n,e,t),Ba(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=Qr(e,67108864);t!==null&&pu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=du();t=Qe(t);var n=Qr(e,t);n!==null&&pu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=2,up(e,t,n,r)}finally{F.p=a,P.T=i}}function lp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=8,up(e,t,n,r)}finally{F.p=a,P.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=pt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ve(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Pe(o);s.entanglements[1]|=c,o&=~c}nd(a),!(Y&6)&&($l=Se()+500,rd(0,!1))}}break;case 31:case 13:s=Qr(a,2),s!==null&&pu(s,a,2),vu(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=Qt(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=ft(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ce()){case we:return 2;case Te:return 8;case Ee:case De:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=pt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=ft(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,tt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,tt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zt=r,n.target.dispatchEvent(r),Zt=null}else return t=pt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=pt(n);a!==null&&(e.splice(t,3),t-=3,ys(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[it]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[it]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,du(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),vu(),t[at]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{je=zp.inject(Rp),Me=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Hs,s=Us,c=Ws;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[at]=t.current,xd(e),new Fp(t)}})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=d();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useSyncExternalStore,a=t.useRef,o=t.useEffect,s=t.useMemo,c=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,l,u){var d=a(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=s(function(){function e(e){if(!i){if(i=!0,a=e,e=l(e),u!==void 0&&f.hasValue){var t=f.value;if(u(t,e))return o=t}return o=e}if(t=o,r(a,e))return t;var n=l(e);return u!==void 0&&u(t,n)?(a=e,t):(a=e,o=n)}var i=!1,a,o,s=n===void 0?null:n;return[function(){return e(t())},s===null?void 0:function(){return e(s())}]},[t,n,l,u]);var p=i(e,d[0],d[1]);return o(function(){f.hasValue=!0,f.value=p},[p]),c(p),p}})),y=s(((e,t)=>{t.exports=v()})),b=l(_(),1),x=l(d(),1),S=y();function C(e){e()}function w(){let e=null,t=null;return{clear(){e=null,t=null},notify(){C(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){let t=[],n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0,i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var T={notify(){},get:()=>[]};function E(e,t){let n,r=T,i=0,a=!1;function o(e){u();let t=r.subscribe(e),n=!1;return()=>{n||(n=!0,t(),d())}}function s(){r.notify()}function c(){m.onStateChange&&m.onStateChange()}function l(){return a}function u(){i++,n||(n=t?t.addNestedSub(c):e.subscribe(c),r=w())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=T)}function f(){a||(a=!0,u())}function p(){a&&(a=!1,d())}let m={addNestedSub:o,notifyNestedSubs:s,handleChangeWrapper:c,isSubscribed:l,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return m}var D=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,O=typeof navigator<`u`&&navigator.product===`ReactNative`,k=D||O?x.useLayoutEffect:x.useEffect,A=Symbol.for(`react-redux-context`),ee=typeof globalThis<`u`?globalThis:{};function j(){if(!x.createContext)return{};let e=ee[A]??=new Map,t=e.get(x.createContext);return t||(t=x.createContext(null),e.set(x.createContext,t)),t}var M=j();function N(e){let{children:t,context:n,serverState:r,store:i}=e,a=x.useMemo(()=>({store:i,subscription:E(i),getServerState:r?()=>r:void 0}),[i,r]),o=x.useMemo(()=>i.getState(),[i]);k(()=>{let{subscription:e}=a;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),o!==i.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[a,o]);let s=n||M;return x.createElement(s.Provider,{value:a},t)}var te=N;function P(e=M){return function(){return x.useContext(e)}}var F=P();function ne(e=M){let t=e===M?F:P(e),n=()=>{let{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var re=ne();function ie(e=M){let t=e===M?re:ne(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var I=ie(),L=(e,t)=>e===t;function R(e=M){let t=e===M?F:P(e),n=(e,n={})=>{let{equalityFn:r=L}=typeof n==`function`?{equalityFn:n}:n,{store:i,subscription:a,getServerState:o}=t();x.useRef(!0);let s=x.useCallback({[e.name](t){return e(t)}}[e.name],[e]),c=(0,S.useSyncExternalStoreWithSelector)(a.addNestedSub,i.getState,o||i.getState,s,r);return x.useDebugValue(c),c};return Object.assign(n,{withTypes:()=>n}),n}var z=R(),B=`modulepreload`,ae=function(e){return`/`+e},oe={},se=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=ae(t,n),t in oe)return;oe[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:B,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ce=`popstate`;function le(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ue(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return me(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:he(t)}return _e(t,n,null,e)}function V(e,t){if(e===!1||e==null)throw Error(t)}function de(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function fe(){return Math.random().toString(36).substring(2,10)}function pe(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function me(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ge(t):t,state:n,key:t&&t.key||r||fe(),unstable_mask:i}}function he({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ge(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function _e(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=le(e)?e:me(h.location,e,t);n&&n(r,e),l=u()+1;let d=pe(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=le(e)?e:me(h.location,e,t);n&&n(r,e),l=u();let i=pe(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ve(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ce,d),c=e,()=>{i.removeEventListener(ce,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ve(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),V(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:he(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function ye(e,t,n=`/`){return be(e,t,n,!1)}function be(e,t,n,r){let i=Re((typeof t==`string`?ge(t):t).pathname||`/`,n);if(i==null)return null;let a=Se(e);we(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=Le(i);o=Pe(a[e],t,r)}return o}function xe(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function Se(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;V(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ke([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(V(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),Se(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Me(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of Ce(e.path))a(e,t,!0,n)}),t}function Ce(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=Ce(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function we(e){e.sort((e,t)=>e.score===t.score?Ne(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var Te=/^:[\w-]+$/,Ee=3,De=2,Oe=1,ke=10,Ae=-2,je=e=>e===`*`;function Me(e,t){let n=e.split(`/`),r=n.length;return n.some(je)&&(r+=Ae),t&&(r+=De),n.filter(e=>!je(e)).reduce((e,t)=>e+(Te.test(t)?Ee:t===``?Oe:ke),r)}function Ne(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Pe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Fe({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Fe({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Ke([a,u.pathname]),pathnameBase:qe(Ke([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Ke([a,u.pathnameBase]))}return o}function Fe(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ie(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ie(e,t=!1,n=!0){de(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Le(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return de(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Re(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var ze=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Be(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ge(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?Ve(n.substring(1),`/`):Ve(n,t)):a=t,{pathname:a,search:Je(r),hash:Ye(i)}}function Ve(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function He(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ue(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function We(e){let t=Ue(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ge(e,t,n,r=!1){let i;typeof e==`string`?i=ge(e):(i={...e},V(!i.pathname||!i.pathname.includes(`?`),He(`?`,`pathname`,`search`,i)),V(!i.pathname||!i.pathname.includes(`#`),He(`#`,`pathname`,`hash`,i)),V(!i.search||!i.search.includes(`#`),He(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Be(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ke=e=>e.join(`/`).replace(/\/\/+/g,`/`),qe=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Je=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ye=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Xe=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ze(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Qe(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var $e=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function et(e,t){let n=e;if(typeof n!=`string`||!ze.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if($e)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Re(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{de(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var tt=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(tt);var nt=[`GET`,...tt];new Set(nt);var rt=x.createContext(null);rt.displayName=`DataRouter`;var it=x.createContext(null);it.displayName=`DataRouterState`;var at=x.createContext(!1);function ot(){return x.useContext(at)}var st=x.createContext({isTransitioning:!1});st.displayName=`ViewTransition`;var ct=x.createContext(new Map);ct.displayName=`Fetchers`;var lt=x.createContext(null);lt.displayName=`Await`;var ut=x.createContext(null);ut.displayName=`Navigation`;var dt=x.createContext(null);dt.displayName=`Location`;var ft=x.createContext({outlet:null,matches:[],isDataRoute:!1});ft.displayName=`Route`;var pt=x.createContext(null);pt.displayName=`RouteError`;var mt=`REACT_ROUTER_ERROR`,ht=`REDIRECT`,gt=`ROUTE_ERROR_RESPONSE`;function _t(e){if(e.startsWith(`${mt}:${ht}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function vt(e){if(e.startsWith(`${mt}:${gt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Xe(t.status,t.statusText,t.data)}catch{}}function yt(e,{relative:t}={}){V(bt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(ut),{hash:i,pathname:a,search:o}=Ot(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ke([n,a])),r.createHref({pathname:s,search:o,hash:i})}function bt(){return x.useContext(dt)!=null}function xt(){return V(bt(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(dt).location}var St=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function Ct(e){x.useContext(ut).static||x.useLayoutEffect(e)}function wt(){let{isDataRoute:e}=x.useContext(ft);return e?qt():Tt()}function Tt(){V(bt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(rt),{basename:t,navigator:n}=x.useContext(ut),{matches:r}=x.useContext(ft),{pathname:i}=xt(),a=JSON.stringify(We(r)),o=x.useRef(!1);return Ct(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(de(o.current,St),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ge(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ke([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var Et=x.createContext(null);function Dt(e){let t=x.useContext(ft).outlet;return x.useMemo(()=>t&&x.createElement(Et.Provider,{value:e},t),[t,e])}function Ot(e,{relative:t}={}){let{matches:n}=x.useContext(ft),{pathname:r}=xt(),i=JSON.stringify(We(n));return x.useMemo(()=>Ge(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function kt(e,t){return At(e,t)}function At(e,t,n){V(bt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(ut),{matches:i}=x.useContext(ft),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Yt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=xt(),d;if(t){let e=typeof t==`string`?ge(t):t;V(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=ye(e,{pathname:p});de(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),de(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Lt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ke([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ke([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(dt.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function jt(){let e=Kt(),t=Ze(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var Mt=x.createElement(jt,null),Nt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=vt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(ft.Provider,{value:this.props.routeContext},x.createElement(pt.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(Ft,{error:e},t):t}};Nt.contextType=at;var Pt=new WeakMap;function Ft({children:e,error:t}){let{basename:n}=x.useContext(ut);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=_t(t.digest);if(e){let r=Pt.get(t);if(r)throw r;let i=et(e.location,n);if($e&&!Pt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Pt.set(t,n),n}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function It({routeContext:e,match:t,children:n}){let r=x.useContext(rt);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(ft.Provider,{value:e},n)}function Lt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);V(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Qe(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Mt,o&&(s<0&&c===0?(Yt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(It,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(Nt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Rt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zt(e){let t=x.useContext(rt);return V(t,Rt(e)),t}function Bt(e){let t=x.useContext(it);return V(t,Rt(e)),t}function Vt(e){let t=x.useContext(ft);return V(t,Rt(e)),t}function Ht(e){let t=Vt(e),n=t.matches[t.matches.length-1];return V(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ut(){return Ht(`useRouteId`)}function Wt(){return Bt(`useNavigation`).navigation}function Gt(){let{matches:e,loaderData:t}=Bt(`useMatches`);return x.useMemo(()=>e.map(e=>xe(e,t)),[e,t])}function Kt(){let e=x.useContext(pt),t=Bt(`useRouteError`),n=Ht(`useRouteError`);return e===void 0?t.errors?.[n]:e}function qt(){let{router:e}=zt(`useNavigate`),t=Ht(`useNavigate`),n=x.useRef(!1);return Ct(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{de(n.current,St),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Jt={};function Yt(e,t,n){!t&&!Jt[e]&&(Jt[e]=!0,de(!1,n))}x.useOptimistic,x.memo(Xt);function Xt({routes:e,future:t,state:n,isStatic:r,onError:i}){return At(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function Zt(e){return Dt(e.context)}function Qt(e){V(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function $t({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){V(!bt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ge(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=x.useMemo(()=>{let e=Re(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return de(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(ut.Provider,{value:c},x.createElement(dt.Provider,{children:t,value:h}))}function en({children:e,location:t}){return kt(tn(e),t)}x.Component;function tn(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,tn(e.props.children,i));return}V(e.type===Qt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),V(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=tn(e.props.children,i)),n.push(a)}),n}var nn=`get`,rn=`application/x-www-form-urlencoded`;function an(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function on(e){return an(e)&&e.tagName.toLowerCase()===`button`}function sn(e){return an(e)&&e.tagName.toLowerCase()===`form`}function cn(e){return an(e)&&e.tagName.toLowerCase()===`input`}function ln(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function un(e,t){return e.button===0&&(!t||t===`_self`)&&!ln(e)}var dn=null;function fn(){if(dn===null)try{new FormData(document.createElement(`form`),0),dn=!1}catch{dn=!0}return dn}var pn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function mn(e){return e!=null&&!pn.has(e)?(de(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rn}"`),null):e}function hn(e,t){let n,r,i,a,o;if(sn(e)){let o=e.getAttribute(`action`);r=o?Re(o,t):null,n=e.getAttribute(`method`)||nn,i=mn(e.getAttribute(`enctype`))||rn,a=new FormData(e)}else if(on(e)||cn(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Re(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||nn,i=mn(e.getAttribute(`formenctype`))||mn(o.getAttribute(`enctype`))||rn,a=new FormData(o,e),!fn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(an(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=nn,r=null,i=rn,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var gn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},_n=/[&><\u2028\u2029]/g;function vn(e){return e.replace(_n,e=>gn[e])}function yn(e,t){if(e===!1||e==null)throw Error(t)}function bn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Re(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function xn(e,t){if(e.id in t)return t[e.id];try{let n=await se(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Sn(e){return e!=null&&typeof e.page==`string`}function Cn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function wn(e,t,n){return kn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await xn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(Cn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function Tn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function En(e,t,{includeHydrateFallback:n}={}){return Dn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Dn(e){return[...new Set(e)]}function On(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function kn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Sn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(On(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function An(){let e=x.useContext(rt);return yn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function jn(){let e=x.useContext(it);return yn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Mn=x.createContext(void 0);Mn.displayName=`FrameworkContext`;function Nn(){let e=x.useContext(Mn);return yn(e,`You must render this element inside a <HydratedRouter> element`),e}function Pn(e,t){let n=x.useContext(Mn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Fn(s,p),onBlur:Fn(c,m),onMouseEnter:Fn(l,p),onMouseLeave:Fn(u,m),onTouchStart:Fn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Fn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function In({page:e,...t}){let n=ot(),{router:r}=An(),i=x.useMemo(()=>ye(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?x.createElement(Rn,{page:e,matches:i,...t}):x.createElement(zn,{page:e,matches:i,...t}):null}function Ln(e){let{manifest:t,routeModules:n}=Nn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return wn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Rn({page:e,matches:t,...n}){let r=xt(),{future:i}=Nn(),{basename:a}=An(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=bn(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function zn({page:e,matches:t,...n}){let r=xt(),{future:i,manifest:a,routeModules:o}=Nn(),{basename:s}=An(),{loaderData:c,matches:l}=jn(),u=x.useMemo(()=>Tn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>Tn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=bn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>En(d,a),[d,a]),m=Ln(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Bn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var Vn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Vn&&(window.__reactRouterVersion=`7.14.0`)}catch{}function Hn({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=x.useRef();i.current??=ue({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement($t,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function Un({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=x.useState({action:n.action,location:n.location}),o=x.useCallback(e=>{r===!1?a(e):x.startTransition(()=>a(e))},[r]);return x.useLayoutEffect(()=>n.listen(o),[n,o]),x.createElement($t,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}Un.displayName=`unstable_HistoryRouter`;var Wn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gn=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=x.useContext(ut),v=typeof l==`string`&&Wn.test(l),y=et(l,h);l=y.to;let b=yt(l,{relative:r}),S=xt(),C=null;if(o){let e=Ge(o,[],S.unstable_mask?S.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ke([h,e.pathname])),C=g.createHref(e)}let[w,T,E]=Pn(n,p),D=Qn(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function O(t){e&&e(t),t.defaultPrevented||D(t)}let k=!(y.isExternal||i),A=x.createElement(`a`,{...p,...E,href:(k?C:void 0)||y.absoluteURL||b,onClick:k?O:e,ref:Bn(m,T),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return w&&!v?x.createElement(x.Fragment,null,A,x.createElement(In,{page:b})):A});Gn.displayName=`Link`;var Kn=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Ot(a,{relative:c.relative}),d=xt(),f=x.useContext(it),{navigator:p,basename:m}=x.useContext(ut),h=f!=null&&cr(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Re(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:S,isTransitioning:h},w=b?e:void 0,T;T=typeof n==`function`?n(C):[n,b?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return x.createElement(Gn,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});Kn.displayName=`NavLink`;var qn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=nn,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=x.useContext(ut),g=tr(),_=nr(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&Wn.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});qn.displayName=`Form`;function Jn({getKey:e,storageKey:t,...n}){let r=x.useContext(Mn),{basename:i}=x.useContext(ut),a=xt(),o=Gt();or({getKey:e,storageKey:t});let s=x.useMemo(()=>{if(!r||!e)return null;let t=ar(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return x.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${vn(JSON.stringify(t||rr))}, ${vn(JSON.stringify(s))})`}})}Jn.displayName=`ScrollRestoration`;function Yn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xn(e){let t=x.useContext(rt);return V(t,Yn(e)),t}function Zn(e){let t=x.useContext(it);return V(t,Yn(e)),t}function Qn(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=wt(),d=xt(),f=Ot(e,{relative:o});return x.useCallback(p=>{if(un(p,t)){p.preventDefault();let t=n===void 0?he(d)===he(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var $n=0,er=()=>`__${String(++$n)}__`;function tr(){let{router:e}=Xn(`useSubmit`),{basename:t}=x.useContext(ut),n=Ut(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=hn(e,t);a.navigate===!1?await r(a.fetcherKey||er(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function nr(e,{relative:t}={}){let{basename:n}=x.useContext(ut),r=x.useContext(ft);V(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Ot(e||`.`,{relative:t})},o=xt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ke([n,a.pathname])),he(a)}var rr=`react-router-scroll-positions`,ir={};function ar(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Re(e.pathname,n)||e.pathname},t)),i??=e.key,i}function or({getKey:e,storageKey:t}={}){let{router:n}=Xn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Zn(`useScrollRestoration`),{basename:a}=x.useContext(ut),o=xt(),s=Gt(),c=Wt();x.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),sr(x.useCallback(()=>{if(c.state===`idle`){let t=ar(o,s,a,e);ir[t]=window.scrollY}try{sessionStorage.setItem(t||rr,JSON.stringify(ir))}catch(e){de(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(x.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||rr);e&&(ir=JSON.parse(e))}catch{}},[t]),x.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(ir,()=>window.scrollY,e?(t,n)=>ar(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),x.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{de(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function sr(e,t){let{capture:n}=t||{};x.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function cr(e,{relative:t}={}){let n=x.useContext(st);V(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Xn(`useViewTransitionState`),i=Ot(e,{relative:t});if(!n.isTransitioning)return!1;let a=Re(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Re(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Fe(i.pathname,o)!=null||Fe(i.pathname,a)!=null}var lr=`-ms-`,ur=`-moz-`,H=`-webkit-`,dr=`comm`,fr=`rule`,pr=`decl`,mr=`@import`,hr=`@namespace`,gr=`@keyframes`,_r=`@layer`,vr=Math.abs,yr=String.fromCharCode,br=Object.assign;function xr(e,t){return Tr(e,0)^45?(((t<<2^Tr(e,0))<<2^Tr(e,1))<<2^Tr(e,2))<<2^Tr(e,3):0}function Sr(e){return e.trim()}function Cr(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function wr(e,t,n){return e.indexOf(t,n)}function Tr(e,t){return e.charCodeAt(t)|0}function Er(e,t,n){return e.slice(t,n)}function Dr(e){return e.length}function Or(e){return e.length}function kr(e,t){return t.push(e),e}function Ar(e,t){return e.map(t).join(``)}function jr(e,t){return e.filter(function(e){return!Cr(e,t)})}var Mr=1,Nr=1,Pr=0,Fr=0,Ir=0,Lr=``;function Rr(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Mr,column:Nr,length:o,return:``,siblings:s}}function zr(e,t){return br(Rr(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function Br(e){for(;e.root;)e=zr(e.root,{children:[e]});kr(e,e.siblings)}function Vr(){return Ir}function Hr(){return Ir=Fr>0?Tr(Lr,--Fr):0,Nr--,Ir===10&&(Nr=1,Mr--),Ir}function Ur(){return Ir=Fr<Pr?Tr(Lr,Fr++):0,Nr++,Ir===10&&(Nr=1,Mr++),Ir}function Wr(){return Tr(Lr,Fr)}function Gr(){return Fr}function Kr(e,t){return Er(Lr,e,t)}function qr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jr(e){return Mr=Nr=1,Pr=Dr(Lr=e),Fr=0,[]}function Yr(e){return Lr=``,e}function Xr(e){return Sr(Kr(Fr-1,$r(e===91?e+2:e===40?e+1:e)))}function Zr(e){for(;(Ir=Wr())&&Ir<33;)Ur();return qr(e)>2||qr(Ir)>3?``:` `}function Qr(e,t){for(;--t&&Ur()&&!(Ir<48||Ir>102||Ir>57&&Ir<65||Ir>70&&Ir<97););return Kr(e,Gr()+(t<6&&Wr()==32&&Ur()==32))}function $r(e){for(;Ur();)switch(Ir){case e:return Fr;case 34:case 39:e!==34&&e!==39&&$r(Ir);break;case 40:e===41&&$r(e);break;case 92:Ur();break}return Fr}function ei(e,t){for(;Ur()&&e+Ir!==57&&!(e+Ir===84&&Wr()===47););return`/*`+Kr(t,Fr-1)+`*`+yr(e===47?e:Ur())}function ti(e){for(;!qr(Wr());)Ur();return Kr(e,Fr)}function ni(e){return Yr(ri(``,null,null,null,[``],e=Jr(e),0,[0],e))}function ri(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Ur()){case 40:if(m!=108&&Tr(C,d-1)==58){wr(C+=U(Xr(v),`&`,`&\f`),`&\f`,vr(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Xr(v);break;case 9:case 10:case 13:case 32:C+=Zr(m);break;case 92:C+=Qr(Gr()-1,7);continue;case 47:switch(Wr()){case 42:case 47:kr(ai(ei(Ur(),Gr()),t,n,c),c),(qr(m||1)==5||qr(Wr()||1)==5)&&Dr(C)&&Er(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=Dr(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=U(C,/\f/g,``)),p>0&&(Dr(C)-d||h===0&&m===47)&&kr(p>32?oi(C+`;`,r,n,d-1,c):oi(U(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(kr(S=ii(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)ri(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(Tr(C,3)===110)break;case 108:if(Tr(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?ri(e,S,S,r&&kr(ii(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):ri(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Dr(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Hr()==125)continue}switch(C+=yr(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Dr(C)-1)*_,_=1;break;case 64:Wr()===45&&(C+=Xr(Ur())),f=Wr(),u=d=Dr(y=C+=ti(Gr())),v++;break;case 45:m===45&&Dr(C)==2&&(h=0)}}return a}function ii(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=Or(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=Er(e,f+1,f=vr(g=o[h])),b=e;v<m;++v)(b=Sr(g>0?p[v]+` `+y:U(y,/&\f/g,p[v])))&&(c[_++]=b);return Rr(e,t,n,i===0?fr:s,c,l,u,d)}function ai(e,t,n,r){return Rr(e,t,n,dr,yr(Vr()),Er(e,2,-2),0,r)}function oi(e,t,n,r,i){return Rr(e,t,n,pr,Er(e,0,r),Er(e,r+1,-1),r,i)}function si(e,t,n){switch(xr(e,t)){case 5103:return H+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return H+e+e;case 4855:return H+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return ur+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+ur+e+lr+e+e;case 5936:switch(Tr(e,t+11)){case 114:return H+e+lr+U(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return H+e+lr+U(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return H+e+lr+U(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return H+e+lr+e+e;case 6165:return H+e+lr+`flex-`+e+e;case 5187:return H+e+U(e,/(\w+).+(:[^]+)/,H+`box-$1$2`+lr+`flex-$1$2`)+e;case 5443:return H+e+lr+`flex-item-`+U(e,/flex-|-self/g,``)+(Cr(e,/flex-|baseline/)?``:lr+`grid-row-`+U(e,/flex-|-self/g,``))+e;case 4675:return H+e+lr+`flex-line-pack`+U(e,/align-content|flex-|-self/g,``)+e;case 5548:return H+e+lr+U(e,`shrink`,`negative`)+e;case 5292:return H+e+lr+U(e,`basis`,`preferred-size`)+e;case 6060:return H+`box-`+U(e,`-grow`,``)+H+e+lr+U(e,`grow`,`positive`)+e;case 4554:return H+U(e,/([^-])(transform)/g,`$1`+H+`$2`)+e;case 6187:return U(U(U(e,/(zoom-|grab)/,H+`$1`),/(image-set)/,H+`$1`),e,``)+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,H+`box-pack:$3`+lr+`flex-pack:$3`),/space-between/,`justify`)+H+e+e;case 4200:if(!Cr(e,/flex-|baseline/))return lr+`grid-column-align`+Er(e,t)+e;break;case 2592:case 3360:return lr+U(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Cr(e.props,/grid-\w+-end/)})?~wr(e+(n=n[t].value),`span`,0)?e:lr+U(e,`-start`,``)+e+lr+`grid-row-span:`+(~wr(n,`span`,0)?Cr(n,/\d+/):Cr(n,/\d+/)-+Cr(e,/\d+/))+`;`:lr+U(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return Cr(e.props,/grid-\w+-start/)})?e:lr+U(U(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,H+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dr(e)-1-t>6)switch(Tr(e,t+1)){case 109:if(Tr(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,`$1`+H+`$2-$3$1`+ur+(Tr(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~wr(e,`stretch`,0)?si(U(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return lr+n+`:`+r+s+(i?lr+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(Tr(e,t+6)===121)return U(e,`:`,`:`+H)+e;break;case 6444:switch(Tr(e,Tr(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+H+(Tr(e,14)===45?`inline-`:``)+`box$3$1`+H+`$2$3$1`+lr+`$2box$3`)+e;case 100:return U(e,`:`,`:`+lr)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,`scroll-`,`scroll-snap-`)+e}return e}function ci(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function li(e,t,n,r){switch(e.type){case _r:if(e.children.length)break;case mr:case hr:case pr:return e.return=e.return||e.value;case dr:return``;case gr:return e.return=e.value+`{`+ci(e.children,r)+`}`;case fr:if(!Dr(e.value=e.props.join(`,`)))return``}return Dr(n=ci(e.children,r))?e.return=e.value+`{`+n+`}`:``}function ui(e){var t=Or(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function di(e){return function(t){t.root||(t=t.return)&&e(t)}}function fi(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case pr:e.return=si(e.value,e.length,n);return;case gr:return ci([zr(e,{value:U(e.value,`@`,`@`+H)})],r);case fr:if(e.length)return Ar(n=e.props,function(t){switch(Cr(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:Br(zr(e,{props:[U(t,/:(read-\w+)/,`:`+ur+`$1`)]})),Br(zr(e,{props:[t]})),br(e,{props:jr(n,r)});break;case`::placeholder`:Br(zr(e,{props:[U(t,/:(plac\w+)/,`:`+H+`input-$1`)]})),Br(zr(e,{props:[U(t,/:(plac\w+)/,`:`+ur+`$1`)]})),Br(zr(e,{props:[U(t,/:(plac\w+)/,lr+`input-$1`)]})),Br(zr(e,{props:[t]})),br(e,{props:jr(n,r)});break}return``})}}var pi=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,mi=`active`,hi=`data-styled-version`,gi=`6.4.0`,_i=`/*!sc*/
`,vi=typeof window<`u`&&typeof document<`u`;function yi(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var bi=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:yi(`REACT_APP_SC_DISABLE_SPEEDY`)??yi(`SC_DISABLE_SPEEDY`)??(typeof process>`u`||!1)),xi=`sc-keyframes-`,Si={};function Ci(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var wi=new Map,Ti=new Map,Ei=1,Di=e=>{if(wi.has(e))return wi.get(e);for(;Ti.has(Ei);)Ei++;let t=Ei++;return wi.set(e,t),Ti.set(t,e),t},Oi=e=>Ti.get(e),ki=(e,t)=>{Ei=t+1,wi.set(e,t),Ti.set(t,e)},W=Object.freeze([]),Ai=Object.freeze({});function ji(e,t,n=Ai){return e.theme!==n.theme&&e.theme||t||n.theme}var Mi=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ni=/(^-|-$)/g;function Pi(e){return e.replace(Mi,`-`).replace(Ni,``)}var Fi=/(a)(d)/gi,Ii=e=>String.fromCharCode(e+(e>25?39:97));function Li(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=Ii(t%52)+n;return(Ii(t%52)+n).replace(Fi,`$1-$2`)}var Ri=5381,zi=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Bi=e=>zi(Ri,e);function Vi(e){return Li(Bi(e)>>>0)}function Hi(e){return e.displayName||e.name||`Component`}function Ui(e){return typeof e==`string`&&!0}function Wi(e){return Ui(e)?`styled.${e}`:`Styled(${Hi(e)})`}var Gi=Symbol.for(`react.memo`),Ki=Symbol.for(`react.forward_ref`),qi={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Ji={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Yi={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xi={[Ki]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Gi]:Yi};function Zi(e){return(`type`in(t=e)&&t.type.$$typeof)===Gi?Yi:`$$typeof`in e?Xi[e.$$typeof]:qi;var t}var Qi=Object.defineProperty,$i=Object.getOwnPropertyNames,ea=Object.getOwnPropertySymbols,ta=Object.getOwnPropertyDescriptor,na=Object.getPrototypeOf,ra=Object.prototype;function ia(e,t,n){if(typeof t!=`string`){let r=na(t);r&&r!==ra&&ia(e,r,n);let i=$i(t).concat(ea(t)),a=Zi(e),o=Zi(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in Ji||n&&n[s]||o&&s in o||a&&s in a)){let n=ta(t,s);try{Qi(e,s,n)}catch{}}}}return e}function aa(e){return typeof e==`function`}function oa(e){return typeof e==`object`&&`styledComponentId`in e}function sa(e,t){return e&&t?e+` `+t:e||t||``}function ca(e,t){return e.join(t||``)}function la(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function ua(e,t,n=!1){if(!n&&!la(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=ua(e[n],t[n]);else if(la(t))for(let n in t)e[n]=ua(e[n],t[n]);return e}function da(e,t){Object.defineProperty(e,`toString`,{value:t})}var fa=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Ci(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+_i;return t}},pa=`style[${pi}][${hi}="${gi}"]`,ma=RegExp(`^${pi}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),ha=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,ga=e=>{if(!e)return document;if(ha(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(ha(t))return t}return document},_a=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},va=(e,t)=>{let n=(t.textContent??``).split(_i),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(ma);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(ki(n,t),_a(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},ya=e=>{let t=ga(e.options.target).querySelectorAll(pa);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(pi)!==mi&&(va(e,r),r.parentNode&&r.parentNode.removeChild(r))}},ba=!1;function xa(){if(!1!==ba)return ba;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return ba=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return ba=t.getAttribute(`content`)||void 0}return ba=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Sa=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${pi}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(pi,mi),i.setAttribute(hi,gi);let s=t||xa();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Ca=class{constructor(e,t){this.element=Sa(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Ci(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},wa=class{constructor(e,t){this.element=Sa(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Ta=vi,Ea={isServer:!vi,useCSSOMInjection:!bi},Da=class e{static registerId(e){return Di(e)}constructor(e=Ai,t={},n){this.options=Object.assign(Object.assign({},Ea),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&vi&&Ta&&(Ta=!1,ya(this)),da(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Oi(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=pi+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&vi&&ya(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&vi&&t.target!==this.options.target&&ga(this.options.target)!==ga(t.target)&&ya(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Ca(t,n):new wa(t,n))(this.options),new fa(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){Di(e),e.startsWith(xi)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Di(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Di(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},Oa=new WeakSet,ka={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Aa(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in ka||e.startsWith(`--`)?String(t).trim():t+`px`}var ja=e=>e>=`A`&&e<=`Z`;function Ma(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(n===1&&r===`-`&&e[0]===`-`)return e;ja(r)?t+=`-`+r.toLowerCase():t+=r}return t.startsWith(`ms-`)?`-`+t:t}var Na=Symbol.for(`sc-keyframes`);function Pa(e){return typeof e==`object`&&!!e&&Na in e}function Fa(e){return aa(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Ia=e=>e==null||!1===e||e===``,La=Symbol.for(`react.client.reference`);function Ra(e){return e.$$typeof===La}var za=e=>{let t=[];for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!Ia(r)&&(Array.isArray(r)&&Oa.has(r)||aa(r)?t.push(Ma(n)+`:`,r,`;`):la(r)?t.push(n+` {`,...za(r),`}`):t.push(Ma(n)+`: `+Aa(n,r)+`;`))}return t};function Ba(e,t,n,r,i=[]){if(Ia(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return Ra(e)?i:Fa(e)&&t?Ba(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)Ba(e[a],t,n,r,i);return i}if(oa(e))return i.push(`.${e.styledComponentId}`),i;if(Pa(e))return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Ra(e))return i;if(la(e)){let t=za(e);for(let e=0;e<t.length;e++)i.push(t[e]);return i}return i.push(e.toString()),i}var Va=Bi(gi),Ha=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=zi(Va,t),this.baseStyle=n,Da.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a)if(Fa(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=ca(Ba(r,e,t,n)))}else i+=ca(Ba(a,e,t,n))}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=Li(zi(zi(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=sa(r,a)}}return r}},Ua=/&/g,Wa=47;function Ga(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Ka(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==Wa||e.charCodeAt(c+1)!==42)if(o)l===42&&e.charCodeAt(c+1)===Wa&&(o=!1,c++);else if(l!==34&&l!==39||Ga(e,c)){if(a===0)if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else a===0?a=l:a===l&&(a=0);else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function qa(e,t){for(let n=0;n<e.length;n++){let r=e[n];if(r.type===`rule`){r.value=t+` `+r.value,r.value=r.value.replaceAll(`,`,`,`+t+` `);let e=r.props,n=[];for(let r=0;r<e.length;r++)n[r]=t+` `+e[r];r.props=n}Array.isArray(r.children)&&r.type!==`@keyframes`&&(r.children=qa(r.children,t))}return e}function Ja({options:e=Ai,plugins:t=W}=Ai){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(Ua,r).replace(i,a))}),e.prefix&&o.push(fi),o.push(li);let s=[],c=ui(o.concat(di(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return Ka(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||Ga(e,o))if(s===0)if(t===Wa&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==Wa);)o++;o+=2}else if(t!==40)if(t!==41)if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===Wa)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===Wa&&o+1<r&&e.charCodeAt(o+1)===Wa){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++;else c>0&&c--,o++;else c++,o++;else o++;else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:Ka(i)):l===0?e:Ka(e)}(t),d=ni(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=qa(d,e.namespace)),s=[],ci(d,c),s},u=e,d=Ri;for(let e=0;e<t.length;e++)t[e].name||Ci(15),d=zi(d,t[e].name);return u!=null&&u.namespace&&(d=zi(d,u.namespace)),u!=null&&u.prefix&&(d=zi(d,`p`)),l.hash=d===Ri?``:d.toString(),l}var Ya=new Da,Xa=Ja(),Za=x.createContext({shouldForwardProp:void 0,styleSheet:Ya,stylis:Xa,stylisPlugins:void 0});Za.Consumer;function Qa(){return x.useContext(Za)}var $a=x.createContext(void 0);$a.Consumer;function eo(e){let t=x.useContext($a),n=x.useMemo(()=>function(e,t){if(!e)throw Ci(14);if(aa(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw Ci(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?x.createElement($a.Provider,{value:n},e.children):null}var to=Object.prototype.hasOwnProperty,no={};function ro(e,t){let n=typeof e==`string`?Pi(e):`sc`;no[n]=(no[n]||0)+1;let r=n+`-`+Vi(gi+n+no[n]);return t?t+`-`+r:r}function io(e,t,n){let r=oa(e),i=e,a=!Ui(e),{attrs:o=W,componentId:s=ro(t.displayName,t.parentComponentId),displayName:c=Wi(e)}=t,l=t.displayName&&t.componentId?Pi(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new Ha(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=x.useContext($a),u=Qa(),d=e.shouldForwardProp||u.shouldForwardProp,f=ji(t,l,a)||Ai,p,m;{let e=x.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(to.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=aa(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=sa(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=sa(r.className,t.className)),r}(r,t,f),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(i,p,u.styleSheet,u.stylis);let n=0;for(let e in t)to.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),_=sa(o,s);return m&&(_+=` `+m),p.className&&(_+=` `+p.className),g[Ui(h)&&h.includes(`-`)?`class`:`className`]=_,n&&(g.ref=n),(0,x.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=x.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?sa(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,`defaultProps`,{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)ua(e,n,!0);return e}({},i.defaultProps,e):e}}),da(m,()=>`.${m.styledComponentId}`),a&&ia(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var ao=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function oo(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var so=e=>(Oa.add(e),e);function G(e,...t){if(aa(e)||la(e))return so(Ba(oo(W,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?Ba(n):so(Ba(oo(n,t)))}function co(e,t,n=Ai){if(!t)throw Ci(1,t);let r=(r,...i)=>e(t,n,G(r,...i));return r.attrs=r=>co(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>co(e,t,Object.assign(Object.assign({},n),r)),r}var lo=e=>co(io,e),K=lo;ao.forEach(e=>{K[e]=lo(e)});var uo=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(aa(n)&&!oa(n))return!1}return!0}(e),Da.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=ca(Ba(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function fo(e,...t){let n=G(e,...t),r=`sc-global-${Vi(JSON.stringify(n))}`,i=new uo(n,r),a=e=>{let t=Qa(),n=x.useContext($a),a;{let e=x.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=x.useRef(i);x.useLayoutEffect(()=>(t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis)),()=>{i.removeStyles(a,t.styleSheet)}),s)}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,Si,n,o);else{let s=Object.assign(Object.assign({},t),{theme:ji(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return x.memo(a)}var po,mo=class{constructor(e,t){this[po]=!0,this.inject=(e,t=Xa)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=xi+e,this.rules=t,Di(this.id),da(this,()=>{throw Ci(12,String(this.name))})}getName(e=Xa){return e.hash?this.name+Li(e.hash>>>0):this.name}};function ho(e,...t){let n=ca(G(e,...t));return new mo(Vi(n),n)}po=Na,`${pi}`,`${pi}`,`${pi}`;var go=`https://ichnahhkdperxyydzgnr.supabase.co`,_o=`sb_publishable_yqd2XD_b5tcv0yRkB5JSGQ_IomVllB5`,vo=`kinoohota.auth.session`,yo=!!_o,bo=async(e,t)=>{let n=await fetch(`${go}/auth/v1/${e}`,{...t,headers:{apikey:_o,"Content-Type":`application/json`,...t.headers}}),r=await n.json().catch(()=>({}));if(!n.ok)throw Error(`Неверный логин или пароль`);return r},xo=e=>typeof e==`object`&&!!e&&`access_token`in e&&typeof e.access_token==`string`&&`refresh_token`in e&&typeof e.refresh_token==`string`&&`expires_at`in e&&typeof e.expires_at==`number`,So=e=>{if(typeof e!=`object`||!e)throw Error(`Некорректный ответ сервера`);let t=e,n={access_token:t.access_token,refresh_token:t.refresh_token,expires_at:typeof t.expires_at==`number`?t.expires_at:Math.floor(Date.now()/1e3)+Number(t.expires_in??3600)};if(!xo(n))throw Error(`Некорректный ответ сервера`);return localStorage.setItem(vo,JSON.stringify(n)),n},Co=()=>{try{let e=localStorage.getItem(vo),t=e?JSON.parse(e):null;return xo(t)?t:null}catch{return null}},wo=async(e,t)=>{if(e.trim().toLowerCase()!==`kinohost`)throw Error(`Неверный логин или пароль`);return So(await bo(`token?grant_type=password`,{method:`POST`,body:JSON.stringify({email:`kinohost@example.com`,password:t})}))},To=async e=>So(await bo(`token?grant_type=refresh_token`,{method:`POST`,body:JSON.stringify({refresh_token:e})})),Eo=async e=>{let t=e.expires_at<Date.now()/1e3+60?await To(e.refresh_token):e;if(!(await fetch(`${go}/auth/v1/user`,{headers:{apikey:_o,Authorization:`Bearer ${t.access_token}`}})).ok)throw Error(`Сессия завершена`);return t},Do=async()=>{let e=Co();localStorage.removeItem(vo),e&&await fetch(`${go}/auth/v1/logout`,{method:`POST`,headers:{apikey:_o,Authorization:`Bearer ${e.access_token}`}}).catch(()=>void 0)},Oo=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),q=s(((e,t)=>{t.exports=Oo()}))(),ko=(0,x.createContext)(null),Ao=({children:e})=>{let[t,n]=(0,x.useState)(null),[r,i]=(0,x.useState)(!0);return(0,x.useEffect)(()=>{let e=!0;return(async()=>{try{let t=Co();if(t&&yo){let r=await Eo(t);e&&n(r)}}catch{e&&await Do()}finally{e&&i(!1)}})(),()=>{e=!1}},[]),(0,x.useEffect)(()=>{if(!t)return;let e=window.setInterval(async()=>{let e=Co();if(!e){n(null);return}if(!(e.expires_at>Date.now()/1e3+120))try{n(await To(e.refresh_token))}catch{await Do(),n(null)}},3e4);return()=>window.clearInterval(e)},[t]),(0,q.jsx)(ko.Provider,{value:{loading:r,authenticated:!!t,login:async(e,t)=>n(await wo(e,t)),logout:async()=>{n(null),await Do()}},children:e})},jo=()=>{let e=(0,x.useContext)(ko);if(!e)throw Error(`AuthProvider missing`);return e},Mo=K.main`min-height:100vh;display:grid;place-items:center;padding:24px;background:${({theme:e})=>e.colors.background};`,No=K.form`width:min(100%,400px);display:grid;gap:18px;padding:36px;border:1px solid ${({theme:e})=>e.colors.border};border-radius:20px;background:${({theme:e})=>e.colors.surface};box-shadow:0 18px 48px #0002;`,Po=K.input`width:100%;box-sizing:border-box;padding:13px 15px;border:1px solid ${({theme:e})=>e.colors.border};border-radius:10px;background:${({theme:e})=>e.colors.surfaceAlt};color:${({theme:e})=>e.colors.text};font:inherit;`,Fo=K.button`padding:14px;border:0;border-radius:10px;background:#e7b24e;color:#1c1820;font:inherit;font-weight:700;cursor:pointer;:disabled{opacity:.5;cursor:wait;}`,Io=()=>{let{login:e}=jo(),[t,n]=(0,x.useState)(``),[r,i]=(0,x.useState)(``),[a,o]=(0,x.useState)(!1),[s,c]=(0,x.useState)(``);return(0,q.jsx)(Mo,{children:(0,q.jsxs)(No,{onSubmit:async n=>{n.preventDefault(),c(``),o(!0);try{await e(t,r)}catch(e){c(e instanceof Error?e.message:`Не удалось войти`)}finally{o(!1)}},children:[(0,q.jsx)(`h1`,{style:{margin:0,textAlign:`center`},children:`КиноОхота`}),(0,q.jsx)(`p`,{style:{margin:0,textAlign:`center`},children:`Вход для ведущих`}),(0,q.jsxs)(`label`,{children:[`Логин`,(0,q.jsx)(Po,{autoComplete:`username`,value:t,onChange:e=>n(e.target.value),required:!0})]}),(0,q.jsxs)(`label`,{children:[`Пароль`,(0,q.jsx)(Po,{type:`password`,autoComplete:`current-password`,value:r,onChange:e=>i(e.target.value),required:!0})]}),!yo&&(0,q.jsx)(`p`,{role:`alert`,children:`Не заданы настройки Supabase (VITE_SUPABASE_URL и VITE_SUPABASE_PUBLISHABLE_KEY)`}),s&&(0,q.jsx)(`p`,{role:`alert`,style:{color:`#e66b6b`,margin:0},children:s}),(0,q.jsx)(Fo,{disabled:a||!yo,children:a?`Входим…`:`Войти`})]})})},Lo=I.withTypes(),J=z.withTypes(),Ro=re.withTypes(),zo=K.div`min-height: 100vh;`,Bo=K.header`position:sticky;top:0;z-index:10;display:flex;justify-content:space-between;gap:14px;align-items:center;height:60px;box-sizing:border-box;padding:0 20px;border-bottom:1px solid ${({theme:e})=>e.colors.border};background:${({theme:e})=>e.colors.surface};box-shadow:0 8px 20px rgba(0,0,0,.08);`,Vo=K.div`display:flex;gap:18px;align-items:center;flex-wrap:wrap;`,Ho=K.div`display:flex;align-items:center;gap:8px;position:relative;z-index:1;`,Uo=K.div`position:absolute;left:50%;transform:translateX(-50%);max-width:45%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;font-size:${({$game:e})=>e?`clamp(22px, 1.5vw, 28px)`:`18px`};font-weight:${({$game:e})=>e?500:800};color:${({theme:e})=>e.colors.text};pointer-events:none;@media(max-width:900px){font-size:${({$game:e})=>e?`18px`:`14px`};max-width:35%;}`,Wo=K.button`padding:0;border:none;background:transparent;color:${({theme:e})=>e.colors.text};font-size:24px;font-weight:800;cursor:pointer;`,Go=K.div`display:flex;gap:8px;flex-wrap:wrap;`,Ko=K.button`min-height:36px;padding:0 14px;border:1px solid ${({theme:e})=>e.colors.border};border-radius:11px;background:${({theme:e})=>e.colors.surfaceAlt};color:${({theme:e})=>e.colors.text};font-weight:600;cursor:pointer;&:disabled{opacity:.45;cursor:not-allowed;}`;K(Ko)`border-color:#2f9e62;background:rgba(47,158,98,.2);color:#75d69d;&:hover{background:rgba(47,158,98,.32);}`;var qo=K(Ko)`border-color:#b85c5c;background:rgba(184,92,92,.14);color:#df9292;&:hover{background:rgba(184,92,92,.23);}`,Jo=K.button`height:40px;padding:0 14px;border:1px solid ${({theme:e})=>e.colors.border};border-radius:11px;background:${({theme:e})=>e.colors.surfaceAlt};color:${({theme:e})=>e.colors.text};display:flex;align-items:center;gap:9px;font-weight:600;white-space:nowrap;cursor:pointer;svg{width:23px;height:23px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}&:hover{background:${({theme:e})=>e.colors.accentSoft};}`,Yo=K(Jo)`svg{width:22px;height:22px;}`,Xo=K.button`width:40px;height:36px;padding:0;border:1px solid ${({theme:e})=>e.colors.border};border-radius:11px;background:${({theme:e})=>e.colors.surfaceAlt};color:${({theme:e})=>e.colors.text};display:grid;place-items:center;cursor:pointer;svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}&:hover{background:${({theme:e})=>e.colors.accentSoft};}`,Zo=K.button`position:relative;width:68px;height:36px;padding:3px;border:1px solid ${({theme:e})=>e.colors.border};border-radius:999px;background:${({theme:e})=>e.colors.surfaceAlt};color:${({theme:e})=>e.colors.text};cursor:pointer;display:flex;align-items:center;justify-content:space-between;`,Qo=K.span`position:relative;z-index:1;width:28px;height:28px;display:grid;place-items:center;font-size:15px;`,$o=K.span`position:absolute;top:3px;left:${({$dark:e})=>e?`35px`:`3px`};width:28px;height:28px;border-radius:50%;background:${({theme:e})=>e.colors.accentSoft};border:1px solid ${({theme:e})=>e.colors.accent};transition:left .2s ease;`,es=K.main`padding:28px;`,ts=K.div`position:fixed;inset:0;z-index:100;display:grid;place-items:center;padding:20px;background:rgba(0,0,0,.58);backdrop-filter:blur(4px);`,ns=K.div`width:min(420px,100%);padding:24px;border:1px solid ${({theme:e})=>e.colors.border};border-radius:18px;background:${({theme:e})=>e.colors.surface};box-shadow:0 20px 60px rgba(0,0,0,.35);`,rs=K.h3`margin:0;font-size:20px;line-height:1.4;color:${({theme:e})=>e.colors.text};`,is=K.div`display:flex;justify-content:flex-end;gap:10px;margin-top:22px;`,as=K.button`min-width:88px;min-height:40px;padding:0 16px;border:1px solid ${({theme:e})=>e.colors.border};border-radius:12px;background:${({theme:e})=>e.colors.surfaceAlt};color:${({theme:e})=>e.colors.text};font-weight:600;cursor:pointer;`,os=K(as)`border-color:#b85c5c;background:#b85c5c;color:#fff;&:hover{background:#9f4f4f;border-color:#9f4f4f;}`,ss=K.div`position:fixed;inset:0;z-index:90;background:rgba(0,0,0,.42);backdrop-filter:blur(2px);`,cs=K.aside`position:fixed;z-index:91;top:0;right:0;width:max-content;max-width:94vw;height:100vh;box-sizing:border-box;padding:24px;background:${({theme:e})=>e.colors.surface};border-left:1px solid ${({theme:e})=>e.colors.border};box-shadow:-18px 0 48px rgba(0,0,0,.28);overflow:auto;`,ls=K.div`display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:24px;`,us=K.h2`margin:0;font-size:26px;color:${({theme:e})=>e.colors.text};`,ds=K.button`width:40px;height:40px;padding:0;border:1px solid ${({theme:e})=>e.colors.border};border-radius:12px;background:${({theme:e})=>e.colors.surfaceAlt};color:${({theme:e})=>e.colors.text};font-family:Arial,sans-serif;font-size:22px;font-weight:400;line-height:40px;text-align:center;cursor:pointer;`,fs=K.div`--author-card-width:240px;display:grid;grid-template-columns:repeat(3,var(--author-card-width));grid-auto-rows:1fr;align-items:stretch;gap:14px;justify-content:start;@media(max-width:760px){grid-template-columns:repeat(2,var(--author-card-width));}@media(max-width:520px){grid-template-columns:var(--author-card-width);}`,ps=K.div`width:240px;min-width:240px;min-height:145px;box-sizing:border-box;padding:16px;border:1px solid ${({theme:e,$borderColor:t})=>t??e.colors.border};border-radius:14px;background:${({theme:e})=>e.colors.surfaceAlt};`,ms=K.div`margin-bottom:12px;font-size:17px;font-weight:800;color:${({theme:e})=>e.colors.text};white-space:normal;overflow-wrap:anywhere;`,hs=K.div`display:flex;flex-direction:column;align-items:flex-start;gap:7px;`,gs=K.span`color:${({theme:e})=>e.colors.text};font-size:14px;line-height:1.4;font-weight:500;white-space:nowrap;`,_s=K.div`padding:20px;border:1px dashed ${({theme:e})=>e.colors.border};border-radius:14px;color:${({theme:e})=>e.colors.text};text-align:center;`,vs=K.div`
  position: relative;
`,ys=K(Jo)`
  width: 40px;
  padding: 0;
  justify-content: center;
`,bs=K.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  display: grid;
  gap: 4px;
  width: max-content;
  padding: 6px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.surface};
  box-shadow: 0 8px 24px rgba(0, 0, 0, .24);

  button {
    justify-content: flex-start;
    border-color: transparent;
    background: transparent;
  }
  button:hover:not(:disabled), button:focus-visible {
    background: ${({theme:e})=>e.colors.accentSoft};
  }
`;function xs({children:e}){let[t,n]=(0,x.useState)(!1),r=(0,x.useRef)(null),i=(0,x.useRef)(null),a=(0,x.useId)();return(0,x.useEffect)(()=>{if(!t)return;let e=e=>{e.target instanceof Node&&!r.current?.contains(e.target)&&n(!1)};return document.addEventListener(`pointerdown`,e),()=>document.removeEventListener(`pointerdown`,e)},[t]),(0,q.jsxs)(vs,{ref:r,onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||n(!1)},onKeyDown:e=>{t&&e.key===`Escape`&&(e.stopPropagation(),n(!1),i.current?.focus())},children:[(0,q.jsx)(ys,{type:`button`,ref:i,"aria-label":`Действия со сценарием`,title:`Действия со сценарием`,"aria-expanded":t,"aria-controls":t?a:void 0,onClick:()=>n(e=>!e),children:(0,q.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,q.jsx)(`path`,{d:`M3 6h18M3 12h18M3 18h18`})})}),t&&(0,q.jsx)(bs,{id:a,onClick:e=>{e.target instanceof Element&&e.target.closest(`button:not(:disabled)`)&&(n(!1),i.current?.focus())},children:e})]})}var Ss=[{id:`minus-30`,title:`Минус 30 секунд`,icon:`⏱️`},{id:`ban-x2`,title:`Запрет X2`,icon:`🚫`},{id:`plus-2-points`,title:`Плюс 2 балла`,icon:`⭐`},{id:`plus-2-questions`,title:`Плюс 2 вопроса`,icon:`❓`}];function Cs(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var ws=typeof Symbol==`function`&&Symbol.observable||`@@observable`,Ts=()=>Math.random().toString(36).substring(7).split(``).join(`.`),Es={INIT:`@@redux/INIT${Ts()}`,REPLACE:`@@redux/REPLACE${Ts()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Ts()}`};function Ds(e){if(typeof e!=`object`||!e)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Os(e,t,n){if(typeof e!=`function`)throw Error(Cs(2));if(typeof t==`function`&&typeof n==`function`||typeof n==`function`&&typeof arguments[3]==`function`)throw Error(Cs(0));if(typeof t==`function`&&n===void 0&&(n=t,t=void 0),n!==void 0){if(typeof n!=`function`)throw Error(Cs(1));return n(Os)(e,t)}let r=e,i=t,a=new Map,o=a,s=0,c=!1;function l(){o===a&&(o=new Map,a.forEach((e,t)=>{o.set(t,e)}))}function u(){if(c)throw Error(Cs(3));return i}function d(e){if(typeof e!=`function`)throw Error(Cs(4));if(c)throw Error(Cs(5));let t=!0;l();let n=s++;return o.set(n,e),function(){if(t){if(c)throw Error(Cs(6));t=!1,l(),o.delete(n),a=null}}}function f(e){if(!Ds(e))throw Error(Cs(7));if(e.type===void 0)throw Error(Cs(8));if(typeof e.type!=`string`)throw Error(Cs(17));if(c)throw Error(Cs(9));try{c=!0,i=r(i,e)}finally{c=!1}return(a=o).forEach(e=>{e()}),e}function p(e){if(typeof e!=`function`)throw Error(Cs(10));r=e,f({type:Es.REPLACE})}function m(){let e=d;return{subscribe(t){if(typeof t!=`object`||!t)throw Error(Cs(11));function n(){let e=t;e.next&&e.next(u())}return n(),{unsubscribe:e(n)}},[ws](){return this}}}return f({type:Es.INIT}),{dispatch:f,subscribe:d,getState:u,replaceReducer:p,[ws]:m}}function ks(e){Object.keys(e).forEach(t=>{let n=e[t];if(n(void 0,{type:Es.INIT})===void 0)throw Error(Cs(12));if(n(void 0,{type:Es.PROBE_UNKNOWN_ACTION()})===void 0)throw Error(Cs(13))})}function As(e){let t=Object.keys(e),n={};for(let r=0;r<t.length;r++){let i=t[r];typeof e[i]==`function`&&(n[i]=e[i])}let r=Object.keys(n),i;try{ks(n)}catch(e){i=e}return function(e={},t){if(i)throw i;let a=!1,o={};for(let i=0;i<r.length;i++){let s=r[i],c=n[s],l=e[s],u=c(l,t);if(u===void 0)throw t&&t.type,Error(Cs(14));o[s]=u,a||=u!==l}return a||=r.length!==Object.keys(e).length,a?o:e}}function js(...e){return e.length===0?e=>e:e.length===1?e[0]:e.reduce((e,t)=>(...n)=>e(t(...n)))}function Ms(...e){return t=>(n,r)=>{let i=t(n,r),a=()=>{throw Error(Cs(15))},o={getState:i.getState,dispatch:(e,...t)=>a(e,...t)};return a=js(...e.map(e=>e(o)))(i.dispatch),{...i,dispatch:a}}}function Ns(e){return Ds(e)&&`type`in e&&typeof e.type==`string`}var Ps=Symbol.for(`immer-nothing`),Fs=Symbol.for(`immer-draftable`),Is=Symbol.for(`immer-state`);function Ls(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Rs=Object,zs=Rs.getPrototypeOf,Bs=`constructor`,Vs=`prototype`,Hs=`configurable`,Us=`enumerable`,Ws=`writable`,Gs=`value`,Ks=e=>!!e&&!!e[Is];function qs(e){return e?Xs(e)||rc(e)||!!e[Fs]||!!e[Bs]?.[Fs]||ic(e)||ac(e):!1}var Js=Rs[Vs][Bs].toString(),Ys=new WeakMap;function Xs(e){if(!e||!oc(e))return!1;let t=zs(e);if(t===null||t===Rs[Vs])return!0;let n=Rs.hasOwnProperty.call(t,Bs)&&t[Bs];if(n===Object)return!0;if(!sc(n))return!1;let r=Ys.get(n);return r===void 0&&(r=Function.toString.call(n),Ys.set(n,r)),r===Js}function Zs(e,t,n=!0){Qs(e)===0?(n?Reflect.ownKeys(e):Rs.keys(e)).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function Qs(e){let t=e[Is];return t?t.type_:rc(e)?1:ic(e)?2:ac(e)?3:0}var $s=(e,t,n=Qs(e))=>n===2?e.has(t):Rs[Vs].hasOwnProperty.call(e,t),ec=(e,t,n=Qs(e))=>n===2?e.get(t):e[t],tc=(e,t,n,r=Qs(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function nc(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t}var rc=Array.isArray,ic=e=>e instanceof Map,ac=e=>e instanceof Set,oc=e=>typeof e==`object`,sc=e=>typeof e==`function`,cc=e=>typeof e==`boolean`;function lc(e){let t=+e;return Number.isInteger(t)&&String(t)===e}var uc=e=>e.copy_||e.base_,dc=e=>e.modified_?e.copy_:e.base_;function fc(e,t){if(ic(e))return new Map(e);if(ac(e))return new Set(e);if(rc(e))return Array[Vs].slice.call(e);let n=Xs(e);if(t===!0||t===`class_only`&&!n){let t=Rs.getOwnPropertyDescriptors(e);delete t[Is];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){let i=n[r],a=t[i];a[Ws]===!1&&(a[Ws]=!0,a[Hs]=!0),(a.get||a.set)&&(t[i]={[Hs]:!0,[Ws]:!0,[Us]:a[Us],[Gs]:e[i]})}return Rs.create(zs(e),t)}else{let t=zs(e);if(t!==null&&n)return{...e};let r=Rs.create(t);return Rs.assign(r,e)}}function pc(e,t=!1){return gc(e)||Ks(e)||!qs(e)?e:(Qs(e)>1&&Rs.defineProperties(e,{set:hc,add:hc,clear:hc,delete:hc}),Rs.freeze(e),t&&Zs(e,(e,t)=>{pc(t,!0)},!1),e)}function mc(){Ls(2)}var hc={[Gs]:mc};function gc(e){return e===null||!oc(e)?!0:Rs.isFrozen(e)}var _c=`MapSet`,vc=`Patches`,yc=`ArrayMethods`,bc={};function xc(e){let t=bc[e];return t||Ls(0,e),t}var Sc=e=>!!bc[e],Cc,wc=()=>Cc,Tc=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Sc(_c)?xc(_c):void 0,arrayMethodsPlugin_:Sc(yc)?xc(yc):void 0});function Ec(e,t){t&&(e.patchPlugin_=xc(vc),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Dc(e){Oc(e),e.drafts_.forEach(Ac),e.drafts_=null}function Oc(e){e===Cc&&(Cc=e.parent_)}var kc=e=>Cc=Tc(Cc,e);function Ac(e){let t=e[Is];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function jc(e,t){t.unfinalizedDrafts_=t.drafts_.length;let n=t.drafts_[0];if(e!==void 0&&e!==n){n[Is].modified_&&(Dc(t),Ls(4)),qs(e)&&(e=Mc(t,e));let{patchPlugin_:r}=t;r&&r.generateReplacementPatches_(n[Is].base_,e,t)}else e=Mc(t,n);return Nc(t,e,!0),Dc(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e===Ps?void 0:e}function Mc(e,t){if(gc(t))return t;let n=t[Is];if(!n)return Vc(t,e.handledSet_,e);if(!Fc(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){let{callbacks_:t}=n;if(t)for(;t.length>0;)t.pop()(e);zc(n,e)}return n.copy_}function Nc(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&pc(t,n)}function Pc(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Fc=(e,t)=>e.scope_===t,Ic=[];function Lc(e,t,n,r){let i=uc(e),a=e.type_;if(r!==void 0&&ec(i,r,a)===t){tc(i,r,n,a);return}if(!e.draftLocations_){let t=e.draftLocations_=new Map;Zs(i,(e,n)=>{if(Ks(n)){let r=t.get(n)||[];r.push(e),t.set(n,r)}})}let o=e.draftLocations_.get(t)??Ic;for(let e of o)tc(i,e,n,a)}function Rc(e,t,n){e.callbacks_.push(function(r){let i=t;if(!i||!Fc(i,r))return;r.mapSetPlugin_?.fixSetContents(i);let a=dc(i);Lc(e,i.draft_??i,a,n),zc(i,r)})}function zc(e,t){if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(e.assigned_?.size??0)>0)){let{patchPlugin_:n}=t;if(n){let r=n.getPath(e);r&&n.generatePatches_(e,r,t)}Pc(e)}}function Bc(e,t,n){let{scope_:r}=e;if(Ks(n)){let i=n[Is];Fc(i,r)&&i.callbacks_.push(function(){Yc(e),Lc(e,n,dc(i),t)})}else qs(n)&&e.callbacks_.push(function(){let i=uc(e);e.type_===3?i.has(n)&&Vc(n,r.handledSet_,r):ec(i,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Vc(ec(e.copy_,t,e.type_),r.handledSet_,r)})}function Vc(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Ks(e)||t.has(e)||!qs(e)||gc(e)?e:(t.add(e),Zs(e,(r,i)=>{if(Ks(i)){let t=i[Is];Fc(t,n)&&(tc(e,r,dc(t),e.type_),Pc(t))}else qs(i)&&Vc(i,t,n)}),e)}function Hc(e,t){let n=rc(e),r={type_:+!!n,scope_:t?t.scope_:wc(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0},i=r,a=Uc;n&&(i=[r],a=Wc);let{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,[s,r]}var Uc={get(e,t){if(t===Is)return e;let n=e.scope_.arrayMethodsPlugin_,r=e.type_===1&&typeof t==`string`;if(r&&n?.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);let i=uc(e);if(!$s(i,t,e.type_))return Kc(e,i,t);let a=i[t];if(e.finalized_||!qs(a)||r&&e.operationMethod&&n?.isMutatingArrayMethod(e.operationMethod)&&lc(t))return a;if(a===Gc(e.base_,t)){Yc(e);let n=e.type_===1?+t:t,r=Zc(e.scope_,a,e,n);return e.copy_[n]=r}return a},has(e,t){return t in uc(e)},ownKeys(e){return Reflect.ownKeys(uc(e))},set(e,t,n){let r=qc(uc(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){let r=Gc(uc(e),t),i=r?.[Is];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(nc(n,r)&&(n!==void 0||$s(e.base_,t,e.type_)))return!0;Yc(e),Jc(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])?!0:(e.copy_[t]=n,e.assigned_.set(t,!0),Bc(e,t,n),!0)},deleteProperty(e,t){return Yc(e),Gc(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Jc(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let n=uc(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Ws]:!0,[Hs]:e.type_!==1||t!==`length`,[Us]:r[Us],[Gs]:n[t]}},defineProperty(){Ls(11)},getPrototypeOf(e){return zs(e.base_)},setPrototypeOf(){Ls(12)}},Wc={};for(let e in Uc){let t=Uc[e];Wc[e]=function(){let e=arguments;return e[0]=e[0][0],t.apply(this,e)}}Wc.deleteProperty=function(e,t){return Wc.set.call(this,e,t,void 0)},Wc.set=function(e,t,n){return Uc.set.call(this,e[0],t,n,e[0])};function Gc(e,t){let n=e[Is];return(n?uc(n):e)[t]}function Kc(e,t,n){let r=qc(t,n);return r?Gs in r?r[Gs]:r.get?.call(e.draft_):void 0}function qc(e,t){if(!(t in e))return;let n=zs(e);for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=zs(n)}}function Jc(e){e.modified_||(e.modified_=!0,e.parent_&&Jc(e.parent_))}function Yc(e){e.copy_||=(e.assigned_=new Map,fc(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Xc=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(e,t,n)=>{if(sc(e)&&!sc(t)){let n=t;t=e;let r=this;return function(e=n,...i){return r.produce(e,e=>t.call(this,e,...i))}}sc(t)||Ls(6),n!==void 0&&!sc(n)&&Ls(7);let r;if(qs(e)){let i=kc(this),a=Zc(i,e,void 0),o=!0;try{r=t(a),o=!1}finally{o?Dc(i):Oc(i)}return Ec(i,n),jc(r,i)}else if(!e||!oc(e)){if(r=t(e),r===void 0&&(r=e),r===Ps&&(r=void 0),this.autoFreeze_&&pc(r,!0),n){let t=[],i=[];xc(vc).generateReplacementPatches_(e,r,{patches_:t,inversePatches_:i}),n(t,i)}return r}else Ls(1,e)},this.produceWithPatches=(e,t)=>{if(sc(e))return(t,...n)=>this.produceWithPatches(t,t=>e(t,...n));let n,r;return[this.produce(e,t,(e,t)=>{n=e,r=t}),n,r]},cc(e?.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),cc(e?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),cc(e?.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){qs(e)||Ls(8),Ks(e)&&(e=Qc(e));let t=kc(this),n=Zc(t,e,void 0);return n[Is].isManual_=!0,Oc(t),n}finishDraft(e,t){let n=e&&e[Is];(!n||!n.isManual_)&&Ls(9);let{scope_:r}=n;return Ec(r,t),jc(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){let r=t[n];if(r.path.length===0&&r.op===`replace`){e=r.value;break}}n>-1&&(t=t.slice(n+1));let r=xc(vc).applyPatches_;return Ks(e)?r(e,t):this.produce(e,e=>r(e,t))}};function Zc(e,t,n,r){let[i,a]=ic(t)?xc(_c).proxyMap_(t,n):ac(t)?xc(_c).proxySet_(t,n):Hc(t,n);return(n?.scope_??wc()).drafts_.push(i),a.callbacks_=n?.callbacks_??[],a.key_=r,n&&r!==void 0?Rc(n,a,r):a.callbacks_.push(function(e){e.mapSetPlugin_?.fixSetContents(a);let{patchPlugin_:t}=e;a.modified_&&t&&t.generatePatches_(a,[],e)}),i}function Qc(e){return Ks(e)||Ls(10,e),$c(e)}function $c(e){if(!qs(e)||gc(e))return e;let t=e[Is],n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=fc(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=fc(e,!0);return Zs(n,(e,t)=>{tc(n,e,$c(t))},r),t&&(t.finalized_=!1),n}var el=new Xc().produce;function tl(e){return({dispatch:t,getState:n})=>r=>i=>typeof i==`function`?i(t,n,e):r(i)}var nl=tl(),rl=tl,il=typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]==`object`?js:js.apply(null,arguments)};typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function al(e,t){function n(...n){if(t){let r=t(...n);if(!r)throw Error(X(0));return{type:e,payload:r.payload,...`meta`in r&&{meta:r.meta},...`error`in r&&{error:r.error}}}return{type:e,payload:n[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>Ns(t)&&t.type===e,n}var ol=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function sl(e){return qs(e)?el(e,()=>{}):e}function cl(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function ll(e){return typeof e==`boolean`}var ul=()=>function(e){let{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:i=!0}=e??{},a=new ol;return t&&(ll(t)?a.push(nl):a.push(rl(t.extraArgument))),a},dl=`RTK_autoBatch`,fl=e=>t=>{setTimeout(t,e)},pl=(e={type:`raf`})=>t=>(...n)=>{let r=t(...n),i=!0,a=!1,o=!1,s=new Set,c=e.type===`tick`?queueMicrotask:e.type===`raf`?typeof window<`u`&&window.requestAnimationFrame?window.requestAnimationFrame:fl(10):e.type===`callback`?e.queueNotification:fl(e.timeout),l=()=>{o=!1,a&&(a=!1,s.forEach(e=>e()))};return Object.assign({},r,{subscribe(e){let t=r.subscribe(()=>i&&e());return s.add(e),()=>{t(),s.delete(e)}},dispatch(e){try{return i=!e?.meta?.[dl],a=!i,a&&(o||(o=!0,c(l))),r.dispatch(e)}finally{i=!0}}})},ml=e=>function(t){let{autoBatch:n=!0}=t??{},r=new ol(e);return n&&r.push(pl(typeof n==`object`?n:void 0)),r};function hl(e){let t=ul(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:a=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{},c;if(typeof n==`function`)c=n;else if(Ds(n))c=As(n);else throw Error(X(1));let l;l=typeof r==`function`?r(t):t();let u=js;i&&(u=il({trace:!1,...typeof i==`object`&&i}));let d=ml(Ms(...l)),f=typeof s==`function`?s(d):d(),p=u(...f);return Os(c,o,p)}function gl(e){let t={},n=[],r,i={addCase(e,n){let r=typeof e==`string`?e:e.type;if(!r)throw Error(X(28));if(r in t)throw Error(X(29));return t[r]=n,i},addAsyncThunk(e,r){return r.pending&&(t[e.pending.type]=r.pending),r.rejected&&(t[e.rejected.type]=r.rejected),r.fulfilled&&(t[e.fulfilled.type]=r.fulfilled),r.settled&&n.push({matcher:e.settled,reducer:r.settled}),i},addMatcher(e,t){return n.push({matcher:e,reducer:t}),i},addDefaultCase(e){return r=e,i}};return e(i),[t,n,r]}function _l(e){return typeof e==`function`}function vl(e,t){let[n,r,i]=gl(t),a;if(_l(e))a=()=>sl(e());else{let t=sl(e);a=()=>t}function o(e=a(),t){let o=[n[t.type],...r.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return o.filter(e=>!!e).length===0&&(o=[i]),o.reduce((e,n)=>{if(n)if(Ks(e)){let r=n(e,t);return r===void 0?e:r}else if(qs(e))return el(e,e=>n(e,t));else{let r=n(e,t);if(r===void 0){if(e===null)return e;throw Error(`A case reducer on a non-draftable value must not return undefined`)}return r}return e},e)}return o.getInitialState=a,o}var yl=Symbol.for(`rtk-slice-createasyncthunk`);function bl(e,t){return`${e}/${t}`}function xl({creators:e}={}){let t=e?.asyncThunk?.[yl];return function(e){let{name:n,reducerPath:r=n}=e;if(!n)throw Error(X(11));let i=(typeof e.reducers==`function`?e.reducers(wl()):e.reducers)||{},a=Object.keys(i),o={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},s={addCase(e,t){let n=typeof e==`string`?e:e.type;if(!n)throw Error(X(12));if(n in o.sliceCaseReducersByType)throw Error(X(13));return o.sliceCaseReducersByType[n]=t,s},addMatcher(e,t){return o.sliceMatchers.push({matcher:e,reducer:t}),s},exposeAction(e,t){return o.actionCreators[e]=t,s},exposeCaseReducer(e,t){return o.sliceCaseReducersByName[e]=t,s}};a.forEach(r=>{let a=i[r],o={reducerName:r,type:bl(n,r),createNotation:typeof e.reducers==`function`};El(a)?Ol(o,a,s,t):Tl(o,a,s)});function c(){let[t={},n=[],r=void 0]=typeof e.extraReducers==`function`?gl(e.extraReducers):[e.extraReducers],i={...t,...o.sliceCaseReducersByType};return vl(e.initialState,e=>{for(let t in i)e.addCase(t,i[t]);for(let t of o.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);r&&e.addDefaultCase(r)})}let l=e=>e,u=new Map,d=new WeakMap,f;function p(e,t){return f||=c(),f(e,t)}function m(){return f||=c(),f.getInitialState()}function h(t,n=!1){function r(e){let i=e[t];return i===void 0&&n&&(i=cl(d,r,m)),i}function i(t=l){return cl(cl(u,n,()=>new WeakMap),t,()=>{let r={};for(let[i,a]of Object.entries(e.selectors??{}))r[i]=Sl(a,t,()=>cl(d,t,m),n);return r})}return{reducerPath:t,getSelectors:i,get selectors(){return i(r)},selectSlice:r}}let g={name:n,reducer:p,actions:o.actionCreators,caseReducers:o.sliceCaseReducersByName,getInitialState:m,...h(r),injectInto(e,{reducerPath:t,...n}={}){let i=t??r;return e.inject({reducerPath:i,reducer:p},n),{...g,...h(i,!0)}}};return g}}function Sl(e,t,n,r){function i(i,...a){let o=t(i);return o===void 0&&r&&(o=n()),e(o,...a)}return i.unwrapped=e,i}var Cl=xl();function wl(){function e(e,t){return{_reducerDefinitionType:`asyncThunk`,payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer(e){return Object.assign({[e.name](...t){return e(...t)}}[e.name],{_reducerDefinitionType:`reducer`})},preparedReducer(e,t){return{_reducerDefinitionType:`reducerWithPrepare`,prepare:e,reducer:t}},asyncThunk:e}}function Tl({type:e,reducerName:t,createNotation:n},r,i){let a,o;if(`reducer`in r){if(n&&!Dl(r))throw Error(X(17));a=r.reducer,o=r.prepare}else a=r;i.addCase(e,a).exposeCaseReducer(t,a).exposeAction(t,o?al(e,o):al(e))}function El(e){return e._reducerDefinitionType===`asyncThunk`}function Dl(e){return e._reducerDefinitionType===`reducerWithPrepare`}function Ol({type:e,reducerName:t},n,r,i){if(!i)throw Error(X(18));let{payloadCreator:a,fulfilled:o,pending:s,rejected:c,settled:l,options:u}=n,d=i(e,a,u);r.exposeAction(t,d),o&&r.addCase(d.fulfilled,o),s&&r.addCase(d.pending,s),c&&r.addCase(d.rejected,c),l&&r.addMatcher(d.settled,l),r.exposeCaseReducer(t,{fulfilled:o||kl,pending:s||kl,rejected:c||kl,settled:l||kl})}function kl(){}var Al=`listener`,jl=`completed`,Ml=`cancelled`;`${Ml}`,`${jl}`,`${Al}${Ml}`,`${Al}${jl}`;var{assign:Nl}=Object,Pl=`listenerMiddleware`,Fl=Nl(al(`${Pl}/add`),{withTypes:()=>Fl});`${Pl}`;var Y=Nl(al(`${Pl}/remove`),{withTypes:()=>Y});function X(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Z={strongAssignments:{},cutAssignments:{},currentThemeIndex:0,currentQuestionIndex:0},Q=(e,t)=>{let n={};return Object.keys(e).forEach(r=>{let i=e[r].filter(e=>e!==t);i.length&&(n[r]=i)}),n},Il=Cl({name:`gameRoundOne`,initialState:Z,reducers:{assignStrongTheme:(e,t)=>{e.strongAssignments=Q(e.strongAssignments,t.payload.playerIndex),e.strongAssignments[t.payload.themeId]=[...e.strongAssignments[t.payload.themeId]??[],t.payload.playerIndex]},assignCutTheme:(e,t)=>{e.cutAssignments=Q(e.cutAssignments,t.payload.playerIndex),e.cutAssignments[t.payload.themeId]=[...e.cutAssignments[t.payload.themeId]??[],t.payload.playerIndex]},setRoundOnePosition:(e,t)=>{e.currentThemeIndex=t.payload.themeIndex,e.currentQuestionIndex=t.payload.questionIndex},resetGameRoundOne:()=>Z}}),{assignStrongTheme:Ll,assignCutTheme:Rl,setRoundOnePosition:zl,resetGameRoundOne:Bl}=Il.actions,Vl=Il.reducer,Hl={values:[0,0,0,0]},Ul=Cl({name:`gameScores`,initialState:Hl,reducers:{addScore:(e,t)=>{let{playerIndex:n,amount:r}=t.payload;typeof e.values[n]!=`number`&&(e.values[n]=0),e.values[n]+=r},setScore:(e,t)=>{let{playerIndex:n,value:r}=t.payload;e.values[n]=Number.isFinite(r)?r:0},resetScores:()=>Hl}}),{addScore:Wl,setScore:Gl,resetScores:Kl}=Ul.actions,ql=Ul.reducer,Jl={hunterIndex:null,opponentIndex:null,opponentOrder:[],currentDuelIndex:0,currentQuestionIndex:0,hunterShots:[],opponentShots:[],duelTieBreakPending:!1,hunterBonusIds:[],bonusAwardedDuelIndexes:[],duelBonusIds:{},completedDuels:[]};function Yl(e,t){let n=new Set(e);for(let e of Object.keys(t??{}))t?.[e]?n.add(e):n.delete(e);return[...n]}var Xl=Cl({name:`gameRoundTwo`,initialState:Jl,reducers:{prepareRoundTwo:(e,t)=>{e.hunterIndex=t.payload.hunterIndex,e.opponentIndex=t.payload.opponentIndex,e.opponentOrder=t.payload.opponentOrder?.length?t.payload.opponentOrder:[t.payload.opponentIndex],e.currentDuelIndex=0,e.currentQuestionIndex=0,e.hunterShots=Array.from({length:t.payload.questionCount},()=>null),e.opponentShots=Array.from({length:t.payload.questionCount},()=>null),e.duelTieBreakPending=!1,e.hunterBonusIds=Yl([],e.manualBonuses),e.bonusAwardedDuelIndexes=[],e.duelBonusIds={},e.completedDuels=[]},setRoundTwoOpponent:(e,t)=>{e.opponentIndex=t.payload},setHunterBonus:(e,t)=>{let{id:n,owned:r}=t.payload;e.manualBonuses??={},e.manualBonuses[n]=r,e.hunterBonusIds=Yl(e.hunterBonusIds,e.manualBonuses)},awardHunterBonus:(e,t)=>{e.manualBonuses&&delete e.manualBonuses[t.payload],e.hunterBonusIds.includes(t.payload)||e.hunterBonusIds.push(t.payload),e.bonusAwardedDuelIndexes.includes(e.currentDuelIndex)||e.bonusAwardedDuelIndexes.push(e.currentDuelIndex),e.duelBonusIds[e.currentDuelIndex]=t.payload},recordRoundTwoDuelResult:(e,t)=>{let n={opponentIndex:t.payload.opponentIndex,winner:t.payload.winner,bonusId:t.payload.winner===`hunter`?e.duelBonusIds[e.currentDuelIndex]:void 0};e.completedDuels[e.currentDuelIndex]=n},restoreRoundTwoProgress:(e,t)=>{let n=t.payload.completedDuels;e.hunterIndex=t.payload.hunterIndex,e.opponentIndex=null,e.opponentOrder=n.map(e=>e.opponentIndex),e.currentDuelIndex=n.length-1,e.currentQuestionIndex=0,e.hunterShots=[],e.opponentShots=[],e.duelTieBreakPending=!1,e.completedDuels=n,e.hunterBonusIds=Yl(n.flatMap(e=>e.bonusId?[e.bonusId]:[]),e.manualBonuses),e.bonusAwardedDuelIndexes=n.map((e,t)=>e.bonusId?t:-1).filter(e=>e>=0),e.duelBonusIds=n.reduce((e,t,n)=>(t.bonusId&&(e[n]=t.bonusId),e),{})},restoreRoundTwoHunterContext:(e,t)=>{e.hunterIndex=t.payload.hunterIndex,e.hunterBonusIds=t.payload.hunterBonusIds},resolveRoundTwoQuestion:(e,t)=>{let n=e.currentQuestionIndex;e.hunterShots[n]=t.payload.hunterHit?`hit`:`miss`,e.opponentShots[n]=t.payload.opponentSaved?`saved`:t.payload.opponentHit?`hit`:`miss`},nextRoundTwoQuestion:e=>{e.currentQuestionIndex<e.hunterShots.length-1&&(e.currentQuestionIndex+=1)},startRoundTwoDuelTieBreak:e=>{e.duelTieBreakPending=!0},startNextRoundTwoDuel:(e,t)=>{e.currentDuelIndex+=1,e.currentQuestionIndex=0,e.opponentIndex=t.payload.opponentIndex,e.opponentOrder[e.currentDuelIndex]=t.payload.opponentIndex,e.hunterShots=Array.from({length:t.payload.questionCount},()=>null),e.opponentShots=Array.from({length:t.payload.questionCount},()=>null),e.duelTieBreakPending=!1},resetGameRoundTwo:()=>Jl}}),{prepareRoundTwo:Zl,setRoundTwoOpponent:Ql,setHunterBonus:$l,awardHunterBonus:eu,recordRoundTwoDuelResult:tu,restoreRoundTwoProgress:nu,restoreRoundTwoHunterContext:ru,resolveRoundTwoQuestion:iu,nextRoundTwoQuestion:au,startRoundTwoDuelTieBreak:ou,startNextRoundTwoDuel:su,resetGameRoundTwo:cu}=Xl.actions,lu=Xl.reducer,uu={startingSide:null,startingPoolId:null,activeSide:null,activePoolId:null,currentQuestionIndex:0,packScore:0,hunterScore:0,packStolenQuestions:0,hunterStolenQuestions:0,completedSides:[],hunterBanUsesLeft:0,questionHistory:[],restoredSecondsLeft:null,currentSecondsLeft:null},du=Cl({name:`gameRoundThree`,initialState:uu,reducers:{chooseRoundThreeStarter:(e,t)=>{e.startingSide=t.payload},startRoundThree:(e,t)=>{e.startingSide&&(e.startingPoolId=t.payload.poolId,e.activeSide=e.startingSide,e.activePoolId=t.payload.poolId,e.currentQuestionIndex=0,e.packScore=0,e.hunterScore=t.payload.hunterStartingScore??0,e.packStolenQuestions=0,e.hunterStolenQuestions=0,e.completedSides=[],e.hunterBanUsesLeft=t.payload.hunterBanUses,e.questionHistory=[],e.restoredSecondsLeft=null,e.currentSecondsLeft=null,delete e.timeDeducted)},restoreRoundThreeSecondScenario:(e,t)=>{e.startingSide=t.payload.firstSide,e.startingPoolId=t.payload.firstPoolId,e.activeSide=t.payload.firstSide===`pack`?`hunter`:`pack`,e.activePoolId=t.payload.firstPoolId===`A`?`B`:`A`,e.currentQuestionIndex=0,e.packScore=t.payload.packScore??0,e.hunterScore=t.payload.hunterScore??0,e.packStolenQuestions=t.payload.packStolenQuestions??0,e.hunterStolenQuestions=t.payload.hunterStolenQuestions??0,e.completedSides=[t.payload.firstSide],e.hunterBanUsesLeft=t.payload.hunterBanUses,e.questionHistory=[],e.restoredSecondsLeft=null,e.currentSecondsLeft=null,delete e.timeDeducted},awardRoundThreePoint:(e,t)=>{t.payload===`pack`?e.packScore+=1:e.hunterScore+=1},awardStolenRoundThreePoint:(e,t)=>{t.payload===`pack`?(e.packScore+=1,e.packStolenQuestions+=1):(e.hunterScore+=1,e.hunterStolenQuestions+=1)},saveRoundThreeQuestionState:(e,t)=>{e.questionHistory[e.questionHistory.length-1]?.questionIndex!==e.currentQuestionIndex&&e.questionHistory.push({questionIndex:e.currentQuestionIndex,packScore:e.packScore,hunterScore:e.hunterScore,packStolenQuestions:e.packStolenQuestions,hunterStolenQuestions:e.hunterStolenQuestions,hunterBanUsesLeft:e.hunterBanUsesLeft,secondsLeft:t.payload,timeDeducted:e.timeDeducted})},previousRoundThreeQuestion:e=>{let t=e.questionHistory.pop();t&&(e.currentQuestionIndex=t.questionIndex,e.packScore=t.packScore,e.hunterScore=t.hunterScore,e.packStolenQuestions=t.packStolenQuestions,e.hunterStolenQuestions=t.hunterStolenQuestions,e.hunterBanUsesLeft=t.hunterBanUsesLeft,e.timeDeducted=t.timeDeducted,e.restoredSecondsLeft=t.secondsLeft,e.currentSecondsLeft=t.secondsLeft)},clearRestoredRoundThreeTime:e=>{e.restoredSecondsLeft=null},setRoundThreeCurrentTime:(e,t)=>{e.currentSecondsLeft=t.payload},nextRoundThreeQuestion:e=>{e.currentQuestionIndex+=1},useHunterBan:e=>{e.hunterBanUsesLeft>0&&--e.hunterBanUsesLeft},switchRoundThreeSide:e=>{!e.activeSide||!e.activePoolId||(e.completedSides.includes(e.activeSide)||e.completedSides.push(e.activeSide),e.activeSide=e.activeSide===`pack`?`hunter`:`pack`,e.activePoolId=e.activePoolId===`A`?`B`:`A`,e.currentQuestionIndex=0,e.questionHistory=[],e.restoredSecondsLeft=null,e.currentSecondsLeft=null,delete e.timeDeducted)},completeRoundThreeSide:e=>{e.activeSide&&!e.completedSides.includes(e.activeSide)&&e.completedSides.push(e.activeSide)},resetGameRoundThree:()=>uu},extraReducers:e=>e.addCase($l,(e,{payload:{id:t,owned:n}})=>{if(!e.activePoolId)return;let r=e.questionHistory??[];if(t===`plus-2-points`){let t=e=>Math.max(0,e+(n?2:-2));e.hunterScore=t(e.hunterScore),r.forEach(e=>{e.hunterScore=t(e.hunterScore)})}if(t===`ban-x2`&&(e.hunterBanUsesLeft=n?2:0,r.forEach(t=>{t.hunterBanUsesLeft=e.hunterBanUsesLeft})),t===`minus-30`&&e.activeSide===`pack`){if(e.currentSecondsLeft!==null){let t=n?Math.min(30,e.currentSecondsLeft):e.timeDeducted??30;e.currentSecondsLeft+=n?-t:t,e.timeDeducted=n?t:0}r.forEach(e=>{let t=n?Math.min(30,e.secondsLeft):e.timeDeducted??30;e.secondsLeft+=n?-t:t,e.timeDeducted=n?t:0})}})}),{chooseRoundThreeStarter:fu,startRoundThree:pu,restoreRoundThreeSecondScenario:mu,awardRoundThreePoint:hu,awardStolenRoundThreePoint:gu,saveRoundThreeQuestionState:_u,previousRoundThreeQuestion:vu,clearRestoredRoundThreeTime:yu,setRoundThreeCurrentTime:bu,nextRoundThreeQuestion:xu,useHunterBan:Su,switchRoundThreeSide:Cu,completeRoundThreeSide:wu,resetGameRoundThree:Tu}=du.actions,Eu=du.reducer,Du=`kinoohota-round-three`,Ou=()=>{let e=Math.max(0,window.screen.availWidth-460-24),t=window.open(``,`kinoohota-round-three-presenter`,`popup=yes,width=460,height=720,left=${e},top=24,resizable=yes,scrollbars=yes`);return t&&t.location.pathname!==`/game/round/3/presenter`&&t.location.replace(`/game/round/3/presenter`),t},ku=K.div`
  position: fixed;
  inset: 0;
  z-index: 120;
  background: rgba(3, 7, 18, 0.58);
  backdrop-filter: blur(4px);
`,Au=K.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: min(860px, 96vw);
  height: 100%;
  box-sizing: border-box;
  padding: 26px 30px;
  border-left: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.surface};
  box-shadow: -22px 0 60px rgba(0, 0, 0, 0.35);
  overflow-y: auto;
`,ju=K.div`display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:18px;`,Mu=K.h2`margin:0;font-size:24px;font-weight:650;`,Nu=K.button`
  position:relative;width:38px;height:38px;flex:0 0 38px;padding:0;border:1px solid ${({theme:e})=>e.colors.border};border-radius:11px;background:${({theme:e})=>e.colors.surfaceAlt};color:${({theme:e})=>e.colors.text};cursor:pointer;font-size:0;
  &::before,&::after{content:'';position:absolute;top:50%;left:50%;width:12px;height:1.5px;border-radius:999px;background:currentColor;transform-origin:center;}
  &::before{transform:translate(-50%,-50%) rotate(45deg);} &::after{transform:translate(-50%,-50%) rotate(-45deg);}
`,Pu=K.div`display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-bottom:20px;`,Fu=K.button`min-height:70px;padding:12px;border:1px solid ${({$active:e,theme:t})=>e?t.colors.accent:t.colors.border};border-radius:16px;background:${({$active:e,theme:t})=>e?t.colors.accentSoft:t.colors.surfaceAlt};color:${({theme:e})=>e.colors.text};font-size:17px;font-weight:600;cursor:pointer;`,Iu=K.div`display:grid;gap:14px;`,Lu=K.h3`margin:4px 0 0;font-size:16px;font-weight:600;`,Ru=K.label`display:grid;gap:7px;color:${({theme:e})=>e.colors.mutedText};font-size:13px;font-weight:500;`,zu=K.div`
  display:grid;
  grid-template-columns:minmax(0, 4fr) minmax(170px, 1fr);
  gap:12px;
  align-items:end;
  @media(max-width:620px){grid-template-columns:1fr;}
`,Bu=K.div`position:relative;width:100%;`,Vu=K.button`
  width:100%;min-height:44px;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:0 15px;border:1px solid ${({$open:e,theme:t})=>e?t.colors.accent:t.colors.border};border-radius:12px;outline:none;background:${({theme:e})=>e.colors.surfaceAlt};color:${({theme:e})=>e.colors.text};font:inherit;font-weight:500;text-align:left;cursor:pointer;box-shadow:${({$open:e,theme:t})=>e?`0 0 0 3px ${t.colors.accentSoft}`:`none`};transition:border-color .16s ease,box-shadow .16s ease;
  &:hover{border-color:${({theme:e})=>e.colors.accent};}
`,Hu=K.span`width:7px;height:7px;flex:0 0 7px;margin-right:2px;border-right:1.8px solid currentColor;border-bottom:1.8px solid currentColor;color:${({theme:e})=>e.colors.mutedText};transform:${({$open:e})=>e?`rotate(225deg) translate(-2px, -2px)`:`rotate(45deg) translate(-2px, -2px)`};transition:transform .16s ease;`,Uu=K.div`position:absolute;z-index:20;top:calc(100% + 6px);left:0;right:0;padding:6px;border:1px solid ${({theme:e})=>e.colors.border};border-radius:12px;background:${({theme:e})=>e.colors.surface};box-shadow:0 14px 34px rgba(0,0,0,.42);max-height:230px;overflow-y:auto;`,Wu=K.button`width:100%;min-height:38px;display:flex;align-items:center;padding:7px 10px;border:0;border-radius:8px;background:${({$selected:e,theme:t})=>e?t.colors.accentSoft:`transparent`};color:${({theme:e})=>e.colors.text};font:inherit;font-weight:${({$selected:e})=>e?600:450};text-align:left;cursor:pointer;&:hover{background:${({theme:e})=>e.colors.accentSoft};}`,Gu=K.input`
  width:100%;min-height:44px;box-sizing:border-box;padding:0 12px;border:1px solid ${({theme:e})=>e.colors.border};border-radius:12px;outline:none;background:${({theme:e})=>e.colors.surfaceAlt};color:${({theme:e})=>e.colors.text};font:inherit;font-weight:500;appearance:textfield;-moz-appearance:textfield;
  &:focus{border-color:${({theme:e})=>e.colors.accent};box-shadow:0 0 0 3px ${({theme:e})=>e.colors.accentSoft};}
  &::-webkit-inner-spin-button,&::-webkit-outer-spin-button{margin:0;-webkit-appearance:none;}
`,Ku=K.div`display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;align-items:start;@media(max-width:760px){grid-template-columns:1fr;}`,qu=K.div`display:grid;gap:10px;min-width:0;padding:14px;border:1px solid ${({theme:e})=>e.colors.border};border-radius:15px;background:rgba(255,255,255,.025);`,Ju=K.label`
  display:flex;align-items:center;gap:11px;font-weight:550;cursor:pointer;
  input{width:20px;height:20px;margin:0;appearance:none;-webkit-appearance:none;display:grid;place-content:center;flex:0 0 20px;border:1px solid ${({theme:e})=>e.colors.border};border-radius:6px;background:${({theme:e})=>e.colors.surfaceAlt};cursor:pointer;transition:background .15s ease,border-color .15s ease,box-shadow .15s ease;}
  input::before{content:'';width:9px;height:5px;border-left:2px solid #fff;border-bottom:2px solid #fff;transform:translateY(-1px) rotate(-45deg) scale(0);transition:transform .12s ease;}
  input:checked{border-color:${({theme:e})=>e.colors.accent};background:${({theme:e})=>e.colors.accent};} input:checked::before{transform:translateY(-1px) rotate(-45deg) scale(1);} input:focus-visible{outline:none;box-shadow:0 0 0 3px ${({theme:e})=>e.colors.accentSoft};}
`,Yu=K.div`display:grid;grid-template-columns:1fr 1fr;gap:10px;`,Xu=K.section`
  display: grid;
  gap: 12px;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Zu=K.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr));
  gap: 10px;
`,Qu=K.button`
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 8px;
  min-height: 88px;
  padding: 12px;
  border-radius: 14px;
  border: 1px solid ${({$active:e,theme:t})=>e?`#22c55e`:t.colors.border};
  background: ${({$active:e,theme:t})=>e?`rgba(34,197,94,.16)`:t.colors.surfaceAlt};
  box-shadow: ${({$active:e})=>e?`0 0 14px rgba(34,197,94,.22)`:`none`};
  color: ${({theme:e})=>e.colors.text};
  font: inherit;
  cursor: pointer;
`,$u=K.span`display:inline-grid;place-items:center;flex:0 0 30px;width:30px;font-size:26px;line-height:1;`,ed=K.div`color:${({theme:e})=>e.colors.mutedText};font-size:13px;line-height:1.45;font-weight:400;`,td=K.button`width:100%;min-height:48px;margin-top:4px;border:1px solid #5b7fc4;border-radius:12px;background:#496cae;color:#fff;font-weight:600;cursor:pointer;`,nd=K.div`
  display: grid;
  grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
  gap: 10px;
  @media (max-width: 620px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
`,rd=K.button`
  min-height: 64px;
  padding: 12px;
  border: 1px solid ${({$active:e,theme:t})=>e?t.colors.accent:t.colors.border};
  border-radius: 13px;
  background: ${({$active:e,theme:t})=>e?t.colors.accentSoft:t.colors.surfaceAlt};
  color: ${({theme:e})=>e.colors.text};
  font: inherit;
  font-weight: ${({$active:e})=>e?700:500};
  text-align: center;
  overflow-wrap: anywhere;
  cursor: pointer;
  transition: background .16s ease, border-color .16s ease;
  &:hover { border-color: ${({theme:e})=>e.colors.accent}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.accent}; outline-offset: 2px; }
`,id=({value:e,options:t,onChange:n})=>{let[r,i]=(0,x.useState)(!1);return(0,q.jsxs)(Bu,{children:[(0,q.jsxs)(Vu,{type:`button`,$open:r,onClick:()=>i(e=>!e),children:[(0,q.jsx)(`span`,{children:(t.find(t=>t.value===e)??t[0])?.label}),(0,q.jsx)(Hu,{$open:r})]}),r&&(0,q.jsx)(Uu,{children:t.map(t=>(0,q.jsx)(Wu,{type:`button`,$selected:t.value===e,onClick:()=>{n(t.value),i(!1)},children:t.label},String(t.value)))})]})},ad=({open:e,onClose:t})=>{let n=Lo(),r=wt(),{players:i,isFourthActive:a}=J(e=>e.players),o=J(e=>e.roundOne.themes),s=J(e=>e.gameRoundOne),c=J(e=>e.gameRoundTwo),l=J(e=>e.gameScores.values),u=J(e=>e.bonusSelection.selected),d=(0,x.useMemo)(()=>i.slice(0,a?4:3),[i,a]),f=u.length>0?u:Ss.map(e=>e.id),p=Ss.filter(e=>f.includes(e.id)),[m,h]=(0,x.useState)(`round2`),[g,_]=(0,x.useState)(s.currentThemeIndex),[v,y]=(0,x.useState)(s.currentQuestionIndex),[b,S]=(0,x.useState)(0),[C,w]=(0,x.useState)({}),T=c.hunterBonusIds,[E,D]=(0,x.useState)(!1),[O,k]=(0,x.useState)(`pack`),[A,ee]=(0,x.useState)(`A`),[j,M]=(0,x.useState)(0),[N,te]=(0,x.useState)(0),P=e=>{let t=d[e];return t?`${t.firstName} ${t.lastName}`.trim():`Игрок ${e+1}`},F=d.map((e,t)=>({value:t,label:P(t)}));if((0,x.useEffect)(()=>{if(!e)return;_(s.currentThemeIndex),y(s.currentQuestionIndex);let t=c.hunterIndex??0;S(t);let n={};d.forEach((e,r)=>{if(r===t)return;let i=c.completedDuels.find(e=>e.opponentIndex===r);n[r]={played:!!i,winner:i?.winner??`opponent`,bonusId:i?.bonusId??``}});let r=c.completedDuels.find(e=>e.opponentIndex===-1);r&&(n[-1]={played:!0,winner:r.winner,bonusId:r.bonusId??``}),w(n)},[e,c.hunterIndex,c.completedDuels,d]),!e)return null;let ne=d.map((e,t)=>t).filter(e=>e!==b),re=a?ne:[...ne,-1],ie=ne.every(e=>C[e]?.played),I=e=>{S(e),w(d.reduce((t,n,r)=>(r!==e&&(t[r]={played:!1,winner:`opponent`,bonusId:``}),t),{}))},L=(e,t)=>w(n=>{let r={...n};return e!==-1&&t.played===!1&&delete r[-1],r[e]={...n[e]??{played:!1,winner:`opponent`,bonusId:``},...t},r}),R=e=>{let t=e.replace(/\D/g,``).replace(/^0+(?=\d)/,``);n(Gl({playerIndex:b,value:t===``?0:Number(t)}))},z=()=>{o[g]?.questions[v]&&(n(zl({themeIndex:g,questionIndex:v})),t(),r(`/game/round/1/play?jump=${Date.now()}`))},B=()=>{let e=[...new Set([...c.opponentOrder.filter(e=>ne.includes(e)),...ne])];a||e.push(-1);let i=e.filter(e=>C[e]?.played).map(e=>{let{winner:t,bonusId:n}=C[e];return{opponentIndex:e,winner:t,bonusId:t===`hunter`&&n?n:void 0}});n(nu({hunterIndex:b,completedDuels:i})),n(Tu()),t(),i.length===3?(Ou(),r(`/game/round/3/start`)):r(`/game/hunter-reveal`)},ae=()=>{if(Ou(),n(ru({hunterIndex:b,hunterBonusIds:T})),!E){n(Tu()),t(),r(`/game/round/3/start`);return}n(mu({firstSide:O,firstPoolId:A,hunterBanUses:T.includes(`ban-x2`)?2:0,packScore:j,hunterScore:N})),t(),r(`/game/round/3/play`)},oe=(0,q.jsxs)(zu,{children:[(0,q.jsxs)(Ru,{children:[`Охотник`,(0,q.jsx)(id,{value:b,options:F,onChange:m===`round2`?I:S})]}),(0,q.jsxs)(Ru,{children:[`Очки за первый раунд`,(0,q.jsx)(Gu,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,value:l[b]??0,onChange:e=>R(e.target.value)})]})]});return(0,q.jsx)(ku,{onMouseDown:t,children:(0,q.jsxs)(Au,{onMouseDown:e=>e.stopPropagation(),children:[(0,q.jsxs)(ju,{children:[(0,q.jsx)(Mu,{children:`Переход между раундами`}),(0,q.jsx)(Nu,{type:`button`,onClick:t,"aria-label":`Закрыть`,children:`×`})]}),(0,q.jsxs)(Pu,{children:[(0,q.jsx)(Fu,{type:`button`,$active:m===`round1`,onClick:()=>h(`round1`),children:`Первый раунд`}),(0,q.jsx)(Fu,{type:`button`,$active:m===`round2`,onClick:()=>h(`round2`),children:`Второй раунд`}),(0,q.jsx)(Fu,{type:`button`,$active:m===`round3`,onClick:()=>h(`round3`),children:`Третий раунд`})]}),m===`round1`?(0,q.jsxs)(Iu,{children:[(0,q.jsx)(Lu,{children:`Выбор вопроса первого раунда`}),(0,q.jsx)(ed,{children:`Выберите любую тему и вопрос. Очки и назначения игроков сохранятся.`}),(0,q.jsx)(Lu,{children:`Тема`}),(0,q.jsx)(nd,{$columns:3,children:o.map((e,t)=>(0,q.jsx)(rd,{type:`button`,$active:g===t,"aria-pressed":g===t,onClick:()=>{_(t),y(0)},children:e.title||`Тема ${t+1}`},e.id))}),(0,q.jsx)(Lu,{children:`Вопрос`}),(0,q.jsx)(nd,{$columns:5,children:(o[g]?.questions??[]).map((e,t)=>(0,q.jsxs)(rd,{type:`button`,$active:v===t,"aria-pressed":v===t,title:e.text||`Вопрос ${t+1}`,onClick:()=>y(t),children:[`Вопрос `,t+1]},e.id))}),(0,q.jsx)(td,{type:`button`,disabled:!o[g]?.questions[v],onClick:z,children:`Перейти к вопросу →`})]}):m===`round2`?(0,q.jsxs)(Iu,{children:[(0,q.jsx)(Lu,{children:`Восстановление второго раунда`}),oe,(0,q.jsx)(ed,{children:`Отметьте только уже завершённые дуэли. Следующим экраном будет выбор соперника для очередной дуэли.`}),(0,q.jsx)(Ku,{children:re.map(e=>{let t=C[e]??{played:!1,winner:`opponent`,bonusId:``};return(0,q.jsxs)(qu,{children:[(0,q.jsxs)(Ju,{children:[(0,q.jsx)(`input`,{type:`checkbox`,disabled:e===-1&&!ie,checked:t.played,onChange:t=>L(e,{played:t.target.checked})}),e===-1?`Бонусная дуэль`:`Дуэль с ${P(e)}`,` сыграна`]}),t.played&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Ru,{children:[`Победитель`,(0,q.jsx)(id,{value:t.winner,options:[{value:`opponent`,label:e===-1?`Стая`:`Стая — ${P(e)}`},{value:`hunter`,label:`Охотник — ${P(b)}`}],onChange:t=>L(e,{winner:t,bonusId:``})})]}),t.winner===`hunter`&&(0,q.jsxs)(Ru,{children:[`Полученный бонус`,(0,q.jsx)(id,{value:t.bonusId,options:[{value:``,label:`Без бонуса`},...p.map(({id:e,icon:t,title:n})=>({value:e,label:`${t}  ${n}`}))],onChange:t=>L(e,{bonusId:t})})]})]})]},e)})}),(0,q.jsx)(td,{type:`button`,onClick:B,children:`Перейти во второй раунд →`})]}):(0,q.jsxs)(Iu,{children:[(0,q.jsx)(Lu,{children:`Восстановление третьего раунда`}),oe,(0,q.jsxs)(qu,{children:[(0,q.jsxs)(Ju,{children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:E,onChange:e=>D(e.target.checked)}),`Первый сценарий уже сыгран`]}),E&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Yu,{children:[(0,q.jsxs)(Ru,{children:[`Кто играл первым`,(0,q.jsx)(id,{value:O,options:[{value:`pack`,label:`Стая`},{value:`hunter`,label:`Охотник`}],onChange:k})]}),(0,q.jsxs)(Ru,{children:[`Сыгранный сценарий`,(0,q.jsx)(id,{value:A,options:[{value:`A`,label:`Сценарий A`},{value:`B`,label:`Сценарий B`}],onChange:ee})]})]}),(0,q.jsxs)(Yu,{children:[(0,q.jsxs)(Ru,{children:[`Баллы Стаи`,(0,q.jsx)(Gu,{type:`number`,min:`0`,value:j,onChange:e=>M(Math.max(0,Number(e.target.value)||0))})]}),(0,q.jsxs)(Ru,{children:[`Баллы Охотника`,(0,q.jsx)(Gu,{type:`number`,min:`0`,value:N,onChange:e=>te(Math.max(0,Number(e.target.value)||0))})]})]})]})]}),(0,q.jsx)(ed,{children:`Если первый сценарий не сыгран, откроется обычный старт третьего раунда. Если сыгран — сразу начнётся второй сценарий у противоположной стороны.`}),(0,q.jsx)(td,{type:`button`,onClick:ae,children:`Перейти в третий раунд →`})]}),(0,q.jsxs)(Xu,{"aria-labelledby":`hunter-bonus-heading`,children:[(0,q.jsx)(Lu,{id:`hunter-bonus-heading`,children:`Бонусы охотника`}),(0,q.jsx)(Zu,{children:p.map(({id:e,title:t,icon:r})=>{let i=T.includes(e);return(0,q.jsxs)(Qu,{type:`button`,$active:i,"aria-pressed":i,onClick:()=>n($l({id:e,owned:!i})),children:[(0,q.jsx)($u,{"aria-hidden":`true`,children:r}),t]},e)})})]})]})})},od=[`Айя Воронова`,`Анастасия Миллер`,`Артем Терехин и Саша Романова`,`Богдан Чернобрывый`,`Евгений Любовников`,`Константин Александров`,`Максим Клейн`,`Маша Морозова`,`Маша Шилова`,`Мирас Зарубеков`,`Николай Ермак`,`Руслан Олейник`],sd=[`Айя Воронова`,`Богдан Чернобрывый`,`Евгений Любовников`,`Константин Александров`,`Маша Морозова`,`Маша Шилова`,`Николай Ермак`,`Руслан Олейник`],cd={"Артем Терехин и Саша Романова":`#2dd4bf`,"Айя Воронова":`#7dd3fc`,"Богдан Чернобрывый":`#43845f`,"Евгений Любовников":`#a78bfa`,"Николай Ермак":`#3b82f6`,"Константин Александров":`#C6A15B`,"Максим Клейн":`#7F8C99`,"Маша Морозова":`#f472b6`,"Мирас Зарубеков":`#b594e8`,"Маша Шилова":`#67aF82`,"Анастасия Миллер":`#c98b4a`,"Руслан Олейник":`#d96b6b`},ld=e=>({id:e,question:``,answer:``,author:``}),ud=()=>({items:[ld(`extra-1`)]}),dd=ud(),fd=e=>e.map(e=>({id:e.id,question:e.question??``,answer:e.answer??``,author:e.author??``})),pd=Cl({name:`extraQuestions`,initialState:dd,reducers:{setExtraQuestion:(e,t)=>{let n=e.items.findIndex(e=>e.id===t.payload.id);n!==-1&&(e.items[n]=t.payload.question)},addExtraQuestion:e=>{let t=`extra-${Date.now()}-${Math.random().toString(36).slice(2,7)}`;e.items.push(ld(t))},removeExtraQuestion:(e,t)=>{e.items=e.items.filter(e=>e.id!==t.payload),e.items.length===0&&(e.items=[ld(`extra-1`)])},resetExtraQuestions:()=>ud(),setExtraQuestionsState:(e,t)=>({items:fd(t.payload.items)})}}),{setExtraQuestion:md,addExtraQuestion:hd,removeExtraQuestion:gd,resetExtraQuestions:_d,setExtraQuestionsState:vd}=pd.actions,$=pd.reducer,yd=()=>({firstName:``,lastName:``}),bd=()=>({players:[yd(),yd(),yd(),yd()],isFourthActive:!0,host:null,scenarioNumber:``}),xd=Cl({name:`players`,initialState:bd(),reducers:{setPlayer:(e,t)=>{e.players[t.payload.index]=t.payload.player},setHost:(e,t)=>{e.host=t.payload},setScenarioNumber:(e,t)=>{e.scenarioNumber=t.payload.replace(/\D/g,``).slice(0,4)},clearPlayers:e=>{e.players=[yd(),yd(),yd(),yd()],e.host=null},toggleFourthPlayer:e=>{e.isFourthActive&&(e.players[3]=yd()),e.isFourthActive=!e.isFourthActive},setPlayersMode:(e,t)=>{e.isFourthActive=t.payload===4,t.payload===3&&(e.players[3]=yd())},resetPlayers:()=>bd()}}),{setPlayer:Sd,setHost:Cd,setScenarioNumber:wd,clearPlayers:Td,toggleFourthPlayer:Ed,setPlayersMode:Dd,resetPlayers:Od}=xd.actions,kd=xd.reducer,Ad=()=>typeof crypto<`u`&&`randomUUID`in crypto?crypto.randomUUID():`id-${Math.random().toString(36).slice(2,11)}`,jd=()=>({id:Ad(),text:``,answer:``,comment:``,image:``,questionImage:``,answerImage:``}),Md=()=>({id:Ad(),title:``,description:``,author:``,questions:Array.from({length:5},jd)}),Nd=()=>({timeLimitSeconds:10,themes:Array.from({length:5},Md)}),Pd=e=>({timeLimitSeconds:e?.timeLimitSeconds??10,themes:(e?.themes??[]).map(e=>({...e,author:e.author??``,questions:(e.questions??[]).map(e=>({id:e.id,text:e.text??``,answer:e.answer??``,comment:e.comment??``,image:e.image??``,questionImage:e.questionImage??e.image??``,answerImage:e.answerImage??``}))}))}),Fd=Cl({name:`roundOne`,initialState:Nd(),reducers:{setRoundOneState:(e,t)=>Pd(t.payload),resetRoundOne:()=>Nd(),setRoundOneTimeLimit:(e,t)=>{let n=Number(t.payload);e.timeLimitSeconds=Number.isFinite(n)&&n>0?Math.max(1,Math.floor(n)):10},reorderThemes:(e,t)=>{let n=e.themes.findIndex(e=>e.id===t.payload.activeId),r=e.themes.findIndex(e=>e.id===t.payload.overId);if(n<0||r<0||n===r)return;let[i]=e.themes.splice(n,1);e.themes.splice(r,0,i)},reorderQuestions:(e,t)=>{let n=e.themes.find(e=>e.id===t.payload.themeId);if(!n)return;let r=n.questions.findIndex(e=>e.id===t.payload.activeId),i=n.questions.findIndex(e=>e.id===t.payload.overId);if(r<0||i<0||r===i)return;let[a]=n.questions.splice(r,1);n.questions.splice(i,0,a)},updateThemeField:(e,t)=>{let n=e.themes.find(e=>e.id===t.payload.themeId);n&&(n[t.payload.field]=t.payload.value)},updateQuestionField:(e,t)=>{let n=e.themes.find(e=>e.id===t.payload.themeId);if(!n)return;let r=n.questions.find(e=>e.id===t.payload.questionId);r&&(r[t.payload.field]=t.payload.value)},clearQuestion:(e,t)=>{let n=e.themes.find(e=>e.id===t.payload.themeId);if(!n)return;let r=n.questions.find(e=>e.id===t.payload.questionId);r&&(r.text=``,r.answer=``,r.comment=``,r.image=``,r.questionImage=``,r.answerImage=``)},clearTheme:(e,t)=>{let n=e.themes.find(e=>e.id===t.payload.themeId);n&&(n.title=``,n.description=``,n.author=``,n.questions.forEach(e=>{e.text=``,e.answer=``,e.comment=``,e.image=``,e.questionImage=``,e.answerImage=``}))}}}),{setRoundOneState:Id,resetRoundOne:Ld,setRoundOneTimeLimit:Rd,reorderThemes:zd,reorderQuestions:Bd,updateThemeField:Vd,updateQuestionField:Hd,clearQuestion:Ud,clearTheme:Wd}=Fd.actions,Gd=Fd.reducer,Kd=()=>typeof crypto<`u`&&`randomUUID`in crypto?crypto.randomUUID():`id-${Math.random().toString(36).slice(2,11)}`,qd=()=>({id:Kd(),question:``,answer:``,comment:``,author:``,difficulty:null}),Jd=()=>({packTimeSeconds:240,hunterTimeSeconds:210,pools:[{id:`A`,title:`Пул вопросов A`,questionsCount:15},{id:`B`,title:`Пул вопросов B`,questionsCount:15},{id:`hunter-extra`,title:`Бонусные вопросы для Охотника`,questionsCount:2}].map(({id:e,title:t,questionsCount:n})=>({id:e,title:t,questions:Array.from({length:n},qd)}))}),Yd=`hunter-extra`,Xd=e=>{if(!e.selectedQuestionIds)return e.questions.length===2?e.questions:[];let t=new Set(e.selectedQuestionIds);return e.questions.filter(e=>t.has(e.id))},Zd=e=>{let t=e.id===Yd,n=t?Xd(e):e.questions;return n.length===(t?2:15)&&n.every(e=>e.question.trim()&&e.answer.trim())},Qd=(e,t)=>{let n=e.pools.find(e=>e.id===t),r=e.pools.find(e=>e.id===Yd);if(!n)throw Error(`Round three pool ${t} not found`);if(!r)throw Error(`Hunter extra questions pool not found`);return{...n,questions:[...n.questions.map(e=>({...e})),...Xd(r).map(e=>({...e}))]}},$d=()=>typeof crypto<`u`&&`randomUUID`in crypto?crypto.randomUUID():`id-${Math.random().toString(36).slice(2,11)}`,ef=(e,t)=>Number.isFinite(e)&&Number(e)>0?Math.floor(Number(e)):t,tf=e=>({packTimeSeconds:ef(e.packTimeSeconds,240),hunterTimeSeconds:ef(e.hunterTimeSeconds,210),pools:e.pools.map((e,t)=>({id:e.id??String.fromCharCode(65+t),...e.selectedQuestionIds&&{selectedQuestionIds:e.selectedQuestionIds},title:e.id===`hunter-extra`?`Бонусные вопросы для Охотника`:e.title??`Пул вопросов ${String.fromCharCode(65+t)}`,questions:e.questions.map(e=>({id:e.id??$d(),question:e.question??``,answer:e.answer??``,comment:e.comment??``,author:e.author??``,difficulty:[`easy`,`medium`,`hard`].includes(String(e.difficulty))?e.difficulty:null}))}))}),nf=(e,t)=>{let n=e.findIndex(e=>e.id===t);if(n===-1)return null;let[r]=e.splice(n,1);return r},rf=Cl({name:`roundThree`,initialState:Jd(),reducers:{setRoundThreeState:(e,t)=>tf(t.payload),toggleHunterBonusQuestion:(e,t)=>{let n=e.pools.find(e=>e.id===Yd);if(!n||!n.questions.some(e=>e.id===t.payload))return;let r=Xd(n).map(e=>e.id);r.includes(t.payload)?n.selectedQuestionIds=r.filter(e=>e!==t.payload):r.length<2&&(n.selectedQuestionIds=[...r,t.payload])},resetRoundThree:()=>Jd(),setRoundThreePackTime:(e,t)=>{e.packTimeSeconds=ef(t.payload,240)},setRoundThreeHunterTime:(e,t)=>{e.hunterTimeSeconds=ef(t.payload,210)},updateRoundThreeQuestionField:(e,t)=>{let n=e.pools.find(e=>e.id===t.payload.poolId);if(!n)return;let r=n.questions.find(e=>e.id===t.payload.questionId);r&&(r[t.payload.field]=t.payload.value)},setRoundThreeQuestionDifficulty:(e,t)=>{let n=e.pools.find(e=>e.id===t.payload.poolId);if(!n)return;let r=n.questions.find(e=>e.id===t.payload.questionId);r&&(r.difficulty=r.difficulty===t.payload.difficulty?null:t.payload.difficulty)},reorderRoundThreeQuestion:(e,t)=>{let n=e.pools.find(e=>e.id===t.payload.poolId);if(!n)return;let r=n.questions.findIndex(e=>e.id===t.payload.activeQuestionId),i=n.questions.findIndex(e=>e.id===t.payload.overQuestionId);if(r===-1||i===-1||r===i)return;let[a]=n.questions.splice(r,1);n.questions.splice(i,0,a)},moveRoundThreeQuestionToPool:(e,t)=>{if(t.payload.fromPoolId===t.payload.toPoolId)return;let n=e.pools.find(e=>e.id===t.payload.fromPoolId),r=e.pools.find(e=>e.id===t.payload.toPoolId);if(!n||!r)return;for(let e of[n,r])e.id===`hunter-extra`&&(e.selectedQuestionIds=Xd(e).filter(e=>e.id!==t.payload.questionId).map(e=>e.id));let i=nf(n.questions,t.payload.questionId);i&&r.questions.push(i)},clearRoundThreeQuestion:(e,t)=>{let n=e.pools.find(e=>e.id===t.payload.poolId);if(!n)return;let r=n.questions.find(e=>e.id===t.payload.questionId);r&&(r.question=``,r.answer=``,r.comment=``,r.author=``,r.difficulty=null)},clearRoundThreePool:(e,t)=>{let n=e.pools.find(e=>e.id===t.payload.poolId);n&&(n.id===`hunter-extra`&&(n.selectedQuestionIds=[]),n.questions.forEach(e=>{e.question=``,e.answer=``,e.comment=``,e.author=``,e.difficulty=null}))}}}),{toggleHunterBonusQuestion:af,setRoundThreeState:of,resetRoundThree:sf,setRoundThreePackTime:cf,setRoundThreeHunterTime:lf,updateRoundThreeQuestionField:uf,setRoundThreeQuestionDifficulty:df,reorderRoundThreeQuestion:ff,moveRoundThreeQuestionToPool:pf,clearRoundThreeQuestion:mf,clearRoundThreePool:hf}=rf.actions,gf=rf.reducer,_f=()=>typeof crypto<`u`&&`randomUUID`in crypto?crypto.randomUUID():`id-${Math.random().toString(36).slice(2,11)}`,vf=()=>({questionId:_f(),question:``,author:``,comment:``,image:``,options:[``,``,``],correctOption:null}),yf=e=>({timeLimitSeconds:10,blocks:Array.from({length:e},()=>({questions:Array.from({length:6},vf)}))}),bf=(e,t,n)=>{let r=e.blocks[t];return!r||!n?null:r.questions.find(e=>e.questionId===n)??null},xf=e=>({...e,timeLimitSeconds:Number.isFinite(e.timeLimitSeconds)&&e.timeLimitSeconds>0?Math.floor(e.timeLimitSeconds):10,blocks:e.blocks.map(e=>({...e,questions:e.questions.map(e=>({...e,author:e.author??``,comment:e.comment??``,image:e.image??``}))}))}),Sf=Cl({name:`roundTwo`,initialState:yf(3),reducers:{setRoundTwoState:(e,t)=>xf(t.payload),resetRoundTwoWithBlocks:(e,t)=>yf(t.payload),setRoundTwoTimeLimit:(e,t)=>{e.timeLimitSeconds=Number.isFinite(t.payload)&&t.payload>0?Math.floor(t.payload):10},updateRoundTwoQuestionField:(e,t)=>{let n=bf(e,t.payload.blockIndex,t.payload.questionId);n&&(n[t.payload.field]=t.payload.value)},updateRoundTwoOptionField:(e,t)=>{let n=bf(e,t.payload.blockIndex,t.payload.questionId);n&&(n.options[t.payload.optionIndex]=t.payload.value)},setRoundTwoCorrectOption:(e,t)=>{let n=bf(e,t.payload.blockIndex,t.payload.questionId);n&&(n.correctOption=t.payload.correctOption)},reorderRoundTwoQuestions:(e,t)=>{let n=e.blocks[t.payload.blockIndex].questions,r=n.findIndex(e=>e.questionId===t.payload.activeId),i=n.findIndex(e=>e.questionId===t.payload.overId);if(r===-1||i===-1||r===i)return;let[a]=n.splice(r,1);n.splice(i,0,a)},moveRoundTwoQuestionToBlock:(e,t)=>{let n=e.blocks[t.payload.fromBlockIndex],r=e.blocks[t.payload.toBlockIndex],i=n.questions.findIndex(e=>e.questionId===t.payload.questionId);if(i===-1)return;let[a]=n.questions.splice(i,1);r.questions.push(a)}}}),{setRoundTwoState:Cf,resetRoundTwoWithBlocks:wf,setRoundTwoTimeLimit:Tf,updateRoundTwoQuestionField:Ef,updateRoundTwoOptionField:Df,setRoundTwoCorrectOption:Of,reorderRoundTwoQuestions:kf,moveRoundTwoQuestionToBlock:Af}=Sf.actions,jf=Sf.reducer,Mf=Cl({name:`theme`,initialState:{mode:`dark`},reducers:{toggleTheme:e=>{e.mode=e.mode===`dark`?`light`:`dark`}}}),{toggleTheme:Nf}=Mf.actions,Pf=Mf.reducer,Ff=`kinoohota-active-game`,If=7200*1e3,Lf=()=>{try{return window.localStorage.getItem(Ff)}catch{return null}},Rf=e=>{try{window.localStorage.setItem(Ff,e)}catch{}},zf=()=>{try{window.localStorage.removeItem(Ff)}catch{}},Bf=`/game/round/3/presenter`,Vf=()=>`${window.location.pathname}${window.location.search}${window.location.hash}`,Hf=()=>window.location.pathname===Bf,Uf=e=>Date.now()-e.updatedAt<=If,Wf=()=>{try{let e=Lf();if(!e)return null;let t=JSON.parse(e);return t.version!==1||!t.route?.startsWith(`/game/`)||!Uf(t)?(zf(),null):t}catch{return zf(),null}},Gf=e=>{if(!window.location.pathname.startsWith(`/game/`)||Hf())return;let t=Wf(),n={version:1,updatedAt:Date.now(),route:Vf(),ui:t?.ui,state:{players:e.players,gameRoundOne:e.gameRoundOne,gameRoundTwo:e.gameRoundTwo,gameRoundThree:e.gameRoundThree,gameScores:e.gameScores,gameTieBreak:e.gameTieBreak,bonusSelection:e.bonusSelection}};Rf(JSON.stringify(n)),window.dispatchEvent(new Event(`game-snapshot-changed`))},Kf=()=>{if(!window.location.pathname.startsWith(`/game/`)||Hf())return;let e=Wf();e&&(Rf(JSON.stringify({...e,route:Vf(),updatedAt:Date.now()})),window.dispatchEvent(new Event(`game-snapshot-changed`)))},qf=()=>{let e=window.history.pushState.bind(window.history),t=window.history.replaceState.bind(window.history);window.history.pushState=(...t)=>{e(...t),queueMicrotask(()=>{Kf(),window.dispatchEvent(new Event(`game-route-changed`))})},window.history.replaceState=(...e)=>{t(...e),queueMicrotask(()=>{Kf(),window.dispatchEvent(new Event(`game-route-changed`))})},window.addEventListener(`popstate`,Kf),window.addEventListener(`beforeunload`,Kf),window.addEventListener(`popstate`,()=>window.dispatchEvent(new Event(`game-route-changed`)))},Jf=e=>Wf()?.ui?.[e]??null,Yf=(e,t)=>{let n=Wf();!n||!window.location.pathname.startsWith(`/game/`)||Hf()||Rf(JSON.stringify({...n,updatedAt:Date.now(),route:Vf(),ui:{...n.ui??{},[e]:t}}))},Xf=()=>{zf(),window.dispatchEvent(new Event(`game-snapshot-changed`))},Zf=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&apos;`),Qf=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>`,$f=(e,t=!1,n=`000000`,r=22,i)=>{let a=e.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g,``);return`<w:r><w:rPr>${t?`<w:b/>`:``}<w:color w:val="${n}"/><w:sz w:val="${r}"/>${i?`<w:highlight w:val="${i}"/>`:``}</w:rPr>${a.split(/\r\n|\r|\n/).map(e=>`<w:t xml:space="preserve">${Zf(e)}</w:t>`).join(`<w:br/>`)}</w:r>`},ep=(e,t=!1,n=0,r=!1)=>`<w:p><w:pPr>${t?`<w:keepNext/>`:``}${r?`<w:pageBreakBefore/>`:``}<w:spacing w:before="${n}" w:after="100" w:line="240" w:lineRule="auto"/></w:pPr>${e}</w:p>`,tp=(e,t=!1)=>ep($f(e,!0,`000000`,32),!0,180,t),np=e=>e?.trim()?` (автор: ${e.trim()})`:``,rp={easy:`green`,medium:`yellow`,hard:`red`},ip=t=>{let n=[],r=(e,t,r)=>{let i=r?rp[r]:void 0;n.push(ep($f(`${e+1}-й вопрос${np(t)}`,!0,`000000`,22,i),!0,180))},i=(e,t)=>{n.push(ep($f(`Ответ: ${e}`,!0),!!t?.trim())),t?.trim()&&n.push(ep($f(`Комментарий: ${t}`)))};n.push(tp(`КиноОхота${t.scenarioNumber?` №${t.scenarioNumber}`:``}`)),n.push(tp(`Первый раунд`)),t.roundOne.themes.forEach((e,t)=>{n.push(tp(`Тема №${t+1}: ${e.title}${np(e.author)}`)),e.description.trim()&&n.push(ep($f(e.description),!0)),e.questions.forEach((e,t)=>{r(t),e.text.trim()&&n.push(ep($f(e.text),!0)),i(e.answer,e.comment)})}),n.push(tp(`Второй раунд. С вариантами ответа`,!0)),t.roundTwo.blocks.forEach((e,t)=>{n.push(tp(`Игрок №${t+1}`)),e.questions.forEach((e,t)=>{r(t,e.author),n.push(ep($f(e.question),!0)),e.options.forEach((t,r)=>{let i=e.correctOption===r;n.push(ep($f(`${[`А`,`Б`,`В`][r]}) ${t}${i?`*`:``}`,i),r<e.options.length-1||!!e.comment?.trim()))}),e.comment?.trim()&&n.push(ep($f(`Комментарий: ${e.comment}`)))})}),n.push(tp(`Третий раунд`,!0));let a=t.roundThree.pools.find(e=>e.id===`hunter-extra`);if(t.roundThree.pools.filter(e=>e.id!==`hunter-extra`).forEach((e,t)=>{n.push(tp(`Сценарий №${t+1} — ${e.title}`)),e.questions.forEach((e,t)=>{r(t,e.author,e.difficulty),n.push(ep($f(e.question),!0)),i(e.answer,e.comment)})}),a){let e=new Set(Xd(a).map(e=>e.id)),t=a.questions.flatMap((t,n)=>e.has(t.id)?[n+1]:[]);n.push(tp(`Бонусные вопросы для Охотника (для игры: ${t.join(`, `)||`—`})`)),a.questions.forEach((e,t)=>{r(15+t,e.author,e.difficulty),n.push(ep($f(e.question),!0)),i(e.answer,e.comment)})}n.push(tp(`Дополнительные вопросы на близость`,!0)),t.extraQuestions.items.forEach((e,t)=>{r(t,e.author),n.push(ep($f(e.question),!0)),i(e.answer)});let o=`${Qf}<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${n.join(``)}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="737" w:bottom="1134" w:left="1304" w:header="708" w:footer="708" w:gutter="0"/></w:sectPr></w:body></w:document>`,s=e([{name:`[Content_Types].xml`,content:`${Qf}<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>`},{name:`_rels/.rels`,content:`${Qf}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`},{name:`word/document.xml`,content:o},{name:`word/_rels/document.xml.rels`,content:`${Qf}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`},{name:`word/styles.xml`,content:`${Qf}<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/><w:sz w:val="22"/><w:lang w:val="ru-RU"/></w:rPr></w:rPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style></w:styles>`}]),c=new Uint8Array(s.reduce((e,t)=>e+t.length,0)),l=0;for(let e of s)c.set(e,l),l+=e.length;return c},ap=e=>{let t=new Blob([ip(e)],{type:`application/vnd.openxmlformats-officedocument.wordprocessingml.document`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n;let i=e.scenarioNumber?.replace(/[^0-9]/g,``);r.download=`kino-ohota${i?`-${i}`:``}-scenario-${new Date().toISOString().slice(0,10)}.docx`,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)},op=`application/x-kinohota`,sp=`KNH3`,cp=`KNH2`,lp=`KNH1`,up=8,dp=1,fp=async e=>{let t=new Blob([e]).stream().pipeThrough(new CompressionStream(`gzip`));return new Uint8Array(await new Response(t).arrayBuffer())},pp=async e=>{let t=new Blob([e]).stream().pipeThrough(new DecompressionStream(`gzip`));return new Uint8Array(await new Response(t).arrayBuffer())},mp=e=>({app:`kino-ohota`,version:2,playersCount:e.players.isFourthActive?4:3,scenarioNumber:e.players.scenarioNumber,bonuses:e.bonusSelection.selected,roundOne:e.roundOne,roundTwo:e.roundTwo,roundThree:e.roundThree,extraQuestions:e.extraQuestions}),hp=e=>e.trim().replace(/[^\p{L}\p{N}._-]+/gu,`-`).replace(/^-+|-+$/g,``),gp=/^data:([^;,]+)?(?:;charset=[^;,]+)?;base64,(.+)$/,_p=e=>{let t=e.toLowerCase();return t===`image/jpeg`?`jpg`:t===`image/png`?`png`:t===`image/webp`?`webp`:t===`image/gif`?`gif`:t===`image/svg+xml`?`svg`:`bin`},vp=e=>{let t=structuredClone(e),n={},r=0,i=e=>{let t=gp.exec(e);if(!t)return e;let i=t[1]||`application/octet-stream`,a=`assets/image-${String(++r).padStart(3,`0`)}.${_p(i)}`;return n[a]=e,`knh://${a}`};return t.roundOne.themes.forEach(e=>e.questions.forEach(e=>{e.image=i(e.image),e.questionImage=i(e.questionImage),e.answerImage=i(e.answerImage)})),t.roundTwo.blocks.forEach(e=>e.questions.forEach(e=>{e.image&&=i(e.image)})),{scenario:t,assets:n}},yp=(e,t)=>{let n=structuredClone(e),r=e=>e.startsWith(`knh://`)?t[e.slice(6)]??e:e;return n.roundOne.themes.forEach(e=>e.questions.forEach(e=>{e.image=r(e.image),e.questionImage=r(e.questionImage),e.answerImage=r(e.answerImage)})),n.roundTwo.blocks.forEach(e=>e.questions.forEach(e=>{e.image&&=r(e.image)})),n},bp=async e=>{let t=vp(e),n={format:`kino-ohota`,archiveVersion:dp,scenarioVersion:e.version,createdAt:new Date().toISOString(),scenario:t.scenario,assets:t.assets},r=await fp(new TextEncoder().encode(JSON.stringify(n))),i=new Uint8Array(up+r.byteLength);return i.set(new TextEncoder().encode(sp),0),new DataView(i.buffer).setUint32(4,r.byteLength,!0),i.set(r,up),new Blob([i],{type:op})},xp=async e=>{let t=await bp(e),n=URL.createObjectURL(t),r=document.createElement(`a`),i=e.scenarioNumber?`-${hp(e.scenarioNumber)}`:``;r.href=n,r.download=`kino-ohota${i}.knh`,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)},Sp=e=>typeof e==`string`,Cp=e=>{if(!e||typeof e!=`object`)return!1;let t=e;if(t.app!==`kino-ohota`||t.version!==2||t.playersCount!==3&&t.playersCount!==4||t.scenarioNumber!==void 0&&(!Sp(t.scenarioNumber)||!/^\d{0,4}$/.test(t.scenarioNumber)))return!1;let n=t.roundOne,r=t.roundTwo,i=t.roundThree,a=t.extraQuestions;if(!n||!Array.isArray(n.themes)||n.themes.length!==5||!r||!Array.isArray(r.blocks)||r.blocks.length!==3||!i||!Array.isArray(i.pools)||i.pools.length!==3||!a||!Array.isArray(a.items)||a.items.length<1)return!1;let o=n.themes.every(e=>{let t=e;return Sp(t.title)&&Sp(t.description)&&Array.isArray(t.questions)&&t.questions.length===5&&t.questions.every(e=>{let t=e;return Sp(t.text)&&Sp(t.answer)&&Sp(t.image)&&Sp(t.questionImage)&&Sp(t.answerImage)})}),s=r.blocks.every(e=>{let t=e;return Array.isArray(t.questions)&&t.questions.length===6&&t.questions.every(e=>{let t=e;return Sp(t.question)&&Array.isArray(t.options)&&t.options.length===3&&t.options.every(Sp)&&[0,1,2,null].includes(t.correctOption??null)})}),c=[{id:`A`,questionsCount:15},{id:`B`,questionsCount:15},{id:`hunter-extra`,questionsCount:2}],l=i.pools.every((e,t)=>{let n=e,r=c[t];return n.id===r.id&&Sp(n.title)&&Array.isArray(n.questions)&&(n.id===`hunter-extra`||n.questions.length===r.questionsCount)&&(n.selectedQuestionIds===void 0||Array.isArray(n.selectedQuestionIds)&&n.selectedQuestionIds.length<=2&&n.selectedQuestionIds.every(Sp))&&n.questions.every(e=>{let t=e;return Sp(t.question)&&Sp(t.answer)})}),u=a.items.every(e=>{let t=e;return Sp(t.id)&&Sp(t.question)&&Sp(t.answer)});return o&&s&&l&&u},wp=async e=>{let t=await e.arrayBuffer();if(t.byteLength<up)throw Error(`invalid_scenario`);let n=new Uint8Array(t),r=new TextDecoder().decode(n.slice(0,4));if(r!==sp&&r!==cp&&r!==lp||new DataView(t).getUint32(4,!0)!==t.byteLength-up)throw Error(`invalid_scenario`);let i=n.slice(up),a=r===sp||r===cp?await pp(i):i,o=JSON.parse(new TextDecoder().decode(a));if(r!==sp)return o;if(!o||typeof o!=`object`)throw Error(`invalid_scenario`);let s=o;if(s.format!==`kino-ohota`||s.archiveVersion!==dp||!s.scenario||!s.assets||typeof s.assets!=`object`)throw Error(`invalid_scenario`);return yp(s.scenario,s.assets)},Tp=e=>(!e||typeof e!=`object`||e.roundTwo?.blocks?.forEach(e=>{e.questions?.forEach(e=>{let t=e.correctOption;if(typeof t!=`string`)return;let n=[`A`,`B`,`C`].indexOf(t.trim().toUpperCase()),r=[`А`,`Б`,`В`].indexOf(t.trim().toUpperCase()),i=n>=0?n:r;i>=0&&(e.correctOption=i)})}),e),Ep=async e=>{let t=Tp(e.name.toLowerCase().endsWith(`.knh`)?await wp(e):JSON.parse(await e.text()));if(!Cp(t))throw Error(`invalid_scenario`);return t},Dp=()=>(0,q.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,q.jsx)(`path`,{d:`M5 4h12l2 2v14H5z`}),(0,q.jsx)(`path`,{d:`M8 4v6h8V4`}),(0,q.jsx)(`path`,{d:`M8 20v-6h8v6`})]}),Op=()=>(0,q.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,q.jsx)(`path`,{d:`M4 7h16`}),(0,q.jsx)(`path`,{d:`M9 7V4h6v3`}),(0,q.jsx)(`path`,{d:`M7 7l1 13h8l1-13`}),(0,q.jsx)(`path`,{d:`M10 11v5M14 11v5`})]}),kp=()=>(0,q.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,q.jsx)(`circle`,{cx:`12`,cy:`8`,r:`3.5`}),(0,q.jsx)(`path`,{d:`M5.5 20c.5-4 2.7-6 6.5-6s6 2 6.5 6`})]}),Ap=()=>(0,q.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,q.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`}),(0,q.jsx)(`path`,{d:`M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.1A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.18.36.48.66.84.84.34.17.72.26 1.1.26h.1v4h-.1c-.38 0-.76.09-1.1.26-.36.18-.66.48-.84.84Z`})]}),jp=()=>(0,q.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,q.jsx)(`rect`,{x:`3`,y:`4`,width:`18`,height:`13`,rx:`2`}),(0,q.jsx)(`path`,{d:`M8 21h8M12 17v4`})]}),Mp=({active:e})=>e?(0,q.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,q.jsx)(`path`,{d:`M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6`})}):(0,q.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,q.jsx)(`path`,{d:`M9 3H3v6M15 3h6v6M9 21H3v-6M15 21h6v-6`})}),Np=new Set([`/scenario`,`/scenario/bonuses`,`/round/1`,`/round/2`,`/round/3`,`/extra-questions`]),Pp=(e,t,n,r)=>{let i=e%100,a=e%10;return i>=11&&i<=14?r:a===1?t:a>=2&&a<=4?n:r},Fp=e=>Pp(e,`тема`,`темы`,`тем`),Ip=e=>Pp(e,`вопрос`,`вопроса`,`вопросов`),Lp=()=>{let{logout:e}=jo(),t=wt(),n=xt(),r=Lo(),i=Ro(),a=J(e=>e.gameRoundOne),o=J(e=>e.gameRoundTwo),s=J(e=>e.gameRoundThree),c=J(e=>e.roundOne),l=J(e=>e.roundTwo),u=J(e=>e.roundThree),d=J(e=>e.extraQuestions),f=J(e=>e.players.isFourthActive),p=J(e=>e.players.scenarioNumber),m=J(e=>e.theme.mode),[h,g]=(0,x.useState)(!1),[_,v]=(0,x.useState)(!1),[y,b]=(0,x.useState)(!1),[S,C]=(0,x.useState)(()=>Wf()!==null),[w,T]=(0,x.useState)(!1),[E,D]=(0,x.useState)(()=>document.fullscreenElement!==null),O=m===`dark`,k=n.pathname.startsWith(`/game/`),A=[`/game/round/3/start`,`/game/round/3/scenario`,`/game/round/3/play`].includes(n.pathname),ee=Np.has(n.pathname);(0,x.useEffect)(()=>{let e=()=>D(document.fullscreenElement!==null);return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]),(0,x.useEffect)(()=>{let e=()=>C(Wf()!==null);return window.addEventListener(`game-snapshot-changed`,e),window.addEventListener(`storage`,e),()=>{window.removeEventListener(`game-snapshot-changed`,e),window.removeEventListener(`storage`,e)}},[]);let j=(0,x.useMemo)(()=>{let e=n.pathname;return e===`/`?``:e===`/scenario`?`Настройка сценария`:e===`/scenario/bonuses`?`Выбор бонусов`:e===`/extra-questions`?`Дополнительные вопросы`:e===`/round/1`?`Настройка · Первый раунд`:e===`/round/2`?`Настройка · Второй раунд`:e===`/round/3`?`Настройка · Третий раунд`:e===`/game/round/1`?`Первый раунд · Выбор тем`:e===`/game/round/1/cut`?`Первый раунд · Подрезать соперника`:e===`/game/round/1/play`?`Первый раунд · ${c.themes[a.currentThemeIndex]?.title||`Тема ${a.currentThemeIndex+1}`} · Вопрос ${a.currentQuestionIndex+1}`:e===`/game/round/2`?`Второй раунд · ${!f&&o.currentDuelIndex===2?`Бонусная дуэль`:`Дуэль ${o.currentDuelIndex+1}`} · Вопрос ${o.currentQuestionIndex+1}`:e===`/game/round/3/start`?`Третий раунд · Кто начинает`:e===`/game/round/3/scenario`?`Третий раунд · Выбор сценария`:e===`/game/round/3/play`?`Третий раунд · ${s.activeSide===`pack`?`Стая`:`Охотник`} · Вопрос ${s.currentQuestionIndex+1}`:e.startsWith(`/game/`)?`КиноОхота · Игра`:``},[n.pathname,f,c.themes,a.currentThemeIndex,a.currentQuestionIndex,o.currentDuelIndex,o.currentQuestionIndex,s.activeSide,s.currentQuestionIndex]),M=(0,x.useMemo)(()=>{let e=new Map,t=t=>{let n=t.trim();return n?(e.has(n)||e.set(n,{name:n,roundOne:0,roundTwo:0,roundThree:0,extra:0}),e.get(n)):null};return c.themes.forEach(e=>{let n=t(e.author);n&&(n.roundOne+=1)}),l.blocks.forEach(e=>e.questions.forEach(e=>{let n=t(e.author??``);n&&(n.roundTwo+=1)})),u.pools.forEach(e=>e.questions.forEach(e=>{let n=t(e.author??``);n&&(n.roundThree+=1)})),d.items.forEach(e=>{let n=t(e.author);n&&(n.extra+=1)}),[...e.values()].sort((e,t)=>e.name.localeCompare(t.name,`ru`))},[c.themes,l.blocks,u.pools,d.items]),N=(p??``).trim()!==``||c.themes.some(e=>e.title.trim()!==``||e.description.trim()!==``||e.questions.some(e=>e.text.trim()!==``||e.answer.trim()!==``||e.questionImage.trim()!==``||e.answerImage.trim()!==``))||l.blocks.some(e=>e.questions.some(e=>e.question.trim()!==``||e.options.some(e=>e.trim()!==``)||e.correctOption!==null))||u.pools.some(e=>e.questions.some(e=>e.question.trim()!==``||e.answer.trim()!==``||e.difficulty!==null))||d.items.some(e=>e.question.trim()!==``||e.answer.trim()!==``);return(0,q.jsxs)(zo,{children:[(0,q.jsxs)(Bo,{children:[(0,q.jsxs)(Vo,{children:[(0,q.jsx)(Wo,{type:`button`,onClick:()=>t(`/`),children:`КиноОхота`}),!k&&(0,q.jsxs)(Go,{children:[!ee&&(0,q.jsx)(Ko,{type:`button`,onClick:()=>t(`/scenario`),children:`Настроить сценарий`}),S&&(0,q.jsx)(qo,{type:`button`,onClick:()=>T(!0),children:`Удалить сохранённую игру`}),!1]})]}),j&&(0,q.jsx)(Uo,{$game:k,children:j}),(0,q.jsxs)(Ho,{children:[ee&&(0,q.jsxs)(xs,{children:[(0,q.jsxs)(Yo,{type:`button`,onClick:()=>b(!0),children:[(0,q.jsx)(kp,{}),`Авторы`]}),(0,q.jsx)(Jo,{type:`button`,onClick:()=>ap(mp(i.getState())),title:`Скачать вопросы в формате Word`,children:`Скачать .docx`}),(0,q.jsx)(Jo,{type:`button`,onClick:async()=>{let e=mp(i.getState());try{let{downloadRoundOnePresentation:t}=await se(async()=>{let{downloadRoundOnePresentation:e}=await import(`./export-CsPotGo8.js`);return{downloadRoundOnePresentation:e}},__vite__mapDeps([0,1]));await t(e)}catch{window.alert(`Не удалось скачать презентацию. Проверьте доступность картинок и попробуйте ещё раз.`)}},title:`Скачать презентацию первого раунда`,children:`Скачать .pptx`}),(0,q.jsxs)(Jo,{type:`button`,onClick:()=>xp(mp(i.getState())),children:[(0,q.jsx)(Dp,{}),`Сохранить сценарий`]}),(0,q.jsxs)(Jo,{type:`button`,onClick:()=>g(!0),disabled:!N,children:[(0,q.jsx)(Op,{}),`Удалить сценарий`]})]},n.pathname),A&&(0,q.jsxs)(Jo,{type:`button`,onClick:Ou,"aria-label":`Открыть бродкаст`,title:`Открыть окно бродкаста`,children:[(0,q.jsx)(jp,{}),`Бродкаст`]}),k&&(0,q.jsx)(Jo,{type:`button`,onClick:()=>v(!0),"aria-label":`Переход между раундами`,children:(0,q.jsx)(Ap,{})}),(0,q.jsx)(Xo,{type:`button`,onClick:async()=>{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()},"aria-label":E?`Выйти из полноэкранного режима`:`Полноэкранный режим`,title:E?`Выйти из полноэкранного режима`:`Полноэкранный режим`,children:(0,q.jsx)(Mp,{active:E})}),(0,q.jsxs)(Zo,{type:`button`,$dark:O,onClick:()=>r(Nf()),children:[(0,q.jsx)($o,{$dark:O}),(0,q.jsx)(Qo,{children:`☀️`}),(0,q.jsx)(Qo,{children:`🌙`})]}),(0,q.jsx)(Ko,{type:`button`,onClick:()=>void e(),children:`Выйти`})]})]}),(0,q.jsx)(es,{children:(0,q.jsx)(Zt,{})}),(0,q.jsx)(ad,{open:_,onClose:()=>v(!1)}),y&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(ss,{onClick:()=>b(!1)}),(0,q.jsxs)(cs,{children:[(0,q.jsxs)(ls,{children:[(0,q.jsx)(us,{children:`Авторы сценария`}),(0,q.jsx)(ds,{type:`button`,onClick:()=>b(!1),children:`×`})]}),M.length?(0,q.jsx)(fs,{children:M.map(e=>(0,q.jsxs)(ps,{$borderColor:cd[e.name],children:[(0,q.jsx)(ms,{children:e.name}),(0,q.jsxs)(hs,{children:[e.roundOne>0&&(0,q.jsxs)(gs,{children:[`1-й раунд: `,e.roundOne,` `,Fp(e.roundOne)]}),e.roundTwo>0&&(0,q.jsxs)(gs,{children:[`2-й раунд: `,e.roundTwo,` `,Ip(e.roundTwo)]}),e.roundThree>0&&(0,q.jsxs)(gs,{children:[`3-й раунд: `,e.roundThree,` `,Ip(e.roundThree)]}),e.extra>0&&(0,q.jsxs)(gs,{children:[`Доп. вопросы: `,e.extra,` `,Ip(e.extra)]})]})]},e.name))}):(0,q.jsx)(_s,{children:`В сценарии пока не указаны авторы.`})]})]}),h&&(0,q.jsx)(ts,{onMouseDown:()=>g(!1),children:(0,q.jsxs)(ns,{onMouseDown:e=>e.stopPropagation(),children:[(0,q.jsx)(rs,{children:`Вы уверены, что хотите удалить сценарий?`}),(0,q.jsxs)(is,{children:[(0,q.jsx)(as,{onClick:()=>g(!1),children:`Отменить`}),(0,q.jsx)(os,{onClick:()=>{r(wd(``)),r(Ld()),r(wf(3)),r(sf()),r(_d()),r(Bl()),r(Kl()),g(!1)},children:`Удалить`})]})]})}),w&&(0,q.jsx)(ts,{onMouseDown:()=>T(!1),children:(0,q.jsxs)(ns,{onMouseDown:e=>e.stopPropagation(),children:[(0,q.jsx)(rs,{children:`Уверены, что хотите удалить незавершённую игру?`}),(0,q.jsxs)(is,{children:[(0,q.jsx)(as,{onClick:()=>T(!1),children:`Отменить`}),(0,q.jsx)(os,{onClick:()=>{Xf(),C(!1),T(!1),window.dispatchEvent(new Event(`game-snapshot-changed`))},children:`Удалить`})]})]})})]})},Rp=fo`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100%;
    margin: 0;
  }

  body {
    background: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
    font-family:
      Inter,
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      sans-serif;
  }

  button,
  input {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button[aria-haspopup='listbox'] + span + [role='listbox'] {
    max-height: 280px;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: thin;
  }
`,zp={colors:{background:`#f5f7fb`,surface:`#ffffff`,surfaceAlt:`#f0f3f9`,text:`#101828`,mutedText:`#667085`,border:`#d8dee9`,accent:`#3b82f6`,accentSoft:`rgba(59, 130, 246, 0.16)`,success:`#22c55e`,successSoft:`rgba(34, 197, 94, 0.12)`,progressEmpty:`#d4dbe6`}},Bp={colors:{background:`#0b1020`,surface:`#141b2d`,surfaceAlt:`#10182a`,text:`#f8fafc`,mutedText:`#9aa6bf`,border:`#27324b`,accent:`#60a5fa`,accentSoft:`rgba(96, 165, 250, 0.18)`,success:`#22c55e`,successSoft:`rgba(34, 197, 94, 0.16)`,progressEmpty:`#334155`}},Vp=e=>({colors:{...e.colors,backgroundElevated:e.colors.surface,backgroundSoft:e.colors.surfaceAlt,backgroundSubtle:e.colors.surfaceAlt,card:e.colors.surface,cardHover:e.colors.surfaceAlt,cardSecondary:e.colors.surfaceAlt,panelSecondary:e.colors.surfaceAlt,surfaceSecondary:e.colors.surfaceAlt,surfaceSoft:e.colors.surfaceAlt,inputBackground:e.colors.surface,inputBg:e.colors.surface,textMuted:e.colors.mutedText,textSecondary:e.colors.mutedText,primary:e.colors.accent,primaryHover:e.colors.accent,accentText:`#ffffff`,danger:`#ef4444`,dangerHover:`#dc2626`,successBackground:e.colors.successSoft,disabled:e.colors.surfaceAlt,disabledText:e.colors.mutedText,shadow:`rgba(0, 0, 0, 0.18)`},radii:{sm:`6px`,md:`10px`,lg:`16px`,xl:`24px`},spacing:{xs:`4px`,sm:`8px`,md:`16px`,lg:`24px`,xl:`32px`}}),Hp=Vp(zp),Up=Vp(Bp),Wp=K.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 12px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 10px;
  background: ${({theme:e})=>e.colors.surfaceAlt};
  color: ${({theme:e})=>e.colors.text};
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  &:hover { background: ${({theme:e})=>e.colors.accentSoft}; }
`,Gp=()=>{let e=wt();return(0,q.jsx)(Wp,{type:`button`,onClick:()=>e(-1),"aria-label":`Вернуться на предыдущий экран`,children:`← Назад`})},Kp={selected:[`ban-x2`,`plus-2-points`,`plus-2-questions`]},qp=Cl({name:`bonusSelection`,initialState:Kp,reducers:{toggleBonus:(e,t)=>{let n=t.payload;if(e.selected.includes(n)){e.selected=e.selected.filter(e=>e!==n);return}e.selected.length<3&&e.selected.push(n)},setBonuses:(e,t)=>{e.selected=t.payload},resetBonuses:()=>Kp}}),{toggleBonus:Jp,setBonuses:Yp,resetBonuses:Xp}=qp.actions,Zp=qp.reducer;K.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`;var Qp=K.h2`
  margin: 0 0 40px;
  font-size: 28px;
`;K.button`
  min-height: 40px;
  padding: 0 14px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.text};
  font-weight: 600;
  cursor: pointer;
`;var $p=K.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 280px));
  justify-content: start;
  gap: 16px;
`,em=K.div`
  display: flex;
  min-height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 18px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01)),
    ${({theme:e})=>e.colors.surface};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  ${({$selected:e})=>e&&G`
      border-color: rgba(74, 222, 128, 0.65);
      background:
        linear-gradient(180deg, rgba(34, 197, 94, 0.18), rgba(34, 197, 94, 0.07)),
        rgba(20, 83, 45, 0.2);
      box-shadow: 0 12px 34px rgba(22, 101, 52, 0.2);
    `}
`,tm=K.div`
  display: grid;
  width: 60px;
  height: 60px;
  place-items: center;
  border-radius: 18px;
  background: ${({theme:e})=>e.colors.accentSoft};
  font-size: 30px;
`,nm=K.h3`
  margin: 0;
  text-align: center;
  font-size: 20px;
`,rm=K.button`
  min-width: 128px;
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid ${({theme:e,$selected:t})=>t?`rgba(74, 222, 128, 0.75)`:e.colors.border};
  border-radius: 12px;
  background: ${({theme:e,$selected:t})=>t?`rgba(34, 197, 94, 0.2)`:e.colors.surfaceAlt};
  color: ${({theme:e})=>e.colors.text};
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,im=()=>{let e=Lo(),t=J(e=>e.bonusSelection.selected);return(0,q.jsxs)(`div`,{children:[(0,q.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:14},children:[(0,q.jsx)(Gp,{}),(0,q.jsx)(Qp,{children:`Выбор бонусов`})]}),(0,q.jsx)($p,{children:Ss.map(n=>{let r=t.includes(n.id),i=t.length>=3&&!r;return(0,q.jsxs)(em,{$selected:r,children:[(0,q.jsx)(tm,{"aria-hidden":`true`,children:n.icon}),(0,q.jsx)(nm,{children:n.title}),(0,q.jsx)(rm,{type:`button`,$selected:r,disabled:i,onClick:()=>e(Jp(n.id)),children:r?`Выбрано`:`Выбрать`})]},n.id)})})]})},am=K.label`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.colors.mutedText};
  font-size: 13px;
  font-weight: 600;
`,om=K.span`
  color: #ef4444;
`,sm=({children:e,required:t=!1})=>(0,q.jsxs)(am,{children:[e,t&&(0,q.jsx)(om,{children:`*`})]}),cm=K.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-bottom: 20px;
`,lm=K.h2`
  margin: 0;
  font-size: 28px;
`,um=K.button`
  min-width: 140px;
  padding: 10px 14px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.text};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`,dm=K.div`
  display: grid;
  gap: 14px;
`,fm=K.div`
  width: fit-content;
  max-width: 100%;
  padding: 10px 18px;
  box-sizing: border-box;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 20px;
  background: transparent;
  box-shadow: none;
`,pm=K.div`
  display: grid;
  grid-template-columns: minmax(420px, 50vw) 180px 240px auto;
  gap: 14px;
  align-items: end;

  @media (max-width: 1200px) {
    grid-template-columns: minmax(360px, 1fr) 170px 220px auto;
  }
`,mm=K.div`
  min-width: 0;
`,hm=K.div`
  min-width: 0;
`,gm=K.div`
  min-width: 0;
`,_m=K.input`
  width: 100%;
  min-height: 44px;
  box-sizing: border-box;
  padding: 12px 14px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
`,vm=K.div`
  position: relative;
  width: 240px;
`,ym=K.button`
  width: 240px;
  height: 44px;
  padding: 0 44px 0 14px;
  box-sizing: border-box;
  border: 1px solid ${({theme:e,$color:t})=>t??e.colors.border};
  border-radius: 12px;
  background: ${({$color:e})=>e?`${e}16`:`rgba(255,255,255,0.04)`};
  color: ${({theme:e,$color:t})=>t??e.colors.text};
  text-align: left;
  font-weight: ${({$color:e})=>e?700:500};
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({$color:e})=>e?`${e}22`:`rgba(255,255,255,0.07)`};
  }
`,bm=K.span`
  position: absolute;
  right: 16px;
  top: 50%;
  width: 8px;
  height: 8px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  pointer-events: none;
  transform: translateY(-65%) rotate(${({$open:e})=>e?`225deg`:`45deg`});
  transition: transform 0.2s ease;
`,xm=K.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 20;
  width: max-content;
  min-width: 280px;
  max-height: none;
  overflow: visible;
  padding: 6px;
  box-sizing: border-box;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 14px;
  background: ${({theme:e})=>e.colors.surface};
  box-shadow: 0 14px 34px rgba(0,0,0,0.3);
  display: grid;
  gap: 4px;
`,Sm=K.button`
  width: 100%;
  min-height: 38px;
  padding: 0 12px;
  border: 0;
  border-radius: 10px;
  background: ${({$color:e,$active:t})=>t&&e?`${e}18`:`transparent`};
  color: ${({theme:e})=>e.colors.text};
  text-align: left;
  font-weight: ${({$active:e})=>e?700:500};
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 10px;
    border-radius: 50%;
    background: ${({$color:e})=>e??`transparent`};
  }

  &:hover {
    background: rgba(255,255,255,0.06);
  }
`,Cm=K.button`
  flex-shrink: 0;
  width: 52px;
  min-height: 44px;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
  font-weight: 600;
`,wm=K.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  min-height: 44px;
  padding: 0 16px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.text};
  font-weight: 700;
  cursor: pointer;
`,Tm=K.span`
  font-size: 18px;
  line-height: 1;
`,Em=()=>{let e=Lo(),t=J(e=>e.extraQuestions.items),[n,r]=(0,x.useState)(null);return(0,q.jsxs)(`div`,{children:[(0,q.jsxs)(cm,{children:[(0,q.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:14},children:[(0,q.jsx)(Gp,{}),(0,q.jsx)(lm,{children:`Доп. вопросы`})]}),(0,q.jsx)(um,{type:`button`,onClick:()=>e(_d()),children:`Очистить всё`})]}),(0,q.jsx)(dm,{children:t.map((t,i)=>{let a=t.author,o=a?cd[a]:void 0,s=n===t.id,c=n=>e(md({id:t.id,question:{...t,...n}})),l=e=>{c({author:e}),r(null)};return(0,q.jsx)(fm,{children:(0,q.jsxs)(pm,{children:[(0,q.jsxs)(mm,{children:[(0,q.jsx)(sm,{required:!0,children:`Вопрос`}),(0,q.jsx)(_m,{value:t.question,onChange:e=>c({question:e.target.value})})]}),(0,q.jsxs)(hm,{children:[(0,q.jsx)(sm,{required:!0,children:`Ответ`}),(0,q.jsx)(_m,{value:t.answer,onChange:e=>c({answer:e.target.value})})]}),(0,q.jsxs)(gm,{children:[(0,q.jsx)(sm,{children:`Автор`}),(0,q.jsxs)(vm,{onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||r(null)},children:[(0,q.jsx)(ym,{type:`button`,$color:o,onClick:()=>r(e=>e===t.id?null:t.id),"aria-haspopup":`listbox`,"aria-expanded":s,children:a||`Выберите автора`}),(0,q.jsx)(bm,{$open:s}),s&&(0,q.jsxs)(xm,{role:`listbox`,children:[(0,q.jsx)(Sm,{type:`button`,$active:!a,onClick:()=>l(``),children:`Выберите автора`}),od.map(e=>(0,q.jsx)(Sm,{type:`button`,role:`option`,"aria-selected":a===e,$color:cd[e],$active:a===e,onClick:()=>l(e),children:e},e))]})]})]}),i>0&&(0,q.jsx)(Cm,{type:`button`,"aria-label":`Удалить вопрос`,title:`Удалить вопрос`,onClick:()=>e(gd(t.id)),children:`🗑️`})]})},t.id)})}),(0,q.jsxs)(wm,{type:`button`,onClick:()=>e(hd()),children:[(0,q.jsx)(Tm,{children:`＋`}),`Добавить`]})]})},Dm=l(h());function Om(){var e=[...arguments];return(0,x.useMemo)(()=>t=>{e.forEach(e=>e(t))},e)}var km=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Am(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function jm(e){return`nodeType`in e}function Mm(e){return e?Am(e)?e:jm(e)?e.ownerDocument?.defaultView??window:window:window}function Nm(e){let{Document:t}=Mm(e);return e instanceof t}function Pm(e){return Am(e)?!1:e instanceof Mm(e).HTMLElement}function Fm(e){return e instanceof Mm(e).SVGElement}function Im(e){return e?Am(e)?e.document:jm(e)?Nm(e)?e:Pm(e)||Fm(e)?e.ownerDocument:document:document:document}var Lm=km?x.useLayoutEffect:x.useEffect;function Rm(e){let t=(0,x.useRef)(e);return Lm(()=>{t.current=e}),(0,x.useCallback)(function(){var e=[...arguments];return t.current==null?void 0:t.current(...e)},[])}function zm(){let e=(0,x.useRef)(null);return[(0,x.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,x.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[])]}function Bm(e,t){t===void 0&&(t=[e]);let n=(0,x.useRef)(e);return Lm(()=>{n.current!==e&&(n.current=e)},t),n}function Vm(e,t){let n=(0,x.useRef)();return(0,x.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function Hm(e){let t=Rm(e),n=(0,x.useRef)(null);return[n,(0,x.useCallback)(e=>{e!==n.current&&t?.(e,n.current),n.current=e},[])]}function Um(e){let t=(0,x.useRef)();return(0,x.useEffect)(()=>{t.current=e},[e]),t.current}var Wm={};function Gm(e,t){return(0,x.useMemo)(()=>{if(t)return t;let n=Wm[e]==null?0:Wm[e]+1;return Wm[e]=n,e+`-`+n},[e,t])}function Km(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>{let r=Object.entries(n);for(let[n,i]of r){let r=t[n];r!=null&&(t[n]=r+e*i)}return t},{...t})}}var qm=Km(1),Jm=Km(-1);function Ym(e){return`clientX`in e&&`clientY`in e}function Xm(e){if(!e)return!1;let{KeyboardEvent:t}=Mm(e.target);return t&&e instanceof t}function Zm(e){if(!e)return!1;let{TouchEvent:t}=Mm(e.target);return t&&e instanceof t}function Qm(e){if(Zm(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return Ym(e)?{x:e.clientX,y:e.clientY}:null}var $m=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return`translate3d(`+(t?Math.round(t):0)+`px, `+(n?Math.round(n):0)+`px, 0)`}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return`scaleX(`+t+`) scaleY(`+n+`)`}},Transform:{toString(e){if(e)return[$m.Translate.toString(e),$m.Scale.toString(e)].join(` `)}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+` `+n+`ms `+r}}}),eh=`a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;function th(e){return e.matches(eh)?e:e.querySelector(eh)}var nh={display:`none`};function rh(e){let{id:t,value:n}=e;return x.createElement(`div`,{id:t,style:nh},n)}function ih(e){let{id:t,announcement:n,ariaLiveType:r=`assertive`}=e;return x.createElement(`div`,{id:t,style:{position:`fixed`,top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(100%)`,whiteSpace:`nowrap`},role:`status`,"aria-live":r,"aria-atomic":!0},n)}function ah(){let[e,t]=(0,x.useState)(``);return{announce:(0,x.useCallback)(e=>{e!=null&&t(e)},[]),announcement:e}}var oh=(0,x.createContext)(null);function sh(e){let t=(0,x.useContext)(oh);(0,x.useEffect)(()=>{if(!t)throw Error(`useDndMonitor must be used within a children of <DndContext>`);return t(e)},[e,t])}function ch(){let[e]=(0,x.useState)(()=>new Set),t=(0,x.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,x.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>e[n]?.call(e,r))},[e]),t]}var lh={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},uh={onDragStart(e){let{active:t}=e;return`Picked up draggable item `+t.id+`.`},onDragOver(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was moved over droppable area `+n.id+`.`:`Draggable item `+t.id+` is no longer over a droppable area.`},onDragEnd(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was dropped over droppable area `+n.id:`Draggable item `+t.id+` was dropped.`},onDragCancel(e){let{active:t}=e;return`Dragging was cancelled. Draggable item `+t.id+` was dropped.`}};function dh(e){let{announcements:t=uh,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=lh}=e,{announce:a,announcement:o}=ah(),s=Gm(`DndLiveRegion`),[c,l]=(0,x.useState)(!1);if((0,x.useEffect)(()=>{l(!0)},[]),sh((0,x.useMemo)(()=>({onDragStart(e){let{active:n}=e;a(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&a(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;a(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;a(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;a(t.onDragCancel({active:n,over:r}))}}),[a,t])),!c)return null;let u=x.createElement(x.Fragment,null,x.createElement(rh,{id:r,value:i.draggable}),x.createElement(ih,{id:s,announcement:o}));return n?(0,Dm.createPortal)(u,n):u}var fh;(function(e){e.DragStart=`dragStart`,e.DragMove=`dragMove`,e.DragEnd=`dragEnd`,e.DragCancel=`dragCancel`,e.DragOver=`dragOver`,e.RegisterDroppable=`registerDroppable`,e.SetDroppableDisabled=`setDroppableDisabled`,e.UnregisterDroppable=`unregisterDroppable`})(fh||={});function ph(){}function mh(e,t){return(0,x.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function hh(){var e=[...arguments];return(0,x.useMemo)(()=>[...e].filter(e=>e!=null),[...e])}var gh=Object.freeze({x:0,y:0});function _h(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function vh(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function yh(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function bh(e,t){if(!e||e.length===0)return null;let[n]=e;return t?n[t]:n}function xh(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}var Sh=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=xh(t,t.left,t.top),a=[];for(let e of r){let{id:t}=e,r=n.get(t);if(r){let n=_h(xh(r),i);a.push({id:t,data:{droppableContainer:e,value:n}})}}return a.sort(vh)};function Ch(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){let n=t.width*t.height,r=e.width*e.height,i=o*s,a=i/(n+r-i);return Number(a.toFixed(4))}return 0}var wh=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=[];for(let e of r){let{id:r}=e,a=n.get(r);if(a){let n=Ch(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(yh)};function Th(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Eh(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:gh}function Dh(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}var Oh=Dh(1);function kh(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Ah(e,t,n){let r=kh(t);if(!r)return e;let{scaleX:i,scaleY:a,x:o,y:s}=r,c=e.left-o-(1-i)*parseFloat(n),l=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(` `)+1)),u=i?e.width/i:e.width,d=a?e.height/a:e.height;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c}}var jh={ignoreTransform:!1};function Mh(e,t){t===void 0&&(t=jh);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=Mm(e).getComputedStyle(e);t&&(n=Ah(n,t,r))}let{top:r,left:i,width:a,height:o,bottom:s,right:c}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:c}}function Nh(e){return Mh(e,{ignoreTransform:!0})}function Ph(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function Fh(e,t){return t===void 0&&(t=Mm(e).getComputedStyle(e)),t.position===`fixed`}function Ih(e,t){t===void 0&&(t=Mm(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`?n.test(r):!1})}function Lh(e,t){let n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(Nm(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!Pm(i)||Fm(i)||n.includes(i))return n;let a=Mm(e).getComputedStyle(i);return i!==e&&Ih(i,a)&&n.push(i),Fh(i,a)?n:r(i.parentNode)}return e?r(e):n}function Rh(e){let[t]=Lh(e,1);return t??null}function zh(e){return!km||!e?null:Am(e)?e:jm(e)?Nm(e)||e===Im(e).scrollingElement?window:Pm(e)?e:null:null}function Bh(e){return Am(e)?e.scrollX:e.scrollLeft}function Vh(e){return Am(e)?e.scrollY:e.scrollTop}function Hh(e){return{x:Bh(e),y:Vh(e)}}var Uh;(function(e){e[e.Forward=1]=`Forward`,e[e.Backward=-1]=`Backward`})(Uh||={});function Wh(e){return!km||!e?!1:e===document.scrollingElement}function Gh(e){let t={x:0,y:0},n=Wh(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}var Kh={x:.2,y:.2};function qh(e,t,n,r,i){let{top:a,left:o,right:s,bottom:c}=n;r===void 0&&(r=10),i===void 0&&(i=Kh);let{isTop:l,isBottom:u,isLeft:d,isRight:f}=Gh(e),p={x:0,y:0},m={x:0,y:0},h={height:t.height*i.y,width:t.width*i.x};return!l&&a<=t.top+h.height?(p.y=Uh.Backward,m.y=r*Math.abs((t.top+h.height-a)/h.height)):!u&&c>=t.bottom-h.height&&(p.y=Uh.Forward,m.y=r*Math.abs((t.bottom-h.height-c)/h.height)),!f&&s>=t.right-h.width?(p.x=Uh.Forward,m.x=r*Math.abs((t.right-h.width-s)/h.width)):!d&&o<=t.left+h.width&&(p.x=Uh.Backward,m.x=r*Math.abs((t.left+h.width-o)/h.width)),{direction:p,speed:m}}function Jh(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function Yh(e){return e.reduce((e,t)=>qm(e,Hh(t)),gh)}function Xh(e){return e.reduce((e,t)=>e+Bh(t),0)}function Zh(e){return e.reduce((e,t)=>e+Vh(t),0)}function Qh(e,t){if(t===void 0&&(t=Mh),!e)return;let{top:n,left:r,bottom:i,right:a}=t(e);Rh(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:`center`,inline:`center`})}var $h=[[`x`,[`left`,`right`],Xh],[`y`,[`top`,`bottom`],Zh]],eg=class{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=Lh(t),r=Yh(n);this.rect={...e},this.width=e.width,this.height=e.height;for(let[e,t,i]of $h)for(let a of t)Object.defineProperty(this,a,{get:()=>{let t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,`rect`,{enumerable:!1})}},tg=class{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>this.target?.removeEventListener(...e))},this.target=e}add(e,t,n){var r;(r=this.target)==null||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}};function ng(e){let{EventTarget:t}=Mm(e);return e instanceof t?e:Im(e)}function rg(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return typeof t==`number`?Math.sqrt(n**2+r**2)>t:`x`in t&&`y`in t?n>t.x&&r>t.y:`x`in t?n>t.x:`y`in t?r>t.y:!1}var ig;(function(e){e.Click=`click`,e.DragStart=`dragstart`,e.Keydown=`keydown`,e.ContextMenu=`contextmenu`,e.Resize=`resize`,e.SelectionChange=`selectionchange`,e.VisibilityChange=`visibilitychange`})(ig||={});function ag(e){e.preventDefault()}function og(e){e.stopPropagation()}var sg;(function(e){e.Space=`Space`,e.Down=`ArrowDown`,e.Right=`ArrowRight`,e.Left=`ArrowLeft`,e.Up=`ArrowUp`,e.Esc=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`})(sg||={});var cg={start:[sg.Space,sg.Enter],cancel:[sg.Esc],end:[sg.Space,sg.Enter,sg.Tab]},lg=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case sg.Right:return{...n,x:n.x+25};case sg.Left:return{...n,x:n.x-25};case sg.Down:return{...n,y:n.y+25};case sg.Up:return{...n,y:n.y-25}}},ug=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new tg(Im(t)),this.windowListeners=new tg(Mm(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(ig.Resize,this.handleCancel),this.windowListeners.add(ig.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(ig.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&Qh(n),t(gh)}handleKeyDown(e){if(Xm(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:i=cg,coordinateGetter:a=lg,scrollBehavior:o=`smooth`}=r,{code:s}=e;if(i.end.includes(s)){this.handleEnd(e);return}if(i.cancel.includes(s)){this.handleCancel(e);return}let{collisionRect:c}=n.current,l=c?{x:c.left,y:c.top}:gh;this.referenceCoordinates||=l;let u=a(e,{active:t,context:n.current,currentCoordinates:l});if(u){let t=Jm(u,l),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(let n of i){let i=e.code,{isTop:a,isRight:s,isLeft:c,isBottom:l,maxScroll:d,minScroll:f}=Gh(n),p=Jh(n),m={x:Math.min(i===sg.Right?p.right-p.width/2:p.right,Math.max(i===sg.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(i===sg.Down?p.bottom-p.height/2:p.bottom,Math.max(i===sg.Down?p.top:p.top+p.height/2,u.y))},h=i===sg.Right&&!s||i===sg.Left&&!c,g=i===sg.Down&&!l||i===sg.Up&&!a;if(h&&m.x!==u.x){let e=n.scrollLeft+t.x,a=i===sg.Right&&e<=d.x||i===sg.Left&&e>=f.x;if(a&&!t.y){n.scrollTo({left:e,behavior:o});return}a?r.x=n.scrollLeft-e:r.x=i===sg.Right?n.scrollLeft-d.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}else if(g&&m.y!==u.y){let e=n.scrollTop+t.y,a=i===sg.Down&&e<=d.y||i===sg.Up&&e>=f.y;if(a&&!t.x){n.scrollTo({top:e,behavior:o});return}a?r.y=n.scrollTop-e:r.y=i===sg.Down?n.scrollTop-d.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,qm(Jm(u,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};ug.activators=[{eventName:`onKeyDown`,handler:(e,t,n)=>{let{keyboardCodes:r=cg,onActivation:i}=t,{active:a}=n,{code:o}=e.nativeEvent;if(r.start.includes(o)){let t=a.activatorNode.current;return t&&e.target!==t?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function dg(e){return!!(e&&`distance`in e)}function fg(e){return!!(e&&`delay`in e)}var pg=class{constructor(e,t,n){n===void 0&&(n=ng(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:r}=e,{target:i}=r;this.props=e,this.events=t,this.document=Im(i),this.documentListeners=new tg(this.document),this.listeners=new tg(n),this.windowListeners=new tg(Mm(i)),this.initialCoordinates=Qm(r)??gh,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(ig.Resize,this.handleCancel),this.windowListeners.add(ig.DragStart,ag),this.windowListeners.add(ig.VisibilityChange,this.handleCancel),this.windowListeners.add(ig.ContextMenu,ag),this.documentListeners.add(ig.Keydown,this.handleKeydown),t){if(n!=null&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(fg(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(dg(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(ig.Click,og,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(ig.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){let{activated:t,initialCoordinates:n,props:r}=this,{onMove:i,options:{activationConstraint:a}}=r;if(!n)return;let o=Qm(e)??gh,s=Jm(n,o);if(!t&&a){if(dg(a)){if(a.tolerance!=null&&rg(s,a.tolerance))return this.handleCancel();if(rg(s,a.distance))return this.handleStart()}if(fg(a)&&rg(s,a.tolerance))return this.handleCancel();this.handlePending(a,s);return}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===sg.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}},mg={cancel:{name:`pointercancel`},move:{name:`pointermove`},end:{name:`pointerup`}},hg=class extends pg{constructor(e){let{event:t}=e,n=Im(t.target);super(e,mg,n)}};hg.activators=[{eventName:`onPointerDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];var gg={move:{name:`mousemove`},end:{name:`mouseup`}},_g;(function(e){e[e.RightClick=2]=`RightClick`})(_g||={});var vg=class extends pg{constructor(e){super(e,gg,Im(e.event.target))}};vg.activators=[{eventName:`onMouseDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===_g.RightClick?!1:(r?.({event:n}),!0)}}];var yg={cancel:{name:`touchcancel`},move:{name:`touchmove`},end:{name:`touchend`}},bg=class extends pg{constructor(e){super(e,yg)}static setup(){return window.addEventListener(yg.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(yg.move.name,e)};function e(){}}};bg.activators=[{eventName:`onTouchStart`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t,{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var xg;(function(e){e[e.Pointer=0]=`Pointer`,e[e.DraggableRect=1]=`DraggableRect`})(xg||={});var Sg;(function(e){e[e.TreeOrder=0]=`TreeOrder`,e[e.ReversedTreeOrder=1]=`ReversedTreeOrder`})(Sg||={});function Cg(e){let{acceleration:t,activator:n=xg.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:o=5,order:s=Sg.TreeOrder,pointerCoordinates:c,scrollableAncestors:l,scrollableAncestorRects:u,delta:d,threshold:f}=e,p=Tg({delta:d,disabled:!a}),[m,h]=zm(),g=(0,x.useRef)({x:0,y:0}),_=(0,x.useRef)({x:0,y:0}),v=(0,x.useMemo)(()=>{switch(n){case xg.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case xg.DraggableRect:return i}},[n,i,c]),y=(0,x.useRef)(null),b=(0,x.useCallback)(()=>{let e=y.current;if(!e)return;let t=g.current.x*_.current.x,n=g.current.y*_.current.y;e.scrollBy(t,n)},[]),S=(0,x.useMemo)(()=>s===Sg.TreeOrder?[...l].reverse():l,[s,l]);(0,x.useEffect)(()=>{if(!a||!l.length||!v){h();return}for(let e of S){if(r?.(e)===!1)continue;let n=u[l.indexOf(e)];if(!n)continue;let{direction:i,speed:a}=qh(e,n,v,t,f);for(let e of[`x`,`y`])p[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0){h(),y.current=e,m(b,o),g.current=a,_.current=i;return}}g.current={x:0,y:0},_.current={x:0,y:0},h()},[t,b,r,h,a,o,JSON.stringify(v),JSON.stringify(p),m,l,S,u,JSON.stringify(f)])}var wg={x:{[Uh.Backward]:!1,[Uh.Forward]:!1},y:{[Uh.Backward]:!1,[Uh.Forward]:!1}};function Tg(e){let{delta:t,disabled:n}=e,r=Um(t);return Vm(e=>{if(n||!r||!e)return wg;let i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[Uh.Backward]:e.x[Uh.Backward]||i.x===-1,[Uh.Forward]:e.x[Uh.Forward]||i.x===1},y:{[Uh.Backward]:e.y[Uh.Backward]||i.y===-1,[Uh.Forward]:e.y[Uh.Forward]||i.y===1}}},[n,t,r])}function Eg(e,t){let n=t==null?void 0:e.get(t),r=n?n.node.current:null;return Vm(e=>t==null?null:r??e??null,[r,t])}function Dg(e,t){return(0,x.useMemo)(()=>e.reduce((e,n)=>{let{sensor:r}=n,i=r.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,n)}));return[...e,...i]},[]),[e,t])}var Og;(function(e){e[e.Always=0]=`Always`,e[e.BeforeDragging=1]=`BeforeDragging`,e[e.WhileDragging=2]=`WhileDragging`})(Og||={});var kg;(function(e){e.Optimized=`optimized`})(kg||={});var Ag=new Map;function jg(e,t){let{dragging:n,dependencies:r,config:i}=t,[a,o]=(0,x.useState)(null),{frequency:s,measure:c,strategy:l}=i,u=(0,x.useRef)(e),d=g(),f=Bm(d),p=(0,x.useCallback)(function(e){e===void 0&&(e=[]),!f.current&&o(t=>t===null?e:t.concat(e.filter(e=>!t.includes(e))))},[f]),m=(0,x.useRef)(null),h=Vm(t=>{if(d&&!n)return Ag;if(!t||t===Ag||u.current!==e||a!=null){let t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new eg(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,n,d,c]);return(0,x.useEffect)(()=>{u.current=e},[e]),(0,x.useEffect)(()=>{d||p()},[n,d]),(0,x.useEffect)(()=>{a&&a.length>0&&o(null)},[JSON.stringify(a)]),(0,x.useEffect)(()=>{d||typeof s!=`number`||m.current!==null||(m.current=setTimeout(()=>{p(),m.current=null},s))},[s,d,p,...r]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:a!=null};function g(){switch(l){case Og.Always:return!1;case Og.BeforeDragging:return n;default:return!n}}}function Mg(e,t){return Vm(n=>e?n||(typeof t==`function`?t(e):e):null,[t,e])}function Ng(e,t){return Mg(e,t)}function Pg(e){let{callback:t,disabled:n}=e,r=Rm(t),i=(0,x.useMemo)(()=>{if(n||typeof window>`u`||window.MutationObserver===void 0)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,x.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Fg(e){let{callback:t,disabled:n}=e,r=Rm(t),i=(0,x.useMemo)(()=>{if(n||typeof window>`u`||window.ResizeObserver===void 0)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,x.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Ig(e){return new eg(Mh(e),e)}function Lg(e,t,n){t===void 0&&(t=Ig);let[r,i]=(0,x.useState)(null);function a(){i(r=>{if(!e)return null;if(e.isConnected===!1)return r??n??null;let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i})}let o=Pg({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if(t===`childList`&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),s=Fg({callback:a});return Lm(()=>{a(),e?(s?.observe(e),o?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),o?.disconnect())},[e]),r}function Rg(e){return Eh(e,Mg(e))}var zg=[];function Bg(e){let t=(0,x.useRef)(e),n=Vm(n=>e?n&&n!==zg&&e&&t.current&&e.parentNode===t.current.parentNode?n:Lh(e):zg,[e]);return(0,x.useEffect)(()=>{t.current=e},[e]),n}function Vg(e){let[t,n]=(0,x.useState)(null),r=(0,x.useRef)(e),i=(0,x.useCallback)(e=>{let t=zh(e.target);t&&n(e=>e?(e.set(t,Hh(t)),new Map(e)):null)},[]);return(0,x.useEffect)(()=>{let t=r.current;if(e!==t){a(t);let o=e.map(e=>{let t=zh(e);return t?(t.addEventListener(`scroll`,i,{passive:!0}),[t,Hh(t)]):null}).filter(e=>e!=null);n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach(e=>{zh(e)?.removeEventListener(`scroll`,i)})}},[i,e]),(0,x.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>qm(e,t),gh):Yh(e):gh,[e,t])}function Hg(e,t){t===void 0&&(t=[]);let n=(0,x.useRef)(null);return(0,x.useEffect)(()=>{n.current=null},t),(0,x.useEffect)(()=>{let t=e!==gh;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?Jm(e,n.current):gh}function Ug(e){(0,x.useEffect)(()=>{if(!km)return;let t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(let e of t)e?.()}},e.map(e=>{let{sensor:t}=e;return t}))}function Wg(e,t){return(0,x.useMemo)(()=>e.reduce((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e},{}),[e,t])}function Gg(e){return(0,x.useMemo)(()=>e?Ph(e):null,[e])}var Kg=[];function qg(e,t){t===void 0&&(t=Mh);let[n]=e,r=Gg(n?Mm(n):null),[i,a]=(0,x.useState)(Kg);function o(){a(()=>e.length?e.map(e=>Wh(e)?r:new eg(t(e),e)):Kg)}let s=Fg({callback:o});return Lm(()=>{s?.disconnect(),o(),e.forEach(e=>s?.observe(e))},[e]),i}function Jg(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return Pm(t)?t:e}function Yg(e){let{measure:t}=e,[n,r]=(0,x.useState)(null),i=Fg({callback:(0,x.useCallback)(e=>{for(let{target:n}of e)if(Pm(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),[a,o]=Hm((0,x.useCallback)(e=>{let n=Jg(e);i?.disconnect(),n&&i?.observe(n),r(n?t(n):null)},[t,i]));return(0,x.useMemo)(()=>({nodeRef:a,rect:n,setRef:o}),[n,a,o])}var Xg=[{sensor:hg,options:{}},{sensor:ug,options:{}}],Zg={current:{}},Qg={draggable:{measure:Nh},droppable:{measure:Nh,strategy:Og.WhileDragging,frequency:kg.Optimized},dragOverlay:{measure:Mh}},$g=class extends Map{get(e){return e==null?void 0:super.get(e)??void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){return this.get(e)?.node.current??void 0}},e_={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new $g,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:ph},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Qg,measureDroppableContainers:ph,windowRect:null,measuringScheduled:!1},t_={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:``},dispatch:ph,draggableNodes:new Map,over:null,measureDroppableContainers:ph},n_=(0,x.createContext)(t_),r_=(0,x.createContext)(e_);function i_(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new $g}}}function a_(e,t){switch(t.type){case fh.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case fh.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case fh.DragEnd:case fh.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case fh.RegisterDroppable:{let{element:n}=t,{id:r}=n,i=new $g(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case fh.SetDroppableDisabled:{let{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;let o=new $g(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case fh.UnregisterDroppable:{let{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new $g(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function o_(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:i}=(0,x.useContext)(n_),a=Um(r),o=Um(n?.id);return(0,x.useEffect)(()=>{if(!t&&!r&&a&&o!=null){if(!Xm(a)||document.activeElement===a.target)return;let e=i.get(o);if(!e)return;let{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=th(e);if(t){t.focus();break}}})}},[r,t,i,o,a]),null}function s_(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}function c_(e){return(0,x.useMemo)(()=>({draggable:{...Qg.draggable,...e?.draggable},droppable:{...Qg.droppable,...e?.droppable},dragOverlay:{...Qg.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function l_(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e,a=(0,x.useRef)(!1),{x:o,y:s}=typeof i==`boolean`?{x:i,y:i}:i;Lm(()=>{if(!o&&!s||!t){a.current=!1;return}if(a.current||!r)return;let e=t?.node.current;if(!e||e.isConnected===!1)return;let i=Eh(n(e),r);if(o||(i.x=0),s||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){let t=Rh(e);t&&t.scrollBy({top:i.y,left:i.x})}},[t,o,s,r,n])}var u_=(0,x.createContext)({...gh,scaleX:1,scaleY:1}),d_;(function(e){e[e.Uninitialized=0]=`Uninitialized`,e[e.Initializing=1]=`Initializing`,e[e.Initialized=2]=`Initialized`})(d_||={});var f_=(0,x.memo)(function(e){let{id:t,accessibility:n,autoScroll:r=!0,children:i,sensors:a=Xg,collisionDetection:o=wh,measuring:s,modifiers:c,...l}=e,[u,d]=(0,x.useReducer)(a_,void 0,i_),[f,p]=ch(),[m,h]=(0,x.useState)(d_.Uninitialized),g=m===d_.Initialized,{draggable:{active:_,nodes:v,translate:y},droppable:{containers:b}}=u,S=_==null?null:v.get(_),C=(0,x.useRef)({initial:null,translated:null}),w=(0,x.useMemo)(()=>_==null?null:{id:_,data:S?.data??Zg,rect:C},[_,S]),T=(0,x.useRef)(null),[E,D]=(0,x.useState)(null),[O,k]=(0,x.useState)(null),A=Bm(l,Object.values(l)),ee=Gm(`DndDescribedBy`,t),j=(0,x.useMemo)(()=>b.getEnabled(),[b]),M=c_(s),{droppableRects:N,measureDroppableContainers:te,measuringScheduled:P}=jg(j,{dragging:g,dependencies:[y.x,y.y],config:M.droppable}),F=Eg(v,_),ne=(0,x.useMemo)(()=>O?Qm(O):null,[O]),re=Oe(),ie=Ng(F,M.draggable.measure);l_({activeNode:_==null?null:v.get(_),config:re.layoutShiftCompensation,initialRect:ie,measure:M.draggable.measure});let I=Lg(F,M.draggable.measure,ie),L=Lg(F?F.parentElement:null),R=(0,x.useRef)({activatorEvent:null,active:null,activeNode:F,collisionRect:null,collisions:null,droppableRects:N,draggableNodes:v,draggingNode:null,draggingNodeRect:null,droppableContainers:b,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),z=b.getNodeFor(R.current.over?.id),B=Yg({measure:M.dragOverlay.measure}),ae=B.nodeRef.current??F,oe=g?B.rect??I:null,se=!!(B.nodeRef.current&&B.rect),ce=Rg(se?null:I),le=Gg(ae?Mm(ae):null),ue=Bg(g?z??F:null),V=qg(ue),de=s_(c,{transform:{x:y.x-ce.x,y:y.y-ce.y,scaleX:1,scaleY:1},activatorEvent:O,active:w,activeNodeRect:I,containerNodeRect:L,draggingNodeRect:oe,over:R.current.over,overlayNodeRect:B.rect,scrollableAncestors:ue,scrollableAncestorRects:V,windowRect:le}),fe=ne?qm(ne,y):null,pe=Vg(ue),me=Hg(pe),he=Hg(pe,[I]),ge=qm(de,me),_e=oe?Oh(oe,de):null,ve=w&&_e?o({active:w,collisionRect:_e,droppableRects:N,droppableContainers:j,pointerCoordinates:fe}):null,ye=bh(ve,`id`),[be,xe]=(0,x.useState)(null),Se=Th(se?de:qm(de,he),be?.rect??null,I),Ce=(0,x.useRef)(null),we=(0,x.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(T.current==null)return;let i=v.get(T.current);if(!i)return;let a=e.nativeEvent;Ce.current=new n({active:T.current,activeNode:i,event:a,options:r,context:R,onAbort(e){if(!v.get(e))return;let{onDragAbort:t}=A.current,n={id:e};t?.(n),f({type:`onDragAbort`,event:n})},onPending(e,t,n,r){if(!v.get(e))return;let{onDragPending:i}=A.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};i?.(a),f({type:`onDragPending`,event:a})},onStart(e){let t=T.current;if(t==null)return;let n=v.get(t);if(!n)return;let{onDragStart:r}=A.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:C}};(0,Dm.unstable_batchedUpdates)(()=>{r?.(i),h(d_.Initializing),d({type:fh.DragStart,initialCoordinates:e,active:t}),f({type:`onDragStart`,event:i}),D(Ce.current),k(a)})},onMove(e){d({type:fh.DragMove,coordinates:e})},onEnd:o(fh.DragEnd),onCancel:o(fh.DragCancel)});function o(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=R.current,o=null;if(t&&i){let{cancelDrop:s}=A.current;o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===fh.DragEnd&&typeof s==`function`&&await Promise.resolve(s(o))&&(e=fh.DragCancel)}T.current=null,(0,Dm.unstable_batchedUpdates)(()=>{d({type:e}),h(d_.Uninitialized),xe(null),D(null),k(null),Ce.current=null;let t=e===fh.DragEnd?`onDragEnd`:`onDragCancel`;if(o){let e=A.current[t];e?.(o),f({type:t,event:o})}})}}},[v]),Te=Dg(a,(0,x.useCallback)((e,t)=>(n,r)=>{let i=n.nativeEvent,a=v.get(r);if(T.current!==null||!a||i.dndKit||i.defaultPrevented)return;let o={active:a};e(n,t.options,o)===!0&&(i.dndKit={capturedBy:t.sensor},T.current=r,we(n,t))},[v,we]));Ug(a),Lm(()=>{I&&m===d_.Initializing&&h(d_.Initialized)},[I,m]),(0,x.useEffect)(()=>{let{onDragMove:e}=A.current,{active:t,activatorEvent:n,collisions:r,over:i}=R.current;if(!t||!n)return;let a={active:t,activatorEvent:n,collisions:r,delta:{x:ge.x,y:ge.y},over:i};(0,Dm.unstable_batchedUpdates)(()=>{e?.(a),f({type:`onDragMove`,event:a})})},[ge.x,ge.y]),(0,x.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=R.current;if(!e||T.current==null||!t||!i)return;let{onDragOver:a}=A.current,o=r.get(ye),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};(0,Dm.unstable_batchedUpdates)(()=>{xe(s),a?.(c),f({type:`onDragOver`,event:c})})},[ye]),Lm(()=>{R.current={activatorEvent:O,active:w,activeNode:F,collisionRect:_e,collisions:ve,droppableRects:N,draggableNodes:v,draggingNode:ae,draggingNodeRect:oe,droppableContainers:b,over:be,scrollableAncestors:ue,scrollAdjustedTranslate:ge},C.current={initial:oe,translated:_e}},[w,F,ve,_e,v,ae,oe,N,b,be,ue,ge]),Cg({...re,delta:y,draggingRect:_e,pointerCoordinates:fe,scrollableAncestors:ue,scrollableAncestorRects:V});let Ee=(0,x.useMemo)(()=>({active:w,activeNode:F,activeNodeRect:I,activatorEvent:O,collisions:ve,containerNodeRect:L,dragOverlay:B,draggableNodes:v,droppableContainers:b,droppableRects:N,over:be,measureDroppableContainers:te,scrollableAncestors:ue,scrollableAncestorRects:V,measuringConfiguration:M,measuringScheduled:P,windowRect:le}),[w,F,I,O,ve,L,B,v,b,N,be,te,ue,V,M,P,le]),De=(0,x.useMemo)(()=>({activatorEvent:O,activators:Te,active:w,activeNodeRect:I,ariaDescribedById:{draggable:ee},dispatch:d,draggableNodes:v,over:be,measureDroppableContainers:te}),[O,Te,w,I,d,ee,v,be,te]);return x.createElement(oh.Provider,{value:p},x.createElement(n_.Provider,{value:De},x.createElement(r_.Provider,{value:Ee},x.createElement(u_.Provider,{value:Se},i)),x.createElement(o_,{disabled:n?.restoreFocus===!1})),x.createElement(dh,{...n,hiddenTextDescribedById:ee}));function Oe(){let e=E?.autoScrollEnabled===!1,t=typeof r==`object`?r.enabled===!1:r===!1,n=g&&!e&&!t;return typeof r==`object`?{...r,enabled:n}:{enabled:n}}}),p_=(0,x.createContext)(null),m_=`button`,h_=`Draggable`;function g_(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e,a=Gm(h_),{activators:o,activatorEvent:s,active:c,activeNodeRect:l,ariaDescribedById:u,draggableNodes:d,over:f}=(0,x.useContext)(n_),{role:p=m_,roleDescription:m=`draggable`,tabIndex:h=0}=i??{},g=c?.id===t,_=(0,x.useContext)(g?u_:p_),[v,y]=Hm(),[b,S]=Hm(),C=Wg(o,t),w=Bm(n);return Lm(()=>(d.set(t,{id:t,key:a,node:v,activatorNode:b,data:w}),()=>{let e=d.get(t);e&&e.key===a&&d.delete(t)}),[d,t]),{active:c,activatorEvent:s,activeNodeRect:l,attributes:(0,x.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":r,"aria-pressed":g&&p===m_?!0:void 0,"aria-roledescription":m,"aria-describedby":u.draggable}),[r,p,h,g,m,u.draggable]),isDragging:g,listeners:r?void 0:C,node:v,over:f,setNodeRef:y,setActivatorNodeRef:S,transform:_}}function __(){return(0,x.useContext)(r_)}var v_=`Droppable`,y_={timeout:25};function b_(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e,a=Gm(v_),{active:o,dispatch:s,over:c,measureDroppableContainers:l}=(0,x.useContext)(n_),u=(0,x.useRef)({disabled:n}),d=(0,x.useRef)(!1),f=(0,x.useRef)(null),p=(0,x.useRef)(null),{disabled:m,updateMeasurementsFor:h,timeout:g}={...y_,...i},_=Bm(h??r),v=Fg({callback:(0,x.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{l(Array.isArray(_.current)?_.current:[_.current]),p.current=null},g)},[g]),disabled:m||!o}),[y,b]=Hm((0,x.useCallback)((e,t)=>{v&&(t&&(v.unobserve(t),d.current=!1),e&&v.observe(e))},[v])),S=Bm(t);return(0,x.useEffect)(()=>{!v||!y.current||(v.disconnect(),d.current=!1,v.observe(y.current))},[y,v]),(0,x.useEffect)(()=>(s({type:fh.RegisterDroppable,element:{id:r,key:a,disabled:n,node:y,rect:f,data:S}}),()=>s({type:fh.UnregisterDroppable,key:a,id:r})),[r]),(0,x.useEffect)(()=>{n!==u.current.disabled&&(s({type:fh.SetDroppableDisabled,id:r,key:a,disabled:n}),u.current.disabled=n)},[r,a,n,s]),{active:o,rect:f,isOver:c?.id===r,node:y,over:c,setNodeRef:b}}var x_=K.div`
  min-height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  gap: 24px;
`,S_=K.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`,C_=K.h1`
  margin: 0;
  font-size: 32px;
`,w_=K.div`
  font-size: 22px;
  line-height: 1.2;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.text};
  letter-spacing: 0.01em;
`,T_=K.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(180px, 1fr));
  gap: 16px;
  align-items: stretch;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,E_=K.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
`,D_=K.div`
  min-height: 180px;
  height: ${({$height:e})=>`${e}px`};
  box-sizing: border-box;
  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 18px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01)),
    ${({theme:e})=>e.colors.surface};
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
  opacity: ${({$disabled:e})=>e?.42:1};
  filter: ${({$disabled:e})=>e?`grayscale(0.45)`:`none`};
  transition: opacity 0.18s ease, filter 0.18s ease;
`,O_=K.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`,k_=K.div`
  font-size: 14px;
  line-height: 1.35;
  color: ${({theme:e})=>e.colors.mutedText};
  overflow-wrap: anywhere;
`,A_=K.div`
  min-height: 84px;
  padding: 10px;
  border-radius: 16px;
  border: 2px dashed
    ${({theme:e,$over:t,$disabled:n})=>n?`rgba(148, 163, 184, 0.22)`:t?e.colors.accent:e.colors.border};
  background: ${({$over:e,$disabled:t})=>t?`rgba(148, 163, 184, 0.05)`:e?`rgba(96,165,250,0.08)`:`transparent`};
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: ${({$disabled:e})=>e?.42:1};
  filter: ${({$disabled:e})=>e?`grayscale(0.45)`:`none`};
  transition: opacity 0.18s ease, filter 0.18s ease, border-color 0.18s ease, background 0.18s ease;
`,j_=K.div`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.mutedText};
  text-align: center;
  margin: auto 0;
`,M_=K.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-start;
`,N_=K.div`
  display: grid;
  justify-items: center;
  gap: 8px;
`,P_=K.div`
  padding: 5px 10px;
  border: 1px solid rgba(96, 165, 250, 0.42);
  border-radius: 999px;
  background: rgba(96, 165, 250, 0.1);
  color: ${({theme:e})=>e.colors.mutedText};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
`,F_=K.button`
  min-width: 180px;
  min-height: 76px;
  padding: 14px 16px;
  border: 1px solid
    ${({theme:e,$active:t,$warning:n,$current:r,$targetable:i})=>r?e.colors.accent:t?e.colors.success:n?`#ef4444`:i?`#c47a2c`:e.colors.border};
  border-radius: 18px;
  background: ${({theme:e,$active:t,$warning:n,$current:r})=>r?`rgba(96,165,250,0.14)`:t?`rgba(34,197,94,0.16)`:n?`rgba(239,68,68,0.16)`:`linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01)), ${e.colors.surface}`};
  color: ${({theme:e})=>e.colors.text};
  font-weight: 700;
  cursor: ${({$readonly:e})=>e?`not-allowed`:`grab`};
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.18);
  opacity: ${({$readonly:e})=>e?.5:1};
  filter: ${({$readonly:e})=>e?`grayscale(0.15)`:`none`};

  &:hover {
    cursor: ${({$readonly:e})=>e?`not-allowed`:`grab`};
  }

  ${({$dragging:e})=>e&&G`
      opacity: 0.8;
      transform: scale(1.04);
    `}
`,I_=K(F_)`
  width: 100%;
  min-width: 0;
`,L_=K.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  padding-top: 8px;
`,R_=K.button`
  min-width: 140px;
  min-height: 46px;
  padding: 0 18px;
  border: 1px solid #5b7fc4;
  border-radius: 12px;
  background: #496cae;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover:not(:disabled) {
    background: #567bbb;
    border-color: #6f91cf;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    border-color: ${({theme:e})=>e.colors.border};
    background: ${({theme:e})=>e.colors.surface};
    color: ${({theme:e})=>e.colors.text};
  }
`,z_=(e,t)=>{if(e.length===0)return t.length===0;let[n,...r]=e;for(let e of t)if(e!==n&&z_(r,t.filter(t=>t!==e)))return!0;return!1},B_=({id:e,playerIndex:t,label:n,assigned:r=!1,warning:i=!1,current:a=!1,targetable:o=!1,readonly:s=!1})=>{let{attributes:c,listeners:l,setNodeRef:u,transform:d,isDragging:f}=g_({id:e,data:{playerIndex:t},disabled:s||a}),p={transform:$m.Translate.toString(d)};return(0,q.jsx)(r?I_:F_,{ref:u,style:p,type:`button`,$dragging:f,$warning:i,$current:a,$targetable:o,$readonly:s,...!s&&!a?l:{},...!s&&!a?c:{},children:n})},V_=({zoneId:e,isOver:t,disabled:n,strongPlayers:r,cutPlayers:i})=>{let{setNodeRef:a}=b_({id:e,disabled:n});return(0,q.jsxs)(A_,{ref:a,$over:!n&&t,$disabled:n,children:[r.map(e=>(0,q.jsx)(I_,{type:`button`,$active:!0,children:e.label},`strong-${e.id}`)),i.map(e=>(0,q.jsx)(B_,{id:`cut-${e.index}`,playerIndex:e.index,label:e.label,assigned:!0,warning:!0},e.index)),!r.length&&!i.length&&(0,q.jsx)(j_,{children:`Перетащи игрока сюда`})]})},H_=()=>{let e=wt(),t=Lo(),n=J(e=>e.roundOne.themes),r=J(e=>e.gameRoundOne.strongAssignments),i=J(e=>e.gameRoundOne.cutAssignments),{players:a,isFourthActive:o}=J(e=>e.players),s=(0,x.useMemo)(()=>a.slice(0,o?4:3),[o,a]),[c,l]=(0,x.useState)(null),[u,d]=(0,x.useState)(null),f=(0,x.useRef)(null),[p,m]=(0,x.useState)(180);(0,x.useLayoutEffect)(()=>{let e=f.current;if(!e)return;let t=()=>{let t=Array.from(e.querySelectorAll(`[data-theme-card]`));if(!t.length)return;t.forEach(e=>{e.style.height=`auto`});let n=Math.max(180,...t.map(e=>e.scrollHeight));t.forEach(e=>{e.style.removeProperty(`height`)}),m(n+10)};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[n]);let h=s.map(e=>`${e.firstName} ${e.lastName}`.trim()),g=new Set(Object.values(i).flat()),_=[...Array(s.length).keys()].reverse(),v=g.size<_.length?_[g.size]:-1,y=new Map;Object.entries(r).forEach(([e,t])=>{t.forEach(t=>y.set(t,e))});let b=s.map((e,t)=>t).filter(e=>!g.has(e)),S=_.slice(g.size+1),C=new Set(b.filter(e=>e===v?!1:z_(S,b.filter(t=>t!==e)))),w=s.map((e,t)=>({index:t,label:`${e.firstName} ${e.lastName}`.trim()})),T=g.size===s.length,E=u===null?null:y.get(u)??null;return(0,q.jsx)(f_,{onDragStart:e=>{d(e.active.data.current?.playerIndex??null)},onDragMove:e=>{l(e.over?String(e.over.id):null)},onDragEnd:e=>{let{active:n,over:r}=e;if(l(null),d(null),!r)return;let i=n.data.current?.playerIndex,a=String(r.id);if(typeof i!=`number`||!a.startsWith(`zone-`))return;let o=a.replace(`zone-`,``);!g.has(i)&&!C.has(i)||y.get(i)!==o&&t(Rl({playerIndex:i,themeId:o}))},onDragCancel:()=>{l(null),d(null)},children:(0,q.jsxs)(x_,{children:[(0,q.jsxs)(S_,{children:[(0,q.jsx)(C_,{children:`Первый раунд`}),(0,q.jsx)(w_,{children:`Назначить "слабую" тему`})]}),(0,q.jsx)(T_,{ref:f,children:n.map(e=>{let t=(r[e.id]??[]).map(e=>({id:`player-${e}`,label:h[e]})),n=(i[e.id]??[]).map(e=>({index:e,label:h[e]})),a=E===e.id;return(0,q.jsxs)(E_,{children:[(0,q.jsxs)(D_,{"data-theme-card":!0,$height:p,$disabled:a,children:[(0,q.jsx)(O_,{children:e.title}),(0,q.jsx)(k_,{children:e.description})]}),(0,q.jsx)(V_,{zoneId:`zone-${e.id}`,isOver:c===`zone-${e.id}`,disabled:a,strongPlayers:t,cutPlayers:n})]},e.id)})}),(0,q.jsx)(M_,{children:w.map(e=>{let t=e.index===v,n=(0,q.jsx)(B_,{id:`player-${e.index}`,playerIndex:e.index,label:e.label,current:t,targetable:C.has(e.index),readonly:!C.has(e.index)},e.index);return t?(0,q.jsxs)(N_,{children:[n,(0,q.jsx)(P_,{children:`делает выбор`})]},e.index):n})}),(0,q.jsx)(L_,{children:(0,q.jsx)(R_,{type:`button`,disabled:!T,onClick:()=>e(`/game/round/1/play`),children:`Дальше`})})]})})},U_={participantIndexes:[],winnerIndex:null,nextPath:`/game/hunter-reveal`,extraQuestionIndex:0,sessionId:0},W_=Cl({name:`gameTieBreak`,initialState:U_,reducers:{startTieBreak:(e,t)=>{e.participantIndexes=t.payload.participantIndexes,delete e.remainingIndexes,e.winnerIndex=null,e.sessionId=(e.sessionId??0)+1,e.nextPath=t.payload.nextPath??`/game/hunter-reveal`},setTieBreakWinner:(e,t)=>{e.winnerIndex=t.payload},repeatTieBreak:(e,t)=>{e.remainingIndexes=t.payload,e.winnerIndex=null,e.extraQuestionIndex=(e.extraQuestionIndex??0)+1},consumeExtraQuestion:e=>{e.extraQuestionIndex=(e.extraQuestionIndex??0)+1},resetTieBreak:()=>U_}}),{startTieBreak:G_,repeatTieBreak:K_,setTieBreakWinner:q_,consumeExtraQuestion:J_,resetTieBreak:Y_}=W_.actions,X_=W_.reducer,Z_=({id:e,label:t,assigned:n=!1})=>{let{attributes:r,listeners:i,setNodeRef:a,transform:o,isDragging:s}=g_({id:e}),c={transform:$m.Translate.toString(o)};return(0,q.jsx)(n?I_:F_,{ref:a,style:c,type:`button`,$dragging:s,$active:n,...i,...r,children:t})},Q_=({zoneId:e,isOver:t,players:n})=>{let{setNodeRef:r}=b_({id:e});return(0,q.jsx)(A_,{ref:r,$over:t,children:n.length?n.map(e=>(0,q.jsx)(Z_,{id:e.id,label:e.label,assigned:!0},e.id)):(0,q.jsx)(j_,{children:`Перетащи игрока сюда`})})},$_=()=>{let e=wt(),t=Lo(),n=J(e=>e.roundOne.themes),r=J(e=>e.gameRoundOne.strongAssignments),{players:i,isFourthActive:a}=J(e=>e.players);(0,x.useEffect)(()=>{t(Y_())},[t]);let o=(0,x.useMemo)(()=>i.slice(0,a?4:3),[a,i]),[s,c]=(0,x.useState)(null),l=(0,x.useRef)(null),[u,d]=(0,x.useState)(180);(0,x.useLayoutEffect)(()=>{let e=l.current;if(!e)return;let t=()=>{let t=Array.from(e.querySelectorAll(`[data-theme-card]`));if(!t.length)return;t.forEach(e=>{e.style.height=`auto`});let n=Math.max(180,...t.map(e=>e.scrollHeight));t.forEach(e=>{e.style.removeProperty(`height`)}),d(n+10)};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[n]);let f=o.map(e=>`${e.firstName} ${e.lastName}`.trim()),p=new Set(Object.values(r).flat()),m=o.map((e,t)=>({index:t,label:`${e.firstName} ${e.lastName}`.trim()})).filter(e=>!p.has(e.index)),h=p.size===o.length;return(0,q.jsx)(f_,{onDragMove:e=>{c(e.over?String(e.over.id):null)},onDragEnd:e=>{let{active:n,over:r}=e;if(c(null),!r)return;let i=String(n.id),a=String(r.id);!i.startsWith(`player-`)||!a.startsWith(`zone-`)||t(Ll({playerIndex:Number(i.replace(`player-`,``)),themeId:a.replace(`zone-`,``)}))},onDragCancel:()=>c(null),children:(0,q.jsxs)(x_,{children:[(0,q.jsxs)(S_,{children:[(0,q.jsx)(C_,{children:`Первый раунд`}),(0,q.jsx)(w_,{children:`Выбор "сильной" темы`})]}),(0,q.jsx)(T_,{ref:l,children:n.map(e=>{let t=(r[e.id]??[]).map(e=>({id:`player-${e}`,label:f[e]}));return(0,q.jsxs)(E_,{children:[(0,q.jsxs)(D_,{"data-theme-card":!0,$height:u,children:[(0,q.jsx)(O_,{children:e.title}),(0,q.jsx)(k_,{children:e.description})]}),(0,q.jsx)(Q_,{zoneId:`zone-${e.id}`,isOver:s===`zone-${e.id}`,players:t})]},e.id)})}),(0,q.jsx)(M_,{children:m.map(e=>(0,q.jsx)(Z_,{id:`player-${e.index}`,label:e.label},e.index))}),(0,q.jsx)(L_,{children:(0,q.jsx)(R_,{type:`button`,disabled:!h,onClick:()=>e(`/game/round/1/cut`),children:`Дальше`})})]})})},ev=G`
  font-family: inherit;
  font-size: clamp(22px, 1.4vw, 26px);
  font-weight: 500;
  line-height: 1.4;
`,tv=G`
  ${ev}
  font-size: clamp(28px, 2vw, 36px);
`,nv=G`
  ${ev}
  font-size: clamp(24px, 1.5vw, 28px);
`,rv=ho`
  0% { transform: scale(1); }
  35% { transform: scale(1.18); }
  100% { transform: scale(1); }
`,iv=K.div`
  display: grid;
  gap: 12px;
`,av=K.div`
  display: grid;
  grid-template-columns: 260px minmax(760px, 1fr) 240px;
  gap: 16px;
  align-items: start;
`,ov=K.div`
  height: 76vh;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: start;
`,sv=K.button`
  width: 100%;
  min-height: 46px;
  padding: 0 18px;
  border: 1px solid #16a34a;
  border-radius: 12px;
  background: #16a34a;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: #22c55e;
    border-color: #4ade80;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,cv=K.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`,lv=K.div`
  display: grid;
  gap: 12px;
  min-width: 0;
  align-self: start;
`;K.h2`
  margin: 0;
  text-align: center;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.text};
`;var uv=K.div`
  position: relative;
  min-height: 76vh;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 24px;
  overflow: hidden;
  background: ${({theme:e})=>e.colors.surface};
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
`,dv=K.div`
  display: grid;
  place-items: center;
  min-height: 76px;
  padding: 16px 24px;
  text-align: center;
  overflow-wrap: anywhere;
  ${ev}
  background: rgba(255,255,255,0.025);
`,fv=K(dv)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,pv=K.div`
  position: relative;
  width: 100%;
  /* Keep the original image area independent of the caption's line count. */
  height: calc(76vh - ${({$answer:e})=>e?`67.4px`:`49.3px`});
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.08);
`,mv=K.img`
  width: 100%;
  height: 100%;
  min-height: 0;
  object-fit: contain;
  display: block;
  background: rgba(0, 0, 0, 0.08);
`,hv=K.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: ${({theme:e})=>e.colors.mutedText};
  font-size: 18px;
`,gv=K.div`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 18px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.surfaceAlt};
  color: ${({theme:e})=>e.colors.text};
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  text-align: center;
`,_v=K(dv)`
  ${nv}
  flex: 1;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,vv=K.div`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  place-items: center;
  background: rgba(10, 12, 18, 0.22);
  padding: 24px;
  box-sizing: border-box;
`,yv=K.div`
  grid-row: 1;
  align-self: end;
  max-width: 760px;
  margin-bottom: 28px;
  padding: 0 24px;
  text-align: center;
  font-size: 22px;
  line-height: 1.45;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text};
`,bv=K.div`
  grid-row: 2;
  width: min(420px, calc(100% - 32px));
  padding: 20px;
  border-radius: 16px;
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  box-shadow: 0 18px 36px rgba(0,0,0,0.22);
  display: grid;
  gap: 16px;
  justify-items: center;
  text-align: center;
`,xv=K.div`
  font-size: 20px;
  font-weight: 800;
`;K.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;var Sv=K.button`
  min-width: 140px;
  min-height: 46px;
  padding: 0 18px;
  border: 1px solid #ef4444;
  border-radius: 12px;
  background: #ef4444;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;K.button`
  width: 46px;
  height: 46px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  font-size: 22px;
  cursor: pointer;
`;var Cv=K.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 82px;
  height: 82px;
  z-index: 2;
`,wv=K.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(#ef4444 ${({$progress:e})=>`${e}%`}, rgba(255,255,255,0.1) 0);
  display: grid;
  place-items: center;
  box-shadow: 0 12px 28px rgba(0,0,0,0.16);

  &::after {
    content: '';
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.surface};
    position: absolute;
  }
`,Tv=K.div`
  position: relative;
  z-index: 1;
  font-size: 24px;
  font-weight: 800;
`,Ev=K.div`
  height: 76vh;
  border-radius: 24px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  border: 1px solid ${({theme:e})=>e.colors.border};
  align-self: start;
`,Dv=K.div`
  padding: 14px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({$kind:e})=>e===`strong`?`rgba(34,197,94,0.12)`:e===`cut`?`rgba(239,68,68,0.12)`:`rgba(255,255,255,0.03)`};
  display: grid;
  align-content: start;
  gap: 10px;

  &:last-child { border-bottom: none; }
`,Ov=K.div`
  font-size: 13px;
  font-weight: 700;
  opacity: 0.9;
`,kv=K.div`
  min-height: 56px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid ${({$kind:e})=>e===`strong`?`#22c55e`:e===`cut`?`#ef4444`:`rgba(255,255,255,0.12)`};
  background: ${({$kind:e})=>e===`strong`?`rgba(34,197,94,0.16)`:e===`cut`?`rgba(239,68,68,0.16)`:`rgba(255,255,255,0.04)`};
  display: grid;
  place-items: center;
  text-align: center;
  font-weight: 700;
`,Av=e=>e===1?`#e8b923`:e===2?`#b9c2ce`:e===3?`#b87333`:null,jv=K.div`
  position: relative;
  width: 100%;
  padding: 14px;
  box-sizing: border-box;
  border-radius: 18px;
  border: 1px solid ${({theme:e,$rank:t})=>Av(t)??e.colors.border};
  background:
    linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01)),
    ${({theme:e})=>e.colors.surface};
  box-shadow: ${({$rank:e})=>e&&e<=3?`0 8px 22px ${Av(e)}22`:`none`};
  display: grid;
  gap: 12px;
  transition: border-color 0.35s ease, box-shadow 0.35s ease;
`,Mv=K.div`
  position: absolute;
  top: -15px;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  width: 30px;
  height: 22px;
  color: ${({$rank:e})=>Av(e)};
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.35));

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    stroke: rgba(255,255,255,0.28);
    stroke-width: 0.7;
  }
`,Nv=K.div`
  font-weight: 700;
  text-align: center;
`,Pv=K.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,Fv=K.button`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background: rgba(255,255,255,0.04);
  cursor: pointer;
  font-size: 18px;
`,Iv=K.div`
  min-width: 64px;
  min-height: 42px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 800;
  animation: ${({$bump:e})=>e?G`${rv} 0.3s`:`none`};
`,Lv=K.input`
  width: 72px;
  min-height: 42px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
  font-size: 20px;
  font-weight: 800;
`,Rv=K.button`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
  font-size: 20px;

  &:disabled {
    opacity: 0.38;
    cursor: not-allowed;
  }
`,zv=K(Rv)`
  font-size: 22px;
`,Bv=K.button`
  width: 100%;
  min-height: 46px;
  margin-top: auto;
  padding: 0 18px;
  border: 1px solid #5b7fc4;
  border-radius: 12px;
  background: #496cae;
  color: white;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #567bbb;
    border-color: #6f91cf;
  }
`,Vv=()=>(0,q.jsxs)(`svg`,{viewBox:`0 0 32 24`,"aria-hidden":`true`,children:[(0,q.jsx)(`path`,{d:`M3 6.5 9.5 12 16 3l6.5 9L29 6.5l-2.4 13H5.4L3 6.5Z`}),(0,q.jsx)(`path`,{d:`M6 19.5h20`})]}),Hv=()=>{let e=Lo(),t=wt(),n=xt(),r=J(e=>e.roundOne),{strongAssignments:i,cutAssignments:a,currentThemeIndex:o,currentQuestionIndex:s}=J(e=>e.gameRoundOne),c=J(e=>e.gameScores.values),{players:l,isFourthActive:u}=J(e=>e.players),d=(0,x.useMemo)(()=>l.slice(0,u?4:3),[u,l]),f=r.themes[o],p=f?.questions?.[s],m=s===0,h=r.timeLimitSeconds||10,g=(0,x.useMemo)(()=>Jf(`roundOnePlay`),[]),_=g?.themeIndex===o&&g?.questionIndex===s,[v,y]=(0,x.useState)(()=>_?g.phase:`intro`),[b,S]=(0,x.useState)(()=>_?g.secondsLeft:h),[C,w]=(0,x.useState)(null),[T,E]=(0,x.useState)(()=>_?g.editingPlayer:null),[D,O]=(0,x.useState)(()=>_?g.draftScore:``),[k,A]=(0,x.useState)(()=>_?g.awardedPlayers:{}),[ee,j]=(0,x.useState)(()=>g?.rankingOrder?.length?g.rankingOrder:d.map((e,t)=>t)),[M,N]=(0,x.useState)(()=>g?.displayedRanks??{}),[te,P]=(0,x.useState)(()=>g?.rankingReady??!1),F=(0,x.useRef)(new Map),ne=(0,x.useRef)(new Map);(0,x.useEffect)(()=>{new URLSearchParams(n.search).has(`jump`)&&(y(`intro`),S(h),A({}),E(null),O(``))},[n.search,h]),(0,x.useEffect)(()=>{_||A({})},[p?.id]),(0,x.useEffect)(()=>{Yf(`roundOnePlay`,{themeIndex:o,questionIndex:s,phase:v,secondsLeft:b,awardedPlayers:k,rankingOrder:ee,displayedRanks:M,rankingReady:te,editingPlayer:T,draftScore:D})},[o,s,v,b,k,ee,M,te,T,D]),(0,x.useEffect)(()=>{j(e=>{let t=d.map((e,t)=>t),n=e.filter(e=>t.includes(e)),r=t.filter(e=>!n.includes(e));return[...n,...r]})},[d]),(0,x.useLayoutEffect)(()=>{ne.current.size!==0&&(F.current.forEach((e,t)=>{let n=ne.current.get(t);if(n===void 0)return;let r=n-e.getBoundingClientRect().top;Math.abs(r)<1||e.animate([{transform:`translateY(${r}px)`,zIndex:`3`},{transform:`translateY(0)`,zIndex:`3`}],{duration:650,easing:`cubic-bezier(0.22, 1, 0.36, 1)`})}),ne.current.clear())},[ee]),(0,x.useEffect)(()=>{if(v!==`question`||b<=0)return;let e=window.setTimeout(()=>S(e=>e-1),1e3);return()=>window.clearTimeout(e)},[v,b]);let re=d.map(e=>`${e.firstName} ${e.lastName}`.trim()),ie=new Set(i[f?.id??``]??[]),I=new Set(a[f?.id??``]??[]),L=d.map((e,t)=>t).filter(e=>ie.has(e)),R=d.map((e,t)=>t).filter(e=>I.has(e)),z=d.map((e,t)=>t).filter(e=>!ie.has(e)&&!I.has(e)),B=b/h*100,ae=e=>ie.has(e)?150:I.has(e)?50:100,oe=t=>{if(k[t]!==void 0)return;let n=ae(t);e(Wl({playerIndex:t,amount:n})),A(e=>({...e,[t]:n})),w(t),window.setTimeout(()=>w(null),350)},se=t=>{let n=k[t];n!==void 0&&(e(Wl({playerIndex:t,amount:-n})),A(e=>{let n={...e};return delete n[t],n}),w(t),window.setTimeout(()=>w(null),350))},ce=e=>{E(e),O(String(c[e]??0))},le=t=>{let n=Number(D);e(Gl({playerIndex:t,value:Number.isFinite(n)?n:0})),E(null),O(``)},ue=()=>{S(h),y(`question`)},V=()=>{v===`question`&&(S(0),y(`answer`))},de=()=>{ne.current.clear(),F.current.forEach((e,t)=>ne.current.set(t,e.getBoundingClientRect().top));let e=Array.from(new Set(d.map((e,t)=>c[t]??0))).sort((e,t)=>t-e);N(Object.fromEntries(d.map((t,n)=>[n,e.indexOf(c[n]??0)+1]))),j(e=>[...e].sort((t,n)=>{let r=(c[n]??0)-(c[t]??0);return r===0?e.indexOf(t)-e.indexOf(n):r})),P(!0)},fe=()=>{if(!f)return;let n=s<f.questions.length-1,i=o<r.themes.length-1;if(n)e(zl({themeIndex:o,questionIndex:s+1}));else if(i)de(),e(zl({themeIndex:o+1,questionIndex:0}));else{de(),window.setTimeout(()=>t(`/game/hunter-reveal`),700);return}y(`intro`),S(h),A({}),E(null),O(``)};if(!f||!p)return null;let pe=v===`question`,me=v===`answer`,he=p.questionImage||p.image,ge=p.answerImage;return(0,q.jsx)(iv,{children:(0,q.jsxs)(av,{children:[(0,q.jsxs)(Ev,{children:[(0,q.jsxs)(Dv,{$kind:`strong`,children:[(0,q.jsx)(Ov,{children:`Сильная тема +150`}),L.map(e=>(0,q.jsx)(kv,{$kind:`strong`,children:re[e]},`strong-${e}`))]}),(0,q.jsxs)(Dv,{$kind:`neutral`,children:[(0,q.jsx)(Ov,{children:`Обычная тема +100`}),z.map(e=>(0,q.jsx)(kv,{$kind:`neutral`,children:re[e]},`neutral-${e}`))]}),(0,q.jsxs)(Dv,{$kind:`cut`,children:[(0,q.jsx)(Ov,{children:`Слабая тема +50`}),R.map(e=>(0,q.jsx)(kv,{$kind:`cut`,children:re[e]},`cut-${e}`))]})]}),(0,q.jsxs)(lv,{children:[(0,q.jsxs)(uv,{children:[pe&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(fv,{children:p.text}),(0,q.jsxs)(pv,{children:[he?(0,q.jsx)(mv,{src:he,alt:`Вопрос первого раунда`}):(0,q.jsx)(hv,{children:`Картинка вопроса`}),(0,q.jsx)(Cv,{children:(0,q.jsx)(wv,{$progress:B,children:(0,q.jsx)(Tv,{children:b})})})]})]}),me&&(0,q.jsxs)(q.Fragment,{children:[ge&&(0,q.jsx)(pv,{$answer:!0,children:(0,q.jsx)(mv,{src:ge,alt:`Ответ первого раунда`})}),(0,q.jsx)(_v,{children:p.answer})]}),v===`intro`&&(0,q.jsxs)(vv,{children:[m&&f.description.trim()!==``&&(0,q.jsx)(yv,{children:f.description}),(0,q.jsxs)(bv,{children:[(0,q.jsx)(xv,{children:`Показать вопрос?`}),(0,q.jsx)(Sv,{type:`button`,onClick:ue,children:`Старт`})]})]})]}),me&&p.comment.trim()!==``&&(0,q.jsx)(gv,{children:p.comment})]}),(0,q.jsxs)(ov,{children:[(0,q.jsx)(sv,{type:`button`,onClick:V,disabled:v!==`question`,children:`Показать ответ`}),(0,q.jsx)(cv,{children:ee.map(e=>{if(!d[e])return null;let t=k[e]!==void 0,n=te?M[e]:void 0;return(0,q.jsxs)(jv,{$rank:n,ref:t=>{t?F.current.set(e,t):F.current.delete(e)},children:[n!==void 0&&n<=3&&(0,q.jsx)(Mv,{$rank:n,"aria-label":`${n} место`,title:`${n} место`,children:(0,q.jsx)(Vv,{})}),(0,q.jsx)(Nv,{children:re[e]}),(0,q.jsxs)(Pv,{children:[(0,q.jsx)(Fv,{type:`button`,onClick:()=>T===e?le(e):ce(e),children:T===e?`✅`:`✏️`}),T===e?(0,q.jsx)(Lv,{value:D,onChange:e=>O(e.target.value),inputMode:`numeric`}):(0,q.jsx)(Iv,{$bump:C===e,children:c[e]??0}),(0,q.jsx)(Rv,{type:`button`,onClick:()=>oe(e),disabled:t,"aria-label":`Начислить баллы`,title:`Начислить баллы`,children:`👍`}),(0,q.jsx)(zv,{type:`button`,onClick:()=>se(e),disabled:!t,"aria-label":`Отменить начисление`,title:`Отменить начисление`,children:`↶`})]})]},e)})}),(0,q.jsx)(Bv,{type:`button`,onClick:fe,children:`Продолжить`})]})]})})};function Uv({side:e}){return(0,q.jsx)(`svg`,{viewBox:`0 0 40 40`,width:`1em`,height:`1em`,role:`img`,"aria-label":e===`hunter`?`Охотник`:`Стая`,style:{verticalAlign:`-0.12em`,flexShrink:0},children:e===`hunter`?(0,q.jsxs)(`g`,{children:[(0,q.jsx)(`path`,{d:`M4 38c1-9 6-13 16-13s15 4 16 13Z`,fill:`#70538e`}),(0,q.jsx)(`path`,{d:`m11 29 9 9h6L15 27Z`,fill:`#372b49`}),(0,q.jsx)(`path`,{d:`M8 16C8 7 13 2 20 2s12 5 12 14v5c0 7-6 11-12 11S8 28 8 21Z`,fill:`#55416f`}),(0,q.jsx)(`path`,{d:`M10 14q10-4 20 0v5q-10 4-20 0Z`,fill:`#f5c78e`}),(0,q.jsx)(`path`,{d:`m9 20 11 2 11-3c0 7-5 12-11 12S10 27 9 20Z`,fill:`#352b49`}),(0,q.jsx)(`path`,{d:`m13 15 4 1m6 0 4-1`,fill:`none`,stroke:`#302836`,strokeWidth:`2`,strokeLinecap:`round`}),(0,q.jsx)(`path`,{d:`m31 11 6-4-1 6-5 2 6 2-2 3-5-5Z`,fill:`#8968aa`})]}):(0,q.jsxs)(`g`,{children:[(0,q.jsx)(`path`,{d:`M5 3 16 10q4-2 8 0L35 3l-1 17 4 6-10 2-8 10-8-10-10-2 4-6Z`,fill:`#aab1bd`}),(0,q.jsx)(`path`,{d:`m8 7 6 6-5 3Zm24 0-1 9-5-3Z`,fill:`#625d70`}),(0,q.jsx)(`path`,{d:`m5 22 10-4 5 8 5-8 10 4-9 5-6 9-6-9Z`,fill:`#e8eaec`}),(0,q.jsx)(`path`,{d:`m10 18 6 2m8 0 6-2`,fill:`none`,stroke:`#343743`,strokeWidth:`2.5`,strokeLinecap:`round`}),(0,q.jsx)(`path`,{d:`M15 26q5-3 10 0l-5 6Z`,fill:`#333741`})]})})}var Wv=K.div`
  position: relative;
  height: calc(100dvh - 124px);
  min-height: 0;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  padding: 58px 0 60px;
  overflow: hidden;
`,Gv=K.h1`
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  white-space: nowrap;
`,Kv=K.div`
  width: min(1080px, 100%);
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  gap: 52px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`,qv=K.div`
  width: min(760px, 100%);
  display: grid;
  gap: 22px;
  align-content: center;
`,Jv=K.h2`
  margin: 0;
  text-align: center;
  font-size: 30px;
  font-weight: 900;
`,Yv=K.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
`,Xv=K.section`
  display: grid;
  gap: 18px;
  align-content: center;
`,Zv=K.h2`
  margin: 0;
  text-align: center;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 900;
`,Qv=K.div`
  display: grid;
  gap: 14px;
`,$v=K.div`
  position: relative;
  min-height: 92px;
  padding: 18px 22px;
  border-radius: 20px;
  border: 2px solid ${({$hunter:e,$selected:t})=>t?`#5b8def`:e?`#ef4444`:`rgba(255,255,255,0.14)`};
  background: ${({$hunter:e,$selected:t,theme:n})=>t?`rgba(91,141,239,.18)`:e?`rgba(239,68,68,0.12)`:n.colors.surface};
  box-shadow: ${({$selected:e})=>e?`0 0 0 4px rgba(91,141,239,.12), 0 18px 38px rgba(0,0,0,.18)`:`0 18px 38px rgba(0,0,0,0.18)`};
  display: grid;
  place-items: center;
  text-align: center;
  font-size: 22px;
  font-weight: 800;
  cursor: ${({$selectable:e})=>e?`pointer`:`default`};
  transition: border-color .2s ease, background .2s ease, box-shadow .2s ease, transform .2s ease;

  &:hover {
    transform: ${({$selectable:e})=>e?`translateY(-2px)`:`none`};
  }
`,ey=K.div`
  position: absolute;
  top: 50%;
  ${({$hunter:e})=>e?`right: 0;`:`left: 0;`}
  z-index: 2;
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  border: 1px solid ${({$hunter:e})=>e?`rgba(239,68,68,0.7)`:`rgba(255,255,255,0.22)`};
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.surface};
  box-shadow: 0 8px 20px rgba(0,0,0,0.32);
  font-size: 34px;
  line-height: 1;
  transform: ${({$hunter:e})=>e?`translate(50%, -50%)`:`translate(-50%, -50%)`};
`,ty=K.div`
  position: absolute;
  ${({$tie:e,$hunter:t})=>e?`
    left: 50%;
    bottom: 0;
  `:`
    top: 50%;
    ${t?`left: 0;`:`right: 0;`}
  `}
  z-index: 2;
  min-width: 66px;
  height: 40px;
  padding: 0 12px;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  border: 1px solid ${({$hunter:e})=>e?`rgba(239,68,68,0.7)`:`rgba(255,255,255,0.22)`};
  border-radius: 999px;
  background: ${({theme:e})=>e.colors.surface};
  box-shadow: 0 7px 18px rgba(0,0,0,0.28);
  font-size: 16px;
  line-height: 1;
  font-weight: 800;
  transform: ${({$tie:e,$hunter:t})=>e?`translate(-50%, 50%)`:t?`translate(-50%, -50%)`:`translate(50%, -50%)`};
`,ny=K.div`
  min-width: 100px;
  text-align: center;
  font-size: 42px;
  line-height: 1;
  font-weight: 1000;
  letter-spacing: 0.08em;
  opacity: 0.9;

  @media (max-width: 900px) {
    transform: rotate(90deg);
  }
`,ry=K.button`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 190px;
  min-height: 48px;
  padding: 0 20px;
  border: 1px solid #5b7fc4;
  border-radius: 12px;
  background: #496cae;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover:not(:disabled) {
    background: #567bbb;
    border-color: #6f91cf;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: .42;
    cursor: not-allowed;
  }
`,iy=()=>{let e=Lo(),t=wt(),n=J(e=>e.gameScores.values),r=J(e=>e.gameTieBreak),i=J(e=>e.gameRoundTwo),a=J(e=>e.roundTwo.blocks),o=a[0]?.questions.length??0,{players:s,isFourthActive:c}=J(e=>e.players),l=(0,x.useMemo)(()=>s.slice(0,c?4:3),[c,s]),u=(0,x.useMemo)(()=>{if(l.length===0)return[];let e=Math.max(...l.map((e,t)=>n[t]??0));return l.map((e,t)=>t).filter(t=>(n[t]??0)===e)},[l,n]),d=(0,x.useMemo)(()=>{if(r.winnerIndex===null||r.participantIndexes.length!==u.length)return!1;let e=new Set(u);return e.has(r.winnerIndex)&&r.participantIndexes.every(t=>e.has(t))},[r.participantIndexes,r.winnerIndex,u]),f=i.hunterIndex!==null,p=f&&i.currentDuelIndex>=0&&i.opponentOrder.length>0,m=!f&&u.length>1&&!d,h=(0,x.useMemo)(()=>i.hunterIndex===null?l.length===0?-1:d&&r.winnerIndex!==null?r.winnerIndex:u[0]??0:i.hunterIndex,[l.length,i.hunterIndex,r.winnerIndex,d,u]),g=e=>{let t=l[e];return`${t.firstName} ${t.lastName}`.trim()};if(m)return(0,q.jsxs)(Wv,{children:[(0,q.jsxs)(qv,{children:[(0,q.jsx)(Jv,{children:`Ничья. Будет разыгран дополнительный вопрос`}),(0,q.jsx)(Yv,{children:u.map(e=>(0,q.jsxs)($v,{children:[(0,q.jsx)(`div`,{children:g(e)}),(0,q.jsx)(ty,{$tie:!0,children:n[e]??0})]},e))})]}),(0,q.jsx)(ry,{type:`button`,onClick:()=>{e(G_({participantIndexes:u,nextPath:`/game/hunter-reveal`})),t(`/game/tie-break`)},children:`Доп. вопрос →`})]});let _=l.map((e,t)=>t).filter(e=>e!==h),v=p?i.opponentOrder.slice(0,i.currentDuelIndex+1):[],y=p?_.filter(e=>!v.includes(e)):_;if(!l[h])return null;let b=l.length===3&&v.length===2,S=b?-1:i.opponentIndex,C=S!==null&&(b||y.includes(S)),w=p?i.currentDuelIndex+2:1;return(0,q.jsxs)(Wv,{children:[(0,q.jsx)(Gv,{children:`Выберите соперника`}),(0,q.jsxs)(Kv,{children:[(0,q.jsxs)(Xv,{children:[(0,q.jsx)(Zv,{children:`Стая`}),(0,q.jsxs)(Qv,{children:[b&&(0,q.jsxs)($v,{$selected:!0,children:[(0,q.jsx)(ey,{"aria-hidden":`true`,children:(0,q.jsx)(Uv,{side:`pack`})}),`Бонусная дуэль`]}),y.map(t=>(0,q.jsxs)($v,{$selectable:!0,$selected:S===t,onClick:()=>e(Ql(t)),children:[(0,q.jsx)(ey,{"aria-hidden":`true`,children:(0,q.jsx)(Uv,{side:`pack`})}),(0,q.jsx)(`div`,{children:g(t)}),(0,q.jsx)(ty,{children:n[t]??0})]},t))]})]}),(0,q.jsx)(ny,{children:`VS`}),(0,q.jsxs)(Xv,{children:[(0,q.jsx)(Zv,{children:`Охотник`}),(0,q.jsx)(Qv,{children:(0,q.jsxs)($v,{$hunter:!0,children:[(0,q.jsx)(ey,{$hunter:!0,"aria-hidden":`true`,children:(0,q.jsx)(Uv,{side:`hunter`})}),(0,q.jsx)(`div`,{children:g(h)}),(0,q.jsx)(ty,{$hunter:!0,children:n[h]??0})]})})]})]}),(0,q.jsx)(ry,{type:`button`,disabled:!C,onClick:()=>{if(!(!C||S===null)){if(p){let n=a[i.currentDuelIndex+1]?.questions.length??0;if(!n)return;e(su({opponentIndex:S,questionCount:n})),t(`/game/round/2`);return}e(Zl({hunterIndex:h,opponentIndex:S,opponentOrder:[S,...y.filter(e=>e!==S)],questionCount:o})),t(`/game/round/2`)}},children:b?`Перейти к бонусной дуэли →`:p?`Перейти к дуэли ${w} →`:`Второй раунд →`})]})};function ay(e,t,n){let r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function oy(e,t){return e.reduce((e,n,r)=>{let i=t.get(n);return i&&(e[r]=i),e},Array(e.length))}function sy(e){return e!==null&&e>=0}function cy(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function ly(e){return typeof e==`boolean`?{draggable:e,droppable:e}:e}var uy=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e,a=ay(t,r,n),o=t[i],s=a[i];return!s||!o?null:{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}},dy={scaleX:1,scaleY:1},fy=e=>{let{activeIndex:t,activeNodeRect:n,index:r,rects:i,overIndex:a}=e,o=i[t]??n;if(!o)return null;if(r===t){let e=i[a];return e?{x:0,y:t<a?e.top+e.height-(o.top+o.height):e.top-o.top,...dy}:null}let s=py(i,r,t);return r>t&&r<=a?{x:0,y:-o.height-s,...dy}:r<t&&r>=a?{x:0,y:o.height+s,...dy}:{x:0,y:0,...dy}};function py(e,t,n){let r=e[t],i=e[t-1],a=e[t+1];return r?n<t?i?r.top-(i.top+i.height):a?a.top-(r.top+r.height):0:a?a.top-(r.top+r.height):i?r.top-(i.top+i.height):0:0}var my=`Sortable`,hy=x.createContext({activeIndex:-1,containerId:my,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:uy,disabled:{draggable:!1,droppable:!1}});function gy(e){let{children:t,id:n,items:r,strategy:i=uy,disabled:a=!1}=e,{active:o,dragOverlay:s,droppableRects:c,over:l,measureDroppableContainers:u}=__(),d=Gm(my,n),f=s.rect!==null,p=(0,x.useMemo)(()=>r.map(e=>typeof e==`object`&&`id`in e?e.id:e),[r]),m=o!=null,h=o?p.indexOf(o.id):-1,g=l?p.indexOf(l.id):-1,_=(0,x.useRef)(p),v=!cy(p,_.current),y=g!==-1&&h===-1||v,b=ly(a);Lm(()=>{v&&m&&u(p)},[v,p,m,u]),(0,x.useEffect)(()=>{_.current=p},[p]);let S=(0,x.useMemo)(()=>({activeIndex:h,containerId:d,disabled:b,disableTransforms:y,items:p,overIndex:g,useDragOverlay:f,sortedRects:oy(p,c),strategy:i}),[h,d,b.draggable,b.droppable,y,p,g,c,f,i]);return x.createElement(hy.Provider,{value:S},t)}var _y=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return ay(n,r,i).indexOf(t)},vy=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:c,transition:l}=e;return!l||!r||s!==a&&i===o?!1:n?!0:o!==i&&t===c},yy={duration:200,easing:`ease`},by=`transform`,xy=$m.Transition.toString({property:by,duration:0,easing:`linear`}),Sy={roleDescription:`sortable`};function Cy(e){let{disabled:t,index:n,node:r,rect:i}=e,[a,o]=(0,x.useState)(null),s=(0,x.useRef)(n);return Lm(()=>{if(!t&&n!==s.current&&r.current){let e=i.current;if(e){let t=Mh(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&o(n)}}n!==s.current&&(s.current=n)},[t,n,r,i]),(0,x.useEffect)(()=>{a&&o(null)},[a]),a}function wy(e){let{animateLayoutChanges:t=vy,attributes:n,disabled:r,data:i,getNewIndex:a=_y,id:o,strategy:s,resizeObserverConfig:c,transition:l=yy}=e,{items:u,containerId:d,activeIndex:f,disabled:p,disableTransforms:m,sortedRects:h,overIndex:g,useDragOverlay:_,strategy:v}=(0,x.useContext)(hy),y=Ty(r,p),b=u.indexOf(o),S=(0,x.useMemo)(()=>({sortable:{containerId:d,index:b,items:u},...i}),[d,i,b,u]),C=(0,x.useMemo)(()=>u.slice(u.indexOf(o)),[u,o]),{rect:w,node:T,isOver:E,setNodeRef:D}=b_({id:o,data:S,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:C,...c}}),{active:O,activatorEvent:k,activeNodeRect:A,attributes:ee,setNodeRef:j,listeners:M,isDragging:N,over:te,setActivatorNodeRef:P,transform:F}=g_({id:o,data:S,attributes:{...Sy,...n},disabled:y.draggable}),ne=Om(D,j),re=!!O,ie=re&&!m&&sy(f)&&sy(g),I=!_&&N,L=ie?(I&&ie?F:null)??(s??v)({rects:h,activeNodeRect:A,activeIndex:f,overIndex:g,index:b}):null,R=sy(f)&&sy(g)?a({id:o,items:u,activeIndex:f,overIndex:g}):b,z=O?.id,B=(0,x.useRef)({activeId:z,items:u,newIndex:R,containerId:d}),ae=u!==B.current.items,oe=t({active:O,containerId:d,isDragging:N,isSorting:re,id:o,index:b,items:u,newIndex:B.current.newIndex,previousItems:B.current.items,previousContainerId:B.current.containerId,transition:l,wasDragging:B.current.activeId!=null}),se=Cy({disabled:!oe,index:b,node:T,rect:w});return(0,x.useEffect)(()=>{re&&B.current.newIndex!==R&&(B.current.newIndex=R),d!==B.current.containerId&&(B.current.containerId=d),u!==B.current.items&&(B.current.items=u)},[re,R,d,u]),(0,x.useEffect)(()=>{if(z===B.current.activeId)return;if(z!=null&&B.current.activeId==null){B.current.activeId=z;return}let e=setTimeout(()=>{B.current.activeId=z},50);return()=>clearTimeout(e)},[z]),{active:O,activeIndex:f,attributes:ee,data:S,rect:w,index:b,newIndex:R,items:u,isOver:E,isSorting:re,isDragging:N,listeners:M,node:T,overIndex:g,over:te,setNodeRef:ne,setActivatorNodeRef:P,setDroppableNodeRef:D,setDraggableNodeRef:j,transform:se??L,transition:ce()};function ce(){if(se||ae&&B.current.newIndex===b)return xy;if(!(I&&!Xm(k)||!l)&&(re||oe))return $m.Transition.toString({...l,property:by})}}function Ty(e,t){return typeof e==`boolean`?{draggable:e,droppable:!1}:{draggable:e?.draggable??t.draggable,droppable:e?.droppable??t.droppable}}sg.Down,sg.Right,sg.Up,sg.Left;var Ey=K.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-bottom: 20px;
`,Dy=K.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Oy=K.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  padding: 0 12px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
`,ky=K.div`
  font-weight: 700;
  white-space: nowrap;
`,Ay=K.input`
  width: 84px;
  min-height: 36px;
  padding: 0 10px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 10px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  font-weight: 700;
`,jy=K.button`
  width: 36px;
  height: 36px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 10px;
  background: transparent;
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
  font-size: 18px;
`,My=K.h2`
  margin: 0;
  font-size: 28px;
`,Ny=K.button`
  min-width: 140px;
  padding: 10px 14px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.text};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`,Py=K.div`
  display: grid;
  gap: 16px;
`,Fy=K.div`
  ${({$dragging:e})=>e&&G`
    opacity: 0.84;
    transform: scale(1.01);
  `}
`,Iy=K.div`
  padding: 18px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01)), ${({theme:e})=>e.colors.surface};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
`,Ly=K.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
`,Ry=K.div`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  gap: 12px;
  align-items: center;
`,zy=K.div`
  min-width: 0;
`,By=K.p`
  margin: 4px 0 0;
  color: ({ theme }) => theme.colors.text;
  font-size: 13px;
  line-height: 1.35;
  opacity: 0.62;
  overflow-wrap: anywhere;
`,Vy=K.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,Hy=K.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.mutedText};
`,Uy=K.div`
  position: relative;
  width: 212px;
  flex: 0 0 212px;
`,Wy=K.button`
  width: 212px;
  height: 42px;
  padding: 0 46px 0 14px;
  border: 1px solid ${({theme:e,$color:t})=>t??e.colors.border};
  border-radius: 12px;
  background: ${({$color:e})=>e?`${e}18`:`rgba(255,255,255,0.04)`};
  color: ${({theme:e,$color:t})=>t??e.colors.text};
  font: inherit;
  font-weight: ${({$color:e})=>e?700:500};
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: ${({$color:e})=>e?`${e}24`:`rgba(255,255,255,0.07)`};
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px ${({$color:e})=>e?`${e}28`:`rgba(96,165,250,0.2)`};
  }
`,Gy=K.span`
  position: absolute;
  top: 50%;
  right: 16px;
  width: 8px;
  height: 8px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: translateY(${({$open:e})=>e?`-30%`:`-70%`}) rotate(${({$open:e})=>e?`225deg`:`45deg`});
  pointer-events: none;
  opacity: 0.72;
  transition: transform 0.18s ease;
`,Ky=K.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 20;
  width: max-content;
  min-width: 280px;
  max-height: none;
  overflow: visible;
  padding: 6px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 14px;
  background: ${({theme:e})=>e.colors.surface};
  box-shadow: 0 16px 36px rgba(0,0,0,0.28);
  display: grid;
  gap: 4px;
`,qy=K.button`
  width: 100%;
  min-height: 38px;
  padding: 0 10px;
  border: 0;
  border-radius: 9px;
  background: ${({$color:e,$active:t})=>t&&e?`${e}18`:`transparent`};
  color: ${({theme:e,$color:t,$active:n})=>n&&t?t:e.colors.text};
  font: inherit;
  font-size: 14px;
  font-weight: ${({$active:e})=>e?700:500};
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 9px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    flex: 0 0 8px;
    border-radius: 50%;
    background: ${({$color:e})=>e??`transparent`};
    box-shadow: ${({$color:e})=>e?`0 0 0 3px ${e}18`:`none`};
  }

  &:hover {
    background: ${({$color:e})=>e?`${e}12`:`rgba(255,255,255,0.05)`};
    color: ${({theme:e,$color:t})=>t??e.colors.text};
  }
`,Jy=K.button`
  display: inline-grid;
  grid-template-columns: repeat(2, 4px);
  grid-template-rows: repeat(3, 4px);
  gap: 4px;
  align-content: center;
  justify-content: center;
  width: 36px;
  height: 38px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  cursor: grab;
  padding: 0;

  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: currentColor;
    opacity: 0.85;
  }
`,Yy=K.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.accentSoft};
  color: ${({theme:e})=>e.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
`,Xy=K.h3`
  margin: 0;
  font-size: 18px;
`,Zy=K.button`
  min-width: 110px;
  padding: 10px 12px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
`,Qy=K.div`
  margin-top: 18px;
`,$y=K.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 14px;
  margin-bottom: 16px;
`,eb=K.input`
  width: 100%;
  min-height: 44px;
  padding: 12px 14px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
`,tb=K.div`
  display: grid;
  gap: 12px;
`,nb=K.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.04);

  ${({$dragging:e})=>e&&G`
    opacity: 0.8;
    transform: scale(1.01);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.24);
  `}
`,rb=K.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 500px 44px;
  grid-template-rows: repeat(3, 48px);
  column-gap: 12px;
  row-gap: 6px;
  width: 100%;
  align-items: stretch;
`,ib=K.div`
  grid-column: 1;
  min-width: 0;

  ${eb} {
    height: 48px;
    min-height: 48px;
    box-sizing: border-box;
  }
`,ab=K.div`
  grid-column: 2;
  grid-row: 1 / span 3;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  height: 156px;
`,ob=K.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  height: 156px;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  box-sizing: border-box;

  &:hover {
    border-color: ${({theme:e})=>e.colors.accent};
    background: ${({theme:e})=>e.colors.accentSoft};
  }
`,sb=K.span`
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;

  svg {
    width: 22px;
    height: 22px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`,cb=K.input`
  display: none;
`,lb=K.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,ub=K.button`
  grid-column: 3;
  grid-row: 1 / span 3;
  align-self: center;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: transparent;
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;

  svg {
    width: 21px;
    height: 21px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  &:hover {
    background: rgba(255,255,255,0.05);
  }
`,db=K.button`
  width: 100%;
  min-height: 44px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: transparent;
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
`,fb=K.div`
  margin-top: 16px;
`,pb=()=>(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{})]}),mb=()=>(0,q.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,q.jsx)(`path`,{d:`M12 16V4`}),(0,q.jsx)(`path`,{d:`m7.5 8.5 4.5-4.5 4.5 4.5`}),(0,q.jsx)(`path`,{d:`M5 13.5v4A2.5 2.5 0 0 0 7.5 20h9a2.5 2.5 0 0 0 2.5-2.5v-4`})]}),hb=()=>(0,q.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,q.jsx)(`path`,{d:`m7.5 19.5-3-3a2.1 2.1 0 0 1 0-3L13 5a2.1 2.1 0 0 1 3 0l3 3a2.1 2.1 0 0 1 0 3l-8.5 8.5h-3Z`}),(0,q.jsx)(`path`,{d:`m11 7 6 6`}),(0,q.jsx)(`path`,{d:`M10.5 19.5H20`})]}),gb=e=>e.stopPropagation(),_b=e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(String(r.result??``)),r.onerror=n,r.readAsDataURL(e)}),vb=({themeId:e,question:t})=>{let n=Lo(),{attributes:r,listeners:i,setNodeRef:a,transform:o,transition:s,isDragging:c}=wy({id:t.id}),l=async(r,i)=>{let a=r.currentTarget,o=a.files?.[0];if(!o)return;let s=await _b(o);n(Hd({themeId:e,questionId:t.id,field:i,value:s})),a.value=``};return(0,q.jsxs)(nb,{ref:a,style:{transform:$m.Transform.toString(o),transition:s},$dragging:c,children:[(0,q.jsx)(Jy,{type:`button`,...r,...i,"aria-label":`Перетащить вопрос`,children:(0,q.jsx)(pb,{})}),(0,q.jsxs)(rb,{children:[(0,q.jsx)(ib,{children:(0,q.jsx)(eb,{placeholder:`Текст вопроса (необязательно)`,value:t.text,onKeyDown:gb,onChange:r=>n(Hd({themeId:e,questionId:t.id,field:`text`,value:r.target.value}))})}),(0,q.jsx)(ib,{children:(0,q.jsx)(eb,{placeholder:`Текст ответа *`,value:t.answer,onKeyDown:gb,onChange:r=>n(Hd({themeId:e,questionId:t.id,field:`answer`,value:r.target.value}))})}),(0,q.jsx)(ib,{children:(0,q.jsx)(eb,{placeholder:`Комментарий (необязательно)`,value:t.comment,onKeyDown:gb,onChange:r=>n(Hd({themeId:e,questionId:t.id,field:`comment`,value:r.target.value}))})}),(0,q.jsxs)(ab,{children:[(0,q.jsxs)(ob,{title:t.questionImage?`Заменить картинку вопроса`:`Загрузить картинку вопроса`,children:[t.questionImage?(0,q.jsx)(lb,{src:t.questionImage,alt:`Превью вопроса`}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(sb,{children:(0,q.jsx)(mb,{})}),(0,q.jsx)(`span`,{children:`вопрос`})]}),(0,q.jsx)(cb,{type:`file`,accept:`image/*`,onChange:e=>l(e,`questionImage`)})]}),(0,q.jsxs)(ob,{title:t.answerImage?`Заменить картинку ответа`:`Загрузить картинку ответа`,children:[t.answerImage?(0,q.jsx)(lb,{src:t.answerImage,alt:`Превью ответа`}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(sb,{children:(0,q.jsx)(mb,{})}),(0,q.jsx)(`span`,{children:`ответ`})]}),(0,q.jsx)(cb,{type:`file`,accept:`image/*`,onChange:e=>l(e,`answerImage`)})]})]}),(0,q.jsx)(ub,{type:`button`,onClick:()=>n(Ud({themeId:e,questionId:t.id})),"aria-label":`Очистить вопрос`,title:`Очистить вопрос`,children:(0,q.jsx)(hb,{})})]})]})},yb=({theme:e,index:t})=>{let n=Lo(),[r,i]=(0,x.useState)(!1),[a,o]=(0,x.useState)(!1),{attributes:s,listeners:c,setNodeRef:l,transform:u,transition:d,isDragging:f}=wy({id:e.id}),p=(0,x.useMemo)(()=>e.questions.map(e=>e.id),[e.questions]),m=e.author,h=m?cd[m]:void 0,g=({active:t,over:r})=>{!r||t.id===r.id||n(Bd({themeId:e.id,activeId:String(t.id),overId:String(r.id)}))},_=t=>{n(Vd({themeId:e.id,field:`author`,value:t})),o(!1)};return(0,q.jsx)(Fy,{ref:l,style:{transform:$m.Transform.toString(u),transition:d},$dragging:f,children:(0,q.jsxs)(Iy,{children:[(0,q.jsxs)(Ly,{children:[(0,q.jsxs)(Ry,{children:[(0,q.jsx)(Jy,{type:`button`,...s,...c,"aria-label":`Перетащить тему`,children:(0,q.jsx)(pb,{})}),(0,q.jsx)(Yy,{children:t+1}),(0,q.jsxs)(zy,{children:[(0,q.jsx)(Xy,{children:e.title||`Тема ${t+1}`}),!r&&e.description.trim()!==``&&(0,q.jsx)(By,{children:e.description})]})]}),(0,q.jsxs)(Vy,{children:[(0,q.jsxs)(Hy,{children:[(0,q.jsx)(`span`,{children:`Автор`}),(0,q.jsxs)(Uy,{onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||o(!1)},children:[(0,q.jsx)(Wy,{type:`button`,$color:h,onClick:()=>o(e=>!e),"aria-haspopup":`listbox`,"aria-expanded":a,children:m||`Выберите автора`}),(0,q.jsx)(Gy,{$open:a}),a&&(0,q.jsxs)(Ky,{role:`listbox`,children:[(0,q.jsx)(qy,{type:`button`,$active:!m,onClick:()=>_(``),children:`Выберите автора`}),od.map(e=>(0,q.jsx)(qy,{type:`button`,role:`option`,"aria-selected":m===e,$color:cd[e],$active:m===e,onClick:()=>_(e),children:e},e))]})]})]}),(0,q.jsx)(Zy,{type:`button`,onClick:()=>i(e=>!e),children:r?`Свернуть`:`Развернуть`})]})]}),r&&(0,q.jsxs)(Qy,{children:[(0,q.jsxs)($y,{children:[(0,q.jsx)(eb,{placeholder:`Название темы *`,value:e.title,onKeyDown:gb,onChange:t=>n(Vd({themeId:e.id,field:`title`,value:t.target.value}))}),(0,q.jsx)(eb,{placeholder:`Описание темы *`,value:e.description,onKeyDown:gb,onChange:t=>n(Vd({themeId:e.id,field:`description`,value:t.target.value}))})]}),(0,q.jsx)(f_,{collisionDetection:Sh,onDragEnd:g,children:(0,q.jsx)(gy,{items:p,strategy:fy,children:(0,q.jsx)(tb,{children:e.questions.map(t=>(0,q.jsx)(vb,{themeId:e.id,question:t},t.id))})})}),(0,q.jsx)(fb,{children:(0,q.jsx)(db,{type:`button`,onClick:()=>n(Wd({themeId:e.id})),children:`Очистить тему`})})]})]})})},bb=()=>{let e=Lo(),t=J(e=>e.roundOne),n=hh(mh(hg,{activationConstraint:{distance:6}})),[r,i]=(0,x.useState)(!1),[a,o]=(0,x.useState)(String(t.timeLimitSeconds));return(0,q.jsxs)(`div`,{children:[(0,q.jsxs)(Ey,{children:[(0,q.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:14},children:[(0,q.jsx)(Gp,{}),(0,q.jsx)(My,{children:`Раунд 1`})]}),(0,q.jsxs)(Dy,{children:[(0,q.jsx)(Oy,{children:r?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ay,{value:a,onKeyDown:gb,onChange:e=>o(e.target.value),inputMode:`numeric`}),(0,q.jsx)(ky,{children:`секунд`}),(0,q.jsx)(jy,{type:`button`,onClick:()=>{let t=Number(a);e(Rd(t)),o(String(Number.isFinite(t)&&t>0?Math.floor(t):10)),i(!1)},children:`✅`})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(ky,{children:[t.timeLimitSeconds,` секунд`]}),(0,q.jsx)(jy,{type:`button`,onClick:()=>{o(String(t.timeLimitSeconds)),i(!0)},children:`✏️`})]})}),(0,q.jsx)(Ny,{type:`button`,onClick:()=>e(Ld()),children:`Очистить всё`})]})]}),(0,q.jsx)(f_,{sensors:n,collisionDetection:Sh,onDragEnd:({active:t,over:n})=>{!n||t.id===n.id||e(zd({activeId:String(t.id),overId:String(n.id)}))},children:(0,q.jsx)(gy,{items:t.themes.map(e=>e.id),strategy:fy,children:(0,q.jsx)(Py,{children:t.themes.map((e,t)=>(0,q.jsx)(yb,{theme:e,index:t},e.id))})})})]})},xb=new Intl.NumberFormat(`en-US`,{useGrouping:!1,maximumSignificantDigits:21});function Sb(e,t){if(!t.length||!Number.isFinite(e)||!t.every(Number.isFinite))return[];let n=[e,...t].map(e=>xb.format(e).split(`.`)),r=Math.max(...n.map(([,e=``])=>e.length)),[i,...a]=n.map(([e,t=``])=>BigInt(e+t.padEnd(r,`0`))),o=a.map(e=>e>=i?e-i:i-e),s=o.reduce((e,t)=>e<t?e:t);return o.flatMap((e,t)=>e===s?[t]:[])}var Cb=e=>{let t=e?.trim();return t?Number(t.replace(/\s/g,``).replace(`,`,`.`)):NaN},wb=new Intl.NumberFormat(`ru-RU`,{useGrouping:!0,maximumSignificantDigits:21}),Tb=e=>wb.format(e),Eb=e=>{let t=Cb(e);return Number.isFinite(t)?Tb(t):e},Db=(()=>{let e=new Uint32Array(256);for(let t=0;t<256;t+=1){let n=t;for(let e=0;e<8;e+=1)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n>>>0}return e})(),Ob=e=>{let t=4294967295;for(let n of e)t=Db[(t^n)&255]^t>>>8;return(t^4294967295)>>>0},kb=e=>new Uint8Array([e&255,e>>>8&255]),Ab=e=>new Uint8Array([e&255,e>>>8&255,e>>>16&255,e>>>24&255]),jb=(...e)=>{let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0)),n=0;for(let r of e)t.set(r,n),n+=r.length;return t},Mb=new TextEncoder,Nb=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&apos;`),Pb=(e,t)=>`${String.fromCharCode(65+e)}${t+1}`,Fb=(e,t,n,r)=>typeof e==`number`?`<c r="${Pb(t,n)}" s="${r}"><v>${e}</v></c>`:`<c r="${Pb(t,n)}" s="${r}" t="inlineStr"><is><t xml:space="preserve">${Nb(e)}</t></is></c>`,Ib=e=>`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><cols><col min="1" max="1" width="25" customWidth="1"/><col min="2" max="2" width="17" customWidth="1"/><col min="3" max="3" width="16" customWidth="1"/><col min="4" max="5" width="18" customWidth="1"/><col min="6" max="8" width="14" customWidth="1"/><col min="9" max="10" width="17" customWidth="1"/><col min="11" max="11" width="22" customWidth="1"/><col min="12" max="13" width="13" customWidth="1"/></cols><sheetData>${e.map((e,t)=>{let n=e.map((e,n)=>Fb(e,n,t,t===0?n>=11?4:n===10?0:n>=8?3:n>=5?2:+(n>=3):t===1?5:6)).join(``);return`<row r="${t+1}" ht="${t===0?22:t===1?32:72}" customHeight="1">${n}</row>`}).join(``)}</sheetData><mergeCells count="4"><mergeCell ref="D1:E1"/><mergeCell ref="F1:H1"/><mergeCell ref="I1:J1"/><mergeCell ref="L1:M1"/></mergeCells></worksheet>`,Lb=e=>{let t=[],n=[],r=0;for(let i of e){let e=Mb.encode(i.name),a=Mb.encode(i.content),o=Ob(a),s=jb(Ab(67324752),kb(20),kb(0),kb(0),kb(0),kb(0),Ab(o),Ab(a.length),Ab(a.length),kb(e.length),kb(0),e,a);t.push(s),n.push(jb(Ab(33639248),kb(20),kb(20),kb(0),kb(0),kb(0),kb(0),Ab(o),Ab(a.length),Ab(a.length),kb(e.length),kb(0),kb(0),kb(0),kb(0),Ab(0),Ab(r),e)),r+=s.length}let i=n.reduce((e,t)=>e+t.length,0);return jb(...t,...n,Ab(101010256),kb(0),kb(0),kb(e.length),kb(e.length),Ab(i),Ab(r),kb(0))},Rb=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="10"/><name val="Arial"/></font><font><b/><sz val="10"/><name val="Arial"/></font></fonts><fills count="7"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF93C47D"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FF76A5AF"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFF9900"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFF6B26B"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFFFFFF"/></patternFill></fill></fills><borders count="2"><border/><border><left style="thin"><color rgb="FFD9D9D9"/></left><right style="thin"><color rgb="FFD9D9D9"/></right><top style="thin"><color rgb="FFD9D9D9"/></top><bottom style="thin"><color rgb="FFD9D9D9"/></bottom></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="7"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf><xf numFmtId="0" fontId="1" fillId="3" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf><xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf><xf numFmtId="0" fontId="1" fillId="4" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf><xf numFmtId="0" fontId="1" fillId="5" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf><xf numFmtId="0" fontId="0" fillId="6" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf></cellXfs></styleSheet>`,zb=({packScore:e,hunterScore:t,packStolenQuestions:n,hunterStolenQuestions:r,usedExtraQuestions:i,players:a,hunterName:o,firstRoundScores:s,hunterBonusIds:c,hostName:l=``})=>{let u=Math.max(0,...s),d=s.indexOf(u),f=d>=0?a[d]??``:``,p=new Date,m=new Intl.DateTimeFormat(`ru-RU`).format(p),h=e=>c.includes(e)?`☑`:`☐`,g=Ib([[``,``,``,`1-й раунд`,``,`2-й раунд`,``,``,`3-й раунд (сколько вопросов украли)`,``,``,`ИТОГ`,``],[`Состав участников`,`Дата и время игры`,`Ведущий`,`Лучший результат`,`Игрок`,`2 доп вопроса`,`Запрет x2`,`2 балла`,`украла Стая`,`украл Охотник`,`Использовано доп-вопросов`,`Стая`,`Охотник`],[a.filter(Boolean).join(`
`),m,l,u,f,h(`plus-2-questions`),h(`ban-x2`),h(`plus-2-points`),n,r,i,e,t]]),_=new Blob([Lb([{name:`[Content_Types].xml`,content:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>`},{name:`_rels/.rels`,content:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`},{name:`xl/workbook.xml`,content:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Результаты" sheetId="1" r:id="rId1"/></sheets></workbook>`},{name:`xl/_rels/workbook.xml.rels`,content:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`},{name:`xl/styles.xml`,content:Rb},{name:`xl/worksheets/sheet1.xml`,content:g}])],{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}),v=URL.createObjectURL(_),y=document.createElement(`a`),b=e=>String(e).padStart(2,`0`),x=`${p.getFullYear()}-${b(p.getMonth()+1)}-${b(p.getDate())}`,S=`${b(p.getHours())}-${b(p.getMinutes())}-${b(p.getSeconds())}`;y.href=v,y.download=`kino-ohota-results-${x}-${S}.xlsx`,document.body.appendChild(y),y.click(),y.remove(),URL.revokeObjectURL(v)},Bb=K.div`
  min-height: calc(100dvh - 150px);
  display: grid;
  place-items: center;
  padding: 20px;
`,Vb=K.div`
  width: min(920px, 100%);
  display: grid;
  justify-items: center;
  gap: 28px;
`,Hb=K.h1`
  margin: 0;
  font-size: clamp(30px, 4vw, 48px);
  text-align: center;
`,Ub=K.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
`,Wb=K.button`
  min-height: 180px;
  border: 2px solid ${({$active:e,$flash:t,theme:n})=>e||t?n.colors.accent:n.colors.border};
  border-radius: 24px;
  background: ${({$active:e,$flash:t,theme:n})=>e||t?n.colors.accentSoft:n.colors.surface};
  color: ${({theme:e})=>e.colors.text};
  font-size: clamp(28px, 3vw, 42px);
  font-weight: 900;
  cursor: pointer;
  transition: transform .18s ease, border-color .18s ease, background .18s ease;
  &:hover { transform: translateY(-3px); }
`,Gb=ho`
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`,Kb=K.button`
  min-width: 220px;
  min-height: 52px;
  border: 1px solid #5b7fc4;
  border-radius: 14px;
  background: #496cae;
  color: #fff;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  ${({$running:e})=>e&&G`animation: ${Gb} .45s ease-in-out infinite;`}
`,qb=K.div`
  height: calc(100dvh - 174px);
  min-height: 0;
  padding: 8px 18px 18px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr;
  overflow: hidden;
`,Jb=K.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 26px;
  background: ${({theme:e})=>e.colors.surface};
  display: grid;
  place-items: center;
  padding: 72px 0 48px 56px;
  box-sizing: border-box;
  overflow: hidden;
`,Yb=e=>{let t=Math.max(0,Math.min(1,e)),n=t>=.5?52+(t-.5)*180:Math.max(0,(t-.2)/.3)*52;return`conic-gradient(hsl(${n} 76% 49%) ${t*360}deg, hsl(${n} 76% 49% / 15%) 0)`},Xb=K.div`
  position: absolute;
  top: 22px;
  right: 22px;
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background: ${({$progress:e})=>Yb(e)};
  display: grid;
  place-items: center;
  &::before { content:''; position:absolute; inset:6px; border-radius:50%; background:${({theme:e})=>e.colors.surface}; }
  span { position:relative; z-index:1; font-size:20px; font-weight:900; }
`,Zb=K.div`
  position: absolute;
  top: 118px;
  right: 22px;
  width: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.mutedText};
  pointer-events: none;
`,Qb=K.span`
  font-size: 15px;
  font-weight: 1000;
  letter-spacing: .12em;
`,$b=K.div`
  position: absolute;
  top: 22px;
  left: 28px;
  display: flex;
  gap: 30px;
  font-size: 54px;
  line-height: 1;
  font-weight: 1000;

  span {
    display: inline-flex;
    align-items: center;
    gap: 12px;
  }
`,ex=K.div`
  position: relative;
  width: min(1320px, 100%);
  height: min(430px, calc(100% - 28px));
  min-height: 360px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 86px 132px 54px 54px;
  align-content: center;
  justify-items: center;
  row-gap: 14px;
  text-align: center;
`,tx=K.div`
  grid-row: 1;
  align-self: center;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: ${({theme:e})=>e.colors.mutedText};
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .08em;
`,nx=K.div`
  grid-row: 1;
  align-self: center;
  width: 100%;
  min-height: 86px;
  display: grid;
  place-items: center;
  color: ${({theme:e})=>e.colors.mutedText};
  pointer-events: none;
`,rx=K.div`
  grid-row: 2;
  width: 100%;
  min-height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${tv}
`;K.div`
  padding: 16px 22px;
  border-radius: 16px;
  border: 1px solid rgba(34,197,94,.45);
  background: rgba(34,197,94,.12);
  ${nv}
`;var ix=K.div`
  grid-row: 4;
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  flex-wrap: wrap;
`,ax=K.button`
  min-width: 180px;
  min-height: 54px;
  padding: 0 22px;
  border-radius: 14px;
  border: 1px solid ${({$kind:e,theme:t})=>e===`good`?`#22c55e`:e===`bad`?`#ef4444`:t.colors.border};
  background: ${({$kind:e})=>e===`good`?`rgba(34,197,94,.14)`:e===`bad`?`rgba(239,68,68,.12)`:`rgba(255,255,255,.05)`};
  color: ${({theme:e})=>e.colors.text};
  font-size: 17px;
  font-weight: 900;
  cursor: pointer;
`;K.div`
  grid-row: 2;
  align-self: end;
  white-space: nowrap;
  color: ${({theme:e})=>e.colors.mutedText};
  font-size: clamp(36px, 4.5vw, 64px);
  font-weight: 1000;
`;var ox=K.div`
  grid-row: 3;
  align-self: center;
  font-size: clamp(22px, 3vw, 34px);
  font-weight: 900;
`;K.div`
  grid-row: 3;
  align-self: center;
  color: ${({theme:e})=>e.colors.mutedText};
  font-size: 16px;
  font-weight: 700;
`;var sx=K.div`
  grid-row: 2 / 5;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
`,cx=K.div`
  font-size: clamp(22px, 3vw, 34px);
  font-weight: 900;
  text-align: center;
`,lx=K.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  flex-wrap: wrap;
`,ux=K.div`
  color: ${({theme:e})=>e.colors.mutedText};
  font-size: 16px;
  font-weight: 700;
`,dx=K.div`
  grid-row: 2 / 5;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
`,fx=K.div`
  white-space: nowrap;
  color: ${({theme:e})=>e.colors.mutedText};
  font-size: clamp(36px, 4.5vw, 64px);
  font-weight: 1000;
`,px=K.div`
  font-size: clamp(22px, 3vw, 34px);
  font-weight: 900;
`,mx=K.button`
  position:absolute; top:116px; right:22px; width:86px; min-height:32px; border:1px solid ${({theme:e})=>e.colors.border}; border-radius:10px; background:rgba(255,255,255,.05); color:${({theme:e})=>e.colors.text}; font-size:13px; font-weight:800; cursor:pointer;
`,hx=K.div`
  width: min(1240px, calc(100% - 32px));
  min-height: 610px;
  grid-template-rows: 26px 88px 118px 176px 38px 54px;
  align-content: center;
  display: grid;
  justify-items: center;
  gap: 24px;
  text-align: center;
`,gx=K.div`
  color: ${({theme:e})=>e.colors.mutedText};
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .08em;
`,_x=K.div`
  width: 100%;
  min-height: 88px;
  display: grid;
  place-items: center;
  ${tv}
`,vx=K.div`
  width: min(760px, 100%);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
`,yx=K.div`
  padding: 14px 16px;
  border: 2px solid ${({$winner:e,theme:t})=>e?`#e8b923`:t.colors.border};
  border-radius: 18px;
  background: ${({$winner:e})=>e?`rgba(232,185,35,.10)`:`rgba(255,255,255,.025)`};
  display: grid;
  gap: 8px;
`,bx=K.div`
  font-size: 22px;
  font-weight: 1000;
`,xx=K.input`
  width: 100%;
  min-height: 46px;
  box-sizing: border-box;
  padding: 0 16px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 13px;
  background: ${({theme:e})=>e.colors.surfaceAlt};
  color: ${({theme:e})=>e.colors.text};
  ${nv}
  text-align: center;
  appearance: textfield;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
`;K.div`
  padding: 12px 18px;
  border-radius: 14px;
  border: 1px solid rgba(232,185,35,.5);
  background: rgba(232,185,35,.12);
  color: #e8b923;
  font-size: 20px;
  font-weight: 900;
`;var Sx=K.div`
  min-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 900;
`,Cx=ho`
  from { opacity: 0; transform: translate(-50%, 12px) scale(.8); }
  to { opacity: 1; transform: translate(-50%, 0) scale(1); }
`,wx=e=>ho`
  0% { left: 5%; }
  18% { left: 92%; }
  36% { left: 18%; }
  54% { left: 82%; }
  72% { left: 30%; }
  88% { left: 68%; }
  100% { left: ${e}%; }
`,Tx=K.div`
  position: relative; width: min(900px, calc(100% - 80px)); height: 176px; margin: 0 auto;
`,Ex=K.div`
  position:absolute;left:0;right:0;top:82px;height:4px;border-radius:999px;
  background:linear-gradient(90deg,rgba(96,165,250,.28),rgba(96,165,250,.92),rgba(96,165,250,.28));
  &::before,&::after{content:'';position:absolute;top:50%;width:10px;height:10px;border-radius:50%;background:#6f91cf;transform:translateY(-50%);}
  &::before{left:0;}&::after{right:0;}
`,Dx=K.div`
  position:absolute;left:${({$position:e})=>e}%;top:${({$correct:e})=>e?`70px`:`96px`};transform:translateX(-50%);
  display:grid;justify-items:center;gap:6px;white-space:nowrap;z-index:${({$correct:e})=>e?3:2};transition:left 900ms cubic-bezier(.22,1,.36,1);
  ${({$correct:e})=>e&&G`animation:${Cx} 500ms cubic-bezier(.22,1,.36,1);`}
`,Ox=K.div`
  ${({$correct:e})=>e&&G`position:relative;top:0;z-index:6;`}
  width:${({$correct:e})=>e?`22px`:`15px`};height:${({$correct:e})=>e?`22px`:`15px`};border-radius:50%;
  border:3px solid ${({$correct:e})=>e?`#e8b923`:`#6f91cf`};background:${({theme:e})=>e.colors.surface};
`,kx=K.div`
  ${({$correct:e})=>e&&G`position:absolute;bottom:34px;left:50%;transform:translateX(-50%);`}
  min-width:104px;max-width:180px;padding:6px 10px;border-radius:10px;text-align:center;white-space:normal;font-size:15px;font-weight:800;
  background:${({$correct:e,$winner:t})=>e?`rgba(232,185,35,.14)`:t?`rgba(34,197,94,.13)`:`rgba(73,108,174,.14)`};
  color:${({$correct:e,$winner:t})=>e?`#e8b923`:t?`#4ade80`:`inherit`};display:grid;justify-items:center;gap:2px;
  strong {
    display: block;
    ${nv}
  }
`,Ax=K(kx)`
  box-sizing: border-box;
  width: 180px;
  container-type: inline-size;
  grid-template-columns: minmax(0, 1fr);

  strong {
    white-space: nowrap;
    font-size: min(clamp(24px, 1.5vw, 28px), calc(100cqw / ${({$characters:e})=>e}));
  }
`,jx=K.div`
  position:absolute;top:70px;transform:translateX(-50%);z-index:7;
  animation:${({$position:e})=>G`${wx(e)} 5s cubic-bezier(.45,.05,.25,1) forwards`};
`,Mx=K.div`
  width: min(860px, 100%);
  display: grid;
  justify-items: center;
  gap: 20px;
  text-align: center;
`,Nx=K.div`
  font-size: clamp(64px, 8vw, 110px);
  line-height: .95;
  font-weight: 1000;
`,Px=K.span`
  opacity: ${({$muted:e})=>e?.7:1};
`,Fx=K.div`
  font-size: clamp(34px, 4vw, 58px);
  line-height: 1.1;
  font-weight: 1000;
`,Ix=K.div`
  color: ${({theme:e})=>e.colors.mutedText};
  font-size: 16px;
  font-weight: 700;
`,Lx=ho`
  0% { transform: translateY(100%); }
  100% { transform: translateY(-100%); }
`,Rx=ho`
  0%, 82% { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
`,zx=K.div`
  width: 100%; height: 100%; min-height: 0; display: grid; grid-template-columns: 3fr 2fr; gap: 28px;
  @media (max-width: 900px) { grid-template-columns: 1fr; grid-template-rows: 1fr 280px; }
`,Bx=K.div`
  min-width: 0; display: grid; place-items: center; padding: 28px; box-sizing: border-box;
  border: 1px solid ${({theme:e})=>e.colors.border}; border-radius: 22px; background: ${({theme:e})=>e.colors.surfaceAlt};
`,Vx=K.div`
  position: relative; min-width: 0; overflow: hidden; border-left: 1px solid ${({theme:e})=>e.colors.border};
  &::before,&::after { content:''; position:absolute; z-index:2; left:0; right:0; height:72px; pointer-events:none; }
  &::before { top:0; background:linear-gradient(to bottom,${({theme:e})=>e.colors.surface},transparent); }
  &::after { bottom:0; background:linear-gradient(to top,${({theme:e})=>e.colors.surface},transparent); }
  @media (max-width: 900px) { border-left:0; border-top:1px solid ${({theme:e})=>e.colors.border}; }
`,Hx=K.div`
  position:absolute; left:20px; right:20px; top:0; display:grid; justify-items:center; gap:34px; padding:32px 0;
  text-align:center; animation:${Lx} 24s linear 1 forwards;
`,Ux=K.div`font-size:clamp(30px,3vw,46px);font-weight:1000;letter-spacing:.04em;`,Wx=K.div`display:grid;gap:10px;`,Gx=K.div`font-size:17px;line-height:1.35;font-weight:700;`,Kx=K.div`
  position:absolute; inset:0; display:grid; place-items:center; padding:24px; box-sizing:border-box;
  text-align:center; font-size:clamp(25px,2.5vw,38px); font-weight:1000; opacity:0;
  animation:${Rx} 29s ease-out 1 forwards;
`,qx=e=>e===`pack`?`Стая`:`Охотник`,Jx=e=>e===`pack`?`hunter`:`pack`,Yx=e=>e.replace(`,`,`.`).replace(/[^0-9.-]/g,``),Xx=()=>{let e=Lo(),t=wt(),n=J(e=>e.roundOne),r=J(e=>e.roundTwo),i=J(e=>e.roundThree),a=J(e=>e.gameRoundThree),o=J(e=>e.gameRoundTwo),s=J(e=>e.gameScores.values),c=J(e=>e.extraQuestions.items),l=J(e=>e.gameTieBreak),u=J(e=>e.players),d=a.questionHistory??[],f=a.activeSide,p=o.hunterBonusIds.includes(`plus-2-questions`),m=(0,x.useMemo)(()=>{let e=i.pools.find(e=>e.id===a.activePoolId);return!e||!a.activePoolId||f!==`hunter`||!p?e:Qd(i,a.activePoolId)},[i,a.activePoolId,f,p]),h=m?.questions[a.currentQuestionIndex],g=f===`pack`?Math.max(0,i.packTimeSeconds-(o.hunterBonusIds.includes(`minus-30`)?30:0)):i.hunterTimeSeconds,_=f?Jx(f):null,v=l.extraQuestionIndex??0,y=c[v],b=Cb(y?.answer),S=(0,x.useMemo)(()=>Jf(`roundThreeGame`),[]),C=S?.side===f&&S?.poolId===a.activePoolId&&S?.questionIndex===a.currentQuestionIndex,w=(0,x.useRef)(null),T=(0,x.useRef)(null),[E,D]=(0,x.useState)(()=>C?S.phase:`question`),[O,k]=(0,x.useState)(a.currentSecondsLeft??g),[A,ee]=(0,x.useState)(()=>C?S.packTieAnswer:``),[j,M]=(0,x.useState)(()=>C?S.hunterTieAnswer:``),[N,te]=(0,x.useState)(()=>C?S.tieWinner:null),[P,F]=(0,x.useState)(()=>C?S.tieRevealed:!1),[ne,re]=(0,x.useState)(()=>C?S.tieMessage:``),[ie,I]=(0,x.useState)(!1),[L,R]=(0,x.useState)(()=>C?S.tieFinalScale:!1),[z,B]=(0,x.useState)(()=>C?S?.reviewIndex??null:null),ae=z!==null,oe=ae?m?.questions[z]:h;(0,x.useEffect)(()=>()=>{w.current!==null&&window.clearTimeout(w.current),T.current!==null&&window.clearTimeout(T.current)},[]),(0,x.useEffect)(()=>{if(!f||!a.activePoolId){t(`/game/round/3/start`,{replace:!0});return}k(a.currentSecondsLeft??g)},[f,a.activePoolId,g,t]),(0,x.useEffect)(()=>{a.restoredSecondsLeft!=null&&(k(a.restoredSecondsLeft),D(`question`),e(yu()))},[a.restoredSecondsLeft,e]),(0,x.useEffect)(()=>{e(bu(O))},[O,e]),(0,x.useEffect)(()=>{Yf(`roundThreeGame`,{side:f,poolId:a.activePoolId,questionIndex:a.currentQuestionIndex,phase:E,reviewIndex:z,packTieAnswer:A,hunterTieAnswer:j,tieWinner:N,tieRevealed:P,tieMessage:ne,tieFinalScale:L})},[f,a.activePoolId,a.currentQuestionIndex,E,z,A,j,N,P,ne,L]),(0,x.useEffect)(()=>{if(ae||E!==`question`||O<=0)return;let e=window.setTimeout(()=>k(e=>Math.max(0,e-1)),1e3);return()=>window.clearTimeout(e)},[E,O,ae]);let se=o.hunterBonusIds.includes(`plus-2-points`),ce=(0,x.useRef)(se);(0,x.useEffect)(()=>{ce.current!==se&&(ce.current=se,E.startsWith(`final-`)&&(w.current!==null&&window.clearTimeout(w.current),T.current!==null&&window.clearTimeout(T.current),te(null),F(!1),I(!1),R(!1),ee(``),M(``),re(``),D(a.packScore===a.hunterScore?`final-tiebreak`:`final-result`)))},[se,E,a.packScore,a.hunterScore]),(0,x.useEffect)(()=>{E===`ban-choice`&&a.hunterBanUsesLeft===0&&D(`steal`),z!==null&&m&&z>=m.questions.length&&B(null),!(f!==`hunter`||!m||a.currentQuestionIndex<m.questions.length||E===`turn-transition`||E.startsWith(`final-`))&&(e(wu()),D(a.startingSide===f?`turn-transition`:a.packScore===a.hunterScore?`final-tiebreak`:`final-result`))},[E,f,m,a.currentQuestionIndex,a.hunterBanUsesLeft,a.startingSide,a.packScore,a.hunterScore,z,e]);let le=(t=a.packScore,n=a.hunterScore)=>{e(wu()),a.completedSides.length>=1?D(t===n?`final-tiebreak`:`final-result`):D(`turn-transition`)};if(!f||!m)return null;let ue=()=>e(_u(O)),V=()=>{d.length!==0&&e(vu())},de=(t=a.packScore,n=a.hunterScore)=>{if(a.currentQuestionIndex>=m.questions.length-1){le(t,n);return}e(xu()),D(`question`)},fe=()=>{ue();let t=a.packScore+ +(f===`pack`),n=a.hunterScore+ +(f===`hunter`);e(hu(f)),de(t,n)},pe=()=>{f===`hunter`&&a.hunterBanUsesLeft>0?D(`ban-choice`):D(`steal`)},me=t=>{ue(),t&&_&&e(gu(_)),D(`continue`)},he=()=>{ue(),e(Su()),D(`continue`)},ge=()=>de(),_e=()=>{e(Cu()),D(`question`)},ve=(e,t,n)=>n===t?50:Math.min(98,Math.max(2,5+(e-t)/(n-t)*90)),ye=!!c[v+1],be=!y||P&&!ye&&Sb(b,[Cb(A),Cb(j)]).length>1,xe=(0,q.jsx)(vx,{children:[`pack`,`hunter`].map(e=>(0,q.jsxs)(yx,{as:`button`,type:`button`,$winner:N===e,"aria-pressed":N===e,onClick:()=>te(e),style:{color:`inherit`,cursor:`pointer`},children:[(0,q.jsxs)(bx,{children:[(0,q.jsx)(Uv,{side:e}),` `,qx(e)]}),y&&(0,q.jsx)(`span`,{children:Eb(e===`pack`?A:j)})]},e))}),Se=(0,q.jsx)(ax,{type:`button`,$kind:`good`,disabled:!N,onClick:()=>{!be||!N||E!==`final-tiebreak`||(e(hu(N)),D(`final-result`))},children:`Объявить победителя`}),Ce=`Дополнительные вопросы закончились. Выберите победителя нажатием на плитку.`,we=()=>{!ye||!P||N||(T.current!==null&&window.clearTimeout(T.current),ee(``),M(``),re(``),F(!1),R(!1),e(J_()))},Te=()=>{if(!Ue||ie||P)return;let t=Sb(b,[Cb(A),Cb(j)]),n=t.length===1?t[0]===0?`pack`:`hunter`:null;R(!1),I(!0),w.current=window.setTimeout(()=>{n&&e(hu(n)),te(n),I(!1),F(!0),re(n?`${qx(n)} ближе к правильному ответу.`:ye?`Ничья`:`Ничья. Дополнительные вопросы в сценарии закончились.`),T.current=window.setTimeout(()=>R(!0),350)},5e3)},Ee=[A,j].filter(e=>e.trim()!==``).map(Cb).filter(Number.isFinite),De=Ee.length?Math.min(...Ee):0,Oe=Ee.length?Math.max(...Ee):1,ke=Number.isFinite(b)?[...Ee,b]:Ee,Ae=L?Math.min(...ke):De,je=L?Math.max(...ke):Oe,Me=ve(b,De,Oe),Ne=ve(b,Ae,je),Pe=()=>{let e=u.players.slice(0,u.isFourthActive?4:3),t=e.map(e=>`${e.firstName} ${e.lastName}`.trim()),n=o.hunterIndex===null?``:t[o.hunterIndex]??``;zb({packScore:a.packScore,hunterScore:a.hunterScore,packStolenQuestions:a.packStolenQuestions,hunterStolenQuestions:a.hunterStolenQuestions,usedExtraQuestions:l.extraQuestionIndex+ +!!P,players:t,hunterName:n,firstRoundScores:s.slice(0,e.length),hunterBonusIds:o.hunterBonusIds,hostName:u.host??``}),Xf()};(0,x.useEffect)(()=>{if(typeof BroadcastChannel>`u`||!f||!m)return;let e=new BroadcastChannel(Du),t=f===`pack`?`packScore`:`hunterScore`,n=m.questions.map((e,n)=>{if(n===a.currentQuestionIndex&&E!==`turn-transition`)return`current`;let r=d.findIndex(e=>e.questionIndex===n);if(r<0)return`upcoming`;let i=d[r];return(d[r+1]??a)[t]>i[t]?`correct`:`wrong`}),r={side:f,answeringSide:E===`steal`?_:f,poolId:a.activePoolId,questionIndex:a.currentQuestionIndex,questionCount:m.questions.length,reviewIndex:z,questionStatuses:n,question:oe?.question??``,answer:oe?.answer??``,author:oe?.author,comment:oe?.comment,phase:E,secondsLeft:O,packScore:a.packScore,hunterScore:a.hunterScore,hunterBanUsesLeft:a.hunterBanUsesLeft},i=()=>e.postMessage({type:`STATE`,payload:r});return e.onmessage=e=>{if(e.data.type===`REQUEST_STATE`){i();return}if(e.data.type===`FINISH_SCENARIO`){O===0&&!ae&&E!==`turn-transition`&&!E.startsWith(`final-`)&&e.data.poolId===a.activePoolId&&le();return}if(e.data.type===`ADJUST_TIME`){let{delta:t,poolId:n}=e.data;(t===-10||t===10)&&n===a.activePoolId&&E!==`turn-transition`&&!E.startsWith(`final-`)&&k(e=>Math.max(0,e+t));return}if(e.data.type===`REVIEW`){let{index:t,poolId:r,currentIndex:i}=e.data;if(r!==a.activePoolId||i!==a.currentQuestionIndex||E.startsWith(`final-`))return;t===null||n[t]===`current`?B(null):(n[t]===`correct`||n[t]===`wrong`)&&B(t);return}if(!(e.data.type!==`COMMAND`||ae))switch(e.data.command){case`CORRECT`:E===`question`&&fe();break;case`WRONG`:E===`question`&&pe();break;case`PAUSE`:E===`question`&&D(`manual-pause`);break;case`CONTINUE`:E===`manual-pause`?D(`question`):E===`continue`?ge():E===`turn-transition`&&_e();break;case`PREVIOUS`:d.length>0&&E!==`turn-transition`&&V();break;case`ALLOW_STEAL`:E===`ban-choice`&&D(`steal`);break;case`FORBID_STEAL`:E===`ban-choice`&&he();break;case`STEAL_CORRECT`:E===`steal`&&me(!0);break;case`STEAL_WRONG`:E===`steal`&&me(!1);break}},i(),()=>e.close()},[f,m,a.activePoolId,a.currentQuestionIndex,a.packScore,a.hunterScore,a.hunterBanUsesLeft,h,E,O,d,z]);let Fe=u.players.slice(0,u.isFourthActive?4:3),Ie=[...new Set([...n.themes.map(e=>e.author),...r.blocks.flatMap(e=>e.questions.map(e=>e.author??``)),...i.pools.flatMap(e=>e.questions.map(e=>e.author??``)),...c.map(e=>e.author)].map(e=>e.trim()).filter(Boolean).flatMap(e=>e===`Артем Терехин и Саша Романова`?[`Артем Терехин`,`Саша Романова`]:[e]))].sort((e,t)=>e.localeCompare(t,`ru`)),Le=Math.floor(O/60),Re=O%60,ze=`${Le}:${String(Re).padStart(2,`0`)}`,Be=g>0?Math.min(1,O/g):0,Ve=E===`steal`||E===`ban-choice`||E===`continue`,He=E!==`final-tiebreak`&&E!==`final-result`,Ue=[A,j].every(e=>Number.isFinite(Cb(e)))&&Number.isFinite(b),We=a.packScore>a.hunterScore?`Стая`:`Охотник`;return ae?(0,q.jsx)(qb,{children:(0,q.jsxs)(Jb,{children:[(0,q.jsxs)($b,{children:[(0,q.jsxs)(`span`,{children:[(0,q.jsx)(Uv,{side:`pack`}),` `,a.packScore]}),(0,q.jsxs)(`span`,{children:[(0,q.jsx)(Uv,{side:`hunter`}),` `,a.hunterScore]})]}),(0,q.jsx)(Xb,{$progress:Be,children:(0,q.jsx)(`span`,{children:ze})}),(0,q.jsxs)(ex,{children:[(0,q.jsxs)(tx,{children:[`Просмотр · Вопрос `,z+1]}),(0,q.jsx)(rx,{children:oe?.question}),(0,q.jsx)(ax,{type:`button`,$kind:`neutral`,onClick:()=>B(null),children:`Вернуться к игре`})]})]})}):(0,q.jsx)(qb,{children:(0,q.jsxs)(Jb,{children:[E!==`final-result`&&(0,q.jsxs)($b,{children:[(0,q.jsxs)(`span`,{children:[(0,q.jsx)(Uv,{side:`pack`}),` `,a.packScore]}),(0,q.jsxs)(`span`,{children:[(0,q.jsx)(Uv,{side:`hunter`}),` `,a.hunterScore]})]}),He&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Xb,{$progress:Be,children:(0,q.jsx)(`span`,{children:ze})}),E===`question`&&(0,q.jsx)(mx,{type:`button`,onClick:()=>D(`manual-pause`),children:`Пауза`})]}),Ve&&(0,q.jsx)(Zb,{children:(0,q.jsx)(Qb,{children:`ПАУЗА`})}),E===`manual-pause`&&(0,q.jsx)(ex,{children:(0,q.jsxs)(dx,{children:[(0,q.jsx)(fx,{children:`Пауза`}),(0,q.jsx)(ax,{type:`button`,$kind:`neutral`,onClick:()=>D(`question`),children:`Продолжить`})]})}),E===`question`&&h&&(0,q.jsxs)(ex,{children:[(0,q.jsxs)(tx,{children:[`Сейчас играет: `,qx(f),` · Сценарий `,a.activePoolId,` · Вопрос `,a.currentQuestionIndex+1]}),(0,q.jsx)(rx,{children:h.question}),(0,q.jsxs)(ix,{children:[(0,q.jsx)(ax,{type:`button`,$kind:`bad`,onClick:pe,children:`Неверно`}),(0,q.jsx)(ax,{type:`button`,$kind:`good`,onClick:fe,children:`Верно`})]})]}),E===`ban-choice`&&(0,q.jsx)(ex,{children:(0,q.jsxs)(sx,{children:[(0,q.jsx)(cx,{children:`Может ли Стая украсть вопрос?`}),(0,q.jsxs)(lx,{children:[(0,q.jsx)(ax,{type:`button`,$kind:`neutral`,onClick:()=>D(`steal`),children:`Может`}),(0,q.jsx)(ax,{type:`button`,$kind:`bad`,onClick:he,children:`Запрет`})]}),(0,q.jsxs)(ux,{children:[`У Охотника осталось запретов: `,a.hunterBanUsesLeft]})]})}),E===`steal`&&h&&_&&(0,q.jsxs)(ex,{children:[(0,q.jsx)(nx,{children:(0,q.jsxs)(ox,{children:[`Вопрос передаётся: `,qx(_)]})}),(0,q.jsx)(rx,{children:h.question}),(0,q.jsxs)(ix,{children:[(0,q.jsx)(ax,{type:`button`,$kind:`bad`,onClick:()=>me(!1),children:`Неверно`}),(0,q.jsx)(ax,{type:`button`,$kind:`good`,onClick:()=>me(!0),children:`Верно`})]})]}),E===`continue`&&(0,q.jsx)(ex,{children:(0,q.jsxs)(dx,{children:[(0,q.jsx)(px,{children:`Продолжить сценарий?`}),(0,q.jsx)(ax,{type:`button`,$kind:`neutral`,onClick:ge,children:`Продолжить`})]})}),E===`turn-transition`&&(0,q.jsx)(ex,{children:(0,q.jsxs)(dx,{children:[(0,q.jsx)(fx,{children:`Сценарий завершён`}),(0,q.jsxs)(px,{children:[`Ход переходит к `,qx(Jx(f))]}),(0,q.jsx)(ax,{type:`button`,$kind:`neutral`,onClick:_e,children:`Продолжить`})]})}),E===`final-tiebreak`&&(0,q.jsxs)(hx,{children:[(0,q.jsx)(gx,{children:`Ничья · дополнительный вопрос`}),y?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(_x,{children:y.question}),be?xe:(0,q.jsxs)(vx,{children:[(0,q.jsxs)(yx,{$winner:P&&N===`pack`,children:[(0,q.jsxs)(bx,{children:[(0,q.jsx)(Uv,{side:`pack`}),` Стая`]}),(0,q.jsx)(xx,{type:`text`,inputMode:`decimal`,placeholder:`Ответ Стаи`,value:A,onBlur:()=>ee(Eb),disabled:P||ie,onChange:e=>ee(Yx(e.target.value))})]}),(0,q.jsxs)(yx,{$winner:P&&N===`hunter`,children:[(0,q.jsxs)(bx,{children:[(0,q.jsx)(Uv,{side:`hunter`}),` Охотник`]}),(0,q.jsx)(xx,{type:`text`,inputMode:`decimal`,placeholder:`Ответ Охотника`,value:j,onBlur:()=>M(Eb),disabled:P||ie,onChange:e=>M(Yx(e.target.value))})]})]}),(0,q.jsxs)(Tx,{children:[(0,q.jsx)(Ex,{}),Number.isFinite(Cb(A))&&(0,q.jsxs)(Dx,{$position:ve(Cb(A),Ae,je),children:[(0,q.jsx)(Ox,{}),(0,q.jsxs)(Ax,{$characters:Eb(A).length,$winner:P&&N===`pack`,children:[(0,q.jsx)(`span`,{children:`Стая`}),(0,q.jsx)(`strong`,{children:Eb(A)})]})]}),Number.isFinite(Cb(j))&&(0,q.jsxs)(Dx,{$position:ve(Cb(j),Ae,je),children:[(0,q.jsx)(Ox,{}),(0,q.jsxs)(Ax,{$characters:Eb(j).length,$winner:P&&N===`hunter`,children:[(0,q.jsx)(`span`,{children:`Охотник`}),(0,q.jsx)(`strong`,{children:Eb(j)})]})]}),ie&&(0,q.jsx)(jx,{$position:Me,children:(0,q.jsx)(Ox,{$correct:!0})}),P&&Number.isFinite(b)&&(0,q.jsxs)(Dx,{$correct:!0,$position:Ne,children:[(0,q.jsx)(kx,{$correct:!0,children:(0,q.jsx)(`strong`,{children:Tb(b)})}),(0,q.jsx)(Ox,{$correct:!0})]})]}),!Number.isFinite(b)&&(0,q.jsx)(Sx,{children:`В сценарии для этого вопроса нужен числовой ответ.`}),be?(0,q.jsx)(Sx,{children:Ce}):ne===`Ничья`?(0,q.jsx)(gx,{children:`Ничья`}):ne&&(0,q.jsx)(Sx,{children:ne}),be?Se:P?N?(0,q.jsx)(ax,{type:`button`,$kind:`good`,onClick:()=>D(`final-result`),children:`Объявить победителя`}):(0,q.jsx)(ax,{type:`button`,$kind:`neutral`,disabled:!ye,onClick:we,children:`Следующий вопрос`}):(0,q.jsx)(ax,{type:`button`,$kind:`neutral`,disabled:!Ue||ie,onClick:Te,children:ie?`Определяем ответ…`:`Показать ответ`})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(_x,{children:Ce}),xe,Se]})]}),E===`final-result`&&(0,q.jsxs)(zx,{children:[(0,q.jsx)(Bx,{children:(0,q.jsxs)(Mx,{children:[(0,q.jsxs)(Nx,{children:[(0,q.jsx)(Px,{$muted:a.packScore<a.hunterScore,children:a.packScore}),`:`,(0,q.jsx)(Px,{$muted:a.hunterScore<a.packScore,children:a.hunterScore})]}),(0,q.jsxs)(Fx,{children:[(0,q.jsx)(Uv,{side:We===`Стая`?`pack`:`hunter`}),` `,We===`Стая`?`Победила Стая`:`Победил Охотник`]}),(0,q.jsx)(Ix,{children:`Игра завершена`}),(0,q.jsx)(ax,{type:`button`,$kind:`good`,onClick:Pe,children:`Сохранить результат игры`})]})}),(0,q.jsxs)(Vx,{children:[(0,q.jsxs)(Hx,{children:[(0,q.jsxs)(Ux,{children:[`КиноОхота`,u.scenarioNumber?` №${u.scenarioNumber}`:``]}),u.host&&(0,q.jsx)(Wx,{children:(0,q.jsxs)(Gx,{children:[u.host,` — ведущий`]})}),(0,q.jsx)(Wx,{children:Fe.map((e,t)=>{let n=`${e.firstName} ${e.lastName}`.trim(),r=o.hunterIndex===t;return n?(0,q.jsxs)(Gx,{children:[n,` — `,r?`Охотник`:`игрок Стаи`,` `,(0,q.jsx)(Uv,{side:r?`hunter`:`pack`}),(We===`Охотник`?r:!r)?` 🏆`:``]},`${n}-${t}`):null})}),Ie.length>0&&(0,q.jsx)(Wx,{children:Ie.map(e=>(0,q.jsxs)(Gx,{children:[e,` — автор сценария`]},e))})]}),(0,q.jsx)(Kx,{children:`КиноОхота вернётся`})]})]})]})})},Zx=K.div``,Qx=K.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-bottom: 20px;
`,$x=K.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,eS=K.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,tS=K.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 10px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
`,nS=K.span`
  color: ${({theme:e})=>e.colors.mutedText};
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
`,rS=K.span`
  font-weight: 800;
  white-space: nowrap;
`,iS=K.input`
  width: 68px;
  min-height: 34px;
  padding: 0 9px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 9px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  font-weight: 800;
  text-align: center;
`,aS=K.button`
  width: 34px;
  height: 34px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 9px;
  background: transparent;
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
  font-size: 16px;
`,oS=K.h2`
  margin: 0;
  font-size: 28px;
`,sS=K.button`
  min-width: 140px;
  padding: 10px 14px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.text};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`,cS=K.div`
  display: grid;
  gap: 16px;
`,lS=K.div`
  padding: 18px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 20px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01)),
    ${({theme:e})=>e.colors.surface};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
`,uS=K.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
`,dS=K.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,fS=K.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
`,pS=K.h3`
  margin: 0;
  font-size: 18px;
`,mS=K.span`
  color: ${({$invalid:e,theme:t})=>e?`#d98282`:t.colors.mutedText};
  font-size: 13px;
  font-weight: 650;
`,hS=K.span`
  color: #c77474;
  font-size: 13px;
  font-weight: 600;
`,gS=K.div`
  width: min(520px, 70vw);
  height: 28px;
  overflow: hidden;
  border-radius: 999px;
  display: flex;
  background: rgba(255,255,255,0.06);
  border: 1px solid ${({theme:e})=>e.colors.border};
`,_S=K.div`
  width: ${({$width:e})=>`${e}%`};
  min-width: ${({$width:e})=>e>0?`34px`:`0`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 800;
  color: #fff;
  overflow: hidden;
  transition: width 0.2s ease, min-width 0.2s ease;
  background: ${({$type:e})=>e===`easy`?`#22c55e`:e===`medium`?`#eab308`:`#ef4444`};
`,vS=K.button`
  min-width: 110px;
  padding: 10px 12px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
`,yS=K.div`
  margin-top: 18px;
  display: grid;
  gap: 12px;
`,bS=K.div`
  position: relative;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  padding: 14px 54px 14px 14px;
  border-radius: 16px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.04);
`,xS=K.div`
  min-width: 0;
  display: grid;
  gap: 12px;
`,SS=K.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  font-size: 14px;
  input {
    appearance: none;
    width: 34px;
    height: 20px;
    border: 1px solid currentColor;
    border-radius: 12px;
    color: ${({theme:e})=>e.colors.mutedText};
    cursor: pointer;
  }
  input::before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    margin: 3px;
    border-radius: 50%;
    background: currentColor;
  }
  input:checked { background: #285bcc; color: white; }
  input:checked::before { transform: translateX(14px); }
  input:disabled { opacity: 0.45; cursor: default; }
`,CS=K.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
`,wS=K.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.mutedText};

  > span { white-space: nowrap; }
`,TS=K.div`
  position: relative;
  width: 212px;
  flex: 0 0 212px;
`,ES=K.button`
  width: 212px;
  height: 40px;
  padding: 0 46px 0 14px;
  border: 1px solid ${({theme:e,$color:t})=>t??e.colors.border};
  border-radius: 12px;
  background: ${({$color:e})=>e?`${e}18`:`rgba(255,255,255,0.04)`};
  color: ${({theme:e,$color:t})=>t??e.colors.text};
  font: inherit;
  font-weight: ${({$color:e})=>e?700:500};
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  box-sizing: border-box;
`,DS=K.span`
  position: absolute;
  top: 50%;
  right: 16px;
  width: 8px;
  height: 8px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: translateY(${({$open:e})=>e?`-30%`:`-70%`}) rotate(${({$open:e})=>e?`225deg`:`45deg`});
  pointer-events: none;
  opacity: 0.72;
`,OS=K.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 30;
  width: max-content;
  min-width: 280px;
  max-height: none;
  overflow: visible;
  padding: 6px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 14px;
  background: ${({theme:e})=>e.colors.surface};
  box-shadow: 0 16px 36px rgba(0,0,0,0.28);
  display: grid;
  gap: 4px;
`,kS=K.button`
  width: 100%;
  min-height: 38px;
  padding: 0 10px;
  border: 0;
  border-radius: 9px;
  background: ${({$color:e,$active:t})=>t&&e?`${e}18`:`transparent`};
  color: ${({theme:e,$color:t,$active:n})=>n&&t?t:e.colors.text};
  font: inherit;
  font-size: 14px;
  font-weight: ${({$active:e})=>e?700:500};
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 9px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    flex: 0 0 8px;
    border-radius: 50%;
    background: ${({$color:e})=>e??`transparent`};
  }

  &:hover {
    background: ${({$color:e})=>e?`${e}12`:`rgba(255,255,255,0.05)`};
    color: ${({theme:e,$color:t})=>t??e.colors.text};
  }
`,AS=K.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,jS=K.div`
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 3fr);
  gap: 12px;
`,MS=K.button`
  display: inline-grid;
  grid-template-columns: repeat(2, 4px);
  grid-template-rows: repeat(3, 4px);
  gap: 4px;
  align-content: center;
  justify-content: center;
  width: 36px;
  height: 42px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  cursor: grab;
  padding: 0;

  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: currentColor;
    opacity: 0.85;
  }
`,NS=K.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
`,PS=K.button`
  min-width: 104px;
  min-height: 36px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid ${({$type:e,$active:t,theme:n})=>t?e===`easy`?`#22c55e`:e===`medium`?`#eab308`:`#ef4444`:n.colors.border};
  background: ${({$type:e,$active:t})=>t?e===`easy`?`rgba(34,197,94,0.18)`:e===`medium`?`rgba(234,179,8,0.18)`:`rgba(239,68,68,0.18)`:`rgba(255,255,255,0.04)`};
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
`,FS=K.div`
  position: absolute;
  top: 14px;
  right: 14px;
`,IS=K.button`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
`,LS=K.div`
  position: absolute;
  top: 40px;
  right: 0;
  min-width: 170px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.surface};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  z-index: 20;
`,RS=K.button`
  width: 100%;
  text-align: left;
  padding: 10px 12px;
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;

  &:hover { background: rgba(255,255,255,0.05); }
`,zS=[{value:`easy`,label:`легкий`},{value:`medium`,label:`средний`},{value:`hard`,label:`сложный`}],BS=()=>(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{})]}),VS=e=>{let t=Number.isFinite(e)&&e>0?Math.floor(e):0,n=Math.floor(t/60),r=t%60;return`${n}:${String(r).padStart(2,`0`)}`},HS=(e,t)=>{let n=e.trim();if(/^\d+$/.test(n)){let e=Number(n);return e>0?e*60:t}let r=n.match(/^(\d+):([0-5]?\d)$/);if(!r)return t;let i=Number(r[1])*60+Number(r[2]);return i>0?i:t},US=e=>e.questions.reduce((e,t)=>(t.difficulty===`easy`&&(e.easy+=1),t.difficulty===`medium`&&(e.medium+=1),t.difficulty===`hard`&&(e.hard+=1),e),{easy:0,medium:0,hard:0}),WS=(e,t)=>t===0?0:e/t*100,GS=e=>e===`hunter-extra`?2:15,KS=e=>{let t=e%100,n=e%10;return t>=11&&t<=14?`вопросов`:n===1?`вопрос`:n>=2&&n<=4?`вопроса`:`вопросов`},qS=(e,t)=>{let n=t-e;if(n===0)return null;let r=Math.abs(n);return n>0?`Не хватает ${r} ${KS(r)}`:`${r} лишний${r===1?``:`х`} ${KS(r)}`},JS=({pool:e,question:t,index:n,pools:r,selectedBonusIds:i})=>{let a=Lo(),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)(!1),{attributes:u,listeners:d,setNodeRef:f,transform:p,transition:m,isDragging:h}=wy({id:t.id}),g={transform:$m.Transform.toString(p),transition:m,opacity:h?.75:1},_=r.filter(t=>t.id!==e.id),v=t.author??``,y=v?cd[v]:void 0,b=n=>{a(uf({poolId:e.id,questionId:t.id,field:`author`,value:n})),l(!1)};return(0,q.jsxs)(bS,{ref:f,style:g,children:[(0,q.jsx)(MS,{type:`button`,...u,...d,"aria-label":`Перетащить вопрос`,children:(0,q.jsx)(BS,{})}),(0,q.jsxs)(xS,{children:[(0,q.jsxs)(CS,{children:[(0,q.jsxs)(wS,{children:[(0,q.jsx)(`span`,{children:`Автор`}),(0,q.jsxs)(TS,{onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||l(!1)},children:[(0,q.jsx)(ES,{type:`button`,$color:y,onClick:()=>l(e=>!e),"aria-haspopup":`listbox`,"aria-expanded":c,children:v||`Выберите автора`}),(0,q.jsx)(DS,{$open:c}),c&&(0,q.jsxs)(OS,{role:`listbox`,children:[(0,q.jsx)(kS,{type:`button`,$active:!v,onClick:()=>b(``),children:`Выберите автора`}),od.map(e=>(0,q.jsx)(kS,{type:`button`,role:`option`,"aria-selected":v===e,$color:cd[e],$active:v===e,onClick:()=>b(e),children:e},e))]})]})]}),i&&(0,q.jsxs)(SS,{children:[(0,q.jsx)(`input`,{type:`checkbox`,role:`switch`,"aria-label":`Включить бонусный вопрос ${n+1} в игру`,checked:i.has(t.id),disabled:!i.has(t.id)&&i.size>=2,onChange:()=>a(af(t.id))}),`В игру`]}),(0,q.jsx)(AS,{children:zS.map(n=>(0,q.jsx)(PS,{type:`button`,$type:n.value,$active:t.difficulty===n.value,"aria-pressed":t.difficulty===n.value,onClick:()=>a(df({poolId:e.id,questionId:t.id,difficulty:n.value})),children:n.label},n.value))})]}),(0,q.jsxs)(jS,{children:[(0,q.jsx)(NS,{placeholder:`Вопрос ${n+1} *`,value:t.question,onChange:n=>a(uf({poolId:e.id,questionId:t.id,field:`question`,value:n.target.value}))}),(0,q.jsx)(NS,{placeholder:`Ответ *`,value:t.answer,onChange:n=>a(uf({poolId:e.id,questionId:t.id,field:`answer`,value:n.target.value}))})]}),(0,q.jsx)(NS,{"aria-label":`Комментарий к вопросу ${n+1}`,placeholder:`Комментарий`,value:t.comment??``,onChange:n=>a(uf({poolId:e.id,questionId:t.id,field:`comment`,value:n.target.value}))})]}),(0,q.jsxs)(FS,{children:[(0,q.jsx)(IS,{type:`button`,onClick:()=>s(e=>!e),children:`⋯`}),o&&(0,q.jsx)(LS,{children:_.map(n=>(0,q.jsxs)(RS,{type:`button`,onClick:()=>{a(pf({fromPoolId:e.id,toPoolId:n.id,questionId:t.id})),s(!1)},children:[`Перенести в `,n.title]},n.id))})]})]})},YS=({pool:e,pools:t})=>{let n=Lo(),[r,i]=(0,x.useState)(!1),a=hh(mh(hg,{activationConstraint:{distance:6}})),o=(0,x.useMemo)(()=>US(e),[e]),s=e.questions.length,c=e.questions.filter(e=>e.question.trim()!==``&&e.answer.trim()!==``).length,l=GS(e.id),u=e.id===`hunter-extra`?new Set(Xd(e).map(e=>e.id)):void 0,d=qS(u?.size??s,l),f=(0,x.useMemo)(()=>e.questions.map(e=>e.id),[e.questions]);return(0,q.jsxs)(lS,{children:[(0,q.jsxs)(uS,{children:[(0,q.jsxs)(dS,{children:[(0,q.jsxs)(fS,{children:[(0,q.jsx)(pS,{children:e.id===`hunter-extra`?`Бонусные вопросы для Охотника`:e.title}),(0,q.jsx)(mS,{$invalid:!!d,children:u?`Выбрано ${u.size} из 2`:`${c} из ${l} ${KS(l)}`}),d&&(0,q.jsx)(hS,{children:d})]}),(0,q.jsxs)(gS,{children:[(0,q.jsx)(_S,{$type:`easy`,$width:WS(o.easy,s),children:o.easy}),(0,q.jsx)(_S,{$type:`medium`,$width:WS(o.medium,s),children:o.medium}),(0,q.jsx)(_S,{$type:`hard`,$width:WS(o.hard,s),children:o.hard})]})]}),(0,q.jsx)(vS,{type:`button`,onClick:()=>i(e=>!e),children:r?`Свернуть`:`Развернуть`})]}),r&&(0,q.jsxs)(yS,{children:[(0,q.jsx)(f_,{sensors:a,collisionDetection:Sh,onDragEnd:t=>{let{active:r,over:i}=t;if(!i)return;let a=String(r.id),o=String(i.id);a!==o&&n(ff({poolId:e.id,activeQuestionId:a,overQuestionId:o}))},children:(0,q.jsx)(gy,{items:f,strategy:fy,children:e.questions.map((n,r)=>(0,q.jsx)(JS,{pool:e,question:n,index:r,pools:t,selectedBonusIds:u},n.id))})}),(0,q.jsx)(sS,{type:`button`,onClick:()=>n(hf({poolId:e.id})),children:`Очистить пул`})]})]})},XS=()=>{let e=Lo(),t=J(e=>e.roundThree),n=t.pools,r=t.packTimeSeconds??240,i=t.hunterTimeSeconds??210,[a,o]=(0,x.useState)(!1),[s,c]=(0,x.useState)(!1),[l,u]=(0,x.useState)(VS(r)),[d,f]=(0,x.useState)(VS(i));return(0,q.jsxs)(Zx,{children:[(0,q.jsxs)(Qx,{children:[(0,q.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:14},children:[(0,q.jsx)(Gp,{}),(0,q.jsx)(oS,{children:`Раунд 3`})]}),(0,q.jsxs)($x,{children:[(0,q.jsxs)(eS,{children:[(0,q.jsxs)(tS,{children:[(0,q.jsx)(nS,{children:`Время для стаи`}),a?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(iS,{value:l,onChange:e=>u(e.target.value),placeholder:`4:00`}),(0,q.jsx)(aS,{type:`button`,onClick:()=>{let t=HS(l,240);e(cf(t)),u(VS(t)),o(!1)},children:`✅`})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(rS,{children:VS(r)}),(0,q.jsx)(aS,{type:`button`,onClick:()=>{u(VS(r)),o(!0)},children:`✏️`})]})]}),(0,q.jsxs)(tS,{children:[(0,q.jsx)(nS,{children:`Время для Охотника`}),s?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(iS,{value:d,onChange:e=>f(e.target.value),placeholder:`3:30`}),(0,q.jsx)(aS,{type:`button`,onClick:()=>{let t=HS(d,210);e(lf(t)),f(VS(t)),c(!1)},children:`✅`})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(rS,{children:VS(i)}),(0,q.jsx)(aS,{type:`button`,onClick:()=>{f(VS(i)),c(!0)},children:`✏️`})]})]})]}),(0,q.jsx)(sS,{type:`button`,onClick:()=>e(sf()),children:`Очистить всё`})]})]}),(0,q.jsx)(cS,{children:n.map(e=>(0,q.jsx)(YS,{pool:e,pools:n},e.id))})]})},ZS=K.main`
  min-height: 100vh;
  padding: 24px 24px 115px;
  background: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.text};
`,QS=K.section`
  display: grid;
  gap: 18px;
  padding: 24px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 20px;
  background: ${({theme:e})=>e.colors.surface};
`,$S=K.div`opacity: .72; font-size: 14px;`,eC=K.div`${ev}`,tC=K.em`
  display: block;
  margin-top: 6px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font-style: italic;
`,nC=K.div`
  padding: 18px;
  border-radius: 14px;
  background: ${({theme:e})=>e.colors.background};
  ${nv}
`,rC=K.div`display:flex;justify-content:space-between;font-size:18px;font-weight:700;`,iC=K.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 12px;
`,aC=K.button`
  justify-self: start;
  &:first-child { justify-self: end; }
  padding: 7px 10px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 9px;
  color: ${({theme:e})=>e.colors.text};
  background: transparent;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  &:disabled { opacity: .45; cursor: default; }
`,oC=K.div`font-size:36px;font-weight:800;font-variant-numeric:tabular-nums;`,sC=K.div`display:grid;place-items:center;min-height:70vh;text-align:center;opacity:.7;`,cC=K.div`font-size:22px;font-weight:800;`,lC=K.div`display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;`,uC=K.button`
  grid-column: ${({$wide:e})=>e?`1 / -1`:`auto`};
  min-width: 180px;
  min-height: 54px;
  padding: 0 22px;
  border-radius: 14px;
  border: 1px solid ${({$kind:e,theme:t})=>e===`good`?`#22c55e`:e===`bad`?`#ef4444`:e===`secondary`?`#7dd3fc`:t.colors.border};
  background: ${({$kind:e})=>e===`good`?`rgba(34,197,94,.14)`:e===`bad`?`rgba(239,68,68,.12)`:e===`secondary`?`rgba(125,211,252,.10)`:`rgba(255,255,255,.05)`};
  color: ${({theme:e})=>e.colors.text};
  font-size: 17px;
  font-weight: 900;
  cursor: pointer;
  &:disabled { cursor: not-allowed; opacity: .45; }
`,dC=K.nav`
  position: fixed;
  bottom: 0;
  inset-inline: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  padding: 8px 8px max(22px, env(safe-area-inset-bottom));
  background: ${({theme:e})=>e.colors.surface};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,fC={current:`#b3d9ff`,correct:`#b3dfbd`,wrong:`#f3b7b7`,upcoming:`#343943`},pC={current:`текущий`,correct:`верно`,wrong:`неверно`,upcoming:`впереди`},mC=K.button`
  width: 25px;
  height: 25px;
  padding: 0;
  border: 0;
  border-radius: 4px;
  background: ${({$status:e})=>fC[e]};
  color: ${({$status:e})=>e===`upcoming`?`#a3a8b3`:`#172333`};
  font-weight: 700;
  cursor: pointer;
  &:disabled { cursor: default; }
  &[aria-pressed="true"], &:focus-visible { outline: 2px solid ${({theme:e})=>e.colors.text}; outline-offset: 1px; }
`,hC=K(uC)`
  grid-column: 1 / -1;
  justify-self: center;
  display: grid;
  place-items: center;
  min-width: 44px;
  min-height: 44px;
  padding: 0;
`,gC=e=>e===`pack`?`Стая`:e===`hunter`?`Охотник`:`—`,_C=()=>{let[e,t]=(0,x.useState)(null),[n,r]=(0,x.useState)(null);if((0,x.useEffect)(()=>{let e=new BroadcastChannel(Du);return r(e),e.onmessage=e=>{e.data.type===`STATE`&&t(e.data.payload)},e.postMessage({type:`REQUEST_STATE`}),()=>{e.close(),r(null)}},[]),!e)return(0,q.jsx)(ZS,{children:(0,q.jsxs)(sC,{children:[`Окно ведущего готово.`,(0,q.jsx)(`br`,{}),`Ожидаю начало третьего раунда…`]})});let i=e=>n?.postMessage({type:`COMMAND`,command:e}),a=t=>n?.postMessage({type:`REVIEW`,index:t,poolId:e.poolId,currentIndex:e.questionIndex}),o=e.reviewIndex!=null,s=e.phase===`turn-transition`||e.phase.startsWith(`final-`),c=t=>n?.postMessage({type:`ADJUST_TIME`,delta:t,poolId:e.poolId}),l=Math.floor(e.secondsLeft/60),u=e.secondsLeft%60;return(0,q.jsxs)(ZS,{children:[(0,q.jsxs)(QS,{children:[(0,q.jsxs)(rC,{children:[(0,q.jsxs)(`span`,{children:[(0,q.jsx)(Uv,{side:`pack`}),` `,e.packScore]}),(0,q.jsxs)(`span`,{children:[(0,q.jsx)(Uv,{side:`hunter`}),` `,e.hunterScore]})]}),(0,q.jsxs)(iC,{children:[(0,q.jsx)(aC,{type:`button`,disabled:s||e.secondsLeft===0,onClick:()=>c(-10),children:`−10 секунд`}),(0,q.jsxs)(oC,{children:[l,`:`,String(u).padStart(2,`0`)]}),(0,q.jsx)(aC,{type:`button`,disabled:s,onClick:()=>c(10),children:`+10 секунд`})]}),e.secondsLeft===0&&!s&&!o&&(0,q.jsx)(uC,{type:`button`,$kind:`bad`,style:{justifySelf:`center`,minHeight:36,borderColor:`#a46468`,background:`rgba(163,82,88,.17)`},onClick:()=>n?.postMessage({type:`FINISH_SCENARIO`,poolId:e.poolId}),children:`Завершить сценарий`}),(0,q.jsx)(cC,{children:o?`Просмотр · Таймер на паузе`:`Сейчас отвечает: ${gC(e.answeringSide)}`}),(0,q.jsxs)($S,{children:[gC(e.side),` · Сценарий `,e.poolId??`—`,` · Вопрос `,(e.reviewIndex??e.questionIndex)+1,`/`,e.questionCount]}),(0,q.jsx)(eC,{children:e.question||`Вопрос пока не выбран`}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)($S,{children:`Правильный ответ`}),(0,q.jsx)(nC,{children:e.answer||`—`}),e.comment?.trim()&&(0,q.jsx)(tC,{children:e.comment})]}),e.author?.trim()&&(0,q.jsxs)($S,{children:[`Автор: `,e.author]}),o?(0,q.jsx)(uC,{type:`button`,onClick:()=>a(null),children:`Вернуться к игре`}):e.phase===`steal`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(eC,{children:[`Вопрос передаётся: `,gC(e.answeringSide)]}),(0,q.jsxs)(lC,{children:[(0,q.jsx)(uC,{$kind:`bad`,type:`button`,onClick:()=>i(`STEAL_WRONG`),children:`Неверно`}),(0,q.jsx)(uC,{$kind:`good`,type:`button`,onClick:()=>i(`STEAL_CORRECT`),children:`Верно`})]})]}):e.phase===`ban-choice`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(eC,{children:`Может ли Стая украсть вопрос?`}),(0,q.jsxs)($S,{children:[`У Охотника осталось запретов: `,e.hunterBanUsesLeft]}),(0,q.jsxs)(lC,{children:[(0,q.jsx)(uC,{type:`button`,onClick:()=>i(`ALLOW_STEAL`),children:`Может`}),(0,q.jsx)(uC,{$kind:`bad`,type:`button`,onClick:()=>i(`FORBID_STEAL`),children:`Запрет`})]})]}):(0,q.jsxs)(lC,{children:[(0,q.jsx)(uC,{$kind:`bad`,type:`button`,disabled:e.phase!==`question`,onClick:()=>i(`WRONG`),children:`Неверно`}),(0,q.jsx)(uC,{$kind:`good`,type:`button`,disabled:e.phase!==`question`,onClick:()=>i(`CORRECT`),children:`Верно`}),(0,q.jsx)(uC,{type:`button`,disabled:e.phase!==`question`,onClick:()=>i(`PAUSE`),children:`Пауза`}),(0,q.jsx)(uC,{type:`button`,disabled:![`manual-pause`,`continue`,`turn-transition`].includes(e.phase),onClick:()=>i(`CONTINUE`),children:`Продолжить`}),(0,q.jsx)(hC,{"aria-label":`Предыдущий вопрос`,title:`Предыдущий вопрос`,$kind:`secondary`,type:`button`,disabled:e.questionIndex===0||e.phase===`turn-transition`,onClick:()=>i(`PREVIOUS`),children:(0,q.jsx)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,q.jsx)(`path`,{d:`M9 5 4 10l5 5M4 10h10a6 6 0 0 1 0 12`,transform:`translate(0 -1)`})})})]})]}),!e.phase.startsWith(`final-`)&&(0,q.jsx)(dC,{"aria-label":`Вопросы третьего раунда`,children:e.questionStatuses?.map((t,n)=>(0,q.jsx)(mC,{type:`button`,$status:t,disabled:t===`upcoming`||t===`current`&&!o,"aria-current":t===`current`?`step`:void 0,"aria-pressed":e.reviewIndex===n,"aria-label":`Вопрос ${n+1}, ${pC[t]}`,onClick:()=>a(n),children:n+1},n))})]})},vC=()=>{let e=Lo(),t=wt(),n=J(e=>e.gameRoundThree.startingSide),r=J(e=>e.gameRoundTwo.hunterBonusIds),[i,a]=(0,x.useState)(null),[o,s]=(0,x.useState)(!1);(0,x.useEffect)(()=>{n||t(`/game/round/3/start`,{replace:!0})},[n,t]);let c=n=>{e(pu({poolId:n,hunterBanUses:r.includes(`ban-x2`)?2:0,hunterStartingScore:r.includes(`plus-2-points`)?2:0})),t(`/game/round/3/play`)};return(0,q.jsx)(Bb,{children:(0,q.jsxs)(Vb,{children:[(0,q.jsx)(Hb,{children:`Выберите сценарий`}),(0,q.jsxs)(Ub,{children:[(0,q.jsx)(Wb,{type:`button`,$flash:i===`A`,onClick:()=>c(`A`),children:`Сценарий A`}),(0,q.jsx)(Wb,{type:`button`,$flash:i===`B`,onClick:()=>c(`B`),children:`Сценарий B`})]}),(0,q.jsx)(Kb,{type:`button`,$running:o,onClick:()=>{if(o)return;s(!0);let e=0,t=window.setInterval(()=>{if(e+=1,a(e=>e===`A`?`B`:`A`),e>=12){window.clearInterval(t);let e=Math.random()<.5?`A`:`B`;a(e),window.setTimeout(()=>c(e),650)}},140)},children:`Случайный выбор`})]})})},yC=()=>{let e=Lo(),t=wt();(0,x.useEffect)(()=>{Ou()},[]);let n=n=>{e(fu(n)),t(`/game/round/3/scenario`)};return(0,q.jsx)(Bb,{children:(0,q.jsxs)(Vb,{children:[(0,q.jsx)(Hb,{children:`Кто начинает третий раунд?`}),(0,q.jsxs)(Ub,{children:[(0,q.jsxs)(Wb,{type:`button`,onClick:()=>n(`pack`),children:[(0,q.jsx)(Uv,{side:`pack`}),` Стая`]}),(0,q.jsxs)(Wb,{type:`button`,onClick:()=>n(`hunter`),children:[(0,q.jsx)(Uv,{side:`hunter`}),` Охотник`]})]})]})})},bC=K.div`
  height: calc(100dvh - 174px);
  min-height: 0;
  box-sizing: border-box;
  padding: 6px 18px 14px;
  display: grid;
  grid-template-rows: minmax(440px, 1fr) 82px;
  gap: 12px;
  overflow: hidden;
`,xC=K.div`
  min-height: 0;
  display: grid;
  grid-template-columns: 270px minmax(0, 1fr) 270px;
  gap: 18px;
  align-items: stretch;
`,SC=K.div`
  display: grid;
  align-content: center;
  justify-items: stretch;
  gap: 12px;
`,CC=K.div`
  display: flex;
  justify-content: center;
  gap: 9px;
  min-height: 48px;
  transform: translateY(-82px);
  margin-bottom: -82px;
`,wC=K.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid ${({$active:e,theme:t})=>e?`#e8b923`:t.colors.border};
  background: ${({$active:e})=>e?`rgba(232,185,35,.14)`:`rgba(255,255,255,.035)`};
  display: grid;
  place-items: center;
  font-size: 23px;
  filter: ${({$active:e})=>e?`none`:`grayscale(1)`};
  opacity: ${({$active:e})=>e?1:.35};
  box-shadow: ${({$active:e})=>e?`0 0 0 4px rgba(232,185,35,.08)`:`none`};
`,TC=K.div`
  position: relative;
  width: 66px;
  height: 66px;
  margin: 0 auto -2px;
`,EC=K.div`width:66px;height:66px;border-radius:50%;border:2px solid ${({$winner:e})=>e?`#e8b923`:`rgba(255,255,255,.22)`};background:${({theme:e})=>e.colors.surface};box-shadow:${({$winner:e})=>e?`0 0 0 4px rgba(232,185,35,.12), 0 10px 28px rgba(232,185,35,.25)`:`0 10px 24px rgba(0,0,0,.3)`};display:grid;place-items:center;font-size:36px;`,DC=K.div`position:absolute;right:-27px;top:-19px;z-index:3;font-size:30px;filter:drop-shadow(0 5px 8px rgba(0,0,0,.35));transform:rotate(10deg);`,OC=K.div`min-height:72px;padding:12px 16px;border-radius:18px;border:2px solid ${({$winner:e,theme:t})=>e?`#e8b923`:t.colors.border};background:${({theme:e})=>e.colors.surface};box-shadow:${({$winner:e})=>e?`0 10px 28px rgba(232,185,35,.14)`:`none`};display:grid;place-items:center;text-align:center;font-size:20px;font-weight:900;`,kC=K.div`display:flex;justify-content:center;gap:10px;flex-wrap:nowrap;`,AC=K.div`width:34px;height:34px;flex:0 0 34px;border-radius:50%;border:4px solid ${({$active:e,$result:t})=>t===`hit`||t===`saved`?`#22c55e`:t===`miss`?`#ef4444`:e?`#facc15`:`rgba(255,255,255,.35)`};background:${({$result:e})=>e===`hit`?`#22c55e`:e===`saved`?`rgba(34,197,94,.15)`:e===`miss`?`rgba(239,68,68,.22)`:`transparent`};box-shadow:${({$active:e})=>e?`0 0 0 4px rgba(250,204,21,.12)`:`none`};display:grid;place-items:center;font-size:18px;`,jC=K.div`display:grid;grid-template-columns:repeat(3,1fr);gap:8px;`,MC=K.button`min-height:48px;border-radius:12px;border:1px solid ${({$selected:e,$correct:t,$wrong:n,theme:r})=>t?`#22c55e`:n?`#ef4444`:e?`#6f91cf`:r.colors.border};background:${({$selected:e,$correct:t,$wrong:n})=>t?`rgba(34,197,94,.16)`:n?`rgba(239,68,68,.14)`:e?`rgba(73,108,174,.22)`:`rgba(255,255,255,.04)`};color:${({theme:e})=>e.colors.text};font-size:18px;font-weight:900;cursor:pointer;`,NC=K.div`position:relative;min-height:0;border:1px solid ${({theme:e})=>e.colors.border};border-radius:24px;background:${({theme:e})=>e.colors.surface};box-shadow:0 18px 42px rgba(0,0,0,.2);padding:20px 28px 24px;display:grid;place-items:center;overflow:hidden;`,PC=K.div`width:100%;height:100%;min-height:0;display:grid;grid-template-rows:${({$hasImage:e})=>e?`auto minmax(290px,1fr) auto`:`auto auto`};gap:${({$hasImage:e})=>e?`10px`:`22px`};align-content:${({$hasImage:e})=>e?`stretch`:`center`};`,FC=K.img`width:min(980px,100%);height:100%;min-height:290px;max-height:430px;justify-self:center;object-fit:contain;border-radius:16px;border:1px solid rgba(255,255,255,.09);background:rgba(0,0,0,.16);box-shadow:0 12px 30px rgba(0,0,0,.2);`,IC=K.div`width:100%;padding:0 82px;display:grid;place-items:center;text-align:center;${ev}
box-sizing:border-box;`,LC=K.div`width:min(1100px,100%);margin:0 auto;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));align-content:center;gap:16px;`,RC=K.div`min-height:88px;padding:18px 20px;box-sizing:border-box;border:1px solid ${({$correct:e,theme:t})=>e?`#22c55e`:t.colors.border};border-radius:14px;background:${({$correct:e})=>e?`rgba(34,197,94,.14)`:`rgba(255,255,255,.035)`};display:flex;align-items:center;gap:12px;${nv}
overflow-wrap:anywhere;min-width:0;`,zC=K.span`width:40px;height:40px;flex:0 0 40px;border-radius:10px;background:rgba(73,108,174,.24);display:grid;place-items:center;font-weight:900;`,BC=K.div`position:absolute;left:50%;bottom:14px;z-index:4;width:min(760px,calc(100% - 56px));transform:translateX(-50%);padding:10px 16px;border:1px solid rgba(255,255,255,.12);border-radius:14px;background:rgba(10,15,30,.58);backdrop-filter:blur(12px);text-align:center;font-size:15px;font-weight:700;`,VC=K.div`position:absolute;top:18px;right:18px;width:68px;height:68px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#ef4444 ${({$progress:e})=>`${Math.max(0,Math.min(1,e))*360}deg`},rgba(239,68,68,.16) 0);&::before{content:'';position:absolute;inset:5px;border-radius:50%;background:${({theme:e})=>e.colors.surface};}span{position:relative;z-index:1;font-size:22px;font-weight:900;}`,HC=K.div`position:absolute;inset:0;z-index:5;border-radius:inherit;background:${({theme:e})=>e.colors.surface};display:grid;place-items:center;`,UC=K.div`min-width:310px;padding:22px;border-radius:18px;border:1px solid ${({theme:e})=>e.colors.border};background:${({theme:e})=>e.colors.surface};display:grid;justify-items:center;gap:16px;font-size:21px;font-weight:900;`,WC=K.div`align-self:center;justify-self:center;width:min(720px,100%);display:grid;justify-items:center;gap:14px;text-align:center;`,GC=K.div`font-size:clamp(54px,6vw,86px);line-height:.95;font-weight:1000;letter-spacing:.04em;`,KC=K.div`font-size:clamp(30px,3vw,44px);line-height:1.15;font-weight:1000;`,qC=K.div`max-width:620px;color:${({theme:e})=>e.colors.mutedText};font-size:18px;line-height:1.45;font-weight:700;`,JC=K.button`min-width:190px;min-height:48px;padding:0 20px;border:1px solid #5b7fc4;border-radius:12px;background:#496cae;color:#fff;font-weight:800;cursor:pointer;&:disabled{opacity:.45;cursor:not-allowed;}`,YC=K.div`display:grid;gap:10px;justify-items:stretch;min-width:212px;`,XC=K(JC)`width:100%;background:rgba(34,197,94,.14);border-color:#22c55e;color:#4ade80;&:hover{background:rgba(34,197,94,.22);}`,ZC=K.div`min-height:0;display:grid;grid-template-columns:270px minmax(0,1fr) 270px;gap:18px;`,QC=K.div`grid-column:2;min-width:0;display:flex;align-items:flex-end;justify-content:space-between;gap:24px;`,$C=K.div`display:flex;justify-content:flex-start;align-items:flex-end;gap:18px;min-width:0;`,ew=K.div`width:min(260px,24vw);display:grid;gap:8px;`,tw=K.div`text-align:center;font-weight:800;opacity:.9;`,nw=K.div`min-width:190px;min-height:48px;display:flex;justify-content:flex-end;align-items:flex-end;`,rw=K.div`position:fixed;inset:0;z-index:100;background:rgba(4,7,18,.72);backdrop-filter:blur(8px);display:grid;place-items:center;padding:24px;`,iw=K.div`width:min(680px,100%);padding:28px;border:1px solid ${({theme:e})=>e.colors.border};border-radius:24px;background:${({theme:e})=>e.colors.surface};box-shadow:0 24px 70px rgba(0,0,0,.45);display:grid;gap:22px;`,aw=K.div`font-size:28px;font-weight:900;text-align:center;`,ow=K.div`display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:14px;`,sw=K.button`min-height:140px;padding:18px 12px;border-radius:18px;border:1px solid ${({$owned:e,theme:t})=>e?`#e8b923`:t.colors.border};background:${({$owned:e})=>e?`rgba(232,185,35,.1)`:`rgba(255,255,255,.035)`};color:${({theme:e})=>e.colors.text};display:grid;place-items:center;align-content:center;gap:10px;cursor:${({$owned:e})=>e?`default`:`pointer`};opacity:${({$owned:e})=>e?.45:1};span{font-size:38px;}strong{font-size:14px;line-height:1.25;}`,cw=[`А`,`Б`,`В`],lw={"minus-30":{title:`Минус 30 секунд`,icon:`⏱️`},"ban-x2":{title:`Запрет X2`,icon:`🚫`},"plus-2-points":{title:`Плюс 2 балла`,icon:`⭐`},"plus-2-questions":{title:`Плюс 2 вопроса`,icon:`❓`}},uw=Object.keys(lw),dw=()=>{let e=Lo(),t=wt(),n=J(e=>e.roundTwo),r=J(e=>e.gameRoundTwo),i=J(e=>e.gameTieBreak),a=J(e=>e.bonusSelection.selected),{players:o,isFourthActive:s}=J(e=>e.players),c=(0,x.useMemo)(()=>o.slice(0,s?4:3),[o,s]),l=n.timeLimitSeconds??10,u=n.blocks[r.currentDuelIndex]?.questions??[],d=u[r.currentQuestionIndex],f=r.hunterIndex??0,p=!s&&r.currentDuelIndex===2,m=r.opponentIndex??c.map((e,t)=>t).find(e=>e!==f)??0,h=p?r.opponentOrder[r.currentQuestionIndex<3?0:1]:m,g=c.map((e,t)=>t).filter(e=>e!==f&&e!==h),_=a.length>0?a:uw,v=(0,x.useMemo)(()=>Jf(`roundTwoGame`),[]),y=v?.duelIndex===r.currentDuelIndex&&v?.questionIndex===r.currentQuestionIndex,[b,S]=(0,x.useState)(()=>y?v.phase:`prompt`),[C,w]=(0,x.useState)(()=>y?v.secondsLeft:l),[T,E]=(0,x.useState)(()=>y?v.answers:{}),[D,O]=(0,x.useState)(()=>y?v.bonusModalOpen:!1);if((0,x.useEffect)(()=>{Yf(`roundTwoGame`,{duelIndex:r.currentDuelIndex,questionIndex:r.currentQuestionIndex,phase:b,secondsLeft:C,answers:T,bonusModalOpen:D})},[r.currentDuelIndex,r.currentQuestionIndex,b,C,T,D]),(0,x.useEffect)(()=>{if(b!==`question`||C<=0)return;let e=window.setTimeout(()=>w(e=>e-1),1e3);return()=>window.clearTimeout(e)},[b,C]),!d)return null;let k=e=>{let t=c[e];return t?`${t.firstName} ${t.lastName}`.trim():`Игрок ${e+1}`},A=(e,t)=>{b===`question`&&E(n=>({...n,[e]:t}))},ee=[f,h,...g].every(e=>T[e]!==void 0)&&d.correctOption!==null,j=()=>{if(!ee||d.correctOption===null)return;let t=T[f]===d.correctOption,n=T[h]===d.correctOption,r=g.length>0&&g.every(e=>T[e]===d.correctOption);e(iu({hunterHit:t,opponentHit:n,opponentSaved:t&&!n&&r})),S(`result`)},M=()=>{e(au()),E({}),w(l),S(`prompt`)},N=r.currentQuestionIndex>=u.length-1,te=r.hunterShots.filter(e=>e===`hit`).length,P=r.opponentShots.filter(e=>e===`hit`||e===`saved`).length,F=b===`result`&&N,ne=new Set([f,h]),re=r.duelTieBreakPending&&i.winnerIndex!==null&&ne.has(i.winnerIndex)&&i.participantIndexes.length===2&&i.participantIndexes.every(e=>ne.has(e))?i.winnerIndex:null,ie=F&&te===P&&re===null,I=re??(F&&te!==P?te>P?f:h:null),L=I!==null||ie,R=I===h,z=I===f,B=r.bonusAwardedDuelIndexes.includes(r.currentDuelIndex),ae=_.some(e=>!r.hunterBonusIds.includes(e)),oe=z&&!B&&ae,se=r.currentDuelIndex+1,ce=n.blocks[se]?.questions??[],le=r.opponentOrder.slice(0,r.currentDuelIndex+1),ue=c.map((e,t)=>t).filter(e=>e!==f&&!le.includes(e)),V=!s&&se===2,de=(ue.length>0||V)&&ce.length>0,fe=re!==null&&te===P,pe=te+(fe&&z?1:0),me=P+(fe&&R?1:0),he=()=>{e(ou()),e(G_({participantIndexes:[h,f],nextPath:`/game/round/2`})),t(`/game/tie-break`)},ge=()=>{if(!oe){if(I!==null&&e(tu({opponentIndex:p?-1:h,winner:z?`hunter`:`opponent`})),!de){Ou(),t(`/game/round/3/start`);return}if(V||ue.length>1){t(`/game/hunter-reveal`);return}e(su({opponentIndex:ue[0],questionCount:ce.length})),E({}),w(l),S(`prompt`)}},_e=t=>{r.hunterBonusIds.includes(t)||(e(eu(t)),O(!1))},ve=e=>(0,q.jsx)(jC,{children:cw.map((t,n)=>{let r=T[e]===n;return(0,q.jsx)(MC,{type:`button`,$selected:r,$correct:b===`result`&&n===d.correctOption,$wrong:b===`result`&&r&&n!==d.correctOption,onClick:()=>A(e,n),children:t},t)})}),ye=e=>(0,q.jsx)(kC,{children:u.map((t,n)=>{let i=e[n];return(0,q.jsx)(AC,{$active:!L&&n===r.currentQuestionIndex,$result:i,children:i===`saved`?`🤝`:null},t.questionId)})});return(0,q.jsxs)(bC,{children:[(0,q.jsxs)(xC,{children:[(0,q.jsxs)(SC,{children:[ye(r.opponentShots),(0,q.jsxs)(TC,{children:[(0,q.jsx)(EC,{$winner:R,"aria-hidden":`true`,children:(0,q.jsx)(Uv,{side:`pack`})}),R&&(0,q.jsx)(DC,{"aria-hidden":`true`,children:`👑`})]}),(0,q.jsx)(OC,{$winner:R,children:k(h)}),ve(h)]}),(0,q.jsx)(NC,{children:L?(0,q.jsx)(WC,{children:ie?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(KC,{children:`Ничья`}),(0,q.jsx)(qC,{children:`Будет разыгран дополнительный вопрос между участниками дуэли.`}),(0,q.jsx)(JC,{type:`button`,onClick:he,children:`Далее →`})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(GC,{children:[me,`:`,pe]}),(0,q.jsx)(KC,{children:R?`Игроку удалось убежать`:`Охотник поймал игрока`}),(0,q.jsx)(qC,{children:`${p&&R?`Стая`:k(I)} выигрывает дуэль`}),(0,q.jsxs)(YC,{children:[(0,q.jsx)(JC,{type:`button`,disabled:oe,onClick:ge,children:V?`Перейти к бонусной дуэли →`:de?`Перейти к дуэли ${se+1} →`:`Перейти к третьему раунду →`}),oe&&(0,q.jsx)(XC,{type:`button`,onClick:()=>O(!0),children:`Выбор бонуса`})]})]})}):(0,q.jsxs)(q.Fragment,{children:[b!==`prompt`&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(VC,{$progress:C/l,children:(0,q.jsx)(`span`,{children:C})}),(0,q.jsxs)(PC,{$hasImage:!!d.image,children:[(0,q.jsx)(IC,{children:d.question}),d.image&&(0,q.jsx)(FC,{src:d.image,alt:`Изображение к вопросу`}),(0,q.jsx)(LC,{children:d.options.map((e,t)=>(0,q.jsxs)(RC,{$correct:b===`result`&&t===d.correctOption,children:[(0,q.jsx)(zC,{children:cw[t]}),e]},t))})]}),b===`result`&&d.comment?.trim()&&(0,q.jsx)(BC,{children:d.comment})]}),b===`prompt`&&(0,q.jsx)(HC,{children:(0,q.jsxs)(UC,{children:[(0,q.jsx)(`div`,{children:`Показать вопрос?`}),(0,q.jsx)(JC,{type:`button`,onClick:()=>{w(l),S(`question`)},children:`Да`})]})})]})}),(0,q.jsxs)(SC,{children:[(0,q.jsx)(CC,{children:_.map(e=>(0,q.jsx)(wC,{$active:r.hunterBonusIds.includes(e),title:lw[e].title,children:lw[e].icon},e))}),ye(r.hunterShots),(0,q.jsxs)(TC,{children:[(0,q.jsx)(EC,{$winner:z,"aria-hidden":`true`,children:(0,q.jsx)(Uv,{side:`hunter`})}),z&&(0,q.jsx)(DC,{"aria-hidden":`true`,children:`👑`})]}),(0,q.jsx)(OC,{$winner:z,children:k(f)}),ve(f)]})]}),(0,q.jsx)(ZC,{children:(0,q.jsxs)(QC,{children:[(0,q.jsx)($C,{children:g.map(e=>(0,q.jsxs)(ew,{children:[(0,q.jsxs)(tw,{children:[k(e),` · помогает`]}),ve(e)]},e))}),(0,q.jsxs)(nw,{children:[!L&&b===`question`&&(0,q.jsx)(JC,{type:`button`,disabled:!ee,onClick:j,children:`Показать ответ`}),!L&&b===`result`&&!N&&(0,q.jsx)(JC,{type:`button`,onClick:M,children:`Следующий вопрос →`})]})]})}),D&&(0,q.jsx)(rw,{onMouseDown:()=>O(!1),children:(0,q.jsxs)(iw,{onMouseDown:e=>e.stopPropagation(),children:[(0,q.jsx)(aw,{children:`Выберите бонус Охотника`}),(0,q.jsx)(ow,{children:_.map(e=>{let t=lw[e],n=r.hunterBonusIds.includes(e);return(0,q.jsxs)(sw,{type:`button`,$owned:n,disabled:n,onClick:()=>_e(e),children:[(0,q.jsx)(`span`,{children:t.icon}),(0,q.jsx)(`strong`,{children:t.title})]},e)})})]})})]})},fw=K.div``,pw=K.div`
  margin-bottom: 16px;
  padding: 12px 14px;
  border: 1px solid #f59e0b;
  border-radius: 12px;
  background: rgba(245, 158, 11, 0.12);
  color: #fbbf24;
  font-weight: 600;
`,mw=K.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-bottom: 20px;
`,hw=K.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,gw=K.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  padding: 0 12px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
`,_w=K.div`
  font-weight: 700;
  white-space: nowrap;
`,vw=K.input`
  width: 84px;
  min-height: 36px;
  padding: 0 10px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 10px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  font-weight: 700;
`,yw=K.button`
  width: 36px;
  height: 36px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 10px;
  background: transparent;
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
  font-size: 18px;
`,bw=K.h2`
  margin: 0;
  font-size: 28px;
`,xw=K.button`
  min-width: 140px;
  padding: 10px 14px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.surface||`transparent`};
  color: ${({theme:e})=>e.colors.text};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`,Sw=K.div`
  display: grid;
  gap: 16px;
`,Cw=K.div`
  padding: 18px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 20px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01)),
    ${({theme:e})=>e.colors.surface||`#151515`};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
`,ww=K.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
`,Tw=K.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,Ew=K.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
`,Dw=K.div`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.mutedText};
  white-space: nowrap;
`,Ow=K.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.accentSoft};
  color: ${({theme:e})=>e.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
`,kw=K.h3`
  margin: 0;
  font-size: 18px;
  white-space: nowrap;
`,Aw=K.button`
  min-width: 110px;
  padding: 10px 12px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
`,jw=K.div`
  margin-top: 18px;
`,Mw=K.div`
  display: grid;
  gap: 12px;
`,Nw=K.div`
  position: relative;
  display: flex;
  gap: 12px;
  padding: 14px 56px 14px 14px;
  border-radius: 16px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.04);

  ${({$dragging:e})=>e&&G`
      opacity: 0.8;
      transform: scale(1.01);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.24);
    `}

  label {
    display: block;
    margin-bottom: 6px;
    font-size: 13px;
    color: ${({theme:e})=>e.colors.mutedText};
    font-weight: 600;
  }
`,Pw=K.button`
  display: inline-grid;
  grid-template-columns: repeat(2, 4px);
  grid-template-rows: repeat(3, 4px);
  gap: 4px;
  align-content: center;
  justify-content: center;
  width: 36px;
  height: 44px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  cursor: grab;
  padding: 0;
  flex-shrink: 0;

  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: currentColor;
    opacity: 0.85;
  }
`,Fw=K.div`
  width: 100%;
  min-width: 0;
  padding-right: 18px;
`,Iw=K.div`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 14px;
  align-items: stretch;
  margin-bottom: 14px;
`,Lw=K.div`
  min-width: 0;
`,Rw=K.div`
  position: relative;
  min-width: 0;
  height: 100%;
`,zw=K.label`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 112px;
  margin: 0 !important;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.035);
  color: ${({theme:e})=>e.colors.mutedText};
  display: grid !important;
  place-items: center;
  cursor: pointer;
  box-sizing: border-box;
  transition: border-color .18s ease, background .18s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.accent};
    background: ${({theme:e})=>e.colors.accentSoft};
  }
`,Bw=K.div`
  display: grid;
  justify-items: center;
  gap: 7px;
  font-size: 13px;
  font-weight: 700;

  svg {
    width: 25px;
    height: 25px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`,Vw=K.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,Hw=K.input`
  display: none;
`,Uw=K.button`
  position: absolute;
  top: 7px;
  right: 7px;
  z-index: 3;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 1px solid rgba(255,255,255,.22);
  border-radius: 9px;
  background: rgba(8,12,24,.76);
  color: #fff;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 17px;
  line-height: 1;
`,Ww=K.div`
  display: block;
  margin-bottom: 10px;
`,Gw=K.div`
  width: 100%;
  min-width: 0;
`,Kw=K.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 310px;
  gap: 18px;
  align-items: center;
`,qw=K.div`
  display: grid;
  grid-template-columns: auto 212px;
  align-items: center;
  justify-content: end;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.mutedText};

  > span {
    white-space: nowrap;
  }
`,Jw=K.div`
  position: relative;
  width: 212px;
  flex: 0 0 212px;
`,Yw=K.button`
  width: 212px;
  height: 42px;
  padding: 0 46px 0 14px;
  border: 1px solid ${({theme:e,$color:t})=>t??e.colors.border};
  border-radius: 12px;
  background: ${({$color:e})=>e?`${e}18`:`rgba(255,255,255,0.04)`};
  color: ${({theme:e,$color:t})=>t??e.colors.text};
  font: inherit;
  font-weight: ${({$color:e})=>e?700:500};
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: ${({$color:e})=>e?`${e}24`:`rgba(255,255,255,0.07)`};
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px ${({$color:e})=>e?`${e}28`:`rgba(96,165,250,0.2)`};
  }
`,Xw=K.span`
  position: absolute;
  top: 50%;
  right: 16px;
  width: 8px;
  height: 8px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: translateY(${({$open:e})=>e?`-30%`:`-70%`}) rotate(${({$open:e})=>e?`225deg`:`45deg`});
  pointer-events: none;
  opacity: 0.72;
  transition: transform 0.18s ease;
`,Zw=K.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 30;
  width: max-content;
  min-width: 280px;
  max-height: none;
  overflow: visible;
  padding: 6px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 14px;
  background: ${({theme:e})=>e.colors.surface};
  box-shadow: 0 16px 36px rgba(0,0,0,0.28);
  display: grid;
  gap: 4px;
`,Qw=K.button`
  width: 100%;
  min-height: 38px;
  padding: 0 10px;
  border: 0;
  border-radius: 9px;
  background: ${({$color:e,$active:t})=>t&&e?`${e}18`:`transparent`};
  color: ${({theme:e,$color:t,$active:n})=>n&&t?t:e.colors.text};
  font: inherit;
  font-size: 14px;
  font-weight: ${({$active:e})=>e?700:500};
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 9px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    flex: 0 0 8px;
    border-radius: 50%;
    background: ${({$color:e})=>e??`transparent`};
    box-shadow: ${({$color:e})=>e?`0 0 0 3px ${e}18`:`none`};
  }

  &:hover {
    background: ${({$color:e})=>e?`${e}12`:`rgba(255,255,255,0.05)`};
    color: ${({theme:e,$color:t})=>t??e.colors.text};
  }
`,$w=K.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border: 1px solid ${({theme:e,$success:t})=>t?e.colors.success:e.colors.border};
  border-radius: 12px;
  background: ${({$success:e})=>e?`rgba(34, 197, 94, 0.09)`:`rgba(255,255,255,0.04)`};
  color: ${({theme:e})=>e.colors.text};
`,eT=K($w)`
  margin: 0;
  background: rgba(255,255,255,0.025);
  color: ${({theme:e})=>e.colors.text};

  &::placeholder {
    color: ${({theme:e})=>e.colors.mutedText};
  }
`,tT=K.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  gap: 20px;
`,nT=K.button`
  width: 100%;
  margin-top: 8px;
  min-height: 38px;
  border-radius: 10px;
  border: 1px solid ${({$active:e,theme:t})=>e?t.colors.success:t.colors.border};
  background: ${({$active:e})=>e?`rgba(34, 197, 94, 0.14)`:`transparent`};
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
`,rT=K.div`
  position: absolute;
  top: 12px;
  right: 12px;
`,iT=K.button`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
`,aT=K.div`
  position: absolute;
  top: 40px;
  right: 0;
  min-width: 180px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.surface||`#151515`};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  z-index: 10;
`,oT=K.button`
  width: 100%;
  text-align: left;
  padding: 10px 12px;
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;

  &:hover {
    background: rgba(255,255,255,0.05);
  }
`,sT=()=>(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{})]}),cT=()=>(0,q.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,q.jsx)(`path`,{d:`M12 16V4`}),(0,q.jsx)(`path`,{d:`m7.5 8.5 4.5-4.5 4.5 4.5`}),(0,q.jsx)(`path`,{d:`M5 13.5v4A2.5 2.5 0 0 0 7.5 20h9a2.5 2.5 0 0 0 2.5-2.5v-4`})]}),lT=e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(String(r.result??``)),r.onerror=n,r.readAsDataURL(e)}),uT=({blockIndex:e,question:t,openMenuQuestionId:n,setOpenMenuQuestionId:r,totalBlocks:i})=>{let a=Lo(),[o,s]=(0,x.useState)(!1),{attributes:c,listeners:l,setNodeRef:u,transform:d,transition:f,isDragging:p}=wy({id:t.questionId}),m={transform:$m.Transform.toString(d),transition:f},h=t.author??``,g=h?cd[h]:void 0,_=n=>{a(Ef({blockIndex:e,questionId:t.questionId,field:`author`,value:n})),s(!1)},v=async n=>{let r=n.currentTarget,i=r.files?.[0];if(!i)return;let o=await lT(i);a(Ef({blockIndex:e,questionId:t.questionId,field:`image`,value:o})),r.value=``},y=()=>{a(Ef({blockIndex:e,questionId:t.questionId,field:`image`,value:``}))};return(0,q.jsxs)(Nw,{ref:u,style:m,$dragging:p,children:[(0,q.jsx)(Pw,{type:`button`,...c,...l,"aria-label":`Перетащить вопрос`,children:(0,q.jsx)(sT,{})}),(0,q.jsxs)(Fw,{children:[(0,q.jsxs)(Iw,{children:[(0,q.jsxs)(Rw,{children:[(0,q.jsxs)(zw,{title:t.image?`Заменить картинку вопроса`:`Добавить картинку к вопросу`,children:[t.image?(0,q.jsx)(Vw,{src:t.image,alt:`Превью вопроса`}):(0,q.jsxs)(Bw,{children:[(0,q.jsx)(cT,{}),(0,q.jsx)(`span`,{children:`Добавить картинку`})]}),(0,q.jsx)(Hw,{type:`file`,accept:`image/*`,onChange:v})]}),t.image&&(0,q.jsx)(Uw,{type:`button`,"aria-label":`Удалить картинку`,title:`Удалить картинку`,onClick:y,children:`×`})]}),(0,q.jsxs)(Lw,{children:[(0,q.jsx)(Ww,{children:(0,q.jsxs)(Gw,{children:[(0,q.jsx)(`label`,{children:`Вопрос *`}),(0,q.jsx)($w,{value:t.question,onChange:n=>a(Ef({blockIndex:e,questionId:t.questionId,field:`question`,value:n.target.value}))})]})}),(0,q.jsxs)(Kw,{children:[(0,q.jsx)(eT,{value:t.comment??``,placeholder:`Комментарий (необязательно)`,onChange:n=>a(Ef({blockIndex:e,questionId:t.questionId,field:`comment`,value:n.target.value}))}),(0,q.jsxs)(qw,{children:[(0,q.jsx)(`span`,{children:`Автор`}),(0,q.jsxs)(Jw,{onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||s(!1)},children:[(0,q.jsx)(Yw,{type:`button`,$color:g,onClick:()=>s(e=>!e),"aria-haspopup":`listbox`,"aria-expanded":o,children:h||`Выберите автора`}),(0,q.jsx)(Xw,{$open:o}),o&&(0,q.jsxs)(Zw,{role:`listbox`,children:[(0,q.jsx)(Qw,{type:`button`,$active:!h,onClick:()=>_(``),children:`Выберите автора`}),od.map(e=>(0,q.jsx)(Qw,{type:`button`,role:`option`,"aria-selected":h===e,$color:cd[e],$active:h===e,onClick:()=>_(e),children:e},e))]})]})]})]})]})]}),(0,q.jsx)(tT,{children:t.options.map((n,r)=>{let i=t.correctOption===r;return(0,q.jsxs)(`div`,{children:[(0,q.jsxs)(`label`,{children:[`Вариант `,[`А`,`Б`,`В`][r],` *`]}),(0,q.jsx)($w,{$success:i,value:n,onChange:n=>a(Df({blockIndex:e,questionId:t.questionId,optionIndex:r,value:n.target.value}))}),(0,q.jsx)(nT,{type:`button`,$active:i,onClick:()=>a(Of({blockIndex:e,questionId:t.questionId,correctOption:r})),children:i?`Правильный ответ`:`Сделать правильным`})]},r)})})]}),(0,q.jsxs)(rT,{children:[(0,q.jsx)(iT,{type:`button`,onClick:()=>r(n===t.questionId?null:t.questionId),children:`⋯`}),n===t.questionId&&(0,q.jsx)(aT,{children:Array.from({length:i},(e,t)=>t).filter(t=>t!==e).map(n=>(0,q.jsxs)(oT,{type:`button`,onClick:()=>{a(Af({fromBlockIndex:e,toBlockIndex:n,questionId:t.questionId})),r(null)},children:[`Перенести в блок `,n+1]},n))})]})]})},dT=()=>{let e=Lo(),t=J(e=>e.roundTwo),n=t.blocks,[r,i]=(0,x.useState)({}),[a,o]=(0,x.useState)(null),[s,c]=(0,x.useState)(!1),[l,u]=(0,x.useState)(String(t.timeLimitSeconds??10)),d=hh(mh(hg,{activationConstraint:{distance:6}}));(0,x.useEffect)(()=>{n.length!==3&&e(wf(3))},[n.length,e]);let f=n.some(e=>e.questions.length!==6),p=(t,n)=>{let{active:r,over:i}=n;!i||r.id===i.id||e(kf({blockIndex:t,activeId:String(r.id),overId:String(i.id)}))};return(0,q.jsxs)(fw,{children:[(0,q.jsxs)(mw,{children:[(0,q.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:14},children:[(0,q.jsx)(Gp,{}),(0,q.jsx)(bw,{children:`Раунд 2`})]}),(0,q.jsxs)(hw,{children:[(0,q.jsx)(gw,{children:s?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(vw,{value:l,inputMode:`numeric`,onChange:e=>u(e.target.value)}),(0,q.jsx)(_w,{children:`секунд`}),(0,q.jsx)(yw,{type:`button`,onClick:()=>{let t=Number(l),n=Number.isFinite(t)&&t>0?Math.floor(t):10;e(Tf(n)),u(String(n)),c(!1)},children:`✅`})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(_w,{children:[t.timeLimitSeconds??10,` секунд`]}),(0,q.jsx)(yw,{type:`button`,onClick:()=>{u(String(t.timeLimitSeconds??10)),c(!0)},children:`✏️`})]})}),(0,q.jsx)(xw,{type:`button`,onClick:()=>e(wf(3)),children:`Очистить всё`})]})]}),f&&(0,q.jsx)(pw,{children:`В каждой теме должно быть 6 вопросов`}),(0,q.jsx)(Sw,{children:n.map((e,t)=>{let n=!!r[t],s=e.questions.map(e=>e.questionId);return(0,q.jsxs)(Cw,{children:[(0,q.jsxs)(ww,{children:[(0,q.jsxs)(Tw,{children:[(0,q.jsx)(Ow,{children:t+1}),(0,q.jsxs)(Ew,{children:[(0,q.jsxs)(kw,{children:[`Блок `,t+1]}),(0,q.jsxs)(Dw,{children:[e.questions.length,` вопросов`]})]})]}),(0,q.jsx)(Aw,{type:`button`,onClick:()=>i(e=>({...e,[t]:!e[t]})),children:n?`Свернуть`:`Развернуть`})]}),n&&(0,q.jsx)(jw,{children:(0,q.jsx)(f_,{sensors:d,collisionDetection:Sh,onDragEnd:e=>p(t,e),children:(0,q.jsx)(gy,{items:s,strategy:fy,children:(0,q.jsx)(Mw,{children:e.questions.map(e=>(0,q.jsx)(uT,{blockIndex:t,question:e,openMenuQuestionId:a,setOpenMenuQuestionId:o,totalBlocks:3},e.questionId))})})})})]},t)})})]})},fT=async e=>{let t=new Uint8Array(await e.arrayBuffer()),n=new DataView(t.buffer),r=0;for(;r+30<=t.length&&n.getUint32(r,!0)===67324752;){let e=n.getUint16(r+6,!0),i=n.getUint16(r+8,!0),a=n.getUint32(r+18,!0),o=n.getUint16(r+26,!0),s=n.getUint16(r+28,!0),c=r+30+o+s,l=new TextDecoder().decode(t.slice(r+30,r+30+o));if(e&8)throw Error(`unsupported_docx`);if(c+a>t.length)throw Error(`invalid_docx`);if(l===`word/document.xml`){let e=t.slice(c,c+a);if(i===0)return new TextDecoder().decode(e);if(i===8){let t=new Blob([e]).stream().pipeThrough(new DecompressionStream(`deflate-raw`));return new Response(t).text()}throw Error(`unsupported_docx`)}r=c+a}throw Error(`invalid_docx`)},pT=e=>{let t=new DOMParser().parseFromString(e,`application/xml`);if(t.querySelector(`parsererror`))throw Error(`invalid_docx`);return Array.from(t.getElementsByTagNameNS(`*`,`p`)).map(e=>{let t=Array.from(e.getElementsByTagNameNS(`*`,`t`)).map(e=>e.textContent??``).join(``).trim(),n=Array.from(e.getElementsByTagNameNS(`*`,`highlight`)).map(e=>e.getAttribute(`w:val`)??e.getAttribute(`val`));return{text:t,difficulty:n.includes(`green`)?`easy`:n.includes(`yellow`)?`medium`:n.includes(`red`)?`hard`:null}}).filter(e=>e.text)},mT=/^Бонусный вопрос для Охотника\s+/i,hT=/^(\d+)(?:\s*[-–.]?\s*(?:й|ый|ой)?\s*вопрос)?(?:\s*\(автор:\s*(.*?)\))?\s*$/i,gT=/\s*\(автор:\s*(.*?)\)\s*$/i,_T=async e=>{let t=pT(await fT(e)),n=Nd(),r=yf(3),i=Jd(),a=i.pools[2],o=[],s,c=ud();c.items=[];let l=0,u=-1,d=-1,f=-1,p=-1,m=-1,h=0,g=!1,_=!1,v=!1,y=``;for(let{text:e,difficulty:a}of t){let t=/^КиноОхота(?:\s*№\s*(\d+))?\.?$/i.exec(e);if(t){y=t[1]??``;continue}if(/^Первый (?:раунд|этап)(?:\s*\..*)?$/i.test(e)){l=1,p=-1;continue}if(/^Второй (?:раунд|этап)/i.test(e)){l=2,p=-1;continue}if(/^Третий (?:раунд|этап)(?:\s*\..*)?$/i.test(e)){l=3,p=-1;continue}if(/^Дополнительные вопросы/i.test(e)){l=4,p=-1;continue}if(l===1){let t=/^Тема\s*№?\s*(\d+)\s*:\s*(.*)$/i.exec(e);if(t){u=Number(t[1])-1,p=-1,u>=0&&u<5&&(n.themes[u].title=t[2].replace(gT,``).trim(),n.themes[u].author=gT.exec(t[2])?.[1]??``);continue}}if(l===2){let t=/^Игрок\s*№?\s*(\d+)/i.exec(e);if(t){d=Number(t[1])-1,p=-1;continue}}if(l===3){let t=/^Сценарий\s*№?\s*(\d+)(?:\s*[—–-]\s*(.*))?$/i.exec(e);if(t){f=Number(t[1])-1,p=-1,g=!1,f>=0&&f<2&&t[2]&&(i.pools[f].title=t[2]);continue}let n=/^Бонусные вопросы для Охотника(?: \(для игры: ([\d, ]+|—)\))?$/i.exec(e);if(n){n[1]&&(s=n[1].split(`,`).map(Number)),g=!0,p=-1;continue}}let b=l===3&&mT.test(e),x=hT.exec(b?e.replace(mT,``):e);if(x){b&&(g=!0),p=Number(x[1])-1,_=!1,v=!1;let e=x[2]??``;if(l===1&&u>=0&&u<5&&p<5&&p>=0&&h++,l===2&&d>=0&&d<3&&p<6&&p>=0&&(r.blocks[d].questions[p].author=e,h++),l===3){g&&(p=o.length,o.push(qd()));let t=g?o[p]:i.pools[f]?.questions[p];t&&(t.author=e,t.difficulty=a,h++)}if(l===4&&(m=p,m>=0&&m<500)){for(;c.items.length<=m;)c.items.push(ld(`extra-`+(c.items.length+1)));c.items[m].author=e,h++}continue}let S=/^Ответ:\s*(.*)$/i.exec(e),C=/^Комментарий:\s*(.*)$/i.exec(e);if(l===1&&u>=0&&u<5){let t=n.themes[u];if(p<0){t.description=[t.description,e].filter(Boolean).join(`
`);continue}if(p>=5)continue;let r=t.questions[p];S?(r.answer=S[1],_=!0):C?r.comment=C[1]:_||(r.text=[r.text,e].filter(Boolean).join(`
`))}else if(l===2&&d>=0&&d<3&&p>=0&&p<6){let t=r.blocks[d].questions[p],n=/^([АБВABC])\)\s*(.*)$/i.exec(e);if(n){let e=[`А`,`Б`,`В`].indexOf(n[1].toUpperCase()),r=[`A`,`B`,`C`].indexOf(n[1].toUpperCase()),i=e>=0?e:r,a=n[2].endsWith(`*`);t.options[i]=a?n[2].slice(0,-1).trimEnd():n[2],a&&(t.correctOption=i),v=!0}else C?t.comment=C[1]:v||(t.question=[t.question,e].filter(Boolean).join(`
`))}else if(l===3){let t=g?o[p]:i.pools[f]?.questions[p];if(!t)continue;if(S)t.answer=S[1],_=!0;else if(C)t.comment=C[1];else if(!_){let n=/^(.*?)\s+Ответ:\s*(.+)$/i.exec(e);t.question=[t.question,n?.[1]??e].filter(Boolean).join(`
`),n&&(t.answer=n[2],_=!0)}}else if(l===4&&m>=0&&m<c.items.length){let t=c.items[m];S?(t.answer=S[1],_=!0):_||(t.question=[t.question,e].filter(Boolean).join(`
`))}}if(o.length&&(a.questions=o,s&&(a.selectedQuestionIds=o.filter((e,t)=>s.includes(t+1)).slice(0,2).map(e=>e.id))),!h)throw Error(`no_questions_found`);return c.items.length||c.items.push(ld(`extra-1`)),{app:`kino-ohota`,version:2,playersCount:3,scenarioNumber:y,roundOne:n,roundTwo:r,roundThree:i,extraQuestions:c}},vT=K.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  gap: 18px;
  align-items: center;
  margin-bottom: 24px;
`,yT=K.h2`
  margin: 0;
  font-size: 28px;
`;K.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  padding: 0 16px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.text};
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,K.span`
  font-size: 18px;
  line-height: 1;
`;var bT=K.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  gap: 18px;
`,xT=K.div`
  min-height: 30vh;
  padding: 18px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 20px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01)),
    ${({theme:e})=>e.colors.surface};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
`,ST=K(xT)``,CT=K(xT)``,wT=K.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,TT=K.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 18px;
`,ET=K.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.accentSoft};
  color: ${({theme:e})=>e.colors.accent};
  font-size: 20px;
  font-weight: 800;
  flex-shrink: 0;
`,DT=K.div`
  font-size: 18px;
  font-weight: 700;
`,OT=K.div`
  color: ${({theme:e})=>e.colors.mutedText};
  font-size: 13px;
  margin-top: 4px;
`,kT=K.div`
  display: flex;
  gap: 10px;
  margin-top: 4px;
`,AT=K.div`
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: ${({$filled:e,theme:t})=>e?t.colors.accentSoft:`rgba(255, 255, 255, 0.03)`};
  font-size: 22px;
`,jT=K.div`
  display: grid;
  gap: 10px;
`,MT=K.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 6px;
`,NT=K.div`
  height: 10px;
  border-radius: 999px;
  background: ${({$filled:e,theme:t})=>e?`linear-gradient(90deg, rgba(58, 125, 68, 0.86), rgba(91, 148, 74, 0.78))`:t.colors.progressEmpty};
`,PT=K.button`
  width: 100%;
  min-height: 42px;
  margin-top: auto;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  color: ${({theme:e})=>e.colors.text};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`,FT=K.section`
  min-height: 30vh;
  padding: 20px;
  border: 1px dashed ${({theme:e})=>e.colors.border};
  border-radius: 20px;
  background: ${({theme:e})=>e.colors.surface};
`,IT=K.h3`
  margin: 0 0 8px;
  font-size: 18px;
`,LT=K.p`
  margin: 0 0 16px;
  color: ${({theme:e})=>e.colors.mutedText};
  font-size: 14px;
`,RT=K.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  padding: 0 16px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
  font-weight: 600;
`,zT=K.span`
  line-height: 1;
`,BT=K.input`
  display: none;
`,VT=K.div`
  margin-top: 10px;
  color: ${({theme:e})=>e.colors.mutedText};
  font-size: 13px;
`,HT=K.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  padding: 14px 16px;
  border-radius: 12px;
  background: #ef4444;
  color: white;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.24);
  z-index: 50;
`,UT=K.div`
  grid-column: 3;
  min-height: 52px;
  padding: 6px 14px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 16px;
  background: ${({theme:e})=>e.colors.surface};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`,WT=K.label`
  font-size: 18px;
  font-weight: 700;
`,GT=K.input`
  width: 84px;
  height: 38px;
  box-sizing: border-box;
  padding: 0 10px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  outline: none;

  &:focus {
    border-color: ${({theme:e})=>e.colors.accent};
  }
`,KT={"minus-30":`⏱️`,"ban-x2":`🚫`,"plus-2-points":`⭐`,"plus-2-questions":`❓`},qT=()=>{let e=wt(),t=Lo(),n=J(e=>e.roundOne),r=J(e=>e.roundTwo),i=J(e=>e.roundThree),a=J(e=>e.extraQuestions),o=J(e=>e.bonusSelection.selected),s=J(e=>e.players.scenarioNumber),c=(0,x.useRef)(null),[l,u]=(0,x.useState)(!1),d=(0,x.useMemo)(()=>n.themes.map(e=>e.questions.map(t=>e.title.trim()!==``&&e.description.trim()!==``&&t.answer.trim()!==``&&t.questionImage.trim()!==``&&t.answerImage.trim()!==``)),[n.themes]),f=(0,x.useMemo)(()=>r.blocks.map(e=>e.questions.map(e=>{let t=e.options.every(e=>e.trim()!==``);return e.question.trim()!==``&&t&&e.correctOption!==null})),[r.blocks]),p=(0,x.useMemo)(()=>i.pools.map(e=>e.questions.map(e=>e.question.trim()!==``&&e.answer.trim()!==``)),[i.pools]),m=()=>{u(!0),window.setTimeout(()=>u(!1),5e3)};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`div`,{children:[(0,q.jsxs)(vT,{children:[(0,q.jsx)(yT,{children:`Настройка сценария`}),(0,q.jsxs)(UT,{children:[(0,q.jsx)(WT,{htmlFor:`scenario-number`,children:`КиноОхота №`}),(0,q.jsx)(GT,{id:`scenario-number`,type:`text`,inputMode:`numeric`,maxLength:4,value:s,onChange:e=>t(wd(e.target.value)),"aria-label":`Номер КиноОхоты`})]})]}),(0,q.jsxs)(bT,{children:[(0,q.jsxs)(xT,{children:[(0,q.jsxs)(wT,{children:[(0,q.jsxs)(TT,{children:[(0,q.jsx)(ET,{children:`1`}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(DT,{children:`Раунд 1`}),(0,q.jsx)(OT,{children:`5 по 5 вопросов`})]})]}),(0,q.jsx)(jT,{children:d.map((e,t)=>(0,q.jsx)(MT,{children:e.map((e,t)=>(0,q.jsx)(NT,{$filled:e},t))},t))})]}),(0,q.jsx)(PT,{type:`button`,onClick:()=>e(`/round/1`),children:`Настроить`})]}),(0,q.jsxs)(xT,{children:[(0,q.jsxs)(wT,{children:[(0,q.jsxs)(TT,{children:[(0,q.jsx)(ET,{children:`2`}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(DT,{children:`Раунд 2`}),(0,q.jsx)(OT,{children:`3 по 6 вопросов`})]})]}),(0,q.jsx)(jT,{children:Array.from({length:3},(e,t)=>(0,q.jsx)(MT,{children:Array.from({length:6},(e,n)=>(0,q.jsx)(NT,{$filled:f[t]?.[n]??!1},n))},t))})]}),(0,q.jsx)(PT,{type:`button`,onClick:()=>e(`/round/2`),children:`Настроить`})]}),(0,q.jsxs)(xT,{children:[(0,q.jsxs)(wT,{children:[(0,q.jsxs)(TT,{children:[(0,q.jsx)(ET,{children:`3`}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(DT,{children:`Раунд 3`}),(0,q.jsx)(OT,{children:`2 по 15 вопросов + 2 для Охотника`})]})]}),(0,q.jsxs)(jT,{children:[Array.from({length:2},(e,t)=>(0,q.jsx)(MT,{children:Array.from({length:15},(e,n)=>(0,q.jsx)(NT,{$filled:p[t]?.[n]??!1},n))},t)),(0,q.jsx)(MT,{children:Array.from({length:2},(e,t)=>(0,q.jsx)(NT,{$filled:p[2]?.[t]??!1},t))})]})]}),(0,q.jsx)(PT,{type:`button`,onClick:()=>e(`/round/3`),children:`Настроить`})]}),(0,q.jsxs)(FT,{children:[(0,q.jsx)(IT,{children:`Загрузить сценарий`}),(0,q.jsx)(LT,{children:`Загрузи сценарий из приложения или Word-документ с вопросами.`}),(0,q.jsxs)(RT,{type:`button`,onClick:()=>c.current?.click(),children:[(0,q.jsx)(`span`,{children:`＋`}),(0,q.jsx)(zT,{children:`Добавить файл сценария`})]}),(0,q.jsx)(BT,{ref:c,type:`file`,accept:`.knh,application/x-kinohota,application/json,.json,.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document`,onChange:async e=>{let n=e.target.files?.[0];if(n)try{let e=n.name.toLowerCase().endsWith(`.docx`)?await _T(n):await Ep(n);t(Dd(e.playersCount)),t(Yp(e.bonuses?.length?e.bonuses:[`ban-x2`,`plus-2-points`,`plus-2-questions`])),t(wd(e.scenarioNumber??``)),t(Id(e.roundOne)),t(Cf(e.roundTwo)),t(of(e.roundThree)),t(vd(e.extraQuestions))}catch{c.current&&(c.current.value=``),m()}}}),(0,q.jsx)(VT,{children:`Поддерживаются .docx с вопросами, .knh и .json. При импорте текущий сценарий заменяется.`})]}),(0,q.jsxs)(ST,{children:[(0,q.jsxs)(wT,{children:[(0,q.jsxs)(TT,{children:[(0,q.jsx)(ET,{children:`★`}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(DT,{children:`Выбор бонусов`}),(0,q.jsx)(OT,{children:`Настройка бонусов для игры`})]})]}),(0,q.jsx)(kT,{children:Array.from({length:3},(e,t)=>{let n=o[t];return(0,q.jsx)(AT,{$filled:!!n,children:n?KT[n]:``},t)})})]}),(0,q.jsx)(PT,{type:`button`,onClick:()=>e(`/scenario/bonuses`),children:`Настроить`})]}),(0,q.jsxs)(CT,{children:[(0,q.jsxs)(wT,{children:[(0,q.jsxs)(TT,{children:[(0,q.jsx)(ET,{children:`＋`}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(DT,{children:`Доп. вопросы`}),(0,q.jsx)(OT,{children:`Свободный список вопросов и ответов`})]})]}),(0,q.jsx)(jT,{children:(0,q.jsx)(MT,{children:a.items.map(e=>(0,q.jsx)(NT,{$filled:e.question.trim()!==``&&e.answer.trim()!==``},e.id))})})]}),(0,q.jsx)(PT,{type:`button`,onClick:()=>e(`/extra-questions`),children:`Настроить`})]})]})]}),l&&(0,q.jsx)(HT,{children:`Не удалось открыть сценарий`})]})},JT=K.div`
  position: relative;
  min-height: 196px;
  padding: 18px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 20px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01)),
    ${({theme:e})=>e.colors.surface};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
  opacity: ${({$readonly:e})=>e?.72:1};
`,YT=K.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  margin-bottom: 14px;
`,XT=K.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`,ZT=K.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
`,QT=K.button`
  position: relative;
  width: 44px;
  height: 26px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: ${({$active:e,theme:t})=>e?t.colors.success:t.colors.border};
  cursor: pointer;
`,$T=K.span`
  position: absolute;
  top: 3px;
  left: ${({$active:e})=>e?`21px`:`3px`};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
  transition: left 0.2s ease;
`,eE=K.div`
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
`,tE=K.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 12px 14px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  color: ${({theme:e})=>e.colors.text};

  &::placeholder {
    color: ${({theme:e})=>e.colors.mutedText};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,nE=({index:e,player:t,isFourthCard:n,isFourthActive:r,onToggleFourth:i,onChange:a})=>{let o=n&&!r;return(0,q.jsxs)(JT,{$readonly:o,children:[(0,q.jsxs)(YT,{children:[(0,q.jsxs)(XT,{children:[(0,q.jsxs)(ZT,{children:[`Игрок `,e+1]}),o&&(0,q.jsx)(eE,{children:`Не участвует`})]}),n&&(0,q.jsx)(QT,{type:`button`,"aria-label":r?`Отключить 4-го игрока`:`Включить 4-го игрока`,"aria-pressed":r,onClick:i,$active:r,children:(0,q.jsx)($T,{$active:r})})]}),(0,q.jsx)(tE,{placeholder:`Имя`,value:t.firstName,disabled:o,onChange:e=>a({...t,firstName:e.target.value})}),(0,q.jsx)(tE,{placeholder:`Фамилия`,value:t.lastName,disabled:o,onChange:e=>a({...t,lastName:e.target.value})})]})},rE=K.div`display:flex;justify-content:space-between;gap:16px;align-items:center;margin-bottom:24px;`,iE=K.div`display:flex;align-items:center;gap:12px;`,aE=K.h2`margin:0;font-size:32px;line-height:1.1;`,oE=K.button`width:44px;height:44px;display:inline-flex;align-items:center;justify-content:center;padding:0;border:1px solid ${({theme:e})=>e.colors.border};border-radius:12px;background:${({theme:e})=>e.colors.surface};color:${({theme:e})=>e.colors.text};font-size:20px;line-height:1;cursor:pointer;&:disabled{opacity:.45;cursor:not-allowed;}`,sE=K.button`min-height:44px;display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:0 16px;border:1px solid #9b7ad8;border-radius:12px;background:rgba(155,122,216,.16);color:#bda5eb;font-size:15px;font-weight:700;cursor:pointer;&:hover:not(:disabled){background:rgba(155,122,216,.24);}&:disabled{opacity:.42;cursor:not-allowed;}`;K.button`min-height:40px;padding:0 14px;border:1px solid #b85c5c;border-radius:11px;background:rgba(184,92,92,.14);color:#df9292;font-weight:600;cursor:pointer;&:hover{background:rgba(184,92,92,.23);}`;var cE=K.button`min-height:40px;padding:0 16px;border:1px solid #b85c5c;border-radius:11px;background:#b85c5c;color:#fff;font-weight:600;cursor:pointer;&:hover{background:#9f4f4f;border-color:#9f4f4f;}`,lE=K.button`width:44px;height:44px;display:inline-flex;align-items:center;justify-content:center;padding:0;border:1px solid ${({theme:e})=>e.colors.border};border-radius:12px;background:${({theme:e})=>e.colors.surface};color:${({theme:e})=>e.colors.text};font-size:24px;line-height:1;cursor:pointer;&:disabled{opacity:.45;cursor:not-allowed;}`,uE=K.div`position:fixed;inset:0;z-index:100;display:grid;place-items:center;padding:20px;background:rgba(0,0,0,.58);backdrop-filter:blur(4px);`,dE=K.div`width:min(520px,100%);padding:24px;box-sizing:border-box;border:1px solid ${({theme:e})=>e.colors.border};border-radius:18px;background:${({theme:e})=>e.colors.surface};box-shadow:0 20px 60px rgba(0,0,0,.35);`,fE=K.h3`margin:0 0 12px;font-size:22px;`,pE=K.p`margin:0;color:${({theme:e})=>e.colors.text};line-height:1.55;`,mE=K.div`display:flex;justify-content:flex-end;gap:10px;margin-top:22px;`,hE=K.button`min-height:40px;padding:0 16px;border:1px solid ${({theme:e})=>e.colors.border};border-radius:11px;background:${({theme:e})=>e.colors.surfaceAlt};color:${({theme:e})=>e.colors.text};font-weight:600;cursor:pointer;`,gE=K.div`display:grid;grid-template-columns:repeat(2,minmax(280px,1fr));gap:16px;`,_E=K.div`width:calc((100% - 16px) / 2);margin-bottom:16px;padding:18px;box-sizing:border-box;border:1px solid ${({theme:e})=>e.colors.border};border-radius:18px;background:${({theme:e})=>e.colors.surface};@media(max-width:760px){width:100%;}`,vE=K.div`margin-bottom:12px;font-size:18px;font-weight:800;`,yE=K.div`position:relative;`,bE=K.button`width:100%;height:48px;padding:0 46px 0 14px;border:1px solid ${({theme:e,$color:t})=>t??e.colors.border};border-radius:12px;outline:none;background:${({theme:e})=>e.colors.background};color:${({theme:e,$color:t})=>t??e.colors.text};font:inherit;text-align:left;cursor:pointer;`,xE=K.span`position:absolute;top:24px;right:17px;width:8px;height:8px;border-right:1.5px solid ${({theme:e})=>e.colors.mutedText};border-bottom:1.5px solid ${({theme:e})=>e.colors.mutedText};transform:translateY(-65%) rotate(${({$open:e})=>e?`225deg`:`45deg`});transition:transform .15s ease;pointer-events:none;`,SE=K.div`position:absolute;z-index:20;top:calc(100% + 6px);left:0;right:0;display:flex;flex-direction:column;gap:2px;padding:6px;box-sizing:border-box;border:1px solid ${({theme:e})=>e.colors.border};border-radius:12px;background:${({theme:e})=>e.colors.background};box-shadow:0 12px 30px rgba(0,0,0,.28);height:max-content;min-height:max-content;max-height:none;overflow:visible;`,CE=K.button`display:flex;align-items:center;flex:0 0 38px;width:100%;height:38px;padding:0 10px;box-sizing:border-box;border:0;border-radius:8px;background:${({$active:e,$color:t})=>e&&t?`${t}20`:`transparent`};color:${({theme:e,$color:t})=>t??e.colors.text};font:inherit;text-align:left;cursor:pointer;&:hover{background:${({$color:e})=>e?`${e}18`:`rgba(255,255,255,.06)`};}`,wE=(e,t)=>e.trim()!==``&&t.trim()!==``,TE=()=>{let e=wt(),t=Lo(),{players:n,isFourthActive:r,host:i,scenarioNumber:a}=J(e=>e.players),o=J(e=>e.roundOne),s=J(e=>e.roundTwo),c=J(e=>e.roundThree),[l,u]=(0,x.useState)(!1),[d,f]=(0,x.useState)(()=>Wf()),[p,m]=(0,x.useState)(()=>Wf()!==null),[h,g]=(0,x.useState)(!1);(0,x.useEffect)(()=>{let e=()=>{let e=Wf();f(e),e||(m(!1),g(!1))};return window.addEventListener(`game-snapshot-changed`,e),window.addEventListener(`storage`,e),()=>{window.removeEventListener(`game-snapshot-changed`,e),window.removeEventListener(`storage`,e)}},[]);let _=r?4:3,v=n.slice(0,_).every(e=>wE(e.firstName,e.lastName)),y=n.some(e=>e.firstName.trim()!==``||e.lastName.trim()!==``),b=o.themes.length===5&&o.themes.every(e=>e.title.trim()!==``&&e.questions.length===5&&e.questions.every(e=>e.answer.trim()!==``)),S=s.blocks.length===3&&s.blocks.every(e=>e.questions.length===6&&e.questions.every(e=>e.question.trim()!==``&&e.options.every(e=>e.trim()!==``)&&e.correctOption!==null)),C=c.pools.length===3&&c.pools.every(Zd),w=a.trim()!==``&&b&&S&&C,T=v&&i!==null&&w,E=d!==null&&w,D=i?cd[i]:void 0,O=()=>{T&&(Xf(),f(null),t(Bl()),t(cu()),t(Tu()),t(Kl()),t(Y_()),e(`/game/round/1`))},k=()=>{let t=Wf();if(!t||!w)return;let n=t.route.split(/[?#]/)[0];[`/game/round/3/start`,`/game/round/3/scenario`,`/game/round/3/play`].includes(n)&&Ou(),e(t.route)},A=()=>{Xf(),f(null),g(!1),m(!1)},ee=e=>{t(Cd(e)),u(!1)};return(0,q.jsxs)(`div`,{children:[(0,q.jsxs)(rE,{children:[(0,q.jsxs)(iE,{children:[(0,q.jsxs)(aE,{children:[`Игра на `,_,`-х`]}),(0,q.jsx)(oE,{type:`button`,onClick:O,disabled:!T,"aria-label":`Начать новую охоту`,title:`Начать новую охоту`,children:`▶`}),d&&(0,q.jsxs)(sE,{type:`button`,onClick:k,disabled:!E,title:E?`Продолжить сохранённую игру`:`Сначала загрузите сценарий этой игры`,children:[(0,q.jsx)(`span`,{children:`▶`}),`Продолжить игру`]})]}),(0,q.jsx)(lE,{type:`button`,onClick:()=>t(Td()),disabled:!y&&i===null,"aria-label":`Сбросить данные игроков`,title:`Сбросить данные игроков`,children:`↺`})]}),(0,q.jsxs)(_E,{children:[(0,q.jsx)(vE,{children:`Ведущий`}),(0,q.jsxs)(yE,{onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||u(!1)},children:[(0,q.jsx)(bE,{type:`button`,$color:D,onClick:()=>u(e=>!e),"aria-haspopup":`listbox`,"aria-expanded":l,children:i??`Выберите ведущего`}),(0,q.jsx)(xE,{$open:l}),l&&(0,q.jsx)(SE,{role:`listbox`,children:sd.map(e=>(0,q.jsx)(CE,{type:`button`,role:`option`,"aria-selected":i===e,$color:cd[e],$active:i===e,onClick:()=>ee(e),children:e},e))})]})]}),(0,q.jsx)(gE,{children:n.map((e,n)=>(0,q.jsx)(nE,{index:n,player:e,isFourthCard:n===3,isFourthActive:r,onToggleFourth:()=>t(Ed()),onChange:e=>t(Sd({index:n,player:e}))},n))}),p&&d&&(0,q.jsx)(uE,{role:`presentation`,children:(0,q.jsxs)(dE,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`resume-game-title`,children:[(0,q.jsx)(fE,{id:`resume-game-title`,children:`Найдена незавершённая игра`}),(0,q.jsx)(pE,{children:`Чтобы продолжить с сохранённого места, загрузите сценарий этой игры и нажмите «Продолжить игру» на главном экране.`}),(0,q.jsxs)(mE,{children:[(0,q.jsx)(hE,{type:`button`,onClick:()=>m(!1),children:`Отмена`}),(0,q.jsx)(sE,{type:`button`,onClick:()=>m(!1),children:`Продолжить`})]})]})}),h&&(0,q.jsx)(uE,{role:`presentation`,onMouseDown:()=>g(!1),children:(0,q.jsxs)(dE,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`delete-saved-game-title`,onMouseDown:e=>e.stopPropagation(),children:[(0,q.jsx)(fE,{id:`delete-saved-game-title`,children:`Уверены, что хотите удалить незавершённую игру?`}),(0,q.jsxs)(mE,{children:[(0,q.jsx)(hE,{type:`button`,onClick:()=>g(!1),children:`Отмена`}),(0,q.jsx)(cE,{type:`button`,onClick:A,children:`Удалить`})]})]})})]})},EE=ho`
  0% { transform: scale(1); }
  55% { transform: scale(1.08); }
  100% { transform: scale(1.04); }
`,DE=ho`
  from { opacity: 0; transform: translate(-50%, 12px) scale(0.8); }
  to { opacity: 1; transform: translate(-50%, 0) scale(1); }
`,OE=e=>ho`
  0% { left: 5%; }
  18% { left: 92%; }
  36% { left: 18%; }
  54% { left: 82%; }
  72% { left: 30%; }
  88% { left: 68%; }
  100% { left: ${e}%; }
`,kE=K.div`
  position: relative;
  min-height: calc(100dvh - 124px);
  box-sizing: border-box;
  padding: 12px 36px 24px;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 12px;

`,AE=K.section`
  display: grid;
  align-content: center;
  gap: 16px;
`,jE=K.h1`
  margin: 0;
  text-align: center;
  font-size: 30px;
`,ME=K.div`
  width: min(900px, 100%);
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  line-height: 1.4;
  font-weight: 700;
`,NE=K.div`
  width: min(1000px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 22px;
`,PE=K.div`
  position: relative;
  display: grid;
  gap: 10px;
  padding-top: 12px;
  ${({$winner:e})=>e&&G`
    animation: ${EE} 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
  `}
`,FE=K.div`
  position: absolute;
  left: 50%;
  top: -15px;
  transform: translateX(-50%);
  z-index: 3;
  font-size: 30px;
  filter: drop-shadow(0 4px 7px rgba(0,0,0,0.32));
`,IE=K.div`
  min-height: 76px;
  display: grid;
  place-items: center;
  padding: 12px 18px;
  border: 2px solid ${({theme:e,$winner:t})=>t?`#e8b923`:e.colors.border};
  border-radius: 18px;
  background: ${({theme:e})=>e.colors.surface};
  box-shadow: ${({$winner:e})=>e?`0 10px 28px rgba(232,185,35,0.22)`:`0 10px 24px rgba(0,0,0,0.16)`};
  font-size: 20px;
  font-weight: 800;
  transition: border-color 300ms ease, box-shadow 300ms ease;
`,LE=K.input`
  width: 100%;
  height: 46px;
  box-sizing: border-box;
  padding: 0 14px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  appearance: none;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
    -webkit-appearance: none;
  }

  &:focus {
    border-color: ${({theme:e})=>e.colors.accent};
    box-shadow: 0 0 0 3px rgba(96,165,250,.1);
  }

  &:disabled {
    opacity: .72;
  }
`,RE=K.section`
  display: grid;
  grid-template-rows: auto auto;
  align-content: end;
  gap: 44px;
`,zE=K.div`
  position: relative;
  width: min(1100px, calc(100% - 80px));
  min-width: 0;
  margin: 0 auto;
`,BE=K.div`
  container-type: inline-size;
  grid-template-columns: minmax(0, 1fr);
  min-height: 76px;
  display: grid;
  align-items: end;
  padding-bottom: 8px;
`,VE=K.div`
  position: relative;
  height: 42px;
`,HE=K.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 8px;
  align-items: start;
`,UE=K.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 12px;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(96,165,250,.28), rgba(96,165,250,.92), rgba(96,165,250,.28));
  box-shadow: 0 0 18px rgba(96,165,250,.18);

  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #6f91cf;
    transform: translateY(-50%);
  }
  &::before { left: 0; }
  &::after { right: 0; }
`,WE=K.div`
  position: absolute;
  left: ${({$position:e})=>`${e}%`};
  top: ${({$correct:e})=>e?`0`:`24px`};
  transform: translateX(-50%);
  display: grid;
  justify-items: center;
  gap: 6px;
  white-space: nowrap;
  z-index: ${({$correct:e})=>e?3:2};
  transition: left 900ms cubic-bezier(0.22, 1, 0.36, 1);
  ${({$correct:e})=>e&&G`animation: ${DE} 500ms cubic-bezier(0.22, 1, 0.36, 1);`}
`,GE=K.div`
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  z-index: 5;
  animation: ${({$position:e})=>G`${OE(e)} 5s cubic-bezier(.45,.05,.25,1) forwards`};
`,KE=K.div`
  width: ${({$correct:e})=>e?`22px`:`15px`};
  height: ${({$correct:e})=>e?`22px`:`15px`};
  border-radius: 50%;
  border: 3px solid ${({$correct:e})=>e?`#e8b923`:`#6f91cf`};
  background: ${({theme:e})=>e.colors.surface};
  box-shadow: 0 4px 12px rgba(0,0,0,.25);
`,qE=K.div`
  box-sizing: border-box;
  min-width: 0;
  grid-column: 1;
  grid-template-columns: minmax(0, 1fr);
  overflow-wrap: anywhere;
  padding: 6px 10px;
  border-radius: 10px;
  background: ${({$correct:e,$winner:t})=>e?`rgba(232,185,35,.14)`:t?`rgba(34,197,94,.13)`:`rgba(73,108,174,.14)`};
  color: ${({$correct:e,$winner:t})=>e?`#e8b923`:t?`#4ade80`:`inherit`};
  display: grid;
  justify-items: center;
  gap: 2px;
  text-align: center;
  white-space: normal;
  font-size: 15px;
  line-height: 1.15;
  font-weight: 800;
  transition: color 350ms ease, background 350ms ease, transform 350ms ease;


  span {
    max-width: 100%;
    overflow-wrap: anywhere;
  }

  strong {
    display: block;
    max-width: 100%;
    font-size: clamp(24px, 2.6vw, 39px);
    line-height: .95;
    margin: 0;
  }
`,JE=K(qE)`
  container-type: inline-size;

  strong {
    white-space: nowrap;
    font-size: min(clamp(24px, 2.6vw, 39px), calc(100cqw / ${({$characters:e})=>e}));
  }
`,YE=K(qE)`
  width: max-content;
  max-width: 100%;
  white-space: nowrap;
  transform: translateX(clamp(0px, calc(${({$position:e})=>e}cqw - 50%), calc(100cqw - 100%)));

  strong {
    font-size: min(clamp(24px, 2.6vw, 39px), calc((100cqw - 20px) / ${({$characters:e})=>e}));
  }
`,XE=K.div`
  flex-direction: column;
  gap: 6px;
  text-align: center;
  p { margin: 0; }
  min-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`,ZE=K.button`
  min-width: 190px;
  min-height: 48px;
  padding: 0 22px;
  border: 1px solid #5b7fc4;
  border-radius: 12px;
  background: #496cae;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;

  &:disabled { opacity: .45; cursor: not-allowed; }
`,QE=K(ZE)`
  position: absolute;
  right: 0;
  bottom: 0;
`,$E=(e,t,n)=>{if(n===t)return 50;let r=5+(e-t)/(n-t)*90;return Math.min(98,Math.max(2,r))},eD=e=>{let t=e.replace(`,`,`.`).replace(/[^0-9.-]/g,``),n=t.startsWith(`-`)?`-`:``,[r=``,...i]=t.replace(/-/g,``).split(`.`);return`${n}${r}${i.length?`.${i.join(``)}`:``}`},tD=()=>{let e=Lo(),t=wt(),n=J(e=>e.gameScores.values),{players:r,isFourthActive:i}=J(e=>e.players),a=J(e=>e.extraQuestions.items),o=J(e=>e.gameTieBreak),s=(0,x.useMemo)(()=>r.slice(0,i?4:3),[i,r]),c=(0,x.useMemo)(()=>{if(s.length===0)return[];let e=Math.max(...s.map((e,t)=>n[t]??0));return s.map((e,t)=>t).filter(t=>(n[t]??0)===e)},[s,n]),l=o.remainingIndexes??(o.participantIndexes.length>0?o.participantIndexes:c),u=o.extraQuestionIndex??0,d=o.sessionId??0,f=a[u],p=Cb(f?.answer),m=Number.isFinite(p),h=(0,x.useMemo)(()=>Jf(`tieBreak`),[]),g=h?.sessionId===d&&h?.questionIndex===u,[_,v]=(0,x.useState)(()=>g?h.answers:{}),[y,b]=(0,x.useState)(()=>g?h.revealed:!1),[S,C]=(0,x.useState)(!1),[w,T]=(0,x.useState)(()=>g?h.finalScale:!1),[E,D]=(0,x.useState)(()=>g?h.winnerIndex:o.winnerIndex),O=(0,x.useRef)(null),k=(0,x.useRef)(null),A=(0,x.useRef)(!1);(0,x.useEffect)(()=>{Yf(`tieBreak`,{sessionId:d,questionIndex:u,answers:_,revealed:y,finalScale:w,winnerIndex:E})},[d,u,_,y,w,E]),(0,x.useEffect)(()=>()=>{O.current!==null&&window.clearTimeout(O.current),k.current!==null&&window.clearTimeout(k.current)},[]);let ee=l.map(e=>({index:e,value:Cb(_[e])})).filter(e=>_[e.index]?.trim()!==``&&Number.isFinite(e.value)),j=l.length>1&&ee.length===l.length&&m,M=ee.map(e=>e.value),N=M.length?Math.min(...M):0,te=M.length?Math.max(...M):1,P=m?[...M,p]:M,F=P.length?Math.min(...P):N,ne=P.length?Math.max(...P):te,re=w?F:N,ie=w?ne:te,I=$E(p,N,te),L=$E(p,re,ie),R=(0,x.useRef)(null),[z,B]=(0,x.useState)(0);(0,x.useLayoutEffect)(()=>{let e=R.current;if(!e)return;let t=()=>B(e.clientWidth);if(t(),typeof ResizeObserver>`u`)return;let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let ae=Math.max(0,...ee.map(({value:e})=>Tb(e).length)),oe=Math.min(z,Math.max(180,Math.min(320,20+ae*26))),se=z-oe,ce=e=>Math.max(0,Math.min(se,z*e/100-oe/2)),le=ee.map(e=>{let t=$E(e.value,re,ie);return{...e,position:t,left:ce(t)}}),ue=y&&le.find(e=>e.index===E);if(ue){let e=oe+8,t=le.filter(t=>t!==ue&&Math.abs(t.left-ue.left)<e);if(t.length){let n=p>ue.value||p===ue.value&&ue.position>=50,r=n?Math.max(...t.map(e=>e.left))+e:Math.min(...t.map(e=>e.left))-e;ue.left=Math.max(0,Math.min(se,r));for(let r of t)r.left=n?Math.max(0,Math.min(r.left,ue.left-e)):Math.min(se,Math.max(r.left,ue.left+e))}}let V=[],de=le.sort((e,t)=>e.left-t.left).map(e=>{let t=e.left,n=V.findIndex(e=>e+8<=t),r=n<0?V.length:n;return V[r]=t+oe,{...e,left:t,row:r}}),fe=o.nextPath===`/game/hunter-reveal`||o.nextPath===`/game/round-1/hunter`?`Второй раунд →`:`Далее →`,pe=Sb(p,M).map(e=>ee[e].index),me=y&&pe.length>1,he=!!a[u+1],ge=!f||me&&!he,_e=me&&he,ve=()=>{if(!j||S||y)return;let t=pe.length===1?pe[0]:null;T(!1),C(!0),O.current=window.setTimeout(()=>{D(t),t!==null&&e(q_(t)),C(!1),b(!0),k.current=window.setTimeout(()=>{T(!0)},350)},5e3)},ye=()=>{if(ge){if(E===null)return;e(q_(E))}if(_e){k.current!==null&&window.clearTimeout(k.current),v({}),D(null),T(!1),b(!1),e(K_(pe));return}f&&!A.current&&(A.current=!0,Yf(`tieBreak`,{sessionId:d,questionIndex:u+1,answers:{},revealed:!1,finalScale:!1,winnerIndex:null}),e(J_())),t(o.nextPath)},be=e=>{let t=s[e];return t?`${t.firstName} ${t.lastName}`.trim():`Игрок ${e+1}`};return(0,q.jsxs)(kE,{children:[(0,q.jsxs)(AE,{children:[(0,q.jsx)(jE,{children:`Дополнительный вопрос`}),f?.question&&(0,q.jsx)(ME,{children:f.question}),f&&!m&&(0,q.jsx)(`p`,{role:`status`,children:`В сценарии для этого вопроса нужен числовой ответ.`}),(0,q.jsx)(NE,{children:l.map(e=>{let t=(y||ge)&&E===e,n=ge&&(!f||pe.includes(e));return(0,q.jsxs)(PE,{$winner:t,children:[t&&(0,q.jsx)(FE,{"aria-hidden":`true`,children:`👑`}),n?(0,q.jsx)(IE,{as:`button`,type:`button`,$winner:t,"aria-pressed":t,onClick:()=>D(e),style:{color:`inherit`,cursor:`pointer`},children:be(e)||`Игрок ${e+1}`}):(0,q.jsx)(IE,{$winner:t,children:be(e)}),f&&(0,q.jsx)(LE,{type:`text`,inputMode:`decimal`,autoComplete:`off`,placeholder:`Введите ответ`,value:_[e]??``,disabled:y||S,onBlur:()=>v(t=>({...t,[e]:Eb(t[e]??``)})),onChange:t=>v(n=>({...n,[e]:eD(t.target.value)}))})]},e)})})]}),(0,q.jsxs)(RE,{children:[(0,q.jsxs)(zE,{ref:R,children:[(0,q.jsx)(BE,{children:y&&m&&(0,q.jsx)(YE,{$correct:!0,"aria-label":`Правильный ответ`,$position:L,$characters:Tb(p).length,children:(0,q.jsx)(`strong`,{children:Tb(p)})})}),(0,q.jsxs)(VE,{children:[(0,q.jsx)(UE,{}),de.map(({index:e,position:t})=>(0,q.jsx)(WE,{$position:t,children:(0,q.jsx)(KE,{})},e)),S&&(0,q.jsx)(GE,{$position:I,children:(0,q.jsx)(KE,{$correct:!0})}),y&&m&&(0,q.jsx)(WE,{$correct:!0,$position:L,children:(0,q.jsx)(KE,{$correct:!0})})]}),(0,q.jsx)(HE,{children:de.map(({index:e,value:t,left:n,row:r})=>(0,q.jsxs)(JE,{$characters:Tb(t).length,$winner:y&&E===e,style:{width:oe,marginLeft:n,gridRow:r+1},children:[(0,q.jsx)(`span`,{children:be(e)}),(0,q.jsx)(`strong`,{children:Tb(t)})]},e))})]}),(0,q.jsxs)(XE,{children:[(me||!f)&&(0,q.jsx)(jE,{as:`h2`,children:`Ничья`}),ge&&(0,q.jsx)(`p`,{role:`status`,children:`Дополнительные вопросы закончились. Выберите победителя нажатием на его плитку.`}),f&&!y&&(0,q.jsx)(ZE,{type:`button`,disabled:!j||S,onClick:ve,children:S?`Определяем ответ…`:`Показать ответ`})]})]}),(y||ge)&&(0,q.jsx)(QE,{type:`button`,disabled:ge&&E===null,onClick:ye,children:_e?`Следующий вопрос`:fe})]})},nD=K.small`
  position: fixed;
  left: max(8px, env(safe-area-inset-left));
  bottom: max(4px, env(safe-area-inset-bottom));
  z-index: 1000;
  pointer-events: none;
  font: 10.25pt/1.3 system-ui, sans-serif;
  color: ${({theme:e})=>e.colors.mutedText};
`;function rD(){let{loading:e,authenticated:t}=jo();return e?(0,q.jsx)(`div`,{role:`status`,style:{padding:32},children:`Загрузка…`}):t?(0,q.jsxs)(en,{children:[(0,q.jsx)(Qt,{path:`/game/round/3/presenter`,element:(0,q.jsx)(_C,{})}),(0,q.jsxs)(Qt,{element:(0,q.jsx)(Lp,{}),children:[(0,q.jsx)(Qt,{path:`/`,element:(0,q.jsx)(TE,{})}),(0,q.jsx)(Qt,{path:`/scenario`,element:(0,q.jsx)(qT,{})}),(0,q.jsx)(Qt,{path:`/scenario/bonuses`,element:(0,q.jsx)(im,{})}),(0,q.jsx)(Qt,{path:`/round/1`,element:(0,q.jsx)(bb,{})}),(0,q.jsx)(Qt,{path:`/round/2`,element:(0,q.jsx)(dT,{})}),(0,q.jsx)(Qt,{path:`/round/3`,element:(0,q.jsx)(XS,{})}),(0,q.jsx)(Qt,{path:`/extra-questions`,element:(0,q.jsx)(Em,{})}),(0,q.jsx)(Qt,{path:`/game/round/1`,element:(0,q.jsx)($_,{})}),(0,q.jsx)(Qt,{path:`/game/round/1/cut`,element:(0,q.jsx)(H_,{})}),(0,q.jsx)(Qt,{path:`/game/round/1/play`,element:(0,q.jsx)(Hv,{})}),(0,q.jsx)(Qt,{path:`/game/round/2`,element:(0,q.jsx)(dw,{})}),(0,q.jsx)(Qt,{path:`/game/round/3/start`,element:(0,q.jsx)(yC,{})}),(0,q.jsx)(Qt,{path:`/game/round/3/scenario`,element:(0,q.jsx)(vC,{})}),(0,q.jsx)(Qt,{path:`/game/round/3/play`,element:(0,q.jsx)(Xx,{})}),(0,q.jsx)(Qt,{path:`/game/tie-break`,element:(0,q.jsx)(tD,{})}),(0,q.jsx)(Qt,{path:`/game/hunter-reveal`,element:(0,q.jsx)(iy,{})})]})]}):(0,q.jsx)(Io,{})}function iD(){return(0,q.jsxs)(eo,{theme:J(e=>e.theme.mode)===`dark`?Up:Hp,children:[(0,q.jsx)(Rp,{}),(0,q.jsx)(Hn,{basename:`/`,children:(0,q.jsx)(Ao,{children:(0,q.jsx)(rD,{})})}),(0,q.jsx)(nD,{children:`v.1.0.2d`})]})}var aD=As({players:kd,roundOne:Gd,roundTwo:jf,roundThree:gf,extraQuestions:$,bonusSelection:Zp,gameRoundOne:Vl,gameRoundTwo:lu,gameRoundThree:Eu,gameScores:ql,gameTieBreak:X_,theme:Pf}),oD=typeof window<`u`?Wf():null;typeof window<`u`&&qf();var sD=aD(void 0,{type:`@@INIT`}),cD=hl({reducer:aD,preloadedState:oD?{...sD,...oD.state}:void 0}),lD=``;window.addEventListener(`game-route-changed`,()=>{window.location.pathname.startsWith(`/game/`)&&Gf(cD.getState())}),cD.subscribe(()=>{if(!window.location.pathname.startsWith(`/game/`))return;let e=cD.getState(),t=JSON.stringify({players:e.players,gameRoundOne:e.gameRoundOne,gameRoundTwo:e.gameRoundTwo,gameRoundThree:e.gameRoundThree,gameScores:e.gameScores,gameTieBreak:e.gameTieBreak,bonusSelection:e.bonusSelection});t!==lD&&(lD=t,Gf(e))}),b.createRoot(document.getElementById(`root`)).render((0,q.jsx)(x.StrictMode,{children:(0,q.jsx)(te,{store:cD,children:(0,q.jsx)(iD,{})})}));