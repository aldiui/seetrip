import{r as c,_ as ge,R as nt,j as I,n as K,b as nr,h as at,A as ot,P as ut,F as it}from"./app-JHr847d-.js";import{m as $e}from"./chunk-UVUR7MCU-xK3lE66g.js";import{d as O,e as ar,b as ct}from"./tslib.es6-DjSP9Sqm.js";import{b as lt}from"./chunk-7JBTTEVG-Dz6D23Ef.js";function st(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}var ye="data-focus-lock",or="data-focus-lock-disabled",ft="data-no-focus-lock",dt="data-autofocus-inside",vt="data-no-autofocus";function se(e,r){return typeof e=="function"?e(r):e&&(e.current=r),e}function mt(e,r){var t=c.useState(function(){return{value:e,callback:r,facade:{get current(){return t.value},set current(n){var a=t.value;a!==n&&(t.value=n,t.callback(n,a))}}}})[0];return t.callback=r,t.facade}var ht=typeof window<"u"?c.useLayoutEffect:c.useEffect,Ve=new WeakMap;function ur(e,r){var t=mt(null,function(n){return e.forEach(function(a){return se(a,n)})});return ht(function(){var n=Ve.get(t);if(n){var a=new Set(n),o=new Set(e),i=t.current;a.forEach(function(u){o.has(u)||se(u,null)}),o.forEach(function(u){a.has(u)||se(u,i)})}Ve.set(t,e)},[e]),t}var fe={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"};function ir(e){return e}function cr(e,r){r===void 0&&(r=ir);var t=[],n=!1,a={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(o){var i=r(o,n);return t.push(i),function(){t=t.filter(function(u){return u!==i})}},assignSyncMedium:function(o){for(n=!0;t.length;){var i=t;t=[],i.forEach(o)}t={push:function(u){return o(u)},filter:function(){return t}}},assignMedium:function(o){n=!0;var i=[];if(t.length){var u=t;t=[],u.forEach(o),i=t}var p=function(){var v=i;i=[],v.forEach(o)},f=function(){return Promise.resolve().then(p)};f(),t={push:function(v){i.push(v),f()},filter:function(v){return i=i.filter(v),t}}}};return a}function ke(e,r){return r===void 0&&(r=ir),cr(e,r)}function lr(e){e===void 0&&(e={});var r=cr(null);return r.options=O({async:!0,ssr:!1},e),r}var sr=function(e){var r=e.sideCar,t=ar(e,["sideCar"]);if(!r)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=r.read();if(!n)throw new Error("Sidecar medium not found");return c.createElement(n,O({},t))};sr.isSideCarExport=!0;function bt(e,r){return e.useMedium(r),sr}var fr=ke({},function(e){var r=e.target,t=e.currentTarget;return{target:r,currentTarget:t}}),dr=ke(),pt=ke(),gt=lr({async:!0,ssr:typeof document<"u"}),yt=c.createContext(void 0),St=[],Pe=c.forwardRef(function(r,t){var n,a=c.useState(),o=a[0],i=a[1],u=c.useRef(),p=c.useRef(!1),f=c.useRef(null),v=c.useState({}),s=v[1],d=r.children,m=r.disabled,h=m===void 0?!1:m,l=r.noFocusGuards,b=l===void 0?!1:l,g=r.persistentFocus,y=g===void 0?!1:g,S=r.crossFrame,E=S===void 0?!0:S,w=r.autoFocus,F=w===void 0?!0:w;r.allowTextSelection;var x=r.group,P=r.className,C=r.whiteList,$=r.hasPositiveIndices,z=r.shards,ie=z===void 0?St:z,_e=r.as,Hr=_e===void 0?"div":_e,Ue=r.lockProps,jr=Ue===void 0?{}:Ue,Gr=r.sideCar,He=r.returnFocus,Z=He===void 0?!1:He,$r=r.focusOptions,ce=r.onActivation,le=r.onDeactivation,Vr=c.useState({}),Yr=Vr[0],qr=c.useCallback(function(k){var N=k.captureFocusRestore;if(!f.current){var D,A=(D=document)==null?void 0:D.activeElement;f.current=A,A!==document.body&&(f.current=N(A))}u.current&&ce&&ce(u.current),p.current=!0,s()},[ce]),Xr=c.useCallback(function(){p.current=!1,le&&le(u.current),s()},[le]),zr=c.useCallback(function(k){var N=f.current;if(N){var D=(typeof N=="function"?N():N)||document.body,A=typeof Z=="function"?Z(D):Z;if(A){var Ge=typeof A=="object"?A:void 0;f.current=null,k?Promise.resolve().then(function(){return D.focus(Ge)}):D.focus(Ge)}}},[Z]),Zr=c.useCallback(function(k){p.current&&fr.useMedium(k)},[]),Kr=dr.useMedium,Qr=c.useCallback(function(k){u.current!==k&&(u.current=k,i(k))},[]),Jr=ge((n={},n[or]=h&&"disabled",n[ye]=x,n),jr),je=b!==!0,et=je&&b!=="tail",rt=ur([t,Qr]),tt=c.useMemo(function(){return{observed:u,shards:ie,enabled:!h,active:p.current}},[h,p.current,ie,o]);return c.createElement(c.Fragment,null,je&&[c.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:h?-1:0,style:fe}),$?c.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:h?-1:1,style:fe}):null],!h&&c.createElement(Gr,{id:Yr,sideCar:gt,observed:o,disabled:h,persistentFocus:y,crossFrame:E,autoFocus:F,whiteList:C,shards:ie,onActivation:qr,onDeactivation:Xr,returnFocus:zr,focusOptions:$r}),c.createElement(Hr,ge({ref:rt},Jr,{className:P,onBlur:Kr,onFocus:Zr}),c.createElement(yt.Provider,{value:tt},d)),et&&c.createElement("div",{"data-focus-guard":!0,tabIndex:h?-1:0,style:fe}))});Pe.propTypes={};function Se(e,r){return Se=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},Se(e,r)}function wt(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,Se(e,r)}function Y(e){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Y(e)}function Ct(e,r){if(Y(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(Y(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Et(e){var r=Ct(e,"string");return Y(r)=="symbol"?r:r+""}function Ft(e,r,t){return(r=Et(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function xt(e,r){function t(n){return n.displayName||n.name||"Component"}return function(a){var o=[],i;function u(){i=e(o.map(function(f){return f.props})),r(i)}var p=function(f){wt(v,f);function v(){return f.apply(this,arguments)||this}v.peek=function(){return i};var s=v.prototype;return s.componentDidMount=function(){o.push(this),u()},s.componentDidUpdate=function(){u()},s.componentWillUnmount=function(){var m=o.indexOf(this);o.splice(m,1),u()},s.render=function(){return nt.createElement(a,this.props)},v}(c.PureComponent);return Ft(p,"displayName","SideEffect("+t(a)+")"),p}}var M=function(e){for(var r=Array(e.length),t=0;t<e.length;++t)r[t]=e[t];return r},T=function(e){return Array.isArray(e)?e:[e]},vr=function(e){return Array.isArray(e)?e[0]:e},Mt=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var r=window.getComputedStyle(e,null);return!r||!r.getPropertyValue?!1:r.getPropertyValue("display")==="none"||r.getPropertyValue("visibility")==="hidden"},mr=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},hr=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},kt=function(e){return e.hasAttribute("inert")},Pt=function(e,r){return!e||hr(e)||!Mt(e)&&!kt(e)&&r(mr(e))},br=function(e,r){var t=e.get(r);if(t!==void 0)return t;var n=Pt(r,br.bind(void 0,e));return e.set(r,n),n},Ot=function(e,r){return e&&!hr(e)?Rt(e)?r(mr(e)):!1:!0},pr=function(e,r){var t=e.get(r);if(t!==void 0)return t;var n=Ot(r,pr.bind(void 0,e));return e.set(r,n),n},gr=function(e){return e.dataset},At=function(e){return e.tagName==="BUTTON"},yr=function(e){return e.tagName==="INPUT"},Sr=function(e){return yr(e)&&e.type==="radio"},It=function(e){return!((yr(e)||At(e))&&(e.type==="hidden"||e.disabled))},Rt=function(e){var r=e.getAttribute(vt);return![!0,"true",""].includes(r)},Oe=function(e){var r;return!!(e&&(!((r=gr(e))===null||r===void 0)&&r.focusGuard))},we=function(e){return!Oe(e)},Tt=function(e){return!!e},Nt=function(e,r){var t=Math.max(0,e.tabIndex),n=Math.max(0,r.tabIndex),a=t-n,o=e.index-r.index;if(a){if(!t)return 1;if(!n)return-1}return a||o},Dt=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},Ae=function(e,r,t){return M(e).map(function(n,a){var o=Dt(n);return{node:n,index:a,tabIndex:t&&o===-1?(n.dataset||{}).focusGuard?0:-1:o}}).filter(function(n){return!r||n.tabIndex>=0}).sort(Nt)},Lt=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Ie=Lt.join(","),Bt="".concat(Ie,", [data-focus-guard]"),wr=function(e,r){return M((e.shadowRoot||e).children).reduce(function(t,n){return t.concat(n.matches(r?Bt:Ie)?[n]:[],wr(n))},[])},Wt=function(e,r){var t;return e instanceof HTMLIFrameElement&&(!((t=e.contentDocument)===null||t===void 0)&&t.body)?G([e.contentDocument.body],r):[e]},G=function(e,r){return e.reduce(function(t,n){var a,o=wr(n,r),i=(a=[]).concat.apply(a,o.map(function(u){return Wt(u,r)}));return t.concat(i,n.parentNode?M(n.parentNode.querySelectorAll(Ie)).filter(function(u){return u===n}):[])},[])},_t=function(e){var r=e.querySelectorAll("[".concat(dt,"]"));return M(r).map(function(t){return G([t])}).reduce(function(t,n){return t.concat(n)},[])},Re=function(e,r){return M(e).filter(function(t){return br(r,t)}).filter(function(t){return It(t)})},Ye=function(e,r){return r===void 0&&(r=new Map),M(e).filter(function(t){return pr(r,t)})},Te=function(e,r,t){return Ae(Re(G(e,t),r),!0,t)},ae=function(e,r){return Ae(Re(G(e),r),!1)},Ut=function(e,r){return Re(_t(e),r)},R=function(e,r){return e.shadowRoot?R(e.shadowRoot,r):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,r)?!0:M(e.children).some(function(t){var n;if(t instanceof HTMLIFrameElement){var a=(n=t.contentDocument)===null||n===void 0?void 0:n.body;return a?R(a,r):!1}return R(t,r)})},Ht=function(e){for(var r=new Set,t=e.length,n=0;n<t;n+=1)for(var a=n+1;a<t;a+=1){var o=e[n].compareDocumentPosition(e[a]);(o&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&r.add(a),(o&Node.DOCUMENT_POSITION_CONTAINS)>0&&r.add(n)}return e.filter(function(i,u){return!r.has(u)})},Cr=function(e){return e.parentNode?Cr(e.parentNode):e},Ne=function(e){var r=T(e);return r.filter(Boolean).reduce(function(t,n){var a=n.getAttribute(ye);return t.push.apply(t,a?Ht(M(Cr(n).querySelectorAll("[".concat(ye,'="').concat(a,'"]:not([').concat(or,'="disabled"])')))):[n]),t},[])},jt=function(e){try{return e()}catch{return}},q=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var r=e.activeElement;return r.shadowRoot?q(r.shadowRoot):r instanceof HTMLIFrameElement&&jt(function(){return r.contentWindow.document})?q(r.contentWindow.document):r}},Gt=function(e,r){return e===r},$t=function(e,r){return!!M(e.querySelectorAll("iframe")).some(function(t){return Gt(t,r)})},Er=function(e,r){return r===void 0&&(r=q(vr(e).ownerDocument)),!r||r.dataset&&r.dataset.focusGuard?!1:Ne(e).some(function(t){return R(t,r)||$t(t,r)})},Vt=function(e){e===void 0&&(e=document);var r=q(e);return r?M(e.querySelectorAll("[".concat(ft,"]"))).some(function(t){return R(t,r)}):!1},Yt=function(e,r){return r.filter(Sr).filter(function(t){return t.name===e.name}).filter(function(t){return t.checked})[0]||e},De=function(e,r){return Sr(e)&&e.name?Yt(e,r):e},qt=function(e){var r=new Set;return e.forEach(function(t){return r.add(De(t,e))}),e.filter(function(t){return r.has(t)})},qe=function(e){return e[0]&&e.length>1?De(e[0],e):e[0]},Xe=function(e,r){return e.indexOf(De(r,e))},Ce="NEW_FOCUS",Xt=function(e,r,t,n,a){var o=e.length,i=e[0],u=e[o-1],p=Oe(n);if(!(n&&e.indexOf(n)>=0)){var f=n!==void 0?t.indexOf(n):-1,v=a?t.indexOf(a):f,s=a?e.indexOf(a):-1;if(f===-1)return s!==-1?s:Ce;if(s===-1)return Ce;var d=f-v,m=t.indexOf(i),h=t.indexOf(u),l=qt(t),b=n!==void 0?l.indexOf(n):-1,g=b-(a?l.indexOf(a):f);if(!d&&s>=0||r.length===0)return s;var y=Xe(e,r[0]),S=Xe(e,r[r.length-1]);if(f<=m&&p&&Math.abs(d)>1)return S;if(f>=h&&p&&Math.abs(d)>1)return y;if(d&&Math.abs(g)>1)return s;if(f<=m)return S;if(f>h)return y;if(d)return Math.abs(d)>1?s:(o+s+d)%o}},zt=function(e){return function(r){var t,n=(t=gr(r))===null||t===void 0?void 0:t.autofocus;return r.autofocus||n!==void 0&&n!=="false"||e.indexOf(r)>=0}},ze=function(e,r,t){var n=e.map(function(o){var i=o.node;return i}),a=Ye(n.filter(zt(t)));return a&&a.length?qe(a):qe(Ye(r))},Ee=function(e,r){return r===void 0&&(r=[]),r.push(e),e.parentNode&&Ee(e.parentNode.host||e.parentNode,r),r},de=function(e,r){for(var t=Ee(e),n=Ee(r),a=0;a<t.length;a+=1){var o=t[a];if(n.indexOf(o)>=0)return o}return!1},Fr=function(e,r,t){var n=T(e),a=T(r),o=n[0],i=!1;return a.filter(Boolean).forEach(function(u){i=de(i||u,u)||i,t.filter(Boolean).forEach(function(p){var f=de(o,p);f&&(!i||R(f,i)?i=f:i=de(f,i))})}),i},Ze=function(e,r){return e.reduce(function(t,n){return t.concat(Ut(n,r))},[])},Zt=function(e,r){var t=new Map;return r.forEach(function(n){return t.set(n.node,n)}),e.map(function(n){return t.get(n)}).filter(Tt)},Kt=function(e,r){var t=q(T(e).length>0?document:vr(e).ownerDocument),n=Ne(e).filter(we),a=Fr(t||e,e,n),o=new Map,i=ae(n,o),u=i.filter(function(h){var l=h.node;return we(l)});if(u[0]){var p=ae([a],o).map(function(h){var l=h.node;return l}),f=Zt(p,u),v=f.map(function(h){var l=h.node;return l}),s=f.filter(function(h){var l=h.tabIndex;return l>=0}).map(function(h){var l=h.node;return l}),d=Xt(v,s,p,t,r);if(d===Ce){var m=ze(i,s,Ze(n,o))||ze(i,v,Ze(n,o));if(m)return{node:m};console.warn("focus-lock: cannot find any node to move focus into");return}return d===void 0?d:f[d]}},Qt=function(e){var r=Ne(e).filter(we),t=Fr(e,e,r),n=Ae(G([t],!0),!0,!0),a=G(r,!1);return n.map(function(o){var i=o.node,u=o.index;return{node:i,index:u,lockItem:a.indexOf(i)>=0,guard:Oe(i)}})},Le=function(e,r){e&&("focus"in e&&e.focus(r),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},ve=0,me=!1,xr=function(e,r,t){t===void 0&&(t={});var n=Kt(e,r);if(!me&&n){if(ve>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),me=!0,setTimeout(function(){me=!1},1);return}ve++,Le(n.node,t.focusOptions),ve--}};function V(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var r=e?new WeakRef(e):null;return function(){return(r==null?void 0:r.deref())||null}}var Jt=function(e){if(!e)return null;for(var r=[],t=e;t&&t!==document.body;)r.push({current:V(t),parent:V(t.parentElement),left:V(t.previousElementSibling),right:V(t.nextElementSibling)}),t=t.parentElement;return{element:V(e),stack:r,ownerDocument:e.ownerDocument}},en=function(e){var r,t,n,a,o;if(e)for(var i=e.stack,u=e.ownerDocument,p=new Map,f=0,v=i;f<v.length;f++){var s=v[f],d=(r=s.parent)===null||r===void 0?void 0:r.call(s);if(d&&u.contains(d)){for(var m=(t=s.left)===null||t===void 0?void 0:t.call(s),h=s.current(),l=d.contains(h)?h:void 0,b=(n=s.right)===null||n===void 0?void 0:n.call(s),g=Te([d],p),y=(o=(a=l??(m==null?void 0:m.nextElementSibling))!==null&&a!==void 0?a:b)!==null&&o!==void 0?o:m;y;){for(var S=0,E=g;S<E.length;S++){var w=E[S];if(y!=null&&y.contains(w.node))return w.node}y=y.nextElementSibling}if(g.length)return g[0].node}}},rn=function(e){var r=Jt(e);return function(){return en(r)}},tn=function(e,r,t){if(!e||!r)return console.error("no element or scope given"),{};var n=T(r);if(n.every(function(i){return!R(i,e)}))return console.error("Active element is not contained in the scope"),{};var a=t?Te(n,new Map):ae(n,new Map),o=a.findIndex(function(i){var u=i.node;return u===e});if(o!==-1)return{prev:a[o-1],next:a[o+1],first:a[0],last:a[a.length-1]}},nn=function(e,r){var t=r?Te(T(e),new Map):ae(T(e),new Map);return{first:t[0],last:t[t.length-1]}},an=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},Mr=function(e,r,t){r===void 0&&(r={});var n=an(r),a=tn(e,n.scope,n.onlyTabbable);if(a){var o=t(a,n.cycle);o&&Le(o.node,n.focusOptions)}},on=function(e,r){r===void 0&&(r={}),Mr(e,r,function(t,n){var a=t.next,o=t.first;return a||n&&o})},un=function(e,r){r===void 0&&(r={}),Mr(e,r,function(t,n){var a=t.prev,o=t.last;return a||n&&o})},kr=function(e,r,t){var n,a=nn(e,(n=r.onlyTabbable)!==null&&n!==void 0?n:!0),o=a[t];o&&Le(o.node,r.focusOptions)},cn=function(e,r){r===void 0&&(r={}),kr(e,r,"first")},ln=function(e,r){r===void 0&&(r={}),kr(e,r,"last")};function Be(e){setTimeout(e,1)}var sn=function(r){return r&&"current"in r?r.current:r},fn=function(){return document&&document.activeElement===document.body},dn=function(){return fn()||Vt()},U=null,_=null,H=null,X=!1,vn=function(){return!0},mn=function(r){return(U.whiteList||vn)(r)},hn=function(r,t){H={observerNode:r,portaledElement:t}},bn=function(r){return H&&H.portaledElement===r};function Ke(e,r,t,n){var a=null,o=e;do{var i=n[o];if(i.guard)i.node.dataset.focusAutoGuard&&(a=i);else if(i.lockItem){if(o!==e)return;a=null}else break}while((o+=t)!==r);a&&(a.node.tabIndex=0)}var pn=function(r){return r?!!X:X==="meanwhile"},gn=function e(r,t,n){return t&&(t.host===r&&(!t.activeElement||n.contains(t.activeElement))||t.parentNode&&e(r,t.parentNode,n))},yn=function(r,t){return t.some(function(n){return gn(r,n,n)})},oe=function(){var r=!1;if(U){var t=U,n=t.observed,a=t.persistentFocus,o=t.autoFocus,i=t.shards,u=t.crossFrame,p=t.focusOptions,f=n||H&&H.portaledElement,v=document&&document.activeElement;if(f){var s=[f].concat(i.map(sn).filter(Boolean));if((!v||mn(v))&&(a||pn(u)||!dn()||!_&&o)&&(f&&!(Er(s)||v&&yn(v,s)||bn(v))&&(document&&!_&&v&&!o?(v.blur&&v.blur(),document.body.focus()):(r=xr(s,_,{focusOptions:p}),H={})),X=!1,_=document&&document.activeElement),document&&v!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var d=document&&document.activeElement,m=Qt(s),h=m.map(function(l){var b=l.node;return b}).indexOf(d);h>-1&&(m.filter(function(l){var b=l.guard,g=l.node;return b&&g.dataset.focusAutoGuard}).forEach(function(l){var b=l.node;return b.removeAttribute("tabIndex")}),Ke(h,m.length,1,m),Ke(h,-1,-1,m))}}}return r},Pr=function(r){oe()&&r&&(r.stopPropagation(),r.preventDefault())},We=function(){return Be(oe)},Sn=function(r){var t=r.target,n=r.currentTarget;n.contains(t)||hn(n,t)},wn=function(){return null},Or=function(){X="just",Be(function(){X="meanwhile"})},Cn=function(){document.addEventListener("focusin",Pr),document.addEventListener("focusout",We),window.addEventListener("blur",Or)},En=function(){document.removeEventListener("focusin",Pr),document.removeEventListener("focusout",We),window.removeEventListener("blur",Or)};function Fn(e){return e.filter(function(r){var t=r.disabled;return!t})}var Ar={moveFocusInside:xr,focusInside:Er,focusNextElement:on,focusPrevElement:un,focusFirstElement:cn,focusLastElement:ln,captureFocusRestore:rn};function xn(e){var r=e.slice(-1)[0];r&&!U&&Cn();var t=U,n=t&&r&&r.id===t.id;U=r,t&&!n&&(t.onDeactivation(),e.filter(function(a){var o=a.id;return o===t.id}).length||t.returnFocus(!r)),r?(_=null,(!n||t.observed!==r.observed)&&r.onActivation(Ar),oe(),Be(oe)):(En(),_=null)}fr.assignSyncMedium(Sn);dr.assignMedium(We);pt.assignMedium(function(e){return e(Ar)});const Mn=xt(Fn,xn)(wn);var Fe=c.forwardRef(function(r,t){return c.createElement(Pe,ge({sideCar:Mn,ref:t},r))}),Ir=Pe.propTypes||{};Ir.sideCar;st(Ir,["sideCar"]);Fe.propTypes={};var Qe,kn=(Qe=Fe.default)!=null?Qe:Fe,Rr=e=>{const{initialFocusRef:r,finalFocusRef:t,contentRef:n,restoreFocus:a,children:o,isDisabled:i,autoFocus:u,persistentFocus:p,lockFocusAcrossFrames:f}=e,v=c.useCallback(()=>{r!=null&&r.current?r.current.focus():n!=null&&n.current&&lt(n.current).length===0&&requestAnimationFrame(()=>{var h;(h=n.current)==null||h.focus()})},[r,n]),s=c.useCallback(()=>{var m;(m=t==null?void 0:t.current)==null||m.focus()},[t]),d=a&&!t;return I.jsx(kn,{crossFrame:f,persistentFocus:p,autoFocus:u,disabled:i,onActivation:v,onDeactivation:s,returnFocus:d,children:o})};Rr.displayName="FocusLock";var Pn=Object.defineProperty,On=(e,r,t)=>r in e?Pn(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,An=(e,r,t)=>(On(e,r+"",t),t),In=class{constructor(){An(this,"modals"),this.modals=new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return e?this.modals.get(e)===this.modals.size:!1}},xe=new In;function Tr(e,r){const[t,n]=c.useState(0);return c.useEffect(()=>{const a=e.current;if(a){if(r){const o=xe.add(a);n(o)}return()=>{xe.remove(a),n(0)}}},[r,e]),t}var Rn=function(e){if(typeof document>"u")return null;var r=Array.isArray(e)?e[0]:e;return r.ownerDocument.body},L=new WeakMap,Q=new WeakMap,J={},he=0,Nr=function(e){return e&&(e.host||Nr(e.parentNode))},Tn=function(e,r){return r.map(function(t){if(e.contains(t))return t;var n=Nr(t);return n&&e.contains(n)?n:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(t){return!!t})},Nn=function(e,r,t,n){var a=Tn(r,Array.isArray(e)?e:[e]);J[t]||(J[t]=new WeakMap);var o=J[t],i=[],u=new Set,p=new Set(a),f=function(s){!s||u.has(s)||(u.add(s),f(s.parentNode))};a.forEach(f);var v=function(s){!s||p.has(s)||Array.prototype.forEach.call(s.children,function(d){if(u.has(d))v(d);else try{var m=d.getAttribute(n),h=m!==null&&m!=="false",l=(L.get(d)||0)+1,b=(o.get(d)||0)+1;L.set(d,l),o.set(d,b),i.push(d),l===1&&h&&Q.set(d,!0),b===1&&d.setAttribute(t,"true"),h||d.setAttribute(n,"true")}catch(g){console.error("aria-hidden: cannot operate on ",d,g)}})};return v(r),u.clear(),he++,function(){i.forEach(function(s){var d=L.get(s)-1,m=o.get(s)-1;L.set(s,d),o.set(s,m),d||(Q.has(s)||s.removeAttribute(n),Q.delete(s)),m||s.removeAttribute(t)}),he--,he||(L=new WeakMap,L=new WeakMap,Q=new WeakMap,J={})}},Dn=function(e,r,t){t===void 0&&(t="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),a=Rn(e);return a?(n.push.apply(n,Array.from(a.querySelectorAll("[aria-live]"))),Nn(n,a,t,"aria-hidden")):function(){return null}};function Ln(e){const{isOpen:r,onClose:t,id:n,closeOnOverlayClick:a=!0,closeOnEsc:o=!0,useInert:i=!0,onOverlayClick:u,onEsc:p}=e,f=c.useRef(null),v=c.useRef(null),[s,d,m]=Wn(n,"chakra-modal","chakra-modal--header","chakra-modal--body");Bn(f,r&&i);const h=Tr(f,r),l=c.useRef(null),b=c.useCallback(C=>{l.current=C.target},[]),g=c.useCallback(C=>{C.key==="Escape"&&(C.stopPropagation(),o&&(t==null||t()),p==null||p())},[o,t,p]),[y,S]=c.useState(!1),[E,w]=c.useState(!1),F=c.useCallback((C={},$=null)=>({role:"dialog",...C,ref:$e($,f),id:s,tabIndex:-1,"aria-modal":!0,"aria-labelledby":y?d:void 0,"aria-describedby":E?m:void 0,onClick:K(C.onClick,z=>z.stopPropagation())}),[m,E,s,d,y]),x=c.useCallback(C=>{C.stopPropagation(),l.current===C.target&&xe.isTopModal(f.current)&&(a&&(t==null||t()),u==null||u())},[t,a,u]),P=c.useCallback((C={},$=null)=>({...C,ref:$e($,v),onClick:K(C.onClick,x),onKeyDown:K(C.onKeyDown,g),onMouseDown:K(C.onMouseDown,b)}),[g,b,x]);return{isOpen:r,onClose:t,headerId:d,bodyId:m,setBodyMounted:w,setHeaderMounted:S,dialogRef:f,overlayRef:v,getDialogProps:F,getDialogContainerProps:P,index:h}}function Bn(e,r){const t=e.current;c.useEffect(()=>{if(!(!e.current||!r))return Dn(e.current)},[r,e,t])}function Wn(e,...r){const t=c.useId(),n=e||t;return c.useMemo(()=>r.map(a=>`${a}-${n}`),[n,r])}var[_n,wa]=nr({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[Un,Hn]=nr({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),jn=e=>{const r={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:t,children:n,autoFocus:a,trapFocus:o,initialFocusRef:i,finalFocusRef:u,returnFocusOnClose:p,blockScrollOnMount:f,allowPinchZoom:v,preserveScrollBarGap:s,motionPreset:d,lockFocusAcrossFrames:m,onCloseComplete:h}=r,l=at("Modal",r),g={...Ln(r),autoFocus:a,trapFocus:o,initialFocusRef:i,finalFocusRef:u,returnFocusOnClose:p,blockScrollOnMount:f,allowPinchZoom:v,preserveScrollBarGap:s,motionPreset:d,lockFocusAcrossFrames:m};return I.jsx(Un,{value:g,children:I.jsx(_n,{value:l,children:I.jsx(ot,{onExitComplete:h,children:g.isOpen&&I.jsx(ut,{...t,children:n})})})})};jn.displayName="Modal";var te="right-scroll-bar-position",ne="width-before-scroll-bar",Gn="with-scroll-bars-hidden",$n="--removed-body-scroll-bar-size",Dr=lr(),be=function(){},ue=c.forwardRef(function(e,r){var t=c.useRef(null),n=c.useState({onScrollCapture:be,onWheelCapture:be,onTouchMoveCapture:be}),a=n[0],o=n[1],i=e.forwardProps,u=e.children,p=e.className,f=e.removeScrollBar,v=e.enabled,s=e.shards,d=e.sideCar,m=e.noIsolation,h=e.inert,l=e.allowPinchZoom,b=e.as,g=b===void 0?"div":b,y=e.gapMode,S=ar(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=d,w=ur([t,r]),F=O(O({},S),a);return c.createElement(c.Fragment,null,v&&c.createElement(E,{sideCar:Dr,removeScrollBar:f,shards:s,noIsolation:m,inert:h,setCallbacks:o,allowPinchZoom:!!l,lockRef:t,gapMode:y}),i?c.cloneElement(c.Children.only(u),O(O({},F),{ref:w})):c.createElement(g,O({},F,{className:p,ref:w}),u))});ue.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ue.classNames={fullWidth:ne,zeroRight:te};var Vn=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Yn(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var r=Vn();return r&&e.setAttribute("nonce",r),e}function qn(e,r){e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r))}function Xn(e){var r=document.head||document.getElementsByTagName("head")[0];r.appendChild(e)}var zn=function(){var e=0,r=null;return{add:function(t){e==0&&(r=Yn())&&(qn(r,t),Xn(r)),e++},remove:function(){e--,!e&&r&&(r.parentNode&&r.parentNode.removeChild(r),r=null)}}},Zn=function(){var e=zn();return function(r,t){c.useEffect(function(){return e.add(r),function(){e.remove()}},[r&&t])}},Lr=function(){var e=Zn(),r=function(t){var n=t.styles,a=t.dynamic;return e(n,a),null};return r},Kn={left:0,top:0,right:0,gap:0},pe=function(e){return parseInt(e||"",10)||0},Qn=function(e){var r=window.getComputedStyle(document.body),t=r[e==="padding"?"paddingLeft":"marginLeft"],n=r[e==="padding"?"paddingTop":"marginTop"],a=r[e==="padding"?"paddingRight":"marginRight"];return[pe(t),pe(n),pe(a)]},Jn=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Kn;var r=Qn(e),t=document.documentElement.clientWidth,n=window.innerWidth;return{left:r[0],top:r[1],right:r[2],gap:Math.max(0,n-t+r[2]-r[0])}},ea=Lr(),j="data-scroll-locked",ra=function(e,r,t,n){var a=e.left,o=e.top,i=e.right,u=e.gap;return t===void 0&&(t="margin"),`
  .`.concat(Gn,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(u,"px ").concat(n,`;
  }
  body[`).concat(j,`] {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([r&&"position: relative ".concat(n,";"),t==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u,"px ").concat(n,`;
    `),t==="padding"&&"padding-right: ".concat(u,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(te,` {
    right: `).concat(u,"px ").concat(n,`;
  }
  
  .`).concat(ne,` {
    margin-right: `).concat(u,"px ").concat(n,`;
  }
  
  .`).concat(te," .").concat(te,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(ne," .").concat(ne,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body[`).concat(j,`] {
    `).concat($n,": ").concat(u,`px;
  }
`)},Je=function(){var e=parseInt(document.body.getAttribute(j)||"0",10);return isFinite(e)?e:0},ta=function(){c.useEffect(function(){return document.body.setAttribute(j,(Je()+1).toString()),function(){var e=Je()-1;e<=0?document.body.removeAttribute(j):document.body.setAttribute(j,e.toString())}},[])},na=function(e){var r=e.noRelative,t=e.noImportant,n=e.gapMode,a=n===void 0?"margin":n;ta();var o=c.useMemo(function(){return Jn(a)},[a]);return c.createElement(ea,{styles:ra(o,!r,a,t?"":"!important")})},Me=!1;if(typeof window<"u")try{var ee=Object.defineProperty({},"passive",{get:function(){return Me=!0,!0}});window.addEventListener("test",ee,ee),window.removeEventListener("test",ee,ee)}catch{Me=!1}var B=Me?{passive:!1}:!1,aa=function(e){return e.tagName==="TEXTAREA"},Br=function(e,r){if(!(e instanceof Element))return!1;var t=window.getComputedStyle(e);return t[r]!=="hidden"&&!(t.overflowY===t.overflowX&&!aa(e)&&t[r]==="visible")},oa=function(e){return Br(e,"overflowY")},ua=function(e){return Br(e,"overflowX")},er=function(e,r){var t=r.ownerDocument,n=r;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var a=Wr(e,n);if(a){var o=_r(e,n),i=o[1],u=o[2];if(i>u)return!0}n=n.parentNode}while(n&&n!==t.body);return!1},ia=function(e){var r=e.scrollTop,t=e.scrollHeight,n=e.clientHeight;return[r,t,n]},ca=function(e){var r=e.scrollLeft,t=e.scrollWidth,n=e.clientWidth;return[r,t,n]},Wr=function(e,r){return e==="v"?oa(r):ua(r)},_r=function(e,r){return e==="v"?ia(r):ca(r)},la=function(e,r){return e==="h"&&r==="rtl"?-1:1},sa=function(e,r,t,n,a){var o=la(e,window.getComputedStyle(r).direction),i=o*n,u=t.target,p=r.contains(u),f=!1,v=i>0,s=0,d=0;do{var m=_r(e,u),h=m[0],l=m[1],b=m[2],g=l-b-o*h;(h||g)&&Wr(e,u)&&(s+=g,d+=h),u instanceof ShadowRoot?u=u.host:u=u.parentNode}while(!p&&u!==document.body||p&&(r.contains(u)||r===u));return(v&&(Math.abs(s)<1||!a)||!v&&(Math.abs(d)<1||!a))&&(f=!0),f},re=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},rr=function(e){return[e.deltaX,e.deltaY]},tr=function(e){return e&&"current"in e?e.current:e},fa=function(e,r){return e[0]===r[0]&&e[1]===r[1]},da=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},va=0,W=[];function ma(e){var r=c.useRef([]),t=c.useRef([0,0]),n=c.useRef(),a=c.useState(va++)[0],o=c.useState(Lr)[0],i=c.useRef(e);c.useEffect(function(){i.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var l=ct([e.lockRef.current],(e.shards||[]).map(tr),!0).filter(Boolean);return l.forEach(function(b){return b.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),l.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var u=c.useCallback(function(l,b){if("touches"in l&&l.touches.length===2)return!i.current.allowPinchZoom;var g=re(l),y=t.current,S="deltaX"in l?l.deltaX:y[0]-g[0],E="deltaY"in l?l.deltaY:y[1]-g[1],w,F=l.target,x=Math.abs(S)>Math.abs(E)?"h":"v";if("touches"in l&&x==="h"&&F.type==="range")return!1;var P=er(x,F);if(!P)return!0;if(P?w=x:(w=x==="v"?"h":"v",P=er(x,F)),!P)return!1;if(!n.current&&"changedTouches"in l&&(S||E)&&(n.current=w),!w)return!0;var C=n.current||w;return sa(C,b,l,C==="h"?S:E,!0)},[]),p=c.useCallback(function(l){var b=l;if(!(!W.length||W[W.length-1]!==o)){var g="deltaY"in b?rr(b):re(b),y=r.current.filter(function(w){return w.name===b.type&&(w.target===b.target||b.target===w.shadowParent)&&fa(w.delta,g)})[0];if(y&&y.should){b.cancelable&&b.preventDefault();return}if(!y){var S=(i.current.shards||[]).map(tr).filter(Boolean).filter(function(w){return w.contains(b.target)}),E=S.length>0?u(b,S[0]):!i.current.noIsolation;E&&b.cancelable&&b.preventDefault()}}},[]),f=c.useCallback(function(l,b,g,y){var S={name:l,delta:b,target:g,should:y,shadowParent:ha(g)};r.current.push(S),setTimeout(function(){r.current=r.current.filter(function(E){return E!==S})},1)},[]),v=c.useCallback(function(l){t.current=re(l),n.current=void 0},[]),s=c.useCallback(function(l){f(l.type,rr(l),l.target,u(l,e.lockRef.current))},[]),d=c.useCallback(function(l){f(l.type,re(l),l.target,u(l,e.lockRef.current))},[]);c.useEffect(function(){return W.push(o),e.setCallbacks({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:d}),document.addEventListener("wheel",p,B),document.addEventListener("touchmove",p,B),document.addEventListener("touchstart",v,B),function(){W=W.filter(function(l){return l!==o}),document.removeEventListener("wheel",p,B),document.removeEventListener("touchmove",p,B),document.removeEventListener("touchstart",v,B)}},[]);var m=e.removeScrollBar,h=e.inert;return c.createElement(c.Fragment,null,h?c.createElement(o,{styles:da(a)}):null,m?c.createElement(na,{gapMode:e.gapMode}):null)}function ha(e){for(var r=null;e!==null;)e instanceof ShadowRoot&&(r=e.host,e=e.host),e=e.parentNode;return r}const ba=bt(Dr,ma);var Ur=c.forwardRef(function(e,r){return c.createElement(ue,O({},e,{ref:r,sideCar:ba}))});Ur.classNames=ue.classNames;function Ca(e){const{autoFocus:r,trapFocus:t,dialogRef:n,initialFocusRef:a,blockScrollOnMount:o,allowPinchZoom:i,finalFocusRef:u,returnFocusOnClose:p,preserveScrollBarGap:f,lockFocusAcrossFrames:v,isOpen:s}=Hn(),[d,m]=it();c.useEffect(()=>{!d&&m&&setTimeout(m)},[d,m]);const h=Tr(n,s);return I.jsx(Rr,{autoFocus:r,isDisabled:!t,initialFocusRef:a,finalFocusRef:u,restoreFocus:p,contentRef:n,lockFocusAcrossFrames:v,children:I.jsx(Ur,{removeScrollBar:!f,allowPinchZoom:i,enabled:h===1&&o,forwardProps:!0,children:e.children})})}export{jn as M,wa as a,Ca as b,Hn as u};
