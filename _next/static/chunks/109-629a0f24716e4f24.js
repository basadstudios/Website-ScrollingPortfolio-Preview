"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[109],{881:(e,t,r)=>{r.d(t,{G:()=>c});var n=r(7846);let i=e=>e&&"object"==typeof e&&e.mix,o=e=>i(e)?e.mix:void 0;var l=r(8619),a=r(7494),s=r(9210);function u(e,t){let r=(0,l.d)(t()),n=()=>r.set(t());return n(),(0,a.E)(()=>{let t=()=>s.Gt.preRender(n,!1,!0),r=e.map(e=>e.on("change",t));return()=>{r.forEach(e=>e()),(0,s.WG)(n)}}),r}var f=r(2885),d=r(9779);function c(e,t,r,i){if("function"==typeof e)return function(e){d.bt.current=[],e();let t=u(d.bt.current,e);return d.bt.current=void 0,t}(e);let l="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),r=t?0:-1,i=e[0+r],l=e[1+r],a=e[2+r],s=e[3+r],u=(0,n.G)(l,a,{mixer:o(a[0]),...s});return t?u(i):u}(t,r,i);return Array.isArray(e)?g(e,l):g([e],([e])=>l(e))}function g(e,t){let r=(0,f.M)(()=>[]);return u(e,()=>{r.length=0;let n=e.length;for(let t=0;t<n;t++)r[t]=e[t].get();return t(r)})}},901:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(8229)._(r(2115)).default.createContext(null)},1193:(e,t)=>{function r(e){var t;let{config:r,src:n,width:i,quality:o}=e,l=o||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+l+(n.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},1469:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return a}});let n=r(8229),i=r(8883),o=r(3063),l=n._(r(1193));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=o.Image},1780:(e,t,r)=>{let n,i;r.d(t,{L:()=>H});var o=r(9779),l=r(2885),a=r(2115),s=r(4542),u=r(6339),f=r(9827),d=r(9210);function c(e,t){let r;let n=()=>{let{currentTime:n}=t,i=(null===n?0:n.value)/100;r!==i&&e(i),r=i};return d.Gt.update(n,!0),()=>(0,d.WG)(n)}let g=new WeakMap;function p({target:e,contentRect:t,borderBoxSize:r}){var n;null===(n=g.get(e))||void 0===n||n.forEach(n=>{n({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:r}=t[0];return{width:e,height:r}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,r)}})})}function h(e){e.forEach(p)}let m=new Set;var v=r(5818),y=r(5315);let b=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),w=()=>({time:0,x:b(),y:b()}),_={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function E(e,t,r,n){let i=r[t],{length:o,position:l}=_[t],a=i.current,s=r.time;i.current=e[`scroll${l}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,v.q)(0,i.scrollLength,i.current);let u=n-s;i.velocity=u>50?0:(0,y.f)(i.current-a,u)}var x=r(7782),O=r(7846),S=r(7345);let P={start:0,center:.5,end:1};function j(e,t,r=0){let n=0;if(e in P&&(e=P[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?n=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?n=t/100*document.documentElement.clientWidth:e.endsWith("vh")?n=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(n=t*e),r+n}let C=[0,0],z={All:[[0,0],[1,1]]},M={x:0,y:0},R=new WeakMap,k=new WeakMap,L=new WeakMap,A=e=>e===document.documentElement?window:e;function I(e,{container:t=document.documentElement,...r}={}){let o=L.get(t);o||(o=new Set,L.set(t,o));let l=function(e,t,r,n={}){return{measure:()=>(function(e,t=e,r){if(r.x.targetOffset=0,r.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)r.x.targetOffset+=n.offsetLeft,r.y.targetOffset+=n.offsetTop,n=n.offsetParent}r.x.targetLength=t===e?t.scrollWidth:t.clientWidth,r.y.targetLength=t===e?t.scrollHeight:t.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight})(e,n.target,r),update:t=>{E(e,"x",r,t),E(e,"y",r,t),r.time=t,(n.offset||n.target)&&function(e,t,r){let{offset:n=z.All}=r,{target:i=e,axis:o="y"}=r,l="y"===o?"height":"width",a=i!==e?function(e,t){let r={x:0,y:0},n=e;for(;n&&n!==t;)if(n instanceof HTMLElement)r.x+=n.offsetLeft,r.y+=n.offsetTop,n=n.offsetParent;else if("svg"===n.tagName){let e=n.getBoundingClientRect(),t=(n=n.parentElement).getBoundingClientRect();r.x+=e.left-t.left,r.y+=e.top-t.top}else if(n instanceof SVGGraphicsElement){let{x:e,y:t}=n.getBBox();r.x+=e,r.y+=t;let i=null,o=n.parentNode;for(;!i;)"svg"===o.tagName&&(i=o),o=n.parentNode;n=i}else break;return r}(i,e):M,s=i===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in i&&"svg"!==i.tagName?i.getBBox():{width:i.clientWidth,height:i.clientHeight},u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let f=!t[o].interpolate,d=n.length;for(let e=0;e<d;e++){let r=function(e,t,r,n){let i=Array.isArray(e)?e:C,o=0,l=0;return"number"==typeof e?i=[e,e]:"string"==typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,P[e]?e:"0"]),(o=j(i[0],r,n))-j(i[1],t)}(n[e],u[l],s[l],a[o]);f||r===t[o].interpolatorOffsets[e]||(f=!0),t[o].offset[e]=r}f&&(t[o].interpolate=(0,O.G)(t[o].offset,(0,S.Z)(n),{clamp:!1}),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=(0,x.q)(0,1,t[o].interpolate(t[o].current))}(e,r,n)},notify:()=>t(r)}}(t,e,w(),r);if(o.add(l),!R.has(t)){let e=()=>{for(let e of o)e.measure()},r=()=>{for(let e of o)e.update(d.uv.timestamp)},l=()=>{for(let e of o)e.notify()},a=()=>{d.Gt.read(e,!1,!0),d.Gt.read(r,!1,!0),d.Gt.update(l,!1,!0)};R.set(t,a);let s=A(t);if(window.addEventListener("resize",a,{passive:!0}),t!==document.documentElement)k.set(t,"function"==typeof t?(m.add(t),i||(i=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};m.forEach(e=>e(t))},window.addEventListener("resize",i)),()=>{m.delete(t),!m.size&&i&&(i=void 0)}):function(e,t){n||"undefined"==typeof ResizeObserver||(n=new ResizeObserver(h));let r=(0,u.KJ)(e);return r.forEach(e=>{let r=g.get(e);r||(r=new Set,g.set(e,r)),r.add(t),null==n||n.observe(e)}),()=>{r.forEach(e=>{let r=g.get(e);null==r||r.delete(t),(null==r?void 0:r.size)||null==n||n.unobserve(e)})}}(t,a));s.addEventListener("scroll",a,{passive:!0})}let a=R.get(t);return d.Gt.read(a,!1,!0),()=>{var e;(0,d.WG)(a);let r=L.get(t);if(!r||(r.delete(l),r.size))return;let n=R.get(t);R.delete(t),n&&(A(t).removeEventListener("scroll",n),null===(e=k.get(t))||void 0===e||e(),window.removeEventListener("resize",n))}}let W=new Map;function G({source:e,container:t=document.documentElement,axis:r="y"}={}){e&&(t=e),W.has(t)||W.set(t,{});let n=W.get(t);return n[r]||(n[r]=(0,u.Jb)()?new ScrollTimeline({source:t,axis:r}):function({source:e,container:t,axis:r="y"}){e&&(t=e);let n={value:0},i=I(e=>{n.value=100*e[r].progress},{container:t,axis:r});return{currentTime:n,cancel:i}}({source:t,axis:r})),n[r]}function N(e){return e&&(e.target||e.offset)}var T=r(7494);function B(e,t){(0,s.$)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let D=()=>({scrollX:(0,o.OQ)(0),scrollY:(0,o.OQ)(0),scrollXProgress:(0,o.OQ)(0),scrollYProgress:(0,o.OQ)(0)});function H({container:e,target:t,layoutEffect:r=!0,...n}={}){let i=(0,l.M)(D);return(r?T.E:a.useEffect)(()=>(B("target",t),B("container",e),function(e,{axis:t="y",...r}={}){var n,i;let o={axis:t,...r};return"function"==typeof e?(n=e,i=o,2===n.length||N(i)?I(e=>{n(e[i.axis].progress,e)},i):c(n,G(i))):function(e,t){if(e.flatten(),N(t))return e.pause(),I(r=>{e.time=e.duration*r[t.axis].progress},t);{let r=G(t);return e.attachTimeline?e.attachTimeline(r,e=>(e.pause(),c(t=>{e.time=e.duration*t},r))):f.l}}(e,o)}((e,{x:t,y:r})=>{i.scrollX.set(t.current),i.scrollXProgress.set(t.progress),i.scrollY.set(r.current),i.scrollYProgress.set(r.progress)},{...n,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(n.offset)]),i}},2464:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(8229)._(r(2115)).default.createContext({})},3063:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let n=r(8229),i=r(6966),o=r(5155),l=i._(r(2115)),a=n._(r(7650)),s=n._(r(5564)),u=r(8883),f=r(5840),d=r(6752);r(3230);let c=r(901),g=n._(r(1193)),p=r(6654),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,n,i,o,l){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function v(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}let y=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:s,decoding:u,className:f,style:d,fetchPriority:c,placeholder:g,loading:h,unoptimized:y,fill:b,onLoadRef:w,onLoadingCompleteRef:_,setBlurComplete:E,setShowAltText:x,sizesInput:O,onLoad:S,onError:P,...j}=e,C=(0,l.useCallback)(e=>{e&&(P&&(e.src=e.src),e.complete&&m(e,g,w,_,E,y,O))},[r,g,w,_,E,P,y,O]),z=(0,p.useMergedRef)(t,C);return(0,o.jsx)("img",{...j,...v(c),loading:h,width:s,height:a,decoding:u,"data-nimg":b?"fill":"1",className:f,style:d,sizes:i,srcSet:n,src:r,ref:z,onLoad:e=>{m(e.currentTarget,g,w,_,E,y,O)},onError:e=>{x(!0),"empty"!==g&&E(!0),P&&P(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...v(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(c.RouterContext),n=(0,l.useContext)(d.ImageConfigContext),i=(0,l.useMemo)(()=>{var e;let t=h||n||f.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),i=t.deviceSizes.sort((e,t)=>e-t),o=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:i,qualities:o}},[n]),{onLoad:a,onLoadingComplete:s}=e,p=(0,l.useRef)(a);(0,l.useEffect)(()=>{p.current=a},[a]);let m=(0,l.useRef)(s);(0,l.useEffect)(()=>{m.current=s},[s]);let[v,w]=(0,l.useState)(!1),[_,E]=(0,l.useState)(!1),{props:x,meta:O}=(0,u.getImgProps)(e,{defaultLoader:g.default,imgConf:i,blurComplete:v,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...x,unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:p,onLoadingCompleteRef:m,setBlurComplete:w,setShowAltText:E,sizesInput:e.sizes,ref:t}),O.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:x}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5029:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(2115),i=n.useLayoutEffect,o=n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},5100:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=n?40*n:t,s=i?40*i:r,u=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5564:(e,t,r)=>{var n=r(9509);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return c}});let i=r(8229),o=r(6966),l=r(5155),a=o._(r(2115)),s=i._(r(5029)),u=r(2464),f=r(2830),d=r(7544);function c(e){void 0===e&&(e=!1);let t=[(0,l.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function g(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(3230);let p=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(g,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:i})})}let m=function(e){let{children:t}=e,r=(0,a.useContext)(u.AmpStateContext),n=(0,a.useContext)(f.HeadManagerContext);return(0,l.jsx)(s.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5840:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},6604:(e,t,r)=>{r.d(t,{W:()=>l});var n=r(2115),i=r(6339);let o={some:0,all:1};function l(e,{root:t,margin:r,amount:a,once:s=!1,initial:u=!1}={}){let[f,d]=(0,n.useState)(u);return(0,n.useEffect)(()=>{if(!e.current||s&&f)return;let n={root:t&&t.current||void 0,margin:r,amount:a};return function(e,t,{root:r,margin:n,amount:l="some"}={}){let a=(0,i.KJ)(e),s=new WeakMap,u=new IntersectionObserver(e=>{e.forEach(e=>{let r=s.get(e.target);if(!!r!==e.isIntersecting){if(e.isIntersecting){let r=t(e.target,e);"function"==typeof r?s.set(e.target,r):u.unobserve(e.target)}else"function"==typeof r&&(r(e),s.delete(e.target))}})},{root:r,rootMargin:n,threshold:"number"==typeof l?l:o[l]});return a.forEach(e=>u.observe(e)),()=>u.disconnect()}(e.current,()=>(d(!0),s?void 0:()=>d(!1)),n)},[t,e,r,s,a]),f}},6752:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(8229)._(r(2115)),i=r(5840),o=n.default.createContext(i.imageConfigDefault)},6766:(e,t,r)=>{r.d(t,{default:()=>i.a});var n=r(1469),i=r.n(n)},6896:(e,t,r)=>{r.d(t,{s:()=>f});var n=r(4542),i=r(8802),o=r(5982);function l(e,t){[...t].reverse().forEach(r=>{let n=e.getVariant(r);n&&(0,i.U)(e,n),e.variantChildren&&e.variantChildren.forEach(e=>{l(e,t)})})}function a(){let e=!1,t=new Set,r={subscribe:e=>(t.add(e),()=>void t.delete(e)),start(r,i){(0,n.V)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let l=[];return t.forEach(e=>{l.push((0,o._)(e,r,{transitionOverride:i}))}),Promise.all(l)},set:r=>((0,n.V)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{Array.isArray(r)?l(e,r):"string"==typeof r?l(e,[r]):(0,i.U)(e,r)})),stop(){t.forEach(e=>{!function(e){e.values.forEach(e=>e.stop())}(e)})},mount:()=>(e=!0,()=>{e=!1,r.stop()})};return r}var s=r(2885),u=r(7494);let f=function(){let e=(0,s.M)(a);return(0,u.E)(e.mount,[]),e}},7544:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},8883:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(3230);let n=r(5100),i=r(5840);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r,a;let s,u,f,{src:d,sizes:c,unoptimized:g=!1,priority:p=!1,loading:h,className:m,quality:v,width:y,height:b,fill:w=!1,style:_,overrideSrc:E,onLoad:x,onLoadingComplete:O,placeholder:S="empty",blurDataURL:P,fetchPriority:j,decoding:C="async",layout:z,objectFit:M,objectPosition:R,lazyBoundary:k,lazyRoot:L,...A}=e,{imgConf:I,showAltText:W,blurComplete:G,defaultLoader:N}=t,T=I||i.imageConfigDefault;if("allSizes"in T)s=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t),n=null==(r=T.qualities)?void 0:r.sort((e,t)=>e-t);s={...T,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===N)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let B=A.loader||N;delete A.loader,delete A.srcSet;let D="__next_img_default"in B;if(D){if("custom"===s.loader)throw Object.defineProperty(Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=B;B=t=>{let{config:r,...n}=t;return e(n)}}if(z){"fill"===z&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!c&&(c=t)}let H="",U=l(y),F=l(b);if((a=d)&&"object"==typeof a&&(o(a)||void 0!==a.src)){let e=o(d)?d.default:d;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(u=e.blurWidth,f=e.blurHeight,P=P||e.blurDataURL,H=e.src,!w){if(U||F){if(U&&!F){let t=U/e.width;F=Math.round(e.height*t)}else if(!U&&F){let t=F/e.height;U=Math.round(e.width*t)}}else U=e.width,F=e.height}}let V=!p&&("lazy"===h||void 0===h);(!(d="string"==typeof d?d:H)||d.startsWith("data:")||d.startsWith("blob:"))&&(g=!0,V=!1),s.unoptimized&&(g=!0),D&&!s.dangerouslyAllowSVG&&d.split("?",1)[0].endsWith(".svg")&&(g=!0);let q=l(v),X=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:R}:{},W?{}:{color:"transparent"},_),$=G||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:U,heightInt:F,blurWidth:u,blurHeight:f,blurDataURL:P||"",objectFit:X.objectFit})+'")':'url("'+S+'")',Y=$?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),f=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:a({config:t,src:r,quality:o,width:s[f]})}}({config:s,src:d,unoptimized:g,width:U,quality:q,sizes:c,loader:B});return{props:{...A,loading:V?"lazy":h,fetchPriority:j,width:U,height:F,decoding:C,className:m,style:{...X,...Y},sizes:J.sizes,srcSet:J.srcSet,src:E||J.src},meta:{unoptimized:g,priority:p,placeholder:S,fill:w}}}}}]);