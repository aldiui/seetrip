import{l as dr,r as l,R as mr}from"./app-ejYvf9I6.js";import{_ as C,a as S,b as ze,c as Le}from"./tslib.es6-DjSP9Sqm.js";var qe={exports:{}},gr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",vr=gr,yr=vr;function Ve(){}function Je(){}Je.resetWarningCache=Ve;var br=function(){function e(n,i,u,s,c,m){if(m!==yr){var O=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw O.name="Invariant Violation",O}}e.isRequired=e;function r(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:Je,resetWarningCache:Ve};return t.PropTypes=t,t};qe.exports=br();var hr=qe.exports;const f=dr(hr);var Dr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function W(e,r){var t=Or(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function Or(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),i=Dr.get(n);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var Ar=[".DS_Store","Thumbs.db"];function Er(e){return C(this,void 0,void 0,function(){return S(this,function(r){return J(e)&&wr(e.dataTransfer)?[2,jr(e.dataTransfer,e.type)]:Fr(e)?[2,_r(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,xr(e)]:[2,[]]})})}function wr(e){return J(e)}function Fr(e){return J(e)&&J(e.target)}function J(e){return typeof e=="object"&&e!==null}function _r(e){return me(e.target.files).map(function(r){return W(r)})}function xr(e){return C(this,void 0,void 0,function(){var r;return S(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return W(n)})]}})})}function jr(e,r){return C(this,void 0,void 0,function(){var t,n;return S(this,function(i){switch(i.label){case 0:return e.items?(t=me(e.items).filter(function(u){return u.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Pr))]):[3,2];case 1:return n=i.sent(),[2,Me(Qe(n))];case 2:return[2,Me(me(e.files).map(function(u){return W(u)}))]}})})}function Me(e){return e.filter(function(r){return Ar.indexOf(r.name)===-1})}function me(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function Pr(e){if(typeof e.webkitGetAsEntry!="function")return $e(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?Xe(r):$e(e)}function Qe(e){return e.reduce(function(r,t){return ze(ze([],Le(r),!1),Le(Array.isArray(t)?Qe(t):[t]),!1)},[])}function $e(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=W(r);return Promise.resolve(t)}function Tr(e){return C(this,void 0,void 0,function(){return S(this,function(r){return[2,e.isDirectory?Xe(e):Cr(e)]})})}function Xe(e){var r=e.createReader();return new Promise(function(t,n){var i=[];function u(){var s=this;r.readEntries(function(c){return C(s,void 0,void 0,function(){var m,O,E;return S(this,function(h){switch(h.label){case 0:if(c.length)return[3,5];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return m=h.sent(),t(m),[3,4];case 3:return O=h.sent(),n(O),[3,4];case 4:return[3,6];case 5:E=Promise.all(c.map(Tr)),i.push(E),u(),h.label=6;case 6:return[2]}})})},function(c){n(c)})}u()})}function Cr(e){return C(this,void 0,void 0,function(){return S(this,function(r){return[2,new Promise(function(t,n){e.file(function(i){var u=W(i,e.fullPath);t(u)},function(i){n(i)})})]})})}var Sr=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),u=i.replace(/\/.*$/,"");return t.some(function(s){var c=s.trim().toLowerCase();return c.charAt(0)==="."?n.toLowerCase().endsWith(c):c.endsWith("/*")?u===c.replace(/\/.*$/,""):i===c})}return!0};function Ke(e){return kr(e)||Ir(e)||er(e)||Rr()}function Rr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ir(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kr(e){if(Array.isArray(e))return ge(e)}function We(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function He(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?We(Object(t),!0).forEach(function(n){Ze(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):We(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ze(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function K(e,r){return Mr(e)||Lr(e,r)||er(e,r)||zr()}function zr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function er(e,r){if(e){if(typeof e=="string")return ge(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ge(e,r)}}function ge(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Lr(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,u=!1,s,c;try{for(t=t.call(e);!(i=(s=t.next()).done)&&(n.push(s.value),!(r&&n.length===r));i=!0);}catch(m){u=!0,c=m}finally{try{!i&&t.return!=null&&t.return()}finally{if(u)throw c}}return n}}function Mr(e){if(Array.isArray(e))return e}var $r="file-invalid-type",Kr="file-too-large",Wr="file-too-small",Hr="too-many-files",Br=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:$r,message:"File type must be ".concat(t)}},Be=function(r){return{code:Kr,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},Ne=function(r){return{code:Wr,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},Nr={code:Hr,message:"Too many files"};function rr(e,r){var t=e.type==="application/x-moz-file"||Sr(e,r);return[t,t?null:Br(r)]}function tr(e,r,t){if(_(e.size))if(_(r)&&_(t)){if(e.size>t)return[!1,Be(t)];if(e.size<r)return[!1,Ne(r)]}else{if(_(r)&&e.size<r)return[!1,Ne(r)];if(_(t)&&e.size>t)return[!1,Be(t)]}return[!0,null]}function _(e){return e!=null}function Ur(e){var r=e.files,t=e.accept,n=e.minSize,i=e.maxSize,u=e.multiple,s=e.maxFiles,c=e.validator;return!u&&r.length>1||u&&s>=1&&r.length>s?!1:r.every(function(m){var O=rr(m,t),E=K(O,1),h=E[0],R=tr(m,n,i),I=K(R,1),k=I[0],z=c?c(m):null;return h&&k&&!z})}function Q(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function V(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Ue(e){e.preventDefault()}function Yr(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Gr(e){return e.indexOf("Edge/")!==-1}function qr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Yr(e)||Gr(e)}function A(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var i=arguments.length,u=new Array(i>1?i-1:0),s=1;s<i;s++)u[s-1]=arguments[s];return r.some(function(c){return!Q(n)&&c&&c.apply(void 0,[n].concat(u)),Q(n)})}}function Vr(){return"showOpenFilePicker"in window}function Jr(e){if(_(e)){var r=Object.entries(e).filter(function(t){var n=K(t,2),i=n[0],u=n[1],s=!0;return nr(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),s=!1),(!Array.isArray(u)||!u.every(or))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),s=!1),s}).reduce(function(t,n){var i=K(n,2),u=i[0],s=i[1];return He(He({},t),{},Ze({},u,s))},{});return[{description:"Files",accept:r}]}return e}function Qr(e){if(_(e))return Object.entries(e).reduce(function(r,t){var n=K(t,2),i=n[0],u=n[1];return[].concat(Ke(r),[i],Ke(u))},[]).filter(function(r){return nr(r)||or(r)}).join(",")}function Xr(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Zr(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function nr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function or(e){return/^.*\.[\w]+$/.test(e)}var et=["children"],rt=["open"],tt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],nt=["refKey","onChange","onClick"];function ot(e){return ut(e)||at(e)||ir(e)||it()}function it(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function at(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ut(e){if(Array.isArray(e))return ve(e)}function de(e,r){return lt(e)||st(e,r)||ir(e,r)||ct()}function ct(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ir(e,r){if(e){if(typeof e=="string")return ve(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ve(e,r)}}function ve(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function st(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,u=!1,s,c;try{for(t=t.call(e);!(i=(s=t.next()).done)&&(n.push(s.value),!(r&&n.length===r));i=!0);}catch(m){u=!0,c=m}finally{try{!i&&t.return!=null&&t.return()}finally{if(u)throw c}}return n}}function lt(e){if(Array.isArray(e))return e}function Ye(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ye(Object(t),!0).forEach(function(n){ye(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ye(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function ye(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function X(e,r){if(e==null)return{};var t=ft(e,r),n,i;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(i=0;i<u.length;i++)n=u[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function ft(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,u;for(u=0;u<n.length;u++)i=n[u],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var he=l.forwardRef(function(e,r){var t=e.children,n=X(e,et),i=pt(n),u=i.open,s=X(i,rt);return l.useImperativeHandle(r,function(){return{open:u}},[u]),mr.createElement(l.Fragment,null,t(p(p({},s),{},{open:u})))});he.displayName="Dropzone";var ar={disabled:!1,getFilesFromEvent:Er,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};he.defaultProps=ar;he.propTypes={children:f.func,accept:f.objectOf(f.arrayOf(f.string)),multiple:f.bool,preventDropOnDocument:f.bool,noClick:f.bool,noKeyboard:f.bool,noDrag:f.bool,noDragEventsBubbling:f.bool,minSize:f.number,maxSize:f.number,maxFiles:f.number,disabled:f.bool,getFilesFromEvent:f.func,onFileDialogCancel:f.func,onFileDialogOpen:f.func,useFsAccessApi:f.bool,autoFocus:f.bool,onDragEnter:f.func,onDragLeave:f.func,onDragOver:f.func,onDrop:f.func,onDropAccepted:f.func,onDropRejected:f.func,onError:f.func,validator:f.func};var be={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function pt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=p(p({},ar),e),t=r.accept,n=r.disabled,i=r.getFilesFromEvent,u=r.maxSize,s=r.minSize,c=r.multiple,m=r.maxFiles,O=r.onDragEnter,E=r.onDragLeave,h=r.onDragOver,R=r.onDrop,I=r.onDropAccepted,k=r.onDropRejected,z=r.onFileDialogCancel,Z=r.onFileDialogOpen,De=r.useFsAccessApi,Oe=r.autoFocus,ee=r.preventDropOnDocument,Ae=r.noClick,re=r.noKeyboard,Ee=r.noDrag,w=r.noDragEventsBubbling,te=r.onError,L=r.validator,M=l.useMemo(function(){return Qr(t)},[t]),we=l.useMemo(function(){return Jr(t)},[t]),ne=l.useMemo(function(){return typeof Z=="function"?Z:Ge},[Z]),H=l.useMemo(function(){return typeof z=="function"?z:Ge},[z]),v=l.useRef(null),D=l.useRef(null),ur=l.useReducer(dt,be),Fe=de(ur,2),oe=Fe[0],y=Fe[1],cr=oe.isFocused,_e=oe.isFileDialogActive,B=l.useRef(typeof window<"u"&&window.isSecureContext&&De&&Vr()),xe=function(){!B.current&&_e&&setTimeout(function(){if(D.current){var a=D.current.files;a.length||(y({type:"closeDialog"}),H())}},300)};l.useEffect(function(){return window.addEventListener("focus",xe,!1),function(){window.removeEventListener("focus",xe,!1)}},[D,_e,H,B]);var x=l.useRef([]),je=function(a){v.current&&v.current.contains(a.target)||(a.preventDefault(),x.current=[])};l.useEffect(function(){return ee&&(document.addEventListener("dragover",Ue,!1),document.addEventListener("drop",je,!1)),function(){ee&&(document.removeEventListener("dragover",Ue),document.removeEventListener("drop",je))}},[v,ee]),l.useEffect(function(){return!n&&Oe&&v.current&&v.current.focus(),function(){}},[v,Oe,n]);var F=l.useCallback(function(o){te?te(o):console.error(o)},[te]),Pe=l.useCallback(function(o){o.preventDefault(),o.persist(),G(o),x.current=[].concat(ot(x.current),[o.target]),V(o)&&Promise.resolve(i(o)).then(function(a){if(!(Q(o)&&!w)){var d=a.length,g=d>0&&Ur({files:a,accept:M,minSize:s,maxSize:u,multiple:c,maxFiles:m,validator:L}),b=d>0&&!g;y({isDragAccept:g,isDragReject:b,isDragActive:!0,type:"setDraggedFiles"}),O&&O(o)}}).catch(function(a){return F(a)})},[i,O,F,w,M,s,u,c,m,L]),Te=l.useCallback(function(o){o.preventDefault(),o.persist(),G(o);var a=V(o);if(a&&o.dataTransfer)try{o.dataTransfer.dropEffect="copy"}catch{}return a&&h&&h(o),!1},[h,w]),Ce=l.useCallback(function(o){o.preventDefault(),o.persist(),G(o);var a=x.current.filter(function(g){return v.current&&v.current.contains(g)}),d=a.indexOf(o.target);d!==-1&&a.splice(d,1),x.current=a,!(a.length>0)&&(y({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),V(o)&&E&&E(o))},[v,E,w]),N=l.useCallback(function(o,a){var d=[],g=[];o.forEach(function(b){var $=rr(b,M),T=de($,2),ae=T[0],ue=T[1],ce=tr(b,s,u),q=de(ce,2),se=q[0],le=q[1],fe=L?L(b):null;if(ae&&se&&!fe)d.push(b);else{var pe=[ue,le];fe&&(pe=pe.concat(fe)),g.push({file:b,errors:pe.filter(function(pr){return pr})})}}),(!c&&d.length>1||c&&m>=1&&d.length>m)&&(d.forEach(function(b){g.push({file:b,errors:[Nr]})}),d.splice(0)),y({acceptedFiles:d,fileRejections:g,type:"setFiles"}),R&&R(d,g,a),g.length>0&&k&&k(g,a),d.length>0&&I&&I(d,a)},[y,c,M,s,u,m,R,I,k,L]),U=l.useCallback(function(o){o.preventDefault(),o.persist(),G(o),x.current=[],V(o)&&Promise.resolve(i(o)).then(function(a){Q(o)&&!w||N(a,o)}).catch(function(a){return F(a)}),y({type:"reset"})},[i,N,F,w]),j=l.useCallback(function(){if(B.current){y({type:"openDialog"}),ne();var o={multiple:c,types:we};window.showOpenFilePicker(o).then(function(a){return i(a)}).then(function(a){N(a,null),y({type:"closeDialog"})}).catch(function(a){Xr(a)?(H(a),y({type:"closeDialog"})):Zr(a)?(B.current=!1,D.current?(D.current.value=null,D.current.click()):F(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):F(a)});return}D.current&&(y({type:"openDialog"}),ne(),D.current.value=null,D.current.click())},[y,ne,H,De,N,F,we,c]),Se=l.useCallback(function(o){!v.current||!v.current.isEqualNode(o.target)||(o.key===" "||o.key==="Enter"||o.keyCode===32||o.keyCode===13)&&(o.preventDefault(),j())},[v,j]),Re=l.useCallback(function(){y({type:"focus"})},[]),Ie=l.useCallback(function(){y({type:"blur"})},[]),ke=l.useCallback(function(){Ae||(qr()?setTimeout(j,0):j())},[Ae,j]),P=function(a){return n?null:a},ie=function(a){return re?null:P(a)},Y=function(a){return Ee?null:P(a)},G=function(a){w&&a.stopPropagation()},sr=l.useMemo(function(){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o.refKey,d=a===void 0?"ref":a,g=o.role,b=o.onKeyDown,$=o.onFocus,T=o.onBlur,ae=o.onClick,ue=o.onDragEnter,ce=o.onDragOver,q=o.onDragLeave,se=o.onDrop,le=X(o,tt);return p(p(ye({onKeyDown:ie(A(b,Se)),onFocus:ie(A($,Re)),onBlur:ie(A(T,Ie)),onClick:P(A(ae,ke)),onDragEnter:Y(A(ue,Pe)),onDragOver:Y(A(ce,Te)),onDragLeave:Y(A(q,Ce)),onDrop:Y(A(se,U)),role:typeof g=="string"&&g!==""?g:"presentation"},d,v),!n&&!re?{tabIndex:0}:{}),le)}},[v,Se,Re,Ie,ke,Pe,Te,Ce,U,re,Ee,n]),lr=l.useCallback(function(o){o.stopPropagation()},[]),fr=l.useMemo(function(){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o.refKey,d=a===void 0?"ref":a,g=o.onChange,b=o.onClick,$=X(o,nt),T=ye({accept:M,multiple:c,type:"file",style:{display:"none"},onChange:P(A(g,U)),onClick:P(A(b,lr)),tabIndex:-1},d,D);return p(p({},T),$)}},[D,t,c,U,n]);return p(p({},oe),{},{isFocused:cr&&!n,getRootProps:sr,getInputProps:fr,rootRef:v,inputRef:D,open:P(j)})}function dt(e,r){switch(r.type){case"focus":return p(p({},e),{},{isFocused:!0});case"blur":return p(p({},e),{},{isFocused:!1});case"openDialog":return p(p({},be),{},{isFileDialogActive:!0});case"closeDialog":return p(p({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return p(p({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return p(p({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return p({},be);default:return e}}function Ge(){}export{pt as u};
