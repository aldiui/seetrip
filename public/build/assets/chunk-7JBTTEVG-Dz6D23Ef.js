import{r as o,x as C}from"./app-JHr847d-.js";function m(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var D=m(),v={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},u={scale:{enter:{scale:1},exit:{scale:.95}},fade:{enter:{opacity:1},exit:{opacity:0}},pushLeft:{enter:{x:"100%"},exit:{x:"-30%"}},pushRight:{enter:{x:"-100%"},exit:{x:"30%"}},pushUp:{enter:{y:"100%"},exit:{y:"-30%"}},pushDown:{enter:{y:"-100%"},exit:{y:"30%"}},slideLeft:{position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},slideRight:{position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},slideUp:{position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},slideDown:{position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}}};function U(e){var t;switch((t=e==null?void 0:e.direction)!=null?t:"right"){case"right":return u.slideRight;case"left":return u.slideLeft;case"bottom":return u.slideDown;case"top":return u.slideUp;default:return u.slideRight}}var j={enter:{duration:.2,ease:v.easeOut},exit:{duration:.1,ease:v.easeIn}},V={enter:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.enter}),exit:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.exit})};function g(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function y(e){var t;if(!g(e))return!1;const n=(t=e.ownerDocument.defaultView)!=null?t:window;return e instanceof n.HTMLElement}function W(e){var t,n;return(n=(t=E(e))==null?void 0:t.defaultView)!=null?n:window}function E(e){return g(e)?e.ownerDocument:document}function F(e){return E(e).activeElement}var O=e=>e.hasAttribute("tabindex"),N=e=>O(e)&&e.tabIndex===-1;function S(e){return!!e.getAttribute("disabled")||!!e.getAttribute("aria-disabled")}function T(e){return e.parentElement&&T(e.parentElement)?!0:e.hidden}function R(e){const t=e.getAttribute("contenteditable");return t!=="false"&&t!=null}function A(e){if(!y(e)||T(e)||S(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const i={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in i?i[t]():R(e)?!0:O(e)}function q(e){return e?y(e)&&A(e)&&!N(e):!1}var L=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],k=L.join(),_=e=>e.offsetWidth>0&&e.offsetHeight>0;function G(e){const t=Array.from(e.querySelectorAll(k));return t.unshift(e),t.filter(n=>A(n)&&_(n))}var P=D?o.useLayoutEffect:o.useEffect;function w(e,t=[]){const n=o.useRef(e);return P(()=>{n.current=e}),o.useCallback((...i)=>{var l;return(l=n.current)==null?void 0:l.call(n,...i)},t)}function B(e,t){const n=o.useId();return o.useMemo(()=>e||[t,n].filter(Boolean).join("-"),[e,t,n])}function H(e,t){const n=e!==void 0;return[n,n&&typeof e<"u"?e:t]}function z(e={}){const{onClose:t,onOpen:n,isOpen:i,id:l}=e,c=w(n),d=w(t),[I,p]=o.useState(e.defaultIsOpen||!1),[r,s]=H(i,I),x=B(l,"disclosure"),f=o.useCallback(()=>{r||p(!1),d==null||d()},[r,d]),b=o.useCallback(()=>{r||p(!0),c==null||c()},[r,c]),h=o.useCallback(()=>{(s?f:b)()},[s,b,f]);return{isOpen:!!s,onOpen:b,onClose:f,onToggle:h,isControlled:r,getButtonProps:(a={})=>({...a,"aria-expanded":s,"aria-controls":x,onClick:C(a.onClick,h)}),getDisclosureProps:(a={})=>({...a,hidden:!s,id:x})}}export{v as T,F as a,G as b,W as c,j as d,U as g,q as i,z as u,V as w};
