import{f as je,j as ie,c as we,g as _r,r as f,R as u,W as Sr,I as jr}from"./app-HBiJlnI8.js";import{_ as W,a as $,b as qe,c as Ye}from"./tslib.es6-DjSP9Sqm.js";import{H as Cr,T as U}from"./chunk-7OLJDQMT-B2-9I_Vq.js";import{N as Ge}from"./chunk-X3PS6RUF-BhMZJ8Rk.js";import{u as Pr,s as Ir}from"./chunk-SPIKMR6I-F1cGqwRb.js";import{F as Tr}from"./BookmarkIcon-CzmCP40L.js";import{C as kr,a as Rr,b as zr}from"./chunk-YQO7BFFX-CLc-jOlG.js";import{F as re,I as te}from"./chunk-6CVSDS6C-BglDr7sb.js";import{F as ne,a as oe,C as Lr}from"./chunk-H46NUPBZ-C5KCibLe.js";import{B as Mr}from"./chunk-UVUR7MCU-3OT5YZR6.js";function Nr(e,r=[]){const t=Object.assign({},e);for(const n of r)n in t&&delete t[n];return t}var ar=je(function(r,t){const{fallbackSrc:n,fallback:o,src:i,srcSet:l,align:c,fit:d,loading:h,ignoreFallback:w,crossOrigin:y,fallbackStrategy:A="beforeLoadOrError",referrerPolicy:C,...v}=r,O=n!==void 0||o!==void 0,_=h!=null||w||!O,S=Pr({...r,crossOrigin:y,ignoreFallback:_}),P=Ir(S,A),R={ref:t,objectFit:d,objectPosition:c,..._?v:Nr(v,["onError","onLoad"])};return P?o||ie.jsx(we.img,{as:Ge,className:"chakra-image__placeholder",src:n,...R}):ie.jsx(we.img,{as:Ge,src:i,srcSet:l,crossOrigin:y,loading:h,referrerPolicy:C,className:"chakra-image",...R})});ar.displayName="Image";var ir={exports:{}},Wr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$r=Wr,Kr=$r;function cr(){}function sr(){}sr.resetWarningCache=cr;var Hr=function(){function e(n,o,i,l,c,d){if(d!==Kr){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function r(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:sr,resetWarningCache:cr};return t.PropTypes=t,t};ir.exports=Hr();var Br=ir.exports;const p=_r(Br);var Ce=we("div");Ce.displayName="Box";var lr=je(function(r,t){const{size:n,centerContent:o=!0,...i}=r,l=o?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return ie.jsx(Ce,{ref:t,boxSize:n,__css:{...l,flexShrink:0,flexGrow:0},...i})});lr.displayName="Square";var Ur=je(function(r,t){const{size:n,...o}=r;return ie.jsx(lr,{size:n,ref:t,borderRadius:"9999px",...o})});Ur.displayName="Circle";var qr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Y(e,r){var t=Yr(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function Yr(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),o=qr.get(n);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var Gr=[".DS_Store","Thumbs.db"];function Vr(e){return W(this,void 0,void 0,function(){return $(this,function(r){return ce(e)&&Jr(e.dataTransfer)?[2,et(e.dataTransfer,e.type)]:Qr(e)?[2,Xr(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,Zr(e)]:[2,[]]})})}function Jr(e){return ce(e)}function Qr(e){return ce(e)&&ce(e.target)}function ce(e){return typeof e=="object"&&e!==null}function Xr(e){return xe(e.target.files).map(function(r){return Y(r)})}function Zr(e){return W(this,void 0,void 0,function(){var r;return $(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return Y(n)})]}})})}function et(e,r){return W(this,void 0,void 0,function(){var t,n;return $(this,function(o){switch(o.label){case 0:return e.items?(t=xe(e.items).filter(function(i){return i.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(rt))]):[3,2];case 1:return n=o.sent(),[2,Ve(ur(n))];case 2:return[2,Ve(xe(e.files).map(function(i){return Y(i)}))]}})})}function Ve(e){return e.filter(function(r){return Gr.indexOf(r.name)===-1})}function xe(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function rt(e){if(typeof e.webkitGetAsEntry!="function")return Je(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?fr(r):Je(e)}function ur(e){return e.reduce(function(r,t){return qe(qe([],Ye(r),!1),Ye(Array.isArray(t)?ur(t):[t]),!1)},[])}function Je(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=Y(r);return Promise.resolve(t)}function tt(e){return W(this,void 0,void 0,function(){return $(this,function(r){return[2,e.isDirectory?fr(e):nt(e)]})})}function fr(e){var r=e.createReader();return new Promise(function(t,n){var o=[];function i(){var l=this;r.readEntries(function(c){return W(l,void 0,void 0,function(){var d,h,w;return $(this,function(y){switch(y.label){case 0:if(c.length)return[3,5];y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return d=y.sent(),t(d),[3,4];case 3:return h=y.sent(),n(h),[3,4];case 4:return[3,6];case 5:w=Promise.all(c.map(tt)),o.push(w),i(),y.label=6;case 6:return[2]}})})},function(c){n(c)})}i()})}function nt(e){return W(this,void 0,void 0,function(){return $(this,function(r){return[2,new Promise(function(t,n){e.file(function(o){var i=Y(o,e.fullPath);t(i)},function(o){n(o)})})]})})}var ot=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return t.some(function(l){var c=l.trim().toLowerCase();return c.charAt(0)==="."?n.toLowerCase().endsWith(c):c.endsWith("/*")?i===c.replace(/\/.*$/,""):o===c})}return!0};function Qe(e){return ct(e)||it(e)||mr(e)||at()}function at(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function it(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ct(e){if(Array.isArray(e))return Ae(e)}function Xe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function Ze(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Xe(Object(t),!0).forEach(function(n){pr(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Xe(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function pr(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function q(e,r){return ut(e)||lt(e,r)||mr(e,r)||st()}function st(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mr(e,r){if(e){if(typeof e=="string")return Ae(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ae(e,r)}}function Ae(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function lt(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],o=!0,i=!1,l,c;try{for(t=t.call(e);!(o=(l=t.next()).done)&&(n.push(l.value),!(r&&n.length===r));o=!0);}catch(d){i=!0,c=d}finally{try{!o&&t.return!=null&&t.return()}finally{if(i)throw c}}return n}}function ut(e){if(Array.isArray(e))return e}var ft="file-invalid-type",pt="file-too-large",mt="file-too-small",dt="too-many-files",gt=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:ft,message:"File type must be ".concat(t)}},er=function(r){return{code:pt,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},rr=function(r){return{code:mt,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},vt={code:dt,message:"Too many files"};function dr(e,r){var t=e.type==="application/x-moz-file"||ot(e,r);return[t,t?null:gt(r)]}function gr(e,r,t){if(k(e.size))if(k(r)&&k(t)){if(e.size>t)return[!1,er(t)];if(e.size<r)return[!1,rr(r)]}else{if(k(r)&&e.size<r)return[!1,rr(r)];if(k(t)&&e.size>t)return[!1,er(t)]}return[!0,null]}function k(e){return e!=null}function yt(e){var r=e.files,t=e.accept,n=e.minSize,o=e.maxSize,i=e.multiple,l=e.maxFiles,c=e.validator;return!i&&r.length>1||i&&l>=1&&r.length>l?!1:r.every(function(d){var h=dr(d,t),w=q(h,1),y=w[0],A=gr(d,n,o),C=q(A,1),v=C[0],O=c?c(d):null;return y&&v&&!O})}function se(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ae(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function tr(e){e.preventDefault()}function bt(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function ht(e){return e.indexOf("Edge/")!==-1}function Dt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return bt(e)||ht(e)}function j(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var o=arguments.length,i=new Array(o>1?o-1:0),l=1;l<o;l++)i[l-1]=arguments[l];return r.some(function(c){return!se(n)&&c&&c.apply(void 0,[n].concat(i)),se(n)})}}function Et(){return"showOpenFilePicker"in window}function Ft(e){if(k(e)){var r=Object.entries(e).filter(function(t){var n=q(t,2),o=n[0],i=n[1],l=!0;return vr(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),l=!1),(!Array.isArray(i)||!i.every(yr))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),l=!1),l}).reduce(function(t,n){var o=q(n,2),i=o[0],l=o[1];return Ze(Ze({},t),{},pr({},i,l))},{});return[{description:"Files",accept:r}]}return e}function wt(e){if(k(e))return Object.entries(e).reduce(function(r,t){var n=q(t,2),o=n[0],i=n[1];return[].concat(Qe(r),[o],Qe(i))},[]).filter(function(r){return vr(r)||yr(r)}).join(",")}function xt(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function At(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function vr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function yr(e){return/^.*\.[\w]+$/.test(e)}var Ot=["children"],_t=["open"],St=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],jt=["refKey","onChange","onClick"];function Ct(e){return Tt(e)||It(e)||br(e)||Pt()}function Pt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function It(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Tt(e){if(Array.isArray(e))return Oe(e)}function Fe(e,r){return zt(e)||Rt(e,r)||br(e,r)||kt()}function kt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function br(e,r){if(e){if(typeof e=="string")return Oe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Oe(e,r)}}function Oe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Rt(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],o=!0,i=!1,l,c;try{for(t=t.call(e);!(o=(l=t.next()).done)&&(n.push(l.value),!(r&&n.length===r));o=!0);}catch(d){i=!0,c=d}finally{try{!o&&t.return!=null&&t.return()}finally{if(i)throw c}}return n}}function zt(e){if(Array.isArray(e))return e}function nr(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?nr(Object(t),!0).forEach(function(n){_e(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):nr(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function _e(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function le(e,r){if(e==null)return{};var t=Lt(e,r),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function Lt(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}var Pe=f.forwardRef(function(e,r){var t=e.children,n=le(e,Ot),o=Dr(n),i=o.open,l=le(o,_t);return f.useImperativeHandle(r,function(){return{open:i}},[i]),u.createElement(f.Fragment,null,t(m(m({},l),{},{open:i})))});Pe.displayName="Dropzone";var hr={disabled:!1,getFilesFromEvent:Vr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Pe.defaultProps=hr;Pe.propTypes={children:p.func,accept:p.objectOf(p.arrayOf(p.string)),multiple:p.bool,preventDropOnDocument:p.bool,noClick:p.bool,noKeyboard:p.bool,noDrag:p.bool,noDragEventsBubbling:p.bool,minSize:p.number,maxSize:p.number,maxFiles:p.number,disabled:p.bool,getFilesFromEvent:p.func,onFileDialogCancel:p.func,onFileDialogOpen:p.func,useFsAccessApi:p.bool,autoFocus:p.bool,onDragEnter:p.func,onDragLeave:p.func,onDragOver:p.func,onDrop:p.func,onDropAccepted:p.func,onDropRejected:p.func,onError:p.func,validator:p.func};var Se={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Dr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=m(m({},hr),e),t=r.accept,n=r.disabled,o=r.getFilesFromEvent,i=r.maxSize,l=r.minSize,c=r.multiple,d=r.maxFiles,h=r.onDragEnter,w=r.onDragLeave,y=r.onDragOver,A=r.onDrop,C=r.onDropAccepted,v=r.onDropRejected,O=r.onFileDialogCancel,_=r.onFileDialogOpen,S=r.useFsAccessApi,P=r.autoFocus,R=r.preventDropOnDocument,Ie=r.noClick,ue=r.noKeyboard,Te=r.noDrag,I=r.noDragEventsBubbling,fe=r.onError,K=r.validator,H=f.useMemo(function(){return wt(t)},[t]),ke=f.useMemo(function(){return Ft(t)},[t]),pe=f.useMemo(function(){return typeof _=="function"?_:or},[_]),G=f.useMemo(function(){return typeof O=="function"?O:or},[O]),D=f.useRef(null),x=f.useRef(null),Er=f.useReducer(Mt,Se),Re=Fe(Er,2),me=Re[0],E=Re[1],Fr=me.isFocused,ze=me.isFileDialogActive,V=f.useRef(typeof window<"u"&&window.isSecureContext&&S&&Et()),Le=function(){!V.current&&ze&&setTimeout(function(){if(x.current){var s=x.current.files;s.length||(E({type:"closeDialog"}),G())}},300)};f.useEffect(function(){return window.addEventListener("focus",Le,!1),function(){window.removeEventListener("focus",Le,!1)}},[x,ze,G,V]);var z=f.useRef([]),Me=function(s){D.current&&D.current.contains(s.target)||(s.preventDefault(),z.current=[])};f.useEffect(function(){return R&&(document.addEventListener("dragover",tr,!1),document.addEventListener("drop",Me,!1)),function(){R&&(document.removeEventListener("dragover",tr),document.removeEventListener("drop",Me))}},[D,R]),f.useEffect(function(){return!n&&P&&D.current&&D.current.focus(),function(){}},[D,P,n]);var T=f.useCallback(function(a){fe?fe(a):console.error(a)},[fe]),Ne=f.useCallback(function(a){a.preventDefault(),a.persist(),Z(a),z.current=[].concat(Ct(z.current),[a.target]),ae(a)&&Promise.resolve(o(a)).then(function(s){if(!(se(a)&&!I)){var g=s.length,b=g>0&&yt({files:s,accept:H,minSize:l,maxSize:i,multiple:c,maxFiles:d,validator:K}),F=g>0&&!b;E({isDragAccept:b,isDragReject:F,isDragActive:!0,type:"setDraggedFiles"}),h&&h(a)}}).catch(function(s){return T(s)})},[o,h,T,I,H,l,i,c,d,K]),We=f.useCallback(function(a){a.preventDefault(),a.persist(),Z(a);var s=ae(a);if(s&&a.dataTransfer)try{a.dataTransfer.dropEffect="copy"}catch{}return s&&y&&y(a),!1},[y,I]),$e=f.useCallback(function(a){a.preventDefault(),a.persist(),Z(a);var s=z.current.filter(function(b){return D.current&&D.current.contains(b)}),g=s.indexOf(a.target);g!==-1&&s.splice(g,1),z.current=s,!(s.length>0)&&(E({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ae(a)&&w&&w(a))},[D,w,I]),J=f.useCallback(function(a,s){var g=[],b=[];a.forEach(function(F){var B=dr(F,H),N=Fe(B,2),ge=N[0],ve=N[1],ye=gr(F,l,i),ee=Fe(ye,2),be=ee[0],he=ee[1],De=K?K(F):null;if(ge&&be&&!De)g.push(F);else{var Ee=[ve,he];De&&(Ee=Ee.concat(De)),b.push({file:F,errors:Ee.filter(function(Or){return Or})})}}),(!c&&g.length>1||c&&d>=1&&g.length>d)&&(g.forEach(function(F){b.push({file:F,errors:[vt]})}),g.splice(0)),E({acceptedFiles:g,fileRejections:b,type:"setFiles"}),A&&A(g,b,s),b.length>0&&v&&v(b,s),g.length>0&&C&&C(g,s)},[E,c,H,l,i,d,A,C,v,K]),Q=f.useCallback(function(a){a.preventDefault(),a.persist(),Z(a),z.current=[],ae(a)&&Promise.resolve(o(a)).then(function(s){se(a)&&!I||J(s,a)}).catch(function(s){return T(s)}),E({type:"reset"})},[o,J,T,I]),L=f.useCallback(function(){if(V.current){E({type:"openDialog"}),pe();var a={multiple:c,types:ke};window.showOpenFilePicker(a).then(function(s){return o(s)}).then(function(s){J(s,null),E({type:"closeDialog"})}).catch(function(s){xt(s)?(G(s),E({type:"closeDialog"})):At(s)?(V.current=!1,x.current?(x.current.value=null,x.current.click()):T(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):T(s)});return}x.current&&(E({type:"openDialog"}),pe(),x.current.value=null,x.current.click())},[E,pe,G,S,J,T,ke,c]),Ke=f.useCallback(function(a){!D.current||!D.current.isEqualNode(a.target)||(a.key===" "||a.key==="Enter"||a.keyCode===32||a.keyCode===13)&&(a.preventDefault(),L())},[D,L]),He=f.useCallback(function(){E({type:"focus"})},[]),Be=f.useCallback(function(){E({type:"blur"})},[]),Ue=f.useCallback(function(){Ie||(Dt()?setTimeout(L,0):L())},[Ie,L]),M=function(s){return n?null:s},de=function(s){return ue?null:M(s)},X=function(s){return Te?null:M(s)},Z=function(s){I&&s.stopPropagation()},wr=f.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=a.refKey,g=s===void 0?"ref":s,b=a.role,F=a.onKeyDown,B=a.onFocus,N=a.onBlur,ge=a.onClick,ve=a.onDragEnter,ye=a.onDragOver,ee=a.onDragLeave,be=a.onDrop,he=le(a,St);return m(m(_e({onKeyDown:de(j(F,Ke)),onFocus:de(j(B,He)),onBlur:de(j(N,Be)),onClick:M(j(ge,Ue)),onDragEnter:X(j(ve,Ne)),onDragOver:X(j(ye,We)),onDragLeave:X(j(ee,$e)),onDrop:X(j(be,Q)),role:typeof b=="string"&&b!==""?b:"presentation"},g,D),!n&&!ue?{tabIndex:0}:{}),he)}},[D,Ke,He,Be,Ue,Ne,We,$e,Q,ue,Te,n]),xr=f.useCallback(function(a){a.stopPropagation()},[]),Ar=f.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=a.refKey,g=s===void 0?"ref":s,b=a.onChange,F=a.onClick,B=le(a,jt),N=_e({accept:H,multiple:c,type:"file",style:{display:"none"},onChange:M(j(b,Q)),onClick:M(j(F,xr)),tabIndex:-1},g,x);return m(m({},N),B)}},[x,t,c,Q,n]);return m(m({},me),{},{isFocused:Fr&&!n,getRootProps:wr,getInputProps:Ar,rootRef:D,inputRef:x,open:M(L)})}function Mt(e,r){switch(r.type){case"focus":return m(m({},e),{},{isFocused:!0});case"blur":return m(m({},e),{},{isFocused:!1});case"openDialog":return m(m({},Se),{},{isFileDialogActive:!0});case"closeDialog":return m(m({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return m(m({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return m(m({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return m({},Se);default:return e}}function or(){}const Vt=({auth:e})=>{const[r,t]=f.useState(null),{data:n,setData:o,post:i,processing:l,errors:c,clearErrors:d}=Sr({avatar:"",email:e.user.email,nama:e.user.nama,phone:e.user.phone}),h=(v,O)=>{if(O.length>0){O.forEach(S=>{S.errors.forEach(P=>{P.code==="file-too-large"?console.error("File is too large"):P.code==="file-invalid-type"&&console.error("Invalid file type")})}),t(null);return}const _=v[0];if(_){o("avatar",_);const S=new FileReader;S.onloadend=()=>{t(S.result)},S.readAsDataURL(_)}},{getRootProps:w,getInputProps:y,isDragActive:A}=Dr({onDrop:h,accept:"image/jpg,image/jpeg,image/png",maxSize:2*1024*1024,multiple:!1}),C=v=>{v.preventDefault(),i("/profile",{preserveScroll:!0,onSuccess:()=>{o("avatar",""),t(null),d()}})};return u.createElement(kr,{w:"full",p:2,h:"auto"},u.createElement(Rr,{pb:0},u.createElement(Cr,{size:"md",fontWeight:"bold"},"Ubah Profile")),u.createElement("form",{onSubmit:C},u.createElement(zr,{pb:0},u.createElement(re,{mb:3,isInvalid:c.avatar},u.createElement(ne,{htmlFor:"avatar",fontSize:"sm"},"Avatar"),u.createElement(Ce,{...w(),border:"2px dashed",borderColor:A?"blue.300":"gray.300",borderRadius:"md",p:10,textAlign:"center"},u.createElement(te,{...y()}),A?u.createElement(U,null,"Drop the files here ..."):u.createElement(U,null,"Drag 'n' drop some files here, or click to select files"),r&&u.createElement(ar,{src:r,alt:"Preview",mt:4,borderRadius:"md",boxSize:"200px",objectFit:"cover"})),c.avatar&&u.createElement(oe,{fontSize:"xs"},c.avatar)),u.createElement(re,{mb:3,isInvalid:c.nama},u.createElement(ne,{htmlFor:"nama",fontSize:"sm"},"Nama"," ",u.createElement(U,{display:"inline",color:"red"},"*")),u.createElement(te,{type:"text",id:"nama",value:n.nama,onChange:v=>o("nama",v.target.value)}),c.nama&&u.createElement(oe,{fontSize:"xs"},c.nama)),u.createElement(re,{mb:3,isInvalid:c.email},u.createElement(ne,{htmlFor:"email",fontSize:"sm"},"Email"," ",u.createElement(U,{display:"inline",color:"red"},"*")),u.createElement(te,{type:"email",id:"email",value:n.email,onChange:v=>o("email",v.target.value)}),c.email&&u.createElement(oe,{fontSize:"xs"},c.email)),u.createElement(re,{mb:3,isInvalid:c.phone},u.createElement(ne,{htmlFor:"phone",fontSize:"sm"},"No HP"," ",u.createElement(U,{display:"inline",color:"red"},"*")),u.createElement(te,{type:"text",id:"phone",value:n.phone,onChange:v=>o("phone",v.target.value)}),c.phone&&u.createElement(oe,{fontSize:"xs"},c.phone))),u.createElement(Lr,null,u.createElement(Mr,{type:"submit",colorScheme:"blue",isLoading:l,loadingText:"Simpan"},u.createElement(jr,{as:Tr,mr:2}),"Simpan"))))};export{Vt as default};
