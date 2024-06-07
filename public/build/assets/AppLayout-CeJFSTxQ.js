import{r as u,O as rt,j as x,A as at,m as ke,c as L,b as ae,f as z,i as Ce,o as Ie,d as Y,Q as ot,u as oe,G as _e,p as O,D as lt,E as it,R as r,I as _,a as T,q as Te,e as I}from"./app-DPnmQNMl.js";import{g as st,V as Re,C as je,S as N,u as ct}from"./chunk-5MKCW436-BrFvw1lA.js";import{c as ut,T as g}from"./chunk-2OOHT3W5-ChCwLuug.js";import{I as mt}from"./chunk-6CVSDS6C-ChT1bA7_.js";import{S as ye}from"./chunk-NEK3OOAM-DHiupiIl.js";import{F as E}from"./chunk-KRPLQIP4-CwPIyTBq.js";import{I as dt}from"./chunk-YF5BD7DN-II7Coxse.js";import{m as F,B as k}from"./chunk-UVUR7MCU-CmIpkDyX.js";import{B as le}from"./chunk-PULVB27S-BmB31oiW.js";import{h as pt,i as ft,j as gt,k as vt,m as ht,n as bt,l as yt,o as ne,c as Et,I as xt,a as wt,M as Pt,b as St,d as Ot,e as Ee,f as kt}from"./MapPinIcon-CIgvDU8k.js";import{w as xe,T as U,u as Ne}from"./chunk-7JBTTEVG-CIlxP4pX.js";import{F as Ct}from"./XMarkIcon-CYqDitgq.js";import{b as It,a as _t}from"./chunk-G72KV6MB-CFzf8KEx.js";import{A as Tt}from"./chunk-V7PAE35Z-ArVLID_a.js";var Rt=e=>e!=null&&parseInt(e.toString(),10)>0,we={exit:{height:{duration:.2,ease:U.ease},opacity:{duration:.3,ease:U.ease}},enter:{height:{duration:.3,ease:U.ease},opacity:{duration:.4,ease:U.ease}}},jt={exit:({animateOpacity:e,startingHeight:t,transition:n,transitionEnd:a,delay:l})=>{var o;return{...e&&{opacity:Rt(t)?1:0},height:t,transitionEnd:a==null?void 0:a.exit,transition:(o=n==null?void 0:n.exit)!=null?o:xe.exit(we.exit,l)}},enter:({animateOpacity:e,endingHeight:t,transition:n,transitionEnd:a,delay:l})=>{var o;return{...e&&{opacity:1},height:t,transitionEnd:a==null?void 0:a.enter,transition:(o=n==null?void 0:n.enter)!=null?o:xe.enter(we.enter,l)}}},ie=u.forwardRef((e,t)=>{const{in:n,unmountOnExit:a,animateOpacity:l=!0,startingHeight:o=0,endingHeight:c="auto",style:f,className:i,transition:s,transitionEnd:m,...b}=e,[d,w]=u.useState(!1);u.useEffect(()=>{const B=setTimeout(()=>{w(!0)});return()=>clearTimeout(B)},[]),rt({condition:Number(o)>0&&!!a,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const y=parseFloat(o.toString())>0,R={startingHeight:o,endingHeight:c,animateOpacity:l,transition:d?s:{enter:{duration:0}},transitionEnd:{enter:m==null?void 0:m.enter,exit:a?m==null?void 0:m.exit:{...m==null?void 0:m.exit,display:y?"block":"none"}}},v=a?n:!0,P=n||a?"enter":"exit";return x.jsx(at,{initial:!1,custom:R,children:v&&x.jsx(ke.div,{ref:t,...b,className:L("chakra-collapse",i),style:{overflow:"hidden",display:"block",...f},custom:R,variants:jt,initial:a?"exit":!1,animate:P,exit:"exit"})})});ie.displayName="Collapse";function Nt(e){return"current"in e}var Ae=()=>typeof window<"u";function At(){var e;const t=navigator.userAgentData;return(e=t==null?void 0:t.platform)!=null?e:navigator.platform}var Mt=e=>Ae()&&e.test(navigator.vendor),zt=e=>Ae()&&e.test(At()),Bt=()=>zt(/mac|iphone|ipad|ipod/i),Dt=()=>Bt()&&Mt(/apple/i);function Ft(e){const{ref:t,elements:n,enabled:a}=e,l=()=>{var o,c;return(c=(o=t.current)==null?void 0:o.ownerDocument)!=null?c:document};pt(l,"pointerdown",o=>{if(!Dt()||!a)return;const c=o.target,i=(n??[t]).some(s=>{const m=Nt(s)?s.current:s;return(m==null?void 0:m.contains(c))||m===c});l().activeElement!==c&&i&&(o.preventDefault(),c.focus())})}var[Lt,Vt]=ae({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),Me=z(function(t,n){const a=Ce("Input",t),{children:l,className:o,...c}=Ie(t),f=L("chakra-input__group",o),i={},s=st(l),m=a.field;s.forEach(d=>{var w,y;a&&(m&&d.type.id==="InputLeftElement"&&(i.paddingStart=(w=m.height)!=null?w:m.h),m&&d.type.id==="InputRightElement"&&(i.paddingEnd=(y=m.height)!=null?y:m.h),d.type.id==="InputRightAddon"&&(i.borderEndRadius=0),d.type.id==="InputLeftAddon"&&(i.borderStartRadius=0))});const b=s.map(d=>{var w,y;const R=ut({size:((w=d.props)==null?void 0:w.size)||t.size,variant:((y=d.props)==null?void 0:y.variant)||t.variant});return d.type.id!=="Input"?u.cloneElement(d,R):u.cloneElement(d,Object.assign(R,i,d.props))});return x.jsx(Y.div,{className:f,ref:n,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...a.group},"data-group":!0,...c,children:x.jsx(Lt,{value:a,children:b})})});Me.displayName="InputGroup";var Wt=Y("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),Z=z(function(t,n){var a,l;const{placement:o="left",...c}=t,f=Vt(),i=f.field,m={[o==="left"?"insetStart":"insetEnd"]:"0",width:(a=i==null?void 0:i.height)!=null?a:i==null?void 0:i.h,height:(l=i==null?void 0:i.height)!=null?l:i==null?void 0:i.h,fontSize:i==null?void 0:i.fontSize,...f.element};return x.jsx(Wt,{ref:n,__css:m,...c})});Z.id="InputElement";Z.displayName="InputElement";var ze=z(function(t,n){const{className:a,...l}=t,o=L("chakra-input__left-element",a);return x.jsx(Z,{ref:n,placement:"left",className:o,...l})});ze.id="InputLeftElement";ze.displayName="InputLeftElement";var se=z(function(t,n){const{className:a,...l}=t,o=L("chakra-input__right-element",a);return x.jsx(Z,{ref:n,placement:"right",className:o,...l})});se.id="InputRightElement";se.displayName="InputRightElement";function Ht(e,t={}){const{ssr:n=!0,fallback:a}=t,{getWindow:l}=ot(),o=Array.isArray(e)?e:[e];let c=Array.isArray(a)?a:[a];c=c.filter(s=>s!=null);const[f,i]=u.useState(()=>o.map((s,m)=>({media:s,matches:n?!!c[m]:l().matchMedia(s).matches})));return u.useEffect(()=>{const s=l();i(o.map(d=>({media:d,matches:s.matchMedia(d).matches})));const m=o.map(d=>s.matchMedia(d)),b=d=>{i(w=>w.slice().map(y=>y.media===d.media?{...y,matches:d.matches}:y))};return m.forEach(d=>{typeof d.addListener=="function"?d.addListener(b):d.addEventListener("change",b)}),()=>{m.forEach(d=>{typeof d.removeListener=="function"?d.removeListener(b):d.removeEventListener("change",b)})}},[l]),f.map(s=>s.matches)}function Gt(e,t,n=It){let a=Object.keys(e).indexOf(t);if(a!==-1)return e[t];let l=n.indexOf(t);for(;l>=0;){const o=n[l];if(e.hasOwnProperty(o)){a=l;break}l-=1}if(a!==-1){const o=n[a];return e[o]}}function Kt(e){var t,n;const a=_e(e)?e:{fallback:e??"base"},o=oe().__breakpoints.details.map(({minMaxQuery:s,breakpoint:m})=>({breakpoint:m,query:s.replace("@media screen and ","")})),c=o.map(s=>s.breakpoint===a.fallback),i=Ht(o.map(s=>s.query),{fallback:c,ssr:a.ssr}).findIndex(s=>s==!0);return(n=(t=o[i])==null?void 0:t.breakpoint)!=null?n:a.fallback}function $t(e,t){var n;const a=_e(t)?t:{fallback:"base"},l=Kt(a),o=oe();if(!l)return;const c=Array.from(((n=o.__breakpoints)==null?void 0:n.keys)||[]),f=Array.isArray(e)?Object.fromEntries(Object.entries(_t(e,c)).map(([i,s])=>[i,s])):e;return Gt(f,l,c)}var[Ut,ce]=ae({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[Qt,Xt]=ae({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `});function Be(e){const t=u.Children.only(e.children),{getTriggerProps:n}=ce();return u.cloneElement(t,n(t.props,t.ref))}Be.displayName="PopoverTrigger";var M={click:"click",hover:"hover"};function Yt(e={}){const{closeOnBlur:t=!0,closeOnEsc:n=!0,initialFocusRef:a,id:l,returnFocusOnClose:o=!0,autoFocus:c=!0,arrowSize:f,arrowShadowColor:i,trigger:s=M.click,openDelay:m=200,closeDelay:b=200,isLazy:d,lazyBehavior:w="unmount",computePositionOnMount:y,...R}=e,{isOpen:v,onClose:P,onOpen:B,onToggle:ue}=ft(e),q=u.useRef(null),V=u.useRef(null),A=u.useRef(null),D=u.useRef(!1),me=u.useRef(!1);v&&(me.current=!0);const[de,He]=u.useState(!1),[pe,Ge]=u.useState(!1),Ke=u.useId(),$e=l??Ke,[fe,W,H,G]=["popover-trigger","popover-content","popover-header","popover-body"].map(p=>`${p}-${$e}`),{referenceRef:K,getArrowProps:Ue,getPopperProps:ge,getArrowInnerProps:Qe,forceUpdate:Xe}=gt({...R,enabled:v||!!y}),ve=vt({isOpen:v,ref:A});Ft({enabled:v,ref:V}),ht(A,{focusRef:V,visible:v,shouldFocus:o&&s===M.click}),bt(A,{focusRef:a,visible:v,shouldFocus:c&&s===M.click});const he=yt({wasSelected:me.current,enabled:d,mode:w,isSelected:ve.present}),Ye=u.useCallback((p={},S=null)=>{const h={...p,style:{...p.style,transformOrigin:ne.transformOrigin.varRef,[ne.arrowSize.var]:f?`${f}px`:void 0,[ne.arrowShadowColor.var]:i},ref:F(A,S),children:he?p.children:null,id:W,tabIndex:-1,role:"dialog",onKeyDown:O(p.onKeyDown,C=>{n&&C.key==="Escape"&&P()}),onBlur:O(p.onBlur,C=>{const $=Pe(C),te=re(A.current,$),nt=re(V.current,$);v&&t&&(!te&&!nt)&&P()}),"aria-labelledby":de?H:void 0,"aria-describedby":pe?G:void 0};return s===M.hover&&(h.role="tooltip",h.onMouseEnter=O(p.onMouseEnter,()=>{D.current=!0}),h.onMouseLeave=O(p.onMouseLeave,C=>{C.nativeEvent.relatedTarget!==null&&(D.current=!1,setTimeout(()=>P(),b))})),h},[he,W,de,H,pe,G,s,n,P,v,t,b,i,f]),Ze=u.useCallback((p={},S=null)=>ge({...p,style:{visibility:v?"visible":"hidden",...p.style}},S),[v,ge]),Je=u.useCallback((p,S=null)=>({...p,ref:F(S,q,K)}),[q,K]),j=u.useRef(),ee=u.useRef(),be=u.useCallback(p=>{q.current==null&&K(p)},[K]),qe=u.useCallback((p={},S=null)=>{const h={...p,ref:F(V,S,be),id:fe,"aria-haspopup":"dialog","aria-expanded":v,"aria-controls":W};return s===M.click&&(h.onClick=O(p.onClick,ue)),s===M.hover&&(h.onFocus=O(p.onFocus,()=>{j.current===void 0&&B()}),h.onBlur=O(p.onBlur,C=>{const $=Pe(C),te=!re(A.current,$);v&&t&&te&&P()}),h.onKeyDown=O(p.onKeyDown,C=>{C.key==="Escape"&&P()}),h.onMouseEnter=O(p.onMouseEnter,()=>{D.current=!0,j.current=window.setTimeout(()=>B(),m)}),h.onMouseLeave=O(p.onMouseLeave,()=>{D.current=!1,j.current&&(clearTimeout(j.current),j.current=void 0),ee.current=window.setTimeout(()=>{D.current===!1&&P()},b)})),h},[fe,v,W,s,be,ue,B,t,P,m,b]);u.useEffect(()=>()=>{j.current&&clearTimeout(j.current),ee.current&&clearTimeout(ee.current)},[]);const et=u.useCallback((p={},S=null)=>({...p,id:H,ref:F(S,h=>{He(!!h)})}),[H]),tt=u.useCallback((p={},S=null)=>({...p,id:G,ref:F(S,h=>{Ge(!!h)})}),[G]);return{forceUpdate:Xe,isOpen:v,onAnimationComplete:ve.onComplete,onClose:P,getAnchorProps:Je,getArrowProps:Ue,getArrowInnerProps:Qe,getPopoverPositionerProps:Ze,getPopoverProps:Ye,getTriggerProps:qe,getHeaderProps:et,getBodyProps:tt}}function re(e,t){return e===t||(e==null?void 0:e.contains(t))}function Pe(e){var t;const n=e.currentTarget.ownerDocument.activeElement;return(t=e.relatedTarget)!=null?t:n}function De(e){const t=Ce("Popover",e),{children:n,...a}=Ie(e),l=oe(),o=Yt({...a,direction:l.direction});return x.jsx(Ut,{value:o,children:x.jsx(Qt,{value:t,children:lt(n,{isOpen:o.isOpen,onClose:o.onClose,forceUpdate:o.forceUpdate})})})}De.displayName="Popover";function Zt(e){if(e)return{enter:{...e.enter,visibility:"visible"},exit:{...e.exit,transitionEnd:{visibility:"hidden"}}}}var Jt={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},qt=Y(ke.section),Fe=z(function(t,n){const{variants:a=Jt,...l}=t,{isOpen:o}=ce();return x.jsx(qt,{ref:n,variants:Zt(a),initial:!1,animate:o?"enter":"exit",...l})});Fe.displayName="PopoverTransition";var Le=z(function(t,n){const{rootProps:a,motionProps:l,...o}=t,{getPopoverProps:c,getPopoverPositionerProps:f,onAnimationComplete:i}=ce(),s=Xt(),m={position:"relative",display:"flex",flexDirection:"column",...s.content};return x.jsx(Y.div,{...f(a),__css:s.popper,className:"chakra-popover__popper",children:x.jsx(Fe,{...l,...c(o,n),onAnimationComplete:it(i,o.onAnimationComplete),className:L("chakra-popover__content",t.className),__css:m})})});Le.displayName="PopoverContent";function en({title:e,titleId:t,...n},a){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},n),e?u.createElement("title",{id:t},e):null,u.createElement("path",{fillRule:"evenodd",d:"M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const tn=u.forwardRef(en);var Ve={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Se=r.createContext&&r.createContext(Ve),nn=["attr","size","title"];function rn(e,t){if(e==null)return{};var n=an(e,t),a,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function an(e,t){if(e==null)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Q.apply(this,arguments)}function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,a)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oe(Object(n),!0).forEach(function(a){on(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function on(e,t,n){return t=ln(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ln(e){var t=sn(e,"string");return typeof t=="symbol"?t:t+""}function sn(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function We(e){return e&&e.map((t,n)=>r.createElement(t.tag,X({key:n},t.attr),We(t.child)))}function J(e){return t=>r.createElement(cn,Q({attr:X({},e.attr)},t),We(e.child))}function cn(e){var t=n=>{var{attr:a,size:l,title:o}=e,c=rn(e,nn),f=l||n.size||"1em",i;return n.className&&(i=n.className),e.className&&(i=(i?i+" ":"")+e.className),r.createElement("svg",Q({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,c,{className:i,style:X(X({color:e.color||n.color},n.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return Se!==void 0?r.createElement(Se.Consumer,null,n=>t(n)):t(Ve)}function un(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(e)}function mn(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function dn(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"},child:[]}]})(e)}function pn(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}const fn=()=>{const e=new Date().getFullYear();return r.createElement(Re,{background:"gray.100",w:"full",p:8,mt:16},r.createElement(ye,{maxW:"container.xl",w:"full",mb:10,columns:{base:1,xl:3},spacing:10},r.createElement(E,{direction:"column",gap:2,textAlign:"left"},r.createElement(dt,{src:"/images/logo.png",w:240,mx:"auto",alt:"Seetrip Logo"}),r.createElement(g,null,"Address: 60-49 Road 11378 Indonesia"),r.createElement(g,null,"Phone: 0812 3456 7890"),r.createElement(g,null,"Email: hello@seetrip.com")),r.createElement(E,{direction:"column",gap:2,textAlign:"left"},r.createElement(g,{fontSize:"lg",fontWeight:"bold"},"Tentang SeeTrip"),r.createElement(ye,{gap:2,columns:2},r.createElement(g,null,"Tentang Kami"),r.createElement(g,null,"Produk"),r.createElement(g,null,"Cara Pesan"),r.createElement(g,null,"Pembelian Paket Wisata"),r.createElement(g,null,"Pusat Bantuan"),r.createElement(g,null,"Online"),r.createElement(g,null,"TOS"),r.createElement(g,null,"QRIS Pembayaran"))),r.createElement(E,{direction:"column",gap:4,textAlign:"left"},r.createElement(g,{fontSize:"lg",fontWeight:"bold"},"Ikuti Kami Untuk Update Berita Terbaru"),r.createElement(g,null,"Dapatkan E-mail Baru tentang penawaran dan info menarik."),r.createElement(Me,{size:"md"},r.createElement(mt,{borderColor:"blue.500",p:2,type:"email",placeholder:"Email"}),r.createElement(se,{width:"auto"},r.createElement(k,{size:"md",colorScheme:"blue",px:4,borderLeftRadius:0},"Kirim"))),r.createElement(E,{gap:2},r.createElement(k,{p:2,variant:"outline",shadow:"sm",borderRadius:"full",_hover:{bg:"blue.600",color:"white"}},r.createElement(_,{as:un})),r.createElement(k,{p:2,variant:"outline",shadow:"sm",borderRadius:"full",_hover:{bg:"blue.600",color:"white"}},r.createElement(_,{as:pn})),r.createElement(k,{p:2,variant:"outline",shadow:"sm",borderRadius:"full",_hover:{bg:"blue.600",color:"white"}},r.createElement(_,{as:mn})),r.createElement(k,{p:2,variant:"outline",shadow:"sm",borderRadius:"full",_hover:{bg:"blue.600",color:"white"}},r.createElement(_,{as:dn}))))),r.createElement(je,{maxW:"container.xl"},r.createElement(g,{textAlign:"center"},"© ",e," All rights reserved | This Platform is made with ❤️",r.createElement(g,{as:"span",ml:1,fontWeight:"bold",color:"blue.500"},"SeeTrip.id"))))},gn=({label:e,href:t,subLabel:n})=>r.createElement(k,{as:T,href:t,role:"group",display:"block",p:2,rounded:"md",variant:"ghost",_hover:{bg:useColorModeValue("blue.50","gray.900")}},r.createElement(N,{direction:"row",align:"center"},r.createElement(le,null,r.createElement(Text,{transition:"all .3s ease",_groupHover:{color:"blue.500"},fontWeight:500},e),r.createElement(Text,{size:"sm"},n)),r.createElement(E,{transition:"all .3s ease",transform:"translateX(-10px)",opacity:0,_groupHover:{opacity:"100%",transform:"translateX(0)"},justify:"flex-end",align:"center",flex:1},r.createElement(_,{color:"blue.500",w:5,h:5,as:tn})))),vn=({listNav:e})=>{const{url:t}=Te(),n=I("gray.600","gray.200"),a=I("gray.800","white"),l=I("white","gray.800");return r.createElement(N,{direction:"row",spacing:4},e.map(o=>{const c=t===o.href;return r.createElement(le,{key:o.label},r.createElement(De,{trigger:"hover",placement:"bottom-start"},r.createElement(Be,null,r.createElement(k,{as:T,p:2,href:o.href??"#",size:"sm",variant:"ghost",fontWeight:c?"extrabold":500,color:c?"blue.500":n,_hover:{textDecoration:"none",color:a}},o.label)),o.children&&r.createElement(Le,{border:0,boxShadow:"xl",bg:l,p:4,rounded:"xl",minW:"sm"},r.createElement(N,null,o.children.map(f=>r.createElement(gn,{key:f.label,...f}))))))}))},hn=({label:e,children:t,href:n})=>{const{isOpen:a,onToggle:l}=Ne(),{url:o}=Te(),c=n===o,f=I("gray.600","gray.200");return r.createElement(N,{spacing:4,onClick:t&&l},r.createElement(E,{py:2,as:T,href:n??"#",justify:"space-between",align:"center",_hover:{textDecoration:"none"}},r.createElement(g,{fontWeight:c?"extrabold":600,color:c?"blue.500":f},e),t&&r.createElement(_,{as:Et,transition:"all .25s ease-in-out",transform:a?"rotate(180deg)":"",w:6,h:6})),r.createElement(ie,{in:a,animateOpacity:!0,style:{marginTop:"0!important"}},r.createElement(N,{mt:2,pl:4,borderLeft:1,borderStyle:"solid",borderColor:I("gray.200","gray.700"),align:"start"},t&&t.map(i=>r.createElement(T,{key:i.label,py:2,href:i.href},i.label)))))},bn=({listNav:e})=>r.createElement(N,{bg:I("white","gray.800"),p:4,display:{md:"none"}},e.map(t=>r.createElement(hn,{key:t.label,...t}))),yn=({auth:e,sessions:t})=>{var o;const{isOpen:n,onToggle:a}=Ne(),l=[{label:"Beranda",href:"/"},{label:"Wisata",href:"/wisata"},{label:"Order",href:"/order"}];return r.createElement(le,{w:"full",position:"fixed",top:0,zIndex:100,borderBottom:1,borderStyle:"solid",borderColor:I("gray.200","gray.900"),bg:I("white","gray.800"),color:I("gray.600","white")},r.createElement(je,{maxW:"container.xl"},r.createElement(E,{minH:"60px",py:{base:2},px:{base:4},align:"center"},r.createElement(E,{flex:{base:1,md:"auto"},ml:{base:-2},display:{base:"flex",md:"none"}},r.createElement(xt,{onClick:a,icon:n?r.createElement(_,{as:Ct,w:5,h:5}):r.createElement(_,{as:wt,w:5,h:5}),variant:"ghost","aria-label":"Toggle Navigation"})),r.createElement(E,{flex:{base:1},justify:{base:"center",md:"start"},w:"full"},r.createElement(g,{textAlign:$t({base:"center",md:"left"}),fontWeight:"extrabold",fontSize:"xl",color:"blue.500",mr:{base:20,md:0}},"SeeTrip.id"),r.createElement(E,{display:{base:"none",md:"flex"},ml:10},r.createElement(vn,{listNav:l}))),r.createElement(N,null,e.user?r.createElement(E,{alignItems:"center",justify:"flex-end",direction:"row",gap:"3"},r.createElement(g,{display:{base:"none",md:"flex"},fontWeight:"bold"},e.user.nama),r.createElement(Pt,null,r.createElement(St,{as:k,rounded:"full",variant:"link",cursor:"pointer",minW:0},r.createElement(Tt,{size:"sm",name:(o=e.user)==null?void 0:o.nama,src:e.user.avatar?`${e.user.avatar}`:null,alt:"avatar"})),r.createElement(Ot,null,r.createElement(Ee,{as:T,href:e.user.role=="user"?"/profile":"/admin/profile"},"Profile"),r.createElement(kt,null),r.createElement(Ee,{as:T,fontWeight:"semibold",href:"/logout",color:"red.500"},"Logout")))):r.createElement(E,{flex:{base:1,md:0},justify:"flex-end",direction:"row",gap:3},r.createElement(k,{as:T,size:"sm",fontWeight:400,variant:"ghost",href:"/login"},"Login"),r.createElement(k,{as:T,display:{base:"none",md:"inline-flex"},size:"sm",fontWeight:600,color:"white",bg:"blue.500",href:"/register",_hover:{bg:"blue.400"}},"Register")))),r.createElement(ie,{in:n,animateOpacity:!0},r.createElement(bn,{listNav:l}))))},Mn=({children:e,auth:t,sessions:n})=>{const a=ct();return u.useEffect(()=>{const l=(o,c)=>{c&&a({title:o,description:c,status:o.toLowerCase(),duration:3e3,isClosable:!0,position:"top-right",variant:"left-accent"})};l("Success",n==null?void 0:n.success),l("Error",n==null?void 0:n.error)},[n,a]),r.createElement(Re,null,r.createElement(yn,{auth:t,sessions:n}),e,r.createElement(fn,null))};export{Mn as A,tn as F,Me as I,ze as a,se as b};