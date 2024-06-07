import{b as q,f as P,i as N,o as S,c as k,j as x,d as T,r as c,l as f,n as R,p as _}from"./app-DPnmQNMl.js";import{m as H}from"./chunk-UVUR7MCU-CmIpkDyX.js";var[E,M]=q({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[z,j]=q({strict:!1,name:"FormControlContext"});function L(n){const{id:l,isRequired:r,isInvalid:s,isDisabled:e,isReadOnly:a,...i}=n,m=c.useId(),o=l||`field-${m}`,b=`${o}-label`,v=`${o}-feedback`,F=`${o}-helptext`,[y,p]=c.useState(!1),[C,h]=c.useState(!1),[d,g]=c.useState(!1),D=c.useCallback((t={},u=null)=>({id:F,...t,ref:H(u,I=>{I&&h(!0)})}),[F]),w=c.useCallback((t={},u=null)=>({...t,ref:u,"data-focus":f(d),"data-disabled":f(e),"data-invalid":f(s),"data-readonly":f(a),id:t.id!==void 0?t.id:b,htmlFor:t.htmlFor!==void 0?t.htmlFor:o}),[o,e,d,s,a,b]),B=c.useCallback((t={},u=null)=>({id:v,...t,ref:H(u,I=>{I&&p(!0)}),"aria-live":"polite"}),[v]),$=c.useCallback((t={},u=null)=>({...t,...i,ref:u,role:"group","data-focus":f(d),"data-disabled":f(e),"data-invalid":f(s),"data-readonly":f(a)}),[i,e,d,s,a]),A=c.useCallback((t={},u=null)=>({...t,ref:u,role:"presentation","aria-hidden":!0,children:t.children||"*"}),[]);return{isRequired:!!r,isInvalid:!!s,isReadOnly:!!a,isDisabled:!!e,isFocused:!!d,onFocus:()=>g(!0),onBlur:()=>g(!1),hasFeedbackText:y,setHasFeedbackText:p,hasHelpText:C,setHasHelpText:h,id:o,labelId:b,feedbackId:v,helpTextId:F,htmlProps:i,getHelpTextProps:D,getErrorMessageProps:B,getRootProps:$,getLabelProps:w,getRequiredIndicatorProps:A}}var G=P(function(l,r){const s=N("Form",l),e=S(l),{getRootProps:a,htmlProps:i,...m}=L(e),o=k("chakra-form-control",l.className);return x.jsx(z,{value:m,children:x.jsx(E,{value:s,children:x.jsx(T.div,{...a({},r),className:o,__css:s.container})})})});G.displayName="FormControl";var J=P(function(l,r){const s=j(),e=M(),a=k("chakra-form__helper-text",l.className);return x.jsx(T.div,{...s==null?void 0:s.getHelpTextProps(l,r),__css:e.helperText,className:a})});J.displayName="FormHelperText";function K(n){const{isDisabled:l,isInvalid:r,isReadOnly:s,isRequired:e,...a}=Q(n);return{...a,disabled:l,readOnly:s,required:e,"aria-invalid":R(r),"aria-required":R(e),"aria-readonly":R(s)}}function Q(n){var l,r,s;const e=j(),{id:a,disabled:i,readOnly:m,required:o,isRequired:b,isInvalid:v,isReadOnly:F,isDisabled:y,onFocus:p,onBlur:C,...h}=n,d=n["aria-describedby"]?[n["aria-describedby"]]:[];return e!=null&&e.hasFeedbackText&&(e!=null&&e.isInvalid)&&d.push(e.feedbackId),e!=null&&e.hasHelpText&&d.push(e.helpTextId),{...h,"aria-describedby":d.join(" ")||void 0,id:a??(e==null?void 0:e.id),isDisabled:(l=i??y)!=null?l:e==null?void 0:e.isDisabled,isReadOnly:(r=m??F)!=null?r:e==null?void 0:e.isReadOnly,isRequired:(s=o??b)!=null?s:e==null?void 0:e.isRequired,isInvalid:v??(e==null?void 0:e.isInvalid),onFocus:_(e==null?void 0:e.onFocus,p),onBlur:_(e==null?void 0:e.onBlur,C)}}var O=P(function(l,r){const{htmlSize:s,...e}=l,a=N("Input",e),i=S(e),m=K(i),o=k("chakra-input",l.className);return x.jsx(T.input,{size:s,...m,__css:a.field,ref:r,className:o})});O.displayName="Input";O.id="Input";export{G as F,O as I,M as a,K as b,j as u};
