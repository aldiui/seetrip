import{r as R,W as w,R as e,Y as A,I as f,a as T}from"./app-3Odire-T.js";import{A as B}from"./AdminLayout -0fvXA13D.js";import{u as L}from"./index-CZjuZILt.js";import{C as P,a as H}from"./chunk-YQO7BFFX-BdmL8qxY.js";import{C as K}from"./chunk-BDSTZZXD-CjNSvfI7.js";import{C as W}from"./chunk-2EW3JUUD-C_XrtELA.js";import{H as j}from"./chunk-7OLJDQMT-kbg6kqT2.js";import{T as o}from"./chunk-2OOHT3W5-jvLq-dWo.js";import{B as k}from"./chunk-PULVB27S-CTIjzH3m.js";import{F as u}from"./chunk-56K2BSAJ-BPq0NDO9.js";import{F as g,a as E}from"./chunk-H46NUPBZ-CRgL509U.js";import{I as b}from"./chunk-6CVSDS6C-Ctyhvxut.js";import{I as M}from"./chunk-QINAG4RG-C_c6frYu.js";import{B as h}from"./chunk-UVUR7MCU-Borvcg8V.js";import{F as N}from"./BookmarkIcon-GSyqtshP.js";import{F as U}from"./ArrowLeftIcon-xJVWTFZT.js";import{u as Y}from"./chunk-6RSEZNRH-BD34i_IK.js";import"./chunk-KRPLQIP4-CquhG98t.js";import"./ChevronDownIcon-C09jPcZj.js";import"./chunk-7JBTTEVG-kwzy4p7W.js";import"./chunk-3ASUQ6PA-DcOGRXbm.js";import"./chunk-5MKCW436-Bns4HBhr.js";import"./chunk-G72KV6MB-DYQCD1st.js";import"./chunk-V7PAE35Z-B2ixPV8u.js";import"./chunk-SPIKMR6I-6oXK8lhS.js";import"./chunk-NABYTFTG-B_RNDpTh.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-EoLC4Jpk.js";import"./UserCircleIcon-C4vZS2GI.js";import"./index-RFnZA3JM.js";import"./chunk-X3PS6RUF-GK1NC3fo.js";const xe=({auth:v,sessions:F})=>{const i=Y(),[n,l]=R.useState(null),{data:x,setData:s,post:C,processing:y,errors:t}=w({nama:"",avatar:""}),S=r=>{r.preventDefault(),C("/admin/category")},I=(r,c)=>{if(c.length>0){c.forEach(a=>{a.errors.forEach(d=>{d.code==="file-too-large"?i({title:"Error",status:"error",description:"File is too large",duration:3e3,isClosable:!0,position:"top-right"}):d.code==="file-invalid-type"&&i({title:"Error",status:"error",description:"File is invalid type",duration:3e3,isClosable:!0,position:"top-right"})})}),l(null);return}const m=r[0];if(m){s("avatar",m);const a=new FileReader;a.onloadend=()=>{l(a.result)},a.readAsDataURL(m)}},{getRootProps:z,getInputProps:D,isDragActive:p}=L({onDrop:I,accept:"image/jpg,image/jpeg,image/png",maxSize:10*1024*1024,multiple:!1});return e.createElement(B,{auth:v,sessions:F},e.createElement(A,{title:"Tambah Kategori"}),e.createElement(P,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(W,{pb:0},e.createElement(j,{size:"md",fontWeight:"bold"},"Tambah Kategori")),e.createElement("form",{onSubmit:S},e.createElement(H,{pb:0},e.createElement(u,{mb:3,isInvalid:t.avatar},e.createElement(g,{htmlFor:"avatar",fontSize:"sm"},"Avatar"," ",e.createElement(o,{display:"inline",color:"red"},"*")),e.createElement(k,{...z(),border:"2px dashed",borderColor:p?"blue.300":"gray.300",borderRadius:"md",p:10,textAlign:"center"},e.createElement(b,{...D()}),p?e.createElement(o,null,"Drop the files here ..."):e.createElement(o,null,"Drag 'n' drop some files here, or click to select files"),n&&e.createElement(M,{src:n,alt:"Preview",mt:4,borderRadius:"md",boxSize:"200px",objectFit:"cover"})),t.avatar&&e.createElement(E,{fontSize:"xs"},t.avatar)),e.createElement(u,{mb:3,isInvalid:t.nama},e.createElement(g,{htmlFor:"nama",fontSize:"sm"},"Nama",e.createElement(o,{display:"inline",color:"red"},"*")),e.createElement(b,{type:"text",id:"nama",value:x.nama,onChange:r=>s("nama",r.target.value)}),t.nama&&e.createElement(E,{fontSize:"xs"},t.nama))),e.createElement(K,null,e.createElement(h,{type:"submit",colorScheme:"blue",isLoading:y,loadingText:"Simpan"},e.createElement(f,{as:N,mr:2}),"Simpan"),e.createElement(h,{as:T,href:"/admin/category",colorScheme:"gray",ml:3},e.createElement(f,{as:U,mr:2}),"Kembali")))))};export{xe as default};