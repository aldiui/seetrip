import{r as w,W as E,j as r,Y as R,I as x,a as A}from"./app-JHr847d-.js";import{A as T}from"./AdminLayout -Bc3andDT.js";import{u as B}from"./index-UU_FkMNk.js";import{C as L,a as P}from"./chunk-YQO7BFFX-DSZLBsX_.js";import{C as H}from"./chunk-BDSTZZXD-CYaIS77w.js";import{C as K}from"./chunk-2EW3JUUD-BnP4_yfU.js";import{H as W}from"./chunk-7OLJDQMT-AfpAcD5m.js";import{T as t}from"./chunk-2OOHT3W5-CSJh4K3n.js";import{B as k}from"./chunk-PULVB27S-H6C7mPE7.js";import{F as f}from"./chunk-56K2BSAJ-B5oYsPph.js";import{F as h,a as u}from"./chunk-H46NUPBZ-BOPC4Oho.js";import{I as g}from"./chunk-6CVSDS6C-DYEn1HBN.js";import{I as M}from"./chunk-QINAG4RG-D-h7J8oK.js";import{B as j}from"./chunk-UVUR7MCU-xK3lE66g.js";import{F as N}from"./BookmarkIcon-Bmpjnh4y.js";import{F as U}from"./ArrowLeftIcon-BQViQJlt.js";import{u as Y}from"./chunk-6RSEZNRH-Bc2GE4v1.js";import"./chunk-KRPLQIP4-D2gzZcl_.js";import"./ChevronDownIcon-vE-s4u4y.js";import"./chunk-7JBTTEVG-Dz6D23Ef.js";import"./chunk-3ASUQ6PA-DZHSwCkz.js";import"./chunk-5MKCW436-CDR3RVuy.js";import"./chunk-G72KV6MB-CldgvVEv.js";import"./chunk-V7PAE35Z-D4m-ilcb.js";import"./chunk-SPIKMR6I-BlSDUyza.js";import"./chunk-NABYTFTG-B-MaHP8x.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-CNmZlcmu.js";import"./index-DzKFyuGd.js";import"./chunk-X3PS6RUF-VuPBMW7K.js";const vr=({auth:b,sessions:v})=>{const s=Y(),[m,n]=w.useState(null),{data:F,setData:l,post:C,processing:y,errors:e}=E({nama:"",avatar:""}),S=o=>{o.preventDefault(),C("/admin/category")},I=(o,d)=>{if(d.length>0){d.forEach(a=>{a.errors.forEach(c=>{c.code==="file-too-large"?s({title:"Error",status:"error",description:"File is too large",duration:3e3,isClosable:!0,position:"top-right"}):c.code==="file-invalid-type"&&s({title:"Error",status:"error",description:"File is invalid type",duration:3e3,isClosable:!0,position:"top-right"})})}),n(null);return}const i=o[0];if(i){l("avatar",i);const a=new FileReader;a.onloadend=()=>{n(a.result)},a.readAsDataURL(i)}},{getRootProps:z,getInputProps:D,isDragActive:p}=B({onDrop:I,accept:"image/jpg,image/jpeg,image/png",maxSize:10*1024*1024,multiple:!1});return r.jsxs(T,{auth:b,sessions:v,children:[r.jsx(R,{title:"Tambah Kategori"}),r.jsxs(L,{maxW:"xl",w:"full",p:2,h:"auto",children:[r.jsx(K,{pb:0,children:r.jsx(W,{size:"md",fontWeight:"bold",children:"Tambah Kategori"})}),r.jsxs("form",{onSubmit:S,children:[r.jsxs(P,{pb:0,children:[r.jsxs(f,{mb:3,isInvalid:e.avatar,children:[r.jsxs(h,{htmlFor:"avatar",fontSize:"sm",children:["Avatar"," ",r.jsx(t,{display:"inline",color:"red",children:"*"})]}),r.jsxs(k,{...z(),border:"2px dashed",borderColor:p?"blue.300":"gray.300",borderRadius:"md",p:10,textAlign:"center",children:[r.jsx(g,{...D()}),p?r.jsx(t,{children:"Drop the files here ..."}):r.jsx(t,{children:"Drag 'n' drop some files here, or click to select files"}),m&&r.jsx(M,{src:m,alt:"Preview",mt:4,borderRadius:"md",boxSize:"200px",objectFit:"cover"})]}),e.avatar&&r.jsx(u,{fontSize:"xs",children:e.avatar})]}),r.jsxs(f,{mb:3,isInvalid:e.nama,children:[r.jsxs(h,{htmlFor:"nama",fontSize:"sm",children:["Nama",r.jsx(t,{display:"inline",color:"red",children:"*"})]}),r.jsx(g,{type:"text",id:"nama",value:F.nama,onChange:o=>l("nama",o.target.value)}),e.nama&&r.jsx(u,{fontSize:"xs",children:e.nama})]})]}),r.jsxs(H,{children:[r.jsxs(j,{type:"submit",colorScheme:"blue",isLoading:y,loadingText:"Simpan",children:[r.jsx(x,{as:N,mr:2}),"Simpan"]}),r.jsxs(j,{as:A,href:"/admin/category",colorScheme:"gray",ml:3,children:[r.jsx(x,{as:U,mr:2}),"Kembali"]})]})]})]})]})};export{vr as default};
