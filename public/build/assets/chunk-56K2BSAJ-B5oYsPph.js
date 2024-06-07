import{b as g,f as H,h as $,o as w,c as q,j as y,d as _,r as u,k as c,l as P,n as I}from"./app-JHr847d-.js";import{m as T}from"./chunk-UVUR7MCU-xK3lE66g.js";var[A,E]=g({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[M,S]=g({strict:!1,name:"FormControlContext"});function L(n){const{id:a,isRequired:t,isInvalid:l,isDisabled:e,isReadOnly:s,...m}=n,f=u.useId(),r=a||`field-${f}`,b=`${r}-label`,v=`${r}-feedback`,F=`${r}-helptext`,[C,x]=u.useState(!1),[p,h]=u.useState(!1),[i,k]=u.useState(!1),O=u.useCallback((o={},d=null)=>({id:F,...o,ref:T(d,R=>{R&&h(!0)})}),[F]),j=u.useCallback((o={},d=null)=>({...o,ref:d,"data-focus":c(i),"data-disabled":c(e),"data-invalid":c(l),"data-readonly":c(s),id:o.id!==void 0?o.id:b,htmlFor:o.htmlFor!==void 0?o.htmlFor:r}),[r,e,i,l,s,b]),D=u.useCallback((o={},d=null)=>({id:v,...o,ref:T(d,R=>{R&&x(!0)}),"aria-live":"polite"}),[v]),N=u.useCallback((o={},d=null)=>({...o,...m,ref:d,role:"group","data-focus":c(i),"data-disabled":c(e),"data-invalid":c(l),"data-readonly":c(s)}),[m,e,i,l,s]),B=u.useCallback((o={},d=null)=>({...o,ref:d,role:"presentation","aria-hidden":!0,children:o.children||"*"}),[]);return{isRequired:!!t,isInvalid:!!l,isReadOnly:!!s,isDisabled:!!e,isFocused:!!i,onFocus:()=>k(!0),onBlur:()=>k(!1),hasFeedbackText:C,setHasFeedbackText:x,hasHelpText:p,setHasHelpText:h,id:r,labelId:b,feedbackId:v,helpTextId:F,htmlProps:m,getHelpTextProps:O,getErrorMessageProps:D,getRootProps:N,getLabelProps:j,getRequiredIndicatorProps:B}}var z=H(function(a,t){const l=$("Form",a),e=w(a),{getRootProps:s,htmlProps:m,...f}=L(e),r=q("chakra-form-control",a.className);return y.jsx(M,{value:f,children:y.jsx(A,{value:l,children:y.jsx(_.div,{...s({},t),className:r,__css:l.container})})})});z.displayName="FormControl";var G=H(function(a,t){const l=S(),e=E(),s=q("chakra-form__helper-text",a.className);return y.jsx(_.div,{...l==null?void 0:l.getHelpTextProps(a,t),__css:e.helperText,className:s})});G.displayName="FormHelperText";function U(n){const{isDisabled:a,isInvalid:t,isReadOnly:l,isRequired:e,...s}=J(n);return{...s,disabled:a,readOnly:l,required:e,"aria-invalid":P(t),"aria-required":P(e),"aria-readonly":P(l)}}function J(n){var a,t,l;const e=S(),{id:s,disabled:m,readOnly:f,required:r,isRequired:b,isInvalid:v,isReadOnly:F,isDisabled:C,onFocus:x,onBlur:p,...h}=n,i=n["aria-describedby"]?[n["aria-describedby"]]:[];return e!=null&&e.hasFeedbackText&&(e!=null&&e.isInvalid)&&i.push(e.feedbackId),e!=null&&e.hasHelpText&&i.push(e.helpTextId),{...h,"aria-describedby":i.join(" ")||void 0,id:s??(e==null?void 0:e.id),isDisabled:(a=m??C)!=null?a:e==null?void 0:e.isDisabled,isReadOnly:(t=f??F)!=null?t:e==null?void 0:e.isReadOnly,isRequired:(l=r??b)!=null?l:e==null?void 0:e.isRequired,isInvalid:v??(e==null?void 0:e.isInvalid),onFocus:I(e==null?void 0:e.onFocus,x),onBlur:I(e==null?void 0:e.onBlur,p)}}export{z as F,E as a,U as b,S as u};
