import{r as u,W as A,R as e,Y as B,I as E,a as L}from"./app-3Odire-T.js";import{A as P}from"./AdminLayout -0fvXA13D.js";import{u as T}from"./index-CZjuZILt.js";import{F as H}from"./BookmarkIcon-GSyqtshP.js";import{F as K}from"./ArrowLeftIcon-xJVWTFZT.js";import{u as W}from"./chunk-6RSEZNRH-BD34i_IK.js";import{C as j,a as $}from"./chunk-YQO7BFFX-BdmL8qxY.js";import{C as k}from"./chunk-2EW3JUUD-C_XrtELA.js";import{H as M}from"./chunk-7OLJDQMT-kbg6kqT2.js";import{F as g}from"./chunk-56K2BSAJ-BPq0NDO9.js";import{F as v,a as b}from"./chunk-H46NUPBZ-CRgL509U.js";import{B as N}from"./chunk-PULVB27S-CTIjzH3m.js";import{I as h}from"./chunk-6CVSDS6C-Ctyhvxut.js";import{T as n}from"./chunk-2OOHT3W5-jvLq-dWo.js";import{I as U}from"./chunk-QINAG4RG-C_c6frYu.js";import{C as Y}from"./chunk-BDSTZZXD-CjNSvfI7.js";import{B as F}from"./chunk-UVUR7MCU-Borvcg8V.js";import"./chunk-KRPLQIP4-CquhG98t.js";import"./ChevronDownIcon-C09jPcZj.js";import"./chunk-7JBTTEVG-kwzy4p7W.js";import"./chunk-3ASUQ6PA-DcOGRXbm.js";import"./chunk-5MKCW436-Bns4HBhr.js";import"./chunk-G72KV6MB-DYQCD1st.js";import"./chunk-V7PAE35Z-B2ixPV8u.js";import"./chunk-SPIKMR6I-6oXK8lhS.js";import"./chunk-NABYTFTG-B_RNDpTh.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-EoLC4Jpk.js";import"./UserCircleIcon-C4vZS2GI.js";import"./index-RFnZA3JM.js";import"./chunk-X3PS6RUF-GK1NC3fo.js";const Ce=({auth:x,sessions:C,category:r})=>{const s=W(),[l,m]=u.useState(null),{data:S,setData:p,post:I,processing:y,errors:t}=A({_method:"put",nama:r.nama,avatar:""});u.useEffect(()=>{r.avatar&&m(r.avatar)},[r.avatar]);const z=a=>{a.preventDefault(),I(`/admin/category/${r.uuid}`)},D=(a,d)=>{if(d.length>0){d.forEach(o=>{o.errors.forEach(f=>{f.code==="file-too-large"?s({title:"Error",status:"error",description:"File is too large",duration:3e3,isClosable:!0,position:"top-right"}):f.code==="file-invalid-type"&&s({title:"Error",status:"error",description:"File is invalid type",duration:3e3,isClosable:!0,position:"top-right"})})}),m(null);return}const i=a[0];if(i){p("avatar",i);const o=new FileReader;o.onloadend=()=>{m(o.result)},o.readAsDataURL(i)}},{getRootProps:R,getInputProps:w,isDragActive:c}=T({onDrop:D,accept:"image/jpg,image/jpeg,image/png",maxSize:10*1024*1024,multiple:!1});return e.createElement(P,{auth:x,sessions:C},e.createElement(B,{title:"Edit Kategori"}),e.createElement(j,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(k,{pb:0},e.createElement(M,{size:"md",fontWeight:"bold"},"Edit Kategori")),e.createElement("form",{onSubmit:z},e.createElement($,{pb:0},e.createElement(g,{mb:3,isInvalid:t.avatar},e.createElement(v,{htmlFor:"avatar",fontSize:"sm"},"Avatar"),e.createElement(N,{...R(),border:"2px dashed",borderColor:c?"blue.300":"gray.300",borderRadius:"md",p:10,textAlign:"center"},e.createElement(h,{...w()}),c?e.createElement(n,null,"Drop the files here ..."):e.createElement(n,null,"Drag 'n' drop some files here, or click to select files"),l&&e.createElement(U,{src:l,alt:"Preview",mt:4,borderRadius:"md",boxSize:"200px",objectFit:"cover"})),t.avatar&&e.createElement(b,{fontSize:"xs"},t.avatar)),e.createElement(g,{mb:3,isInvalid:t.nama},e.createElement(v,{htmlFor:"nama",fontSize:"sm"},"Nama",e.createElement(n,{display:"inline",color:"red"},"*")),e.createElement(h,{type:"text",id:"nama",value:S.nama,onChange:a=>p("nama",a.target.value)}),t.nama&&e.createElement(b,{fontSize:"xs"},t.nama))),e.createElement(Y,null,e.createElement(F,{type:"submit",colorScheme:"blue",isLoading:y,loadingText:"Simpan"},e.createElement(E,{as:H,mr:2}),"Simpan"),e.createElement(F,{as:L,href:"/admin/category",colorScheme:"gray",ml:3},e.createElement(E,{as:K,mr:2}),"Kembali")))))};export{Ce as default};