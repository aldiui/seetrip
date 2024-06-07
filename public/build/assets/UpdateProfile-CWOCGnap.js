import{r as I,W as D,R as e,I as P}from"./app-DCVUtIqw.js";import{u as R}from"./index-x-flaPXv.js";import{F as w}from"./BookmarkIcon-mAFX88TI.js";import{u as B}from"./chunk-6RSEZNRH-DWTnfycA.js";import{C as A,a as H}from"./chunk-YQO7BFFX-DXVB8yjZ.js";import{C as T}from"./chunk-2EW3JUUD-D0SPJ-En.js";import{H as L}from"./chunk-7OLJDQMT-Cv4BbNAv.js";import{F as i}from"./chunk-56K2BSAJ-3Mdre515.js";import{F as n,a as m}from"./chunk-H46NUPBZ-CO9d4yfX.js";import{B as U}from"./chunk-PULVB27S-DupAKUVl.js";import{I as s}from"./chunk-6CVSDS6C-DslWv91l.js";import{T as l}from"./chunk-2OOHT3W5-BlFa8Fv_.js";import{I as j}from"./chunk-QINAG4RG-CJmaY4ZB.js";import{C as N}from"./chunk-BDSTZZXD-ldmz08Vi.js";import{B as W}from"./chunk-UVUR7MCU-87Ltadkx.js";import"./index-BJ-EYT7Z.js";import"./tslib.es6-DjSP9Sqm.js";import"./chunk-X3PS6RUF-DEDFK66O.js";import"./chunk-SPIKMR6I-DpZJN6Nr.js";const le=({auth:p})=>{const u=B(),[E,c]=I.useState(null),{data:d,setData:a,post:b,processing:S,errors:t,clearErrors:x}=D({avatar:"",email:p.user.email,nama:p.user.nama,phone:p.user.phone}),F=(r,h)=>{if(h.length>0){h.forEach(o=>{o.errors.forEach(v=>{v.code==="file-too-large"?u({title:"Error",status:"error",description:"File is too large",duration:3e3,isClosable:!0,position:"top-right"}):v.code==="file-invalid-type"&&u({title:"Error",status:"error",description:"File is invalid type",duration:3e3,isClosable:!0,position:"top-right"})})}),c(null);return}const f=r[0];if(f){a("avatar",f);const o=new FileReader;o.onloadend=()=>{c(o.result)},o.readAsDataURL(f)}},{getRootProps:C,getInputProps:z,isDragActive:g}=R({onDrop:F,accept:"image/jpg,image/jpeg,image/png",maxSize:10*1024*1024,multiple:!1}),y=r=>{r.preventDefault(),b("/admin/profile",{preserveScroll:!0,onSuccess:()=>{a("avatar",""),c(null),x()}})};return e.createElement(A,{w:"full",p:2,h:"auto"},e.createElement(T,{pb:0},e.createElement(L,{size:"md",fontWeight:"bold"},"Ubah Profile")),e.createElement("form",{onSubmit:y},e.createElement(H,{pb:0},e.createElement(i,{mb:3,isInvalid:t.avatar},e.createElement(n,{htmlFor:"avatar",fontSize:"sm"},"Avatar"),e.createElement(U,{...C(),border:"2px dashed",borderColor:g?"blue.300":"gray.300",borderRadius:"md",p:10,textAlign:"center"},e.createElement(s,{...z()}),g?e.createElement(l,null,"Drop the files here ..."):e.createElement(l,null,"Drag 'n' drop some files here, or click to select files"),E&&e.createElement(j,{src:E,alt:"Preview",mt:4,borderRadius:"md",boxSize:"200px",objectFit:"cover"})),t.avatar&&e.createElement(m,{fontSize:"xs"},t.avatar)),e.createElement(i,{mb:3,isInvalid:t.nama},e.createElement(n,{htmlFor:"nama",fontSize:"sm"},"Nama"," ",e.createElement(l,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"text",id:"nama",value:d.nama,onChange:r=>a("nama",r.target.value)}),t.nama&&e.createElement(m,{fontSize:"xs"},t.nama)),e.createElement(i,{mb:3,isInvalid:t.email},e.createElement(n,{htmlFor:"email",fontSize:"sm"},"Email"," ",e.createElement(l,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"email",id:"email",value:d.email,onChange:r=>a("email",r.target.value)}),t.email&&e.createElement(m,{fontSize:"xs"},t.email)),e.createElement(i,{mb:3,isInvalid:t.phone},e.createElement(n,{htmlFor:"phone",fontSize:"sm"},"No HP"," ",e.createElement(l,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"text",id:"phone",value:d.phone,onChange:r=>a("phone",r.target.value)}),t.phone&&e.createElement(m,{fontSize:"xs"},t.phone))),e.createElement(N,null,e.createElement(W,{type:"submit",colorScheme:"blue",isLoading:S,loadingText:"Simpan"},e.createElement(P,{as:w,mr:2}),"Simpan"))))};export{le as default};